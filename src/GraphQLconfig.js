import {
  split,
  InMemoryCache,
  ApolloClient,
  HttpLink,
} from "@apollo/client";
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
const secret = process.env.REACT_APP_ADMIN_SECRET;
const httpLink = new HttpLink({
    uri: 'https://colorgeneratorapp.hasura.app/v1/graphql',
    headers: {
    "x-hasura-admin-secret":  secret,
    }
  });
  
  const createApolloClient = () => {
    return new ApolloClient({
      link: splitLink,
      cache: new InMemoryCache(),
    });
   };
  
  
  const wsLink = new WebSocketLink({
    uri: 'wss://colorgeneratorapp.hasura.app/v1/graphql',
    options: {
      reconnect: true,
      lazy: true,
      connectionParams: {
        headers: {
          "x-hasura-admin-secret":  secret,
          }
      },
    },
  });
  
  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink,
    httpLink,
  );
  
  const client = createApolloClient();

  export default client;