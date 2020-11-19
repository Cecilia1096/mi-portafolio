import { createMuiTheme } from '@material-ui/core/styles'

const themeconfig = createMuiTheme({
  palette: {
    primary: {
      light: '#dacfed',
      main: '#d1c4e9',
      dark: '#9289a3',
      contrastText: '#fff'
    },
    typography: {
      fontFamily: [
        'Comic Sans MS',
        '-apple-system',
        '"Segoe UI"',
        'Roboto'
      ].join(',')
    }
  }
})

export default themeconfig
