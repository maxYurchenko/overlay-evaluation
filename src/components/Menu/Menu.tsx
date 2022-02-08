import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Icon, IconButton, Typography } from "@mui/material";

import useStyles from "./style";
import { NavLink } from "react-router-dom";

const menuItems = [
  { title: "Home", icon: "home", url: "/" },
  { title: "My Dashboard", icon: "dashboard", url: "/dashboard" }
];

interface Props {
  open: boolean;
  isTabletOrMobile: boolean;
  handleDrawerClose: () => void;
}

const Menu = (props: Props) => {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open={props.open}
      className={`${classes.menuWrapper} ${props.open ? classes.open : ""}`}
    >
      <Typography variant="h2" className={classes.logo}>
        OverlayAnalytics
      </Typography>

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
        {menuItems.map((item, index) => (
          <NavLink
            className={(navLinkProps: { isActive: boolean }) => {
              return `${navLinkProps.isActive ? classes.active : ""}  ${
                classes.link
              }`;
            }}
            key={`MenuItem${index}`}
            to={item.url}
          >
            <ListItem className={classes.menuItem} button>
              <ListItemIcon>
                <Icon sx={{ color: "white" }}>{item.icon}</Icon>
              </ListItemIcon>
              <Typography className={classes.menuLink} variant="h3">
                {item.title}
              </Typography>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Drawer>
  );
};

export default Menu;
