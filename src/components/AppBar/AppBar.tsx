import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuIcon from "@mui/icons-material/Menu";

import useStyles from "./style";
import { Icon, IconButton, Toolbar } from "@mui/material";
import { useEffect, useState } from "react";

const icons = ["search", "light_mode", "help", "person"];

interface Props {
  open: boolean;
  isTabletOrMobile: boolean;
  handleDrawerOpen: () => void;
}

const AppBar = (props: Props) => {
  const classes = useStyles();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setScrolled(window.pageYOffset > 1)
      );
    }
  }, []);

  return (
    <MuiAppBar
      elevation={0}
      color={scrolled ? "primary" : "transparent"}
      position="fixed"
      className={`${classes.appBar} ${scrolled ? classes.headerScrolled : ""}`}
    >
      <Toolbar className={classes.toolbar}>
        {!(props.open && props.isTabletOrMobile) ? (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerOpen}
            edge="start"
            className={`${classes.hamburgerMenu}  ${
              props.open && classes.hidden
            }`}
          >
            <MenuIcon />
          </IconButton>
        ) : null}
        <List className={classes.list}>
          {icons.map((item) => (
            <ListItem className={classes.listItem} key={`AppBarIcon${item}`}>
              <ListItemIcon className={classes.listIcon}>
                <Icon>{item}</Icon>
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
