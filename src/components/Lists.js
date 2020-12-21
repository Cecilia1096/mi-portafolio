import React from 'react'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@material-ui/core'
import DashboardIcon from '@material-ui/icons/Dashboard'
import PostAddIcon from '@material-ui/icons/PostAdd'
import LabelIcon from '@material-ui/icons/Label'

const Lists = () => {
  return (
    <div>
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <PostAddIcon />
          </ListItemIcon>
          <ListItemText primary="Post" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <LabelIcon />
          </ListItemIcon>
          <ListItemText primary="Tags" />
        </ListItem>
        <Divider />
      </List>
    </div>
  )
}

export default Lists
