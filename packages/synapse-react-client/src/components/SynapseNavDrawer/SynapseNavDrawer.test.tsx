import { mockManagedACTAccessRequirement } from '@/mocks/accessRequirement/mockAccessRequirements'
import { mockSubmittedSubmission } from '@/mocks/dataaccess/MockSubmission'
import {
  MOCK_USER_ID,
  MOCK_USER_ID_2,
  mockUserBundle,
} from '@/mocks/user/mock_user_profile'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { SynapseContextType } from '@/stores/SynapseContext/SynapseContext'
import {
  SubmissionSearchResult,
  SubmissionState,
} from '@sage-bionetworks/synapse-types'
import { render, screen, within } from '@testing-library/react'
import { SynapseClient } from '../../index'
import { SynapseNavDrawer, SynapseNavDrawerProps } from './SynapseNavDrawer'

const defaultProps: SynapseNavDrawerProps = {
  initIsOpen: false,
  signoutCallback: vi.fn(),
  gotoPlace: vi.fn(),
}

function renderComponent(wrapperProps?: Partial<SynapseContextType>) {
  render(<SynapseNavDrawer {...defaultProps} />, {
    wrapper: createWrapper(wrapperProps),
  })
}

const numFilesInDownloadList = 10

vi.spyOn(SynapseClient, 'getDownloadListStatistics').mockResolvedValue({
  concreteType:
    'org.sagebionetworks.repo.model.download.FilesStatisticsResponse',
  totalNumberOfFiles: numFilesInDownloadList,
  numberOfFilesAvailableForDownload: 5,
  numberOfFilesAvailableForDownloadAndEligibleForPackaging: 4,
  numberOfFilesRequiringAction: 5,
  sumOfFileSizesAvailableForDownload: 1561981,
})

const openSubmissions: SubmissionSearchResult[] = [
  {
    id: mockSubmittedSubmission.id,
    createdOn: mockSubmittedSubmission.submittedOn,
    modifiedOn: mockSubmittedSubmission.submittedOn,
    accessRequirementId: `${mockManagedACTAccessRequirement.id}`,
    accessRequirementVersion: `${mockManagedACTAccessRequirement.versionNumber}`,
    accessRequirementName: mockManagedACTAccessRequirement.name,
    accessRequirementReviewerIds: [MOCK_USER_ID.toString()],
    submitterId: MOCK_USER_ID_2.toString(),
    accessorChanges: [],
    state: SubmissionState.SUBMITTED,
  },
]

vi.spyOn(SynapseClient, 'searchAccessSubmission').mockResolvedValue({
  results: openSubmissions,
})

const mockGetUserBundle = vi.spyOn(SynapseClient, 'getMyUserBundle')

describe('SynapseNavDrawer tests', () => {
  it('Shows logged-out user items', async () => {
    renderComponent({
      accessToken: undefined,
    })

    const buttonGroups = await screen.findAllByRole('list')
    expect(buttonGroups).toHaveLength(2)

    const topButtonGroup = buttonGroups[0]
    const bottomButtonGroup = buttonGroups[1]

    await within(topButtonGroup).findByLabelText('Search')
    expect(screen.queryByLabelText('Projects')).not.toBeInTheDocument()
    expect(screen.queryByLabelText('Favorites')).not.toBeInTheDocument()
    expect(screen.queryByLabelText('Teams')).not.toBeInTheDocument()
    expect(screen.queryByLabelText('Challenges')).not.toBeInTheDocument()
    expect(screen.queryByLabelText('Download Cart')).not.toBeInTheDocument()
    expect(screen.queryByLabelText('Trash Can')).not.toBeInTheDocument()
    expect(
      screen.queryByLabelText('Data Access Management'),
    ).not.toBeInTheDocument()

    await within(bottomButtonGroup).findByLabelText('Sign in')
    await within(bottomButtonGroup).findByLabelText('Help')
    expect(screen.queryByLabelText('Your Account')).not.toBeInTheDocument()
  })

  it('Shows Synapse Nav Drawer with logged in user items', async () => {
    mockGetUserBundle.mockResolvedValue({
      ...mockUserBundle,
      isARReviewer: false,
    })

    renderComponent()

    const buttonGroups = await screen.findAllByRole('list')
    expect(buttonGroups).toHaveLength(2)

    const topButtonGroup = buttonGroups[0]
    const bottomButtonGroup = buttonGroups[1]

    await within(topButtonGroup).findByLabelText('Projects')
    await within(topButtonGroup).findByLabelText('Favorites')
    await within(topButtonGroup).findByLabelText('Teams')
    await within(topButtonGroup).findByLabelText('Challenges')
    const downloadCartButton = await within(topButtonGroup).findByLabelText(
      'Download Cart',
    )
    await within(downloadCartButton).findByText(`${numFilesInDownloadList}`)
    await within(topButtonGroup).findByLabelText('Trash Can')
    await within(topButtonGroup).findByLabelText('Search')
    expect(
      screen.queryByLabelText('Data Access Management'),
    ).not.toBeInTheDocument()

    await within(bottomButtonGroup).findByLabelText('Your Account')
    await within(bottomButtonGroup).findByLabelText('Help')
    expect(screen.queryByLabelText('Sign in')).not.toBeInTheDocument()
  })

  it('Shows the data access button for AR reviewers', async () => {
    mockGetUserBundle.mockResolvedValue({
      ...mockUserBundle,
      isARReviewer: true,
    })

    renderComponent()

    const buttonGroups = await screen.findAllByRole('list')
    expect(buttonGroups).toHaveLength(2)

    const topButtonGroup = buttonGroups[0]
    const bottomButtonGroup = buttonGroups[1]

    await within(topButtonGroup).findByLabelText('Projects')
    await within(topButtonGroup).findByLabelText('Favorites')
    await within(topButtonGroup).findByLabelText('Teams')
    await within(topButtonGroup).findByLabelText('Challenges')
    const downloadCartButton = await within(topButtonGroup).findByLabelText(
      'Download Cart',
    )
    await within(downloadCartButton).findByText(`${numFilesInDownloadList}`)
    await within(topButtonGroup).findByLabelText('Trash Can')
    await within(topButtonGroup).findByLabelText('Search')

    // Data access management button should appear with a count of the number of open submissions
    const dataAccessButton = await within(topButtonGroup).findByLabelText(
      'Data Access Management',
    )
    within(dataAccessButton).findByText(openSubmissions.length.toString())

    await within(bottomButtonGroup).findByLabelText('Your Account')
    await within(bottomButtonGroup).findByLabelText('Help')
    expect(screen.queryByLabelText('Sign in')).not.toBeInTheDocument()
  })
})
