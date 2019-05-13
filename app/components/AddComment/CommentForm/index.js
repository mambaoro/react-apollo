/**
 *
 * CommentForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Subscribe } from 'unstated';
import { CommentFormContext } from '../CommentFormContext';
import Button from '../../Button/Loadable';

function CommentForm({ addComment, issueId }) {
  return (
    <Subscribe to={[CommentFormContext]}>
      {context => (
        <div>
          <form
            onSubmit={e => {
              addComment({
                variables: { issueId, commentBody: context.state.commentBody },
              });
              e.preventDefault();
            }}
          >
            <div>
              <p>Add comment</p>
              <textarea onChange={e => context.onBodyChange(e)}>
                {context.state.commentBody}
              </textarea>
              {context.state.commentBody && (
                <Button type="submit">Add comment</Button>
              )}
            </div>
          </form>
        </div>
      )}
    </Subscribe>
  );
}

CommentForm.propTypes = {
  addComment: PropTypes.func,
  issueId: PropTypes.string,
};

export default CommentForm;
