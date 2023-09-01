import React from 'react'
import { render } from '@testing-library/react'
import { it } from 'vitest'
import App from '../App'
it('renders without crashing', () => {
  window.history.pushState({}, 'Sage account', '/route')
  render(<App />)
})
