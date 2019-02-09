import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import './index.css';
import * as serviceWorker from './serviceWorker';
import routes from './routes';
import configureStore from './store/configureStore';
const { store } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
