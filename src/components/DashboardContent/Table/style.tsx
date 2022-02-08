import { createUseStyles } from "react-jss";
import theme, { breakPoints } from "../../../styles/variables";

const useStyles = createUseStyles({
  wrapper: {
    padding: "20px",
    color: theme.palette.text.primary,
    width: "auto",
    flex: "1 1 100%",
    display: "flex",
    flexDirection: "column"
  },
  tabeTitle: {
    fontSize: theme.typography.h3.fontSize,
    paddingLeft: "10px"
  },
  tableContainer: {
    flex: "1 1 100%",
    padding: "15px 0",
    boxSizing: "border-box"
  },
  table: {
    fontSize: theme.typography.fontSize,
    color: theme.palette.text.primary,
    border: "none",
    "& .ReactVirtualized__Table__headerRow": {
      textTransform: "inherit",
      paddingBottom: 20
    }
  },
  [`@media ${breakPoints.mediaQueries.lg}`]: {
    wrapper: { height: 500 }
  },
  [`@media ${breakPoints.mediaQueries.sm}`]: {
    wrapper: {
      minWidth: "600px"
    }
  }
});

export default useStyles;
