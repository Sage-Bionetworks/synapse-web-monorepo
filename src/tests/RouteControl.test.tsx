import * as React from 'react'
import { RouteControl, RouteControlProps } from '../RouteControl'
import { render, screen } from '@testing-library/react'

describe('RouteControl works', () => {
  const customRoutes = ['route1', 'route2']
  const props: RouteControlProps = {
    customRoutes,
    handleChanges: jest.fn(),
    isSelected: (route) => route === 'route1',
  }
  it('renders the route tabs', () => {
    render(<RouteControl {...props} />)
    const tabs = screen.getAllByRole('tab')
    expect(tabs).toHaveLength(2)
    screen.getByText(customRoutes[0])
    screen.getByText(customRoutes[1])
  })
})
