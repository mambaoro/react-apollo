/**
 *
 * Profile
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { Query } from 'react-apollo';
import { GET_CURRENT_USER } from './constants';
import RepositoryList from '../RepositoryList/Loadable';
import Loading from '../Loading/Loadable';
import ErrorMessage from '../Error/Loadable';

function Profile() {
  return (
    <Query query={GET_CURRENT_USER} notifyOnNetworkStatusChange>
      {({ data, loading, error, fetchMore }) => {
        const { viewer } = data;
        const profile = viewer ? (
          <RepositoryList
            loading={loading}
            repositories={viewer.repositories}
            fetchMore={fetchMore}
            entry="viewer"
          />
        ) : null;
        const loadingSpinner = loading ? <Loading>...Loading</Loading> : null;
        const errorMessage = error ? <ErrorMessage error={error} /> : null;
        return (
          <div>
            {loadingSpinner} {profile} {errorMessage}
          </div>
        );
      }}
    </Query>
  );
}

Profile.propTypes = {};

export default Profile;
