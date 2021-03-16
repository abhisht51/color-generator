import "./App.css";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "@apollo/client";
import Colors from "./Components/Colors";
import client from "./GraphQLconfig";
import GenerateButton from "./Components/GenerateColor";
import { darkTheme, lightTheme, GlobalStyles } from "./themes";
import Switch from "./Components/Switch";

function App() {
  const [isToggled, setIsToggled] = useState(false);
  const [theme, setTheme] = useState("light");
  const changeColor = () => {
    setIsToggled(!isToggled);

    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <ApolloProvider client={client}>
        <GlobalStyles />
        <div className="App">
          <Switch isToggled={isToggled} onToggled={changeColor} />
          <GenerateButton />
          <Colors></Colors>
        </div>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
