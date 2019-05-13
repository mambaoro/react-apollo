/**
 *
 * Comments
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Query } from 'react-apollo';
import { GET_COMMENTS_OF_ISSUES } from './constants';
import CommentList from '../CommentList/Loadable';
import Loading from '../../Loading/Loadable';
import ErrorMessage from '../../Error/Loadable';

function Comments({ issue, repositoryName, repositoryOwner }) {
  return (
    <div>
      <Query
        query={GET_COMMENTS_OF_ISSUES}
        variables={{
          repositoryName,
          repositoryOwner,
          issueNumber: issue.number,
        }}
        notifyOnNetworkStatusChange
      >
        {({ data, loading, error, fetchMore, client }) => {
          const { repository } = data;
          if (loading && !repository) {
            return <Loading>comments</Loading>;
          }
          if (error) {
            return <ErrorMessage error={error} />;
          }
          return (
            <CommentList
              comments={repository.issue.comments}
              loading={loading}
              hasNextPage={repository.issue.comments.pageInfo.hasNextPage}
              variables={{
                cursor: repository.issue.comments.pageInfo.endCursor,
              }}
              fetchMore={fetchMore}
              client={client}
              repositoryName={repositoryName}
              repositoryOwner={repositoryOwner}
              issueNumber={issue.number}
              issueId={issue.id}
            />
          );
        }}
      </Query>
    </div>
  );
}

Comments.propTypes = {
  issue: PropTypes.object,
  repositoryName: PropTypes.string,
  repositoryOwner: PropTypes.string,
};

export default Comments;
