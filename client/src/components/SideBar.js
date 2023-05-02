import  React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton  } from '@mui/material';
import { Inbox, Mail, Menu} from '@mui/icons-material';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <React.Fragment>
         <Drawer variant="temporary" open={isOpen} onClose={handleToggle}>
        <List>
          <ListItem button>
            <ListItemIcon>
              <Inbox />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Mail />
            </ListItemIcon>
            <ListItemText primary="Types of Products" />
          </ListItem>
        </List>
      </Drawer>
      <IconButton color="inherit" onClick={handleToggle}>
        <Menu />
      </IconButton>
      </React.Fragment>
    );
  }
  
  export default Sidebar;