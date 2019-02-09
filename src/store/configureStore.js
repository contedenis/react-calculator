import { createStore, compose } from 'redux';
import rootReducer from './rootReducer';

export default function configureStore(initialState = {}) {
  const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(),
  );
  return { store };
}