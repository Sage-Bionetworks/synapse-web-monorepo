import { DoiAssociation, DoiObjectType } from '@sage-bionetworks/synapse-client'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PortalDOI, { PortalDOIProps } from './PortalDOI'
import { useGetDOIAssociation } from '@/synapse-queries/doi/useDOI'
import { useGetUserPortalPermissions } from '@/synapse-queries/portal/usePortal'
import {
  getUseQueryLoadingMock,
  getUseQuerySuccessMock,
} from '@/testutils/ReactQueryMockUtils'
import { CreateOrUpdateDoiModal } from '@/components/doi/CreateOrUpdateDoiModal'
import { MOCK_USER_ID } from '@/mocks/user/mock_user_profile'
import { vi, describe, it, beforeEach } from 'vitest'

// Mock hooks and components
vi.mock('@/synapse-queries/doi/useDOI')
vi.mock('@/synapse-queries/portal/usePortal')
vi.mock('@/components/CopyToClipboardIcon', () => ({
  __esModule: true,
  default: vi.fn(() => <div data-testid="CopyToClipboardIcon"></div>),
}))
vi.mock('@/components/doi/CreateOrUpdateDoiModal')

const mockUseGetDOIAssociation = vi.mocked(useGetDOIAssociation)
const mockUseGetPortalPermissions = vi.mocked(useGetUserPortalPermissions)

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

describe('PortalDOI', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    // Default mocks: successful load, no DOI, no permission
    mockUseGetDOIAssociation.mockReturnValue(getUseQuerySuccessMock(null))
    mockUseGetPortalPermissions.mockReturnValue(getUseQuerySuccessMock(false))
  })

  it('should render skeleton while loading', () => {
    mockUseGetDOIAssociation.mockReturnValue(getUseQueryLoadingMock())
    render(<PortalDOI {...defaultProps} />)
    screen.getByRole('progressbar')
  })

  it('should render DOI link, copy icon, and edit button if DOI exists and user has permission', async () => {
    mockUseGetDOIAssociation.mockReturnValue(
      getUseQuerySuccessMock(mockDoiAssociation),
    )
    mockUseGetPortalPermissions.mockReturnValue(getUseQuerySuccessMock(true))

    render(<PortalDOI {...defaultProps} />)

    // Check for DOI link, copy icon, and edit button
    const expectedLink = `https://doi.org/${mockDoiAssociation.doiUri}`
    const link = screen.getByRole('link', { name: expectedLink })
    expect(link).toHaveAttribute('href', expectedLink)
    expect(screen.getByTestId('CopyToClipboardIcon')).toBeInTheDocument()
    const editButton = screen.getByRole('button', { name: 'Edit DOI' })
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

  it('should render DOI link and copy icon but no edit button if DOI exists and user lacks permission', () => {
    mockUseGetDOIAssociation.mockReturnValue(
      getUseQuerySuccessMock(mockDoiAssociation),
    )
    mockUseGetPortalPermissions.mockReturnValue(getUseQuerySuccessMock(false)) // No permission

    render(<PortalDOI {...defaultProps} />)

    // Check for DOI link and copy icon
    const expectedLink = `https://doi.org/${mockDoiAssociation.doiUri}`
    const link = screen.getByRole('link', { name: expectedLink })
    expect(link).toHaveAttribute('href', expectedLink)
    expect(screen.getByTestId('CopyToClipboardIcon')).toBeInTheDocument()

    // Check that edit button and create link are NOT present
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
    expect(screen.queryByText('Click to Create a DOI')).not.toBeInTheDocument()
  })

  it('should render "Create DOI" link if DOI does not exist and user has permission', async () => {
    mockUseGetDOIAssociation.mockReturnValue(getUseQuerySuccessMock(null)) // No DOI
    mockUseGetPortalPermissions.mockReturnValue(getUseQuerySuccessMock(true)) // Has permission

    render(<PortalDOI {...defaultProps} />)

    // Check that DOI link, copy icon, and edit button are NOT present
    expect(
      screen.queryByRole('link', { name: /doi\.org/ }),
    ).not.toBeInTheDocument()
    expect(screen.queryByTestId('CopyToClipboardIcon')).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: 'Edit DOI' }),
    ).not.toBeInTheDocument()

    // Check for "Create DOI" link
    const createLink = screen.getByRole('button', {
      name: 'Click to Create a DOI',
    })
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

  it('should render nothing if DOI does not exist and user lacks permission', () => {
    mockUseGetDOIAssociation.mockReturnValue(getUseQuerySuccessMock(null)) // No DOI
    mockUseGetPortalPermissions.mockReturnValue(getUseQuerySuccessMock(false)) // No permission

    render(<PortalDOI {...defaultProps} />)

    // Check that no interactive elements or specific text are rendered
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
    expect(screen.queryByTestId('CopyToClipboardIcon')).not.toBeInTheDocument()
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
    expect(screen.queryByText('Click to Create a DOI')).not.toBeInTheDocument()
  })
})
