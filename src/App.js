import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import themeconfig from './themeconfig/themeconfig'
import Content from './components/Content'
import Login from './components/Login'

function App() {
  return (
    <ThemeProvider theme={themeconfig}>
      <Router>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Content />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
