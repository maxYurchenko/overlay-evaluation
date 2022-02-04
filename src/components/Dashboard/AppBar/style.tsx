import { createUseStyles } from "react-jss";
import theme from "../../../styles/variables";

const useStyles = createUseStyles({
  wrapper: {
    marginLeft: 280,
    width: `calc(100% - ${280}px)!important`,
    padding: "35px 35px 0 0",
    backgroundColor: theme.colors.background,
    boxShadow: "none"
  },
  list: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "flex-end",
    padding: 0
  },
  listItem: { margin: "0 20px 0 0", padding: 0 },
  icon: { color: theme.colors.asphalt, minWidth: "24px" }
});

export default useStyles;
