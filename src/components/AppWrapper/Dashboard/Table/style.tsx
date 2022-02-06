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
    maxHeight: 625,
    width: "auto",
    height: 550
  },
  tabeTitle: {
    fontSize: theme.fontSize.menu,
    marginLeft: "10px",
    marginBottom: "25px"
  },
  tableHead: {
    fontWeight: 500
  },
  table: {
    fontSize: theme.fontSize.s,
    color: theme.colors.asphalt,
    border: "none",
    "& .ReactVirtualized__Table__headerRow": {
      textTransform: "inherit"
    }
  }
});

export default useStyles;
