import "./App.css";
import { ApolloProvider } from "@apollo/client";

import Card from "./Components/Card";
import Colors from "./Components/Colors";
import client from "./GraphQLconfig";
import Title from "./Components/Title";
import GenerateButton from './Components/GenerateColor'
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Title />
        <GenerateButton>
          
        </GenerateButton>
        <Colors></Colors>

        {/* <header className="App-header">
          <Card label="baby" hex="green" />
          <Card label="baby" hex="#00FFFF" />
          <Card label="baby" hex="orange" />
        </header> */}
      </div>
    </ApolloProvider>
  );
}

export default App;
