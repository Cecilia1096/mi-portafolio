import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  IconButton,
  Hidden
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const styles = makeStyles((themeconfig) => ({
  appBar: {
    [themeconfig.breakpoints.up('sm')]: {
      width: `calc(100% - ${240}px)`,
      marginLeft: 240
    },
    menuButton: {
      marginRight: themeconfig.spacing(2),
      [themeconfig.breakpoints.up('sm')]: {
        display: 'none'
      }
    }
  }
}))

const Navbar = (props) => {
  const classes = styles()
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Hidden only={['md', 'xl', 'lg', 'sm']}>
          <IconButton
            className={classes.menuButton}
            onClick={() => props.actionOpen()}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Typography></Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
