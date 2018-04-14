import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
const GRAPHQL_API_URL = process.env.REACT_APP_GRAPHQL_API_URL
const apolloClient = new ApolloClient({
    link: new HttpLink({uri: GRAPHQL_API_URL}),
    cache: new InMemoryCache(),
})

export default apolloClient