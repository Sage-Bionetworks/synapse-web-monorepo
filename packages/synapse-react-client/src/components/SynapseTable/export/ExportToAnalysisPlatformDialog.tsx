import {
  Alert,
  Box,
  Button,
  ButtonProps,
  Tooltip,
  Typography,
} from '@mui/material'
import { useCallback, useMemo, useState } from 'react'
import DialogBase from '@/react-ui/components/DialogBase'
import { useQueryVisualizationContext } from '../../QueryVisualizationWrapper/QueryVisualizationContext'
import WizardChoiceButton from '../../WizardChoiceButton/WizardChoiceButton'
import WizardChoiceButtonGroup from '../../WizardChoiceButton/WizardChoiceButtonGroup'
import {
  EXTERNAL_ANALYSIS_PLATFORMS,
  ExternalAnalysisPlatform,
  PlatformInstructionProps,
} from './ExternalAnalysisPlatformsConstants'
import ExternalPlatformActionsRequiredPrecheck from './ExternalPlatformActionsRequiredPrecheck'
import { ExternalPlatformDisclaimer } from './ExternalPlatformDisclaimer'

enum ExportToAnalysisPlatformDialogStep {
  /* Basic introduction to the feature */
  PREAMBLE_INSTRUCTIONS,
  /* User must choose one of the available platforms */
  SELECT_PLATFORM,
  /* Instructions specific to the selected platform are displayed */
  PLATFORM_INSTRUCTIONS,
  /* Check that the user meets all requirements on the selected data, if so, can send to the external platform */
  CHECK_REQUIREMENTS_AND_SUBMIT,
}

type ExportToAnalysisPlatformDialogActionsProps = {
  onCancel: () => void
  step: ExportToAnalysisPlatformDialogStep
  setStep: (step: ExportToAnalysisPlatformDialogStep) => void
  selectedPlatform: ExternalAnalysisPlatform | null
  /* Props for the final confirm button, where the behavior varies based on selection and may be disabled depending on selected file permissions */
  sendToPlatformConfirmButtonProps: ButtonProps
}

/**
 * Dialog actions for the ExportToAnalysisPlatformDialog
 */
function ExportToAnalysisPlatformDialogActions(
  props: ExportToAnalysisPlatformDialogActionsProps,
) {
  const { step, setStep, onCancel, sendToPlatformConfirmButtonProps } = props
  switch (step) {
    case ExportToAnalysisPlatformDialogStep.PREAMBLE_INSTRUCTIONS:
      return (
        <>
          <Button variant={'outlined'} onClick={onCancel}>
            Cancel
          </Button>
          <Button
            variant={'contained'}
            onClick={() => {
              setStep(ExportToAnalysisPlatformDialogStep.SELECT_PLATFORM)
            }}
          >
            Continue
          </Button>
        </>
      )
    case ExportToAnalysisPlatformDialogStep.SELECT_PLATFORM:
      return (
        <>
          <Button
            variant={'outlined'}
            onClick={() =>
              setStep(ExportToAnalysisPlatformDialogStep.PREAMBLE_INSTRUCTIONS)
            }
            sx={{ mr: 'auto' }}
          >
            Back
          </Button>
          <Button variant={'outlined'} onClick={onCancel}>
            Cancel
          </Button>
          <Button
            variant={'contained'}
            disabled={!props.selectedPlatform}
            onClick={() => {
              setStep(ExportToAnalysisPlatformDialogStep.PLATFORM_INSTRUCTIONS)
            }}
          >
            Continue
          </Button>
        </>
      )
    case ExportToAnalysisPlatformDialogStep.PLATFORM_INSTRUCTIONS:
      return (
        <>
          <Button
            variant={'outlined'}
            onClick={() =>
              setStep(ExportToAnalysisPlatformDialogStep.SELECT_PLATFORM)
            }
            sx={{ mr: 'auto' }}
          >
            Back
          </Button>
          <Button variant={'outlined'} onClick={onCancel}>
            Cancel
          </Button>
          <Button
            variant={'contained'}
            onClick={() => {
              setStep(
                ExportToAnalysisPlatformDialogStep.CHECK_REQUIREMENTS_AND_SUBMIT,
              )
            }}
          >
            Continue
          </Button>
        </>
      )
    case ExportToAnalysisPlatformDialogStep.CHECK_REQUIREMENTS_AND_SUBMIT:
      return (
        <>
          <Button
            variant={'outlined'}
            onClick={() =>
              setStep(ExportToAnalysisPlatformDialogStep.SELECT_PLATFORM)
            }
            sx={{ mr: 'auto' }}
          >
            Back
          </Button>
          <Button variant={'outlined'} onClick={onCancel}>
            Cancel
          </Button>
          <Button variant={'contained'} {...sendToPlatformConfirmButtonProps} />
        </>
      )
  }
}

export type ExportToAnalysisPlatformDialogProps = {
  /* Props used to configure the instructions components */
  platformInstructionProps: PlatformInstructionProps
}

/**
 * Dialog used to guide the user through sending data to an external analysis platform. Currently configured to work with
 * the table query data and selection stored in the QueryContext.
 */
export default function ExportToAnalysisPlatformDialog(
  props: ExportToAnalysisPlatformDialogProps,
) {
  const { platformInstructionProps } = props

  const [step, setStep] = useState(
    ExportToAnalysisPlatformDialogStep.PREAMBLE_INSTRUCTIONS,
  )
  const [selectedPlatform, setSelectedPlatform] =
    useState<ExternalAnalysisPlatform | null>(null)

  const [
    sendToPlatformConfirmButtonProps,
    setSendToPlatformConfirmButtonProps,
  ] = useState<ButtonProps>({})

  const {
    isShowingExportToAnalysisPlatformModal,
    setIsShowingExportToAnalysisPlatformModal,
    enabledExternalAnalysisPlatforms,
  } = useQueryVisualizationContext()

  // The disclaimer should be shown every time.
  const [isShowingDisclaimerPage, setIsShowingDisclaimerPage] = useState(true)

  const showDisclaimer =
    isShowingExportToAnalysisPlatformModal && isShowingDisclaimerPage
  const showExport =
    isShowingExportToAnalysisPlatformModal && !isShowingDisclaimerPage

  const dialogTitle = `Send to ${
    selectedPlatform &&
    [
      ExportToAnalysisPlatformDialogStep.PLATFORM_INSTRUCTIONS,
      ExportToAnalysisPlatformDialogStep.CHECK_REQUIREMENTS_AND_SUBMIT,
    ].includes(step)
      ? EXTERNAL_ANALYSIS_PLATFORMS[selectedPlatform].name
      : 'Analysis Platform'
  }`

  const onCancelOrExportComplete = useCallback(() => {
    setIsShowingDisclaimerPage(true)
    setIsShowingExportToAnalysisPlatformModal(false)
    setSelectedPlatform(null)
    setStep(ExportToAnalysisPlatformDialogStep.PREAMBLE_INSTRUCTIONS)
  }, [setIsShowingExportToAnalysisPlatformModal])

  const dialogContent = useMemo(() => {
    switch (step) {
      case ExportToAnalysisPlatformDialogStep.PREAMBLE_INSTRUCTIONS:
        return (
          <>
            {/* Allowed platform logos */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 2,
                alignItems: 'center',
                pb: 2,
              }}
            >
              {enabledExternalAnalysisPlatforms.map(platform => {
                const { name, Logo } = EXTERNAL_ANALYSIS_PLATFORMS[platform]
                return (
                  <Tooltip key={platform} title={name}>
                    <Logo width={'60px'} />
                  </Tooltip>
                )
              })}
            </Box>
            <Typography variant={'headline3'} gutterBottom>
              Instructions
            </Typography>
            <Typography variant={'body1'} gutterBottom>
              This portal supports sending data to third-party platforms for
              analysis, once all requirements for data access (if any) have been
              met. We currently support the above platforms.
            </Typography>
            <Typography variant={'body1'}>
              The following screens will help guide you through sending data
              from this portal into analysis platforms. Press "Continue" to get
              started.
            </Typography>
          </>
        )
      case ExportToAnalysisPlatformDialogStep.SELECT_PLATFORM:
        return (
          <WizardChoiceButtonGroup>
            {enabledExternalAnalysisPlatforms.map(platform => {
              const { name, description, Logo } =
                EXTERNAL_ANALYSIS_PLATFORMS[platform]
              return (
                <WizardChoiceButton
                  key={platform}
                  title={name}
                  description={description}
                  icon={<Logo width={'60px'} />}
                  onClick={() => {
                    setSelectedPlatform(platform)
                  }}
                  selected={selectedPlatform === platform}
                />
              )
            })}
          </WizardChoiceButtonGroup>
        )
      case ExportToAnalysisPlatformDialogStep.PLATFORM_INSTRUCTIONS: {
        const { PlatformInstructions } =
          EXTERNAL_ANALYSIS_PLATFORMS[selectedPlatform!]
        if (PlatformInstructions) {
          return <PlatformInstructions {...platformInstructionProps} />
        }
        console.error(
          `No instructions component found for platform: ${selectedPlatform}`,
        )
        // fallback error message, but this should never happen in production
        return (
          <Alert severity="error">
            <Typography variant={'body1'}>
              {EXTERNAL_ANALYSIS_PLATFORMS[selectedPlatform!].name} has not been
              configured for data export on this site.
            </Typography>
          </Alert>
        )
      }
      case ExportToAnalysisPlatformDialogStep.CHECK_REQUIREMENTS_AND_SUBMIT:
        return (
          <ExternalPlatformActionsRequiredPrecheck
            selectedPlatform={selectedPlatform!}
            onConfirmButtonPropsChange={setSendToPlatformConfirmButtonProps}
            onSuccessfulExport={onCancelOrExportComplete}
          />
        )
    }
  }, [
    enabledExternalAnalysisPlatforms,
    onCancelOrExportComplete,
    platformInstructionProps,
    selectedPlatform,
    step,
  ])

  return (
    <div>
      <ExternalPlatformDisclaimer
        showDisclaimer={showDisclaimer}
        onConfirm={() => {
          setIsShowingDisclaimerPage(false)
        }}
        onCancel={onCancelOrExportComplete}
      />
      <DialogBase
        open={showExport}
        title={dialogTitle}
        content={dialogContent}
        actions={
          <ExportToAnalysisPlatformDialogActions
            step={step}
            setStep={setStep}
            selectedPlatform={selectedPlatform}
            onCancel={onCancelOrExportComplete}
            sendToPlatformConfirmButtonProps={sendToPlatformConfirmButtonProps}
          />
        }
        onCancel={onCancelOrExportComplete}
        maxWidth="md"
      />
    </div>
  )
}
