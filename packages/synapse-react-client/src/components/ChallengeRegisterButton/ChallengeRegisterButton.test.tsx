import React from 'react'
import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from '@testing-library/react'
import ChallengeRegisterButton, {
  ChallengeRegisterButtonProps,
} from './ChallengeRegisterButton'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import mockProject from '../../mocks/entity/mockProject'
import SynapseClient from '../../synapse-client'
import { mockUserProfileData } from '../../mocks/user/mock_user_profile'
import {
  mockChallenge,
  mockChallengeTeamMember,
} from '../../mocks/challenge/mockChallenge'
import { MOCK_TEAM_ID } from '../../mocks/team/mockTeam'
import { SynapseClientError } from '../../utils'

const mockOnError = jest.fn()
const mockOnJoinClick = jest.fn()
const mockOnLeaveClick = jest.fn()

jest
  .spyOn(SynapseClient, 'getUserProfile')
  .mockResolvedValue(mockUserProfileData)
jest.spyOn(SynapseClient, 'getEntityChallenge').mockResolvedValue(mockChallenge)
const mockGetIsUserMemberOfTeam = jest.spyOn(
  SynapseClient,
  'getIsUserMemberOfTeam',
)
const mockGetSubmissionTeams = jest.spyOn(SynapseClient, 'getSubmissionTeams')

function renderComponent() {
  const props: ChallengeRegisterButtonProps = {
    projectId: mockProject.id,
    onError: mockOnError,
    onJoinClick: mockOnJoinClick,
    onLeaveClick: mockOnLeaveClick,
  }

  const user = userEvent.setup()
  const component = render(<ChallengeRegisterButton {...props} />, {
    wrapper: createWrapper(),
  })

  return { user, component }
}

describe('ChallengeRegisterButton', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Prompts to register when not a member of the participant team or any submission teams', async () => {
    mockGetIsUserMemberOfTeam.mockResolvedValue(null)
    mockGetSubmissionTeams.mockResolvedValue({
      results: [],
      totalNumberOfResults: 0,
    })

    const { user } = renderComponent()

    const button = await screen.findByRole('button', {
      name: 'Register for this Challenge',
    })

    await user.click(button)

    expect(mockOnJoinClick).toHaveBeenCalledTimes(1)
    expect(mockOnLeaveClick).not.toHaveBeenCalled()
  })

  it('Prompts to register when not a member of the participant team', async () => {
    mockGetIsUserMemberOfTeam.mockResolvedValue(null)
    mockGetSubmissionTeams.mockResolvedValue({
      results: [String(MOCK_TEAM_ID)],
      totalNumberOfResults: 1,
    })

    const { user } = renderComponent()

    const button = await screen.findByRole('button', {
      name: 'Register for this Challenge',
    })
    await user.click(button)

    expect(mockOnJoinClick).toHaveBeenCalledTimes(1)
    expect(mockOnLeaveClick).not.toHaveBeenCalled()
  })

  it('Prompts to register when not a member of a submission team', async () => {
    mockGetIsUserMemberOfTeam.mockResolvedValue(mockChallengeTeamMember)
    mockGetSubmissionTeams.mockResolvedValue({
      results: [],
      totalNumberOfResults: 0,
    })

    const { user } = renderComponent()

    const button = await screen.findByRole('button', {
      name: 'Register for this Challenge',
    })

    await user.click(button)

    expect(mockOnJoinClick).toHaveBeenCalledTimes(1)
    expect(mockOnLeaveClick).not.toHaveBeenCalled()
  })

  it('Prompts to leave when on both participant and submission teams', async () => {
    mockGetIsUserMemberOfTeam.mockResolvedValue(mockChallengeTeamMember)
    mockGetSubmissionTeams.mockResolvedValue({
      results: [String(MOCK_TEAM_ID)],
      totalNumberOfResults: 1,
    })

    const { user } = renderComponent()
    const button = await screen.findByRole('button', {
      name: 'Leave Challenge',
    })

    await user.click(button)

    expect(mockOnLeaveClick).toHaveBeenCalledTimes(1)
    expect(mockOnJoinClick).not.toHaveBeenCalled()
  })

  it('Invokes the callback on error', async () => {
    const error = new SynapseClientError(
      500,
      'Simulated error in test',
      expect.getState().currentTestName!,
    )
    mockGetIsUserMemberOfTeam.mockRejectedValue(error)
    mockGetSubmissionTeams.mockResolvedValue({
      results: [String(MOCK_TEAM_ID)],
      totalNumberOfResults: 1,
    })

    renderComponent()

    await waitFor(() => {
      expect(mockOnError).toHaveBeenCalledWith(error)
    })
  })
})
