import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import UserContext from './commons/context/UserContext'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import Content from './components/content/Content'
import Login from './components/login/Login'
import themeconfig from './commons/themeconfig/themeconfig'

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined
  })

  useEffect(() => {
    const checkLoggeadIn = async () => {
      let token = localStorage.getItem('auth-token')
      if (token === null) {
        localStorage.setItem('auth-token', '')
        token = ''
      }
      const tokenRes = await Axios.post(
        'https://me-portfolio-api.herokuapp.com/api/tokenisvalid',
        null,
        { headers: { 'x-auth-token': token } }
      )
      if (tokenRes.data) {
        const userRes = await Axios.get('/dashboard', {
          headers: { 'x-auth-token': token }
        })
        setUserData({
          token,
          user: userRes.data
        })
      }
    }
    checkLoggeadIn()
  }, [])

  return (
    <ThemeProvider theme={themeconfig}>
      <Router>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Switch>
            <Route path="/api/login" exact component={Login} />
            <Route path="/api/dashboard" exact component={Content} />
            <Content />
          </Switch>
        </UserContext.Provider>
      </Router>
    </ThemeProvider>
  )
}

export default App
