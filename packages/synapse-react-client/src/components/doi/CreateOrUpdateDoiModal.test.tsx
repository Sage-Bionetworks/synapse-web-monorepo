import {
  MOCK_USER_ID,
  mockUserProfileData,
} from '@/mocks/user/mock_user_profile'
import { useCreateOrUpdateDOI, useGetDOI } from '@/synapse-queries/doi/useDOI'
import {
  useGetEntity,
  useGetVersions,
} from '@/synapse-queries/entity/useEntity'
import { useGetCurrentUserProfile } from '@/synapse-queries/user/useUserBundle'
import {
  getUseMutationMock,
  getUseMutationPendingMock,
  getUseQuerySuccessMock,
} from '@/testutils/ReactQueryMockUtils'
import { DoiRequest, V2Doi } from '@sage-bionetworks/synapse-client'
import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CreateOrUpdateDoiModal } from './CreateOrUpdateDoiModal'
import { displayToast } from '../ToastMessage'

jest.mock('@/synapse-queries/doi/useDOI')
jest.mock('@/synapse-queries/entity/useEntity')
jest.mock('@/synapse-queries/user/useUserBundle')
jest.mock('@/components/ToastMessage/ToastMessage')

const mockUseCreateOrUpdateDOI = jest
  .mocked(useCreateOrUpdateDOI)
  .mockReturnValue(getUseMutationMock())
const mockUseGetEntity = jest.mocked(useGetEntity).mockReturnValue(
  getUseQuerySuccessMock({
    name: 'Test Entity',
    concreteType: 'org.sagebionetworks.repo.model.FileEntity',
  }),
)
const mockUseGetDOI = jest
  .mocked(useGetDOI)
  .mockReturnValue(getUseQuerySuccessMock(null))
const mockUseGetVersions = jest
  .mocked(useGetVersions)
  .mockReturnValue(getUseQuerySuccessMock({ results: [] }))
const mockUseGetCurrentUserProfile = jest
  .mocked(useGetCurrentUserProfile)
  .mockReturnValue(getUseQuerySuccessMock(mockUserProfileData))
const mockDisplayToast = jest.mocked(displayToast)

describe('CreateOrUpdateDoiModal', () => {
  const defaultProps = {
    open: true,
    onClose: jest.fn(),
    objectType: 'ENTITY' as V2Doi['objectType'],
    objectId: 'syn123',
    defaultVersionNumber: undefined,
  }

  it('renders the modal with default content', () => {
    render(<CreateOrUpdateDoiModal {...defaultProps} />)

    expect(screen.getByText('Create or Update a DOI')).toBeInTheDocument()
    expect(
      screen.getByText(
        'Minting a DOI allows you to credit contributors and makes it easy to cite your work.',
      ),
    ).toBeInTheDocument()
  })

  it('calls onClose when the Cancel button is clicked', async () => {
    render(<CreateOrUpdateDoiModal {...defaultProps} />)

    const cancelButton = screen.getByText('Cancel')
    await userEvent.click(cancelButton)

    expect(defaultProps.onClose).toHaveBeenCalled()
  })

  it('disables the Save button when loading', () => {
    mockUseCreateOrUpdateDOI.mockReturnValue(getUseMutationPendingMock())

    render(<CreateOrUpdateDoiModal {...defaultProps} />)

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
              { identifier: 'foo', nameIdentifierScheme: 'scheme' },
            ],
          },
        ],
      }),
    )
    render(<CreateOrUpdateDoiModal {...defaultProps} />)

    expect(
      screen.getByText(
        'The metadata for this DOI was modified using a programmatic client, so data may be hidden from this view. Any changes may result in metadata being lost.',
      ),
    ).toBeInTheDocument()
  })

  it('renders the form with pre-filled data when DOI is null', async () => {
    mockUseGetDOI.mockReturnValue(getUseQuerySuccessMock(null))

    render(<CreateOrUpdateDoiModal {...defaultProps} />)

    await screen.findByDisplayValue('Test Entity')
    await screen.findByDisplayValue('Last, First') // matching the mockUserProfile data
  })

  it('blocks submission when data violates the form schema', async () => {
    const mockMutate = jest.fn()
    mockUseCreateOrUpdateDOI.mockReturnValue({
      ...getUseMutationMock(),
      mutate: mockMutate,
    })

    mockUseGetDOI.mockReturnValue(getUseQuerySuccessMock(null))

    render(<CreateOrUpdateDoiModal {...defaultProps} />)

    const pubYearInput = await screen.findByLabelText(/Publication Year/i)
    await userEvent.clear(pubYearInput)

    const saveButton = screen.getByText(/Save/i)
    await userEvent.click(saveButton)

    await screen.findByText("must have required property 'Publication Year'")
    expect(mockMutate).not.toHaveBeenCalled()
  })

  it('calls mutate when the form is submitted', async () => {
    const mockMutate = jest.fn()
    mockUseCreateOrUpdateDOI.mockReturnValue({
      ...getUseMutationMock(),
      mutate: mockMutate,
    })
    mockUseGetEntity.mockReturnValue(
      getUseQuerySuccessMock({
        name: 'Test Entity',
        concreteType: 'org.sagebionetworks.repo.model.FileEntity',
      }),
    )
    mockUseGetCurrentUserProfile.mockReturnValue(
      getUseQuerySuccessMock(mockUserProfileData),
    )

    render(<CreateOrUpdateDoiModal {...defaultProps} />)

    // Fill out the form
    const titleInput = screen.getByLabelText(/Title/i)
    await userEvent.clear(titleInput)
    await userEvent.type(titleInput, 'New DOI Title')

    const creatorInput = screen.getByLabelText(/Creator/i)
    await userEvent.clear(creatorInput)
    await userEvent.type(creatorInput, 'Doe, John')

    const saveButton = screen.getByText(/Save/i)
    await userEvent.click(saveButton)

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
  })

  it('renders versions in the list, allows selecting a version, and includes it in the request', async () => {
    const mockMutate = jest.fn()
    mockUseCreateOrUpdateDOI.mockReturnValue({
      ...getUseMutationMock(),
      mutate: mockMutate,
    })
    mockUseGetEntity.mockReturnValue(
      getUseQuerySuccessMock({
        name: 'Test Entity',
        concreteType: 'org.sagebionetworks.repo.model.FileEntity',
      }),
    )
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

    render(<CreateOrUpdateDoiModal {...defaultProps} />)

    // Wait for the versions to be rendered
    const versionInput = await screen.findByLabelText(/Version/i)
    await userEvent.click(versionInput)
    await screen.findByRole('option', { name: 'No version' })
    await screen.findByRole('option', { name: 'Version 1 / v1' })
    await screen.findByRole('option', { name: 'Version 2 / v2' })

    // Select a version
    const versionSelect = screen.getByLabelText(/Version/i)
    await userEvent.click(versionSelect)
    const versionOption = screen.getByText('Version 2 / v2')
    await userEvent.click(versionOption)

    // Fill out the form
    const titleInput = screen.getByLabelText(/Title/i)
    await userEvent.clear(titleInput)
    await userEvent.type(titleInput, 'New DOI Title')

    const creatorInput = screen.getByLabelText(/Creator/i)
    await userEvent.clear(creatorInput)
    await userEvent.type(creatorInput, 'Doe, John')

    const saveButton = screen.getByText(/Save/i)
    await userEvent.click(saveButton)

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
})
