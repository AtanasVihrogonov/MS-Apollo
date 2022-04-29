import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CssBaseline, MuiThemeProvider } from '@material-ui/core'
import theme from './theme'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline>
      <App />
    </CssBaseline>
  </MuiThemeProvider>
)
