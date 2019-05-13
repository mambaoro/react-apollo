/**
 *
 * Organization
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Query } from 'react-apollo';
import { Subscribe } from 'unstated';
import { GET_ORGANIZATION_REPOSITORIES } from './constants';
import RepositoryList from '../RepositoryList/Loadable';
import Loading from '../Loading/Loadable';
import { GlobalContext } from '../../containers/App/GlobalContext';

function Organization() {
  return (
    <Subscribe to={[GlobalContext]}>
      {context => (
        <Query
          query={GET_ORGANIZATION_REPOSITORIES}
          variables={{ organizationName: context.state.organizationName }}
          skip={!context.state.organizationName}
          notifyOnNetworkStatusChange
        >
          {({ data, loading, fetchMore }) => {
            const { organization } = data;
            const load =
              loading && !organization ? <Loading>...Loading</Loading> : null;
            const repoList = organization ? (
              <RepositoryList
                repositories={organization.repositories}
                loading={loading}
                fetchMore={fetchMore}
                entry="organization"
                hasData={!!organization}
              />
            ) : null;
            return (
              <div>
                {load} {repoList}
              </div>
            );
          }}
        </Query>
      )}
    </Subscribe>
  );
}

Organization.propTypes = {};

export default Organization;
