import {
  mockFileAuthenticatedUsersOnly,
  mockFileOpenDataWithNoPublicRead,
  mockFileOpenDataWithPublicRead,
} from '@/mocks/entity/mockFileEntityACLVariants'
import { MOCK_REALM_PRINCIPAL } from '@/mocks/realm/mockRealmPrincipal'
import {
  MOCK_USER_ID,
  mockUserProfileData,
} from '@/mocks/user/mock_user_profile'
import { useCreateOrUpdateDOI, useGetDOI } from '@/synapse-queries/doi/useDOI'
import { useGetVersions } from '@/synapse-queries/entity/useEntity'
import { useGetEntityBundle } from '@/synapse-queries/entity/useEntityBundle'
import { useGetPortal } from '@/synapse-queries/portal/usePortal'
import { useGetRealmPrincipals } from '@/synapse-queries/realm/useRealmPrincipals'
import { useGetCurrentUserProfile } from '@/synapse-queries/user/useUserBundle'
import {
  getUseMutationIdleMock,
  getUseMutationPendingMock,
  getUseQueryIdleMock,
  getUseQuerySuccessMock,
} from '@/testutils/ReactQueryMockUtils'
import { useGlobalIsEditingContext } from '@/utils/context/GlobalIsEditingContext'
import {
  DoiNameIdentifierNameIdentifierSchemeEnum,
  DoiObjectType,
  DoiRequest,
} from '@sage-bionetworks/synapse-client'
import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { displayToast } from '../ToastMessage'
import {
  CreateOrUpdateDoiModal,
  CreateOrUpdateDoiModalProps,
} from './CreateOrUpdateDoiModal'

vi.mock('@/synapse-queries/doi/useDOI')
vi.mock('@/synapse-queries/entity/useEntity')
vi.mock('@/synapse-queries/entity/useEntityBundle')
vi.mock('@/synapse-queries/realm/useRealmPrincipals')
vi.mock('@/synapse-queries/user/useUserBundle')
vi.mock('@/components/ToastMessage/ToastMessage')
vi.mock('@/synapse-queries/portal/usePortal')
vi.mock('@/utils/context/GlobalIsEditingContext')

const mockUseCreateOrUpdateDOI = vi
  .mocked(useCreateOrUpdateDOI)
  .mockReturnValue(getUseMutationIdleMock())

const mockUseGetEntityBundle = vi
  .mocked(useGetEntityBundle)
  .mockReturnValue(
    getUseQuerySuccessMock(mockFileOpenDataWithPublicRead.bundle),
  )

const mockUseGetRealmPrincipals = vi
  .mocked(useGetRealmPrincipals)
  .mockReturnValue(getUseQuerySuccessMock(MOCK_REALM_PRINCIPAL))

const mockUseGetDOI = vi
  .mocked(useGetDOI)
  .mockReturnValue(getUseQuerySuccessMock(null))
const mockUseGetVersions = vi
  .mocked(useGetVersions)
  .mockReturnValue(getUseQuerySuccessMock({ results: [] }))
const mockUseGetCurrentUserProfile = vi
  .mocked(useGetCurrentUserProfile)
  .mockReturnValue(getUseQuerySuccessMock(mockUserProfileData))
const mockUseGetPortal = vi
  .mocked(useGetPortal)
  .mockReturnValue(getUseQueryIdleMock())

const mockDisplayToast = vi.mocked(displayToast)
const mockSetIsEditing = vi.fn()
vi.mocked(useGlobalIsEditingContext).mockReturnValue({
  isEditing: false,
  setIsEditing: mockSetIsEditing,
})

const defaultProps: CreateOrUpdateDoiModalProps = {
  open: true,
  onClose: vi.fn(),
  objectType: DoiObjectType.ENTITY,
  objectId: 'syn123',
  defaultVersionNumber: undefined,
}
const setup = (props = defaultProps) => {
  const user = userEvent.setup()
  const { rerender } = render(<CreateOrUpdateDoiModal {...props} />)
  return { user, rerender }
}

const expectWarningStep = (isVisible: boolean) => {
  const header = screen.queryByRole('heading', {
    level: 2,
    name: 'This page is private',
  })
  if (isVisible) {
    expect(header).toBeInTheDocument()
  } else {
    expect(header).not.toBeInTheDocument()
  }
}
const expectFormStep = (isVisible: boolean) => {
  const header = screen.queryByRole('heading', {
    level: 2,
    name: 'Create or Update a DOI',
  })
  if (isVisible) {
    expect(header).toBeInTheDocument()
  } else {
    expect(header).not.toBeInTheDocument()
  }
}

describe('CreateOrUpdateDoiModal', () => {
  beforeAll(() => {
    // Mock the current time, since the current year is used to populate the publication year field
    vi.setSystemTime(new Date('2025-05-01T12:00:00Z'))
  })

  afterAll(() => {
    vi.useRealTimers()
    vi.resetAllMocks()
  })

  beforeEach(() => {
    mockUseGetEntityBundle.mockReturnValue(
      getUseQuerySuccessMock(mockFileOpenDataWithPublicRead.bundle),
    )
    mockUseGetDOI.mockReturnValue(getUseQuerySuccessMock(null))
    mockUseCreateOrUpdateDOI.mockReturnValue(getUseMutationIdleMock())
  })

  it('renders the modal with default content', () => {
    setup()

    expect(screen.getByText('Create or Update a DOI')).toBeInTheDocument()
    expect(
      screen.getByText(
        'Minting a DOI allows you to credit contributors and makes it easy to cite your work.',
      ),
    ).toBeInTheDocument()

    // Verify publisher field is not visible when portalId is not provided
    expect(screen.queryByLabelText('Publisher')).not.toBeInTheDocument()
  })

  it('calls onClose when the Cancel button is clicked', async () => {
    const { user } = setup()

    const cancelButton = screen.getByText('Cancel')
    await user.click(cancelButton)

    expect(defaultProps.onClose).toHaveBeenCalled()
  })

  it('disables the Save button when loading', () => {
    mockUseCreateOrUpdateDOI.mockReturnValue(getUseMutationPendingMock())

    setup()

    const saveButton = screen.getByText('Save')
    expect(saveButton).toBeDisabled()
  })

  it('renders a warning if the DOI was modified via API', () => {
    mockUseGetDOI.mockReturnValue(
      getUseQuerySuccessMock({
        titles: [{ title: 'Test DOI Title' }],
        creators: [
          {
            creatorName: 'Doe, John',
            nameIdentifiers: [
              {
                identifier: 'foo',
                nameIdentifierScheme:
                  DoiNameIdentifierNameIdentifierSchemeEnum.ORCID,
              },
            ],
          },
        ],
      }),
    )
    setup()

    expect(
      screen.getByText(
        'The metadata for this DOI was modified using a programmatic client, so data may be hidden from this view. Any changes may result in metadata being lost.',
      ),
    ).toBeInTheDocument()
  })

  it('renders the form with pre-filled data when DOI is null', async () => {
    mockUseGetDOI.mockReturnValue(getUseQuerySuccessMock(null))

    setup()

    await screen.findByDisplayValue(mockFileOpenDataWithPublicRead.entity.name)
    await screen.findByDisplayValue('Last, First') // matching the mockUserProfile data
  })

  it('blocks submission when data violates the form schema', async () => {
    const mockMutate = vi.fn()
    mockUseCreateOrUpdateDOI.mockReturnValue({
      ...getUseMutationIdleMock(),
      mutate: mockMutate,
    })

    mockUseGetDOI.mockReturnValue(getUseQuerySuccessMock(null))

    const { user } = setup()

    const pubYearInput = await screen.findByLabelText(/Publication Year/i)
    await user.clear(pubYearInput)

    const saveButton = screen.getByText(/Save/i)
    await user.click(saveButton)

    await screen.findByText("must have required property 'Publication Year'")
    expect(mockMutate).not.toHaveBeenCalled()
  })

  it('calls mutate when the form is submitted', async () => {
    const mockMutate = vi.fn()
    mockUseCreateOrUpdateDOI.mockReturnValue({
      ...getUseMutationIdleMock(),
      mutate: mockMutate,
    })
    mockUseGetCurrentUserProfile.mockReturnValue(
      getUseQuerySuccessMock(mockUserProfileData),
    )

    const { user } = setup()

    // Fill out the form
    const titleInput = screen.getByLabelText(/Title/i)
    await user.clear(titleInput)
    await user.type(titleInput, 'New DOI Title')

    const creatorInput = screen.getByLabelText(/Creator/i)
    await user.clear(creatorInput)
    await user.type(creatorInput, 'Doe, John')

    const saveButton = screen.getByText(/Save/i)
    await user.click(saveButton)

    const expectedDoiRequest: DoiRequest = {
      concreteType: 'org.sagebionetworks.repo.model.doi.v2.DoiRequest',
      doi: {
        creators: [
          {
            creatorName: 'Doe, John',
          },
        ],
        objectId: 'syn123',
        objectType: 'ENTITY',
        publicationYear: 2025,
        resourceType: {
          resourceTypeGeneral: 'Dataset',
        },
        titles: [
          {
            title: 'New DOI Title',
          },
        ],
      },
    }

    // Wait for the mutate function to be called
    await waitFor(() => {
      expect(mockMutate).toHaveBeenCalledWith(expectedDoiRequest)
    })

    // Simulate calling onSuccess
    act(() => {
      mockUseCreateOrUpdateDOI.mock.lastCall![0]!.onSuccess!(
        {
          concreteType: 'org.sagebionetworks.repo.model.doi.v2.DoiResponse',
          doi: expectedDoiRequest.doi,
        },
        expectedDoiRequest,
        undefined,
      )
    })
    expect(mockDisplayToast).toHaveBeenCalledWith(
      'The DOI was successfully updated.',
      'success',
    )
    expect(defaultProps.onClose).toHaveBeenCalled()
  })

  it('renders versions in the list, allows selecting a version, and includes it in the request', async () => {
    const mockMutate = vi.fn()
    mockUseCreateOrUpdateDOI.mockReturnValue({
      ...getUseMutationIdleMock(),
      mutate: mockMutate,
    })
    mockUseGetVersions.mockReturnValue(
      getUseQuerySuccessMock({
        results: [
          {
            versionNumber: 1,
            versionLabel: 'v1',
            id: 'syn123',
            versionComment: '',
            modifiedBy: mockUserProfileData.userName,
            modifiedByPrincipalId: String(MOCK_USER_ID),
            modifiedOn: new Date().toISOString(),
            isLatestVersion: false,
          },
          {
            versionNumber: 2,
            versionLabel: 'v2',
            id: 'syn123',
            versionComment: '',
            modifiedBy: mockUserProfileData.userName,
            modifiedByPrincipalId: String(MOCK_USER_ID),
            modifiedOn: new Date().toISOString(),
            isLatestVersion: true,
          },
        ],
      }),
    )
    mockUseGetCurrentUserProfile.mockReturnValue(
      getUseQuerySuccessMock(mockUserProfileData),
    )

    const { user } = setup()

    // Wait for the versions to be rendered
    const versionInput = await screen.findByLabelText(/Version/i)
    await user.click(versionInput)
    await screen.findByRole('option', { name: 'No version' })
    await screen.findByRole('option', { name: 'Version 1 / v1' })
    await screen.findByRole('option', { name: 'Version 2 / v2' })

    // Select a version
    const versionSelect = screen.getByLabelText(/Version/i)
    await user.click(versionSelect)
    const versionOption = screen.getByText('Version 2 / v2')
    await user.click(versionOption)

    // Fill out the form
    const titleInput = screen.getByLabelText(/Title/i)
    await user.clear(titleInput)
    await user.type(titleInput, 'New DOI Title')

    const creatorInput = screen.getByLabelText(/Creator/i)
    await user.clear(creatorInput)
    await user.type(creatorInput, 'Doe, John')

    const saveButton = screen.getByText(/Save/i)
    await user.click(saveButton)

    const expectedDoiRequest: DoiRequest = {
      concreteType: 'org.sagebionetworks.repo.model.doi.v2.DoiRequest',
      doi: {
        creators: [
          {
            creatorName: 'Doe, John',
          },
        ],
        objectId: 'syn123',
        objectType: 'ENTITY',
        objectVersion: 2,
        publicationYear: 2025,
        resourceType: {
          resourceTypeGeneral: 'Dataset',
        },
        titles: [
          {
            title: 'New DOI Title',
          },
        ],
      },
    }

    // Wait for the mutate function to be called
    await waitFor(() => {
      expect(mockMutate).toHaveBeenCalledWith(expectedDoiRequest)
    })
  })

  it('Displays the Publisher field if the DOI would belong to a portal', async () => {
    const mockPortalName = 'Test Portal'
    mockUseGetPortal.mockReturnValue(
      getUseQuerySuccessMock({ id: '123', name: mockPortalName }),
    )

    setup({ ...defaultProps, portalId: '123' })

    const publisherField = await screen.findByLabelText('Publisher')
    expect(publisherField).toHaveValue(mockPortalName)
    expect(publisherField).toBeDisabled()
  })

  it('Sets global editing state when open', () => {
    const { rerender } = setup({ ...defaultProps, open: true })

    expect(mockSetIsEditing).toHaveBeenLastCalledWith(true)

    rerender(<CreateOrUpdateDoiModal {...defaultProps} open={false} />)

    expect(mockSetIsEditing).toHaveBeenLastCalledWith(false)
  })

  describe('Private Entity DOI Warning Step', () => {
    it('shows warning step when creating DOI for private entity', async () => {
      mockUseGetEntityBundle.mockReturnValue(
        getUseQuerySuccessMock(mockFileOpenDataWithNoPublicRead.bundle),
      )

      setup()

      await waitFor(() => {
        expectWarningStep(true)
      })
      expectFormStep(false)
    })

    it('shows form directly when creating DOI for public entity', async () => {
      setup()

      await waitFor(() => {
        expectFormStep(true)
      })
      expectWarningStep(false)
    })

    it('shows form directly when updating existing DOI regardless of privacy', async () => {
      mockUseGetEntityBundle.mockReturnValue(
        getUseQuerySuccessMock(mockFileOpenDataWithNoPublicRead.bundle),
      )
      mockUseGetDOI.mockReturnValue(
        getUseQuerySuccessMock({
          titles: [{ title: 'Existing DOI Title' }],
          creators: [{ creatorName: 'Doe, John' }],
        }),
      )

      setup()

      await waitFor(() => {
        expectFormStep(true)
      })
      expectWarningStep(false)
    })

    it('advances to form step when clicking Continue on warning', async () => {
      mockUseGetEntityBundle.mockReturnValue(
        getUseQuerySuccessMock(mockFileOpenDataWithNoPublicRead.bundle),
      )

      const { user } = setup()

      expectWarningStep(true)

      const continueButton = screen.getByRole('button', { name: /continue/i })
      await user.click(continueButton)

      expectFormStep(true)
      expectWarningStep(false)
    })

    it('closes modal when clicking Cancel on warning step', async () => {
      mockUseGetEntityBundle.mockReturnValue(
        getUseQuerySuccessMock(mockFileOpenDataWithNoPublicRead.bundle),
      )

      const onClose = vi.fn()
      const { user } = setup({ ...defaultProps, onClose })

      await waitFor(() => {
        expectWarningStep(true)
      })

      const cancelButton = screen.getByRole('button', { name: /cancel/i })
      await user.click(cancelButton)

      expect(onClose).toHaveBeenCalled()
    })

    it('resets to warning step when modal is reopened', async () => {
      mockUseGetEntityBundle.mockReturnValue(
        getUseQuerySuccessMock(mockFileOpenDataWithNoPublicRead.bundle),
      )

      const { rerender, user } = setup({ ...defaultProps, open: true })
      expect(mockUseGetRealmPrincipals).toHaveBeenCalled()

      await waitFor(() => {
        expectWarningStep(true)
      })

      const continueButton = screen.getByRole('button', { name: /continue/i })
      await user.click(continueButton)

      await waitFor(() => {
        expectFormStep(true)
      })

      rerender(<CreateOrUpdateDoiModal {...defaultProps} open={false} />)

      rerender(<CreateOrUpdateDoiModal {...defaultProps} open={true} />)

      await waitFor(() => {
        expectWarningStep(true)
      })
    })

    it('uses authenticated users principal for public check', async () => {
      mockUseGetEntityBundle.mockReturnValue(
        getUseQuerySuccessMock(mockFileAuthenticatedUsersOnly.bundle),
      )

      setup()

      await waitFor(() => {
        expectFormStep(true)
      })
      expectWarningStep(false)
    })
  })
})
