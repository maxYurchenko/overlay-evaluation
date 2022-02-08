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
        className={`${classes.pill} `}
        sx={{ fontSize: 18, color: "white" }}
        label={props.marginPercent}
        color={props.drop ? "error" : "secondary"}
      />
      <Typography variant="subtitle2">MoM</Typography>
    </div>
  );
};

export default Pill;
