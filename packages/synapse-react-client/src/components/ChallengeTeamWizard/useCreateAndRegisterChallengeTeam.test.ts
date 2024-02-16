import { act, renderHook, waitFor } from '@testing-library/react'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import useCreateAndRegisterChallengeTeam from './useCreateAndRegisterChallengeTeam'
import SynapseClient from '../../synapse-client'
import { MOCK_USER_ID } from '../../mocks/user/mock_user_profile'
import { uniqueId } from 'lodash-es'
import { MOCK_ACCESS_TOKEN } from '../../mocks/MockSynapseContext'
import {
  ChallengeTeam,
  CreateChallengeTeamRequest,
  CreateMembershipInvitationRequest,
  CreateTeamRequest,
  MembershipInvitation,
  Team,
} from '@sage-bionetworks/synapse-types'
import { SynapseClientError } from '../../utils'

function render() {
  const renderedHook = renderHook(() => useCreateAndRegisterChallengeTeam(), {
    wrapper: createWrapper(),
  })

  expect(renderedHook.result.current.createAndRegisterTeam).toBeDefined()
  expect(renderedHook.result.current.isPending).toBe(false)
  expect(renderedHook.result.current.errors).not.toBeDefined()

  return renderedHook
}
const mockCreateTeam = jest.spyOn(SynapseClient, 'createTeam')
const mockInviteUser = jest.spyOn(SynapseClient, 'createMembershipInvitation')
const mockRegisterForChallenge = jest.spyOn(
  SynapseClient,
  'registerChallengeTeam',
)

const apiError = new SynapseClientError(
  400,
  'Something failed',
  expect.getState().currentTestName!,
)

function createTeamSuccessMock(teamRequest: CreateTeamRequest): Promise<Team> {
  return Promise.resolve({
    ...teamRequest,
    id: uniqueId(),
    etag: 'etag',
    createdOn: new Date().toISOString(),
    createdBy: String(MOCK_USER_ID),
    modifiedOn: new Date().toISOString(),
    modifiedBy: String(MOCK_USER_ID),
  })
}

function inviteUserSuccessMock(
  invitationRequest: CreateMembershipInvitationRequest,
): Promise<MembershipInvitation> {
  return Promise.resolve({
    ...invitationRequest,
    id: uniqueId(),
    createdOn: new Date().toISOString(),
    createdBy: String(MOCK_USER_ID),
  })
}

function registerForChallengeSuccessMock(
  request: CreateChallengeTeamRequest,
): Promise<ChallengeTeam> {
  return Promise.resolve({
    ...request,
    id: uniqueId(),
    etag: 'etag',
  })
}

const teamName = 'foobar'
const challengeId = '456789'
const inviteeEmails = ['foo@bar.com', 'fake@email.net']
const message = 'Join my team!'

describe('useCreateAndRegisterChallengeTeam', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('creates a team, registers it for a challenge, and sends invitations to join the team', async () => {
    mockCreateTeam.mockImplementation(createTeamSuccessMock)
    mockInviteUser.mockImplementation(inviteUserSuccessMock)
    mockRegisterForChallenge.mockImplementation(registerForChallengeSuccessMock)

    const { result } = render()

    let responses: Awaited<
      ReturnType<typeof result.current.createAndRegisterTeam>
    > | null = null
    await act(async () => {
      responses = await result.current.createAndRegisterTeam(
        { name: teamName },
        challengeId,
        inviteeEmails,
        message,
      )
    })

    expect(responses).toBeDefined()

    // Check team creation
    expect(mockCreateTeam).toHaveBeenCalledWith(
      { name: teamName },
      MOCK_ACCESS_TOKEN,
    )
    const createdTeam = responses![0]
    expect(createdTeam.name).toBe(teamName)

    // Check challenge registration
    expect(mockRegisterForChallenge).toHaveBeenCalledWith(
      {
        teamId: createdTeam.id,
        challengeId,
      },
      MOCK_ACCESS_TOKEN,
    )
    expect(responses![1]).toEqual(
      expect.objectContaining({
        teamId: createdTeam.id,
        challengeId,
      }),
    )

    // Check invitations
    expect(mockInviteUser).toHaveBeenCalledTimes(inviteeEmails.length)
    for (const inviteeEmail of inviteeEmails) {
      expect(mockInviteUser).toHaveBeenCalledWith(
        {
          teamId: createdTeam.id,
          inviteeEmail,
          message,
        },
        MOCK_ACCESS_TOKEN,
      )
    }
    expect(responses![2].length).toBe(inviteeEmails.length)
  })
  it('does not send invitations if no emails are specified', async () => {
    const emptyInviteeEmails: string[] = []
    mockCreateTeam.mockImplementation(createTeamSuccessMock)
    mockInviteUser.mockImplementation(inviteUserSuccessMock)
    mockRegisterForChallenge.mockImplementation(registerForChallengeSuccessMock)

    const { result } = render()

    let responses: Awaited<
      ReturnType<typeof result.current.createAndRegisterTeam>
    > | null = null
    await act(async () => {
      responses = await result.current.createAndRegisterTeam(
        { name: teamName },
        challengeId,
        emptyInviteeEmails,
        message,
      )
    })

    expect(responses).toBeDefined()

    // Check team creation
    expect(mockCreateTeam).toHaveBeenCalledWith(
      { name: teamName },
      MOCK_ACCESS_TOKEN,
    )
    const createdTeam = responses![0]
    expect(createdTeam.name).toBe(teamName)

    // Check challenge registration
    expect(mockRegisterForChallenge).toHaveBeenCalledWith(
      {
        teamId: createdTeam.id,
        challengeId,
      },
      MOCK_ACCESS_TOKEN,
    )
    expect(responses![1]).toEqual(
      expect.objectContaining({
        teamId: createdTeam.id,
        challengeId,
      }),
    )

    // Check invitations
    expect(mockInviteUser).not.toHaveBeenCalled()
    expect(responses![2].length).toBe(0)
  })
  it('returns an error if the team creation fails, and does not attempt registration or invitations', async () => {
    mockCreateTeam.mockRejectedValue(apiError)

    const { result } = render()

    await act(async () => {
      await expect(
        result.current.createAndRegisterTeam(
          { name: teamName },
          challengeId,
          inviteeEmails,
          message,
        ),
      ).rejects.toThrow(apiError)
    })

    // Check team creation
    expect(mockCreateTeam).toHaveBeenCalledWith(
      { name: teamName },
      MOCK_ACCESS_TOKEN,
    )

    expect(result.current.errors).toHaveLength(1)
    expect(result.current.errors![0].status).toBe(apiError.status)
    expect(result.current.errors![0].message).toBe(apiError.message)

    expect(mockRegisterForChallenge).not.toHaveBeenCalled()
    expect(mockInviteUser).not.toHaveBeenCalled()
  })

  it('returns an error if the challenge registration fails, invitations are still sent', async () => {
    mockCreateTeam.mockImplementation(createTeamSuccessMock)
    mockInviteUser.mockImplementation(inviteUserSuccessMock)
    mockRegisterForChallenge.mockRejectedValue(apiError)

    const { result } = render()

    await act(async () => {
      await expect(
        result.current.createAndRegisterTeam(
          { name: teamName },
          challengeId,
          inviteeEmails,
          message,
        ),
      ).rejects.toThrow(apiError)
    })

    // Check team creation
    expect(mockCreateTeam).toHaveBeenCalledWith(
      { name: teamName },
      MOCK_ACCESS_TOKEN,
    )

    // Check challenge registration
    expect(mockRegisterForChallenge).toHaveBeenCalled()
    // Check invitations
    expect(mockInviteUser).toHaveBeenCalledTimes(inviteeEmails.length)

    await waitFor(() => {
      expect(result.current.errors).toHaveLength(1)
      expect(result.current.errors![0].status).toBe(apiError.status)
      expect(result.current.errors![0].message).toBe(apiError.message)
    })
  })

  it('returns an error if invitations fail, challenge registration is still attempted', async () => {
    mockCreateTeam.mockImplementation(createTeamSuccessMock)
    mockInviteUser.mockRejectedValue(apiError)
    mockRegisterForChallenge.mockImplementation(registerForChallengeSuccessMock)

    const { result } = render()

    await act(async () => {
      await expect(
        result.current.createAndRegisterTeam(
          { name: teamName },
          challengeId,
          inviteeEmails,
          message,
        ),
      ).rejects.toThrow(apiError)
    })

    // Check team creation
    expect(mockCreateTeam).toHaveBeenCalledWith(
      { name: teamName },
      MOCK_ACCESS_TOKEN,
    )

    // Check challenge registration
    expect(mockRegisterForChallenge).toHaveBeenCalled()
    // Check invitations
    expect(mockInviteUser).toHaveBeenCalledTimes(1)

    await waitFor(() => {
      expect(result.current.errors).toHaveLength(1)
      expect(result.current.errors![0].status).toBe(apiError.status)
      expect(result.current.errors![0].message).toBe(apiError.message)
    })
  })
})
