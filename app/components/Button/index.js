/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Button({ children, ...props }) {
  return (
    <button
      type="button"
      style={{ backgroundColor: 'purple', border: '1px solid black' }}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
};

export default Button;
