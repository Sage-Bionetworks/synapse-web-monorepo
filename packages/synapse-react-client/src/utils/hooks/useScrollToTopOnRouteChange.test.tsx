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
import { useScrollToTopOnRouteChange } from './useScrollToTopOnRouteChange'

function Layout() {
  useScrollToTopOnRouteChange()
  return <Outlet />
}

function setUp() {
  // `window.scrollTo` is stubbed globally in the test setup, so clear any calls recorded by an
  // earlier test before rendering.
  const scrollTo = vi.spyOn(window, 'scrollTo').mockImplementation(() => {})
  scrollTo.mockClear()

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
        { path: 'child', element: <div>child route</div> },
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

describe('useScrollToTopOnRouteChange', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('scrolls to the top when the pathname changes', async () => {
    const { scrollTo, user } = setUp()

    await user.click(screen.getByRole('link', { name: 'go to child' }))

    expect(await screen.findByText('child route')).toBeInTheDocument()
    expect(scrollTo).toHaveBeenCalledWith(0, 0)
  })

  it('does not scroll on the initial render', () => {
    const { scrollTo } = setUp()

    expect(scrollTo).not.toHaveBeenCalled()
  })

  it('does not scroll when only the search params change', async () => {
    const { scrollTo, user } = setUp()

    await user.click(screen.getByRole('link', { name: 'apply filter' }))

    expect(scrollTo).not.toHaveBeenCalled()
  })
})
