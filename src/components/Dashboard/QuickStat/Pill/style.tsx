import { createUseStyles } from "react-jss";
import theme from "../../../../styles/variables";

const useStyles = createUseStyles({
  pill: {
    backgroundColor: theme.colors.grey,
    color: theme.colors.white,
    minWidth: "115px"
  },
  wrapper: { textAlign: "center" },
  label: {
    fontSize: theme.fontSize.s
  }
});

export default useStyles;
