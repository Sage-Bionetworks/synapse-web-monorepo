import React, { useEffect, useRef, useState } from 'react'
import StepperDialog, { Step } from '../StepperDialog/StepperDialog'
import {
  ErrorResponse,
  TeamMembershipStatus,
} from '@sage-bionetworks/synapse-types'
import {
  CreateChallengeTeam,
  CreateChallengeTeamHandle,
} from './CreateChallengeTeam'
import { SelectChallengeTeam } from './SelectChallengeTeam'
import { RegistrationSuccessful } from './RegistrationSuccessful'
import { JoinRequestForm } from './JoinRequestForm'
import { useSynapseContext } from '../../utils'
import {
  addTeamMemberAsAuthenticatedUserOrAdmin,
  createMembershipRequest,
} from '../../synapse-client'
import {
  useGetCurrentUserProfile,
  useGetEntityChallenge,
  useGetMembershipStatus,
  useGetUserSubmissionTeams,
} from '../../synapse-queries'
import { ANONYMOUS_PRINCIPAL_ID } from '../../utils/SynapseConstants'
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
  const [selectedTeamId, setSelectedTeamId] = useState<string | undefined>()
  const [createdNewTeam, setCreatedNewTeam] = useState<boolean>(false)
  const [confirming, setConfirming] = useState<boolean>(false)
  const [hasSubmissionTeam, setHasSubmissionTeam] = useState<boolean>(false)
  const queryClient = useQueryClient()
  // membershipStatus is {teamId:TeamMembershipStatus}
  const [membershipStatus, setMembershipStatus] = useState<
    Record<string, TeamMembershipStatus>
  >({})
  const [joinMessage, setJoinMessage] = useState<string>('')

  const createChallengeTeamRef = useRef<CreateChallengeTeamHandle>(null)

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
      selectedTeamId ?? EMPTY_ID,
      userProfile?.ownerId ?? EMPTY_ID,
      {
        enabled: !!selectedTeamId && !!userProfile,
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
    if (selectedTeamId && selectedTeamId in membershipStatus) {
      const {
        canJoin,
        membershipApprovalRequired,
        isMember,
        hasOpenInvitation,
        hasOpenRequest,
      } = membershipStatus[selectedTeamId]

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

  // Determine the user's eligibility to join the selected team
  useEffect(() => {
    if (
      selectedTeamId &&
      selectedTeamId in membershipStatus &&
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
  }, [membershipStatus, selectedTeamId, step])

  /************************
   * Form update handlers
   * *********************/

  // SELECT_YOUR_CHALLENGE_TEAM: user has selected an existing challenge team from the table
  const handleSelectTeam = (teamId?: string) => {
    // Setting selectedTeam will trigger the useMembershipStatus hook
    setErrorMessage(undefined)
    setSelectedTeamId(teamId)
  }

  /************************
   * Step confirm handlers
   * *********************/

  // JOIN_REQUEST_FORM: Add user to an existing public team or a team the user has an open invitation to
  const addUserToTeam = (teamId = selectedTeamId) => {
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
    if (userProfile && selectedTeamId) {
      setConfirming(true)
      setStep({ ...step, nextEnabled: false })
      setErrorMessage(undefined)
      await createMembershipRequest(
        {
          teamId: selectedTeamId,
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

  const hide = () => {
    setErrorMessage(undefined)
    setCreatedNewTeam(false)
    setSelectedTeamId(undefined)
    setStep({ ...step, nextEnabled: false })
    onClose()
  }

  const onConfirmHandlerMap: Record<string, () => Promise<void> | void> = {
    CREATE_NEW_TEAM: () => {
      if (createChallengeTeamRef.current) {
        createChallengeTeamRef.current.submit()
      }
    },
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
            selectedTeamId={selectedTeamId}
            onSelectTeam={teamId => {
              handleSelectTeam(teamId)
            }}
          />
        ) : (
          <></>
        )
      case StepsEnum.JOIN_REQUEST_FORM:
        return (
          <JoinRequestForm
            teamId={selectedTeamId}
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
            teamId={selectedTeamId}
          />
        )
      case StepsEnum.CREATE_NEW_TEAM:
        return (
          <CreateChallengeTeam
            ref={createChallengeTeamRef}
            challengeId={challenge!.id}
            onCanSubmitChange={canCreateTeam => {
              setStep(step => ({
                ...step,
                confirmEnabled: canCreateTeam,
              }))
            }}
            onFinished={newTeamId => {
              setCreatedNewTeam(true)
              setSelectedTeamId(newTeamId)
              setStep(steps[StepsEnum.REGISTRATION_SUCCESSFUL])
            }}
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
