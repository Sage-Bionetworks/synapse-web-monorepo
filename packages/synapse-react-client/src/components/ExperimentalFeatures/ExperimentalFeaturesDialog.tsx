import { Box, FormControlLabel, Switch } from '@mui/material'
import { useState } from 'react'
import { DialogBase } from '../DialogBase'
import {
  FeatureFlagEnum,
  getFeatureFlagDisplayName,
} from '@/utils/featureflag/FeatureFlags'
import styles from './ExperimentalFeaturesDialog.module.scss'
import { ConfirmationButtons } from '../ConfirmationDialog/ConfirmationDialog'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'

export const NO_FEATURES_AVAILABLE_TEXT =
  'No individual experimental features are available on this site right now.'

type ExperimentalFeaturesDialogProps = {
  /** Whether the dialog is shown */
  open: boolean
  /** Called when the user closes the dialog without saving; any toggles made in the dialog are discarded */
  onCancel: () => void
  /** Called when the user clicks Done, with the Enable all choice and the individually enabled flags */
  onSave: (enableAll: boolean, enabledFlags: FeatureFlagEnum[]) => void
  /** True while the server's feature flag values are still loading, before the eligible features are known */
  isLoading: boolean
  /** The flags the user can toggle in this app */
  features: FeatureFlagEnum[]
  /** The saved "Enable all Experimental Features" preference, used as the dialog's starting state */
  initialEnableAll: boolean
  /** The flags the user previously opted into individually, used as the dialog's starting state */
  initialEnabledFlags: FeatureFlagEnum[]
}

function ExperimentalFeaturesDialog({
  open,
  onCancel,
  onSave,
  isLoading,
  features,
  initialEnableAll,
  initialEnabledFlags,
}: ExperimentalFeaturesDialogProps) {
  // Single on/off toggle for enabling all experimental features
  const [enableAll, setEnableAll] = useState(initialEnableAll)
  // Individual toggles for each experimental feature
  const [enabledFlags, setEnabledFlags] = useState(initialEnabledFlags)

  const toggleFlag = (flag: FeatureFlagEnum) => {
    setEnabledFlags(current =>
      current.includes(flag)
        ? current.filter(enabledFlag => enabledFlag !== flag)
        : [...current, flag],
    )
  }

  const renderFeatureList = () => {
    if (isLoading) {
      return (
        <Box className={styles.loading}>
          <SynapseSpinner size={30} />
        </Box>
      )
    }

    if (features.length === 0) {
      return <p>{NO_FEATURES_AVAILABLE_TEXT}</p>
    }

    return (
      <>
        <p>Or toggle on the features you’d like to enable for this site.</p>
        <Box className={styles.featureList}>
          {features.map(flag => (
            <FormControlLabel
              key={flag}
              className={styles.featureRow}
              label={
                <span className={styles.featureLabel}>
                  {getFeatureFlagDisplayName(flag)}
                </span>
              }
              control={
                <Switch
                  checked={enableAll || enabledFlags.includes(flag)}
                  disabled={enableAll}
                  onChange={() => toggleFlag(flag)}
                />
              }
            />
          ))}
        </Box>
      </>
    )
  }

  const content = (
    <>
      <p>
        Experimental features are new features on this site that are still being
        tested and refined before becoming fully released. They allow us to
        introduce new functionality to users while gathering feedback,
        identifying bugs, and improving the experience.
      </p>
      <FormControlLabel
        className={styles.featureRow}
        label={
          <span className={styles.featureLabel}>
            Enable all Experimental Features
          </span>
        }
        control={
          <Switch
            checked={enableAll}
            onChange={() => setEnableAll(!enableAll)}
          />
        }
      />
      {renderFeatureList()}
    </>
  )

  return (
    <DialogBase
      title="Experimental Features"
      onCancel={onCancel}
      open={open}
      content={content}
      actions={
        <ConfirmationButtons
          onCancel={onCancel}
          onConfirm={() => {
            onSave(enableAll, enabledFlags)
          }}
          confirmButtonProps={{
            children: 'Done',
          }}
        />
      }
    />
  )
}

export default ExperimentalFeaturesDialog
