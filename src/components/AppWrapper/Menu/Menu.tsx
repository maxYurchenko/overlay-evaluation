import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Icon, IconButton, Typography } from "@mui/material";

import useStyles from "./style";

const menuItems = [
  { title: "Home", icon: "home" },
  { title: "My Dashboard", icon: "dashboard", active: true }
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
          <ListItem
            className={`${classes.menuItem} ${
              item.active ? classes.active : ""
            }`}
            button
            key={`MenuItem${index}`}
          >
            <ListItemIcon>
              <Icon sx={{ color: "white" }}>{item.icon}</Icon>
            </ListItemIcon>
            <Typography variant="h3">{item.title}</Typography>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Menu;
