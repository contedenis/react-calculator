import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss'

function Display({ data }) {
  const string = data.join('')
  return (
    <div className="display"> {string} </div>
  )
}

Display.propTypes = {
  data: PropTypes.any.isRequired,
};

export default Display;