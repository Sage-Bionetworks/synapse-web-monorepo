import { generateBaseEntity } from '@/mocks/faker/generateFakeEntity'
import {
  dispatchEntry,
  generateAsyncJobHandlers,
} from '@/mocks/msw/handlers/asyncJobHandlers'
import {
  getEntityBundleHandler,
  getVersionedEntityBundleHandler,
} from '@/mocks/msw/handlers/entityHandlers'
import { server } from '@/mocks/msw/server'
import {
  MOCK_AUTHENTICATED_PRINCIPAL_ID,
  MOCK_PUBLIC_PRINCIPAL_ID,
  MOCK_REALM_PRINCIPAL,
} from '@/mocks/realm/mockRealmPrincipal'
import {
  MOCK_USER_ID,
  mockUserProfileData,
} from '@/mocks/user/mock_user_profile'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { DOI, ENTITY_ID_VERSIONS } from '@/utils/APIConstants'
import { useGlobalIsEditingContext } from '@/utils/context/GlobalIsEditingContext'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { getAccessTypeFromPermissionLevel } from '@/utils/PermissionLevelToAccessType'
import {
  DoiNameIdentifierNameIdentifierSchemeEnum,
  DoiObjectType,
  DoiRequest,
  DoiResponse,
  V2Doi,
} from '@sage-bionetworks/synapse-client'
import { EntityBundle, VersionInfo } from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { delay, http, HttpResponse } from 'msw'
import { displayToast } from '../ToastMessage'
import {
  CreateOrUpdateDoiModal,
  CreateOrUpdateDoiModalProps,
} from './CreateOrUpdateDoiModal'

vi.mock('@/components/ToastMessage/ToastMessage')
vi.mock(
  import('@/utils/context/GlobalIsEditingContext'),
  async importOriginal => ({
    ...(await importOriginal()),
    useGlobalIsEditingContext: vi.fn(),
  }),
)

const repoOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)

const mockEntityWithPublicAccess = generateBaseEntity({
  acl: {
    resourceAccess: [
      {
        principalId: MOCK_PUBLIC_PRINCIPAL_ID,
        accessType: getAccessTypeFromPermissionLevel('CAN_DOWNLOAD'),
      },
      {
        principalId: MOCK_AUTHENTICATED_PRINCIPAL_ID,
        accessType: getAccessTypeFromPermissionLevel('CAN_DOWNLOAD'),
      },
    ],
  },
})

const mockEntityWithNoPublicAccess = generateBaseEntity({
  acl: {
    resourceAccess: [
      {
        principalId: MOCK_USER_ID,
        accessType: getAccessTypeFromPermissionLevel('CAN_ADMINISTER'),
      },
    ],
  },
})

type MockBackendOptions = {
  /** The entity bundle returned for the entity (regardless of version). Defaults to an entity with public access. */
  bundle?: EntityBundle
  /** The DOI that exists for the object. `null` means that no DOI exists yet (404). */
  doi?: V2Doi | null
  /** The versions of the entity */
  versions?: VersionInfo[]
}

/**
 * Mocks the backend responses for the data the modal loads. The current user profile and realm principals use the
 * default handlers.
 */
function mockBackend(options: MockBackendOptions = {}) {
  const {
    bundle = mockEntityWithPublicAccess.bundle,
    doi = null,
    versions = [],
  } = options
  server.use(
    getEntityBundleHandler(repoOrigin, bundle),
    getVersionedEntityBundleHandler(repoOrigin, bundle),
    http.get(`${repoOrigin}${ENTITY_ID_VERSIONS(':entityId')}`, () =>
      HttpResponse.json({ results: versions }),
    ),
    http.get(`${repoOrigin}${DOI}`, () =>
      doi
        ? HttpResponse.json(doi)
        : HttpResponse.json({ reason: 'Not found' }, { status: 404 }),
    ),
  )
}

/**
 * Mocks the asynchronous job used to create/update a DOI.
 * @returns a spy that is called with each DoiRequest received by the backend
 */
function mockCreateOrUpdateDoi() {
  const onDoiRequest = vi.fn<(request: DoiRequest) => void>()
  server.use(
    ...generateAsyncJobHandlers(
      dispatchEntry(
        'org.sagebionetworks.repo.model.doi.v2.DoiRequest',
        request => {
          onDoiRequest(request)
          return {
            concreteType: 'org.sagebionetworks.repo.model.doi.v2.DoiResponse',
            doi: request.doi,
          } satisfies DoiResponse
        },
      ),
      {
        asyncTypeServicePaths: {
          requestPath: `${DOI}/async/start`,
          responsePath: token => `${DOI}/async/get/${token}`,
        },
      },
    ),
  )
  return onDoiRequest
}

const mockDisplayToast = vi.mocked(displayToast)
const mockSetIsEditing = vi.fn()

const defaultProps: CreateOrUpdateDoiModalProps = {
  open: true,
  onClose: vi.fn(),
  objectType: DoiObjectType.ENTITY,
  objectId: 'syn123',
  defaultVersionNumber: undefined,
}
const setup = (props = defaultProps) => {
  const user = userEvent.setup()
  const { rerender } = render(<CreateOrUpdateDoiModal {...props} />, {
    wrapper: createWrapper(),
  })
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

/** Waits until the form has been pre-filled and the data it depends on has finished loading */
const waitForFormToBeReady = async () => {
  await screen.findByDisplayValue(mockEntityWithPublicAccess.entity.name)
  await waitFor(() => {
    expect(screen.getByText('Save')).toBeEnabled()
  })
}

describe('CreateOrUpdateDoiModal', () => {
  beforeAll(() => {
    server.listen()
    // Mock the current time, since the current year is used to populate the publication year field
    vi.setSystemTime(new Date('2025-05-01T12:00:00Z'))
  })

  afterEach(() => server.resetHandlers())

  afterAll(() => {
    server.close()
    vi.useRealTimers()
    vi.resetAllMocks()
  })

  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(useGlobalIsEditingContext).mockReturnValue({
      isEditing: false,
      setIsEditing: mockSetIsEditing,
    })
    mockBackend()
  })

  it('renders the modal with default content', async () => {
    setup()

    expect(screen.getByText('Create or Update a DOI')).toBeInTheDocument()
    expect(
      await screen.findByText(
        'Minting a DOI allows you to credit contributors and makes it easy to cite your work.',
      ),
    ).toBeInTheDocument()

    // Verify publisher field is not visible when portalId is not provided
    expect(screen.queryByLabelText('Publisher')).not.toBeInTheDocument()
  })

  it('calls onClose when the Cancel button is clicked', async () => {
    const { user } = setup()

    const cancelButton = screen.getByText('Cancel')
    await waitFor(() => {
      expect(cancelButton).toBeEnabled()
    })
    await user.click(cancelButton)

    expect(defaultProps.onClose).toHaveBeenCalled()
  })

  it('disables the Save button when loading', async () => {
    // The request to create the DOI never completes, so the mutation stays pending
    const onDoiRequestStarted = vi.fn()
    server.use(
      http.post(`${repoOrigin}${DOI}/async/start`, async () => {
        onDoiRequestStarted()
        await delay('infinite')
      }),
    )

    const { user } = setup()
    await waitForFormToBeReady()

    await user.click(screen.getByText('Save'))

    await waitFor(() => {
      expect(onDoiRequestStarted).toHaveBeenCalled()
    })
    expect(screen.getByText('Save')).toBeDisabled()
  })

  it('renders a warning if the DOI was modified via API', async () => {
    mockBackend({
      doi: {
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
      },
    })
    setup()

    expect(
      await screen.findByText(
        'The metadata for this DOI was modified using a programmatic client, so data may be hidden from this view. Any changes may result in metadata being lost.',
      ),
    ).toBeInTheDocument()
  })

  it('renders the form with pre-filled data when DOI is null', async () => {
    mockBackend({ doi: null })

    setup()

    await screen.findByDisplayValue(mockEntityWithPublicAccess.entity.name)
    await screen.findByDisplayValue('Last, First') // matching the mockUserProfile data
  })

  it('blocks submission when data violates the form schema', async () => {
    const onDoiRequest = mockCreateOrUpdateDoi()
    mockBackend({ doi: null })

    const { user } = setup()
    await waitForFormToBeReady()

    const pubYearInput = await screen.findByLabelText(/Publication Year/i)
    await user.clear(pubYearInput)

    const saveButton = screen.getByText(/Save/i)
    await user.click(saveButton)

    await screen.findByText("must have required property 'Publication Year'")
    expect(onDoiRequest).not.toHaveBeenCalled()
  })

  it('sends the request when the form is submitted', async () => {
    const onDoiRequest = mockCreateOrUpdateDoi()

    const { user } = setup()
    await waitForFormToBeReady()

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

    // Wait for the request to be received by the backend
    await waitFor(() => {
      expect(onDoiRequest).toHaveBeenCalledWith(expectedDoiRequest)
    })

    // Once the job completes, the user is notified and the modal is closed
    await waitFor(() => {
      expect(mockDisplayToast).toHaveBeenCalledWith(
        'The DOI was successfully updated.',
        'success',
      )
    })
    expect(defaultProps.onClose).toHaveBeenCalled()
  })

  it('renders versions in the list, allows selecting a version, and includes it in the request', async () => {
    const onDoiRequest = mockCreateOrUpdateDoi()
    mockBackend({
      versions: [
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
    })

    const { user } = setup()

    // Wait for the versions to be rendered
    const versionInput = await screen.findByRole('combobox', {
      name: /Version/i,
    })
    await user.click(versionInput)
    await screen.findByRole('option', { name: 'No version' })
    await screen.findByRole('option', { name: 'Version 1 / v1' })
    await screen.findByRole('option', { name: 'Version 2 / v2' })

    // Select a version
    const versionOption = screen.getByRole('option', {
      name: 'Version 2 / v2',
    })
    await user.click(versionOption)

    // Selecting a version loads the entity and DOI for that version, which resets the form once loaded
    await waitForFormToBeReady()

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

    // Wait for the request to be received by the backend
    await waitFor(() => {
      expect(onDoiRequest).toHaveBeenCalledWith(expectedDoiRequest)
    })
  })

  it('Displays the Publisher field if the DOI would belong to a portal', async () => {
    const mockPortalName = 'Test Portal'
    server.use(
      http.get(`${repoOrigin}/repo/v1/portal/:portalId`, () =>
        HttpResponse.json({ id: '123', name: mockPortalName }),
      ),
    )

    setup({ ...defaultProps, portalId: '123' })

    const publisherField = await screen.findByLabelText('Publisher')
    await waitFor(() => {
      expect(publisherField).toHaveValue(mockPortalName)
    })
    expect(publisherField).toBeDisabled()
  })

  it('Sets global editing state when open', () => {
    const { rerender } = setup({ ...defaultProps, open: true })

    expect(mockSetIsEditing).toHaveBeenLastCalledWith(true)

    rerender(<CreateOrUpdateDoiModal {...defaultProps} open={false} />)

    expect(mockSetIsEditing).toHaveBeenLastCalledWith(false)
  })

  describe('Private Entity DOI Warning Step', () => {
    it('shows form directly when objectType is not ENTITY (e.g. PORTAL_RESOURCE)', async () => {
      // When objectType is not ENTITY, useGetEntityBundle is disabled and entityBundle is
      // never populated. shouldShowWarning must resolve to false (not undefined) so the
      // step can be determined as soon as the DOI query resolves.
      setup({ ...defaultProps, objectType: DoiObjectType.PORTAL_RESOURCE })

      await waitFor(() => {
        expectFormStep(true)
      })
      expectWarningStep(false)
    })

    it('shows warning step when creating DOI for private entity', async () => {
      mockBackend({ bundle: mockEntityWithNoPublicAccess.bundle })

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
      mockBackend({
        bundle: mockEntityWithNoPublicAccess.bundle,
        doi: {
          titles: [{ title: 'Existing DOI Title' }],
          creators: [{ creatorName: 'Doe, John' }],
        },
      })

      setup()

      await waitFor(() => {
        expectFormStep(true)
      })
      expectWarningStep(false)
    })

    it('advances to form step when clicking Continue on warning', async () => {
      mockBackend({ bundle: mockEntityWithNoPublicAccess.bundle })

      const { user } = setup()

      await waitFor(() => {
        expectWarningStep(true)
      })

      const continueButton = screen.getByRole('button', { name: /continue/i })
      await waitFor(() => {
        expect(continueButton).toBeEnabled()
      })
      await user.click(continueButton)

      expectFormStep(true)
      expectWarningStep(false)
    })

    it('closes modal when clicking Cancel on warning step', async () => {
      mockBackend({ bundle: mockEntityWithNoPublicAccess.bundle })

      const onClose = vi.fn()
      const { user } = setup({ ...defaultProps, onClose })

      await waitFor(() => {
        expectWarningStep(true)
      })

      const cancelButton = screen.getByRole('button', { name: /cancel/i })
      await waitFor(() => {
        expect(cancelButton).toBeEnabled()
      })
      await user.click(cancelButton)

      expect(onClose).toHaveBeenCalled()
    })

    it('resets to warning step when modal is reopened', async () => {
      mockBackend({ bundle: mockEntityWithNoPublicAccess.bundle })
      const onRealmPrincipalsRequest = vi.fn()
      server.use(
        http.get(`${repoOrigin}/repo/v1/realm/principals`, () => {
          onRealmPrincipalsRequest()
          return HttpResponse.json(MOCK_REALM_PRINCIPAL)
        }),
      )

      const { rerender, user } = setup({ ...defaultProps, open: true })
      await waitFor(() => {
        expect(onRealmPrincipalsRequest).toHaveBeenCalled()
      })

      await waitFor(() => {
        expectWarningStep(true)
      })

      const continueButton = screen.getByRole('button', { name: /continue/i })
      await waitFor(() => {
        expect(continueButton).toBeEnabled()
      })
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
      const entityWithAuthUsersAccess = generateBaseEntity({
        acl: {
          resourceAccess: [
            {
              principalId: MOCK_AUTHENTICATED_PRINCIPAL_ID,
              accessType: getAccessTypeFromPermissionLevel('CAN_DOWNLOAD'),
            },
          ],
        },
      })

      mockBackend({ bundle: entityWithAuthUsersAccess.bundle })

      setup()

      await waitFor(() => {
        expectFormStep(true)
      })
      expectWarningStep(false)
    })
  })
})
