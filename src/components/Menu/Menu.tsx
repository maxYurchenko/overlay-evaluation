import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Icon, Typography } from "@mui/material";

import useStyles from "./style";

const menuItems = [
  { title: "Home", icon: "home" },
  { title: "My Dashboard", icon: "dashboard" }
];

const Menu = () => {
  const classes = useStyles();

  return (
    <Drawer variant="permanent" className={classes.wrapper}>
      <Typography className={classes.logo} variant="h5">
        OverlayAnalytics
      </Typography>
      <List>
        {menuItems.map((item, index) => (
          <ListItem
            className={classes.menuItem}
            button
            key={`MenuItem${item.title}`}
          >
            <ListItemIcon className={classes.icon}>
              <Icon>{item.icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Menu;
