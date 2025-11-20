import { InfoOutlined, Settings } from '@mui/icons-material'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material'
import { FeatureFlagEnum, FeatureFlags } from '@sage-bionetworks/synapse-types'
import { useState } from 'react'
import Switch from 'react-switch'
import styles from './FeatureFlagSettings.module.scss'
import { useFeatureFlagOverrides } from './useFeatureFlagOverrides'

// Map of feature flags to their friendly titles and descriptions
const FEATURE_FLAG_INFO: Record<
  FeatureFlagEnum,
  { title: string; description: string }
> = {
  [FeatureFlagEnum.PORTAL_SEARCH_HEADER]: {
    title: 'Portal Search Header',
    description:
      'Show the new header component that uses the HeaderSearchBox component',
  },
  [FeatureFlagEnum.DESCRIPTION_FIELD]: {
    title: 'Description Field',
    description:
      "Allow viewing & editing the 'description' string field on entities",
  },
  [FeatureFlagEnum.VIRTUALTABLE_SUPPORT]: {
    title: 'Virtual Table Support',
    description: 'Allow creation of VirtualTable entities',
  },
  [FeatureFlagEnum.REACT_ENTITY_ACL_EDITOR]: {
    title: 'React Entity ACL Editor',
    description: 'Use the re-implemented ACL Editor for entities',
  },
  [FeatureFlagEnum.HOMEPAGE_CHATBOT]: {
    title: 'Homepage Chatbot',
    description: 'Show the chatbot entrypoint from the new Synapse Homepage',
  },
  [FeatureFlagEnum.WEBHOOKS_UI]: {
    title: 'Webhooks UI',
    description: 'Account settings will link to a page to manage webhooks',
  },
  [FeatureFlagEnum.CRISP_CHAT]: {
    title: 'Crisp Chat',
    description: 'Load the Crisp chat widget',
  },
}

export type FeatureFlagSettingsProps = {
  globalFeatureFlags?: FeatureFlags
}

export function FeatureFlagSettings({
  globalFeatureFlags,
}: FeatureFlagSettingsProps) {
  const [open, setOpen] = useState(false)
  const theme = useTheme()
  const { overrides, setOverride, clearOverrides } =
    useFeatureFlagOverrides()

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleToggle = (flag: FeatureFlagEnum, currentValue: boolean) => {
    // If toggling off a user override, set it to undefined to remove the override
    if (currentValue) {
      setOverride(flag, undefined)
    } else {
      setOverride(flag, true)
    }
  }

  const handleClearAll = () => {
    clearOverrides()
  }

  // Get the effective state for each flag
  const getEffectiveState = (flag: FeatureFlagEnum) => {
    const globalValue = globalFeatureFlags?.[flag] ?? false
    const userOverride = overrides[flag]

    // If globally enabled, it's always on and can't be toggled
    if (globalValue) {
      return { enabled: true, canToggle: false, isOverridden: false }
    }

    // If user has an override, use that
    if (userOverride !== undefined) {
      return { enabled: userOverride, canToggle: true, isOverridden: true }
    }

    // Otherwise it's disabled
    return { enabled: false, canToggle: true, isOverridden: false }
  }

  return (
    <>
      <Tooltip title="Feature Flag Settings" arrow placement="top">
        <IconButton
          onClick={handleOpen}
          aria-label="Feature flag settings"
          className={styles.settingsButton}
        >
          <Settings />
        </IconButton>
      </Tooltip>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>
          <Box className={styles.dialogTitle}>
            <Typography variant="h6">Feature Flag Settings</Typography>
            <Button
              onClick={handleClearAll}
              size="small"
              disabled={Object.keys(overrides).length === 0}
            >
              Clear All Overrides
            </Button>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box className={styles.flagsContainer}>
            <Typography
              variant="body2"
              color="text.secondary"
              className={styles.instructionText}
            >
              Toggle individual feature flags that are disabled in the global
              configuration. Feature flags that are already enabled globally
              cannot be toggled off.
            </Typography>

            {Object.values(FeatureFlagEnum).map(flag => {
              const { enabled, canToggle, isOverridden } =
                getEffectiveState(flag)
              const { title, description } = FEATURE_FLAG_INFO[flag]

              return (
                <Box
                  key={flag}
                  className={`${styles.flagItem} ${isOverridden ? styles.overridden : ''}`}
                  sx={{
                    borderColor: 'divider',
                    backgroundColor: isOverridden
                      ? 'action.hover'
                      : 'transparent',
                  }}
                >
                  <Box className={styles.flagContent}>
                    <Box className={styles.flagHeader}>
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: enabled ? 600 : 400 }}
                      >
                        {title}
                      </Typography>
                      {isOverridden && (
                        <Typography
                          variant="caption"
                          className={styles.overrideBadge}
                          sx={{
                            backgroundColor: 'primary.main',
                            color: 'primary.contrastText',
                          }}
                        >
                          USER OVERRIDE
                        </Typography>
                      )}
                      {!canToggle && (
                        <Tooltip
                          title="This feature is enabled globally and cannot be disabled"
                          arrow
                        >
                          <InfoOutlined className={styles.infoIcon} />
                        </Tooltip>
                      )}
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {description}
                    </Typography>
                  </Box>
                  <Switch
                    id={`feature-flag-${flag}`}
                    width={35}
                    height={20}
                    onColor={theme.palette.secondary.main}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    checked={enabled}
                    disabled={!canToggle}
                    onChange={() => handleToggle(flag, enabled)}
                  />
                </Box>
              )
            })}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default FeatureFlagSettings
