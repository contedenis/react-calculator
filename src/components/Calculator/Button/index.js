import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss'

function Button({
  label,
  onClick,
  size,
  value,
}) {
  return (
    <div
      className="button"
      data-size={size}
      data-value={value}
      onClick={onClick}
    >
      {label}
    </div>
  )
}

Button.defaultProps = {
  size: '',
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default Button;