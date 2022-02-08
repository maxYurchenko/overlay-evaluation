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

      transform: "translateX(-100%)",
      transition: "cubic-bezier(0.3, 0.46, 0.45, 0.94) .5s"
    },
    "&$open": {
      "& .MuiDrawer-paper": {
        transform: "translateX(0)"
      }
    },
    "& $menuItem": {
      color: theme.colors.white,
      whiteSpace: "nowrap",
      fontSize: theme.fontSize.menu,
      padding: "15px 0 15px 40px",
      margin: "10px 0 10px 0",
      transition: "0.15s all linear",
      "&$active": {
        background: theme.colors.darkGreen,
        borderLeft: `8px solid ${theme.colors.white}`,
        paddingLeft: "32px"
      }
    }
  },
  open: {},
  hamburgerMenu: {},
  closeButton: {
    marginLeft: 40
  },
  logo: {
    color: theme.colors.white,
    fontSize: theme.fontSize.logo,
    fontWeight: 500,
    padding: "40px 0 0 40px"
  },
  menuItem: {},
  active: {},
  closed: {},
  list: {},
  [`@media ${theme.mediaQueries.sm}`]: {
    logo: {
      flex: "1 0 auto"
    },
    menuWrapper: {
      "& .MuiDrawer-paper": {
        flexWrap: "wrap",
        alignItems: "baseline",
        alignContent: "flex-start",
        flexDirection: "row"
      }
    },
    list: { flex: "1 0 100%" }
  }
});

export default useStyles;
