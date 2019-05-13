/**
 *
 * Input
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Input({ children, ...props }) {
  return <input {...props} />;
}

Input.propTypes = {};

export default Input;
