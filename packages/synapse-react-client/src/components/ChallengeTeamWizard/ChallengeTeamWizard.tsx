import React, { useCallback, useMemo, useRef, useState } from 'react'
import StepperDialog, { Step } from '../StepperDialog/StepperDialog'
import {
  CreateChallengeTeam,
  CreateChallengeTeamHandle,
} from './CreateChallengeTeam'
import { SelectChallengeTeam } from './SelectChallengeTeam'
import { RegistrationSuccessful } from './RegistrationSuccessful'
import { JoinRequestForm } from './JoinRequestForm'
import { useSynapseContext } from '../../utils'
import {
  useGetCurrentUserProfile,
  useGetEntityChallenge,
  useGetUserSubmissionTeams,
} from '../../synapse-queries'
import {
  useAddMemberToTeam,
  useGetMembershipStatus,
  useRequestToJoinTeam,
} from '../../synapse-queries/team/useTeamMembers'
import { Alert, Typography } from '@mui/material'
import { useQueryClient } from '@tanstack/react-query'
import { SignInPrompt, SynapseErrorBoundary } from '../error/ErrorBanner'
import { noop } from 'lodash-es'

enum StepsEnum {
  SELECT_YOUR_CHALLENGE_TEAM = 'SELECT_YOUR_CHALLENGE_TEAM',
  ACCEPT_INVITATION = 'ACCEPT_INVITATION',
  JOIN_REQUEST_FORM = 'JOIN_REQUEST_FORM',
  JOIN_REQUEST_SENT = 'JOIN_REQUEST_SENT',
  CREATE_NEW_TEAM = 'CREATE_NEW_TEAM',
  REGISTRATION_SUCCESSFUL = 'REGISTRATION_SUCCESSFUL',
}
type StepKey = keyof typeof StepsEnum
type StepList = {
  [key in StepKey]: Step
}

const steps = {
  SELECT_YOUR_CHALLENGE_TEAM: {
    id: StepsEnum.SELECT_YOUR_CHALLENGE_TEAM,
    title: 'Select Your Challenge Team',
    nextStep: StepsEnum.JOIN_REQUEST_FORM,
    nextEnabled: false,
  },
  ACCEPT_INVITATION: {
    id: StepsEnum.ACCEPT_INVITATION,
    title: 'Accept Invitation',
    previousStep: StepsEnum.SELECT_YOUR_CHALLENGE_TEAM,
    confirmStep: StepsEnum.REGISTRATION_SUCCESSFUL,
    confirmButtonText: 'Accept Invitation',
    confirmEnabled: true,
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
} satisfies StepList

export type ChallengeTeamWizardProps = {
  projectId: string
  isShowingModal?: boolean
  onClose: () => void
}

/**
 * The ChallengeTeamWizard is used to guide a user through the process of joining or creating a team for a challenge.
 *
 * A required precondition is that the user is NOT on any registered submission team for the challenge.
 */
function ChallengeTeamWizard(props: ChallengeTeamWizardProps) {
  const { projectId, isShowingModal = false, onClose } = props
  const { accessToken } = useSynapseContext()
  const queryClient = useQueryClient()
  const isLoggedIn = !!accessToken

  const [step, setStep] = useState<Step>(steps.SELECT_YOUR_CHALLENGE_TEAM)
  const [selectedTeamId, setSelectedTeamId] = useState<string | undefined>()
  const [createdNewTeam, setCreatedNewTeam] = useState<boolean>(false)
  const [confirming, setConfirming] = useState<boolean>(false)
  const [joinMessage, setJoinMessage] = useState<string>('')

  // If the user selected a team to which they were invited, the corresponding invitation will be stored in state here.
  // const [selectedMembershipInvitation, setSelectedMembershipInvitation] =
  //   useState<MembershipInvitation | undefined>()

  const createTeamRef = useRef<CreateChallengeTeamHandle>(null)

  // Use the existing accessToken if present to get the current user's profile / userId
  const { data: userProfile, isLoading: isLoadingUserProfile } =
    useGetCurrentUserProfile({
      enabled: isLoggedIn,
    })
  // Retrieve the challenge associated with the projectId passed through props
  const { data: challenge, isLoading: isLoadingChallenge } =
    useGetEntityChallenge(projectId)

  const {
    mutate: addTeamMember,
    // isPending: addUserToTeamIsPending,
    error: addUserToTeamError,
  } = useAddMemberToTeam()

  // Determine whether the given user belongs to any submission teams
  const { data: userSubmissionTeams, error: userSubmissionTeamError } =
    useGetUserSubmissionTeams(challenge?.id!, 1, 0, {
      enabled: Boolean(isLoggedIn && challenge),
    })

  const isMemberOfSubmissionTeam =
    userSubmissionTeams && userSubmissionTeams.results.length > 0

  const {
    data: selectedTeamMembershipStatus,
    error: selectedTeamMembershipStatusError,
  } = useGetMembershipStatus(selectedTeamId!, String(userProfile?.ownerId), {
    enabled: isLoggedIn && !!selectedTeamId && !!userProfile,
  })

  /*************************
   * React to state changes
   ************************/

  const canUserJoinTeam = useMemo(() => {
    if (selectedTeamId && selectedTeamMembershipStatus) {
      if (selectedTeamMembershipStatus.isMember) {
        // If the user is already a member of a team in this list, then our cache is out of date
        // User cannot join this team, disable Next button
        console.error(
          `Attempted to select registered team: ${selectedTeamMembershipStatus.teamId} for the challenge when already a member. This should never happen. Invalidating the cache to try to resolve this.`,
        )
        queryClient.invalidateQueries().then(() => {
          setSelectedTeamId(undefined)
        })
        return {
          canJoin: false,
        }
      }

      if (selectedTeamMembershipStatus.hasOpenRequest) {
        // User already has an open request to join this team, disable Next button to avoid request spamming
        return {
          canJoin: false,
        }
      }

      if (selectedTeamMembershipStatus.hasOpenInvitation) {
        return {
          canJoin: true,
          canAcceptInvitation: true,
        }
      }

      if (
        selectedTeamMembershipStatus.canJoin ||
        selectedTeamMembershipStatus.membershipApprovalRequired
      ) {
        /**
         * User has an open invitation, or the team is public, or
         * user may request to join. Enable Next button.
         */
        return {
          canJoin: true,
          needsApproval:
            selectedTeamMembershipStatus.membershipApprovalRequired,
        }
      }
    }
    return {
      canJoin: false,
    }
  }, [selectedTeamId, selectedTeamMembershipStatus, queryClient])

  // React to change in step
  const handleStepChange = useCallback((value?: StepsEnum) => {
    if (!value || !steps[value]) return

    switch (value) {
      case StepsEnum.SELECT_YOUR_CHALLENGE_TEAM:
        setCreatedNewTeam(false)
        break
    }
    setStep(steps[value])
  }, [])

  // JOIN_REQUEST_FORM: Add user to an existing public team or a team the user has an open invitation to
  const addUserToTeam = useCallback(
    (teamId = selectedTeamId): void => {
      if (!teamId || !userProfile || !accessToken) return
      setConfirming(true)
      addTeamMember({
        teamId,
        userId: userProfile.ownerId,
      })
      handleStepChange(StepsEnum.REGISTRATION_SUCCESSFUL)
      setConfirming(false)
    },
    [accessToken, addTeamMember, handleStepChange, selectedTeamId, userProfile],
  )

  const {
    nextEnabled: isNextEnabled,
    confirmEnabled: isConfirmEnabled,
    confirmButtonText,
  } = useMemo((): Partial<Step> => {
    switch (step.id) {
      case StepsEnum.SELECT_YOUR_CHALLENGE_TEAM:
        if (canUserJoinTeam.canJoin) {
          if (canUserJoinTeam.needsApproval) {
            return {
              nextEnabled: true,
              confirmEnabled: false,
              confirmButtonText: 'Request to Join Team',
            }
          } else if (canUserJoinTeam.canAcceptInvitation) {
            return {
              nextEnabled: false,
              confirmEnabled: true,
              confirmButtonText: 'Accept Invitation to Join Team',
            }
          }
          return {
            onConfirm: () => {
              addUserToTeam()
              return
            },
            nextEnabled: false,
            confirmEnabled: true,
            confirmButtonText: 'Join Team',
          }
        } else {
          return {
            nextEnabled: false,
            confirmEnabled: false,
            confirmButtonText: 'Confirm',
          }
        }
      case StepsEnum.JOIN_REQUEST_FORM:
        break
      case StepsEnum.JOIN_REQUEST_SENT:
        break
      case StepsEnum.CREATE_NEW_TEAM:
        break
      case StepsEnum.REGISTRATION_SUCCESSFUL:
        break
    }
    return {
      nextEnabled: false,
      confirmEnabled: false,
      confirmButtonText: 'Confirm',
    }
  }, [
    addUserToTeam,
    canUserJoinTeam.canAcceptInvitation,
    canUserJoinTeam.canJoin,
    canUserJoinTeam.needsApproval,
    step.id,
  ])

  /************************
   * Form update handlers
   * *********************/

  // SELECT_YOUR_CHALLENGE_TEAM: user has selected an existing challenge team from the table
  const handleSelectTeam = (teamId?: string) => {
    // Setting selectedTeam will trigger the useMembershipStatus hook
    setSelectedTeamId(teamId)
  }

  /************************
   * Step confirm handlers
   * *********************/

  const { mutate: requestToJoinTeam } = useRequestToJoinTeam({
    onSuccess: () => {
      setStep(steps[StepsEnum.JOIN_REQUEST_SENT])
    },
  })

  // JOIN_REQUEST_FORM: User is requesting to join an existing non-public challenge team
  const handleRequestMembership = useCallback(() => {
    if (userProfile && selectedTeamId) {
      setStep({ ...step, nextEnabled: false })
      requestToJoinTeam({
        teamId: selectedTeamId,
        userId: userProfile.ownerId,
        message: joinMessage,
        expiresOn: undefined,
      })
    }
  }, [joinMessage, requestToJoinTeam, selectedTeamId, step, userProfile])

  const hide = useCallback(() => {
    setCreatedNewTeam(false)
    setSelectedTeamId(undefined)
    onClose()
  }, [onClose])

  const onConfirmHandlerMap: Record<string, () => void | Promise<void>> =
    useMemo(
      () => ({
        CREATE_NEW_TEAM: createTeamRef.current
          ? createTeamRef.current.submit
          : noop,
        JOIN_REQUEST_FORM: handleRequestMembership,
        JOIN_REQUEST_SENT: () => {
          hide()
        },
      }),
      [createTeamRef, handleRequestMembership, hide],
    )

  const isLoading = isLoadingUserProfile || isLoadingChallenge

  // Determine modal content based on step.id
  const content = useMemo(() => {
    if (!isLoggedIn) {
      return (
        <Alert severity={'error'}>
          <SignInPrompt />
        </Alert>
      )
    }

    if (isMemberOfSubmissionTeam) {
      return (
        <Alert severity={'error'}>
          <Typography>
            You are already a member of a registered submission team for this
            Challenge.
          </Typography>
        </Alert>
      )
    }

    switch (step.id) {
      case StepsEnum.SELECT_YOUR_CHALLENGE_TEAM:
        return (
          challenge &&
          !isMemberOfSubmissionTeam && (
            <SelectChallengeTeam
              challengeId={challenge.id}
              onCreateTeam={() => handleStepChange(StepsEnum.CREATE_NEW_TEAM)}
              selectedTeamId={selectedTeamId}
              onSelectTeam={handleSelectTeam}
            />
          )
        )
      // case StepsEnum.ACCEPT_INVITATION:
      //   return <AcceptInvitation membershipInvitation={membershipInvitation} />
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
            ref={createTeamRef}
            challengeId={challenge?.id!}
            onCanSubmitChange={canSubmit => {
              setStep(step => ({
                ...step,
                nextEnabled: canSubmit,
                confirmEnabled: canSubmit,
              }))
            }}
            onFinished={teamId => {
              setCreatedNewTeam(true)
              setSelectedTeamId(teamId)
              setStep(steps.REGISTRATION_SUCCESSFUL)
            }}
          />
        )
      default:
        console.error(`No content was found for the given step.id ${step.id}`)
        return <></>
    }
  }, [
    challenge,
    createTeamRef,
    createdNewTeam,
    handleStepChange,
    isLoggedIn,
    isMemberOfSubmissionTeam,
    selectedTeamId,
    step.id,
  ])

  const onConfirmHandler = useMemo(
    () => (onConfirmHandlerMap[step.id] ? onConfirmHandlerMap[step.id] : noop),
    [onConfirmHandlerMap, step.id],
  )

  const errorMessage =
    addUserToTeamError?.message ||
    selectedTeamMembershipStatusError?.message ||
    userSubmissionTeamError?.message

  return (
    <StepperDialog
      errorMessage={errorMessage}
      onCancel={hide}
      onStepChange={handleStepChange as (arg: string) => void}
      open={isShowingModal}
      onConfirm={onConfirmHandler}
      confirming={confirming}
      step={{
        ...step,
        nextEnabled: isNextEnabled,
        confirmEnabled: isConfirmEnabled,
        confirmButtonText: confirmButtonText,
      }}
      content={<SynapseErrorBoundary>{content}</SynapseErrorBoundary>}
      loading={isLoading}
    />
  )
}

export default ChallengeTeamWizard
