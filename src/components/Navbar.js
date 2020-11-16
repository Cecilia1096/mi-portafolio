import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  IconButton
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((themeconfig) => ({
  offset: themeconfig.mixins.toolbar
}))

const Navbar = () => {
  const classes = useStyles()
  return (
    <div>
      <AppBar>
        <Toolbar>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Typography variant="h5">Mi Portafolio</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </div>
  )
}

export default Navbar
