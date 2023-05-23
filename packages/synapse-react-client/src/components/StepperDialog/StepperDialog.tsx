import { Alert, Button, Box } from '@mui/material'
import React, { useState } from 'react'
import { DialogBase } from '../DialogBase'
import { SynapseSpinner } from '../LoadingScreen'
import SpinnerButton from '../widgets/SpinnerButton'

export type Step = {
  id: string
  title: string
  cancelButtonText?: string
  // TODO: Generically type this
  onConfirm?: unknown
  confirmStep?: string
  confirmEnabled?: boolean
  confirmButtonText?: string
  previousStep?: string
  nextStep?: string
  nextEnabled?: boolean
}

export type Steps = Step[]

export type StepperDialogProps = {
  errorMessage: string | undefined
  onCancel: () => void
  onConfirm: () => void
  onStepChange: (arg: string) => void
  open: boolean
  step: Step
  content: React.ReactElement
  loading: boolean
}

/**
 * A stepper dialog built using MUI components.
 */
const StepperDialog: React.FunctionComponent<StepperDialogProps> = ({
  errorMessage,
  onCancel,
  onConfirm,
  onStepChange,
  open,
  step,
  content,
  loading,
}) => {
  const [showSpinner, setShowSpinner] = useState<boolean>(false)
  if (!step) return null

  const dialogContent = (
    <Box display="flex" flexDirection="column" gap={1}>
      <>
        {loading ? <SynapseSpinner size={40} /> : content}
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      </>
    </Box>
  )

  return (
    <DialogBase
      actions={
        <>
          {step?.cancelButtonText && (
            <Button variant="outlined" onClick={() => onCancel()}>
              {step.cancelButtonText}
            </Button>
          )}
          {step?.previousStep && (
            <Button
              variant="outlined"
              color="primary"
              onClick={() =>
                step.previousStep ? onStepChange(step.previousStep) : null
              }
            >
              Back
            </Button>
          )}
          {step?.nextStep && (
            <Button
              variant="contained"
              color="primary"
              disabled={!step.nextEnabled}
              onClick={() =>
                step.nextStep ? onStepChange(step.nextStep) : null
              }
            >
              Next
            </Button>
          )}
          {onConfirm && step?.confirmButtonText && (
            <SpinnerButton
              variant="contained"
              color="primary"
              disabled={!step.confirmEnabled}
              onClick={() => {
                setShowSpinner(true)
                onConfirm()
              }}
              showSpinner={showSpinner}
              sx={{ marginLeft: '8px' }}
            >
              {step.confirmButtonText}
            </SpinnerButton>
          )}
        </>
      }
      content={dialogContent}
      onCancel={onCancel}
      open={open}
      title={step.title}
      sx={{
        h2: { paddingTop: 0, paddingBottom: '20px' },
      }}
      contentProps={{
        sx: { overflowY: 'hidden' },
      }}
    />
  )
}

export default StepperDialog
