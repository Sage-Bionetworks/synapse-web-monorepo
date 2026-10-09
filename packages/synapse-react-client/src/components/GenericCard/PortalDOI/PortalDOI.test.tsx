import { DoiAssociation, DoiObjectType } from '@sage-bionetworks/synapse-client'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PortalDOI, { PortalDOIProps } from './PortalDOI'
import { server } from '@/mocks/msw/server'
import { createWrapperAndQueryClient } from '@/testutils/TestingLibraryUtils'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { delay, http, HttpResponse } from 'msw'
import { CreateOrUpdateDoiModal } from '@/components/doi/CreateOrUpdateDoiModal'
import { MOCK_USER_ID } from '@/mocks/user/mock_user_profile'
import {
  vi,
  describe,
  it,
  beforeAll,
  beforeEach,
  afterEach,
  afterAll,
} from 'vitest'

// Mock components
vi.mock('@/components/CopyToClipboardIcon', () => ({
  __esModule: true,
  default: vi.fn(() => <div data-testid="CopyToClipboardIcon"></div>),
}))
vi.mock('@/components/doi/CreateOrUpdateDoiModal')

// Mock the modal and capture its props, especially `open` and `onClose`
const mockCreateOrUpdateDoiModal = vi
  .mocked(CreateOrUpdateDoiModal)
  .mockImplementation(({ open, onClose }) =>
    open ? (
      <div data-testid="CreateOrUpdateDoiModal">
        {/* Add a button to simulate closing the modal via onClose */}
        <button onClick={onClose}>Close Modal</button>
      </div>
    ) : (
      <></>
    ),
  )

const defaultProps: PortalDOIProps = {
  portalId: '123',
  resourceId: 'someSerializedString',
}

const mockDoiAssociation: DoiAssociation = {
  portalId: defaultProps.portalId,
  objectType: DoiObjectType.PORTAL_RESOURCE,
  objectId: defaultProps.resourceId,
  doiUri: `10.test/${defaultProps.resourceId}`,
  doiUrl: `https://repo-mock.sagebase.org/doi/locate?some=params`,
  updatedOn: '2023-01-01T00:00:00.000Z',
  updatedBy: String(MOCK_USER_ID),
}

const repoOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)

function mockBackend(
  doiAssociation: DoiAssociation | null,
  canMintDoi: boolean,
) {
  server.use(
    http.get(`${repoOrigin}/repo/v1/doi/association`, () =>
      doiAssociation
        ? HttpResponse.json(doiAssociation)
        : HttpResponse.json({ reason: 'Not found' }, { status: 404 }),
    ),
    http.get(`${repoOrigin}/repo/v1/portal/:portalId/permissions`, () =>
      HttpResponse.json({ canMintDoi }),
    ),
  )
}

function renderComponent() {
  const { wrapperFn, queryClient } = createWrapperAndQueryClient()
  render(<PortalDOI {...defaultProps} />, { wrapper: wrapperFn })
  return {
    /** Resolves once all in-flight queries (DOI association and permissions) have settled */
    waitForQueriesToSettle: () =>
      waitFor(() => expect(queryClient.isFetching()).toBe(0)),
  }
}

describe('PortalDOI', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    vi.clearAllMocks()
  })
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('should render skeleton while loading', () => {
    server.use(
      http.get(`${repoOrigin}/repo/v1/doi/association`, async () => {
        await delay('infinite')
      }),
      http.get(`${repoOrigin}/repo/v1/portal/:portalId/permissions`, () =>
        HttpResponse.json({ canMintDoi: false }),
      ),
    )
    renderComponent()
    screen.getByRole('progressbar')
  })

  it('should render DOI link, copy icon, and edit button if DOI exists and user has permission', async () => {
    mockBackend(mockDoiAssociation, true)

    renderComponent()

    // Check for DOI link, copy icon, and edit button
    const expectedLink = `https://doi.org/${mockDoiAssociation.doiUri}`
    const link = await screen.findByRole('link', { name: expectedLink })
    expect(link).toHaveAttribute('href', expectedLink)
    expect(screen.getByTestId('CopyToClipboardIcon')).toBeInTheDocument()
    const editButton = await screen.findByRole('button', { name: 'Edit DOI' })
    expect(editButton).toBeInTheDocument()

    // Click edit button
    await userEvent.click(editButton)

    // Check if modal was called with open: true and correct props
    expect(mockCreateOrUpdateDoiModal).toHaveBeenRenderedWithProps(
      expect.objectContaining({
        open: true,
        objectType: 'PORTAL_RESOURCE',
        objectId: defaultProps.resourceId,
        portalId: defaultProps.portalId,
      }),
    )
    // Check if the mocked modal content is rendered
    expect(screen.getByTestId('CreateOrUpdateDoiModal')).toBeInTheDocument()

    // Simulate closing the modal using the button inside the mock
    const closeModalButton = within(
      screen.getByTestId('CreateOrUpdateDoiModal'),
    ).getByRole('button', { name: 'Close Modal' })
    await userEvent.click(closeModalButton)

    // Check if modal was called again with open: false
    // The last call determines the final state rendered
    expect(mockCreateOrUpdateDoiModal).toHaveBeenLastRenderedWithProps(
      expect.objectContaining({
        open: false,
      }),
    )
    // Check if the mocked modal content is removed
    expect(
      screen.queryByTestId('CreateOrUpdateDoiModal'),
    ).not.toBeInTheDocument()
  })

  it('should render DOI link and copy icon but no edit button if DOI exists and user lacks permission', async () => {
    mockBackend(mockDoiAssociation, false)

    const { waitForQueriesToSettle } = renderComponent()

    // Check for DOI link and copy icon
    const expectedLink = `https://doi.org/${mockDoiAssociation.doiUri}`
    const link = await screen.findByRole('link', { name: expectedLink })
    expect(link).toHaveAttribute('href', expectedLink)
    expect(screen.getByTestId('CopyToClipboardIcon')).toBeInTheDocument()

    // Permissions load independently of the DOI; wait for both queries to settle
    await waitForQueriesToSettle()
    // Check that edit button and create link are NOT present
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
    expect(screen.queryByText('Click to Create a DOI')).not.toBeInTheDocument()
  })

  it('should render "Create DOI" link if DOI does not exist and user has permission', async () => {
    mockBackend(null, true)

    renderComponent()

    // Wait for the create link, which requires both queries to have resolved
    const createLink = await screen.findByRole('button', {
      name: 'Click to Create a DOI',
    })

    // Check that DOI link, copy icon, and edit button are NOT present
    expect(
      screen.queryByRole('link', { name: /doi\.org/ }),
    ).not.toBeInTheDocument()
    expect(screen.queryByTestId('CopyToClipboardIcon')).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: 'Edit DOI' }),
    ).not.toBeInTheDocument()

    // Check for "Create DOI" link
    expect(createLink).toBeInTheDocument()

    // Click create link
    await userEvent.click(createLink)

    // Check if modal was called with open: true and correct props
    expect(mockCreateOrUpdateDoiModal).toHaveBeenRenderedWithProps(
      expect.objectContaining({
        open: true,
        objectType: 'PORTAL_RESOURCE',
        objectId: defaultProps.resourceId,
        portalId: defaultProps.portalId,
      }),
    )
    expect(screen.getByTestId('CreateOrUpdateDoiModal')).toBeInTheDocument()
  })

  it('should render nothing if DOI does not exist and user lacks permission', async () => {
    mockBackend(null, false)

    const { waitForQueriesToSettle } = renderComponent()
    await waitForQueriesToSettle()
    await waitFor(() =>
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument(),
    )

    // Check that no interactive elements or specific text are rendered
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
    expect(screen.queryByTestId('CopyToClipboardIcon')).not.toBeInTheDocument()
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
    expect(screen.queryByText('Click to Create a DOI')).not.toBeInTheDocument()
  })
})
