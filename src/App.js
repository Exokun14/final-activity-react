import HomepageComponent from "./components/HomepageComponent";
import AboutDeveloperComponent from "./components/AboutDeveloperComponent";

//Css
import "./styles/main.css"

//Theme related imports
import { Theme } from "./components/Theme";
import { ThemeProvider } from "@mui/material/styles";


function App() {

  return (
    <>
      <ThemeProvider theme={ Theme }>
        <HomepageComponent />
        <AboutDeveloperComponent />
      </ThemeProvider>
    </>
  );
}

export default App;
