import React from 'react'
import { makeStyles, Hidden } from '@material-ui/core'
import Navbar from './Navbar'
import Drawers from './Drawers'

const styles = makeStyles((themeconfig) => ({
  root: {
    display: 'flex'
  },
  toolbar: themeconfig.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: themeconfig.palette.background.default,
    padding: themeconfig.spacing(3)
  }
}))

const content = () => {
  const classes = styles()
  const [open, setOpen] = React.useState(false)

  const actionOpen = () => {
    setOpen(!open)
  }

  return (
    <div className={classes.root}>
      <Navbar actionOpen={actionOpen} />
      <Hidden xsDown>
        <Drawers variant="permanent" open={true} />
      </Hidden>
      <Hidden smUp>
        <Drawers variant="temporary" open={open} onClose={actionOpen} />
      </Hidden>
      <div className={classes.content}>
        <div className={classes.toolbar}></div>
      </div>
    </div>
  )
}

export default content
