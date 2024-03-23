import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_API,
});

const authLink = setContext((_, { headers }) => {
  const {
    state: {
      tokens: { accessToken, refreshToken },
    },
  } = JSON.parse(sessionStorage.getItem('app-store')!);

  return {
    headers: {
      ...headers,
      authorization: accessToken ? `Bearer ${accessToken}` : '',
      'x-refresh': refreshToken ? refreshToken : '',
    },
  };
});

const apolloClient = new ApolloClient({
  ssrMode: typeof window === undefined,
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Post: {
        fields: {
          user: {
            merge(existing, incoming, { mergeObjects }) {
              return mergeObjects(existing, incoming);
            },
          },
        },
      },
    },
  }),
});

export default apolloClient;
