import gql from 'graphql-tag';

export const GET_COMMENTS_OF_ISSUES = gql`
  query(
    $repositoryOwner: String!
    $repositoryName: String!
    $issueNumber: Int!
    $cursor: String
  ) {
    repository(name: $repositoryName, owner: $repositoryOwner) {
      issue(number: $issueNumber) {
        id
        comments(first: 1, after: $cursor) {
          edges {
            node {
              id
              bodyHTML
              author {
                login
              }
            }
          }
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }
    }
  }
`;

export const updateQuery = (prev, { fetchMoreResult }) => {
  if (!fetchMoreResult) {
    return prev;
  }
  return {
    ...prev,
    repository: {
      ...prev.repository,
      ...fetchMoreResult.repository,
      issue: {
        ...prev.repository.issue,
        ...fetchMoreResult.repository.issue,
        comments: {
          ...prev.repository.issue.comments,
          ...fetchMoreResult.repository.issue.comments,
          edges: [
            ...prev.repository.issue.comments.edges,
            ...fetchMoreResult.repository.issue.comments.edges,
          ],
        },
      },
    },
  };
};

export const prefetchComment = (
  client,
  getcomments,
  repositoryName,
  repositoryOwner,
  issueNumber,
) =>
  client.query({
    query: getcomments,
    variables: {
      repositoryName,
      repositoryOwner,
      issueNumber,
    },
  });
