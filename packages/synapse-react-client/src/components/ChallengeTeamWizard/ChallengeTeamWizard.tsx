import React, { useEffect, useState } from 'react'
import StepperDialog, { Step } from '../StepperDialog/StepperDialog'

import {
  Challenge,
  ErrorResponse,
  PaginatedIds,
  Team,
  TeamMembershipStatus,
  UserProfile,
} from '@sage-bionetworks/synapse-types'
import { CreateChallengeTeam, CreateTeamRequest } from './CreateChallengeTeam'
import { SelectChallengeTeam } from './SelectChallengeTeam'
import { RegistrationSuccessful } from './RegistrationSuccessful'
import { Box } from '@mui/system'
import { JoinRequestForm } from './JoinRequestForm'
import { useSynapseContext } from '../../utils'
import {
  addTeamMemberAsAuthenticatedUserOrAdmin,
  createMembershipInvitation,
  createMembershipRequest,
  createTeam,
  registerChallengeTeam,
} from '../../synapse-client'
import {
  useGetCurrentUserProfile,
  useGetEntityChallenge,
  useGetUserSubmissionTeams,
} from '../../synapse-queries'
import { ANONYMOUS_PRINCIPAL_ID } from '../../utils/SynapseConstants'
import { useGetMembershipStatus } from '../../synapse-queries/team/useTeamMembers'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useGetIsUserMemberOfTeam } from '../../synapse-queries/team/useTeamMembers'

enum StepsEnum {
  SELECT_YOUR_CHALLENGE_TEAM = 'SELECT_YOUR_CHALLENGE_TEAM',
  JOIN_REQUEST_FORM = 'JOIN_REQUEST_FORM',
  JOIN_REQUEST_SENT = 'JOIN_REQUEST_SENT',
  CREATE_NEW_TEAM = 'CREATE_NEW_TEAM',
  REGISTRATION_SUCCESSFUL = 'REGISTRATION_SUCCESSFUL',
}
type StepKey = keyof typeof StepsEnum
type StepList = {
  [key in StepKey]: Step
}

const steps: StepList = {
  SELECT_YOUR_CHALLENGE_TEAM: {
    id: StepsEnum.SELECT_YOUR_CHALLENGE_TEAM,
    title: 'Select Your Challenge Team',
    nextStep: StepsEnum.JOIN_REQUEST_FORM,
    nextEnabled: false,
    // contentProps: {
    //   sx: { overflowY: 'hidden' },
    // },
  },
  JOIN_REQUEST_FORM: {
    id: StepsEnum.JOIN_REQUEST_FORM,
    title: 'Request Team Membership',
    previousStep: StepsEnum.SELECT_YOUR_CHALLENGE_TEAM,
    confirmStep: StepsEnum.JOIN_REQUEST_SENT,
    confirmButtonText: 'Send Request',
    confirmEnabled: true,
  },
  JOIN_REQUEST_SENT: {
    id: StepsEnum.JOIN_REQUEST_SENT,
    title: 'Request Sent',
    confirmButtonText: 'Close',
    confirmEnabled: true,
  },
  CREATE_NEW_TEAM: {
    id: StepsEnum.CREATE_NEW_TEAM,
    title: 'Create Team',
    confirmStep: StepsEnum.REGISTRATION_SUCCESSFUL,
    confirmButtonText: 'Finish Registration',
    confirmEnabled: false,
    previousStep: StepsEnum.SELECT_YOUR_CHALLENGE_TEAM,
  },
  REGISTRATION_SUCCESSFUL: {
    id: StepsEnum.REGISTRATION_SUCCESSFUL,
    title: 'Registration Successful!',
  },
}

export type ChallengeTeamWizardProps = {
  projectId: string
  isShowingModal?: boolean
  onClose: () => void
}

const EMPTY_ID = ''

const ChallengeTeamWizard: React.FunctionComponent<
  ChallengeTeamWizardProps
> = ({ projectId, isShowingModal = false, onClose }) => {
  const { accessToken } = useSynapseContext()
  const [loading, setLoading] = useState<boolean>(true)
  const [step, setStep] = useState<Step>(steps.SELECT_YOUR_CHALLENGE_TEAM)
  const [errorMessage, setErrorMessage] = useState<string>()
  const [challenge, setChallenge] = useState<Challenge>()
  const [userProfile, setUserProfile] = useState<UserProfile>()
  const [selectedTeam, setSelectedTeam] = useState<Team | undefined>()
  const [createdNewTeam, setCreatedNewTeam] = useState<boolean>(false)
  const [confirming, setConfirming] = useState<boolean>(false)
  const [hasSubmissionTeam, setHasSubmissionTeam] = useState<boolean>(false)
  // membershipStatus is {teamId:TeamMembershipStatus}
  const [membershipStatus, setMembershipStatus] = useState<
    Record<string, TeamMembershipStatus>
  >({})
  const [inviteMembersSuccess, setInviteMembersSuccess] =
    useState<boolean>(false)
  const [registerChallengeSuccess, setRegisterChallengeSuccess] =
    useState<boolean>(false)
  const [newTeam, setNewTeam] = useState<CreateTeamRequest>({
    name: '',
    description: '',
    message: '',
    invitees: '',
  })
  const [joinMessage, setJoinMessage] = useState<string>('')
  const [canRequestChallenge, setCanRequestChallenge] = useState<boolean>(false)

  /************************
   * Data population hooks
   ***********************/

  // Use the existing accessToken if present to get the current user's profile / userId
  useGetCurrentUserProfile({
    enabled: !userProfile,
    onSettled: (data, error) => {
      // console.log('settled profile', { data }, { error })
      if (data) {
        setUserProfile(data)
      }
      if (error) {
        setLoading(false)
        setErrorMessage(
          `Error: Could not retrieve challenge for project "${projectId}".`,
        )
      }
    },
  })

  // Retrieve the challenge associated with the projectId passed through props
  useGetEntityChallenge(projectId, {
    enabled: canRequestChallenge,
    onSettled: (data, error) => {
      // console.log('settled', { data }, { error })
      if (data) {
        setChallenge(data)
      }
      if (error) {
        setLoading(false)
        setErrorMessage(
          `Error: Could not retrieve challenge for project "${projectId}".`,
        )
      }
    },
  })

  // Verify that user is a member of the participant team
  useGetIsUserMemberOfTeam(
    challenge?.participantTeamId ?? EMPTY_ID,
    userProfile?.ownerId ?? EMPTY_ID,
    {
      enabled: !!challenge && !!userProfile,
      onSettled: (data, error) => {
        // console.log('useGetIsUserMemberOfTeam', data, error)
        if (data === null) {
          /**
           * Somehow user is not a member of the participant team yet
           * auto-join member to participant team before we continue
           */
          if (challenge?.participantTeamId && userProfile && accessToken) {
            addTeamMemberAsAuthenticatedUserOrAdmin(
              challenge?.participantTeamId,
              userProfile.ownerId,
              accessToken,
            )
          }
        }
        if (data !== null) {
          // User is a member of the participant team, continue
        }
        if (error) {
          // Could not determine if user is a member of the participant team
          setLoading(false)
          setErrorMessage(
            'Error: could not determine if user is a member of this challenge.',
          )
        }
      },
    },
  )

  // Determine whether or not the given user belongs to any submission teams
  useGetUserSubmissionTeams(challenge?.id ?? EMPTY_ID, 500, {
    enabled: !!challenge && !!accessToken,
    onSettled: (
      data: PaginatedIds | undefined,
      error: SynapseClientError | null,
    ) => {
      // console.log('settled', { data }, { error })
      if (data) {
        const isReg = data.results.length > 0
        if (isReg) {
          setErrorMessage(
            'Error: You are already a member of a registered submission team for this Challenge.',
          )
          setHasSubmissionTeam(isReg)
        }
      }
      if (error) {
        setErrorMessage(
          `Error: Could not determine if you are already registered for this Challenge.`,
        )
      }
      setLoading(false)
    },
  })

  useGetMembershipStatus(
    selectedTeam?.id ?? EMPTY_ID,
    userProfile?.ownerId ?? EMPTY_ID,
    {
      enabled: !!selectedTeam && !!userProfile,
      onSettled: (
        data: TeamMembershipStatus | undefined,
        error: SynapseClientError | null,
      ) => {
        if (data) {
          // console.log(data)
          setMembershipStatus({ ...membershipStatus, [data.teamId]: data })
        }
        if (error) {
          // console.error(error)
          setErrorMessage(error.reason)
        }
      },
    },
  )

  /*************************
   * React to state changes
   ************************/

  const canUserJoinTeam = () => {
    if (selectedTeam && selectedTeam.id in membershipStatus) {
      const {
        canJoin,
        membershipApprovalRequired,
        isMember,
        hasOpenInvitation,
        hasOpenRequest,
      } = membershipStatus[selectedTeam.id]

      if (isMember) {
        // User cannot join this team, disable Next button
        return {
          canJoin: false,
          errorMessage: 'You are already a member of this team.',
        }
      }

      if (hasOpenRequest) {
        // User already has an open request to join this team, disable Next button to avoid request spamming
        return {
          canJoin: false,
          errorMessage:
            'Your previous request to join this team is pending review.',
        }
      }

      if (hasOpenInvitation || canJoin || membershipApprovalRequired) {
        /**
         * User has an open invitation, or the team is public, or
         * user may request to join. Enable Next button.
         */
        return {
          canJoin: true,
          needsApproval: membershipApprovalRequired,
          errorMessage: undefined,
        }
      }
    }
    return {
      canJoin: false,
    }
  }

  // Determine the login status of the user, and whether or not we can request the given projectId challenge.
  useEffect(() => {
    /**
     * The presence of an accessToken alone is not enough to determine the user's login status, since it may be expired.
     * Neither is the presence of a userProfile, since it may belong to the anonymous user.
     * A user is not necessarily logged out just because they are not logged in...
     * for example, the request for their userProfile may be pending.
     */
    const isLoggedIn =
      !!userProfile && userProfile.ownerId !== ANONYMOUS_PRINCIPAL_ID.toString()

    const isLoggedOut =
      !!userProfile && userProfile.ownerId === ANONYMOUS_PRINCIPAL_ID.toString()

    /**
     * We can only request challenges if we are not anonymous.
     * Avoid repeated api calls by disabling hook once we have the challenge.
     */
    const canRequest = isLoggedIn && !!projectId && !challenge
    setCanRequestChallenge(canRequest)

    if (isLoggedOut) {
      setLoading(false)
      setErrorMessage('Please login to continue.')
    }
  }, [accessToken, userProfile, projectId, challenge])

  /**
   * When creating a new team, wait for the team to be registered to the challenge
   * and for invited members to be invited before proceeding to confirmation view.
   */
  useEffect(() => {
    if (inviteMembersSuccess && registerChallengeSuccess) {
      setConfirming(false)
      handleStepChange(step.confirmStep as StepsEnum)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [registerChallengeSuccess, inviteMembersSuccess, step])

  // Determine the user's eligibility to join the selected team
  useEffect(() => {
    if (
      selectedTeam &&
      selectedTeam.id in membershipStatus &&
      step.id === StepsEnum.SELECT_YOUR_CHALLENGE_TEAM
    ) {
      const { canJoin, errorMessage } = canUserJoinTeam()
      if (canJoin) {
        if (!step.nextEnabled) setStep({ ...step, nextEnabled: true })
        return
      }
      if (step.nextEnabled) setStep({ ...step, nextEnabled: false })
      if (errorMessage) setErrorMessage(errorMessage)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [membershipStatus, selectedTeam, step])

  /************************
   * Form update handlers
   * *********************/

  // SELECT_YOUR_CHALLENGE_TEAM: user has selected an existing challenge team from the table
  const handleSelectTeam = (team: Team) => {
    if (team) {
      // Setting selectedTeam will trigger the useMembershipStatus hook
      setErrorMessage(undefined)
      setSelectedTeam(team)
    }
  }

  // CREATE_NEW_TEAM: form change handler
  const handleChangeTeamInfo = (updatedTeam: CreateTeamRequest) => {
    setNewTeam(updatedTeam)
    const confirmEnabled = updatedTeam.name.length > 1
    setStep({ ...step, confirmEnabled })
  }

  /************************
   * Step confirm handlers
   * *********************/

  // JOIN_REQUEST_FORM: Add user to an existing public team or a team the user has an open invitation to
  const addUserToTeam = (teamId = selectedTeam?.id) => {
    if (!teamId || !userProfile || !accessToken) return
    setConfirming(true)
    setErrorMessage(undefined)
    addTeamMemberAsAuthenticatedUserOrAdmin(
      teamId,
      userProfile.ownerId,
      accessToken,
    )
      .then(() => {
        handleStepChange(StepsEnum.REGISTRATION_SUCCESSFUL)
      })
      .catch((err: ErrorResponse) => {
        setErrorMessage(`Error joining team: ${err.reason}`)
      })
      .finally(() => {
        setConfirming(false)
      })
  }

  // JOIN_REQUEST_FORM: User is requesting to join an existing non-public challenge team
  const handleRequestMembership = async () => {
    if (userProfile && selectedTeam) {
      setConfirming(true)
      setStep({ ...step, nextEnabled: false })
      setErrorMessage(undefined)
      await createMembershipRequest(
        selectedTeam.id,
        userProfile.ownerId,
        joinMessage,
        undefined,
        accessToken,
      )
        .then(() => {
          // console.log({ response })
          // request successful, advance to next step
          setStep(steps[StepsEnum.JOIN_REQUEST_SENT])
        })
        .catch((err: ErrorResponse) => {
          console.error({ err })
          setErrorMessage(`Error requesting membership: ${err.reason}`)
        })
        .finally(() => {
          setConfirming(false)
        })
    }
  }

  // CREATE_NEW_TEAM: Add newly created team to the challenge
  const handleRegisterChallengeTeam = async (teamId: string | number) => {
    const msg = 'Error registering challenge team'
    // console.log({ teamId, challenge })
    if (teamId && challenge) {
      setErrorMessage(undefined)
      setRegisterChallengeSuccess(false)
      await registerChallengeTeam(accessToken, challenge.id, teamId)
        .then(() => {
          setRegisterChallengeSuccess(true)
        })
        .catch((err: ErrorResponse) => {
          setErrorMessage(`${msg}: ${err.reason}`)
          setConfirming(false)
        })
    } else {
      setErrorMessage(`${msg}: Invalid team.`)
      setConfirming(false)
    }
  }

  // CREATE_NEW_TEAM: Invite a comma-delimited list of emails to join the team
  const handleInviteTeamMembers = async (
    teamId: string | number,
    invitees: string,
  ) => {
    if (!invitees.length) {
      setInviteMembersSuccess(true)
      return
    }
    const msg = 'Error inviting members'
    if (teamId) {
      setErrorMessage(undefined)
      setInviteMembersSuccess(false)
      const emails = invitees.split(',')
      const errors: string[] = []
      for (const inviteeEmail of emails) {
        await createMembershipInvitation(
          accessToken,
          teamId,
          inviteeEmail.trim(),
        ).catch(() => {
          errors.push(inviteeEmail.trim())
        })
      }

      if (errors.length) {
        setErrorMessage(`${msg}: ${errors.join(', ')}`)
        setConfirming(false)
      } else {
        setInviteMembersSuccess(true)
      }
    } else {
      setErrorMessage(`${msg}: Invalid team.`)
      setConfirming(false)
    }
  }

  // CREATE_NEW_TEAM: Create a new team to join the challenge
  const handleCreateTeam = async () => {
    if (newTeam && newTeam.name && newTeam.name.length > 1) {
      setStep({ ...step, confirmEnabled: false })
      setConfirming(true)
      setErrorMessage(undefined)
      await createTeam(accessToken, newTeam.name, newTeam.description)
        .then(response => {
          setCreatedNewTeam(true)
          setSelectedTeam(response)
          // Add newly created team to challenge
          handleRegisterChallengeTeam(response.id)
          // Invite emails to new team
          handleInviteTeamMembers(response.id, newTeam.invitees)
        })
        .catch((err: ErrorResponse) => {
          setConfirming(false)
          setErrorMessage(`Error creating team: ${err.reason}`)
          setStep({ ...step, confirmEnabled: true })
        })
    }
  }

  const hide = () => {
    setErrorMessage(undefined)
    setCreatedNewTeam(false)
    setSelectedTeam(undefined)
    setStep({ ...step, nextEnabled: false })
    onClose()
  }

  const onConfirmHandlerMap: Record<string, () => Promise<void>> | void = {
    CREATE_NEW_TEAM: handleCreateTeam,
    JOIN_REQUEST_FORM: handleRequestMembership,
  }

  // Determine modal content based on step.id
  const createContent = () => {
    switch (step.id) {
      case StepsEnum.SELECT_YOUR_CHALLENGE_TEAM:
        return accessToken && challenge && !hasSubmissionTeam ? (
          <SelectChallengeTeam
            challengeId={challenge.id}
            onCreateTeam={() => handleStepChange(StepsEnum.CREATE_NEW_TEAM)}
            onSelectTeam={handleSelectTeam}
          />
        ) : (
          <></>
        )
      case StepsEnum.JOIN_REQUEST_FORM:
        return (
          <JoinRequestForm
            team={selectedTeam}
            joinMessageChange={setJoinMessage}
          />
        )

      case StepsEnum.JOIN_REQUEST_SENT:
        return (
          <Box>
            Team Manager(s) have received your request. Check your Synapse email
            address for status of your request.
          </Box>
        )
      case StepsEnum.REGISTRATION_SUCCESSFUL:
        return (
          <RegistrationSuccessful
            createdNewTeam={createdNewTeam}
            teamName={selectedTeam?.name}
          />
        )
      case StepsEnum.CREATE_NEW_TEAM:
        return <CreateChallengeTeam onChangeTeamInfo={handleChangeTeamInfo} />
      default:
        return <></>
    }
  }

  // React to change in step
  function handleStepChange(value?: StepsEnum) {
    if (!value || !steps[value]) return
    setErrorMessage(undefined)

    const { canJoin, errorMessage, needsApproval } = canUserJoinTeam()
    // console.log('handleStepChange', value)
    switch (value) {
      case StepsEnum.SELECT_YOUR_CHALLENGE_TEAM:
        setCreatedNewTeam(false)
        break
      case StepsEnum.JOIN_REQUEST_FORM:
        // If the team is public, or the user has an open invitation, add them to the team immediately
        if (canJoin) {
          if (!needsApproval) {
            return addUserToTeam()
          }
        } else {
          return setErrorMessage(errorMessage)
        }
        break
    }
    setStep(steps[value])
  }

  const onConfirmHandler = onConfirmHandlerMap[step.id]
    ? onConfirmHandlerMap[step.id]
    : () => undefined

  return (
    <StepperDialog
      errorMessage={errorMessage}
      onCancel={hide}
      onStepChange={handleStepChange as (arg: string) => void}
      open={isShowingModal}
      onConfirm={onConfirmHandler}
      confirming={confirming}
      step={step}
      content={createContent()}
      loading={loading}
    />
  )
}

export default ChallengeTeamWizard
