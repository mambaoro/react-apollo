/**
 *
 * Navigation
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import * as routes from '../../containers/App/routes';
import OrganizationSearch from '../OrganizationSearch/Loadable';

function Navigation({ location: { pathname } }) {
  return (
    <header>
      <nav>
        <Link to={routes.ORGANIZATION}>Organization</Link>
        <Link to={routes.PROFILE}>Profile</Link>
        {pathname === routes.ORGANIZATION && <OrganizationSearch />}
      </nav>
    </header>
  );
}

Navigation.propTypes = {
  location: PropTypes.object,
  // pathname: PropTypes.string,
};

export default withRouter(Navigation);
