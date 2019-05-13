/* eslint-disable prettier/prettier */
/**
 *
 * CommentList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Subscribe } from 'unstated';
import CommentItem from '../CommentItem/Loadable';
import Button from '../../Button/Loadable';
import FetchMore from '../../FetchMore/Loadable';
import AddCommentContainer from '../../AddComment/AddCommentContainer/Loadable';
import { CommentContext } from '../CommentContext';
import { updateQuery, GET_COMMENTS_OF_ISSUES, prefetchComment } from '../Comments/constants';

function CommentList(
  { comments, 
    loading, 
    hasNextPage, 
    variables, 
    fetchMore, 
    client, 
    repositoryName, 
    repositoryOwner,
    issueNumber,
    issueId, 
  }) {
  return (
    <Subscribe to={[CommentContext]}>
      {comment => (
        <div>
          <Button 
            onClick={() => comment.onToggleShow()}
            onMouseOver={() => prefetchComment(
              client, 
              GET_COMMENTS_OF_ISSUES, 
              repositoryName, 
              repositoryOwner,
              issueNumber,
            )}
            onFocus={() => prefetchComment(
              client, 
              GET_COMMENTS_OF_ISSUES, 
              repositoryName, 
              repositoryOwner,
              issueNumber,
            )}
          >
            {comment.state.isShow ? 'Hide comments' : 'Show comments'}
          </Button>
          <AddCommentContainer 
            issueId={issueId} 
            repositoryName={repositoryName} 
            repositoryOwner={repositoryOwner} 
            issueNumber={issueNumber}/>
          {comment.state.isShow
            ? (!!comments.edges.length && (
              <ul>
                {comments.edges.map(({ node }) => (
                  <CommentItem key={node.id} comment={node} />
                ))}
              </ul>
            )) || <div>No comments</div>
            : null}
          {!!comments.edges.length && !!comment.state.isShow && (
            <FetchMore 
              loading={loading} 
              hasNextPage={hasNextPage} 
              variables={variables}
              updateQuery={updateQuery}
              fetchMore={fetchMore}
              hasData={!!comments}
            >
              comments
            </FetchMore>
          )}
        </div>
      )}
    </Subscribe>
  );
}

CommentList.propTypes = {
  comments: PropTypes.object,
  loading: PropTypes.bool,
  hasNextPage: PropTypes.bool,
  variables: PropTypes.object,
  fetchMore: PropTypes.func,
  client: PropTypes.object,
  repositoryName: PropTypes.string,
  repositoryOwner: PropTypes.string,
  issueNumber: PropTypes.number,
  issueId: PropTypes.string,
};

export default CommentList;
