import React, { useState } from 'react'
// import Axios from 'axios'
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
