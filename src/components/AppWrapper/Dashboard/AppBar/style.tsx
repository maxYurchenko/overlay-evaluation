import { createUseStyles } from "react-jss";
import theme from "../../../../styles/variables";

const useStyles = createUseStyles({
  list: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    padding: 0,
    marginLeft: "auto"
  },
  listItem: { margin: "0 0 0 0", padding: 0 },
  listIcon: {
    color: theme.colors.asphalt,
    transition: "0.15s all linear",
    "&:hover": {
      color: theme.colors.lightGreen
    }
  },
  drawer: {
    transition: "width 0.5s linear",
    zIndex: 1500,
    marginLeft: theme.drawer.width,
    background: "none",
    boxShadow: "none"
  },
  logo: {
    color: theme.colors.white,
    fontSize: theme.fontSize.logo,
    fontWeight: 500,
    paddingLeft: "16px"
  },
  toolbar: {
    minHeight: "90px"
  },
  closeButton: {
    marginLeft: 40
  },
  headerScrolled: {
    background: theme.colors.lightGreen,
    "& $listIcon": {
      color: theme.colors.white,
      "&:hover": {
        color: theme.colors.darkGreen
      }
    },
    "& $hamburgerMenu": {
      color: theme.colors.white
    }
  },
  hamburgerMenu: {},
  [`@media ${theme.mediaQueries.md}`]: {
    listIcon: { minWidth: 0, marginLeft: 30 },
    hamburgerMenu: {
      color: theme.colors.asphalt
    }
  },
  [`@media ${theme.mediaQueries.sm}`]: {
    toolbar: {
      minHeight: "60px"
    }
  }
});

export default useStyles;
