import React from 'react'
import App from '../App'
import { render } from '@testing-library/react'
import { it } from 'vitest'
import { MemoryRouter } from 'react-router-dom'

it('renders without crashing', () => {
  window.history.pushState({}, 'Sage account', '/route')
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  )
})
