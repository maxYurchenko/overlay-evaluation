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
      <Typography className={classes.cardTitle}>{props.title}</Typography>
      <div>
        <Typography className={classes.cardHighlight}>
          {isNaN(Number(props.highlight))
            ? props.highlight
            : currencyFormatter(Number(props.highlight))}
        </Typography>
        <Typography className={classes.cardDate}>
          {format(props.date, "MMM yyyy")}
        </Typography>
      </div>
      <Pill drop={props.drop} marginPercent={props.marginPercent} />
    </Paper>
  );
};

export default QuickStat;
