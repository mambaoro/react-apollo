/**
 *
 * AddComment
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Mutation } from 'react-apollo';
import { Provider as CommentFormProvider } from 'unstated';
import { ADD_COMMENT_TO_ISSUE } from './constants';
import CommentForm from '../CommentForm/Loadable';
import { GET_COMMENTS_OF_ISSUES } from '../../Comment/Comments/constants';

function AddCommentContainer({
  issueId,
  repositoryName,
  repositoryOwner,
  issueNumber,
}) {
  return (
    <div>
      <Mutation
        mutation={ADD_COMMENT_TO_ISSUE}
        refetchQueries={() => [
          {
            query: GET_COMMENTS_OF_ISSUES,
            variables: {
              repositoryName,
              repositoryOwner,
              issueNumber,
            },
          },
        ]}
      >
        {addComment => (
          <CommentFormProvider>
            <CommentForm addComment={addComment} issueId={issueId} />
          </CommentFormProvider>
        )}
      </Mutation>
    </div>
  );
}

AddCommentContainer.propTypes = {
  issueId: PropTypes.string,
  repositoryName: PropTypes.string,
  repositoryOwner: PropTypes.string,
  issueNumber: PropTypes.number,
};

export default AddCommentContainer;
