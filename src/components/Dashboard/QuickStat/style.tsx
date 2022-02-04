import { createUseStyles } from "react-jss";
import theme from "../../../styles/variables";

const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    color: theme.colors.asphalt
  },
  cardTitle: {
    fontSize: theme.fontSize.l
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
