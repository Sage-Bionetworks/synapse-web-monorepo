import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

// KaTeX CSS is not included in the SRC style bundle since it includes many large font files.
import 'katex/dist/katex.css'

const container = document.getElementById('root')

const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
