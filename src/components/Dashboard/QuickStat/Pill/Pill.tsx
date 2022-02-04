import { Chip, Typography } from "@mui/material";

import useStyles from "./style";

const Pill = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Chip className={classes.pill} label="Chip Filled" />
      <Typography className={classes.label}>MoM</Typography>
    </div>
  );
};

export default Pill;
