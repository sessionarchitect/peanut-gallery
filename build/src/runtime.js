import { h, render, Component } from 'preact';

const defs = {};
const classes = {};
let navigate = () => {};

export function setNavigator(fn) { navigate = fn; }

const LIT = { true: true, false: false, null: null, undefined: undefined };
function lookup(path, scope) {
  const p = path.trim();
  if (p in LIT) return LIT[p];
  if (/^-?\d+(\.\d+)?$/.test(p)) return Number(p);
  if (/^'.*'$|^".*"$/.test(p)) return p.slice(1, -1);
  let v = scope;
  for (const k of p.split('.')) { if (v == null) return undefined; v = v[k]; }
  return v;
}
const WHOLE = /^\s*\{\{\s*([^}]+?)\s*\}\}\s*$/;
const HOLE = /\{\{\s*([^}]+?)\s*\}\}/g;
function interp(str, scope) {
  const m = str.match(WHOLE);
  if (m) return lookup(m[1], scope);
  if (str.indexOf('{{') < 0) return str;
  return str.replace(HOLE, (_, p) => { const v = lookup(p, scope); return v == null ? '' : String(v); });
}

function compile(html) {
  const tpl = document.createElement('template');
  tpl.innerHTML = html;
  const walk = (node) => {
    const out = [];
    node.childNodes.forEach((c) => {
      if (c.nodeType === 3) {
        const v = c.nodeValue;
        if (/^\s*$/.test(v) && v.indexOf('\n') >= 0) return;
        out.push({ t: 'text', v });
      } else if (c.nodeType === 1) {
        const attrs = [];
        for (const a of c.attributes) attrs.push([a.name, a.value]);
        out.push({ t: 'el', tag: c.localName, attrs, kids: walk(c.localName === 'template' ? c.content : c) });
      }
    });
    return out;
  };
  return walk(tpl.content);
}

const BOOL = { disabled: 1, checked: 1, selected: 1, hidden: 1, autofocus: 1 };
function camel(s) { return s.replace(/-([a-z])/g, (_, c) => c.toUpperCase()); }

function renderNodes(nodes, scope) {
  const out = [];
  for (const n of nodes) {
    const r = renderNode(n, scope);
    if (Array.isArray(r)) out.push(...r); else if (r != null) out.push(r);
  }
  return out;
}
function attr(n, name) { const a = n.attrs.find((x) => x[0] === name); return a ? a[1] : null; }

function renderNode(n, scope) {
  if (n.t === 'text') { const v = interp(n.v, scope); return v == null ? null : String(v); }
  if (n.tag === 'sc-if') return lookup((attr(n, 'value') || '').replace(/^\s*\{\{|\}\}\s*$/g, ''), scope) ? renderNodes(n.kids, scope) : null;
  if (n.tag === 'sc-for') {
    const list = interp(attr(n, 'list') || '', scope) || [];
    const as = attr(n, 'as') || 'item';
    const out = [];
    list.forEach((item, i) => { const s = Object.create(scope); s[as] = item; s.$index = i; out.push(...renderNodes(n.kids, s)); });
    return out;
  }
  if (n.tag === 'helmet') return null;
  if (n.tag === 'dc-import') {
    const name = attr(n, 'name');
    const K = classes[name];
    if (!K) return null;
    const props = {};
    for (const [k, v] of n.attrs) { if (k === 'name' || k.startsWith('hint-')) continue; props[camel(k)] = interp(v, scope); }
    return h(K, props);
  }
  const props = {};
  for (const [k, raw] of n.attrs) {
    if (k.startsWith('hint-')) continue;
    let v = interp(raw, scope);
    if (k.startsWith('on')) { if (typeof v === 'function') props[k] = v; continue; }
    if (BOOL[k] && v === '') v = true;
    if (k === 'href' && typeof v === 'string' && /\.dc\.html$/.test(v)) {
      const target = v.replace(/^.*\//, '').replace(/\.dc\.html$/, '');
      props.href = '#/' + target;
      props.onClick = (e) => { e.preventDefault(); navigate(target); };
      continue;
    }
    props[k] = v;
  }
  return h(n.tag, props, ...renderNodes(n.kids, scope));
}

export class DCLogic extends Component {
  render() {
    const vals = this.renderVals ? this.renderVals() : {};
    const scope = Object.assign(Object.create(null), vals);
    return h('div', { 'data-dc': this.__dcName, style: 'display: contents' }, ...renderNodes(this.__dcTree, scope));
  }
}

export function define(name, def) {
  defs[name] = def;
  const K = def.logic(DCLogic);
  K.prototype.__dcName = name;
  Object.defineProperty(K.prototype, '__dcTree', { get() { return def.__tree || (def.__tree = compile(def.template)); } });
  classes[name] = K;
  return K;
}
export function get(name) { return classes[name]; }
export { h, render, Component };
