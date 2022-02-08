import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import useStyles from "./style";
import QuickStat from "./QuickStat/QuickStat";
import {
  grossMarginLineQuery,
  revenueBarQuery
} from "../../../helpers/queries";
import Chart from "./Chart/Chart";
import { useMediaQuery } from "@mui/material";
import { breakPoints } from "../../../styles/variables";
import TableWrapper from "./Table/TableWrapper";
import generateLineData from "../../../helpers/generateLineData";

const Dashboard = () => {
  const classes = useStyles();
  const isTabletOrMobile = useMediaQuery(breakPoints.mediaQueries.lg, {
    noSsr: true
  });
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.main}>
        <Typography variant="h1" color="primary">
          My Dashboard
        </Typography>
        <Grid sx={{ marginTop: "15px" }} container spacing={3}>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <QuickStat
              title="Revenue"
              date={new Date(2020, 7, 16)}
              highlight={9000000}
              marginPercent="21.7%"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <QuickStat
              title="Cost of Goods"
              date={new Date(2020, 7, 16)}
              highlight={4000000}
              drop={true}
              marginPercent="13.1%"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <QuickStat
              title="Gross Margin"
              date={new Date(2020, 7, 16)}
              highlight={5000000}
              marginPercent="11.4%"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <QuickStat
              title="Gross Margin %"
              date={new Date(2020, 7, 16)}
              highlight="55.5%"
              marginPercent="14.7%"
            />
          </Grid>
          <Grid
            item
            container
            spacing={3}
            direction="row"
            alignItems="stretch"
            justifyContent="center"
          >
            <Grid
              item
              container
              spacing={3}
              xs={12}
              md={12}
              lg={6}
              direction={isTabletOrMobile ? "row" : "column"}
            >
              <Grid item xs={12} md={12} lg={6}>
                <Chart
                  columnQuery={revenueBarQuery}
                  lineQuery={grossMarginLineQuery}
                  id="chart1"
                  dataProcessingFunction={generateLineData}
                />
              </Grid>
              <Grid item xs={12} md={12} lg={6}>
                <Chart
                  columnQuery={revenueBarQuery}
                  lineQuery={grossMarginLineQuery}
                  id="chart2"
                />
              </Grid>
            </Grid>
            <Grid item xs={12} md={12} lg={6} className={classes.tableWrapper}>
              <TableWrapper />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
