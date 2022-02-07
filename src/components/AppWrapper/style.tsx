import { createUseStyles } from "react-jss";
import theme from "../../styles/variables";

const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    backgroundColor: theme.colors.background,
    minHeight: "100vh"
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    height: 90
  },
  [`@media ${theme.mediaQueries.sm}`]: {
    header: {
      height: "64px"
    }
  }
});

export default useStyles;
