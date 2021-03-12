import "./App.css";
import { ApolloProvider } from "@apollo/client";

import Card from "./Components/Card";
import Colors from "./Components/Colors";
import client from "./GraphQLconfig";


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
