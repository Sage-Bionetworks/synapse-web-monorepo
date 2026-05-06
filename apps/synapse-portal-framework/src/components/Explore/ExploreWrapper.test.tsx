import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { describe, expect, it } from 'vitest'
import ExploreWrapper from './ExploreWrapper'
import { ExploreWrapperProps } from './ExploreWrapperProps'
import {
  PortalContextProvider,
  PortalContextType,
} from '@/components/PortalContext'

const mockPortalContext: PortalContextType = {
  portalName: 'TestPortal',
  portalKey: 'test',
  portalDescription: 'Test description',
  routeConfig: [],
  headerConfig: { title: 'Test', summary: 'Test summary' },
  footerConfig: {},
  logoHeaderConfig: {},
  logoFooterConfig: {},
  navbarConfig: { routes: [], isPortalsDropdownEnabled: false },
}

describe('ExploreWrapper', () => {
  const props = {
    explorePaths: [
      {
        path: 'Programs',
      },
      {
        path: 'Data',
      },
    ],
  } satisfies ExploreWrapperProps
  const router = createMemoryRouter([
    {
      path: '/',
      element: <ExploreWrapper {...props} />,
    },
  ])

  it('renders tabs', async () => {
    render(
      <PortalContextProvider value={mockPortalContext}>
        <RouterProvider router={router} />
      </PortalContextProvider>,
    )
    const tabs = await screen.findAllByRole('tab')
    expect(tabs).toHaveLength(2)
    screen.getByText(props.explorePaths[0].path)
    screen.getByText(props.explorePaths[1].path)
  })
})
