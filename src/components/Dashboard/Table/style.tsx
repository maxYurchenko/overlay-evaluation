import { createUseStyles } from "react-jss";
import theme from "../../../styles/variables";

const tableCellStyle = {
  padding: { left: 0, right: 0, top: 10, bottom: 10 },
  fontSize: theme.fontSize.s,
  color: theme.colors.asphalt,
  border: "none"
};

const useStyles = createUseStyles({
  wrapper: {
    padding: "30px",
    color: theme.colors.asphalt,
    maxHeight: 625,
    width: "auto"
  },
  tableHead: {
    fontWeight: 500
  },
  table: {
    "& th": { ...tableCellStyle },
    "& td": { ...tableCellStyle }
  }
});

export default useStyles;
