import { Paper, Typography } from "@mui/material";
import Pill from "./Pill/Pill";

import useStyles from "./style";

const QuickStat = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.wrapper}>
      <Typography className={classes.cardTitle}>Revenue</Typography>
      <Typography className={classes.cardHighlight}>$9,000K</Typography>
      <Typography className={classes.cardDate}>Aug 22</Typography>
      <Pill />
    </Paper>
  );
};

export default QuickStat;
