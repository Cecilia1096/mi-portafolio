import React, { useState } from 'react'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import clsx from 'clsx'
import {
  makeStyles,
  AppBar,
  Toolbar,
  Divider,
  Drawer,
  List,
  Typography,
  IconButton,
  Switch,
  Container
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { mainListItems } from '../lists/Lists'
import ScrollTop from '../scrolltop/ScrollTop'

const drawerWidth = 240
const styles = makeStyles((themeconfig) => ({
  root: {
    display: 'flex'
  },
  toolbar: {
    paddingRight: 24
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...themeconfig.mixins.toolbar
  },
  appBarSpacer: themeconfig.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto'
  },
  container: {
    paddingTop: themeconfig.spacing(4),
    paddingBottom: themeconfig.spacing(4)
  },
  paper: {
    padding: themeconfig.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  },
  fixedHeight: {
    height: 240
  },
  appBar: {
    zIndex: themeconfig.zIndex.drawer + 1,
    transition: themeconfig.transitions.create(['width', 'margin'], {
      easing: themeconfig.transitions.easing.sharp,
      duration: themeconfig.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: themeconfig.transitions.create(['width', 'margin'], {
      easing: themeconfig.transitions.easing.sharp,
      duration: themeconfig.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: 'none'
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: themeconfig.transitions.create('width', {
      easing: themeconfig.transitions.easing.sharp,
      duration: themeconfig.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: themeconfig.transitions.create('width', {
      easing: themeconfig.transitions.easing.sharp,
      duration: themeconfig.transitions.duration.leavingScreen
    }),
    width: themeconfig.spacing(7),
    [themeconfig.breakpoints.up('sm')]: {
      width: themeconfig.spacing(9)
    }
  }
}))

const content = () => {
  const classes = styles()
  const [open, setOpen] = useState(true)
  const [darkState, setDarkState] = useState(false)
  const palletType = darkState ? 'dark' : 'light'

  const themeconfig = createMuiTheme({
    palette: {
      primary: {
        light: '#dacfed',
        main: '#d1c4e9',
        dark: '#9289a3',
        contrastText: '#fff'
      },
      type: palletType
    }
  })

  const handleThemeChange = () => {
    setDarkState(!darkState)
  }

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <ThemeProvider theme={themeconfig}>
      <div className={classes.root}>
        <AppBar
          position="absolute"
          className={clsx(classes.appBar, open && classes.appBarShift)}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(
                classes.menuButton,
                open && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              Dashboard
            </Typography>
            <Switch checked={darkState} onChange={handleThemeChange} />
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>{mainListItems}</List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <ScrollTop />
          </Container>
        </main>
      </div>
    </ThemeProvider>
  )
}

export default content
