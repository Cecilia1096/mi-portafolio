import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'
import './Login.css'

const styles = makeStyles((themeconfig) => ({
  widthnew: {
    width: 300,
    display: 'flex',
    'flex-direction': 'column',
    marginTop: 20,
    margin: 'auto'
  },
  widthbutton: {
    width: '300px',
    borderRadius: 20,
    backgroundColor: '#d1c4e9',
    margin: '-3px 0px 0px',
    height: '40px'
  }
}))

const Login = () => {
  const classes = styles()

  return (
    <div>
      <div className="bienvenido-content">
        <h1>¡Bienvenido!</h1>
      </div>
      <form className="content-form">
        <TextField
          className={classes.widthnew}
          id="filled-basic"
          label="Correo"
          type="email"
          variant="filled"
        />
        <TextField
          className={classes.widthnew}
          id="filled-password-input"
          label="Contraseña"
          autoComplete="current-password"
          variant="filled"
        />
        <div className="forgot-password">
          <a href="http://localhost:3000/forgot-password">
            ¿Olvidaste tu contraseña?
          </a>
        </div>
        <div className="button-login">
          <Button
            className={classes.widthbutton}
            type="submit"
            variant="contained"
          >
            Iniciar Sesión
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Login
