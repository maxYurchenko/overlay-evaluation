import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import useStyles from "./style";
import {
  Icon,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery
} from "@mui/material";
import theme from "../../../../styles/variables";
import { useEffect, useState } from "react";

const icons = ["search", "light_mode", "help", "person"];

interface Props {
  open: boolean;
  isTabletOrMobile: boolean;
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
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
      position="fixed"
      className={`${classes.drawer} ${scrolled ? classes.headerScrolled : ""}`}
    >
      <Toolbar className={classes.toolbar}>
        {props.open ? (
          <Typography className={classes.logo} variant="h5">
            OverlayAnalytics
          </Typography>
        ) : (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerOpen}
            edge="start"
            className={classes.hamburgerMenu}
          >
            <MenuIcon />
          </IconButton>
        )}
        {props.isTabletOrMobile && props.open ? (
          <IconButton
            color="inherit"
            onClick={props.handleDrawerClose}
            className={classes.closeButton}
          >
            <ChevronLeftIcon />
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
