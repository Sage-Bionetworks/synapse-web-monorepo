import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { TWO_FACTOR_DOCS_LINK } from './TwoFactorEnrollmentForm'

export type TwoFactorAuthSettingsPanelProps = {
  onRegenerateBackupCodes: () => void
  hideTitle?: boolean
}

export default function TwoFactorAuthSettingsPanel(
  props: TwoFactorAuthSettingsPanelProps,
) {
  const { onRegenerateBackupCodes, hideTitle = false } = props

  return (
    <Box>
      {!hideTitle && (
        <Typography variant={'headline2'} role={'heading'}>
          Two-factor Authentication (2FA)
        </Typography>
      )}
      <Typography variant={'body1Italic'} sx={{ my: 1 }}>
        Required for all projects and all users.
      </Typography>
      <Typography variant={'body1'} sx={{ my: 2 }}>
        Synapse uses a time-based system, which you can set up using an app like
        Google Authenticator, Duo Mobile, Microsoft Authenticator, or Authy.
        Certain data may require 2FA to be turned on for your account in order
        to request access.
      </Typography>
      <Stack direction={'row'} sx={{ gap: 1 }}>
        <Button
          variant={'text'}
          onClick={() => {
            onRegenerateBackupCodes()
          }}
        >
          Regenerate Backup Codes
        </Button>
        <Button
          variant={'text'}
          onClick={() => window.open(TWO_FACTOR_DOCS_LINK, '_blank')}
        >
          More Information
        </Button>
      </Stack>
    </Box>
  )
}
