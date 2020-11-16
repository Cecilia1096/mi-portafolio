import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import themeconfig from './themeconfig/themeconfig'
import Navbar from './components/Navbar'
import List from './components/List'

function App() {
  return (
    <ThemeProvider theme={themeconfig}>
      <Navbar />
      <List />
    </ThemeProvider>
  )
}

export default App
