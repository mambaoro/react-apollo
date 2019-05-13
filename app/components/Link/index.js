/**
 *
 * Link
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Link({ children, ...props }) {
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

Link.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
};

export default Link;
