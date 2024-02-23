import React, { useEffect, useState } from 'react'
import StepperDialog, { Step } from '../StepperDialog/StepperDialog'

import {
  ErrorResponse,
  Team,
  TeamMembershipStatus,
} from '@sage-bionetworks/synapse-types'
import { CreateChallengeTeam, CreateTeamRequest } from './CreateChallengeTeam'
import { SelectChallengeTeam } from './SelectChallengeTeam'
import { RegistrationSuccessful } from './RegistrationSuccessful'
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

import { Typography } from '@mui/material'
import { useQueryClient } from '@tanstack/react-query'

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
  const { accessToken, keyFactory } = useSynapseContext()
  const [loading, setLoading] = useState<boolean>(true)
  const [step, setStep] = useState<Step>(steps.SELECT_YOUR_CHALLENGE_TEAM)
  const [errorMessage, setErrorMessage] = useState<string>()
  const [selectedTeam, setSelectedTeam] = useState<Team | undefined>()
  const [createdNewTeam, setCreatedNewTeam] = useState<boolean>(false)
  const [confirming, setConfirming] = useState<boolean>(false)
  const [hasSubmissionTeam, setHasSubmissionTeam] = useState<boolean>(false)
  const queryClient = useQueryClient()
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

  /************************
   * Data population hooks
   ***********************/

  // Use the existing accessToken if present to get the current user's profile / userId
  const { data: userProfile } = useGetCurrentUserProfile()
  // Retrieve the challenge associated with the projectId passed through props
  const { data: challenge } = useGetEntityChallenge(projectId)

  // Determine whether or not the given user belongs to any submission teams
  const { data: userSubmissionTeams, error: userSubmissionTeamError } =
    useGetUserSubmissionTeams(challenge?.id ?? EMPTY_ID, 1)
  useEffect(() => {
    if (userSubmissionTeams) {
      const isReg = userSubmissionTeams.results.length > 0
      if (isReg) {
        setErrorMessage(
          'Error: You are already a member of a registered submission team for this Challenge.',
        )
        setHasSubmissionTeam(isReg)
      }
      setLoading(false)
    }
    if (userSubmissionTeamError) {
      setErrorMessage(
        `Error: Could not determine if you are already registered for this Challenge.`,
      )
      setLoading(false)
    }
  }, [userSubmissionTeams, userSubmissionTeamError])

  const { data: teamMembershipStatus, error: teamMembershipError } =
    useGetMembershipStatus(
      selectedTeam?.id ?? EMPTY_ID,
      userProfile?.ownerId ?? EMPTY_ID,
      {
        enabled: !!selectedTeam && !!userProfile,
      },
    )

  useEffect(() => {
    if (teamMembershipStatus) {
      setMembershipStatus(prev => ({
        ...prev,
        [teamMembershipStatus.teamId]: teamMembershipStatus,
      }))
    }
  }, [teamMembershipStatus])

  useEffect(() => {
    if (teamMembershipError) {
      setErrorMessage(teamMembershipError.reason)
    }
  }, [teamMembershipError])

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
     * A user is not necessarily logged out just because they are not logged in...
     * for example, the request for their userProfile may be pending.
     */
    const isLoggedOut =
      !!userProfile && userProfile.ownerId === ANONYMOUS_PRINCIPAL_ID.toString()

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
        // invalidate submissions team membership status to update the ChallengeRegisterButton
        if (challenge) {
          queryClient.invalidateQueries({
            queryKey: keyFactory.getSubmissionTeamsQueryKey(challenge?.id),
          })
        }
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
        {
          teamId: selectedTeam.id,
          userId: userProfile.ownerId,
          message: joinMessage,
        },
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
      await registerChallengeTeam(
        {
          challengeId: challenge.id,
          teamId: String(teamId),
        },
        accessToken,
      )
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
          { teamId: String(teamId), inviteeEmail: inviteeEmail.trim() },
          accessToken,
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
      await createTeam(
        { name: newTeam.name, description: newTeam.description },
        accessToken,
      )
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

  const onConfirmHandlerMap: Record<string, () => Promise<void> | void> = {
    CREATE_NEW_TEAM: handleCreateTeam,
    JOIN_REQUEST_FORM: handleRequestMembership,
    JOIN_REQUEST_SENT: () => {
      hide()
      return undefined
    },
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
          <Typography variant="body1" sx={{ lineHeight: '20px' }}>
            Team Manager(s) have received your request. Check your Synapse email
            address for status of your request.
          </Typography>
        )
      case StepsEnum.REGISTRATION_SUCCESSFUL:
        return (
          <RegistrationSuccessful
            createdNewTeam={createdNewTeam}
            teamName={selectedTeam?.name}
          />
        )
      case StepsEnum.CREATE_NEW_TEAM:
        return (
          <CreateChallengeTeam
            onChangeTeamInfo={handleChangeTeamInfo}
            onError={setErrorMessage}
          />
        )
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
      onConfirm={() => {
        onConfirmHandler()
      }}
      confirming={confirming}
      step={step}
      content={createContent()}
      loading={loading}
    />
  )
}

export default ChallengeTeamWizard
