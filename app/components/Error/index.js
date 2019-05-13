/**
 *
 * Error
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Error({ error }) {
  return (
    <div>
      <small>{error.toString()}</small>
    </div>
  );
}

Error.propTypes = {
  error: PropTypes.object,
};

export default Error;
