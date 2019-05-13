/**
 *
 * IssueFilter
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { ApolloConsumer } from 'react-apollo';
import { Subscribe } from 'unstated';
import Button from '../../Button/Loadable';
import { TRANSITION_STATE, TRANSITION_LABELS } from '../Issues/constants';
import { prefetchIssues } from './constants';
import { IssueContext } from '../IssueContext';

function IssueFilter({ repositoryName, repositoryOwner }) {
  return (
    <Subscribe to={[IssueContext]}>
      {issue => (
        <ApolloConsumer>
          {client => (
            <Button
              onClick={() =>
                issue.onIssueStateChange(
                  TRANSITION_STATE[issue.state.issueState],
                )
              }
              onMouseOver={() =>
                prefetchIssues(
                  client,
                  repositoryName,
                  repositoryOwner,
                  issue.state.issueState,
                )
              }
              onFocus={() =>
                prefetchIssues(
                  client,
                  repositoryName,
                  repositoryOwner,
                  issue.state.issueState,
                )
              }
            >
              {TRANSITION_LABELS[issue.state.issueState]}
            </Button>
          )}
        </ApolloConsumer>
      )}
    </Subscribe>
  );
}

IssueFilter.propTypes = {
  repositoryName: PropTypes.string,
  repositoryOwner: PropTypes.string,
};

export default IssueFilter;
