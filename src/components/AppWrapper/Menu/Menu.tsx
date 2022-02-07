import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Icon } from "@mui/material";

import useStyles from "./style";

const menuItems = [
  { title: "Home", icon: "home" },
  { title: "My Dashboard", icon: "dashboard", active: true }
];

interface Props {
  open: boolean;
}

const Menu = (props: Props) => {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      className={`${classes.menuWrapper} ${props.open ? "" : classes.closed}`}
    >
      <div className={classes.header}></div>

      <List>
        {menuItems.map((item, index) => (
          <ListItem
            className={`${classes.menuItem} ${
              item.active ? classes.active : ""
            }`}
            button
            key={`MenuItem${index}`}
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
