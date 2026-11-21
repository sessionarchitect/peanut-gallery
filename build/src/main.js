import { h, render, Component, setNavigator, get } from './runtime.js';
import './screens.gen.js';

const SCREENS = ['Main', 'Arena', 'Verdict', 'Builder', 'Media'];
function routeFromHash() {
  const r = (location.hash || '').replace(/^#\/?/, '');
  return SCREENS.indexOf(r) >= 0 ? r : 'Main';
}
const darkMQ = window.matchMedia ? window.matchMedia('(prefers-color-scheme: light)') : null;
function systemTheme() { return darkMQ && darkMQ.matches ? 'Day' : 'Night'; }

class App extends Component {
  constructor(props) {
    super(props);
    const r = routeFromHash();
    this.state = { route: r, visited: { [r]: true }, theme: systemTheme() };
  }
  componentDidMount() {
    setNavigator((name) => {
      if (name === this.state.route) return;
      location.hash = '#/' + name;
    });
    window.addEventListener('hashchange', () => {
      const r = routeFromHash();
      this.setState({ route: r, visited: Object.assign({}, this.state.visited, { [r]: true }) });
      window.scrollTo(0, 0);
    });
    if (darkMQ && darkMQ.addEventListener) darkMQ.addEventListener('change', () => this.setState({ theme: systemTheme() }));
    this.componentDidUpdate();
  }
  componentDidUpdate() {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', this.state.theme === 'Day' ? '#F4F2EE' : '#111418');
    document.body.style.background = this.state.theme === 'Day' ? '#F4F2EE' : '#111418';
  }
  render() {
    const { route, visited, theme } = this.state;
    return h('div', { class: 'pg-app' }, SCREENS.filter((s) => visited[s]).map((s) =>
      h('div', { key: s, class: 'pg-screen', style: s === route ? '' : 'display: none', 'aria-hidden': s === route ? null : 'true' }, h(get(s), { theme }))
    ));
  }
}

render(h(App, null), document.getElementById('app'));
