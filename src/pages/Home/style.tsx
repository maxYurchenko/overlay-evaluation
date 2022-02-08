import { createUseStyles } from "react-jss";
import { breakPoints } from "../../styles/variables";

const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
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
  main: {
    padding: "0 60px 20px 60px"
  },
  open: {},
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    height: 90
  },
  [`@media ${breakPoints.mediaQueries.sm}`]: {
    header: {
      height: "64px"
    }
  }
});

export default useStyles;
