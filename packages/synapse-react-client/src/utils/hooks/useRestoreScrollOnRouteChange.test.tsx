import {
  mockWindowScrollTo,
  simulateWindowScroll,
} from '@/testutils/ScrollTestUtils'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  createMemoryRouter,
  Link,
  Outlet,
  RouteObject,
  RouterProvider,
} from 'react-router'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useRestoreScrollOnRouteChange } from './useRestoreScrollOnRouteChange'

function Layout() {
  useRestoreScrollOnRouteChange()
  return <Outlet />
}

function setUp() {
  const scrollTo = mockWindowScrollTo()
  simulateWindowScroll(0)

  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <>
              <Link to="/child">go to child</Link>
              <Link to="/?filter=abc">apply filter</Link>
            </>
          ),
        },
        { path: 'child', element: <Link to="/">back to list</Link> },
      ],
    },
  ]

  render(
    <RouterProvider
      router={createMemoryRouter(routes, { initialEntries: ['/'] })}
    />,
  )

  return { scrollTo, user: userEvent.setup() }
}

describe('useRestoreScrollOnRouteChange', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('scrolls to the top when reaching a pathname for the first time', async () => {
    const { scrollTo, user } = setUp()
    simulateWindowScroll(1500)

    await user.click(screen.getByRole('link', { name: 'go to child' }))

    expect(await screen.findByText('back to list')).toBeInTheDocument()
    expect(scrollTo).toHaveBeenCalledWith(0, 0)
  })

  it('restores the previous offset when returning to a pathname', async () => {
    const { scrollTo, user } = setUp()
    simulateWindowScroll(1500)

    await user.click(screen.getByRole('link', { name: 'go to child' }))
    expect(await screen.findByText('back to list')).toBeInTheDocument()
    simulateWindowScroll(0)
    scrollTo.mockClear()

    await user.click(screen.getByRole('link', { name: 'back to list' }))

    expect(await screen.findByText('go to child')).toBeInTheDocument()
    expect(scrollTo).toHaveBeenCalledWith(0, 1500)
  })

  it('does not scroll on the initial render', () => {
    const { scrollTo } = setUp()

    expect(scrollTo).not.toHaveBeenCalled()
  })

  it('does not scroll when only the search params change', async () => {
    const { scrollTo, user } = setUp()
    simulateWindowScroll(1500)

    await user.click(screen.getByRole('link', { name: 'apply filter' }))

    expect(scrollTo).not.toHaveBeenCalled()
  })
})
