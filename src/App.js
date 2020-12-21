import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import UserContext from './commons/context/UserContext'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import Content from './components/Content'
import Login from './components/Login'
import themeconfig from './themeconfig/themeconfig'

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
        'https://me-portfolio-api.herokuapp.com/tokenisvalid',
        null,
        { headers: { 'x-auth-token': token } }
      )
      if (tokenRes.data) {
        const userRes = await Axios.get(
          'https://me-portfolio-api.herokuapp.com/dashboard',
          {
            headers: { 'x-auth-token': token }
          }
        )
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
            <Route path="/login" exact component={Login} />
            <Content />
          </Switch>
        </UserContext.Provider>
      </Router>
    </ThemeProvider>
  )
}

export default App
