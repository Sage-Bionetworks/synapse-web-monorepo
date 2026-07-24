import {
  PortalContextProvider,
  PortalContextType,
} from '@/components/PortalContext'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { GuidedTourConfig } from 'synapse-react-client/components/GuidedTour/index'
import {
  allowAll,
  allowNone,
  COOKIES_AGREEMENT_COOKIE_KEY,
  CookiePreference,
} from 'synapse-react-client/utils/hooks/useCookiePreferences'
import { afterEach, beforeAll, describe, expect, it, vi } from 'vitest'
import PortalTour from './PortalTour'

const testTour: GuidedTourConfig = {
  id: 'test-tour',
  version: 1,
  steps: [
    {
      target: '[data-tour="one"]',
      title: 'Step one title',
      content: 'Step one content',
    },
    {
      target: '[data-tour="two"]',
      title: 'Step two title',
      content: 'Step two content',
    },
  ],
}

const STORAGE_KEY = 'test-guided-tour-test-tour-v1'

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

function setCookiePreferences(preference: CookiePreference) {
  document.cookie = `${COOKIES_AGREEMENT_COOKIE_KEY}=${encodeURIComponent(
    JSON.stringify(preference),
  )}`
}

function renderPortalTour(tourConfig?: GuidedTourConfig) {
  const router = createMemoryRouter([
    {
      path: '/',
      element: (
        <>
          <div data-tour="one">One</div>
          <div data-tour="two">Two</div>
          <PortalTour />
        </>
      ),
    },
  ])
  return render(
    <PortalContextProvider value={{ ...mockPortalContext, tourConfig }}>
      <RouterProvider router={router} />
    </PortalContextProvider>,
  )
}

async function findTakeATourButton() {
  // Generous timeout: the first test to render the tour pays the lazy-loaded
  // module transform cost
  return await screen.findByRole(
    'button',
    { name: /take a tour/i },
    { timeout: 3_000 },
  )
}

/** Long enough for PortalTourContent's auto-start delay (1s) to have elapsed */
async function waitPastAutoStartDelay() {
  await new Promise(resolve => setTimeout(resolve, 1_600))
}

describe('PortalTour', () => {
  beforeAll(async () => {
    window.scrollTo = vi.fn()
    Element.prototype.scrollTo = vi.fn()
    // Warm the lazily-imported module so the first test doesn't race its
    // (slow, cold) transform
    await import('./PortalTourContent')
  })

  afterEach(() => {
    localStorage.clear()
    document.cookie = `${COOKIES_AGREEMENT_COOKIE_KEY}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`
  })

  it('renders nothing when the portal has no tourConfig', async () => {
    setCookiePreferences(allowAll)
    renderPortalTour(undefined)

    await waitPastAutoStartDelay()

    expect(
      screen.queryByRole('button', { name: /take a tour/i }),
    ).not.toBeInTheDocument()
    expect(screen.queryByText('Step one title')).not.toBeInTheDocument()
  })

  it('starts the tour when the Take a Tour button is clicked', async () => {
    setCookiePreferences(allowNone)
    renderPortalTour(testTour)

    await userEvent.click(await findTakeATourButton())

    expect(await screen.findByText('Step one title')).toBeInTheDocument()
    expect(screen.getByText('Step one content')).toBeInTheDocument()
  })

  it('auto-starts for a new user with functional cookie consent', async () => {
    setCookiePreferences(allowAll)
    renderPortalTour(testTour)

    expect(
      await screen.findByText('Step one title', {}, { timeout: 3_000 }),
    ).toBeInTheDocument()
  })

  it('does not auto-start without functional cookie consent', async () => {
    setCookiePreferences(allowNone)
    renderPortalTour(testTour)
    await findTakeATourButton()

    await waitPastAutoStartDelay()

    expect(screen.queryByText('Step one title')).not.toBeInTheDocument()
  })

  it('does not auto-start when the user already dismissed the tour', async () => {
    setCookiePreferences(allowAll)
    localStorage.setItem(STORAGE_KEY, 'dismissed')
    renderPortalTour(testTour)
    await findTakeATourButton()

    await waitPastAutoStartDelay()

    expect(screen.queryByText('Step one title')).not.toBeInTheDocument()
  })

  it('persists the dismissal when the user skips the tour', async () => {
    setCookiePreferences(allowAll)
    renderPortalTour(testTour)
    await userEvent.click(await findTakeATourButton())
    await screen.findByText('Step one title')

    await userEvent.click(screen.getByRole('button', { name: /skip tour/i }))

    await waitFor(() =>
      expect(localStorage.getItem(STORAGE_KEY)).toBe('dismissed'),
    )
  })
})
