import { createUseStyles } from "react-jss";
import theme from "../../../../styles/variables";

const tableCellStyle = {
  padding: { left: 0, right: 0, top: 10, bottom: 10 },
  fontSize: theme.fontSize.s,
  color: theme.colors.asphalt,
  border: "none"
};

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
    marginLeft: "10px",
    marginBottom: "25px"
  },
  tableContainer: {
    flex: "1 1 100%"
  },
  table: {
    fontSize: theme.fontSize.s,
    color: theme.colors.asphalt,
    border: "none",
    "& .ReactVirtualized__Table__headerRow": {
      textTransform: "inherit"
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
