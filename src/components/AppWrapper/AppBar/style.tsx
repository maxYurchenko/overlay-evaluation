import { createUseStyles } from "react-jss";
import theme from "../../../styles/variables";

const noPaddingMargin = {
  margin: 0,
  padding: 0
};

const useStyles = createUseStyles({
  list: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    padding: 0,
    marginLeft: "auto"
  },
  listItem: {},
  listIcon: {},
  appBar: {
    "&.MuiPaper-root": {
      transition: "background 0.5s ease, color 0.5s ease, height 0.5s ease"
    },
    "& $toolbar": {
      "& $hamburgerMenu": { marginRight: "auto" },
      justifyContent: "flex-end",
      padding: "40px",
      minHeight: 0
    },
    "& $list": {
      ...noPaddingMargin,
      "& $listItem": {
        ...noPaddingMargin,
        "& $listIcon": {
          ...noPaddingMargin,
          marginLeft: 24,
          minWidth: 0,
          "& span": {
            cursor: "pointer",
            transition: "0.15s all linear",
            "&:hover": {
              color: theme.colors.lightGreen
            }
          }
        }
      }
    }
  },
  hamburgerMenu: {},
  toolbar: {},
  headerScrolled: {
    "& $toolbar": { padding: "15px 40px" },
    background: theme.colors.lightGreen,
    "& $listIcon ": {
      "& span": {
        color: theme.colors.white,
        "&:hover": {
          color: theme.colors.darkGreen
        }
      }
    },
    "& $hamburgerMenu": {
      color: theme.colors.white
    }
  },
  [`@media ${theme.mediaQueries.md}`]: {
    listIcon: { minWidth: 0, marginLeft: 30 },
    hamburgerMenu: {
      color: theme.colors.asphalt
    },
    appBar: {
      "& $toolbar": {
        padding: "20px 40px"
      }
    }
  },
  [`@media ${theme.mediaQueries.sm}`]: {}
});

export default useStyles;
