import { ApolloClient, InMemoryCache } from '@apollo/client'

// instantiate apollo client
const client = new ApolloClient({
  uri: 'https://ms-apollo.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
  headers: {
    ['x-hasura-admin-secret']:
      'bq3NkmnohsB4B0kh3umJz86tr6erKs735W8J9id1kLdkgNHbGHMWuD32gxQw75sK',
  },
})

export default client
