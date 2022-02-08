import "./App.css";
import AppWrapper from "./components/AppWrapper/AppWrapper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { defaultTheme } from "./styles/variables";

const theme = createTheme(defaultTheme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper />
    </ThemeProvider>
  );
}

export default App;
