export default {
    path: 'calculator',
    getComponent(nextState, cb) {
      import('./Layout').then(layout => cb(null, layout.default));
    },
  };
  