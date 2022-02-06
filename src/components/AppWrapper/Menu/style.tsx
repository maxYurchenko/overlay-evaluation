import { createUseStyles } from "react-jss";
import theme from "../../../styles/variables";

const base = {
  color: theme.colors.white
};

const useStyles = createUseStyles({
  menuWrapper: {
    display: { xs: "none", sm: "block" },
    "& .MuiDrawer-paper": {
      transition: "0.5s width linear",
      width: 280,
      boxSizing: "border-box",
      background: theme.colors.lightGreen,
      overflow: "hidden",
      color: theme.colors.white
    },
    "&$closed": {
      "& .MuiDrawer-paper": {
        width: 60
      }
    }
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    height: 90
  },
  logo: {
    ...base,
    fontSize: theme.fontSize.logo,
    padding: "35px 0 0 40px",
    fontWeight: 500
  },
  menuItem: {
    ...base,
    whiteSpace: "nowrap",
    fontSize: theme.fontSize.menu,
    padding: "10px 0 10px 40px",
    margin: "10px 0 10px 0",
    transition: "0.15s all linear",
    "&$closed": {
      paddingLeft: 20
    }
  },
  active: {
    background: theme.colors.darkGreen,
    borderLeft: `8px solid ${theme.colors.white}`,
    paddingLeft: "32px",
    "&$closed": {
      paddingLeft: 13
    }
  },
  icon: { ...base, minWidth: "24px", marginRight: "20px" },
  closed: {},
  [`@media ${theme.mediaQueries.sm}`]: {
    menuWrapper: {
      "&$closed": {
        "& .MuiDrawer-paper": {
          width: 0,
          display: "none"
        }
      }
    }
  }
});

export default useStyles;
