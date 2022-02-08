import { createUseStyles } from "react-jss";
import { breakPoints } from "../../../styles/variables";

const useStyles = createUseStyles({
  main: {
    padding: "0 60px 20px 60px"
  },
  tableWrapper: {
    display: "flex"
  },
  [`@media ${breakPoints.mediaQueries.md}`]: {
    wrapper: {
      marginLeft: 0,
      width: `100%`
    },
    main: {
      padding: "0 30px 20px 30px"
    }
  },
  [`@media ${breakPoints.mediaQueries.sm}`]: {
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
