import React, { useState, useContext } from 'react'
import UserContext from '../commons/context/UserContext'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'
import ErrorNotice from '../commons/errorNotice/ErrorNotice'
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

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState()

  const { setUserData } = useContext(UserContext)
  const history = useHistory()

  const submit = async (e) => {
    e.preventDefault()
    try {
      const loginUser = { email, password }
      const loginRes = await Axios.post(
        'https://me-portfolio-api.herokuapp.com/',
        loginUser
      )
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user
      })
      localStorage.setItem('auth-token', loginRes.data.token)
      history.push('/dashboard')
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg)
    }
  }

  return (
    <div>
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
      <div className="bienvenido-content">
        <h1>¡Bienvenido!</h1>
      </div>
      <form className="content-form" onSubmit={submit}>
        <TextField
          className={classes.widthnew}
          id="filled-basic"
          label="Correo"
          type="email"
          variant="filled"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          className={classes.widthnew}
          id="filled-password-input"
          label="Contraseña"
          autoComplete="current-password"
          variant="filled"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="forgot-password">
          <a href="https://me-portfolio-api.herokuapp.com/forgot-password">
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
