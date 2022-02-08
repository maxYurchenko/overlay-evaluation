import { createUseStyles } from "react-jss";
import theme from "../../../../../styles/variables";

const useStyles = createUseStyles({
  pill: {
    color: theme.colors.white,
    width: "115px",
    fontSize: theme.fontSize.l,
    height: "auto",
    flexDirection: "row-reverse"
  },
  drop: { backgroundColor: theme.colors.orange },
  raise: { backgroundColor: theme.colors.grey },
  icon: {
    fill: theme.colors.white
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
    fontSize: theme.fontSize.s
  }
});

export default useStyles;
