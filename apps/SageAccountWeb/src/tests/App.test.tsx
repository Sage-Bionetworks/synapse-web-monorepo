import App from '../App'
import { render } from '@testing-library/react'
import { it } from 'vitest'
import TestWrapper from './TestWrapper'

it('renders without crashing', () => {
  window.history.pushState({}, 'Sage account', '/route')
  render(<App />, { wrapper: TestWrapper })
})
