import { createUseStyles } from "react-jss";
import theme from "../../styles/variables";

const base = {
  color: theme.colors.white
};

const useStyles = createUseStyles({
  wrapper: {
    display: { xs: "none", sm: "block" },
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: 280,
      background: theme.colors.lightGreen,
      color: theme.colors.white
    }
  },
  logo: {
    ...base,
    fontSize: theme.fontSize.logo,
    padding: "35px 0 0 40px",
    fontWeight: 500
  },
  menuItem: {
    ...base,
    fontSize: theme.fontSize.menu,
    padding: "10px 0 10px 40px",
    margin: "10px 0 10px 0"
  },
  icon: { ...base, minWidth: "24px", marginRight: "20px" }
});

export default useStyles;
