import { createUseStyles } from "react-jss";
import theme from "../../../styles/variables";

const useStyles = createUseStyles({
  menuWrapper: {
    display: { xs: "none", sm: "block" },
    "& .MuiDrawer-paper": {
      transition: "0.5s width linear",
      width: 280,
      boxSizing: "border-box",
      background: theme.colors.lightGreen,
      overflow: "hidden",
      color: theme.colors.white,
      border: "none"
    },
    "&$closed": {
      "& .MuiDrawer-paper": {
        width: 0
      }
    }
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    height: 90
  },
  menuItem: {
    color: theme.colors.white,
    whiteSpace: "nowrap",
    fontSize: theme.fontSize.menu,
    padding: "10px 0 10px 40px",
    margin: "10px 0 10px 0",
    transition: "0.15s all linear"
  },
  active: {
    background: theme.colors.darkGreen,
    borderLeft: `8px solid ${theme.colors.white}`,
    paddingLeft: "32px"
  },
  icon: {
    color: theme.colors.white,
    minWidth: "24px",
    marginRight: "20px"
  },
  closed: {}
});

export default useStyles;
