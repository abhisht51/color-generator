import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

import Card from "./Components/Card";
import Colors from "./Components/Colors";
const secret = process.env.REACT_APP_ADMIN_SECRET;

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://colorgeneratorapp.hasura.app/v1/graphql',
      headers: {
      "x-hasura-admin-secret":  secret,
      }
    }),
    cache: new InMemoryCache(),
  });
 };

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      return alert(`Graphql error ${message}`);
    });
  }
});

const client = createApolloClient();

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">

      <Colors></Colors>
        <header className="App-header">
          <Card label="baby" hsla="green" />
          <Card label="baby" hsla="lightblue" />
          <Card label="baby" hsla="orange" />
        </header>
    </div>

    </ApolloProvider>

  );
}

export default App;
