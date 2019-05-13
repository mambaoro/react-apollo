/**
 *
 * Issues
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Query } from 'react-apollo';
import { Subscribe } from 'unstated';
import { GET_ISSUES_OF_REPOSITORY, isShow } from './constants';
import IssueList from '../IssueList/Loadable';
import ErrorMessage from '../../Error/Loadable';
import IssueFilter from '../IssueFilter/Loadable';
import Loading from '../../Loading/Loadable';
import { IssueContext } from '../IssueContext';

function Issues({ repositoryName, repositoryOwner }) {
  return (
    <Subscribe to={[IssueContext]}>
      {issue => (
        <div>
          {
            <IssueFilter
              repositoryName={repositoryName}
              repositoryOwner={repositoryOwner}
            />
          }
          {isShow(issue.state.issueState) ? (
            <Query
              query={GET_ISSUES_OF_REPOSITORY}
              variables={{
                repositoryOwner,
                repositoryName,
                issueState: issue.state.issueState,
              }}
            >
              {({ data, loading, error }) => {
                if (error) {
                  return <ErrorMessage error={error} />;
                }
                const { repository } = data;

                if (loading && !repository) {
                  return <Loading>...Loading Issues</Loading>;
                }

                if (!repository.issues.edges.length) {
                  return <div>No issues</div>;
                }
                return (
                  <IssueList
                    issues={repository.issues}
                    repositoryName={repositoryName}
                    repositoryOwner={repositoryOwner}
                  />
                );
              }}
            </Query>
          ) : null}
        </div>
      )}
    </Subscribe>
  );
}

Issues.propTypes = {
  repositoryName: PropTypes.string,
  repositoryOwner: PropTypes.string,
};

export default Issues;
