import SynapseClient from '@/synapse-client'
import { useSynapseContext } from '@/utils'
import { Typography } from '@mui/material'
import { EntityType } from '@sage-bionetworks/synapse-client'
import {
  DockerCommit,
  EvaluationSubmission,
  TeamSubmissionEligibility,
} from '@sage-bionetworks/synapse-types'
import { useState } from 'react'
import StepperDialog from '../StepperDialog'
import { Step } from '../StepperDialog/StepperDialog'
import { displayToast } from '../ToastMessage'
import { EntityItem } from './ChallengeSubmission'
import EvaluationQueueList from './EvaluationQueueList'
import SubmissionCommitList from './SubmissionCommitList'

enum StepsEnum {
  SELECT_COMMIT = 'SELECT_COMMIT',
  SELECT_EVALUATION = 'SELECT_EVALUATION',
  SUBMISSION_SUCCESS = 'SUBMISSION_SUCCESS',
}
type StepKey = keyof typeof StepsEnum
type StepList<TStepId = string> = {
  [key in StepKey]: Step<TStepId>
}

const stepsDocker: StepList<StepsEnum> = {
  SELECT_COMMIT: {
    id: StepsEnum.SELECT_COMMIT,
    title: 'Select Commit for Submission',
    nextStep: StepsEnum.SELECT_EVALUATION,
    nextEnabled: false,
  },
  SELECT_EVALUATION: {
    id: StepsEnum.SELECT_EVALUATION,
    title: 'Select Evaluation Queue',
    previousStep: StepsEnum.SELECT_COMMIT,
    confirmStep: StepsEnum.SUBMISSION_SUCCESS,
    confirmButtonText: 'Submit',
  },
  SUBMISSION_SUCCESS: {
    id: StepsEnum.SUBMISSION_SUCCESS,
    title: 'Submission Successful!',
    confirmButtonText: 'Close',
    confirmEnabled: true,
  },
}

const stepsFile: StepList<StepsEnum> = {
  SELECT_COMMIT: { id: StepsEnum.SELECT_COMMIT, title: '' },
  SELECT_EVALUATION: {
    id: StepsEnum.SELECT_EVALUATION,
    title: 'Select Evaluation Queue',
    confirmStep: StepsEnum.SUBMISSION_SUCCESS,
    confirmButtonText: 'Submit',
  },
  SUBMISSION_SUCCESS: {
    id: StepsEnum.SUBMISSION_SUCCESS,
    title: 'Submission Successful!',
    confirmButtonText: 'Close',
    confirmEnabled: true,
  },
}

const getSteps = (
  entityType: typeof EntityType.dockerrepo | typeof EntityType.file,
) => {
  return entityType === EntityType.dockerrepo ? stepsDocker : stepsFile
}

type ChallengeSubmissionStepperProps = {
  projectId: string
  userId: string
  teamId: string
  entity: EntityItem
  entityType: typeof EntityType.dockerrepo | typeof EntityType.file
  isShowingModal: boolean
  onClose: () => void
}

function ChallengeSubmissionStepper({
  projectId,
  userId,
  teamId,
  entity,
  entityType,
  isShowingModal,
  onClose,
}: ChallengeSubmissionStepperProps) {
  const { accessToken } = useSynapseContext()
  const steps = getSteps(entityType)
  const initialStep =
    entityType === EntityType.dockerrepo
      ? steps.SELECT_COMMIT
      : steps.SELECT_EVALUATION
  const [step, setStep] = useState<Step<StepsEnum>>(initialStep)
  const [errorMessage, setErrorMessage] = useState<string>()
  const [selectedCommit, setSelectedCommit] = useState<DockerCommit>()

  const [submissionName, setSubmissionName] = useState<string>('')
  const [selectedEval, setSelectedEval] = useState<string | undefined>()
  const [confirming, setConfirming] = useState<boolean>(false)

  const hide = () => {
    setErrorMessage(undefined)
    setSelectedCommit(undefined)
    setSubmissionName('')
    setSelectedEval(undefined)
    setConfirming(false)
    onClose()
    setStep(initialStep)
  }

  function handleStepChange(value?: StepsEnum) {
    if (!value || !steps[value]) return
    setErrorMessage(undefined)
    setStep(steps[value])
  }

  async function confirmEligibility() {
    if (!selectedEval) return setErrorMessage('Please select an evaluation.')
    try {
      return await SynapseClient.getSubmissionEligibility(
        selectedEval,
        teamId,
        accessToken,
      )
    } catch (err) {
      return setErrorMessage(err.message)
    }
  }

  async function submitForEvaluation(eligibility: TeamSubmissionEligibility) {
    if (!entity.id || (entityType === EntityType.dockerrepo && !selectedCommit))
      return setErrorMessage('Error: Invalid entity or commit.')

    const contributors = eligibility.membersEligibility
      .filter(
        member =>
          !member.hasConflictingSubmission &&
          member.isEligible &&
          !member.isQuotaFilled &&
          member.isRegistered,
      )
      .map(member => {
        return { principalId: member.principalId.toString() }
      })

    const submission: EvaluationSubmission = {
      userId: userId,
      evaluationId: selectedEval!,
      entityId: entity.id,
      versionNumber: entity.versionNumber ?? -1,
      teamId: teamId,
      contributors,
    }
    if (entityType === EntityType.dockerrepo) {
      submission.dockerRepositoryName = entity.repositoryName
      submission.dockerDigest = selectedCommit!.digest
    }

    if (submissionName !== '') submission['name'] = submissionName

    try {
      await SynapseClient.submitToEvaluation(
        accessToken,
        submission,
        entity.etag!,
        eligibility.eligibilityStateHash,
      )
      displayToast('Submitted successfully!', 'success')
      hide()
    } catch (e) {
      setErrorMessage(e.message)
    }
  }

  const onConfirmHandler = async () => {
    const eligibility = await confirmEligibility()
    if (eligibility) {
      await submitForEvaluation(eligibility)
    }
  }

  const onCommitChanged = (value: DockerCommit) => {
    setSelectedCommit(value)
    setStep({ ...step, nextEnabled: true })
  }

  function stepperContent() {
    switch (step.id) {
      case StepsEnum.SELECT_COMMIT:
        return (
          <SubmissionCommitList
            repository={entity}
            selectedCommit={selectedCommit}
            onCommitChanged={onCommitChanged}
          />
        )
        break
      case StepsEnum.SELECT_EVALUATION:
        return (
          <EvaluationQueueList
            projectId={projectId}
            submissonName={submissionName}
            onSubmissionNameChange={setSubmissionName}
            selectedEvaluation={selectedEval}
            onEvaluationChange={value => {
              setStep({ ...step, confirmEnabled: true })
              setSelectedEval(value)
            }}
          />
        )
      case StepsEnum.SUBMISSION_SUCCESS:
        return (
          <Typography variant="body1" sx={{ fontSize: '16px' }}>
            Your submission will be scored and results posted to the Challenge
            Leaderboard.
          </Typography>
        )
      default:
        return <></>
    }
  }

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
      content={stepperContent()}
      loading={false}
    />
  )
}

export default ChallengeSubmissionStepper
