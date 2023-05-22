import React, { useEffect, useState } from 'react'
import FullWidthAlert from '../FullWidthAlert'
import StepperDialog, { Step } from '../StepperDialog/StepperDialog'

import { ErrorResponse, Team } from '@sage-bionetworks/synapse-types'
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

// TODO: Organize / move types to proper location
export type PartialUpdate = {
  [key: string]: string
}

enum StepsEnum {
  SELECT_YOUR_CHALLENGE_TEAM = 'SELECT_YOUR_CHALLENGE_TEAM',
  JOIN_REQUEST_FORM = 'JOIN_REQUEST_FORM',
  JOIN_REQUEST_SENT = 'JOIN_REQUEST_SENT',
  REGISTRATION_SUCCESSFUL = 'REGISTRATION_SUCCESSFUL',
  CREATE_NEW_TEAM = 'CREATE_NEW_TEAM',
}
type StepKey = keyof typeof StepsEnum
type StepList = {
  [key in StepKey]: Step
}
const createSteps = (): StepList => ({
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
    confirmEnabled: true,
    confirmButtonText: 'Send Request',
  },
  JOIN_REQUEST_SENT: {
    id: StepsEnum.JOIN_REQUEST_SENT,
    title: 'Request Sent',
    confirmButtonText: 'Close',
    confirmEnabled: true,
  },
  REGISTRATION_SUCCESSFUL: {
    id: StepsEnum.REGISTRATION_SUCCESSFUL,
    title: 'Registration Successful!',
  },
  CREATE_NEW_TEAM: {
    id: StepsEnum.CREATE_NEW_TEAM,
    title: 'Create Team',
    confirmStep: StepsEnum.REGISTRATION_SUCCESSFUL,
    confirmButtonText: 'Finish Registration',
    previousStep: StepsEnum.SELECT_YOUR_CHALLENGE_TEAM,
    confirmEnabled: false,
  },
})

export type ChallengeTeamWizardProps = {
  userId: string
  challengeId: string
  isShowingModal?: boolean
  onClose: () => void
}

const ChallengeTeamWizard: React.FunctionComponent<
  ChallengeTeamWizardProps
> = ({ userId, challengeId, isShowingModal = false, onClose }) => {
  const { accessToken } = useSynapseContext()
  const steps = createSteps()
  const [step, setStep] = useState<Step>(steps.SELECT_YOUR_CHALLENGE_TEAM)
  const [errorMessage, setErrorMessage] = useState<string>()
  const [selectedTeam, setSelectedTeam] = useState<Team | undefined>()
  const [createdNewTeam, setCreatedNewTeam] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [inviteMembersSuccess, setInviteMembersSuccess] =
    useState<boolean>(false)
  const [registerChallengeSuccess, setRegisterChallengeSuccess] =
    useState<boolean>(false)
  // TODO: Show success alert and clear (if we need to use the success component at all)
  const [isShowingSuccessAlert, setIsShowingSuccessAlert] =
    useState<boolean>(false)
  const [newTeam, setNewTeam] = useState<CreateTeamRequest>({
    name: '',
    description: '',
    message: '',
    invitees: '',
  })
  const [joinMessage, setJoinMessage] = useState<string>('')

  // Add user to an existing public team
  const addUserToPublicTeam = () => {
    if (!selectedTeam || !accessToken) return
    addTeamMemberAsAuthenticatedUserOrAdmin(
      selectedTeam?.id,
      userId,
      accessToken,
    )
      .then(() => {
        handleStepChange(StepsEnum.REGISTRATION_SUCCESSFUL)
      })
      .catch((err: ErrorResponse) => {
        setErrorMessage(`Error joining team: ${err.reason}`)
      })
  }

  useEffect(() => {
    if (inviteMembersSuccess && registerChallengeSuccess) {
      handleStepChange(step.confirmStep as StepsEnum)
    }
  }, [registerChallengeSuccess, inviteMembersSuccess, step])

  const handleChangeTeamInfo = (updatedTeam: CreateTeamRequest) => {
    setNewTeam(updatedTeam)
    const confirmEnabled = updatedTeam.name.length > 1
    setStep({ ...step, confirmEnabled })
  }

  const handleSelectTeam = (team: Team) => {
    if (team) {
      setSelectedTeam(team)
      if (!step.nextEnabled) setStep({ ...step, nextEnabled: true })
    }
  }

  // User has asked to join an existing challenge team
  const handleRequestMembership = async () => {
    if (userId && selectedTeam) {
      setStep({ ...step, nextEnabled: false })
      setErrorMessage('')
      await createMembershipRequest(
        selectedTeam.id,
        userId,
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
    }
  }

  // Add newly created team to the challenge
  const handleRegisterChallengeTeam = async (teamId: string | number) => {
    const msg = 'Error registering challenge team'
    if (teamId) {
      setErrorMessage('')
      setRegisterChallengeSuccess(false)
      await registerChallengeTeam(accessToken, challengeId, teamId)
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

  // Invite a comma-delimited list of emails to join the team
  const handleInviteTeamMembers = async (
    teamId: string | number,
    invitees: string,
  ) => {
    const msg = 'Error inviting members'
    if (teamId && invitees) {
      setErrorMessage('')
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

  // Create a new team to join the challenge
  const handleCreateTeam = async () => {
    if (newTeam && newTeam.name && newTeam.name.length > 1) {
      setStep({ ...step, confirmEnabled: false })
      setErrorMessage('')
      await createTeam(accessToken, newTeam.name, newTeam.description)
        .then(response => {
          setSelectedTeam(response)
          // Add newly created team to challenge
          handleRegisterChallengeTeam(response.id)
          // Invite emails to new team
          handleInviteTeamMembers(response.id, newTeam.invitees)
        })
        .catch((err: ErrorResponse) => {
          setErrorMessage(`Error creating team: ${err.reason}`)
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
        return (
          accessToken && (
            <SelectChallengeTeam
              challengeId={challengeId}
              onCreateTeam={() => handleStepChange(StepsEnum.CREATE_NEW_TEAM)}
              onSelectTeam={handleSelectTeam}
            />
          )
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

  return (
    <>
      <StepperDialog
        errorMessage={errorMessage}
        onCancel={hide}
        onStepChange={handleStepChange as (arg: string) => void}
        open={isShowingModal}
        onConfirm={
          onConfirmHandlerMap[step.id]
            ? onConfirmHandlerMap[step.id]
            : () => undefined
        }
        step={step}
        content={createContent()}
        loading={loading}
      />
      <FullWidthAlert
        show={isShowingSuccessAlert}
        variant="info"
        title="Project created"
        description=""
        autoCloseAfterDelayInSeconds={10}
        onClose={() => {
          setIsShowingSuccessAlert(false)
        }}
      />
    </>
  )
}

export default ChallengeTeamWizard
