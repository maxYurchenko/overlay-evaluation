import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import AppBar from "./AppBar/AppBar";

import useStyles from "./style";
import QuickStat from "./QuickStat/QuickStat";
import Table from "./Table/Table";
import Chart from "./Chart/Chart";

const Dashboard = () => {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper}>
      <AppBar />
      <Box component="main" className={classes.main}>
        <Toolbar />
        <Typography className={classes.dashBoardTitle}>My Dashboard</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} lg={3}>
            <QuickStat />
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <QuickStat />
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <QuickStat />
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <QuickStat />
          </Grid>
          <Grid item container direction="column" xs={12} sm={6} spacing={3}>
            <Grid item>
              <Chart />
            </Grid>
            <Grid item>Chart 2</Grid>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Table />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
