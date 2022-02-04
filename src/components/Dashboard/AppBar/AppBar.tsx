import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

import useStyles from "./style";
import { Icon } from "@mui/material";

const icons = ["person", "help", "light_mode", "search"];

const AppBar = () => {
  const classes = useStyles();
  return (
    <MuiAppBar className={classes.wrapper}>
      <List className={classes.list}>
        {icons.map((item) => (
          <ListItem className={classes.listItem} key={`AppBarIcon${item}`}>
            <ListItemIcon className={classes.icon}>
              <Icon>{item}</Icon>
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
    </MuiAppBar>
  );
};

export default AppBar;
