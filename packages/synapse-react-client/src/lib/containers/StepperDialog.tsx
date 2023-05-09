import { Alert, Button, Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { DialogBase } from './DialogBase'
import { useSynapseContext } from '../utils/SynapseContext'
import { BackendDestinationEnum } from '../utils/functions/getEndpoint'
import { doGet } from '../utils/SynapseClient'

type ChildStep = {
  title: string
  content: React.ReactElement
  onConfirm?: () => void
  onConfirmText: string
}

export type Step = {
  title: string
  content: React.ReactElement
  children: ChildStep
}

type ChildSteps = {
  [key: number]: ChildStep
}

export type Steps = {
  [key: number]: Step
}

export type StepperDialogProps = {
  backButtonText: string
  cancelButtonText: string
  confirmButtonText: string
  errorMessage: string | undefined
  nextStepButtonText: string
  onCancel: () => void
  onConfirm: () => void
  open: boolean
  steps: Steps
  children: ChildSteps
}

/**
 * A stepper dialog built using MUI components.
 */
export const StepperDialog: React.FunctionComponent<StepperDialogProps> = ({
  backButtonText,
  cancelButtonText,
  confirmButtonText,
  nextStepButtonText,
  errorMessage,
  onCancel,
  onConfirm,
  open,
  steps,
}) => {
  const [stepNumber, setStepNumber] = useState<number>(0)
  const [step, setStep] = useState<Step>(steps[stepNumber])
  const { accessToken } = useSynapseContext()

  useEffect(() => {
    if (!accessToken) {
      console.log('NO ACCESS TOKEN')
      return
    }

    const testApi = async () => {
      const userProfile = `/repo/v1/userProfile`
      const projectsByUser = `/repo/v1/projects/user/3471514`
      const challengeByProjectId = `/repo/v1/entity/syn28590455/challenge`
      const challengeTeamsByChallengeId = `/repo/v1/challenge/4524/challengeTeam`
      const teams = `/repo/v1/teams?fragment=kevin-grayson` // ?fragment=kevin-grayson    <<< optional
      const teamByTeamId = `/repo/v1/team/3471520`
      const data = await doGet(
        teamByTeamId,
        accessToken,
        BackendDestinationEnum.REPO_ENDPOINT,
      )
      console.log('DATA', data)
    }

    testApi()
  }, [])

  const isFirstStep = stepNumber === 0
  const isLastStep = stepNumber === Object.keys(steps).length - 1

  const handleStepChange = (value: number) => {
    setStepNumber(stepNumber + value)
    setStep(steps[stepNumber + value])
  }

  const dialogContent = (
    <Box display="flex" flexDirection="column" gap={1}>
      <>
        {step.children || step.content}
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      </>
    </Box>
  )

  const isReadyToConfirm = isLastStep && confirmButtonText
  const shouldShowNext = !isLastStep && nextStepButtonText

  return (
    <DialogBase
      actions={
        <>
          {cancelButtonText && (
            <Button variant="outlined" onClick={() => onCancel()}>
              {cancelButtonText}
            </Button>
          )}
          {backButtonText && !isFirstStep && !isLastStep && (
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleStepChange(-1)}
            >
              {backButtonText}
            </Button>
          )}
          {(isReadyToConfirm || shouldShowNext) && (
            <Button
              variant="contained"
              color="primary"
              onClick={() => (isLastStep ? onConfirm() : handleStepChange(1))}
            >
              {isReadyToConfirm ? confirmButtonText : nextStepButtonText}
            </Button>
          )}
        </>
      }
      content={dialogContent}
      onCancel={onCancel}
      open={open}
      title={step.title}
    />
  )
}
