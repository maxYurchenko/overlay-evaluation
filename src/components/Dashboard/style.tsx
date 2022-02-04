import { createUseStyles } from "react-jss";
import theme from "../../styles/variables";

const useStyles = createUseStyles({
  wrapper: {
    marginLeft: 280,
    width: `calc(100% - ${280}px)!important`,
    backgroundColor: theme.colors.background,
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  main: {
    padding: "0 60px"
  },
  dashBoardTitle: {
    fontSize: theme.fontSize.title,
    color: theme.colors.lightGreen,
    margin: "10px 0 40px 0"
  }
});

export default useStyles;
