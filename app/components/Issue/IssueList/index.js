/**
 *
 * IssueList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import IssueItem from '../IssueItem/Loadable';

function IssueList({ issues, repositoryName, repositoryOwner }) {
  return (
    <div>
      <ul>
        {issues.edges.map(({ node }) => (
          <IssueItem
            key={node.id}
            issue={node}
            repositoryName={repositoryName}
            repositoryOwner={repositoryOwner}
          />
        ))}
      </ul>
    </div>
  );
}

IssueList.propTypes = {
  issues: PropTypes.object,
  repositoryName: PropTypes.string,
  repositoryOwner: PropTypes.string,
};

export default IssueList;
