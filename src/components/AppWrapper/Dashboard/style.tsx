import { createUseStyles } from "react-jss";
import theme from "../../../styles/variables";

const useStyles = createUseStyles({
  wrapper: {
    marginLeft: 280,
    width: `calc(100% - ${280}px)`,
    flexGrow: 1,
    overflow: "auto"
  },
  main: {
    padding: "0 60px"
  },
  dashBoardTitle: {
    fontSize: theme.fontSize.title,
    color: theme.colors.lightGreen,
    margin: "0 0 40px 0"
  },
  [`@media ${theme.mediaQueries.md}`]: {
    wrapper: {
      marginLeft: 60,
      width: `calc(100% - ${60}px)`
    },
    main: {
      padding: "0 30px"
    }
  },
  [`@media ${theme.mediaQueries.sm}`]: {
    wrapper: {
      marginLeft: 0,
      width: `100%`
    },
    main: {
      padding: "0 15px"
    }
  }
});

export default useStyles;