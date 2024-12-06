import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import AppWrapper from './AppWrapper'

// KaTeX CSS is not included in the SRC style bundle since it includes many large font files.
import 'katex/dist/katex.css'

const container = document.getElementById('accountWebRoot')

const root = createRoot(container!)

root.render(
  <StrictMode>
    <BrowserRouter>
      <AppWrapper>
        <App />
      </AppWrapper>
    </BrowserRouter>
  </StrictMode>,
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
