import Box from "@mui/material/Box";
import useStyles from "./style";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { breakPoints } from "../../styles/variables";
import Menu from "../../components/Menu/Menu";
import AppBar from "../../components/AppBar/AppBar";
import DashboardContent from "../../components/DashboardContent/DashboardContent";

const Dashboard = () => {
  const classes = useStyles();
  const isTabletOrMobile = useMediaQuery(breakPoints.mediaQueries.md, {
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
    <Box className={classes.wrapper} sx={{ bgcolor: "background.default" }}>
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
          <DashboardContent />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
