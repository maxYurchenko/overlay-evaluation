import { Chip, Typography } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import useStyles from "./style";

interface Props {
  drop?: boolean;
  marginPercent: string;
}

const Pill = (props: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Chip
        icon={
          props.drop ? (
            <ArrowDownwardIcon className={classes.icon} />
          ) : (
            <ArrowUpwardIcon className={classes.icon} />
          )
        }
        className={`${classes.pill} ${
          props.drop ? classes.drop : classes.raise
        }`}
        label={props.marginPercent}
      />
      <Typography className={classes.label}>MoM</Typography>
    </div>
  );
};

export default Pill;
