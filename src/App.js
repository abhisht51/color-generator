import "./App.css";
import { ApolloProvider } from "@apollo/client";

import Colors from "./Components/Colors";
import client from "./GraphQLconfig";
import GenerateButton from './Components/GenerateColor'
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <GenerateButton>
        </GenerateButton>
        <Colors></Colors>
      </div>
    </ApolloProvider>
  );
}

export default App;
