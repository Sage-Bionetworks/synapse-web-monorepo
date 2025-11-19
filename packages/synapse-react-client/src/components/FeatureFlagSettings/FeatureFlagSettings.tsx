import { useGetFeatureFlagOverrides } from '@/synapse-queries/featureflags/useGetFeatureFlagOverrides'
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

// Map of feature flags to their descriptions
const FEATURE_FLAG_DESCRIPTIONS: Record<FeatureFlagEnum, string> = {
  [FeatureFlagEnum.PORTAL_SEARCH_HEADER]:
    'Show the new header component that uses the HeaderSearchBox component',
  [FeatureFlagEnum.DESCRIPTION_FIELD]:
    "Allow viewing & editing the 'description' string field on entities",
  [FeatureFlagEnum.VIRTUALTABLE_SUPPORT]:
    'Allow creation of VirtualTable entities',
  [FeatureFlagEnum.REACT_ENTITY_ACL_EDITOR]:
    'Use the re-implemented ACL Editor for entities',
  [FeatureFlagEnum.HOMEPAGE_CHATBOT]:
    'Show the chatbot entrypoint from the new Synapse Homepage',
  [FeatureFlagEnum.WEBHOOKS_UI]:
    'Account settings will link to a page to manage webhooks',
  [FeatureFlagEnum.CRISP_CHAT]: 'Load the Crisp chat widget',
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
    useGetFeatureFlagOverrides()

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
          sx={{
            color: 'inherit',
            '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.08)' },
          }}
        >
          <Settings />
        </IconButton>
      </Tooltip>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: 'background.paper',
          },
        }}
      >
        <DialogTitle>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
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
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Toggle individual feature flags that are disabled in the global
              configuration. Feature flags that are already enabled globally
              cannot be toggled off.
            </Typography>

            {Object.values(FeatureFlagEnum).map(flag => {
              const { enabled, canToggle, isOverridden } =
                getEffectiveState(flag)
              const description = FEATURE_FLAG_DESCRIPTIONS[flag]

              return (
                <Box
                  key={flag}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    p: 2,
                    borderRadius: 1,
                    backgroundColor: isOverridden
                      ? 'action.hover'
                      : 'transparent',
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Box sx={{ flex: 1, mr: 2 }}>
                    <Box
                      sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}
                    >
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: enabled ? 600 : 400 }}
                      >
                        {flag}
                      </Typography>
                      {isOverridden && (
                        <Typography
                          variant="caption"
                          sx={{
                            ml: 1,
                            px: 1,
                            py: 0.25,
                            backgroundColor: 'primary.main',
                            color: 'primary.contrastText',
                            borderRadius: 1,
                            fontSize: '0.7rem',
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
                          <InfoOutlined
                            sx={{ ml: 1, fontSize: '1rem', opacity: 0.6 }}
                          />
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
