import Box from "@mui/material/Box";
import useStyles from "./style";
import { useEffect, useState } from "react";
import Menu from "./Menu/Menu";
import AppBar from "./Dashboard/AppBar/AppBar";
import { useMediaQuery } from "@mui/material";
import theme from "../../styles/variables";
import Dashboard from "./Dashboard/Dashboard";

const AppWrapper = () => {
  const classes = useStyles();
  const isTabletOrMobile = useMediaQuery(theme.mediaQueries.md, {
    noSsr: true
  });
  const [open, setOpen] = useState(!isTabletOrMobile);

  useEffect(() => {
    setOpen(!isTabletOrMobile);
  }, [isTabletOrMobile]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box className={classes.wrapper}>
      <AppBar
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        isTabletOrMobile={isTabletOrMobile}
        handleDrawerClose={handleDrawerClose}
      />
      <Menu open={open} />
      <Box component="main">
        <div className={classes.header} />
        <Dashboard />
      </Box>
    </Box>
  );
};

export default AppWrapper;
