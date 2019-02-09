import App from '../components/App';
import Home from './Home';
import notFound from './notFound';

export default {
  path: '/',
  component: App,
  indexRoute: { onEnter: (nextState, replace) => replace('/calculator') },

  childRoutes: [
    Home,
    notFound,
  ],
};
