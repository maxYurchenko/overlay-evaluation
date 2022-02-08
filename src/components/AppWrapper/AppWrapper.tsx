import Box from "@mui/material/Box";
import useStyles from "./style";
import { useEffect, useState } from "react";
import Menu from "./Menu/Menu";
import AppBar from "./AppBar/AppBar";
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
      <Menu
        open={open}
        isTabletOrMobile={isTabletOrMobile}
        handleDrawerClose={handleDrawerClose}
      />
      <Box className={`${classes.siteWrapper} ${open ? classes.open : ""}`}>
        <AppBar
          open={open}
          isTabletOrMobile={isTabletOrMobile}
          handleDrawerOpen={handleDrawerOpen}
        />
        <Box component="main">
          <Dashboard />
        </Box>
      </Box>
    </Box>
  );
};

export default AppWrapper;
