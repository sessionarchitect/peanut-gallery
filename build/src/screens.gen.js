import { define } from './runtime.js';
define("Main", { template: "\n\n<div style=\"width: 100%; height: 100vh; height: 100dvh; box-sizing: border-box; display: flex; flex-direction: column; overflow: hidden; font-family: 'Roboto Flex', sans-serif; background-color: {{t.bg}}; color: {{t.text}}\">\n<div style=\"flex-grow: 1; min-height: 0; overflow-y: auto; display: flex; flex-direction: column; gap: 24px; padding: 26px 18px 24px 18px\">\n<header class=\"in\" style=\"display: flex; align-items: flex-start; justify-content: space-between; gap: 12px\">\n<div style=\"display: flex; flex-direction: column; gap: 6px\">\n<span style=\"font-size: 36px; line-height: 0.98; font-weight: 860; font-variation-settings: 'wdth' 130; letter-spacing: -0.025em\">Peanut<br>Gallery</span>\n<span style=\"font-size: 14px; color: {{t.muted}}\">You're a fly on the wall in 5 chats.</span>\n</div>\n<a href=\"Builder.dc.html\" class=\"ibtn\" aria-label=\"Listening controls\" style=\"width: 48px; height: 48px; flex-shrink: 0; border-radius: 24px; display: flex; align-items: center; justify-content: center; background-color: {{t.s2}}; color: {{t.text}}\">\n<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M4 7h10M18 7h2M4 17h4M12 17h8\"></path><circle cx=\"16\" cy=\"7\" r=\"2\"></circle><circle cx=\"10\" cy=\"17\" r=\"2\"></circle></svg>\n</a>\n</header>\n<a href=\"Arena.dc.html\" class=\"hero in\" style=\"display: flex; flex-direction: column; gap: 16px; padding: 20px; border-radius: 32px; text-decoration: none; background-color: {{hero.bg}}; color: {{t.text}}; animation-delay: .06s\">\n<div style=\"display: flex; align-items: center; justify-content: space-between\">\n<span style=\"display: flex; align-items: center; gap: 8px; height: 28px; padding: 0 12px; border-radius: 14px; font-size: 11.5px; font-weight: 800; letter-spacing: 0.08em; background-color: {{t.bg}}; color: {{t.accentText}}\"><span class=\"live\" style=\"width: 8px; height: 8px; border-radius: 4px; background-color: {{t.accent}}\"></span>LISTENING NOW</span>\n<span style=\"font-size: 12px; font-weight: 600; color: {{t.muted}}\">1h 12m of drama</span>\n</div>\n<div style=\"display: flex; align-items: center; gap: 14px\">\n<div class=\"stack\" style=\"display: flex; flex-shrink: 0\">\n<sc-for list=\"{{hero.faces}}\" as=\"fc\" hint-placeholder-count=\"3\">\n<span style=\"width: 52px; height: 52px; margin-right: -12px; display: flex; align-items: center; justify-content: center; background-color: {{hero.ring}}; clip-path: {{fc.shape}}\"><span style=\"width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; font-weight: 850; font-size: 16px; color: #1B1E22; background-color: {{fc.color}}; clip-path: {{fc.shape}}\">{{fc.initial}}</span></span>\n</sc-for>\n</div>\n<div style=\"display: flex; flex-direction: column; gap: 4px; min-width: 0; padding-left: 14px\">\n<span style=\"font-size: 23px; font-weight: 820; font-variation-settings: 'wdth' 115; letter-spacing: -0.015em\">Henderson Family</span>\n<span style=\"font-size: 14px; line-height: 1.4; color: {{t.muted}}\">Grandma: “There was a casserole. And I'd do it again.” 😇</span>\n</div>\n</div>\n<div style=\"display: flex; align-items: center; justify-content: space-between; gap: 14px\">\n<div style=\"display: flex; flex-direction: column; gap: 6px; flex-grow: 1; min-width: 0\">\n<span style=\"display: flex; align-items: center; gap: 8px; font-size: 12.5px; font-weight: 650; color: {{t.muted}}\"><span class=\"dots\" style=\"display: flex; gap: 3px; color: {{t.accentText}}\"><span></span><span></span><span></span></span>Dad has been typing for 4 minutes</span>\n<svg width=\"100%\" height=\"14\" viewBox=\"0 0 220 14\" preserveAspectRatio=\"none\" aria-hidden=\"true\">\n<defs><clipPath id=\"pgwclip\"><rect x=\"0\" y=\"0\" width=\"156\" height=\"14\"></rect></clipPath></defs>\n<g clip-path=\"url(#pgwclip)\"><path class=\"wavy\" d=\"M0 7 Q6 1 12 7 T24 7 T36 7 T48 7 T60 7 T72 7 T84 7 T96 7 T108 7 T120 7 T132 7 T144 7 T156 7 T168 7 T180 7 T192 7 T204 7\" fill=\"none\" stroke=\"{{t.accent}}\" stroke-width=\"3.5\" stroke-linecap=\"round\"></path></g>\n<path d=\"M164 7 H220\" fill=\"none\" stroke=\"{{t.trackOff}}\" stroke-width=\"3.5\" stroke-linecap=\"round\"></path>\n</svg>\n<span style=\"font-size: 11px; font-weight: 750; letter-spacing: 0.08em; color: {{t.muted}}\">DRAMA LEVEL · SIMMERING</span>\n</div>\n<span class=\"fab\" style=\"width: 64px; height: 64px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; background-color: {{t.accent}}; color: {{t.accentInk}}; clip-path: {{hero.fab}}\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M8 5.5v13l10.5-6.5z\"></path></svg></span>\n</div>\n</a>\n<section class=\"in\" style=\"display: flex; flex-direction: column; gap: 14px; animation-delay: .12s\">\n<div style=\"display: flex; align-items: baseline; justify-content: space-between\">\n<h2 style=\"margin: 0; font-size: 20px; font-weight: 800; font-variation-settings: 'wdth' 115\">Fresh tea</h2>\n<a href=\"Verdict.dc.html\" class=\"link\" style=\"font-size: 13px; font-weight: 700; text-decoration: none; color: {{t.accentText}}\">See how it connects</a>\n</div>\n<div style=\"display: flex; gap: 14px; overflow-x: auto; margin: 0 -18px; padding: 12px 18px 12px 18px\">\n<sc-for list=\"{{teas}}\" as=\"tc\" hint-placeholder-count=\"3\">\n<a href=\"Verdict.dc.html\" class=\"tea\" style=\"position: relative; flex-shrink: 0; width: 214px; display: flex; flex-direction: column; gap: 10px; padding: 18px 16px 16px 16px; border-radius: 22px; text-decoration: none; background-color: {{t.s2}}; color: {{t.text}}; transform: rotate({{tc.rot}}); box-shadow: 0 6px 16px rgba(0,0,0,0.12)\">\n<span aria-hidden=\"true\" style=\"position: absolute; top: -8px; left: 50%; width: 56px; height: 16px; margin-left: -28px; border-radius: 3px; transform: rotate({{tc.tapeRot}}); background-color: {{t.tape}}\"></span>\n<span style=\"align-self: flex-start; display: flex; align-items: center; gap: 6px; height: 24px; padding: 0 10px 0 4px; border-radius: 12px; font-size: 10.5px; font-weight: 800; letter-spacing: 0.06em; background-color: {{tc.chipBg}}; color: {{t.text}}\"><span style=\"width: 16px; height: 16px; background-color: {{tc.color}}; clip-path: {{tc.shape}}\"></span>{{tc.label}}</span>\n<span style=\"font-size: 15px; font-weight: 620; line-height: 1.36\">{{tc.text}}</span>\n</a>\n</sc-for>\n</div>\n</section>\n<section class=\"in\" style=\"display: flex; flex-direction: column; gap: 12px; animation-delay: .18s\">\n<h2 style=\"margin: 0; font-size: 20px; font-weight: 800; font-variation-settings: 'wdth' 115\">All chats</h2>\n<div style=\"display: flex; flex-direction: column; gap: 3px\">\n<sc-for list=\"{{chats}}\" as=\"c\" hint-placeholder-count=\"5\">\n<div class=\"row\" style=\"display: flex; align-items: center; gap: 12px; padding: 12px 8px 12px 12px; border-radius: {{c.radius}}; background-color: {{t.s1}}; opacity: {{c.opacity}}\">\n<a href=\"Arena.dc.html\" style=\"flex-grow: 1; min-width: 0; display: flex; align-items: center; gap: 12px; text-decoration: none; color: {{t.text}}\">\n<span class=\"av\" style=\"width: 50px; height: 50px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-weight: 850; font-size: 14px; color: #1B1E22; background-color: {{c.color}}; clip-path: {{c.shape}}\">{{c.mono}}</span>\n<span style=\"display: flex; flex-direction: column; gap: 4px; min-width: 0; flex-grow: 1\">\n<span style=\"display: flex; align-items: center; justify-content: space-between; gap: 8px\">\n<span style=\"font-size: 16px; font-weight: 720; white-space: nowrap; overflow: hidden; text-overflow: ellipsis\">{{c.name}}</span>\n<span style=\"flex-shrink: 0; font-size: 12px; font-weight: 600; color: {{c.statusColor}}\">{{c.status}}</span>\n</span>\n<span style=\"display: flex; align-items: center; justify-content: space-between; gap: 8px\">\n<span style=\"font-size: 13.5px; line-height: 1.35; color: {{t.muted}}; white-space: nowrap; overflow: hidden; text-overflow: ellipsis\">{{c.preview}}</span>\n<sc-if value=\"{{c.hasUnread}}\" hint-placeholder-val=\"{{false}}\"><span style=\"flex-shrink: 0; min-width: 22px; height: 22px; padding: 0 7px; box-sizing: border-box; border-radius: 11px; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 850; background-color: {{t.accent}}; color: {{t.accentInk}}\">{{c.unread}}</span></sc-if>\n</span>\n</span>\n</a>\n<button class=\"bell\" onClick=\"{{c.toggle}}\" aria-pressed=\"{{c.pressed}}\" aria-label=\"{{c.label}}\" style=\"width: 44px; height: 44px; flex-shrink: 0; border-radius: 22px; border: none; display: flex; align-items: center; justify-content: center; background-color: {{c.bellBg}}; color: {{c.bellFg}}\">\n<sc-if value=\"{{c.muted}}\" hint-placeholder-val=\"{{false}}\">\n<svg width=\"19\" height=\"19\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M6 8a6 6 0 0 1 10.5-4\"></path><path d=\"M18 9v4l2 3H8\"></path><path d=\"M10 20a2 2 0 0 0 4 0\"></path><path d=\"M3 3l18 18\"></path></svg>\n</sc-if>\n<sc-if value=\"{{c.unmuted}}\" hint-placeholder-val=\"{{true}}\">\n<svg width=\"19\" height=\"19\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M6 9a6 6 0 0 1 12 0v4l2 3H4l2-3z\"></path><path d=\"M10 20a2 2 0 0 0 4 0\"></path></svg>\n</sc-if>\n</button>\n</div>\n</sc-for>\n</div>\n</section>\n</div>\n<nav class=\"nav\" aria-label=\"Main\" style=\"display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); height: 80px; flex-shrink: 0; background-color: {{t.s1}}\">\n<a href=\"Main.dc.html\" aria-current=\"page\" style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; text-decoration: none; font-size: 12px; font-weight: 760; color: {{t.text}}\">\n<span class=\"pill\" style=\"width: 64px; height: 32px; border-radius: 16px; display: flex; align-items: center; justify-content: center; background-color: {{t.accentSoft}}; color: {{t.accentText}}\"><svg width=\"21\" height=\"21\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M4 5h16v11H9l-5 4z\"></path></svg></span>\nChats\n</a>\n<a href=\"Verdict.dc.html\" style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; text-decoration: none; font-size: 12px; font-weight: 600; opacity: 0.72; color: {{t.text}}\">\n<span class=\"pill\" style=\"width: 64px; height: 32px; display: flex; align-items: center; justify-content: center\"><svg width=\"21\" height=\"21\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 9h12v5a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5z\"></path><path d=\"M17 11h1.5a2.5 2.5 0 0 1 0 5H17\"></path><path d=\"M9 3c0 1.5 1 1.5 1 3M13 3c0 1.5 1 1.5 1 3\"></path></svg></span>\nThe Tea\n</a>\n<a href=\"Builder.dc.html\" style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; text-decoration: none; font-size: 12px; font-weight: 600; opacity: 0.72; color: {{t.text}}\">\n<span class=\"pill\" style=\"width: 64px; height: 32px; display: flex; align-items: center; justify-content: center\"><svg width=\"21\" height=\"21\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M4 7h10M18 7h2M4 17h4M12 17h8\"></path><circle cx=\"16\" cy=\"7\" r=\"2\"></circle><circle cx=\"10\" cy=\"17\" r=\"2\"></circle></svg></span>\nControls\n</a>\n</nav>\n</div>\n", logic: function (DCLogic) {

var THEMES = {
  Night: { night: true, bg: '#111418', s1: '#191D22', s2: '#20252B', s3: '#283039', text: '#ECEEF0', muted: '#9BA4AE', accent: '#9CCFBE', accentInk: '#0F1D19', accentSoft: '#1F2F2A', accentText: '#A8DCCB', tape: 'rgba(232,213,143,0.55)', trackOff: '#3A434D' },
  Day: { night: false, bg: '#F4F2EE', s1: '#FFFFFF', s2: '#EFECE6', s3: '#E6E2DA', text: '#22262B', muted: '#5C626A', accent: '#2F7563', accentInk: '#FFFFFF', accentSoft: '#D7EAE3', accentText: '#255E50', tape: 'rgba(214,190,110,0.55)', trackOff: '#D3CFC6' }
};
var SHAPE_FN = {
  circle: function () { return 0.5; },
  cookie: function (t) { return 0.5 * (1 + 0.07 * Math.cos(9 * (t + Math.PI / 2))); },
  clover: function (t) { return 0.5 * (1 + 0.2 * Math.cos(4 * t)); },
  sunny: function (t) { return 0.5 * (1 + 0.05 * Math.cos(8 * t)); },
  flower: function (t) { return 0.5 * (1 + 0.12 * Math.cos(6 * t)); },
  gem: function (t) { return 0.5 * (1 + 0.06 * Math.cos(6 * t + Math.PI)); },
  burst: function (t) { return 0.5 * (1 + 0.085 * Math.cos(12 * t)); },
  squircle: function (t) { var c = Math.abs(Math.cos(t)), s = Math.abs(Math.sin(t)); return 0.5 / Math.pow(Math.pow(c, 4) + Math.pow(s, 4), 0.25); }
};
var SHAPE_CACHE = {};
function shape(k) {
  if (SHAPE_CACHE[k]) { return SHAPE_CACHE[k]; }
  var f = SHAPE_FN[k] || SHAPE_FN.circle, pts = [], n = 56, i;
  for (i = 0; i < n; i++) { var a = 2 * Math.PI * i / n - Math.PI / 2, r = f(a); pts.push([0.5 + r * Math.cos(a), 0.5 + r * Math.sin(a)]); }
  var xs = pts.map(function (p) { return p[0]; }), ys = pts.map(function (p) { return p[1]; });
  var mnx = Math.min.apply(null, xs), mxx = Math.max.apply(null, xs), mny = Math.min.apply(null, ys), mxy = Math.max.apply(null, ys);
  var sc = 1 / Math.max(mxx - mnx, mxy - mny), cx = (mnx + mxx) / 2, cy = (mny + mxy) / 2;
  SHAPE_CACHE[k] = 'polygon(' + pts.map(function (p) { return ((0.5 + (p[0] - cx) * sc) * 100).toFixed(1) + '% ' + ((0.5 + (p[1] - cy) * sc) * 100).toFixed(1) + '%'; }).join(',') + ')';
  return SHAPE_CACHE[k];
}
function hexRgb(h) { var n = parseInt(h.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; }
function tint(h, a) { var c = hexRgb(h); return 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + a + ')'; }
function mix(h, bg, a) { var c = hexRgb(h), b = hexRgb(bg); return 'rgb(' + [0, 1, 2].map(function (i) { return Math.round(c[i] * a + b[i] * (1 - a)); }).join(',') + ')'; }
var CHATS = [
  { id: 'family', name: 'Henderson Family', mono: 'HF', color: '#E8B79E', sh: 'cookie', status: 'typing', unread: 0, preview: 'Grandma June: 📷 Mr. Biscuits wanted to say hello 🐈' },
  { id: 'office', name: 'Q3 Synergy Task Force', mono: 'Q3', color: '#C9C4B5', sh: 'squircle', status: '2m', unread: 3, preview: 'Gary: 📅 Quick sync (casual) · Fri 4:55–6:25 PM' },
  { id: 'hoa', name: 'Lakeview HOA (Official)', mono: 'HOA', color: '#A7C7C2', sh: 'gem', status: '14m', unread: 0, preview: 'Barb: 📷 Meet Gerald, our newest watch volunteer 📹' },
  { id: 'book', name: 'Book Club (We Don’t Read)', mono: 'BC', color: '#D9A3B0', sh: 'flower', status: '1h', unread: 2, preview: 'Grandma June: 🎤 Voice note · Fern, your crystal is fake' },
  { id: 'er', name: 'Night Shift, Bay 4', mono: 'ER', color: '#9DBFA8', sh: 'clover', status: '3h', unread: 1, preview: 'Mia: 📷 fork guy. 4th time this month 🍴' }
];
var TEAS = [
  { label: 'FAMILY × OFFICE', color: '#E6D58F', sh: 'burst', rot: '-1.6deg', tapeRot: '4deg', text: 'Tyler told the family he’s “basically a VP.” His mom does payroll at his office. 💼' },
  { label: 'FAMILY × HOA', color: '#A7C7C2', sh: 'gem', rot: '1.3deg', tapeRot: '-3deg', text: 'Nobody will explain the 1997 casserole. Barb still brings it up. 🥘' },
  { label: 'OFFICE × BOOK CLUB', color: '#D9A3B0', sh: 'flower', rot: '-0.8deg', tapeRot: '2deg', text: 'Gary’s wife is in the book club. The book club is about Gary. 📚' },
  { label: 'ER × HOA', color: '#9DBFA8', sh: 'clover', rot: '1.6deg', tapeRot: '-5deg', text: 'Gary parked in the ER’s ambulance bay. Gerald the gnome already knows. 🚑' }
];
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { muted: { hoa: true } };
  }
  renderVals() {
    var self = this;
    var t = THEMES[this.props.theme] || THEMES.Night;
    var heroBg = mix('#E8B79E', t.bg, t.night ? 0.16 : 0.3);
    var faces = [['L', '#E8B79E', 'cookie'], ['J', '#B8A9D9', 'flower'], ['T', '#E6D58F', 'burst']].map(function (f) { return { initial: f[0], color: f[1], shape: shape(f[2]) }; });
    var chats = CHATS.map(function (c, i) {
      var m = !!self.state.muted[c.id];
      var first = i === 0, last = i === CHATS.length - 1;
      return {
        name: c.name, mono: c.mono, color: c.color, shape: shape(c.sh),
        radius: first ? '28px 28px 8px 8px' : last ? '8px 8px 28px 28px' : '8px',
        status: m ? 'muted' : c.status === 'typing' ? 'typing…' : c.status,
        statusColor: c.status === 'typing' && !m ? t.accentText : t.muted,
        preview: c.preview,
        unread: c.unread, hasUnread: !m && c.unread > 0,
        opacity: m ? 0.55 : 1,
        muted: m, unmuted: !m,
        bellBg: m ? t.s3 : 'transparent', bellFg: m ? t.text : t.muted,
        pressed: m ? 'true' : 'false',
        label: (m ? 'Unmute ' : 'Mute ') + c.name,
        toggle: function () { var o = Object.assign({}, self.state.muted); o[c.id] = !m; self.setState({ muted: o }); }
      };
    });
    var teas = TEAS.map(function (x) {
      return { label: x.label, text: x.text, color: x.color, shape: shape(x.sh), rot: x.rot, tapeRot: x.tapeRot, chipBg: tint(x.color, t.night ? 0.22 : 0.4) };
    });
    return { t: t, hero: { bg: heroBg, ring: heroBg, faces: faces, fab: shape('cookie') }, chats: chats, teas: teas };
  }
}

return Component;
} });
define("Arena", { template: "\n\n<div style=\"position: relative; width: 100%; height: 100vh; height: 100dvh; box-sizing: border-box; display: flex; flex-direction: column; overflow: hidden; font-family: 'Roboto Flex', sans-serif; background-color: {{t.bg}}; color: {{t.text}}\">\n<header style=\"display: flex; align-items: center; gap: 10px; padding: 16px 12px 10px 8px; flex-shrink: 0\">\n<a href=\"Main.dc.html\" class=\"ibtn back\" aria-label=\"Back to all chats\" style=\"width: 44px; height: 44px; flex-shrink: 0; border-radius: 22px; display: flex; align-items: center; justify-content: center; color: {{t.text}}\">\n<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M15 5l-7 7 7 7\"></path></svg>\n</a>\n<span style=\"width: 44px; height: 44px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 13px; color: #1B1E22; background-color: {{chat.color}}; clip-path: {{chat.shape}}\">{{chat.mono}}</span>\n<div style=\"display: flex; flex-direction: column; gap: 2px; min-width: 0; flex-grow: 1\">\n<span style=\"font-size: 18px; font-weight: 760; font-variation-settings: 'wdth' 112; letter-spacing: -0.01em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis\">{{chat.name}}</span>\n<span style=\"display: flex; align-items: center; gap: 6px; font-size: 12px; white-space: nowrap; overflow: hidden; color: {{headColor}}\"><span class=\"live\" style=\"width: 7px; height: 7px; flex-shrink: 0; border-radius: 4px; background-color: {{liveColor}}\"></span><span style=\"overflow: hidden; text-overflow: ellipsis\">{{headLine}}</span></span>\n</div>\n<a href=\"Media.dc.html\" class=\"ibtn\" aria-label=\"Shared photos\" style=\"width: 44px; height: 44px; flex-shrink: 0; border-radius: 22px; display: flex; align-items: center; justify-content: center; background-color: {{t.s2}}; color: {{t.text}}\">\n<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"3\"></rect><circle cx=\"9\" cy=\"10\" r=\"1.8\"></circle><path d=\"M21 16l-5-5-8 8\"></path></svg>\n</a>\n<button class=\"ibtn\" onClick=\"{{toggleMute}}\" aria-pressed=\"{{mutePressed}}\" aria-label=\"{{muteLabel}}\" style=\"width: 44px; height: 44px; flex-shrink: 0; border-radius: 22px; border: none; display: flex; align-items: center; justify-content: center; cursor: pointer; background-color: {{muteBg}}; color: {{muteColor}}\">\n<sc-if value=\"{{muted}}\" hint-placeholder-val=\"{{false}}\">\n<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M6 8a6 6 0 0 1 10.5-4\"></path><path d=\"M18 9v4l2 3H8\"></path><path d=\"M10 20a2 2 0 0 0 4 0\"></path><path d=\"M3 3l18 18\"></path></svg>\n</sc-if>\n<sc-if value=\"{{unmuted}}\" hint-placeholder-val=\"{{true}}\">\n<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M6 9a6 6 0 0 1 12 0v4l2 3H4l2-3z\"></path><path d=\"M10 20a2 2 0 0 0 4 0\"></path></svg>\n</sc-if>\n</button>\n</header>\n<div role=\"tablist\" aria-label=\"Chats you're listening to\" style=\"display: flex; gap: 6px; overflow-x: auto; padding: 2px 14px 12px 14px; flex-shrink: 0\">\n<sc-for list=\"{{tabs}}\" as=\"tb\" hint-placeholder-count=\"5\">\n<button role=\"tab\" class=\"tab\" aria-selected=\"{{tb.selected}}\" onClick=\"{{tb.pick}}\" style=\"flex-shrink: 0; display: flex; align-items: center; gap: 8px; height: 40px; padding: 0 14px 0 8px; border-radius: 20px; border: none; font-size: 13px; font-weight: {{tb.weight}}; background-color: {{tb.bg}}; color: {{t.text}}\">\n<span style=\"width: 24px; height: 24px; flex-shrink: 0; background-color: {{tb.color}}; clip-path: {{tb.shape}}\"></span>\n{{tb.name}}\n<sc-if value=\"{{tb.hasUnread}}\" hint-placeholder-val=\"{{false}}\"><span class=\"badge\" style=\"min-width: 20px; height: 20px; padding: 0 6px; box-sizing: border-box; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 800; background-color: {{tb.badgeBg}}; color: {{tb.badgeFg}}\">{{tb.unread}}</span></sc-if>\n</button>\n</sc-for>\n</div>\n<div style=\"flex-grow: 1; min-height: 0; overflow-y: auto; display: flex; flex-direction: column-reverse; padding: 4px 14px 196px 14px\">\n<div style=\"display: flex; flex-direction: column\">\n<sc-for list=\"{{feed}}\" as=\"m\" hint-placeholder-count=\"6\">\n<sc-if value=\"{{m.isPerson}}\" hint-placeholder-val=\"{{true}}\">\n<div class=\"msg row\" style=\"display: flex; align-items: flex-end; gap: 8px; padding-top: {{m.gap}}\">\n<span style=\"width: 34px; height: 34px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 13px; color: #1B1E22; background-color: {{m.color}}; clip-path: {{m.shape}}; opacity: {{m.avatarOpacity}}\">{{m.initial}}</span>\n<div style=\"display: flex; flex-direction: column; align-items: flex-start; gap: 3px; min-width: 0; max-width: 80%\">\n<sc-if value=\"{{m.showName}}\" hint-placeholder-val=\"{{true}}\">\n<span style=\"font-size: 12px; font-weight: 700; font-variation-settings: 'wdth' 108; padding-left: 6px; color: {{m.nameColor}}\">{{m.name}}</span>\n</sc-if>\n<div style=\"display: flex; align-items: center; gap: 4px; max-width: 100%\">\n<div class=\"bubble\" style=\"display: flex; flex-direction: column; min-width: 0\">\n<sc-if value=\"{{m.isText}}\" hint-placeholder-val=\"{{true}}\">\n<div style=\"padding: 10px 14px; font-size: 15.5px; line-height: 1.42; border-radius: {{m.radius}}; background-color: {{m.tint}}; color: {{t.text}}\">{{m.text}}</div>\n</sc-if>\n<sc-if value=\"{{m.isSticker}}\" hint-placeholder-val=\"{{false}}\">\n<span class=\"sticker\" role=\"img\" aria-label=\"{{m.stickerLabel}}\" style=\"font-size: 52px; line-height: 1.1; padding: 2px 4px\">{{m.sticker}}</span>\n</sc-if>\n<sc-if value=\"{{m.isPic}}\" hint-placeholder-val=\"{{false}}\">\n<div class=\"photo\" style=\"width: 252px; display: flex; flex-direction: column; padding: 5px; box-sizing: border-box; border-radius: {{m.radius}}; background-color: {{m.tint}}\">\n<div style=\"border-radius: 16px; overflow: hidden\">\n<dc-import name=\"Pic\" kind=\"{{m.pic}}\" top=\"{{m.top}}\" bot=\"{{m.bot}}\" hint-size=\"242px,171px\"></dc-import>\n</div>\n<sc-if value=\"{{m.hasText}}\" hint-placeholder-val=\"{{false}}\">\n<div style=\"padding: 8px 9px 6px 9px; font-size: 15.5px; line-height: 1.42\">{{m.text}}</div>\n</sc-if>\n</div>\n</sc-if>\n<sc-if value=\"{{m.isVoice}}\" hint-placeholder-val=\"{{false}}\">\n<div style=\"width: 252px; display: flex; flex-direction: column; gap: 8px; padding: 10px 14px 12px 10px; box-sizing: border-box; border-radius: {{m.radius}}; background-color: {{m.tint}}\">\n<div style=\"display: flex; align-items: center; gap: 10px\">\n<button class=\"vplay\" onClick=\"{{m.playToggle}}\" aria-label=\"{{m.playLabel}}\" style=\"width: 40px; height: 40px; flex-shrink: 0; border: none; display: flex; align-items: center; justify-content: center; background-color: {{m.color}}; color: #1B1E22; clip-path: {{m.btnShape}}\">\n<sc-if value=\"{{m.playing}}\" hint-placeholder-val=\"{{false}}\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\"><rect x=\"6\" y=\"5\" width=\"4\" height=\"14\" rx=\"1.5\"></rect><rect x=\"14\" y=\"5\" width=\"4\" height=\"14\" rx=\"1.5\"></rect></svg></sc-if>\n<sc-if value=\"{{m.notPlaying}}\" hint-placeholder-val=\"{{true}}\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M8 5.5v13l10.5-6.5z\"></path></svg></sc-if>\n</button>\n<span class=\"wave {{m.waveCls}}\" aria-hidden=\"true\" style=\"display: flex; align-items: center; gap: 2px; height: 26px; flex-grow: 1; color: {{m.nameColor}}\">\n<sc-for list=\"{{wave}}\" as=\"wv\" hint-placeholder-count=\"22\"><span style=\"height: {{wv.h}}\"></span></sc-for>\n</span>\n<span style=\"font-size: 12px; font-weight: 650; color: {{t.muted}}\">{{m.dur}}</span>\n</div>\n<span style=\"font-size: 13px; line-height: 1.4; font-style: italic; color: {{t.muted}}\">{{m.text}}</span>\n</div>\n</sc-if>\n<sc-if value=\"{{m.isPoll}}\" hint-placeholder-val=\"{{false}}\">\n<div style=\"width: 264px; display: flex; flex-direction: column; gap: 6px; padding: 12px; box-sizing: border-box; border-radius: {{m.radius}}; background-color: {{m.tint}}\">\n<span style=\"display: flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 750; letter-spacing: 0.08em; color: {{t.muted}}\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" aria-hidden=\"true\"><path d=\"M5 20V10M12 20V4M19 20v-7\"></path></svg>POLL · {{m.total}} VOTES</span>\n<span style=\"font-size: 16px; font-weight: 720; line-height: 1.3; padding-bottom: 2px\">{{m.q}}</span>\n<sc-for list=\"{{m.opts}}\" as=\"o\" hint-placeholder-count=\"3\">\n<button class=\"opt\" onClick=\"{{o.pick}}\" aria-pressed=\"{{o.pressed}}\" style=\"position: relative; display: flex; align-items: center; justify-content: space-between; gap: 8px; min-height: 40px; padding: 6px 12px; border: none; border-radius: {{o.radius}}; background-color: {{t.s2}}; color: {{t.text}}; overflow: hidden; text-align: left\">\n<span class=\"ofill\" style=\"position: absolute; left: 0; top: 0; bottom: 0; width: {{o.width}}; background-color: {{o.fill}}\"></span>\n<span style=\"position: relative; font-size: 13.5px; font-weight: {{o.weight}}\">{{o.label}}</span>\n<span style=\"position: relative; font-size: 12px; font-weight: 750; color: {{t.muted}}\">{{o.count}}</span>\n</button>\n</sc-for>\n</div>\n</sc-if>\n<sc-if value=\"{{m.isShot}}\" hint-placeholder-val=\"{{false}}\">\n<div style=\"width: 252px; display: flex; flex-direction: column; gap: 6px; padding: 6px; box-sizing: border-box; border-radius: {{m.radius}}; background-color: {{m.tint}}\">\n<div style=\"display: flex; flex-direction: column; gap: 8px; padding: 10px; border-radius: 16px; background-color: {{t.bg}}\">\n<span style=\"display: flex; align-items: center; justify-content: space-between; gap: 8px; font-size: 10px; font-weight: 750; letter-spacing: 0.08em; color: {{t.muted}}\"><span>SCREENSHOT</span><span style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 150px\">{{m.shotChat}}</span></span>\n<div style=\"display: flex; align-items: flex-end; gap: 6px\">\n<span style=\"width: 22px; height: 22px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 800; color: #1B1E22; background-color: {{m.shotColor}}; clip-path: {{m.shotShape}}\">{{m.shotInitial}}</span>\n<span style=\"padding: 7px 10px; border-radius: 14px; font-size: 13px; line-height: 1.35; background-color: {{m.shotTint}}\">{{m.shotText}}</span>\n</div>\n</div>\n<sc-if value=\"{{m.hasText}}\" hint-placeholder-val=\"{{false}}\"><span style=\"padding: 2px 8px 4px 8px; font-size: 15.5px; line-height: 1.42\">{{m.text}}</span></sc-if>\n</div>\n</sc-if>\n<sc-if value=\"{{m.isDel}}\" hint-placeholder-val=\"{{false}}\">\n<div style=\"display: flex; align-items: center; gap: 8px; padding: 10px 14px; font-size: 14px; font-style: italic; border-radius: {{m.radius}}; border: 1.5px dashed {{t.s4}}; color: {{t.muted}}\">\n<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"9\"></circle><path d=\"M6 6l12 12\"></path></svg>\nThis message was deleted\n</div>\n</sc-if>\n</div>\n<button class=\"reactbtn\" onClick=\"{{m.openPicker}}\" aria-label=\"React to this message\" aria-expanded=\"{{m.pickerExpanded}}\" style=\"width: 32px; height: 32px; flex-shrink: 0; border-radius: 16px; border: none; display: flex; align-items: center; justify-content: center; background-color: transparent; color: {{t.muted}}; cursor: pointer\">\n<svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"9\"></circle><path d=\"M8.5 14.5a4.5 4.5 0 0 0 7 0\"></path><path d=\"M9 9.5h.01M15 9.5h.01\"></path></svg>\n</button>\n</div>\n<sc-if value=\"{{m.pickerOpen}}\" hint-placeholder-val=\"{{false}}\">\n<div class=\"picker\" role=\"group\" aria-label=\"Pick a reaction\" style=\"display: flex; gap: 2px; padding: 5px; border-radius: 26px; background-color: {{t.s3}}; box-shadow: 0 10px 24px rgba(0,0,0,0.22)\">\n<sc-for list=\"{{m.quick}}\" as=\"qk\" hint-placeholder-count=\"6\">\n<button onClick=\"{{qk.pick}}\" aria-label=\"{{qk.label}}\" style=\"width: 38px; height: 38px; border-radius: 19px; border: none; background-color: transparent; font-size: 21px\">{{qk.e}}</button>\n</sc-for>\n</div>\n</sc-if>\n<sc-if value=\"{{m.hasRx}}\" hint-placeholder-val=\"{{false}}\">\n<div style=\"display: flex; flex-wrap: wrap; gap: 4px; margin-top: -9px; padding-left: 10px; position: relative\">\n<sc-for list=\"{{m.rx}}\" as=\"r\" hint-placeholder-count=\"2\">\n<button class=\"chip\" onClick=\"{{r.toggle}}\" aria-pressed=\"{{r.pressed}}\" aria-label=\"{{r.label}}\" style=\"height: 26px; padding: 0 8px; border-radius: 13px; display: flex; align-items: center; gap: 4px; font-size: 13px; font-weight: 750; border: 2px solid {{t.bg}}; background-color: {{r.bg}}; color: {{r.fg}}\">{{r.e}} <span style=\"font-size: 11px\">{{r.n}}</span></button>\n</sc-for>\n</div>\n</sc-if>\n<sc-if value=\"{{m.hasSeen}}\" hint-placeholder-val=\"{{false}}\">\n<span style=\"display: flex; align-items: center; gap: 4px; padding: 4px 0 0 6px; font-size: 11px; font-weight: 600; color: {{t.muted}}\"><svg width=\"13\" height=\"13\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z\"></path><circle cx=\"12\" cy=\"12\" r=\"3\"></circle></svg>{{seenText}}</span>\n</sc-if>\n</div>\n</div>\n</sc-if>\n<sc-if value=\"{{m.isCross}}\" hint-placeholder-val=\"{{false}}\">\n<button class=\"cross\" onClick=\"{{m.go}}\" style=\"position: relative; align-self: center; margin: 18px 0 14px 0; display: flex; align-items: center; gap: 10px; padding: 14px 16px 12px 16px; border-radius: 18px; border: none; background-color: {{t.s2}}; color: {{t.text}}; text-align: left; max-width: 88%; transform: rotate(-1.4deg); box-shadow: 0 6px 18px rgba(0,0,0,0.16)\">\n<span aria-hidden=\"true\" style=\"position: absolute; top: -8px; left: 50%; width: 54px; height: 16px; margin-left: -27px; border-radius: 3px; transform: rotate(3deg); background-color: {{t.tape}}\"></span>\n<span style=\"width: 34px; height: 34px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; background-color: {{m.toColor}}; color: #1B1E22; clip-path: {{m.toShape}}\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1\"></path><path d=\"M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1\"></path></svg></span>\n<span style=\"display: flex; flex-direction: column; gap: 3px\">\n<span style=\"font-size: 11px; font-weight: 800; letter-spacing: 0.08em; color: {{t.accentText}}\">THE TEA SPREADS</span>\n<span style=\"font-size: 13.5px; line-height: 1.35; font-weight: 550\">{{m.text}} <span class=\"arr\" style=\"font-weight: 800\">→</span></span>\n</span>\n</button>\n</sc-if>\n<sc-if value=\"{{m.isSys}}\" hint-placeholder-val=\"{{false}}\">\n<div class=\"msg\" style=\"align-self: center; margin: 16px 0 8px 0; padding: 6px 14px; border-radius: 14px; font-size: 12px; font-weight: 650; text-align: center; background-color: {{t.s1}}; color: {{t.muted}}\">{{m.text}}</div>\n</sc-if>\n</sc-for>\n<div style=\"min-height: 52px; display: flex; align-items: flex-end; padding-top: 10px\">\n<sc-if value=\"{{showTyping}}\" hint-placeholder-val=\"{{true}}\">\n<div class=\"typing\" style=\"display: flex; align-items: flex-end; gap: 8px\">\n<span style=\"width: 34px; height: 34px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 13px; color: #1B1E22; background-color: {{typist.color}}; clip-path: {{typist.shape}}\">{{typist.initial}}</span>\n<div style=\"display: flex; align-items: center; gap: 8px; height: 40px; padding: 0 16px; border-radius: 20px 20px 20px 6px; font-size: 13px; font-weight: 600; background-color: {{typist.tint}}; color: {{typist.nameColor}}\">\n<sc-if value=\"{{typing.isText}}\" hint-placeholder-val=\"{{true}}\"><span class=\"dots\" style=\"display: flex; gap: 4px\"><span></span><span></span><span></span></span></sc-if>\n<sc-if value=\"{{typing.isVoice}}\" hint-placeholder-val=\"{{false}}\"><span class=\"rec\" style=\"width: 8px; height: 8px; border-radius: 4px; background-color: #E8766B\"></span><span class=\"mini\" style=\"display: flex; align-items: center; gap: 2px; height: 16px\"><span style=\"height: 10px\"></span><span style=\"height: 16px\"></span><span style=\"height: 8px\"></span><span style=\"height: 14px\"></span></span></sc-if>\n<sc-if value=\"{{typing.isPhoto}}\" hint-placeholder-val=\"{{false}}\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"3\"></rect><circle cx=\"9\" cy=\"10\" r=\"1.8\"></circle><path d=\"M21 16l-5-5-8 8\"></path></svg></sc-if>\n<sc-if value=\"{{typing.hasLabel}}\" hint-placeholder-val=\"{{false}}\"><span>{{typing.label}}</span></sc-if>\n</div>\n</div>\n</sc-if>\n<sc-if value=\"{{showQuiet}}\" hint-placeholder-val=\"{{false}}\">\n<span class=\"typing\" style=\"width: 100%; text-align: center; font-size: 12.5px; font-weight: 600; color: {{t.muted}}\">{{quietText}}</span>\n</sc-if>\n</div>\n</div>\n</div>\n<div style=\"position: absolute; left: 12px; right: 12px; bottom: 14px; display: flex; flex-direction: column; gap: 12px; padding: 12px 14px 14px 14px; border-radius: 32px; background-color: {{t.glass}}; backdrop-filter: blur(22px) saturate(1.5); -webkit-backdrop-filter: blur(22px) saturate(1.5); box-shadow: 0 12px 36px rgba(0,0,0,0.28), inset 0 0 0 1px {{t.glassEdge}}\">\n<div role=\"radiogroup\" aria-label=\"Conversation pace\" style=\"display: flex; gap: 3px\">\n<sc-for list=\"{{speeds}}\" as=\"sp\" hint-placeholder-count=\"3\">\n<button class=\"seg\" role=\"radio\" aria-checked=\"{{sp.checked}}\" onClick=\"{{sp.pick}}\" style=\"flex: 1 1 0; height: 38px; border: none; font-size: 13.5px; font-weight: {{sp.weight}}; border-radius: {{sp.radius}}; background-color: {{sp.bg}}; color: {{sp.fg}}\">{{sp.label}}</button>\n</sc-for>\n</div>\n<div style=\"display: flex; align-items: center; justify-content: space-between; padding: 0 10px\">\n<button class=\"morph\" onClick=\"{{stop}}\" aria-label=\"Stop listening\" style=\"width: 56px; height: 56px; border-radius: 18px; border: none; display: flex; align-items: center; justify-content: center; background-color: {{t.s3}}; color: {{t.text}}\">\n<svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\"><rect x=\"6\" y=\"6\" width=\"12\" height=\"12\" rx=\"2.5\"></rect></svg>\n</button>\n<div style=\"display: flex; flex-direction: column; align-items: center; gap: 4px\">\n<button class=\"play\" onClick=\"{{togglePause}}\" aria-label=\"{{pauseLabel}}\" style=\"width: 76px; height: 76px; border: none; display: flex; align-items: center; justify-content: center; border-radius: {{playRadius}}; background-color: {{t.accent}}; color: {{t.accentInk}}; box-shadow: 0 8px 22px {{t.accentGlow}}\">\n<sc-if value=\"{{paused}}\" hint-placeholder-val=\"{{false}}\">\n<svg width=\"30\" height=\"30\" viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M8 5.5v13l10.5-6.5z\"></path></svg>\n</sc-if>\n<sc-if value=\"{{playing}}\" hint-placeholder-val=\"{{true}}\">\n<svg width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\"><rect x=\"6.5\" y=\"5\" width=\"4\" height=\"14\" rx=\"1.5\"></rect><rect x=\"13.5\" y=\"5\" width=\"4\" height=\"14\" rx=\"1.5\"></rect></svg>\n</sc-if>\n</button>\n</div>\n<button class=\"morph fly\" onClick=\"{{buzz}}\" aria-label=\"Buzz past the screen\" style=\"width: 56px; height: 56px; border-radius: 18px; border: none; display: flex; align-items: center; justify-content: center; background-color: {{t.s3}}; color: {{t.text}}\">\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"7.5\" r=\"2\"></circle><ellipse cx=\"12\" cy=\"14.5\" rx=\"2.6\" ry=\"4.2\"></ellipse><path d=\"M9.6 12C6 9.5 3.5 10.5 3.5 12.5s3 2.5 6.2.8M14.4 12c3.6-2.5 6.1-1.5 6.1.5s-3 2.5-6.2.8\"></path></svg>\n</button>\n</div>\n</div>\n<sc-if value=\"{{stopped}}\" hint-placeholder-val=\"{{false}}\">\n<div class=\"away\" style=\"position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 18px; padding: 40px; text-align: center; background-color: {{t.scrim}}\">\n<span style=\"width: 96px; height: 96px; display: flex; align-items: center; justify-content: center; background-color: {{t.accentSoft}}; color: {{t.accentText}}; clip-path: {{flyShape}}\"><svg width=\"48\" height=\"48\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"7.5\" r=\"2\"></circle><ellipse cx=\"12\" cy=\"14.5\" rx=\"2.6\" ry=\"4.2\"></ellipse><path d=\"M9.6 12C6 9.5 3.5 10.5 3.5 12.5s3 2.5 6.2.8M14.4 12c3.6-2.5 6.1-1.5 6.1.5s-3 2.5-6.2.8\"></path></svg></span>\n<span style=\"font-size: 30px; font-weight: 850; font-variation-settings: 'wdth' 125; letter-spacing: -0.02em\">You flew away.</span>\n<span style=\"font-size: 15px; line-height: 1.5; color: {{t.muted}}\">They're still talking without you. Rude, honestly. We'll save the good parts.</span>\n<button class=\"play\" onClick=\"{{resume}}\" style=\"height: 56px; padding: 0 26px; border-radius: 28px; border: none; font-size: 15px; font-weight: 750; background-color: {{t.accent}}; color: {{t.accentInk}}\">Land back on the wall</button>\n<a href=\"Main.dc.html\" style=\"font-size: 14px; font-weight: 650; text-decoration: none; color: {{t.muted}}\">Back to all chats</a>\n</div>\n</sc-if>\n</div>\n", logic: function (DCLogic) {

var THEMES = {
  Night: { night: true, bg: '#111418', s1: '#191D22', s2: '#20252B', s3: '#283039', s4: '#3A434D', text: '#ECEEF0', muted: '#9BA4AE', accent: '#9CCFBE', accentInk: '#0F1D19', accentSoft: '#1F2F2A', accentText: '#A8DCCB', accentGlow: 'rgba(156,207,190,0.25)', glass: 'rgba(28,33,39,0.74)', glassEdge: 'rgba(255,255,255,0.06)', scrim: 'rgba(17,20,24,0.96)', tape: 'rgba(232,213,143,0.55)', fill: 'rgba(156,207,190,0.28)' },
  Day: { night: false, bg: '#F4F2EE', s1: '#FFFFFF', s2: '#EFECE6', s3: '#E6E2DA', s4: '#C9C3B8', text: '#22262B', muted: '#5C626A', accent: '#2F7563', accentInk: '#FFFFFF', accentSoft: '#D7EAE3', accentText: '#255E50', accentGlow: 'rgba(47,117,99,0.25)', glass: 'rgba(255,255,255,0.76)', glassEdge: 'rgba(0,0,0,0.06)', scrim: 'rgba(244,242,238,0.97)', tape: 'rgba(214,190,110,0.55)', fill: 'rgba(47,117,99,0.18)' }
};
var PEOPLE = {
  linda: { n: 'Linda', c: '#E8B79E', sh: 'cookie' }, rick: { n: 'Rick', c: '#9EC1E0', sh: 'squircle' }, june: { n: 'Grandma June', i: 'J', c: '#B8A9D9', sh: 'flower' },
  tyler: { n: 'Tyler', c: '#E6D58F', sh: 'burst' }, mia: { n: 'Mia', c: '#9DBFA8', sh: 'clover' }, gary: { n: 'Gary', c: '#C9C4B5', sh: 'gem' },
  priya: { n: 'Priya (HR)', c: '#D9A3B0', sh: 'sunny' }, kev: { n: 'Kev (IT)', c: '#A3D4E0', sh: 'squircle' }, barb: { n: 'Barb (President)', c: '#E3A3A3', sh: 'cookie' },
  denise: { n: 'Denise', c: '#D6B8E0', sh: 'flower' }, doug: { n: 'Doug', c: '#B9CF94', sh: 'clover' }, fern: { n: 'Fern', c: '#A7C7C2', sh: 'sunny' },
  jo: { n: 'Jo', c: '#E0C29E', sh: 'gem' }, marcus: { n: 'Marcus', c: '#A9B8E8', sh: 'burst' }, okafor: { n: 'Dr. Okafor', i: 'O', c: '#CFC0A8', sh: 'squircle' }, sal: { n: 'Sal (Security)', c: '#B0B8C0', sh: 'circle' }
};
var CHATS = {
  family: { name: 'Henderson Family', short: 'Family', mono: 'HF', color: '#E8B79E', sh: 'cookie', who: ['linda', 'rick', 'june', 'tyler', 'mia'] },
  office: { name: 'Q3 Synergy Task Force', short: 'Office', mono: 'Q3', color: '#C9C4B5', sh: 'squircle', who: ['gary', 'priya', 'linda', 'tyler', 'kev'] },
  hoa: { name: 'Lakeview HOA (Official)', short: 'HOA', mono: 'HOA', color: '#A7C7C2', sh: 'gem', who: ['barb', 'rick', 'gary', 'denise', 'doug'] },
  book: { name: 'Book Club (We Don’t Read)', short: 'Book Club', mono: 'BC', color: '#D9A3B0', sh: 'flower', who: ['fern', 'priya', 'linda', 'denise', 'june'] },
  er: { name: 'Night Shift, Bay 4', short: 'Night Shift', mono: 'ER', color: '#9DBFA8', sh: 'clover', who: ['mia', 'jo', 'marcus', 'okafor', 'sal'] }
};
var ORDER = ['family', 'office', 'hoa', 'book', 'er'];
var PACE = { Chill: 1.7, Normal: 1, Binge: 0.45 };
var SKIPS = ['A few hours later…', 'The next morning', 'Later that night', 'Tuesday, 11:48 PM', '20 minutes later', 'Sunday, 7:02 AM', 'After lunch', '3:12 AM', 'Friday, 4:54 PM', 'Meanwhile…'];
var REACT_POOL = ['😂', '💀', '😭', '👀', '🙃', '❤️', '🫠', '👍', '🙌', '🔥'];
var QUICK = ['😂', '💀', '❤️', '👀', '😭', '🫡'];
var FILLERS = ['😂', '💀💀', 'lmao', '👀', '😭😭', '…', '🙃', 'LOL', 'stop 😭', 'I can’t', '💅', 'not again'];
var QUIET = ['Everyone went quiet… 🦗', 'Nobody’s typing. Suspicious.', 'Three people opened the chat and said nothing.', 'The silence is loud in here.'];
var BUZZ = {
  family: ['Is there a fly in here? Richard, get the swatter. 🪰', 'Mr. Biscuits is staring at the wall again. Something is here.', 'i swear someone is reading this chat'],
  office: ['Is someone listening in? Love that. Visibility is key. 👀', 'If that’s Legal, I’d like it noted that I said no.', 'is the fly a stakeholder'],
  hoa: ['Gerald detected movement. 📹', 'Flies are not an approved resident.', 'the fly is fine. we have an understanding'],
  book: ['A fly just landed on the book. First time anything has touched it. 📖', 'That fly has better energy than Gary.', 'Fern, is that one of your spirits?'],
  er: ['Fly in Bay 4. Nobody touch it. It might be a patient.', 'is the fly sterile', 'Sal, deal with the fly. 🪰']
};
var WAVE = [8, 14, 20, 12, 24, 18, 10, 22, 26, 14, 9, 18, 24, 16, 11, 20, 26, 12, 8, 16, 22, 10].map(function (h) { return { h: h + 'px' }; });
var FALLBACK = {
  family: { episodes: [{ id: 'f1', m: [{ f: 'linda', t: 'Reminder that Sunday dinner is mandatory 🍗', r: ['👍4'] }, { f: 'rick', t: 'Who moved the thermostat to 74.' }, { f: 'rick', p: 'thermostat' }, { f: 'june', t: 'I did. I’m 81. I’ve earned humidity. 💅', r: ['😂3'] }, { f: 'mia', s: '👖' }] }], banter: [['rick', 'ok'], ['linda', 'Good morning family!! ☀️']] },
  office: { episodes: [{ id: 'o1', m: [{ f: 'gary', t: 'Quick sync at 4:55. Super casual. Mandatory. 🚀' }, { f: 'gary', p: 'invite' }, { f: 'priya', t: '“Super casual mandatory” is not a thing, Gary.' }] }], banter: [['kev', 'have you tried turning it off and on again']] },
  hoa: { episodes: [{ id: 'h1', m: [{ f: 'barb', t: 'Friendly reminder 🙂' }, { f: 'barb', p: 'hoaletter' }, { f: 'doug', t: 'i mow around it either way' }] }], banter: [['doug', 'mowing']] },
  book: { episodes: [{ id: 'b1', m: [{ f: 'fern', p: 'book', t: 'Book club tonight!! Did everyone finish?' }, { f: 'priya', t: 'There’s a book?' }] }], banter: [['june', 'Wine.']] },
  er: { episodes: [{ id: 'e1', m: [{ f: 'mia', p: 'xray', t: 'fork guy is back 🍴' }, { f: 'jo', t: 'We do NOT ask.' }] }], banter: [['jo', 'Quiet night. Don’t say it.']] }
};
var SHAPE_FN = {
  circle: function () { return 0.5; },
  cookie: function (t) { return 0.5 * (1 + 0.07 * Math.cos(9 * (t + Math.PI / 2))); },
  clover: function (t) { return 0.5 * (1 + 0.2 * Math.cos(4 * t)); },
  sunny: function (t) { return 0.5 * (1 + 0.05 * Math.cos(8 * t)); },
  flower: function (t) { return 0.5 * (1 + 0.12 * Math.cos(6 * t)); },
  gem: function (t) { return 0.5 * (1 + 0.06 * Math.cos(6 * t + Math.PI)); },
  burst: function (t) { return 0.5 * (1 + 0.085 * Math.cos(12 * t)); },
  squircle: function (t) { var c = Math.abs(Math.cos(t)), s = Math.abs(Math.sin(t)); return 0.5 / Math.pow(Math.pow(c, 4) + Math.pow(s, 4), 0.25); }
};
var SHAPE_CACHE = {};
function shape(k) {
  if (SHAPE_CACHE[k]) { return SHAPE_CACHE[k]; }
  var f = SHAPE_FN[k] || SHAPE_FN.circle, pts = [], n = 56, i;
  for (i = 0; i < n; i++) { var a = 2 * Math.PI * i / n - Math.PI / 2, r = f(a); pts.push([0.5 + r * Math.cos(a), 0.5 + r * Math.sin(a)]); }
  var xs = pts.map(function (p) { return p[0]; }), ys = pts.map(function (p) { return p[1]; });
  var mnx = Math.min.apply(null, xs), mxx = Math.max.apply(null, xs), mny = Math.min.apply(null, ys), mxy = Math.max.apply(null, ys);
  var sc = 1 / Math.max(mxx - mnx, mxy - mny), cx = (mnx + mxx) / 2, cy = (mny + mxy) / 2;
  SHAPE_CACHE[k] = 'polygon(' + pts.map(function (p) { return ((0.5 + (p[0] - cx) * sc) * 100).toFixed(1) + '% ' + ((0.5 + (p[1] - cy) * sc) * 100).toFixed(1) + '%'; }).join(',') + ')';
  return SHAPE_CACHE[k];
}
function hexRgb(h) { var n = parseInt(h.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; }
function tint(h, a) { var c = hexRgb(h); return 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + a + ')'; }
function shade(h, f) { var c = hexRgb(h); return 'rgb(' + Math.round(c[0] * f) + ',' + Math.round(c[1] * f) + ',' + Math.round(c[2] * f) + ')'; }
function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var x = a[i]; a[i] = a[j]; a[j] = x; } return a; }
function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
function rand(a, b) { return a + Math.random() * (b - a); }
function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
function secs(d) { var p = String(d).split(':'); return (parseInt(p[0], 10) || 0) * 60 + (parseInt(p[1], 10) || 0); }
function parseR(r) { return (r || []).map(function (s) { var mm = String(s).match(/^(.*?)(\d+)$/); return mm ? { e: mm[1], n: parseInt(mm[2], 10), mine: false } : { e: s, n: 1, mine: false }; }); }
function initialOf(id) { var p = PEOPLE[id]; return p ? (p.i || p.n.charAt(0)) : '?'; }
function person(id, t) {
  var p = PEOPLE[id];
  if (!p) { return { name: '', initial: '?', color: t.muted, shape: shape('circle'), tint: t.s2, nameColor: t.muted }; }
  return { name: p.n, initial: initialOf(id), color: p.c, shape: shape(p.sh), tint: tint(p.c, t.night ? 0.17 : 0.3), nameColor: t.night ? p.c : shade(p.c, 0.5) };
}

class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.db = null; this.uid = 0; this.el = 0; this.plan = null; this.lastDeliver = -5000; this.bgNext = 9000;
    this.bags = {}; this.last = {}; this.used = {};
    this.state = { ready: false, chat: 'family', logs: {}, queues: {}, unread: {}, paused: false, stopped: false, muted: {}, speed: 'Normal', picker: null, voice: null, phase: 'idle', seen: 0, quiet: false };
  }
  componentDidMount() {
    var self = this;
    this.timer = setInterval(function () { self.tick(); }, 300);
    var loads = ORDER.map(function (id) {
      return fetch('./data/' + id + '.json').then(function (r) { if (!r.ok) { throw new Error('missing'); } return r.json(); });
    });
    Promise.all(loads).then(function (arr) {
      var db = {}; arr.forEach(function (d, i) { db[ORDER[i]] = d; }); self.boot(db);
    }).catch(function () { self.boot(FALLBACK); });
  }
  componentWillUnmount() { clearInterval(this.timer); }
  boot(db) {
    var self = this;
    this.db = db;
    var logs = {}, queues = {}, unread = {};
    ORDER.forEach(function (id) { logs[id] = []; queues[id] = []; unread[id] = 0; });
    var seedN = { family: 9, office: 5, hoa: 4, book: 4, er: 4 };
    ORDER.forEach(function (id) { for (var k = 0; k < seedN[id]; k++) { self.pullInto(id, logs, queues); } });
    unread.office = 3; unread.er = 1;
    this.lastDeliver = -6000;
    this.makePlan(this.state.chat, queues, logs, this.state.speed);
    this.setState({ ready: true, logs: logs, queues: queues, unread: unread });
  }
  findEp(chat, id) {
    var d = this.db && this.db[chat];
    if (!d) { return null; }
    for (var i = 0; i < d.episodes.length; i++) { if (d.episodes[i].id === id) { return d.episodes[i]; } }
    return null;
  }
  nextBatch(id, empty) {
    var self = this;
    var d = this.db[id];
    if (!d || !d.episodes || !d.episodes.length) { return [{ sys: 'Nobody is talking. Suspicious.' }]; }
    if (!this.bags[id] || !this.bags[id].length) {
      var ids = shuffle(d.episodes.filter(function (e) { return !e.hidden; }).map(function (e) { return e.id; }));
      if (ids.length > 1 && ids[0] === this.last[id]) { ids.push(ids.shift()); }
      this.bags[id] = ids;
      Object.keys(this.used).forEach(function (k) { if (self.used[k] === id) { delete self.used[k]; } });
    }
    if (!empty && Math.random() < 0.3 && d.banter && d.banter.length) {
      var out = [];
      shuffle(d.banter.slice()).slice(0, 2 + Math.floor(Math.random() * 3)).forEach(function (b) {
        var m = { f: b[0], t: b[1] };
        if (Math.random() < 0.22) { m.r = [pick(REACT_POOL) + (1 + Math.floor(Math.random() * 3))]; }
        out.push(m);
      });
      if (Math.random() < 0.35) { out.push({ f: pick(CHATS[id].who), t: pick(FILLERS) }); }
      return out;
    }
    var epId = this.bags[id].shift();
    this.last[id] = epId;
    var ep = this.findEp(id, epId);
    var msgs = ep ? ep.m.slice() : [];
    if (!empty && Math.random() < 0.6) { msgs.unshift({ sys: pick(SKIPS) }); }
    return msgs;
  }
  pullInto(id, logs, queues) {
    var q = (queues[id] || []).slice();
    if (!q.length) { q = this.nextBatch(id, (logs[id] || []).length === 0); }
    var m = q.shift();
    queues[id] = q;
    if (!m) { return; }
    this.uid += 1;
    var e = { id: this.uid, m: m, rx: parseR(m.r), n: m.n ? m.n.slice() : null, vote: -1 };
    if (m.x && m.then && !this.used[m.then] && Math.random() < 0.6) {
      var ep = this.findEp(m.x, m.then);
      if (ep) { this.used[m.then] = m.x; queues[m.x] = (queues[m.x] || []).concat([{ sys: 'The tea arrived from ' + CHATS[id].short }]).concat(ep.m); }
    }
    logs[id] = (logs[id] || []).concat([e]).slice(-180);
  }
  makePlan(chat, queues, logs, speed) {
    var q = (queues[chat] || []).slice();
    if (!q.length) { q = this.nextBatch(chat, false); queues[chat] = q; }
    var nx = q[0];
    var mult = PACE[speed] || 1;
    var log = logs[chat] || [];
    var last = log.length ? log[log.length - 1].m : null;
    var prevF = last && last.f && !last.sys && !last.x ? last.f : null;
    var pause, type = 0, kind = 'text', quiet = false;
    if (!nx || nx.sys || nx.x) { pause = rand(1.6, 3.2); kind = 'none'; }
    else {
      var same = nx.f === prevF;
      pause = same ? rand(0.6, 1.6) : rand(2, 5.5);
      if (!same && Math.random() < 0.13) { pause += rand(8, 18); quiet = true; }
      pause *= (nx.w || 1);
      if (nx.p) { kind = 'photo'; type = rand(2.6, 4.4); }
      else if (nx.v) { kind = 'voice'; type = clamp(secs(nx.v) * 0.1, 2.4, 7.5); }
      else if (nx.poll) { kind = 'poll'; type = rand(3.2, 4.8); }
      else if (nx.shot) { kind = 'photo'; type = rand(2, 3); }
      else if (nx.s) { kind = 'text'; type = rand(0.8, 1.3); }
      else if (nx.del) { type = rand(1.2, 1.8); }
      else { type = clamp((nx.t || '').length * 0.075, 1.1, 6.8); }
    }
    pause *= mult * 1000; type *= mult * 1000;
    var p = { typeAt: this.el + pause, deliverAt: this.el + pause + type, kind: kind, who: nx ? nx.f : null, quiet: quiet };
    if (kind === 'text' && type > 2200 && Math.random() < 0.16) {
      var hold = rand(1.4, 3) * mult * 1000;
      p.fakeFrom = p.typeAt + type * 0.45; p.fakeTo = p.fakeFrom + hold; p.deliverAt += hold;
    }
    this.plan = p;
  }
  phaseNow() {
    var p = this.plan;
    if (!p || p.kind === 'none' || this.el < p.typeAt || this.el >= p.deliverAt) { return 'idle'; }
    if (p.fakeFrom && this.el >= p.fakeFrom && this.el < p.fakeTo) { return 'idle'; }
    return 'typing';
  }
  tick() {
    if (!this.db) { return; }
    var st = this.state;
    if (st.paused || st.stopped) { return; }
    this.el += 300;
    var mult = PACE[st.speed] || 1;
    var ns = {}, logs = null, queues = null;
    if (this.plan && this.el >= this.plan.deliverAt) {
      logs = Object.assign({}, st.logs); queues = Object.assign({}, st.queues);
      this.pullInto(st.chat, logs, queues);
      this.lastDeliver = this.el;
      this.makePlan(st.chat, queues, logs, st.speed);
    }
    if (this.el >= this.bgNext) {
      logs = logs || Object.assign({}, st.logs); queues = queues || Object.assign({}, st.queues);
      var unread = Object.assign({}, st.unread);
      var c = pick(ORDER.filter(function (x) { return x !== st.chat; }));
      this.pullInto(c, logs, queues);
      unread[c] = (unread[c] || 0) + 1;
      ns.unread = unread;
      this.bgNext = this.el + rand(8, 18) * 1000 * mult;
    }
    if (logs) { ns.logs = logs; ns.queues = queues; }
    var phase = this.phaseNow();
    if (phase !== st.phase) { ns.phase = phase; }
    var seen = Math.min(CHATS[st.chat].who.length - 1, Math.max(0, Math.floor((this.el - this.lastDeliver) / 1500)));
    if (seen !== st.seen) { ns.seen = seen; }
    var quiet = !!(this.plan && this.plan.quiet && phase === 'idle' && this.el > this.lastDeliver + 3500 && this.el < this.plan.typeAt);
    if (quiet !== st.quiet) { ns.quiet = quiet; }
    if (Object.keys(ns).length) { this.setState(ns); }
  }
  replan(chat, queues, speed) {
    var qs = Object.assign({}, queues || this.state.queues);
    this.makePlan(chat, qs, this.state.logs, speed || this.state.speed);
    return qs;
  }
  switchTo(id) {
    var unread = Object.assign({}, this.state.unread); unread[id] = 0;
    this.lastDeliver = this.el - 8000;
    var qs = this.replan(id);
    this.setState({ chat: id, unread: unread, picker: null, queues: qs, phase: 'idle', quiet: false });
  }
  go(x, then) {
    var queues = Object.assign({}, this.state.queues);
    if (then && !this.used[then]) {
      var ep = this.findEp(x, then);
      if (ep) { this.used[then] = x; queues[x] = [{ sys: 'You followed the tea here' }].concat(ep.m).concat(queues[x] || []); }
    }
    var unread = Object.assign({}, this.state.unread); unread[x] = 0;
    this.lastDeliver = this.el - 8000;
    this.makePlan(x, queues, this.state.logs, this.state.speed);
    this.plan.typeAt = this.el + 300; this.plan.deliverAt = this.el + 700; this.plan.kind = 'none';
    this.setState({ chat: x, unread: unread, picker: null, queues: queues, phase: 'idle', quiet: false });
  }
  buzz() {
    var c = this.state.chat;
    var queues = Object.assign({}, this.state.queues);
    queues[c] = [{ sys: 'You buzzed past the screen 🪰' }, { f: pick(CHATS[c].who), t: pick(BUZZ[c]) }].concat(queues[c] || []);
    this.makePlan(c, queues, this.state.logs, this.state.speed);
    this.plan.typeAt = this.el + 300; this.plan.deliverAt = this.el + 600; this.plan.kind = 'none'; this.plan.quiet = false;
    this.setState({ queues: queues, paused: false });
  }
  setSpeed(s) {
    var qs = this.replan(this.state.chat, null, s);
    this.setState({ speed: s, queues: qs });
  }
  editEntry(chat, id, fn) {
    var logs = Object.assign({}, this.state.logs);
    logs[chat] = logs[chat].map(function (e) { if (e.id !== id) { return e; } var c = Object.assign({}, e); fn(c); return c; });
    this.setState({ logs: logs });
  }
  react(chat, id, emo) {
    this.editEntry(chat, id, function (e) {
      var rx = e.rx.map(function (r) { return Object.assign({}, r); });
      var hit = null;
      rx.forEach(function (r) { if (r.e === emo) { hit = r; } });
      if (hit) {
        if (hit.mine) { hit.n -= 1; hit.mine = false; } else { hit.n += 1; hit.mine = true; }
        rx = rx.filter(function (r) { return r.n > 0; });
      } else { rx.push({ e: emo, n: 1, mine: true }); }
      e.rx = rx;
    });
    this.setState({ picker: null });
  }
  vote(chat, id, i) {
    this.editEntry(chat, id, function (e) {
      if (e.vote === i) { return; }
      var n = e.n.slice();
      if (e.vote >= 0) { n[e.vote] -= 1; }
      n[i] += 1; e.n = n; e.vote = i;
    });
  }
  renderVals() {
    var self = this;
    var st = this.state;
    var t = THEMES[this.props.theme] || THEMES.Night;
    var c = st.chat;
    var log = st.logs[c] || [];
    var prev = null;
    var feed = log.map(function (e) {
      var m = e.m;
      var p = m.f ? PEOPLE[m.f] : null;
      var kind = m.sys ? 'sys' : m.x ? 'cross' : m.del ? 'del' : m.p ? 'pic' : m.s ? 'sticker' : m.v ? 'voice' : m.poll ? 'poll' : m.shot ? 'shot' : 'text';
      var isPerson = !!p && kind !== 'sys' && kind !== 'cross';
      var first = isPerson && prev !== m.f;
      prev = isPerson ? m.f : null;
      var pp = person(m.f, t);
      var toChat = m.x ? CHATS[m.x] : null;
      var item = {
        who: m.f, first: first,
        isPerson: isPerson, isSys: kind === 'sys', isCross: kind === 'cross',
        isText: kind === 'text', isPic: kind === 'pic', isSticker: kind === 'sticker', isVoice: kind === 'voice', isPoll: kind === 'poll', isShot: kind === 'shot', isDel: kind === 'del',
        text: m.t || m.sys || '', hasText: !!m.t,
        name: pp.name, initial: pp.initial, color: pp.color, shape: pp.shape, tint: pp.tint, nameColor: pp.nameColor,
        btnShape: shape('cookie'),
        showName: first, gap: first ? '14px' : '3px', avatarOpacity: 1, radius: '20px',
        toColor: toChat ? toChat.color : t.accent, toShape: shape(toChat ? toChat.sh : 'circle'),
        pic: m.p || '', top: m.top || '', bot: m.bot || '',
        sticker: m.s || '', stickerLabel: 'Sticker ' + (m.s || ''),
        dur: m.v || '',
        playing: st.voice === e.id, notPlaying: st.voice !== e.id,
        waveCls: st.voice === e.id ? 'on' : '',
        playLabel: st.voice === e.id ? 'Pause voice note' : 'Play voice note',
        playToggle: function () { self.setState({ voice: st.voice === e.id ? null : e.id }); },
        go: function () { self.go(m.x, m.then); },
        pickerOpen: st.picker === e.id,
        pickerExpanded: st.picker === e.id ? 'true' : 'false',
        openPicker: function () { self.setState({ picker: st.picker === e.id ? null : e.id }); },
        quick: QUICK.map(function (q) { return { e: q, label: 'React ' + q, pick: function () { self.react(c, e.id, q); } }; }),
        hasRx: e.rx.length > 0, hasSeen: false,
        rx: e.rx.map(function (r) {
          return {
            e: r.e, n: r.n, pressed: r.mine ? 'true' : 'false', label: r.e + ' ' + r.n + (r.mine ? ', including you' : ''),
            bg: r.mine ? t.accent : t.s3, fg: r.mine ? t.accentInk : t.text,
            toggle: function () { self.react(c, e.id, r.e); }
          };
        })
      };
      if (kind === 'poll') {
        var total = 0; e.n.forEach(function (v) { total += v; });
        item.q = m.poll; item.total = total;
        item.opts = m.o.map(function (o, i) {
          var pct = total ? Math.round(e.n[i] / total * 100) : 0;
          var mine = e.vote === i;
          var last = i === m.o.length - 1;
          return { label: o, count: e.n[i], width: pct + '%', fill: mine ? t.fill : tint(pp.color, t.night ? 0.22 : 0.35), weight: mine ? 750 : 550, radius: mine ? '20px' : (i === 0 ? '14px 14px 6px 6px' : last ? '6px 6px 14px 14px' : '6px'), pressed: mine ? 'true' : 'false', pick: function () { self.vote(c, e.id, i); } };
        });
      }
      if (kind === 'shot') {
        var sp = person(m.shot.f, t);
        item.shotChat = m.shot.c; item.shotText = m.shot.t;
        item.shotColor = sp.color; item.shotInitial = sp.initial; item.shotShape = sp.shape; item.shotTint = sp.tint;
      }
      return item;
    });
    var lastPerson = -1;
    for (var k = 0; k < feed.length; k++) {
      var cur = feed[k], nxt = feed[k + 1];
      if (!cur.isPerson) { continue; }
      lastPerson = k;
      var lastOfGroup = !(nxt && nxt.isPerson && nxt.who === cur.who);
      if (!lastOfGroup) { cur.avatarOpacity = 0; }
      cur.radius = (cur.first ? '20px' : '6px') + ' 20px 20px ' + (lastOfGroup ? '20px' : '6px');
    }
    if (lastPerson === feed.length - 1 && lastPerson >= 0 && st.phase === 'idle') { feed[lastPerson].hasSeen = true; }
    var members = CHATS[c].who.length - 1;
    var seenText = st.seen <= 0 ? 'Delivered' : st.seen >= members ? 'Seen by everyone' : 'Seen by ' + st.seen;
    var pl = this.plan;
    var typistId = pl && pl.who ? pl.who : null;
    var typist = person(typistId, t);
    var tk = pl ? pl.kind : 'text';
    var typing = {
      isText: tk === 'text', isVoice: tk === 'voice', isPhoto: tk === 'photo' || tk === 'poll',
      hasLabel: tk !== 'text', label: tk === 'voice' ? 'recording a voice note' : tk === 'photo' ? 'choosing a photo' : tk === 'poll' ? 'making a poll' : ''
    };
    var showTyping = st.ready && !st.paused && st.phase === 'typing' && !!typistId;
    var headLine = !st.ready ? 'Landing on the wall…' : st.paused ? 'Paused' : showTyping ? typist.name + (tk === 'voice' ? ' is recording…' : tk === 'photo' ? ' is sending a photo…' : ' is typing…') : CHATS[c].who.map(function (w) { return PEOPLE[w].n.replace(/ \(.*\)$/, ''); }).join(', ');
    var tabs = ORDER.map(function (id) {
      var on = id === c;
      var u = st.unread[id] || 0;
      var mutedTab = !!st.muted[id];
      return {
        name: CHATS[id].short, color: CHATS[id].color, shape: shape(CHATS[id].sh), selected: on ? 'true' : 'false',
        bg: on ? tint(CHATS[id].color, t.night ? 0.3 : 0.45) : t.s1, weight: on ? 750 : 550,
        unread: u > 99 ? '99+' : u, hasUnread: !on && u > 0,
        badgeBg: mutedTab ? t.s3 : t.accent, badgeFg: mutedTab ? t.muted : t.accentInk,
        pick: function () { self.switchTo(id); }
      };
    });
    var names = ['Chill', 'Normal', 'Binge'];
    var speeds = names.map(function (s, i) {
      var on = st.speed === s;
      var r = on ? '19px' : (i === 0 ? '19px 8px 8px 19px' : i === names.length - 1 ? '8px 19px 19px 8px' : '8px');
      return { label: s, checked: on ? 'true' : 'false', radius: r, weight: on ? 760 : 560, bg: on ? t.accent : t.s3, fg: on ? t.accentInk : t.text, pick: function () { self.setSpeed(s); } };
    });
    var isMuted = !!st.muted[c];
    return {
      t: t, chat: { name: CHATS[c].name, mono: CHATS[c].mono, color: CHATS[c].color, shape: shape(CHATS[c].sh) },
      feed: feed, tabs: tabs, speeds: speeds, wave: WAVE,
      seenText: seenText,
      typist: typist, typing: typing, showTyping: showTyping,
      showQuiet: st.quiet && !st.paused, quietText: QUIET[Math.floor(this.el / 20000) % QUIET.length],
      headLine: headLine, headColor: showTyping ? t.accentText : t.muted,
      liveColor: st.paused ? t.muted : t.accent,
      paused: st.paused, playing: !st.paused,
      playRadius: st.paused ? '38px' : '24px',
      pauseLabel: st.paused ? 'Resume the conversation' : 'Pause the conversation',
      togglePause: function () { self.setState({ paused: !st.paused }); },
      stopped: st.stopped, flyShape: shape('cookie'),
      stop: function () { self.setState({ stopped: true, picker: null }); },
      resume: function () { self.setState({ stopped: false, paused: false }); },
      buzz: function () { self.buzz(); },
      muted: isMuted, unmuted: !isMuted,
      mutePressed: isMuted ? 'true' : 'false',
      muteLabel: isMuted ? 'Unmute notifications for ' + CHATS[c].name : 'Mute notifications for ' + CHATS[c].name,
      muteColor: isMuted ? t.accentInk : t.text, muteBg: isMuted ? t.accent : t.s2,
      toggleMute: function () { var mu = Object.assign({}, st.muted); mu[c] = !isMuted; self.setState({ muted: mu }); }
    };
  }
}

return Component;
} });
define("Verdict", { template: "\n\n<div style=\"width: 100%; height: 100vh; height: 100dvh; box-sizing: border-box; display: flex; flex-direction: column; overflow: hidden; font-family: 'Roboto Flex', sans-serif; background-color: {{t.bg}}; color: {{t.text}}\">\n<div class=\"scroll\" style=\"flex-grow: 1; min-height: 0; overflow-y: auto; display: flex; flex-direction: column; gap: 24px; padding: 26px 20px 20px 20px\">\n<header style=\"display: flex; flex-direction: column; gap: 4px\">\n<h1 style=\"margin: 0; font-size: 36px; line-height: 1; font-weight: 860; font-variation-settings: 'wdth' 130; letter-spacing: -0.025em\">The Tea</h1>\n<span style=\"font-size: 14px; color: {{t.muted}}\">Everyone's connected. Nobody's okay.</span>\n</header>\n<section style=\"display: flex; flex-direction: column; gap: 10px\">\n<h2 style=\"margin: 0; font-size: 18px; font-weight: 700\">Storylines</h2>\n<sc-for list=\"{{stories}}\" as=\"s\" hint-placeholder-count=\"4\">\n<div class=\"story {{s.cls}}\" style=\"display: flex; flex-direction: column; border-radius: 22px; background-color: {{t.surf}}\">\n<button onClick=\"{{s.toggle}}\" aria-expanded=\"{{s.expanded}}\" style=\"display: flex; align-items: center; gap: 12px; padding: 14px 14px 14px 16px; border: none; background-color: transparent; color: {{t.text}}; text-align: left; cursor: pointer\">\n<span style=\"display: flex; flex-direction: column; gap: 4px; flex-grow: 1; min-width: 0\">\n<span style=\"font-size: 11px; font-weight: 700; letter-spacing: 0.08em; color: {{s.color}}\">{{s.where}}</span>\n<span style=\"font-size: 16px; font-weight: 700\">{{s.title}}</span>\n</span>\n<span style=\"flex-shrink: 0; height: 26px; padding: 0 10px; border-radius: 13px; display: flex; align-items: center; font-size: 12px; font-weight: 600; background-color: {{t.surf2}}; color: {{t.muted}}\">{{s.status}}</span>\n<svg class=\"chev\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" style=\"flex-shrink: 0; color: {{t.muted}}\"><path d=\"M6 9l6 6 6-6\"></path></svg>\n</button>\n<sc-if value=\"{{s.open}}\" hint-placeholder-val=\"{{false}}\">\n<div class=\"more\" style=\"display: flex; flex-direction: column; gap: 12px; padding: 0 16px 16px 16px\">\n<p style=\"margin: 0; font-size: 14px; line-height: 1.5; color: {{t.muted}}\">{{s.summary}}</p>\n<div style=\"display: flex; align-items: center; justify-content: space-between\">\n<span style=\"display: flex; align-items: center; gap: 8px; font-size: 12px; font-weight: 600; color: {{t.muted}}\">\nSpice\n<span style=\"display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 3px; width: 70px\">\n<sc-for list=\"{{s.spice}}\" as=\"sp\" hint-placeholder-count=\"5\"><span style=\"height: 6px; border-radius: 3px; background-color: {{sp.c}}\"></span></sc-for>\n</span>\n</span>\n<a href=\"Arena.dc.html\" class=\"listen\" style=\"display: flex; align-items: center; gap: 6px; height: 36px; padding: 0 14px; border-radius: 18px; text-decoration: none; font-size: 13px; font-weight: 700; background-color: {{t.accent}}; color: {{t.accentInk}}\">Listen in →</a>\n</div>\n</div>\n</sc-if>\n</div>\n</sc-for>\n</section>\n<section style=\"display: flex; flex-direction: column; gap: 10px\">\n<div style=\"display: flex; flex-direction: column; gap: 2px\">\n<h2 style=\"margin: 0; font-size: 18px; font-weight: 700\">Who's in what</h2>\n<span style=\"font-size: 13px; color: {{t.muted}}\">People in more than one chat carry the tea between them.</span>\n</div>\n<div style=\"display: flex; flex-direction: column; border-radius: 22px; padding: 6px 14px; background-color: {{t.surf}}\">\n<sc-for list=\"{{people}}\" as=\"p\" hint-placeholder-count=\"6\">\n<div class=\"person\" style=\"display: flex; align-items: center; gap: 12px; padding: 10px 0; border-bottom: 1px solid {{p.border}}\">\n<span class=\"av\" style=\"width: 40px; height: 40px; flex-shrink: 0; clip-path: {{p.shape}}; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px; color: #1B1E22; background-color: {{p.color}}\">{{p.initial}}</span>\n<span style=\"display: flex; flex-direction: column; gap: 5px; min-width: 0\">\n<span style=\"font-size: 14px; font-weight: 700\">{{p.name}} <span style=\"font-weight: 500; color: {{t.muted}}\">· {{p.role}}</span></span>\n<span style=\"display: flex; gap: 5px; flex-wrap: wrap\">\n<sc-for list=\"{{p.chats}}\" as=\"ch\" hint-placeholder-count=\"2\">\n<span class=\"chip\" style=\"height: 22px; padding: 0 8px; border-radius: 11px; display: flex; align-items: center; font-size: 11px; font-weight: 600; background-color: {{t.surf2}}; color: {{t.text}}\">{{ch.n}}</span>\n</sc-for>\n</span>\n</span>\n</div>\n</sc-for>\n</div>\n</section>\n</div>\n<nav class=\"nav\" aria-label=\"Main\" style=\"display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); height: 80px; flex-shrink: 0; background-color: {{t.surf}}\">\n<a href=\"Main.dc.html\" style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; text-decoration: none; font-size: 12px; font-weight: 600; opacity: 0.75; color: {{t.text}}\">\n<span style=\"height: 30px; display: flex; align-items: center\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M4 5h16v11H9l-5 4z\"></path></svg></span>\nChats\n</a>\n<a href=\"Verdict.dc.html\" aria-current=\"page\" style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; text-decoration: none; font-size: 12px; font-weight: 700; color: {{t.text}}\">\n<span style=\"width: 64px; height: 32px; border-radius: 16px; display: flex; align-items: center; justify-content: center; background-color: {{t.accentSoft}}; color: {{t.accentText}}\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 9h12v5a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5z\"></path><path d=\"M17 11h1.5a2.5 2.5 0 0 1 0 5H17\"></path><path d=\"M9 3c0 1.5 1 1.5 1 3M13 3c0 1.5 1 1.5 1 3\"></path></svg></span>\nThe Tea\n</a>\n<a href=\"Builder.dc.html\" style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; text-decoration: none; font-size: 12px; font-weight: 600; opacity: 0.75; color: {{t.text}}\">\n<span style=\"height: 30px; display: flex; align-items: center\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M4 7h10M18 7h2M4 17h4M12 17h8\"></path><circle cx=\"16\" cy=\"7\" r=\"2\"></circle><circle cx=\"10\" cy=\"17\" r=\"2\"></circle></svg></span>\nControls\n</a>\n</nav>\n</div>\n", logic: function (DCLogic) {

var THEMES = {
  Night: { bg: '#111418', surf: '#191D22', surf2: '#283039', line: '#20252B', text: '#ECEEF0', muted: '#9BA4AE', accent: '#9CCFBE', accentInk: '#0F1D19', accentSoft: '#1F2F2A', accentText: '#A8DCCB', spiceOff: '#323A44' },
  Day: { bg: '#F4F2EE', surf: '#FFFFFF', surf2: '#EFECE6', line: '#E6E2DA', text: '#22262B', muted: '#5C626A', accent: '#2F7563', accentInk: '#FFFFFF', accentSoft: '#D7EAE3', accentText: '#255E50', spiceOff: '#E2DED6' }
};
var SHAPE_FN = {
  circle: function () { return 0.5; },
  cookie: function (t) { return 0.5 * (1 + 0.07 * Math.cos(9 * (t + Math.PI / 2))); },
  clover: function (t) { return 0.5 * (1 + 0.2 * Math.cos(4 * t)); },
  sunny: function (t) { return 0.5 * (1 + 0.05 * Math.cos(8 * t)); },
  flower: function (t) { return 0.5 * (1 + 0.12 * Math.cos(6 * t)); },
  gem: function (t) { return 0.5 * (1 + 0.06 * Math.cos(6 * t + Math.PI)); },
  burst: function (t) { return 0.5 * (1 + 0.085 * Math.cos(12 * t)); },
  squircle: function (t) { var c = Math.abs(Math.cos(t)), s = Math.abs(Math.sin(t)); return 0.5 / Math.pow(Math.pow(c, 4) + Math.pow(s, 4), 0.25); }
};
var SHAPE_CACHE = {};
function shape(k) {
  if (SHAPE_CACHE[k]) { return SHAPE_CACHE[k]; }
  var f = SHAPE_FN[k] || SHAPE_FN.circle, pts = [], n = 56, i;
  for (i = 0; i < n; i++) { var a = 2 * Math.PI * i / n - Math.PI / 2, r = f(a); pts.push([0.5 + r * Math.cos(a), 0.5 + r * Math.sin(a)]); }
  var xs = pts.map(function (p) { return p[0]; }), ys = pts.map(function (p) { return p[1]; });
  var mnx = Math.min.apply(null, xs), mxx = Math.max.apply(null, xs), mny = Math.min.apply(null, ys), mxy = Math.max.apply(null, ys);
  var sc = 1 / Math.max(mxx - mnx, mxy - mny), cx = (mnx + mxx) / 2, cy = (mny + mxy) / 2;
  SHAPE_CACHE[k] = 'polygon(' + pts.map(function (p) { return ((0.5 + (p[0] - cx) * sc) * 100).toFixed(1) + '% ' + ((0.5 + (p[1] - cy) * sc) * 100).toFixed(1) + '%'; }).join(',') + ')';
  return SHAPE_CACHE[k];
}
var PSHAPE = { Linda: 'cookie', Tyler: 'burst', Rick: 'squircle', Priya: 'sunny', Mia: 'clover', Gary: 'gem' };
var STORIES = [
  { where: 'FAMILY × OFFICE', color: '#E6D58F', title: 'The VP lie', status: 'Boiling', heat: 5, summary: "Tyler's “VP” title has survived three days. His mom approves his paychecks. Grandma doesn't know yet, and everyone is terrified of the day she finds out." },
  { where: 'FAMILY × HOA', color: '#A7C7C2', title: 'The 1997 casserole', status: 'Cold case', heat: 3, summary: "Barb brings it up at every HOA meeting. June refuses to elaborate. Rick starts sweating whenever anyone says “Pyrex.”" },
  { where: 'OFFICE × BOOK CLUB', color: '#D9A3B0', title: 'Priya vs. the 4:55 sync', status: 'Brewing', heat: 4, summary: "Priya now reads one page of a novel for every Gary email. She's on page 212. The book club has never discussed a book." },
  { where: 'NIGHT SHIFT × FAMILY', color: '#9DBFA8', title: 'Fork guy', status: 'Recurring', heat: 2, summary: "A man keeps showing up to the ER holding a fork. Mia has stopped asking. The Hendersons started a betting pool on why." }
];
var PEOPLE = [
  { name: 'Linda', role: 'Mom, payroll', color: '#E8B79E', chats: ['Family', 'Q3 Synergy', 'Book Club'] },
  { name: 'Tyler', role: 'Intern, “VP”', color: '#E6D58F', chats: ['Family', 'Q3 Synergy'] },
  { name: 'Rick', role: 'Dad, beige loyalist', color: '#9EC1E0', chats: ['Family', 'HOA'] },
  { name: 'Priya', role: 'HR, tired', color: '#D9A3B0', chats: ['Q3 Synergy', 'Book Club'] },
  { name: 'Mia', role: 'ER nurse', color: '#9DBFA8', chats: ['Family', 'Night Shift'] },
  { name: 'Gary', role: 'Manager, vibes', color: '#C9C4B5', chats: ['Q3 Synergy', 'HOA'] }
];
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { open: 0 };
  }
  renderVals() {
    var self = this;
    var t = THEMES[this.props.theme] || THEMES.Night;
    var stories = STORIES.map(function (s, i) {
      var on = self.state.open === i;
      var spice = [];
      for (var k = 0; k < 5; k++) { spice.push({ c: k < s.heat ? s.color : t.spiceOff }); }
      return {
        where: s.where, color: s.color, title: s.title, status: s.status, summary: s.summary, spice: spice,
        open: on, cls: on ? 'open' : '', expanded: on ? 'true' : 'false',
        toggle: function () { self.setState({ open: on ? -1 : i }); }
      };
    });
    var people = PEOPLE.map(function (p, i) {
      return {
        name: p.name, role: p.role, color: p.color, initial: p.name.charAt(0), shape: shape(PSHAPE[p.name]),
        chats: p.chats.map(function (n) { return { n: n }; }),
        border: i === PEOPLE.length - 1 ? 'transparent' : t.line
      };
    });
    return { t: t, stories: stories, people: people };
  }
}

return Component;
} });
define("Builder", { template: "\n\n<div style=\"width: 100%; height: 100vh; height: 100dvh; box-sizing: border-box; display: flex; flex-direction: column; overflow: hidden; font-family: 'Roboto Flex', sans-serif; background-color: {{t.bg}}; color: {{t.text}}\">\n<div class=\"scroll\" style=\"flex-grow: 1; min-height: 0; overflow-y: auto; display: flex; flex-direction: column; gap: 22px; padding: 26px 20px 20px 20px\">\n<header style=\"display: flex; flex-direction: column; gap: 4px\">\n<h1 style=\"margin: 0; font-size: 36px; line-height: 1; font-weight: 860; font-variation-settings: 'wdth' 130; letter-spacing: -0.025em\">Controls</h1>\n<span style=\"font-size: 14px; color: {{t.muted}}\">You're the fly. You're also the boss.</span>\n</header>\n<section style=\"display: flex; flex-direction: column; gap: 14px; padding: 18px; border-radius: 24px; background-color: {{t.accentSoft}}\">\n<div style=\"display: flex; align-items: center; justify-content: space-between; gap: 12px\">\n<span style=\"display: flex; flex-direction: column; gap: 3px\">\n<span style=\"font-size: 16px; font-weight: 700\">Pause every chat</span>\n<span style=\"font-size: 13px; color: {{t.muted}}\">{{pauseHint}}</span>\n</span>\n<button class=\"sw {{sw.pauseAll.cls}}\" onClick=\"{{sw.pauseAll.toggle}}\" aria-pressed=\"{{sw.pauseAll.pressed}}\" aria-label=\"Pause every chat\" style=\"width: 52px; height: 44px; flex-shrink: 0; border: none; background-color: transparent; padding: 0; display: flex; align-items: center\">\n<span class=\"track\" style=\"width: 48px; height: 28px; border-radius: 14px; padding: 4px; box-sizing: border-box; display: flex; align-items: center; background-color: {{sw.pauseAll.track}}\"><span class=\"knob\" style=\"width: 20px; height: 20px; border-radius: 10px; background-color: {{sw.pauseAll.knob}}\"></span></span>\n</button>\n</div>\n<button class=\"big\" onClick=\"{{stopToday}}\" style=\"height: 48px; border-radius: 24px; border: none; font-size: 15px; font-weight: 700; background-color: {{t.accent}}; color: {{t.accentInk}}\">{{stopText}}</button>\n</section>\n<section style=\"display: flex; flex-direction: column; gap: 10px\">\n<h2 style=\"margin: 0; font-size: 18px; font-weight: 700\">Mute a chat</h2>\n<div style=\"display: flex; flex-direction: column; border-radius: 22px; padding: 4px 6px 4px 14px; background-color: {{t.surf}}\">\n<sc-for list=\"{{chats}}\" as=\"c\" hint-placeholder-count=\"5\">\n<div style=\"display: flex; align-items: center; gap: 12px; padding: 6px 0; border-bottom: 1px solid {{c.border}}\">\n<span class=\"av\" style=\"width: 38px; height: 38px; flex-shrink: 0; clip-path: {{c.shape}}; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 12px; color: #1B1E22; background-color: {{c.color}}\">{{c.mono}}</span>\n<span style=\"flex-grow: 1; font-size: 15px; font-weight: 600\">{{c.name}}</span>\n<button class=\"sw {{c.cls}}\" onClick=\"{{c.toggle}}\" aria-pressed=\"{{c.pressed}}\" aria-label=\"{{c.label}}\" style=\"width: 52px; height: 44px; flex-shrink: 0; border: none; background-color: transparent; padding: 0; display: flex; align-items: center\">\n<span class=\"track\" style=\"width: 48px; height: 28px; border-radius: 14px; padding: 4px; box-sizing: border-box; display: flex; align-items: center; background-color: {{c.track}}\"><span class=\"knob\" style=\"width: 20px; height: 20px; border-radius: 10px; background-color: {{c.knob}}\"></span></span>\n</button>\n</div>\n</sc-for>\n</div>\n</section>\n<section style=\"display: flex; flex-direction: column; gap: 10px\">\n<div style=\"display: flex; flex-direction: column; gap: 2px\">\n<h2 style=\"margin: 0; font-size: 18px; font-weight: 700\">Mute a person everywhere</h2>\n<span style=\"font-size: 13px; color: {{t.muted}}\">They'll still talk. You just won't have to read it.</span>\n</div>\n<div style=\"display: flex; flex-wrap: wrap; gap: 8px\">\n<sc-for list=\"{{people}}\" as=\"p\" hint-placeholder-count=\"7\">\n<button class=\"pchip {{p.cls}}\" onClick=\"{{p.toggle}}\" aria-pressed=\"{{p.pressed}}\" style=\"display: flex; align-items: center; gap: 8px; height: 40px; padding: 0 14px 0 6px; border-radius: 20px; border: none; background-color: {{t.surf}}; color: {{t.text}}\">\n<span style=\"width: 28px; height: 28px; clip-path: {{p.shape}}; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 12px; color: #1B1E22; background-color: {{p.color}}\">{{p.initial}}</span>\n<span class=\"nm\" style=\"font-size: 13px; font-weight: 600\">{{p.name}}</span>\n</button>\n</sc-for>\n</div>\n</section>\n<section style=\"display: flex; flex-direction: column; gap: 14px\">\n<h2 style=\"margin: 0; font-size: 18px; font-weight: 700\">How it feels</h2>\n<sc-for list=\"{{segs}}\" as=\"g\" hint-placeholder-count=\"2\">\n<div style=\"display: flex; flex-direction: column; gap: 8px\">\n<span style=\"font-size: 13px; font-weight: 600; color: {{t.muted}}\">{{g.label}}</span>\n<div role=\"radiogroup\" aria-label=\"{{g.label}}\" style=\"display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 3px\">\n<sc-for list=\"{{g.opts}}\" as=\"o\" hint-placeholder-count=\"3\">\n<button class=\"seg\" role=\"radio\" aria-checked=\"{{o.checked}}\" onClick=\"{{o.pick}}\" style=\"height: 44px; border-radius: {{o.radius}}; border: none; font-size: 14px; font-weight: 650; background-color: {{o.bg}}; color: {{o.fg}}\">{{o.label}}</button>\n</sc-for>\n</div>\n<span style=\"font-size: 12px; color: {{t.muted}}\">{{g.hint}}</span>\n</div>\n</sc-for>\n</section>\n<section style=\"display: flex; flex-direction: column; gap: 10px\">\n<h2 style=\"margin: 0; font-size: 18px; font-weight: 700\">House rules</h2>\n<div style=\"display: flex; flex-direction: column; border-radius: 22px; padding: 4px 6px 4px 16px; background-color: {{t.surf}}\">\n<sc-for list=\"{{rules}}\" as=\"r\" hint-placeholder-count=\"3\">\n<div style=\"display: flex; align-items: center; gap: 12px; padding: 8px 0; border-bottom: 1px solid {{r.border}}\">\n<span style=\"display: flex; flex-direction: column; gap: 2px; flex-grow: 1\">\n<span style=\"font-size: 15px; font-weight: 600\">{{r.name}}</span>\n<span style=\"font-size: 12px; color: {{t.muted}}\">{{r.hint}}</span>\n</span>\n<button class=\"sw {{r.cls}}\" onClick=\"{{r.toggle}}\" aria-pressed=\"{{r.pressed}}\" aria-label=\"{{r.name}}\" style=\"width: 52px; height: 44px; flex-shrink: 0; border: none; background-color: transparent; padding: 0; display: flex; align-items: center\">\n<span class=\"track\" style=\"width: 48px; height: 28px; border-radius: 14px; padding: 4px; box-sizing: border-box; display: flex; align-items: center; background-color: {{r.track}}\"><span class=\"knob\" style=\"width: 20px; height: 20px; border-radius: 10px; background-color: {{r.knob}}\"></span></span>\n</button>\n</div>\n</sc-for>\n</div>\n</section>\n</div>\n<nav class=\"nav\" aria-label=\"Main\" style=\"display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); height: 80px; flex-shrink: 0; background-color: {{t.surf}}\">\n<a href=\"Main.dc.html\" style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; text-decoration: none; font-size: 12px; font-weight: 600; opacity: 0.75; color: {{t.text}}\">\n<span style=\"height: 30px; display: flex; align-items: center\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M4 5h16v11H9l-5 4z\"></path></svg></span>\nChats\n</a>\n<a href=\"Verdict.dc.html\" style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; text-decoration: none; font-size: 12px; font-weight: 600; opacity: 0.75; color: {{t.text}}\">\n<span style=\"height: 30px; display: flex; align-items: center\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 9h12v5a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5z\"></path><path d=\"M17 11h1.5a2.5 2.5 0 0 1 0 5H17\"></path><path d=\"M9 3c0 1.5 1 1.5 1 3M13 3c0 1.5 1 1.5 1 3\"></path></svg></span>\nThe Tea\n</a>\n<a href=\"Builder.dc.html\" aria-current=\"page\" style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; text-decoration: none; font-size: 12px; font-weight: 700; color: {{t.text}}\">\n<span style=\"width: 64px; height: 32px; border-radius: 16px; display: flex; align-items: center; justify-content: center; background-color: {{t.accentSoft}}; color: {{t.accentText}}\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M4 7h10M18 7h2M4 17h4M12 17h8\"></path><circle cx=\"16\" cy=\"7\" r=\"2\"></circle><circle cx=\"10\" cy=\"17\" r=\"2\"></circle></svg></span>\nControls\n</a>\n</nav>\n</div>\n", logic: function (DCLogic) {

var THEMES = {
  Night: { bg: '#111418', surf: '#191D22', surf2: '#2B323B', line: '#20252B', text: '#ECEEF0', muted: '#9BA4AE', accent: '#9CCFBE', accentInk: '#0F1D19', accentSoft: '#1F2F2A', accentText: '#A8DCCB', trackOff: '#3A434D', knobOff: '#9BA4AE' },
  Day: { bg: '#F4F2EE', surf: '#FFFFFF', surf2: '#EFECE6', line: '#E6E2DA', text: '#22262B', muted: '#5C626A', accent: '#2F7563', accentInk: '#FFFFFF', accentSoft: '#D7EAE3', accentText: '#255E50', trackOff: '#D3CFC6', knobOff: '#FFFFFF' }
};
var SHAPE_FN = {
  circle: function () { return 0.5; },
  cookie: function (t) { return 0.5 * (1 + 0.07 * Math.cos(9 * (t + Math.PI / 2))); },
  clover: function (t) { return 0.5 * (1 + 0.2 * Math.cos(4 * t)); },
  sunny: function (t) { return 0.5 * (1 + 0.05 * Math.cos(8 * t)); },
  flower: function (t) { return 0.5 * (1 + 0.12 * Math.cos(6 * t)); },
  gem: function (t) { return 0.5 * (1 + 0.06 * Math.cos(6 * t + Math.PI)); },
  burst: function (t) { return 0.5 * (1 + 0.085 * Math.cos(12 * t)); },
  squircle: function (t) { var c = Math.abs(Math.cos(t)), s = Math.abs(Math.sin(t)); return 0.5 / Math.pow(Math.pow(c, 4) + Math.pow(s, 4), 0.25); }
};
var SHAPE_CACHE = {};
function shape(k) {
  if (SHAPE_CACHE[k]) { return SHAPE_CACHE[k]; }
  var f = SHAPE_FN[k] || SHAPE_FN.circle, pts = [], n = 56, i;
  for (i = 0; i < n; i++) { var a = 2 * Math.PI * i / n - Math.PI / 2, r = f(a); pts.push([0.5 + r * Math.cos(a), 0.5 + r * Math.sin(a)]); }
  var xs = pts.map(function (p) { return p[0]; }), ys = pts.map(function (p) { return p[1]; });
  var mnx = Math.min.apply(null, xs), mxx = Math.max.apply(null, xs), mny = Math.min.apply(null, ys), mxy = Math.max.apply(null, ys);
  var sc = 1 / Math.max(mxx - mnx, mxy - mny), cx = (mnx + mxx) / 2, cy = (mny + mxy) / 2;
  SHAPE_CACHE[k] = 'polygon(' + pts.map(function (p) { return ((0.5 + (p[0] - cx) * sc) * 100).toFixed(1) + '% ' + ((0.5 + (p[1] - cy) * sc) * 100).toFixed(1) + '%'; }).join(',') + ')';
  return SHAPE_CACHE[k];
}
var CSH = { family: 'cookie', office: 'squircle', hoa: 'gem', book: 'flower', er: 'clover' };
var PSH = { linda: 'cookie', rick: 'squircle', june: 'flower', tyler: 'burst', mia: 'clover', gary: 'gem', priya: 'sunny' };
var CHATS = [
  { id: 'family', name: 'Henderson Family', mono: 'HF', color: '#E8B79E' },
  { id: 'office', name: 'Q3 Synergy Task Force', mono: 'Q3', color: '#C9C4B5' },
  { id: 'hoa', name: 'Lakeview HOA (Official)', mono: 'HOA', color: '#A7C7C2' },
  { id: 'book', name: 'Book Club (We Don’t Read)', mono: 'BC', color: '#D9A3B0' },
  { id: 'er', name: 'Night Shift, Bay 4', mono: 'ER', color: '#9DBFA8' }
];
var PEOPLE = [
  { id: 'linda', name: 'Linda', color: '#E8B79E' },
  { id: 'rick', name: 'Rick', color: '#9EC1E0' },
  { id: 'june', name: 'Grandma June', color: '#B8A9D9' },
  { id: 'tyler', name: 'Tyler', color: '#E6D58F' },
  { id: 'mia', name: 'Mia', color: '#9DBFA8' },
  { id: 'gary', name: 'Gary', color: '#C9C4B5' },
  { id: 'priya', name: 'Priya', color: '#D9A3B0' }
];
var SEGS = [
  { id: 'pace', label: 'Pace', opts: ['Chill', 'Normal', 'Binge'], hints: { Chill: 'A message every few seconds. Good for falling asleep to.', Normal: 'Like a real group chat that never sleeps.', Binge: 'Everyone types at once. Bring snacks.' } },
  { id: 'spice', label: 'Spice', opts: ['Cozy', 'Snarky', 'Pitch black'], hints: { Cozy: 'Gentle teasing. Grandma is on her best behavior.', Snarky: 'Sarcasm, satire, and passive-aggressive thumbs-ups.', 'Pitch black': 'Dark humor about death, taxes, and the HOA.' } }
];
var RULES = [
  { id: 'up', name: 'Punch up, not down', hint: 'Jokes aim at bosses, systems, and Gary.' },
  { id: 'sleep', name: 'New drama while I sleep', hint: 'Wake up to a recap of what you missed.' },
  { id: 'quiet', name: 'Quiet hours, 11pm to 7am', hint: 'No pings. The chats keep going quietly.' }
];
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { pauseAll: false, stopped: false, muted: { hoa: true }, mutedP: { gary: false }, pace: 'Normal', spice: 'Snarky', up: true, sleep: true, quiet: false };
  }
  sw(on, t) { return { cls: on ? 'on' : '', pressed: on ? 'true' : 'false', track: on ? t.accent : t.trackOff, knob: on ? t.accentInk : t.knobOff }; }
  renderVals() {
    var self = this;
    var st = this.state;
    var t = THEMES[this.props.theme] || THEMES.Night;
    var pa = this.sw(st.pauseAll, t);
    pa.toggle = function () { self.setState({ pauseAll: !st.pauseAll }); };
    var chats = CHATS.map(function (c, i) {
      var m = !!st.muted[c.id];
      var s = self.sw(m, t);
      s.name = c.name; s.mono = c.mono; s.color = c.color; s.shape = shape(CSH[c.id]);
      s.label = (m ? 'Unmute ' : 'Mute ') + c.name;
      s.border = i === CHATS.length - 1 ? 'transparent' : t.line;
      s.toggle = function () { var o = Object.assign({}, st.muted); o[c.id] = !m; self.setState({ muted: o }); };
      return s;
    });
    var people = PEOPLE.map(function (p) {
      var m = !!st.mutedP[p.id];
      return {
        name: p.name, color: p.color, initial: p.id === 'june' ? 'J' : p.name.charAt(0), shape: shape(PSH[p.id]),
        cls: m ? 'off' : '', pressed: m ? 'true' : 'false',
        toggle: function () { var o = Object.assign({}, st.mutedP); o[p.id] = !m; self.setState({ mutedP: o }); }
      };
    });
    var segs = SEGS.map(function (g) {
      return {
        label: g.label, hint: g.hints[st[g.id]],
        opts: g.opts.map(function (o, i) {
          var on = st[g.id] === o;
          var rad = on ? '20px' : (i === 0 ? '20px 8px 8px 20px' : i === g.opts.length - 1 ? '8px 20px 20px 8px' : '8px');
          return { label: o, radius: rad, checked: on ? 'true' : 'false', bg: on ? t.accent : t.surf2, fg: on ? t.accentInk : t.text, pick: function () { var x = {}; x[g.id] = o; self.setState(x); } };
        })
      };
    });
    var rules = RULES.map(function (r, i) {
      var on = !!st[r.id];
      var s = self.sw(on, t);
      s.name = r.name; s.hint = r.hint;
      s.border = i === RULES.length - 1 ? 'transparent' : t.line;
      s.toggle = function () { var x = {}; x[r.id] = !on; self.setState(x); };
      return s;
    });
    return {
      t: t,
      sw: { pauseAll: pa },
      pauseHint: st.pauseAll ? 'Everyone is frozen mid-sentence.' : 'Freeze everyone mid-sentence.',
      stopText: st.stopped ? 'Resume listening' : 'Stop listening for today',
      stopToday: function () { self.setState({ stopped: !st.stopped }); },
      chats: chats, people: people, segs: segs, rules: rules
    };
  }
}

return Component;
} });
define("Media", { template: "\n\n<div style=\"width: 100%; height: 100vh; height: 100dvh; box-sizing: border-box; display: flex; flex-direction: column; overflow: hidden; font-family: 'Roboto Flex', sans-serif; background-color: {{t.bg}}; color: {{t.text}}\">\n<header style=\"display: flex; align-items: center; gap: 10px; padding: 18px 16px 6px 10px\">\n<a href=\"Arena.dc.html\" class=\"back\" aria-label=\"Back to the live chat\" style=\"width: 44px; height: 44px; flex-shrink: 0; border-radius: 22px; display: flex; align-items: center; justify-content: center; color: {{t.text}}\">\n<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M15 5l-7 7 7 7\"></path></svg>\n</a>\n<div style=\"display: flex; flex-direction: column; gap: 2px\">\n<h1 style=\"margin: 0; font-size: 26px; line-height: 1.05; font-weight: 860; font-variation-settings: 'wdth' 125; letter-spacing: -0.02em\">Shared photos</h1>\n<span style=\"font-size: 13px; color: {{t.muted}}\">{{countLine}}</span>\n</div>\n</header>\n<div class=\"filters\" role=\"radiogroup\" aria-label=\"Filter by chat\" style=\"display: flex; gap: 8px; overflow-x: auto; padding: 10px 20px 14px 20px\">\n<sc-for list=\"{{filters}}\" as=\"f\" hint-placeholder-count=\"6\">\n<button class=\"fchip\" role=\"radio\" aria-checked=\"{{f.checked}}\" onClick=\"{{f.pick}}\" style=\"flex-shrink: 0; height: 36px; padding: 0 14px; border-radius: 18px; border: none; font-size: 13px; font-weight: 600; background-color: {{f.bg}}; color: {{f.fg}}\">{{f.label}}</button>\n</sc-for>\n</div>\n<div class=\"scroll\" style=\"flex-grow: 1; min-height: 0; overflow-y: auto; padding: 0 20px 24px 20px\">\n<div style=\"display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px\">\n<sc-for list=\"{{items}}\" as=\"it\" hint-placeholder-count=\"8\">\n<figure class=\"tile\" style=\"margin: 0; display: flex; flex-direction: column; border-radius: 18px; overflow: hidden; background-color: {{t.surf}}\">\n<dc-import name=\"Pic\" kind=\"{{it.kind}}\" top=\"{{it.top}}\" bot=\"{{it.bot}}\" hint-size=\"180px,127px\"></dc-import>\n<figcaption style=\"display: flex; align-items: center; gap: 8px; padding: 8px 10px 10px 10px\">\n<span style=\"width: 24px; height: 24px; flex-shrink: 0; clip-path: {{it.shape}}; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 800; color: #1B1E22; background-color: {{it.color}}\">{{it.initial}}</span>\n<span style=\"display: flex; flex-direction: column; min-width: 0\">\n<span style=\"font-size: 12px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis\">{{it.who}}</span>\n<span style=\"font-size: 11px; color: {{t.muted}}; white-space: nowrap; overflow: hidden; text-overflow: ellipsis\">{{it.chatName}}</span>\n</span>\n</figcaption>\n</figure>\n</sc-for>\n</div>\n</div>\n</div>\n", logic: function (DCLogic) {

var THEMES = {
  Night: { bg: '#111418', surf: '#191D22', surf2: '#20252B', text: '#ECEEF0', muted: '#9BA4AE', accent: '#9CCFBE', accentInk: '#0F1D19' },
  Day: { bg: '#F4F2EE', surf: '#FFFFFF', surf2: '#EFECE6', text: '#22262B', muted: '#5C626A', accent: '#2F7563', accentInk: '#FFFFFF' }
};
var SHAPE_FN = {
  circle: function () { return 0.5; },
  cookie: function (t) { return 0.5 * (1 + 0.07 * Math.cos(9 * (t + Math.PI / 2))); },
  clover: function (t) { return 0.5 * (1 + 0.2 * Math.cos(4 * t)); },
  sunny: function (t) { return 0.5 * (1 + 0.05 * Math.cos(8 * t)); },
  flower: function (t) { return 0.5 * (1 + 0.12 * Math.cos(6 * t)); },
  gem: function (t) { return 0.5 * (1 + 0.06 * Math.cos(6 * t + Math.PI)); },
  burst: function (t) { return 0.5 * (1 + 0.085 * Math.cos(12 * t)); },
  squircle: function (t) { var c = Math.abs(Math.cos(t)), s = Math.abs(Math.sin(t)); return 0.5 / Math.pow(Math.pow(c, 4) + Math.pow(s, 4), 0.25); }
};
var SHAPE_CACHE = {};
function shape(k) {
  if (SHAPE_CACHE[k]) { return SHAPE_CACHE[k]; }
  var f = SHAPE_FN[k] || SHAPE_FN.circle, pts = [], n = 56, i;
  for (i = 0; i < n; i++) { var a = 2 * Math.PI * i / n - Math.PI / 2, r = f(a); pts.push([0.5 + r * Math.cos(a), 0.5 + r * Math.sin(a)]); }
  var xs = pts.map(function (p) { return p[0]; }), ys = pts.map(function (p) { return p[1]; });
  var mnx = Math.min.apply(null, xs), mxx = Math.max.apply(null, xs), mny = Math.min.apply(null, ys), mxy = Math.max.apply(null, ys);
  var sc = 1 / Math.max(mxx - mnx, mxy - mny), cx = (mnx + mxx) / 2, cy = (mny + mxy) / 2;
  SHAPE_CACHE[k] = 'polygon(' + pts.map(function (p) { return ((0.5 + (p[0] - cx) * sc) * 100).toFixed(1) + '% ' + ((0.5 + (p[1] - cy) * sc) * 100).toFixed(1) + '%'; }).join(',') + ')';
  return SHAPE_CACHE[k];
}
var PSH = { linda: 'cookie', rick: 'squircle', june: 'flower', tyler: 'burst', mia: 'clover', gary: 'gem', barb: 'cookie', denise: 'flower', fern: 'sunny', marcus: 'burst', priya: 'sunny' };
var PEOPLE = {
  linda: ['Linda', 'L', '#E8B79E'], rick: ['Rick', 'R', '#9EC1E0'], june: ['Grandma June', 'J', '#B8A9D9'], tyler: ['Tyler', 'T', '#E6D58F'], mia: ['Mia', 'M', '#9DBFA8'],
  gary: ['Gary', 'G', '#C9C4B5'], barb: ['Barb', 'B', '#E3A3A3'], denise: ['Denise', 'D', '#D6B8E0'], fern: ['Fern', 'F', '#A7C7C2'], marcus: ['Marcus', 'M', '#A9B8E8'], priya: ['Priya', 'P', '#D9A3B0']
};
var CHATN = { family: 'Henderson Family', office: 'Q3 Synergy', hoa: 'Lakeview HOA', book: 'Book Club', er: 'Night Shift' };
var ITEMS = [
  ['casserole', 'june', 'family'], ['thermostat', 'rick', 'family'], ['cat', 'june', 'family'], ['selfie', 'rick', 'family'],
  ['sunset', 'linda', 'family'], ['labelmaker', 'tyler', 'family'], ['raccoon', 'tyler', 'family', 'Me launching my 5th podcast', 'My 0 listeners'],
  ['mailbox', 'rick', 'family'], ['invite', 'gary', 'office'], ['receipt', 'linda', 'office'], ['whiteboard', 'gary', 'office'],
  ['mug', 'gary', 'office'], ['vending', 'tyler', 'office'], ['hoaletter', 'barb', 'hoa'], ['gnome', 'barb', 'hoa'],
  ['parking', 'barb', 'hoa'], ['raccoon', 'denise', 'hoa', 'When Barb says', '“Friendly reminder”'], ['book', 'fern', 'book'],
  ['crystal', 'fern', 'book'], ['xray', 'mia', 'er'], ['coffee', 'marcus', 'er'], ['plant', 'linda', 'family'], ['bingo', 'june', 'book']
];
class Component extends DCLogic {
  constructor(props) { super(props); this.state = { filter: 'all' }; }
  renderVals() {
    var self = this;
    var t = THEMES[this.props.theme] || THEMES.Night;
    var f = this.state.filter;
    var items = ITEMS.filter(function (x) { return f === 'all' || x[2] === f; }).map(function (x) {
      var p = PEOPLE[x[1]];
      return { kind: x[0], top: x[3] || '', bot: x[4] || '', who: p[0], initial: p[1], color: p[2], shape: shape(PSH[x[1]]), chatName: CHATN[x[2]] };
    });
    var filters = [['all', 'All chats']].concat(Object.keys(CHATN).map(function (k) { return [k, CHATN[k]]; })).map(function (o) {
      var on = f === o[0];
      return { label: o[1], checked: on ? 'true' : 'false', bg: on ? t.accent : t.surf, fg: on ? t.accentInk : t.text, pick: function () { self.setState({ filter: o[0] }); } };
    });
    return { t: t, items: items, filters: filters, countLine: items.length + ' photos and memes, all evidence' };
  }
}

return Component;
} });
define("Pic", { template: "\n\n<div role=\"img\" aria-label=\"{{alt}}\" style=\"position: relative; width: 100%; aspect-ratio: 24 / 17; border-radius: 16px; overflow: hidden; background-color: #DDD7CC; font-family: 'Figtree', sans-serif\">\n<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 240 170\" preserveAspectRatio=\"xMidYMid slice\" aria-hidden=\"true\" style=\"display: block; font-family: Figtree, sans-serif\">\n<sc-if value=\"{{is.casserole}}\" hint-placeholder-val=\"{{true}}\">\n<defs><pattern id=\"pgck\" width=\"24\" height=\"24\" patternUnits=\"userSpaceOnUse\"><rect width=\"12\" height=\"12\" fill=\"#E2B8A8\"></rect><rect x=\"12\" y=\"12\" width=\"12\" height=\"12\" fill=\"#E2B8A8\"></rect></pattern></defs>\n<rect width=\"240\" height=\"170\" fill=\"#EADFCF\"></rect>\n<rect width=\"240\" height=\"170\" fill=\"url(#pgck)\" opacity=\"0.55\"></rect>\n<ellipse cx=\"122\" cy=\"118\" rx=\"90\" ry=\"28\" fill=\"#000000\" opacity=\"0.08\"></ellipse>\n<rect x=\"24\" y=\"88\" width=\"22\" height=\"12\" rx=\"6\" fill=\"#BFD8DF\"></rect>\n<rect x=\"194\" y=\"88\" width=\"22\" height=\"12\" rx=\"6\" fill=\"#BFD8DF\"></rect>\n<ellipse cx=\"120\" cy=\"96\" rx=\"80\" ry=\"34\" fill=\"#CFE5EB\"></ellipse>\n<ellipse cx=\"120\" cy=\"92\" rx=\"70\" ry=\"27\" fill=\"#C47F3B\"></ellipse>\n<ellipse cx=\"96\" cy=\"86\" rx=\"16\" ry=\"7\" fill=\"#E3A85C\"></ellipse>\n<ellipse cx=\"142\" cy=\"97\" rx=\"18\" ry=\"7\" fill=\"#E3A85C\"></ellipse>\n<ellipse cx=\"118\" cy=\"99\" rx=\"9\" ry=\"4\" fill=\"#8E5527\"></ellipse>\n<ellipse cx=\"156\" cy=\"83\" rx=\"8\" ry=\"3.5\" fill=\"#8E5527\"></ellipse>\n<circle cx=\"84\" cy=\"96\" r=\"3\" fill=\"#7FA35A\"></circle><circle cx=\"104\" cy=\"79\" r=\"3\" fill=\"#7FA35A\"></circle><circle cx=\"128\" cy=\"84\" r=\"3\" fill=\"#7FA35A\"></circle><circle cx=\"164\" cy=\"93\" r=\"3\" fill=\"#7FA35A\"></circle><circle cx=\"110\" cy=\"106\" r=\"3\" fill=\"#7FA35A\"></circle><circle cx=\"148\" cy=\"106\" r=\"3\" fill=\"#7FA35A\"></circle>\n<line x1=\"132\" y1=\"90\" x2=\"132\" y2=\"56\" stroke=\"#A47A50\" stroke-width=\"2\"></line>\n<path d=\"M132 56 h24 l-5 6 l5 6 h-24z\" fill=\"#F4F1EA\"></path>\n<text x=\"135\" y=\"65.5\" font-size=\"8\" font-weight=\"800\" fill=\"#C0504D\">1997</text>\n<path d=\"M92 62c-6-8 6-12 0-20M114 56c-6-8 6-12 0-20M164 64c-6-8 6-12 0-20\" stroke=\"#FFFFFF\" stroke-width=\"3\" fill=\"none\" stroke-linecap=\"round\" opacity=\"0.75\"></path>\n</sc-if>\n<sc-if value=\"{{is.mailbox}}\" hint-placeholder-val=\"{{false}}\">\n<rect width=\"240\" height=\"170\" fill=\"#CFE2EE\"></rect>\n<circle cx=\"204\" cy=\"32\" r=\"16\" fill=\"#F6E7B8\"></circle>\n<rect x=\"16\" y=\"74\" width=\"46\" height=\"34\" fill=\"#E8DCCB\"></rect>\n<path d=\"M12 76 L39 56 L66 76z\" fill=\"#C9A99A\"></path>\n<rect x=\"34\" y=\"88\" width=\"10\" height=\"20\" fill=\"#B9A08E\"></rect>\n<path d=\"M0 112 Q60 100 120 108 T240 104 V170 H0z\" fill=\"#A9C98C\"></path>\n<rect x=\"0\" y=\"134\" width=\"240\" height=\"36\" fill=\"#94B877\"></rect>\n<rect x=\"113\" y=\"86\" width=\"14\" height=\"64\" fill=\"#8A6E52\"></rect>\n<path d=\"M74 88 V64 a24 24 0 0 1 24 -24 h44 a24 24 0 0 1 24 24 V88z\" fill=\"#D8CBB0\"></path>\n<rect x=\"74\" y=\"84\" width=\"92\" height=\"6\" fill=\"#C6B899\"></rect>\n<rect x=\"166\" y=\"48\" width=\"5\" height=\"34\" fill=\"#D9705C\"></rect>\n<rect x=\"166\" y=\"48\" width=\"18\" height=\"11\" fill=\"#D9705C\"></rect>\n<g transform=\"rotate(-6 104 66)\"><rect x=\"88\" y=\"54\" width=\"34\" height=\"24\" fill=\"#FFFFFF\"></rect><rect x=\"92\" y=\"59\" width=\"22\" height=\"3\" fill=\"#D9705C\"></rect><rect x=\"92\" y=\"65\" width=\"26\" height=\"2\" fill=\"#B7B0A3\"></rect><rect x=\"92\" y=\"69\" width=\"20\" height=\"2\" fill=\"#B7B0A3\"></rect><rect x=\"92\" y=\"73\" width=\"14\" height=\"2\" fill=\"#B7B0A3\"></rect></g>\n<rect x=\"98\" y=\"50\" width=\"12\" height=\"6\" fill=\"#F2E7A8\" opacity=\"0.9\" transform=\"rotate(-10 104 53)\"></rect>\n<circle cx=\"190\" cy=\"140\" r=\"4\" fill=\"#F3E08A\"></circle><circle cx=\"200\" cy=\"146\" r=\"4\" fill=\"#E8B79E\"></circle><circle cx=\"58\" cy=\"146\" r=\"4\" fill=\"#F3E08A\"></circle>\n</sc-if>\n<sc-if value=\"{{is.thermostat}}\" hint-placeholder-val=\"{{false}}\">\n<rect width=\"240\" height=\"170\" fill=\"#EDE6DA\"></rect>\n<circle cx=\"123\" cy=\"89\" r=\"60\" fill=\"#000000\" opacity=\"0.06\"></circle>\n<circle cx=\"120\" cy=\"85\" r=\"58\" fill=\"#F8F6F1\" stroke=\"#DAD2C4\" stroke-width=\"2\"></circle>\n<path d=\"M86 119 A48 48 0 1 1 154 119\" stroke=\"#E6E0D5\" stroke-width=\"7\" fill=\"none\" stroke-linecap=\"round\"></path>\n<path d=\"M86 119 A48 48 0 0 1 150 47\" stroke=\"#E8946B\" stroke-width=\"7\" fill=\"none\" stroke-linecap=\"round\"></path>\n<text x=\"120\" y=\"96\" text-anchor=\"middle\" font-size=\"34\" font-weight=\"800\" fill=\"#2B2F33\">74°</text>\n<text x=\"120\" y=\"113\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"800\" letter-spacing=\"2\" fill=\"#E8946B\">HUMID</text>\n<g transform=\"rotate(8 196 44)\"><rect x=\"174\" y=\"22\" width=\"46\" height=\"42\" fill=\"#F3E08A\"></rect><text x=\"179\" y=\"37\" font-size=\"8\" font-weight=\"800\" fill=\"#4A4535\">DON'T</text><text x=\"179\" y=\"47\" font-size=\"8\" font-weight=\"800\" fill=\"#4A4535\">TOUCH</text><text x=\"179\" y=\"57\" font-size=\"7\" fill=\"#4A4535\">— Rick</text></g>\n</sc-if>\n<sc-if value=\"{{is.labelmaker}}\" hint-placeholder-val=\"{{false}}\">\n<rect width=\"240\" height=\"170\" fill=\"#D8D0C2\"></rect>\n<rect x=\"0\" y=\"122\" width=\"240\" height=\"48\" fill=\"#CBC2B2\"></rect>\n<g transform=\"rotate(-8 110 90)\">\n<rect x=\"52\" y=\"52\" width=\"120\" height=\"76\" rx=\"14\" fill=\"#E6C65A\"></rect>\n<rect x=\"64\" y=\"62\" width=\"70\" height=\"18\" rx=\"3\" fill=\"#2E3A33\"></rect>\n<text x=\"70\" y=\"75\" font-family=\"ui-monospace, Menlo, monospace\" font-size=\"10\" font-weight=\"700\" fill=\"#9CCFBE\">VP_</text>\n<rect x=\"64\" y=\"88\" width=\"12\" height=\"9\" rx=\"2\" fill=\"#F4E3A2\"></rect><rect x=\"80\" y=\"88\" width=\"12\" height=\"9\" rx=\"2\" fill=\"#F4E3A2\"></rect><rect x=\"96\" y=\"88\" width=\"12\" height=\"9\" rx=\"2\" fill=\"#F4E3A2\"></rect><rect x=\"112\" y=\"88\" width=\"12\" height=\"9\" rx=\"2\" fill=\"#F4E3A2\"></rect><rect x=\"128\" y=\"88\" width=\"12\" height=\"9\" rx=\"2\" fill=\"#F4E3A2\"></rect><rect x=\"144\" y=\"88\" width=\"16\" height=\"9\" rx=\"2\" fill=\"#D9705C\"></rect>\n<rect x=\"64\" y=\"102\" width=\"12\" height=\"9\" rx=\"2\" fill=\"#F4E3A2\"></rect><rect x=\"80\" y=\"102\" width=\"12\" height=\"9\" rx=\"2\" fill=\"#F4E3A2\"></rect><rect x=\"96\" y=\"102\" width=\"28\" height=\"9\" rx=\"2\" fill=\"#F4E3A2\"></rect><rect x=\"128\" y=\"102\" width=\"12\" height=\"9\" rx=\"2\" fill=\"#F4E3A2\"></rect><rect x=\"144\" y=\"102\" width=\"16\" height=\"9\" rx=\"2\" fill=\"#F4E3A2\"></rect>\n</g>\n<g transform=\"rotate(4 190 100)\"><rect x=\"150\" y=\"92\" width=\"88\" height=\"18\" fill=\"#FFFFFF\"></rect><text x=\"155\" y=\"105\" font-family=\"ui-monospace, Menlo, monospace\" font-size=\"9\" font-weight=\"700\" fill=\"#262A2F\">VICE PRESIDENT</text></g>\n<rect x=\"16\" y=\"134\" width=\"54\" height=\"14\" rx=\"5\" fill=\"#5B6670\"></rect>\n<rect x=\"24\" y=\"137\" width=\"34\" height=\"8\" fill=\"#FFFFFF\"></rect>\n<text x=\"26\" y=\"143.5\" font-family=\"ui-monospace, Menlo, monospace\" font-size=\"6\" font-weight=\"700\" fill=\"#262A2F\">TYLER'S</text>\n</sc-if>\n<sc-if value=\"{{is.xray}}\" hint-placeholder-val=\"{{false}}\">\n<rect width=\"240\" height=\"170\" fill=\"#0F151B\"></rect>\n<g fill=\"none\" stroke=\"#BCD3E3\" stroke-linecap=\"round\" opacity=\"0.8\">\n<path d=\"M70 170 L96 110\" stroke-width=\"10\"></path>\n<path d=\"M102 170 L116 112\" stroke-width=\"9\"></path>\n<circle cx=\"104\" cy=\"102\" r=\"7\" stroke-width=\"5\"></circle>\n<circle cx=\"119\" cy=\"99\" r=\"6\" stroke-width=\"5\"></circle>\n<path d=\"M110 92 L118 60 L122 44\" stroke-width=\"6\"></path>\n<path d=\"M122 94 L134 64 L140 50\" stroke-width=\"6\"></path>\n<path d=\"M130 100 L148 76 L156 66\" stroke-width=\"5.5\"></path>\n<path d=\"M134 108 L154 94 L164 88\" stroke-width=\"5\"></path>\n<path d=\"M98 98 L82 80 L74 72\" stroke-width=\"6\"></path>\n</g>\n<g fill=\"#FFFFFF\" transform=\"rotate(20 130 80)\">\n<rect x=\"127\" y=\"54\" width=\"7\" height=\"82\" rx=\"3.5\"></rect>\n<path d=\"M120 24 h21 v20 a10 10 0 0 1 -10 12 h-1 a10 10 0 0 1 -10 -12z\"></path>\n<rect x=\"120\" y=\"6\" width=\"3.5\" height=\"22\" rx=\"1.7\"></rect><rect x=\"126\" y=\"6\" width=\"3.5\" height=\"22\" rx=\"1.7\"></rect><rect x=\"131.5\" y=\"6\" width=\"3.5\" height=\"22\" rx=\"1.7\"></rect><rect x=\"137.5\" y=\"6\" width=\"3.5\" height=\"22\" rx=\"1.7\"></rect>\n</g>\n<text x=\"16\" y=\"28\" font-size=\"18\" font-weight=\"800\" fill=\"#BCD3E3\">L</text>\n<text x=\"226\" y=\"160\" text-anchor=\"end\" font-family=\"ui-monospace, Menlo, monospace\" font-size=\"8\" fill=\"#7D93A2\">BAY 4 · DON'T ASK</text>\n</sc-if>\n<sc-if value=\"{{is.vending}}\" hint-placeholder-val=\"{{false}}\">\n<rect width=\"240\" height=\"170\" fill=\"#2B313B\"></rect>\n<rect x=\"0\" y=\"142\" width=\"240\" height=\"28\" fill=\"#232830\"></rect>\n<rect x=\"62\" y=\"12\" width=\"116\" height=\"150\" rx=\"8\" fill=\"#3E5064\"></rect>\n<rect x=\"72\" y=\"22\" width=\"76\" height=\"118\" rx=\"4\" fill=\"#24303C\"></rect>\n<path d=\"M80 26 L100 26 L84 136 L74 136z\" fill=\"#FFFFFF\" opacity=\"0.06\"></path>\n<path d=\"M78 46 h64 M78 74 h64 M78 102 h64 M78 130 h64\" stroke=\"#6E8296\" stroke-width=\"2\" stroke-dasharray=\"3 3\"></path>\n<rect x=\"102\" y=\"90\" width=\"22\" height=\"10\" rx=\"2\" fill=\"#D9A84E\"></rect>\n<rect x=\"106\" y=\"93\" width=\"14\" height=\"4\" fill=\"#B3542F\"></rect>\n<rect x=\"154\" y=\"30\" width=\"16\" height=\"28\" rx=\"2\" fill=\"#24303C\"></rect>\n<circle cx=\"159\" cy=\"37\" r=\"1.6\" fill=\"#6E8296\"></circle><circle cx=\"165\" cy=\"37\" r=\"1.6\" fill=\"#6E8296\"></circle><circle cx=\"159\" cy=\"44\" r=\"1.6\" fill=\"#6E8296\"></circle><circle cx=\"165\" cy=\"44\" r=\"1.6\" fill=\"#6E8296\"></circle><circle cx=\"159\" cy=\"51\" r=\"1.6\" fill=\"#6E8296\"></circle><circle cx=\"165\" cy=\"51\" r=\"1.6\" fill=\"#6E8296\"></circle>\n<rect x=\"154\" y=\"66\" width=\"16\" height=\"6\" rx=\"2\" fill=\"#9CCFBE\"></rect>\n<rect x=\"76\" y=\"146\" width=\"70\" height=\"10\" rx=\"3\" fill=\"#1A2129\"></rect>\n<g transform=\"rotate(-5 160 112)\"><rect x=\"140\" y=\"96\" width=\"36\" height=\"32\" fill=\"#F3E08A\"></rect><text x=\"143\" y=\"108\" font-size=\"6\" font-weight=\"800\" fill=\"#4A4535\">OUT OF</text><text x=\"143\" y=\"116\" font-size=\"6\" font-weight=\"800\" fill=\"#4A4535\">ORDER</text><text x=\"143\" y=\"123\" font-size=\"4.8\" fill=\"#4A4535\">(emotionally)</text></g>\n</sc-if>\n<sc-if value=\"{{is.whiteboard}}\" hint-placeholder-val=\"{{false}}\">\n<rect width=\"240\" height=\"170\" fill=\"#E6E1D8\"></rect>\n<rect x=\"16\" y=\"14\" width=\"208\" height=\"128\" rx=\"4\" fill=\"#FFFFFF\" stroke=\"#B9B3A8\" stroke-width=\"4\"></rect>\n<rect x=\"40\" y=\"144\" width=\"160\" height=\"6\" rx=\"3\" fill=\"#B9B3A8\"></rect>\n<rect x=\"60\" y=\"141\" width=\"18\" height=\"5\" rx=\"2\" fill=\"#4A78B8\"></rect>\n<text x=\"30\" y=\"44\" font-size=\"22\" font-weight=\"800\" font-style=\"italic\" fill=\"#4A78B8\">SYNERGY!!</text>\n<path d=\"M30 124 V62 M30 124 H132\" stroke=\"#262A2F\" stroke-width=\"2\" fill=\"none\"></path>\n<path d=\"M34 72 L58 80 L80 98 L104 106 L126 120\" stroke=\"#D9705C\" stroke-width=\"3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n<text x=\"92\" y=\"74\" font-size=\"9\" font-weight=\"800\" fill=\"#D9705C\">morale</text>\n<text x=\"124\" y=\"136\" font-size=\"8\" fill=\"#262A2F\">Q3</text>\n<text x=\"146\" y=\"70\" font-size=\"9\" fill=\"#262A2F\">1. Circle back</text>\n<text x=\"146\" y=\"84\" font-size=\"9\" fill=\"#262A2F\">2. Loop in</text>\n<text x=\"146\" y=\"98\" font-size=\"9\" fill=\"#262A2F\">3. ???</text>\n<text x=\"146\" y=\"112\" font-size=\"9\" font-weight=\"800\" fill=\"#4A78B8\">4. Pizza (maybe)</text>\n<g transform=\"rotate(-8 196 32)\"><rect x=\"180\" y=\"20\" width=\"34\" height=\"26\" fill=\"#F2B8C6\"></rect><text x=\"183\" y=\"31\" font-size=\"5.5\" font-weight=\"700\" fill=\"#4A2F36\">who drew</text><text x=\"183\" y=\"39\" font-size=\"5.5\" font-weight=\"700\" fill=\"#4A2F36\">this - P</text></g>\n</sc-if>\n<sc-if value=\"{{is.invite}}\" hint-placeholder-val=\"{{false}}\">\n<rect width=\"240\" height=\"170\" fill=\"#E9E6DF\"></rect>\n<rect x=\"22\" y=\"18\" width=\"196\" height=\"134\" rx=\"12\" fill=\"#FFFFFF\"></rect>\n<path d=\"M22 50 V30 a12 12 0 0 1 12 -12 h172 a12 12 0 0 1 12 12 V50z\" fill=\"#C9C4B5\"></path>\n<text x=\"36\" y=\"39\" font-size=\"12\" font-weight=\"800\" fill=\"#262A2F\">Quick sync (casual)</text>\n<text x=\"36\" y=\"70\" font-size=\"10\" fill=\"#5F656D\">Fri · 4:55 – 6:25 PM</text>\n<text x=\"36\" y=\"86\" font-size=\"10\" fill=\"#5F656D\">Organizer: Gary · 14 guests</text>\n<text x=\"36\" y=\"102\" font-size=\"10\" font-weight=\"800\" fill=\"#C0504D\">Attendance: REQUIRED (casual)</text>\n<rect x=\"36\" y=\"116\" width=\"76\" height=\"24\" rx=\"12\" fill=\"#3F7F6C\"></rect>\n<text x=\"74\" y=\"132\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"800\" fill=\"#FFFFFF\">Accept</text>\n<rect x=\"120\" y=\"116\" width=\"76\" height=\"24\" rx=\"12\" fill=\"#ECE9E2\"></rect>\n<text x=\"158\" y=\"132\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"800\" fill=\"#A7A39A\">Decline</text>\n<line x1=\"137\" y1=\"128.5\" x2=\"179\" y2=\"128.5\" stroke=\"#A7A39A\" stroke-width=\"1.5\"></line>\n</sc-if>\n<sc-if value=\"{{is.plant}}\" hint-placeholder-val=\"{{false}}\">\n<rect width=\"240\" height=\"170\" fill=\"#EEE7DC\"></rect>\n<rect x=\"150\" y=\"16\" width=\"70\" height=\"80\" rx=\"4\" fill=\"#CFE2EE\" stroke=\"#FFFFFF\" stroke-width=\"5\"></rect>\n<line x1=\"185\" y1=\"16\" x2=\"185\" y2=\"96\" stroke=\"#FFFFFF\" stroke-width=\"4\"></line>\n<rect x=\"0\" y=\"140\" width=\"240\" height=\"30\" fill=\"#DCCFBE\"></rect>\n<path d=\"M86 104 h56 l-6 42 h-44z\" fill=\"#C98B6B\"></path>\n<rect x=\"82\" y=\"98\" width=\"64\" height=\"12\" rx=\"3\" fill=\"#B87A5B\"></rect>\n<path d=\"M114 100 C112 78 116 66 120 54\" stroke=\"#6E8F5E\" stroke-width=\"3\" fill=\"none\"></path>\n<path d=\"M118 62 C100 60 88 72 84 88 C98 86 110 76 118 62z\" fill=\"#8DAE7A\"></path>\n<path d=\"M120 56 C138 54 150 66 152 84 C138 80 126 70 120 56z\" fill=\"#7C9E69\"></path>\n<path d=\"M116 78 C104 84 98 98 98 110 C108 102 114 92 116 78z\" fill=\"#A08A56\"></path>\n<path d=\"M56 152 C64 144 76 144 82 150 C74 156 64 156 56 152z\" fill=\"#B08A5A\"></path>\n<g transform=\"rotate(10 136 90)\"><rect x=\"124\" y=\"82\" width=\"34\" height=\"14\" fill=\"#FFFFFF\"></rect><text x=\"127\" y=\"91.5\" font-size=\"5.5\" font-weight=\"700\" fill=\"#5F656D\">hang in there</text></g>\n<line x1=\"134\" y1=\"96\" x2=\"132\" y2=\"104\" stroke=\"#A47A50\" stroke-width=\"1.5\"></line>\n</sc-if>\n<sc-if value=\"{{is.bingo}}\" hint-placeholder-val=\"{{false}}\">\n<rect width=\"240\" height=\"170\" fill=\"#CDBFE6\"></rect>\n<rect x=\"40\" y=\"10\" width=\"160\" height=\"152\" rx=\"8\" fill=\"#FFFDF7\"></rect>\n<text x=\"56\" y=\"32\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"800\" fill=\"#7B5EA7\">B</text><text x=\"88\" y=\"32\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"800\" fill=\"#7B5EA7\">I</text><text x=\"120\" y=\"32\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"800\" fill=\"#7B5EA7\">N</text><text x=\"152\" y=\"32\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"800\" fill=\"#7B5EA7\">G</text><text x=\"184\" y=\"32\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"800\" fill=\"#7B5EA7\">O</text>\n<path d=\"M72 38 V156 M104 38 V156 M136 38 V156 M168 38 V156 M44 38 H196 M44 62 H196 M44 86 H196 M44 110 H196 M44 134 H196\" stroke=\"#E3DDF0\" stroke-width=\"1.5\"></path>\n<text x=\"56\" y=\"78\" text-anchor=\"middle\" font-size=\"9\" fill=\"#5F656D\">7</text><text x=\"88\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#5F656D\">22</text><text x=\"152\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#5F656D\">51</text><text x=\"184\" y=\"102\" text-anchor=\"middle\" font-size=\"9\" fill=\"#5F656D\">68</text><text x=\"88\" y=\"126\" text-anchor=\"middle\" font-size=\"9\" fill=\"#5F656D\">19</text><text x=\"152\" y=\"150\" text-anchor=\"middle\" font-size=\"9\" fill=\"#5F656D\">47</text>\n<text x=\"120\" y=\"101\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"800\" fill=\"#7B5EA7\">FREE</text>\n<circle cx=\"56\" cy=\"50\" r=\"10\" fill=\"#B8A9D9\" opacity=\"0.85\"></circle><circle cx=\"88\" cy=\"74\" r=\"10\" fill=\"#B8A9D9\" opacity=\"0.85\"></circle><circle cx=\"120\" cy=\"98\" r=\"11\" fill=\"#B8A9D9\" opacity=\"0.6\"></circle><circle cx=\"152\" cy=\"122\" r=\"10\" fill=\"#B8A9D9\" opacity=\"0.85\"></circle><circle cx=\"184\" cy=\"146\" r=\"10\" fill=\"#B8A9D9\" opacity=\"0.85\"></circle><circle cx=\"184\" cy=\"50\" r=\"10\" fill=\"#B8A9D9\" opacity=\"0.85\"></circle>\n<g transform=\"rotate(30 214 120)\"><rect x=\"202\" y=\"80\" width=\"22\" height=\"56\" rx=\"8\" fill=\"#8E6FC2\"></rect><rect x=\"205\" y=\"132\" width=\"16\" height=\"12\" rx=\"4\" fill=\"#5E4690\"></rect></g>\n</sc-if>\n<sc-if value=\"{{is.cat}}\" hint-placeholder-val=\"{{false}}\">\n<rect width=\"240\" height=\"170\" fill=\"#C7BBDF\"></rect>\n<rect x=\"0\" y=\"112\" width=\"240\" height=\"58\" fill=\"#A898C9\"></rect>\n<rect x=\"10\" y=\"98\" width=\"220\" height=\"30\" rx=\"14\" fill=\"#B6A8D4\"></rect>\n<ellipse cx=\"120\" cy=\"110\" rx=\"56\" ry=\"32\" fill=\"#E3A86B\"></ellipse>\n<path d=\"M150 118 C178 120 182 100 170 92\" stroke=\"#E3A86B\" stroke-width=\"10\" fill=\"none\" stroke-linecap=\"round\"></path>\n<path d=\"M96 58 L98 30 L116 48z\" fill=\"#E3A86B\"></path><path d=\"M144 58 L142 30 L124 48z\" fill=\"#E3A86B\"></path>\n<path d=\"M100 52 L101 38 L110 48z\" fill=\"#EBB6A8\"></path><path d=\"M140 52 L139 38 L130 48z\" fill=\"#EBB6A8\"></path>\n<circle cx=\"120\" cy=\"74\" r=\"30\" fill=\"#E3A86B\"></circle>\n<path d=\"M112 48 l4 8 M120 46 v10 M128 48 l-4 8\" stroke=\"#C98A4E\" stroke-width=\"3\" stroke-linecap=\"round\"></path>\n<path d=\"M104 73 h12 M124 73 h12\" stroke=\"#3A2E22\" stroke-width=\"3\" stroke-linecap=\"round\"></path>\n<path d=\"M105 76 q5 3 10 0 M125 76 q5 3 10 0\" stroke=\"#3A2E22\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\"></path>\n<path d=\"M117 83 h6 l-3 3z\" fill=\"#C8706A\"></path>\n<path d=\"M120 86 v3 M114 91 q6 -2 12 0\" stroke=\"#3A2E22\" stroke-width=\"1.5\" fill=\"none\" stroke-linecap=\"round\"></path>\n<path d=\"M92 82 h-16 M92 87 l-14 4 M148 82 h16 M148 87 l14 4\" stroke=\"#FFF4E8\" stroke-width=\"1.2\" stroke-linecap=\"round\"></path>\n<path d=\"M100 100 q20 8 40 0\" stroke=\"#D9705C\" stroke-width=\"4\" fill=\"none\" stroke-linecap=\"round\"></path>\n<circle cx=\"120\" cy=\"106\" r=\"4\" fill=\"#F3E08A\"></circle>\n<ellipse cx=\"100\" cy=\"136\" rx=\"12\" ry=\"7\" fill=\"#EDB77D\"></ellipse><ellipse cx=\"140\" cy=\"136\" rx=\"12\" ry=\"7\" fill=\"#EDB77D\"></ellipse>\n</sc-if>\n<sc-if value=\"{{is.selfie}}\" hint-placeholder-val=\"{{false}}\">\n<rect width=\"240\" height=\"170\" fill=\"#EEEAE3\"></rect>\n<ellipse cx=\"150\" cy=\"46\" rx=\"60\" ry=\"7\" fill=\"#C4B49C\" transform=\"rotate(14 150 46)\"></ellipse>\n<ellipse cx=\"150\" cy=\"46\" rx=\"60\" ry=\"7\" fill=\"#B9A88E\" transform=\"rotate(104 150 46)\"></ellipse>\n<circle cx=\"150\" cy=\"46\" r=\"9\" fill=\"#A99C88\"></circle>\n<circle cx=\"150\" cy=\"46\" r=\"4\" fill=\"#F3E9C8\"></circle>\n<path d=\"M-10 170 C10 108 70 92 120 96 C176 100 226 120 250 170z\" fill=\"#E7BE9C\"></path>\n<path d=\"M72 112 q20 -10 34 2 M140 113 q20 -10 34 2\" stroke=\"#3A3A3A\" stroke-width=\"4\" fill=\"none\" stroke-linecap=\"round\"></path>\n<ellipse cx=\"112\" cy=\"130\" rx=\"7\" ry=\"4\" fill=\"#B8876A\"></ellipse>\n<ellipse cx=\"136\" cy=\"130\" rx=\"7\" ry=\"4\" fill=\"#B8876A\"></ellipse>\n<path d=\"M98 144 q26 11 52 0 q-26 -7 -52 0z\" fill=\"#8A6A55\"></path>\n<ellipse cx=\"234\" cy=\"8\" rx=\"28\" ry=\"22\" fill=\"#DDAE8A\" opacity=\"0.92\"></ellipse>\n</sc-if>\n<sc-if value=\"{{is.receipt}}\" hint-placeholder-val=\"{{false}}\">\n<rect width=\"240\" height=\"170\" fill=\"#5A4B3F\"></rect>\n<path d=\"M66 8 h108 v150 l-9 -6 l-9 6 l-9 -6 l-9 6 l-9 -6 l-9 6 l-9 -6 l-9 6 l-9 -6 l-9 6 l-9 -6 l-9 6z\" fill=\"#FBF8F1\"></path>\n<g font-family=\"ui-monospace, Menlo, monospace\" fill=\"#3A3A3A\">\n<text x=\"120\" y=\"26\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"700\">EXPENSE REPORT</text>\n<text x=\"76\" y=\"40\" font-size=\"6.5\">SUBMITTED BY: GARY</text>\n<text x=\"76\" y=\"62\" font-size=\"7\">VIBES........$340.00</text>\n<text x=\"76\" y=\"76\" font-size=\"7\">SYNERGY........$0.00</text>\n<text x=\"76\" y=\"90\" font-size=\"7\">MOMENTUM......$12.50</text>\n<text x=\"76\" y=\"112\" font-size=\"7\" font-weight=\"700\">TOTAL........$352.50</text>\n</g>\n<g transform=\"rotate(-14 148 124)\"><rect x=\"118\" y=\"112\" width=\"60\" height=\"24\" rx=\"4\" fill=\"none\" stroke=\"#C0504D\" stroke-width=\"3\"></rect><text x=\"148\" y=\"129\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#C0504D\">DENIED</text></g>\n</sc-if>\n<sc-if value=\"{{is.book}}\" hint-placeholder-val=\"{{false}}\">\n<rect width=\"240\" height=\"170\" fill=\"#8C6A4F\"></rect>\n<rect x=\"0\" y=\"0\" width=\"240\" height=\"62\" fill=\"#E9DFD2\"></rect>\n<rect x=\"150\" y=\"30\" width=\"22\" height=\"92\" rx=\"6\" fill=\"#4A2F45\"></rect>\n<rect x=\"156\" y=\"12\" width=\"10\" height=\"24\" rx=\"2\" fill=\"#4A2F45\"></rect>\n<rect x=\"152\" y=\"70\" width=\"18\" height=\"22\" fill=\"#E9DFD2\"></rect>\n<g transform=\"rotate(74 196 132)\"><rect x=\"186\" y=\"96\" width=\"20\" height=\"74\" rx=\"6\" fill=\"#5B3A55\"></rect></g>\n<path d=\"M196 70 h22 q0 24 -11 26 q-11 -2 -11 -26z\" fill=\"#F4F0EA\" opacity=\"0.8\"></path>\n<path d=\"M198 80 h18 q-2 14 -9 15 q-7 -1 -9 -15z\" fill=\"#8E2F4C\"></path>\n<rect x=\"206\" y=\"96\" width=\"2\" height=\"18\" fill=\"#F4F0EA\"></rect>\n<rect x=\"200\" y=\"114\" width=\"14\" height=\"3\" rx=\"1.5\" fill=\"#F4F0EA\"></rect>\n<g transform=\"rotate(-6 80 112)\"><rect x=\"28\" y=\"84\" width=\"108\" height=\"66\" rx=\"3\" fill=\"#D9A3B0\"></rect><rect x=\"28\" y=\"84\" width=\"10\" height=\"66\" fill=\"#C48896\"></rect><text x=\"52\" y=\"112\" font-size=\"11\" font-weight=\"800\" fill=\"#3B2730\">A NOVEL</text><text x=\"52\" y=\"126\" font-size=\"7\" fill=\"#3B2730\">(still in plastic)</text><path d=\"M44 90 l20 50 M90 88 l18 44\" stroke=\"#FFFFFF\" stroke-width=\"2\" opacity=\"0.4\"></path></g>\n</sc-if>\n<sc-if value=\"{{is.hoaletter}}\" hint-placeholder-val=\"{{false}}\">\n<rect width=\"240\" height=\"170\" fill=\"#B9A58A\"></rect>\n<rect x=\"16\" y=\"14\" width=\"208\" height=\"142\" rx=\"8\" fill=\"#A48E70\"></rect>\n<g transform=\"rotate(-4 120 85)\">\n<rect x=\"50\" y=\"18\" width=\"140\" height=\"134\" fill=\"#FFFFFF\"></rect>\n<text x=\"62\" y=\"38\" font-size=\"9\" font-weight=\"800\" letter-spacing=\"1\" fill=\"#3F7F6C\">LAKEVIEW HOA</text>\n<rect x=\"62\" y=\"44\" width=\"116\" height=\"1.5\" fill=\"#3F7F6C\"></rect>\n<text x=\"62\" y=\"62\" font-size=\"10\" font-weight=\"800\" fill=\"#262A2F\">NOTICE OF</text>\n<text x=\"62\" y=\"75\" font-size=\"10\" font-weight=\"800\" fill=\"#262A2F\">EXCESSIVE BEIGE</text>\n<rect x=\"62\" y=\"86\" width=\"110\" height=\"2.5\" fill=\"#CFCAC0\"></rect><rect x=\"62\" y=\"94\" width=\"100\" height=\"2.5\" fill=\"#CFCAC0\"></rect><rect x=\"62\" y=\"102\" width=\"108\" height=\"2.5\" fill=\"#CFCAC0\"></rect><rect x=\"62\" y=\"110\" width=\"70\" height=\"2.5\" fill=\"#CFCAC0\"></rect>\n<text x=\"62\" y=\"136\" font-size=\"7\" font-style=\"italic\" fill=\"#5F656D\">— Barb, President (for life)</text>\n<g transform=\"rotate(-12 150 118)\"><rect x=\"116\" y=\"106\" width=\"68\" height=\"22\" rx=\"3\" fill=\"none\" stroke=\"#C0504D\" stroke-width=\"2.5\"></rect><text x=\"150\" y=\"121\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"800\" fill=\"#C0504D\">2ND WARNING</text></g>\n</g>\n</sc-if>\n<sc-if value=\"{{is.sunset}}\" hint-placeholder-val=\"{{false}}\">\n<defs><filter id=\"pgblur\" x=\"-50%\" y=\"-50%\" width=\"200%\" height=\"200%\"><feGaussianBlur stdDeviation=\"9\"></feGaussianBlur></filter></defs>\n<rect width=\"240\" height=\"170\" fill=\"#F3CDA2\"></rect>\n<rect y=\"0\" width=\"240\" height=\"32\" fill=\"#E6A5A0\"></rect>\n<rect y=\"32\" width=\"240\" height=\"30\" fill=\"#EDB59E\"></rect>\n<circle cx=\"150\" cy=\"98\" r=\"26\" fill=\"#F8E2A6\"></circle>\n<rect y=\"100\" width=\"240\" height=\"70\" fill=\"#8FA9C4\"></rect>\n<path d=\"M120 112 h60 M130 124 h40 M138 136 h24\" stroke=\"#F8E2A6\" stroke-width=\"3\" stroke-linecap=\"round\" opacity=\"0.8\"></path>\n<ellipse cx=\"20\" cy=\"112\" rx=\"72\" ry=\"92\" fill=\"#D9A07F\" filter=\"url(#pgblur)\"></ellipse>\n</sc-if>\n<sc-if value=\"{{is.mug}}\" hint-placeholder-val=\"{{false}}\">\n<rect width=\"240\" height=\"170\" fill=\"#DCD6CB\"></rect>\n<rect y=\"120\" width=\"240\" height=\"50\" fill=\"#B9A890\"></rect>\n<ellipse cx=\"116\" cy=\"132\" rx=\"50\" ry=\"6\" fill=\"#000000\" opacity=\"0.1\"></ellipse>\n<path d=\"M152 66 h12 a16 16 0 0 1 0 32 h-12\" stroke=\"#FFFFFF\" stroke-width=\"10\" fill=\"none\"></path>\n<rect x=\"76\" y=\"46\" width=\"78\" height=\"86\" rx=\"10\" fill=\"#FFFFFF\"></rect>\n<ellipse cx=\"115\" cy=\"49\" rx=\"36\" ry=\"6\" fill=\"#6B4A33\"></ellipse>\n<text x=\"115\" y=\"76\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"700\" fill=\"#3F7F6C\">WORLD'S</text>\n<text x=\"115\" y=\"93\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"800\" fill=\"#3F7F6C\">OKAYEST</text>\n<text x=\"115\" y=\"107\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"700\" fill=\"#3F7F6C\">MANAGER</text>\n<path d=\"M104 36c-5-6 5-9 0-16M122 34c-5-6 5-9 0-16\" stroke=\"#FFFFFF\" stroke-width=\"3\" fill=\"none\" stroke-linecap=\"round\" opacity=\"0.8\"></path>\n</sc-if>\n<sc-if value=\"{{is.coffee}}\" hint-placeholder-val=\"{{false}}\">\n<rect width=\"240\" height=\"170\" fill=\"#D8DCD8\"></rect>\n<rect y=\"130\" width=\"240\" height=\"40\" fill=\"#9AA3A0\"></rect>\n<rect x=\"70\" y=\"20\" width=\"100\" height=\"40\" rx=\"6\" fill=\"#3A4248\"></rect>\n<circle cx=\"88\" cy=\"40\" r=\"4\" fill=\"#C0504D\"></circle>\n<rect x=\"150\" y=\"58\" width=\"20\" height=\"74\" fill=\"#3A4248\"></rect>\n<rect x=\"70\" y=\"124\" width=\"100\" height=\"10\" rx=\"3\" fill=\"#2B3136\"></rect>\n<path d=\"M84 72 h52 l6 50 h-64z\" fill=\"#C9D6DC\" opacity=\"0.7\"></path>\n<path d=\"M81 102 h60 l1.6 20 h-63.2z\" fill=\"#2A1B12\"></path>\n<path d=\"M138 80 h8 v30 h-6\" stroke=\"#2B3136\" stroke-width=\"5\" fill=\"none\"></path>\n<g transform=\"rotate(6 198 50)\"><rect x=\"176\" y=\"28\" width=\"48\" height=\"42\" fill=\"#F3E08A\"></rect><text x=\"180\" y=\"41\" font-size=\"6.5\" font-weight=\"800\" fill=\"#4A4535\">BREWED:</text><text x=\"180\" y=\"53\" font-size=\"10\" font-weight=\"800\" fill=\"#4A4535\">3 days</text><text x=\"180\" y=\"63\" font-size=\"6\" fill=\"#4A4535\">ago (maybe)</text></g>\n</sc-if>\n<sc-if value=\"{{is.gnome}}\" hint-placeholder-val=\"{{false}}\">\n<rect width=\"240\" height=\"170\" fill=\"#CFE2EE\"></rect>\n<circle cx=\"30\" cy=\"122\" r=\"42\" fill=\"#8DB07A\"></circle>\n<circle cx=\"214\" cy=\"118\" r=\"46\" fill=\"#86A973\"></circle>\n<rect y=\"128\" width=\"240\" height=\"42\" fill=\"#9DBF7E\"></rect>\n<path d=\"M96 152 l8 -50 h32 l8 50z\" fill=\"#5C7FB8\"></path>\n<path d=\"M103 96 q17 36 34 0z\" fill=\"#F4F1EA\"></path>\n<circle cx=\"120\" cy=\"90\" r=\"9\" fill=\"#EBC3A2\"></circle>\n<circle cx=\"120\" cy=\"94\" r=\"3.5\" fill=\"#E09A82\"></circle>\n<path d=\"M102 86 L120 30 L138 86z\" fill=\"#D9705C\"></path>\n<rect x=\"109\" y=\"46\" width=\"24\" height=\"13\" rx=\"3\" fill=\"#2E3440\"></rect>\n<circle cx=\"129\" cy=\"52.5\" r=\"4\" fill=\"#4C566A\"></circle>\n<circle cx=\"113.5\" cy=\"50\" r=\"1.9\" fill=\"#FF5A5A\"></circle>\n<rect x=\"100\" y=\"150\" width=\"17\" height=\"8\" rx=\"4\" fill=\"#3A2E22\"></rect>\n<rect x=\"123\" y=\"150\" width=\"17\" height=\"8\" rx=\"4\" fill=\"#3A2E22\"></rect>\n</sc-if>\n<sc-if value=\"{{is.raccoon}}\" hint-placeholder-val=\"{{false}}\">\n<rect width=\"240\" height=\"170\" fill=\"#1E2430\"></rect>\n<circle cx=\"204\" cy=\"30\" r=\"14\" fill=\"#E9E3C9\"></circle>\n<circle cx=\"40\" cy=\"24\" r=\"1.2\" fill=\"#E9E3C9\"></circle><circle cx=\"72\" cy=\"40\" r=\"1\" fill=\"#E9E3C9\"></circle><circle cx=\"168\" cy=\"18\" r=\"1\" fill=\"#E9E3C9\"></circle>\n<rect x=\"70\" y=\"72\" width=\"100\" height=\"90\" rx=\"6\" fill=\"#59636E\"></rect>\n<path d=\"M92 80 V156 M120 80 V156 M148 80 V156\" stroke=\"#4C555F\" stroke-width=\"3\"></path>\n<path d=\"M90 60 L94 48 L102 58z M120 58 L126 46 L132 58z\" fill=\"#8E949C\"></path>\n<ellipse cx=\"111\" cy=\"66\" rx=\"26\" ry=\"15\" fill=\"#8E949C\"></ellipse>\n<path d=\"M88 64 q23 -10 46 0 q-8 10 -23 8 q-15 2 -23 -8z\" fill=\"#2B2F36\"></path>\n<circle cx=\"102\" cy=\"64\" r=\"3.6\" fill=\"#F2F2E6\"></circle><circle cx=\"120\" cy=\"64\" r=\"3.6\" fill=\"#F2F2E6\"></circle>\n<circle cx=\"103\" cy=\"64.5\" r=\"1.6\" fill=\"#111111\"></circle><circle cx=\"121\" cy=\"64.5\" r=\"1.6\" fill=\"#111111\"></circle>\n<g transform=\"rotate(-14 130 64)\"><rect x=\"62\" y=\"68\" width=\"122\" height=\"12\" rx=\"5\" fill=\"#6C7782\"></rect></g>\n<ellipse cx=\"84\" cy=\"74\" rx=\"7\" ry=\"4\" fill=\"#8E949C\"></ellipse>\n</sc-if>\n<sc-if value=\"{{is.parking}}\" hint-placeholder-val=\"{{false}}\">\n<rect width=\"240\" height=\"170\" fill=\"#7A8088\"></rect>\n<path d=\"M40 0 V124 M120 0 V124 M200 0 V124\" stroke=\"#F4F1EA\" stroke-width=\"4\"></path>\n<g transform=\"rotate(-14 120 68)\">\n<rect x=\"66\" y=\"34\" width=\"20\" height=\"8\" rx=\"3\" fill=\"#2B2F33\"></rect><rect x=\"154\" y=\"34\" width=\"20\" height=\"8\" rx=\"3\" fill=\"#2B2F33\"></rect><rect x=\"66\" y=\"96\" width=\"20\" height=\"8\" rx=\"3\" fill=\"#2B2F33\"></rect><rect x=\"154\" y=\"96\" width=\"20\" height=\"8\" rx=\"3\" fill=\"#2B2F33\"></rect>\n<rect x=\"56\" y=\"38\" width=\"128\" height=\"62\" rx=\"20\" fill=\"#D8CBB0\"></rect>\n<rect x=\"84\" y=\"45\" width=\"72\" height=\"48\" rx=\"10\" fill=\"#9EB4C8\"></rect>\n<rect x=\"96\" y=\"52\" width=\"48\" height=\"34\" rx=\"6\" fill=\"#D8CBB0\"></rect>\n</g>\n<rect x=\"20\" y=\"134\" width=\"200\" height=\"24\" rx=\"4\" fill=\"#3F7F6C\"></rect>\n<text x=\"120\" y=\"150\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"800\" fill=\"#FFFFFF\">VISITOR PARKING · NOT YOU, GARY</text>\n</sc-if>\n<sc-if value=\"{{is.crystal}}\" hint-placeholder-val=\"{{false}}\">\n<rect width=\"240\" height=\"170\" fill=\"#E9E2EE\"></rect>\n<rect y=\"122\" width=\"240\" height=\"48\" fill=\"#D7CCE0\"></rect>\n<ellipse cx=\"118\" cy=\"126\" rx=\"52\" ry=\"5\" fill=\"#000000\" opacity=\"0.08\"></ellipse>\n<path d=\"M78 124 L84 92 L94 84 L100 124z\" fill=\"#C1A8E8\"></path>\n<path d=\"M100 124 L108 70 L120 54 L130 72 L132 124z\" fill=\"#A98BD6\"></path>\n<path d=\"M120 54 L130 72 L132 124 L120 124z\" fill=\"#8E6FC2\"></path>\n<path d=\"M132 124 L140 88 L150 80 L158 124z\" fill=\"#B597E0\"></path>\n<path d=\"M60 48 l3 8 l8 3 l-8 3 l-3 8 l-3 -8 l-8 -3 l8 -3z\" fill=\"#FFFFFF\"></path>\n<path d=\"M176 36 l2 5 l5 2 l-5 2 l-2 5 l-2 -5 l-5 -2 l5 -2z\" fill=\"#FFFFFF\"></path>\n<g transform=\"rotate(-6 186 104)\"><rect x=\"156\" y=\"94\" width=\"66\" height=\"20\" rx=\"3\" fill=\"#FFFFFF\"></rect><text x=\"160\" y=\"103\" font-size=\"6\" font-weight=\"800\" fill=\"#4A3A63\">$89 · CHARGES</text><text x=\"160\" y=\"110.5\" font-size=\"6\" font-weight=\"800\" fill=\"#4A3A63\">YOUR AURA</text></g>\n</sc-if>\n</svg>\n<sc-if value=\"{{hasTop}}\" hint-placeholder-val=\"{{false}}\">\n<span style=\"position: absolute; top: 8px; left: 8px; right: 8px; text-align: center; font-family: 'Anton', sans-serif; font-size: 19px; line-height: 1.05; letter-spacing: 0.02em; text-transform: uppercase; color: #FFFFFF; text-shadow: 0 0 3px #000, 0 0 3px #000, 0 0 3px #000, 0 0 3px #000\">{{top}}</span>\n</sc-if>\n<sc-if value=\"{{hasBot}}\" hint-placeholder-val=\"{{false}}\">\n<span style=\"position: absolute; bottom: 8px; left: 8px; right: 8px; text-align: center; font-family: 'Anton', sans-serif; font-size: 19px; line-height: 1.05; letter-spacing: 0.02em; text-transform: uppercase; color: #FFFFFF; text-shadow: 0 0 3px #000, 0 0 3px #000, 0 0 3px #000, 0 0 3px #000\">{{bot}}</span>\n</sc-if>\n</div>\n", logic: function (DCLogic) {

var ALT = {
  casserole: 'A casserole with a little flag stuck in it that says 1997',
  mailbox: 'A very beige mailbox with an HOA notice taped to it',
  thermostat: 'A thermostat set to 74 degrees with a sticky note saying do not touch, from Rick',
  labelmaker: 'A yellow label maker printing a label that says Vice President',
  xray: 'An x-ray of a hand holding a fork',
  vending: 'A nearly empty vending machine with one candy bar left',
  whiteboard: 'An office whiteboard reading SYNERGY above a chart of morale going down',
  invite: 'A calendar invite for a casual, required 90-minute sync at 4:55 on Friday',
  plant: 'A droopy houseplant with a note that says hang in there',
  bingo: 'A bingo card with a full diagonal daubed',
  cat: 'An orange cat loafing on a sofa, looking deeply unimpressed',
  selfie: 'A dad selfie taken from below, mostly nostrils and ceiling fan',
  receipt: 'An expense report listing vibes for 340 dollars, stamped denied',
  book: 'An unopened novel still in plastic next to two wine bottles',
  hoaletter: 'An HOA letter titled Notice of Excessive Beige, stamped second warning',
  sunset: 'A sunset photo mostly covered by a blurry thumb',
  mug: 'A mug that says World’s Okayest Manager',
  coffee: 'A break room coffee pot full of sludge, brewed three days ago maybe',
  gnome: 'A garden gnome with a security camera strapped to its hat',
  raccoon: 'A raccoon peeking out of a trash can at night',
  parking: 'A beige car parked across two spaces in visitor parking',
  crystal: 'An amethyst crystal cluster with a price tag that says it charges your aura'
};
class Component extends DCLogic {
  renderVals() {
    var k = this.props.kind || 'casserole';
    if (!ALT[k]) { k = 'casserole'; }
    var is = {};
    Object.keys(ALT).forEach(function (key) { is[key] = key === k; });
    var top = this.props.top || '';
    var bot = this.props.bot || '';
    var alt = ALT[k] + (top || bot ? '. Meme text: ' + top + ' ' + bot : '');
    return { is: is, alt: alt, top: top, bot: bot, hasTop: !!top, hasBot: !!bot };
  }
}

return Component;
} });
