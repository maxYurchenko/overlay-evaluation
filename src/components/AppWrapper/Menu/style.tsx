import { createUseStyles } from "react-jss";
import theme, { breakPoints } from "../../../styles/variables";

const useStyles = createUseStyles({
  menuWrapper: {
    "& .MuiDrawer-paper": {
      width: 280,
      boxSizing: "border-box",
      background: theme.palette.primary.main,
      overflow: "hidden",
      color: theme.palette.text.secondary,
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
      color: theme.palette.text.secondary,
      whiteSpace: "nowrap",
      fontSize: theme.typography.h3.fontSize,
      padding: "15px 0 15px 40px",
      margin: "10px 0 10px 0",
      transition: "0.15s all linear",
      "&$active": {
        background: theme.palette.primary.dark,
        borderLeft: `8px solid ${theme.palette.text.secondary}`,
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
    color: theme.palette.text.secondary,
    fontSize: theme.typography.h2.fontSize,
    fontWeight: 500,
    padding: "40px 0 0 40px"
  },
  menuItem: {},
  active: {},
  closed: {},
  list: {},
  [`@media ${breakPoints.mediaQueries.sm}`]: {
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
