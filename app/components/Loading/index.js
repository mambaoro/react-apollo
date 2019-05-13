/**
 *
 * Loading
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Loading({ children }) {
  return <div>...Loading {children}</div>;
}

Loading.propTypes = {
  children: PropTypes.node,
};

export default Loading;
