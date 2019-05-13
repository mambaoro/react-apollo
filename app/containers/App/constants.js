/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import { RetryLink } from 'apollo-link-retry';

// Apollo Client setup
const GITHUB_BASE_URL = 'https://api.github.com/graphql';

const httpLink = new HttpLink({
  uri: GITHUB_BASE_URL,
  headers: {
    authorization: `Bearer ${process.env.GITHUB_GRAPHQL_API_ACCESS_TOKEN}`,
  },
});

const cache = new InMemoryCache();

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    // eslint-disable-next-line array-callback-return
    // graphQLErrors.map(({ message, locations, path }) => {
    //   console.log(
    //     `[GraphQl error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
    //   );
    // });
  }
  if (networkError) {
    // console.log(`[Network error]: ${networkError}`);
  }
});

const retryLink = new RetryLink();

const link = ApolloLink.from([errorLink, retryLink, httpLink]);

export const client = new ApolloClient({
  link,
  cache,
});
// **End - Apollo Client setup
