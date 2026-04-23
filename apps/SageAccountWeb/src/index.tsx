import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { router } from './routes'

// KaTeX CSS is not included in the SRC style bundle since it includes many large font files.
import 'katex/dist/katex.css'

const container = document.getElementById('accountWebRoot')

const root = createRoot(container!)

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
