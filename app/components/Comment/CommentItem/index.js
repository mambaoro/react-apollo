/**
 *
 * CommentItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function CommentItem({ comment }) {
  return (
    comment && (
      <li>
        <div>
          <h3>{comment.author.login}</h3>
          &nbsp;
          <div dangerouslySetInnerHTML={{ __html: comment.bodyHTML }} />
        </div>
      </li>
    )
  );
}

CommentItem.propTypes = {
  comment: PropTypes.object,
};

export default CommentItem;
