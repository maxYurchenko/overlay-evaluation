import { Paper, Typography } from "@mui/material";
import Pill from "./Pill/Pill";
import { format } from "date-fns";

import currencyFormatter from "../../../../helpers/currencyFormatter";

import useStyles from "./style";

interface Props {
  title: string;
  highlight: number | string;
  date: Date;
  drop?: boolean;
  marginPercent: string;
}

const QuickStat = (props: Props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.wrapper}>
      <Typography variant="h3" className={classes.cardTitle}>
        {props.title}
      </Typography>
      <div>
        <Typography
          sx={{ fontSize: 34, fontWeight: 500 }}
          className={classes.cardHighlight}
        >
          {isNaN(Number(props.highlight))
            ? props.highlight
            : currencyFormatter(Number(props.highlight))}
        </Typography>
        <Typography variant="subtitle1" className={classes.cardDate}>
          {format(props.date, "MMM yyyy")}
        </Typography>
      </div>
      <Pill drop={props.drop} marginPercent={props.marginPercent} />
    </Paper>
  );
};

export default QuickStat;
