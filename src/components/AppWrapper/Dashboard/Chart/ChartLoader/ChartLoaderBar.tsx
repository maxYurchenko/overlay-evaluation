import { useState, useEffect } from "react";
import { Skeleton } from "@mui/material";
import useStyles from "./style";

const ChartLoaderBar = () => {
  const classes = useStyles();
  const [height, setHeight] = useState(
    Math.floor(Math.random() * 91) + 10 + "%"
  );

  useEffect(() => {
    const interval = setTimeout(() => {
      setHeight(Math.floor(Math.random() * 91) + 10 + "%");
    }, 2000);
    return () => clearTimeout(interval);
  }, [height]);

  return (
    <Skeleton
      variant="text"
      className={classes.chartColumn}
      sx={{ height: height }}
    />
  );
};

export default ChartLoaderBar;
