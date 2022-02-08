import { createUseStyles } from "react-jss";
import theme from "../../../../styles/variables";

const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    padding: "20px",
    color: theme.palette.text.primary,
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignItems: "flex-end"
  },
  cardTitle: {
    fontSize: theme.typography.subtitle1.fontSize,
    flex: "1 1 100%"
  },
  cardHighlight: {
    fontWeight: 500,
    fontSize: 34
  },
  cardDate: {
    fontSize: theme.typography.subtitle1.fontSize
  }
});

export default useStyles;
