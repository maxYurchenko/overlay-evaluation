import "./App.css";
import Menu from "./components/Menu/Menu";
import Dashboard from "./components/Dashboard/Dashboard";
import { Box } from "@mui/system";

function App() {
  return (
    <Box>
      <Menu />
      <Dashboard />
    </Box>
  );
}

export default App;
