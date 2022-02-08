import { createUseStyles } from "react-jss";
import theme from "../../../../styles/variables";

const useStyles = createUseStyles({
  wrapper: {
    padding: "20px",
    color: theme.colors.asphalt,
    width: "auto",
    flex: "1 1 100%",
    display: "flex",
    flexDirection: "column"
  },
  tabeTitle: {
    fontSize: theme.fontSize.menu,
    paddingLeft: "10px"
  },
  tableContainer: {
    flex: "1 1 100%",
    padding: "15px 0",
    boxSizing: "border-box"
  },
  table: {
    fontSize: theme.fontSize.s,
    color: theme.colors.asphalt,
    border: "none",
    "& .ReactVirtualized__Table__headerRow": {
      textTransform: "inherit",
      paddingBottom: 20
    }
  },
  [`@media ${theme.mediaQueries.lg}`]: {
    wrapper: { height: 500 }
  },
  [`@media ${theme.mediaQueries.sm}`]: {
    wrapper: {
      minWidth: "600px"
    }
  }
});

export default useStyles;
