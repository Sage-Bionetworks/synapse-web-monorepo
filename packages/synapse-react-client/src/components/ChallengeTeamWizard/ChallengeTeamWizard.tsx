import React, { useEffect, useState } from 'react'
import StepperDialog, { Step } from '../StepperDialog/StepperDialog'

import {
  Challenge,
  ErrorResponse,
  Team,
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
} from '../../synapse-queries'
import { ANONYMOUS_PRINCIPAL_ID } from '../../utils/SynapseConstants'

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

  useGetCurrentUserProfile({
    enabled: !userProfile,
    onSettled: (data, error) => {
      // console.log('settled profile', { data }, { error })
      if (data) {
        setUserProfile(data)
      }
      if (error) {
        setErrorMessage(
          `Error: Could not retrieve challenge for project "${projectId}".`,
        )
      }
    },
  })

  useGetEntityChallenge(projectId, {
    enabled: canRequestChallenge,
    onSettled: (data, error) => {
      // console.log('settled', { data }, { error })
      if (data) {
        setChallenge(data)
      }
      if (error) {
        setErrorMessage(
          `Error: Could not retrieve challenge for project "${projectId}".`,
        )
      }
      setLoading(false)
    },
  })

  useEffect(() => {
    const isLoggedIn =
      !!userProfile && userProfile.ownerId !== ANONYMOUS_PRINCIPAL_ID.toString()

    const isLoggedOut =
      !!userProfile && userProfile.ownerId === ANONYMOUS_PRINCIPAL_ID.toString()

    const canRequest = isLoggedIn && !!projectId && !challenge
    // console.log({ isLoggedIn, isLoggedOut, userProfile, canRequest })
    setCanRequestChallenge(canRequest)
    if (isLoggedOut) {
      setLoading(false)
      setErrorMessage('Please login to continue.')
    }
  }, [accessToken, userProfile, projectId, challenge])

  useEffect(() => {
    if (inviteMembersSuccess && registerChallengeSuccess) {
      setConfirming(false)
      handleStepChange(step.confirmStep as StepsEnum)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [registerChallengeSuccess, inviteMembersSuccess, step])

  /************************
   * Form update handlers
   * *********************/
  // SELECT_YOUR_CHALLENGE_TEAM: user has selected an existing challenge team from the table
  const handleSelectTeam = (team: Team) => {
    if (team) {
      setSelectedTeam(team)
      if (!step.nextEnabled) setStep({ ...step, nextEnabled: true })
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
  // JOIN_REQUEST_FORM: Add user to an existing public team
  const addUserToPublicTeam = () => {
    if (!selectedTeam || !userProfile || !accessToken) return
    setConfirming(true)
    setErrorMessage(undefined)
    addTeamMemberAsAuthenticatedUserOrAdmin(
      selectedTeam?.id,
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
        .then(response => {
          console.log({ response })
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
    if (teamId && challenge) {
      setErrorMessage(undefined)
      setRegisterChallengeSuccess(false)
      await registerChallengeTeam(accessToken, challenge.id, teamId)
        .then(() => {
          setRegisterChallengeSuccess(true)
        })
        .catch((err: ErrorResponse) => {
          setErrorMessage(`${msg}: ${err.reason}`)
        })
    } else {
      setErrorMessage(`${msg}: Invalid team.`)
    }
  }

  // CREATE_NEW_TEAM: Invite a comma-delimited list of emails to join the team
  const handleInviteTeamMembers = async (
    teamId: string | number,
    invitees: string,
  ) => {
    const msg = 'Error inviting members'
    if (teamId && invitees) {
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
      } else {
        setInviteMembersSuccess(true)
      }
    } else {
      setErrorMessage(`${msg}: Invalid team.`)
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
    onClose()
  }

  const onConfirmHandlerMap: Record<string, () => Promise<void>> | void = {
    CREATE_NEW_TEAM: handleCreateTeam,
    JOIN_REQUEST_FORM: handleRequestMembership,
  }

  const createContent = () => {
    switch (step.id) {
      case StepsEnum.SELECT_YOUR_CHALLENGE_TEAM:
        return accessToken && challenge ? (
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

  function handleStepChange(value?: StepsEnum) {
    if (!value || !steps[value]) return
    setErrorMessage(undefined)

    console.log('handleStepChange', value)
    switch (value) {
      case StepsEnum.SELECT_YOUR_CHALLENGE_TEAM:
        setCreatedNewTeam(false)
        break
      case StepsEnum.JOIN_REQUEST_FORM:
        if (selectedTeam?.canPublicJoin) {
          return addUserToPublicTeam()
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
