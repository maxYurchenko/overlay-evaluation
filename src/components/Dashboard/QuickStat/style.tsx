import { createUseStyles } from "react-jss";
import theme from "../../../styles/variables";

const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    padding: "20px",
    color: theme.colors.asphalt,
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignItems: "flex-end"
  },
  cardTitle: {
    fontSize: theme.fontSize.l,
    flex: "1 1 100%"
  },
  cardHighlight: {
    fontWeight: 500,
    fontSize: theme.fontSize.highlight
  },
  cardDate: {
    fontSize: theme.fontSize.m
  }
});

export default useStyles;
