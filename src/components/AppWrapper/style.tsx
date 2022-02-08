import { createUseStyles } from "react-jss";
import theme from "../../styles/variables";

const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    backgroundColor: theme.colors.background,
    minHeight: "100vh"
  },
  siteWrapper: {
    width: "100%",
    flexGrow: 1,
    overflow: "auto",
    marginTop: 70,
    "&$open": {
      width: `calc(100% - 280px)`,
      marginLeft: "280px"
    }
  },
  open: {},
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
