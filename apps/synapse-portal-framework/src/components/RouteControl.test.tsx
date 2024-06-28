import React from 'react'
import { RouteControl, RouteControlProps } from '../components/RouteControl'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

describe('RouteControl works', () => {
  const customRoutes = [
    { name: 'route1', hide: false },
    { name: 'route2', hide: false },
  ]
  const props: RouteControlProps = {
    customRoutes,
    handleChanges: vi.fn(),
    isSelected: route => route === 'route1',
  }
  it('renders the route tabs', () => {
    render(<RouteControl {...props} />)
    const tabs = screen.getAllByRole('tab')
    expect(tabs).toHaveLength(2)
    screen.getByText(customRoutes[0].name)
    screen.getByText(customRoutes[1].name)
  })
})
