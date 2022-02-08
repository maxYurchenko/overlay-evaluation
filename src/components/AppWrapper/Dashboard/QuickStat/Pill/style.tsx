import { createUseStyles } from "react-jss";
import theme from "../../../../../styles/variables";

const useStyles = createUseStyles({
  pill: {
    color: theme.palette.text.secondary,
    width: "115px",
    fontSize: theme.typography.h3.fontSize,
    height: "auto",
    flexDirection: "row-reverse"
  },
  drop: { backgroundColor: theme.palette.error },
  raise: { backgroundColor: theme.palette.secondary.main },
  icon: {
    fill: theme.palette.text.secondary
  },
  wrapper: {
    textAlign: "center",
    "& $pill": {
      height: "auto",
      "& span": { padding: "1px 0", margin: 0 },
      "& svg": { padding: 0, margin: 0, marginLeft: 0 }
    }
  },
  label: {
    fontSize: theme.typography.fontSize
  }
});

export default useStyles;
