/**
 *
 * RepositoryList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Provider as IssueProvider } from 'unstated';
import RepositoryItem from '../RepositoryItem/Loadable';
import Issues from '../Issue/Issues/Loadable';
import Loading from '../Loading/Loadable';
import FetchMore from '../FetchMore/Loadable';
import { getUpdateQuery } from './constants';

function RepositoryList({ repositories, loading, fetchMore, entry, hasData }) {
  return (
    <div>
      <ul>
        {repositories.edges.map(({ node }) => (
          <div key={node.id}>
            <RepositoryItem
              id={node.id}
              name={node.name}
              url={node.url}
              descriptionHTML={node.descriptionHTML}
              primaryLanguage={node.primaryLanguage}
              owner={node.owner}
              stargazers={node.stargazers}
              watchers={node.watchers}
              viewerSubscription={node.viewerSubscription}
              viewerHasStarred={node.viewerHasStarred}
            />
            <IssueProvider>
              <Issues
                repositoryName={node.name}
                repositoryOwner={node.owner.login}
              />
            </IssueProvider>
          </div>
        ))}
      </ul>
      {loading ? <Loading>Repositories</Loading> : null}
      <FetchMore
        loading={loading}
        hasNextPage={repositories.pageInfo.hasNextPage}
        variables={{ cursor: repositories.pageInfo.endCursor }}
        updateQuery={getUpdateQuery(entry)}
        fetchMore={fetchMore}
        hasData={hasData}
      >
        Repositories
      </FetchMore>
    </div>
  );
}

RepositoryList.propTypes = {
  repositories: PropTypes.object,
  loading: PropTypes.bool,
  fetchMore: PropTypes.func,
  entry: PropTypes.string,
  hasData: PropTypes.bool,
};

export default RepositoryList;
