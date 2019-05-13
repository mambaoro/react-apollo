import {
  GET_ISSUES_OF_REPOSITORY,
  TRANSITION_STATE,
  isShow,
} from '../Issues/constants';

export const prefetchIssues = (
  client,
  repositoryName,
  repositoryOwner,
  issueState,
) => {
  const nextIssueState = TRANSITION_STATE[issueState];
  if (isShow(nextIssueState)) {
    client.query({
      query: GET_ISSUES_OF_REPOSITORY,
      variables: {
        repositoryName,
        repositoryOwner,
        issueState: nextIssueState,
      },
    });
  }
};
