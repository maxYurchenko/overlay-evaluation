import { createUseStyles } from "react-jss";
import theme from "../../../styles/variables";

const useStyles = createUseStyles({
  dashboardWrapper: {
    marginTop: 50
  },
  main: {
    padding: "0 60px 20px 60px"
  },
  tableWrapper: {
    display: "flex"
  },
  [`@media ${theme.mediaQueries.md}`]: {
    wrapper: {
      marginLeft: 0,
      width: `100%`
    },
    main: {
      padding: "0 30px 20px 30px"
    }
  },
  [`@media ${theme.mediaQueries.sm}`]: {
    tableWrapper: {
      overflow: "scroll",
      width: "0px"
    },
    main: {
      padding: "0 15px"
    }
  }
});

export default useStyles;
