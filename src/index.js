import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import theme from './theme'
import { CssBaseline, MuiThemeProvider } from '@material-ui/core'
import client from './graphql/client'
import { ApolloProvider } from '@apollo/client'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ApolloProvider client={client}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline>
        <App />
      </CssBaseline>
    </MuiThemeProvider>
  </ApolloProvider>
)
