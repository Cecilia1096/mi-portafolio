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
  const classes = useStyles()
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          onClick={() => props.actionOpen()}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h5">Mi Portafolio</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
