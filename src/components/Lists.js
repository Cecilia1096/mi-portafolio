import React from 'react'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@material-ui/core'
import LibraryAddOutlinedIcon from '@material-ui/icons/LibraryAddOutlined'
const Lists = () => {
  return (
    <div>
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <LibraryAddOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="How to create a theme child with wordpress" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <LibraryAddOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="How to create a theme child with wordpress" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <LibraryAddOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="How to create a theme child with wordpress" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <LibraryAddOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="How to create a theme child with wordpress" />
        </ListItem>
      </List>
    </div>
  )
}

export default Lists
