import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/themes/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}
