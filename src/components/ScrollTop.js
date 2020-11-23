import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
import ExpandlessIcon from '@material-ui/icons/ExpandLess'
import IconButton from '@material-ui/core/IconButton'

const Scroll = ({ showBelow }) => {
  const styles = makeStyles(() => ({
    toTop: {
      zIndex: 2,
      position: 'fixed',
      bottom: '2vh',
      backgroundColor: 'rgba(0, 0, 0, 0.08)',
      color: '#d1c4e9;',
      '&:hover,&.Mui-focusVisible': {
        transition: '0.3s',
        color: '#397ba6',
        backgroundColor: 'rgba(0, 0, 0, 0.08)'
      },
      right: '2%'
    }
  }))

  const classes = styles()
  const [show, setShow] = useState(showBelow !== 1)

  const handleScroll = () => {
    if (window.pageXOffset > showBelow) {
      if (!show) setShow(true)
    } else {
      if (show) setShow(false)
    }
  }

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll)
      return () => window.removeEventListener(`scroll`, handleScroll)
    }
  })

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: `smooth` })
  }

  return (
    <div>
      {show && (
        <IconButton onClick={handleClick} className={classes.toTop}>
          <ExpandlessIcon />
        </IconButton>
      )}
    </div>
  )
}

export default Scroll
