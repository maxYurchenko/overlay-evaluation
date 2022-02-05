import { Box, Skeleton } from "@mui/material";
import useStyles from "./style";

import React from "react";
import ChartLoaderBar from "./ChartLoaderBar";

interface Props {
  columnsAmount?: number;
}

const ChartLoader = (props: Props) => {
  const columnsAmount = props.columnsAmount ? props.columnsAmount : 12;
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box className={classes.container}>
        <Box className={classes.containerHead}>
          <Skeleton variant="text" className={classes.chartTitle} />
          <Skeleton variant="text" className={classes.chartLegend} />
        </Box>
        <Box className={classes.containerBodyCost}>
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
        </Box>
        <Box className={classes.containerBodyMonth}>
          <Box className={classes.containerBodyColumns}>
            {[...Array(columnsAmount)].map((e, i) => (
              <ChartLoaderBar key={i} />
            ))}
          </Box>
          <Box className={classes.containerBodyColumnsName}>
            {[...Array(columnsAmount)].map((e, i) => (
              <Skeleton
                key={i}
                variant="text"
                className={classes.chartColumnName}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default ChartLoader;
