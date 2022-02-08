import "./App.css";
import AppWrapper from "./components/AppWrapper/AppWrapper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import themeVariables from "./styles/variables";

const theme = createTheme(themeVariables);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper />
    </ThemeProvider>
  );
}

export default App;
