import gql from 'graphql-tag';

export const ADD_COMMENT_TO_ISSUE = gql`
  mutation($issueId: ID!, $commentBody: String!) {
    addComment(input: { subjectId: $issueId, body: $commentBody }) {
      clientMutationId
    }
  }
`;
