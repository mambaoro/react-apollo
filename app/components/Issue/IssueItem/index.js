/**
 *
 * IssueItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Provider as CommentProvider } from 'unstated';
import Link from '../../Link/Loadable';
import Comments from '../../Comment/Comments/Loadable';

function IssueItem({ issue, repositoryName, repositoryOwner }) {
  return (
    <div>
      <li>
        <h3>
          <Link href={issue.url}>{issue.title}</Link>
        </h3>
        <div dangerouslySetInnerHTML={{ __html: issue.bodyHTML }} />
        <CommentProvider>
          <Comments
            issue={issue}
            repositoryName={repositoryName}
            repositoryOwner={repositoryOwner}
          />
        </CommentProvider>
      </li>
    </div>
  );
}

IssueItem.propTypes = {
  issue: PropTypes.object,
  repositoryName: PropTypes.string,
  repositoryOwner: PropTypes.string,
};

export default IssueItem;
