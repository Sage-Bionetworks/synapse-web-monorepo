import React, { useCallback, useMemo, useRef, useState } from 'react'
import {
  CreateChallengeTeam,
  CreateChallengeTeamHandle,
} from './CreateChallengeTeam'
import { SelectChallengeTeam } from './SelectChallengeTeam'
import { RegistrationSuccessful } from './RegistrationSuccessful'
import {
  MembershipRequestForm,
  MembershipRequestFormHandle,
} from './MembershipRequestForm'
import { useSynapseContext } from '../../utils'
import {
  useAddMemberToTeam,
  useGetCurrentUserProfile,
  useGetEntityChallenge,
  useGetMembershipStatus,
  useGetUserSubmissionTeams,
} from '../../synapse-queries'
import { Alert, Box, Button, Tooltip, Typography } from '@mui/material'
import { SignInPrompt, SynapseErrorBoundary } from '../error/ErrorBanner'
import { noop } from 'lodash-es'
import { DialogBase } from '../DialogBase'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'
import {
  AcceptMembershipInvitationButton,
  OpenMembershipInvitation,
} from './OpenMembershipInvitation'

enum ChallengeTeamWizardStep {
  SELECT_YOUR_CHALLENGE_TEAM = 'SELECT_YOUR_CHALLENGE_TEAM',
  ACCEPT_INVITATION = 'ACCEPT_INVITATION',
  JOIN_REQUEST_FORM = 'JOIN_REQUEST_FORM',
  JOIN_REQUEST_SENT = 'JOIN_REQUEST_SENT',
  CREATE_NEW_TEAM = 'CREATE_NEW_TEAM',
  REGISTRATION_SUCCESSFUL = 'REGISTRATION_SUCCESSFUL',
}

function getStepDialogTitle(step: ChallengeTeamWizardStep) {
  switch (step) {
    case ChallengeTeamWizardStep.SELECT_YOUR_CHALLENGE_TEAM:
      return 'Select Your Challenge Team'
    case ChallengeTeamWizardStep.ACCEPT_INVITATION:
      return 'Invitation to Join Team'
    case ChallengeTeamWizardStep.JOIN_REQUEST_FORM:
      return 'Request Team Membership'
    case ChallengeTeamWizardStep.JOIN_REQUEST_SENT:
      return 'Request Sent'
    case ChallengeTeamWizardStep.CREATE_NEW_TEAM:
      return 'Create Team'
    case ChallengeTeamWizardStep.REGISTRATION_SUCCESSFUL:
      return 'Registration Successful!'
  }
}

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
  const isLoggedIn = Boolean(accessToken)

  const [step, setStep] = useState<ChallengeTeamWizardStep>(
    ChallengeTeamWizardStep.SELECT_YOUR_CHALLENGE_TEAM,
  )
  const [selectedTeamId, setSelectedTeamId] = useState<string | undefined>()

  // Tracks if the form to create a new team is valid, so the wizard can control the `disabled` status of the confirm button
  const [canCreateNewTeam, setCanCreateNewTeam] = useState(false)
  // true if the user has created a new team to register for the challenge
  const [hasCreatedNewTeam, setHasCreatedNewTeam] = useState<boolean>(false)

  const membershipRequestFormRef = useRef<MembershipRequestFormHandle>(null)
  const createTeamRef = useRef<CreateChallengeTeamHandle>(null)

  const { data: userProfile, isLoading: isLoadingUserProfile } =
    useGetCurrentUserProfile({
      enabled: isLoggedIn,
    })

  // Retrieve the challenge associated with the projectId passed through props
  const { data: challenge, isLoading: isLoadingChallenge } =
    useGetEntityChallenge(projectId)

  const {
    mutateAsync: addTeamMember,
    isPending: addMemberToTeamIsPending,
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
    isLoading: selectedTeamMembershipStatusIsLoading,
    error: selectedTeamMembershipStatusError,
  } = useGetMembershipStatus(selectedTeamId!, String(userProfile?.ownerId), {
    enabled: isLoggedIn && !!selectedTeamId && !!userProfile,
  })

  const addUserToTeam = useCallback(async () => {
    if (!selectedTeamId || !userProfile) return
    await addTeamMember({
      teamId: selectedTeamId,
      userId: userProfile.ownerId,
    })
    setStep(ChallengeTeamWizardStep.REGISTRATION_SUCCESSFUL)
  }, [addTeamMember, setStep, selectedTeamId, userProfile])

  const hide = useCallback(() => {
    setHasCreatedNewTeam(false)
    setSelectedTeamId(undefined)
    onClose()
  }, [onClose])

  const isLoading = isLoadingUserProfile || isLoadingChallenge

  const backButton = useMemo(() => {
    switch (step) {
      case ChallengeTeamWizardStep.SELECT_YOUR_CHALLENGE_TEAM:
      case ChallengeTeamWizardStep.JOIN_REQUEST_SENT:
      case ChallengeTeamWizardStep.REGISTRATION_SUCCESSFUL:
        // Cannot go back from these steps
        return <></>
      case ChallengeTeamWizardStep.ACCEPT_INVITATION:
      case ChallengeTeamWizardStep.JOIN_REQUEST_FORM:
      case ChallengeTeamWizardStep.CREATE_NEW_TEAM:
      default:
        // All the other steps go back to team selection
        return (
          <Button
            variant={'outlined'}
            onClick={() => {
              setStep(ChallengeTeamWizardStep.SELECT_YOUR_CHALLENGE_TEAM)
              setSelectedTeamId(undefined)
            }}
          >
            Back
          </Button>
        )
    }
  }, [step])

  const closeButton = useMemo(() => {
    return (
      <Button
        variant={'contained'}
        onClick={() => {
          onClose()
        }}
      >
        Close
      </Button>
    )
  }, [onClose])

  // Determine modal content based on step.id
  const { actions = <></>, content = <></> } = useMemo(() => {
    if (!isLoggedIn) {
      return {
        content: (
          <Alert severity={'error'}>
            <SignInPrompt />
          </Alert>
        ),
      }
    }

    if (isMemberOfSubmissionTeam) {
      return {
        content: (
          <Alert severity={'error'}>
            <Typography>
              You are already a member of a registered submission team for this
              Challenge.
            </Typography>
          </Alert>
        ),
      }
    }

    switch (step) {
      case ChallengeTeamWizardStep.SELECT_YOUR_CHALLENGE_TEAM: {
        let buttonText = 'Join Team'
        let disableJoiningSelectedTeam = false
        let buttonOnClickBehavior: () => void = noop
        let buttonTooltip = ''
        if (
          selectedTeamMembershipStatus &&
          selectedTeamMembershipStatus.hasOpenInvitation
        ) {
          // The user has been invited to join the selected team
          buttonText = 'View Invitation to Join Team'
          buttonOnClickBehavior = () => {
            setStep(ChallengeTeamWizardStep.ACCEPT_INVITATION)
          }
        } else if (
          selectedTeamMembershipStatus &&
          selectedTeamMembershipStatus.hasOpenRequest
        ) {
          // User already has an open request to join the selected team, disable button to avoid request spamming
          buttonText = 'Join Request Pending'
          disableJoiningSelectedTeam = true
          buttonTooltip =
            'You have already submitted a request to join this team.'
        } else if (
          selectedTeamMembershipStatus &&
          selectedTeamMembershipStatus.membershipApprovalRequired
        ) {
          // The user has to send a request to join the selected team
          buttonText = 'Request to Join Team'
          buttonOnClickBehavior = () => {
            setStep(ChallengeTeamWizardStep.JOIN_REQUEST_FORM)
          }
        } else if (
          selectedTeamMembershipStatus &&
          selectedTeamMembershipStatus.canJoin
        ) {
          // The user can freely join the selected team
          buttonText = 'Join Team'
          buttonOnClickBehavior = () => {
            void addUserToTeam()
          }
        }
        return {
          content: challenge && !isMemberOfSubmissionTeam && (
            <SelectChallengeTeam
              challengeId={challenge.id}
              onCreateTeam={() =>
                setStep(ChallengeTeamWizardStep.CREATE_NEW_TEAM)
              }
              selectedTeamId={selectedTeamId}
              onSelectTeam={teamId => setSelectedTeamId(teamId)}
            />
          ),
          actions: (
            <>
              {backButton}
              <Tooltip title={buttonTooltip}>
                {/* Wrap button in span to show tooltip when button is disabled */}
                <span>
                  <Button
                    onClick={buttonOnClickBehavior}
                    startIcon={
                      addMemberToTeamIsPending ? <SynapseSpinner /> : undefined
                    }
                    disabled={
                      !selectedTeamId ||
                      selectedTeamMembershipStatusIsLoading ||
                      addMemberToTeamIsPending ||
                      disableJoiningSelectedTeam
                    }
                    variant={'contained'}
                  >
                    {buttonText}
                  </Button>
                </span>
              </Tooltip>
            </>
          ),
        }
      }
      case ChallengeTeamWizardStep.ACCEPT_INVITATION:
        return {
          content: <OpenMembershipInvitation teamId={selectedTeamId!} />,
          actions: (
            <>
              {backButton}
              <AcceptMembershipInvitationButton
                teamId={selectedTeamId!}
                onSuccess={() => {
                  setStep(ChallengeTeamWizardStep.REGISTRATION_SUCCESSFUL)
                }}
              />
            </>
          ),
        }
      case ChallengeTeamWizardStep.JOIN_REQUEST_FORM:
        return {
          content: (
            <MembershipRequestForm
              ref={membershipRequestFormRef}
              teamId={selectedTeamId!}
              onRequestSubmitted={() => {
                setStep(ChallengeTeamWizardStep.JOIN_REQUEST_SENT)
              }}
            />
          ),
          actions: (
            <>
              {backButton}
              <Button
                variant={'contained'}
                onClick={() => {
                  membershipRequestFormRef?.current?.submit()
                }}
              >
                Send Request
              </Button>
            </>
          ),
        }

      case ChallengeTeamWizardStep.JOIN_REQUEST_SENT:
        return {
          content: (
            <Typography variant="body1" sx={{ lineHeight: '20px' }}>
              Team Manager(s) have received your request. Check your Synapse
              email address for status of your request.
            </Typography>
          ),
          actions: (
            <>
              {backButton}
              {closeButton}
            </>
          ),
        }
      case ChallengeTeamWizardStep.REGISTRATION_SUCCESSFUL:
        return {
          content: (
            <RegistrationSuccessful
              createdNewTeam={hasCreatedNewTeam}
              teamId={selectedTeamId}
            />
          ),
          actions: (
            <>
              {backButton}
              {closeButton}
            </>
          ),
        }
      case ChallengeTeamWizardStep.CREATE_NEW_TEAM: {
        return {
          content: (
            <CreateChallengeTeam
              ref={createTeamRef}
              challengeId={challenge?.id!}
              onCanSubmitChange={canSubmit => setCanCreateNewTeam(canSubmit)}
              onFinished={teamId => {
                setHasCreatedNewTeam(true)
                setSelectedTeamId(teamId)
                setStep(ChallengeTeamWizardStep.REGISTRATION_SUCCESSFUL)
              }}
            />
          ),
          actions: (
            <>
              {backButton}
              <Button
                variant={'contained'}
                disabled={!canCreateNewTeam}
                onClick={() => {
                  createTeamRef?.current?.submit()
                }}
              >
                Create Team
              </Button>
            </>
          ),
        }
      }
    }
  }, [
    isLoggedIn,
    isMemberOfSubmissionTeam,
    step,
    selectedTeamId,
    backButton,
    closeButton,
    hasCreatedNewTeam,
    selectedTeamMembershipStatus,
    challenge,
    addMemberToTeamIsPending,
    selectedTeamMembershipStatusIsLoading,
    addUserToTeam,
    canCreateNewTeam,
  ])

  const errorMessage =
    addUserToTeamError?.message ||
    selectedTeamMembershipStatusError?.message ||
    userSubmissionTeamError?.message

  return (
    <DialogBase
      onCancel={hide}
      open={isShowingModal}
      actions={actions}
      title={getStepDialogTitle(step)}
      content={
        <SynapseErrorBoundary>
          <Box display="flex" flexDirection="column" gap={1}>
            {isLoading ? (
              <SynapseSpinner size={40} />
            ) : (
              <>
                {content}
                {errorMessage && (
                  <Alert severity={'error'}>{errorMessage}</Alert>
                )}
              </>
            )}
          </Box>
        </SynapseErrorBoundary>
      }
    />
  )
}

export default ChallengeTeamWizard
