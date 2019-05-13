import gql from 'graphql-tag';
import { REPOSITORY_FRAGMENT } from '../Profile/fragments';

export const GET_ORGANIZATION_REPOSITORIES = gql`
  ${REPOSITORY_FRAGMENT}
  query($organizationName: String!, $cursor: String) {
    organization(login: $organizationName) {
      repositories(first: 5, after: $cursor) {
        edges {
          node {
            ...repository
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`;
