import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.scss'

class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="App">
        {children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
