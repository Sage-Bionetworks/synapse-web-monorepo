import { Alert, Button, Box } from '@mui/material'
import React, { useState } from 'react'
import { DialogBase } from './DialogBase'

export type Step = {
  title: string
  content: React.ReactElement
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

  const isFirstStep = stepNumber === 0
  const isLastStep = stepNumber === Object.keys(steps).length - 1

  const handleStepChange = (value: number) => {
    setStepNumber(stepNumber + value)
    setStep(steps[stepNumber + value])
  }

  const dialogContent = (
    <Box display="flex" flexDirection="column" gap={1}>
      {step.content}
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
    </Box>
  )

  return (
    <DialogBase
      actions={
        <>
          <Button variant="outlined" onClick={() => onCancel()}>
            {cancelButtonText}
          </Button>
          {!isFirstStep && !isLastStep && (
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleStepChange(-1)}
            >
              {backButtonText}
            </Button>
          )}
          <Button
            variant="contained"
            color="primary"
            onClick={() => (isLastStep ? onConfirm() : handleStepChange(1))}
          >
            {isLastStep ? confirmButtonText : nextStepButtonText}
          </Button>
        </>
      }
      content={dialogContent}
      onCancel={onCancel}
      open={open}
      title={step.title}
    />
  )
}
