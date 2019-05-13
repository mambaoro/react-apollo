/**
 *
 * OrganizationSearch
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Subscribe } from 'unstated';
import Input from '../Input/Loadable';
import Button from '../Button/Loadable';
import { GlobalContext } from '../../containers/App/GlobalContext';

function OrganizationSearch() {
  return (
    <Subscribe to={[GlobalContext]}>
      {navState => (
        <div>
          <form onSubmit={navState.onSubmit}>
            <Input
              color="white"
              type="text"
              value={navState.state.value}
              onChange={navState.onChange}
            />{' '}
            <Button color="white" type="submit">
              Search
            </Button>
          </form>
        </div>
      )}
    </Subscribe>
  );
}

OrganizationSearch.propTypes = {};

export default OrganizationSearch;
