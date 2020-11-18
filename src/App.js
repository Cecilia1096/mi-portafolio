import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import themeconfig from './themeconfig/themeconfig'
import Content from './components/Content'

function App() {
  return (
    <ThemeProvider theme={themeconfig}>
      <Content />
    </ThemeProvider>
  )
}

export default App
