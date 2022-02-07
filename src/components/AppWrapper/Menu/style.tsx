import { createUseStyles } from "react-jss";
import theme from "../../../styles/variables";

const useStyles = createUseStyles({
  menuWrapper: {
    "& .MuiDrawer-paper": {
      width: 280,
      boxSizing: "border-box",
      background: theme.colors.lightGreen,
      overflow: "hidden",
      color: theme.colors.white,
      border: "none",
      transition: "cubic-bezier(0.3, 0.46, 0.45, 0.94) .5s",
      transform: "translateX(0)"
    },
    "&$closed": {
      "& .MuiDrawer-paper": {
        transform: "translateX(-100%)"
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
