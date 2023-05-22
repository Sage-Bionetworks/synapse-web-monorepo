import React, { useState } from 'react'
import FullWidthAlert from '../FullWidthAlert'
import StepperDialog, { Step } from '../StepperDialog/StepperDialog'

import { ErrorResponse, Team } from '@sage-bionetworks/synapse-types'
import { CreateChallengeTeam } from './CreateChallengeTeam'
import { SelectChallengeTeam } from './SelectChallengeTeam'
import { RegistrationSuccessful } from './RegistrationSuccessful'
import { Box } from '@mui/system'
import { JoinRequestForm } from './JoinRequestForm'
import { useSynapseContext } from '../../utils'
import SynapseClient, {
  createMembershipRequest,
  createTeam,
  registerChallengeTeam,
} from '../../synapse-client'

// TODO: Organize / move types to proper location
export type PartialUpdate = {
  [key: string]: string
}

type TeamToCreate = {
  name: string
  description: string
}

// TODO: Remove mock data
const MOCK_TEAM: Team = {
  id: '123',
  name: 'Mock Team',
  description: 'Mock Team description',
  icon: 'Some icon',
  canPublicJoin: false,
  etag: 'Some etag',
  createdOn: 'Created timestamp',
  modifiedOn: 'Modified timestamp',
  createdBy: 'Created by user ID',
  modifiedBy: 'Modified by user ID',
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
  // TODO: Show success alert and clear (if we need to use the success component at all)
  const [isShowingSuccessAlert, setIsShowingSuccessAlert] =
    useState<boolean>(false)
  const [newTeam, setNewTeam] = useState<TeamToCreate>({
    name: '',
    description: '',
  })
  const [joinMessage, setJoinMessage] = useState<string>('')

  const addUserToPublicTeam = () => {
    if (!selectedTeam || !accessToken) return
    SynapseClient.addTeamMemberAsAuthenticatedUserOrAdmin(
      selectedTeam?.id,
      userId,
      accessToken,
    )
      .then(response => {
        console.log({ response })
        handleStepChange(StepsEnum.REGISTRATION_SUCCESSFUL)
      })
      .catch(err => {
        console.error({ err })
        // TODO: An error has occurred. Show the error
      })
  }

  const handleStepChange = (value?: StepsEnum) => {
    if (!value || !steps[value]) return

    console.log('handleStepChange', value)
    switch (value) {
      case StepsEnum.SELECT_YOUR_CHALLENGE_TEAM:
        console.log('handleStepChange', StepsEnum.SELECT_YOUR_CHALLENGE_TEAM)
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

  const handleChangeTeamInfo = (update: PartialUpdate) => {
    const updatedTeam = { ...newTeam, ...update }
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

  const handleRegisterChallengeTeam = async (teamId: string | number) => {
    const msg = 'Error registering challenge team'
    if (teamId) {
      setErrorMessage('')
      await registerChallengeTeam(accessToken, challengeId, teamId)
        .then(response => {
          console.log(response)
          handleStepChange(step.confirmStep as StepsEnum)
        })
        .catch((err: ErrorResponse) => {
          setErrorMessage(`${msg}: ${err.reason}`)
        })
    } else {
      setErrorMessage(`${msg}: Invalid team.`)
    }
  }

  const handleCreateTeam = async () => {
    console.log('Creating new team...', newTeam)
    if (newTeam && newTeam.name && newTeam.name.length > 1) {
      setStep({ ...step, confirmEnabled: false })
      setErrorMessage('')
      await createTeam(accessToken, newTeam.name, newTeam.description)
        .then(response => {
          setSelectedTeam(response)
          // Add newly created team to challenge
          handleRegisterChallengeTeam(response.id)
          // Invite team members
        })
        .catch((err: ErrorResponse) => {
          setErrorMessage(`Error creating team: ${err.reason}`)
        })
    }
  }

  const handleFinishRegistration = async () => {
    // TODO: Validate input/state values before making any calls
    console.log('Clicking "Finish Registration"', step.confirmStep)
    setLoading(true)
    try {
      await handleCreateTeam()
      // Mock API call of registering for challenge
      await new Promise(() => {
        setTimeout(() => {
          console.log(
            'API call finished, moving to confirmStep',
            step.confirmStep,
          )
          handleStepChange(step.confirmStep as StepsEnum)
          setLoading(false)
        }, 750)
      })
    } catch (e) {
      // TODO: Verify error response object and parse error codes/messages
      setErrorMessage('Error registering for challenge. Please try again.')
    }
  }

  const hide = () => {
    setErrorMessage(undefined)
    setCreatedNewTeam(false)
    onClose()
  }

  const onConfirmHandlerMap: Record<string, () => Promise<void>> | void = {
    INVITE_MEMBERS: handleFinishRegistration,
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
