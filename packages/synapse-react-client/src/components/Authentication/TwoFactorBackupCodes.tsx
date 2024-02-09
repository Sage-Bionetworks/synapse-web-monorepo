import React, { useEffect, useState } from 'react'
import {
  Alert,
  Box,
  Button,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material'
import { LeftRightPanel, StyledOuterContainer } from '../styled/LeftRightPanel'
import IconSvg from '../IconSvg/IconSvg'
import { useMutation } from '@tanstack/react-query'
import { createRecoveryCodes } from '../../synapse-client/SynapseClient'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import { displayToast } from '../ToastMessage/ToastMessage'
import { RegenerateBackupCodesWarning } from './RegenerateBackupCodesWarning'
import { RecoveryCodeGrid } from './RecoveryCodeGrid'
import { TwoFactorAuthRecoveryCodes } from '@sage-bionetworks/synapse-types'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useMediaPrintOnly } from '../../utils/hooks/useMediaPrintOnly'

export type TwoFactorBackupCodesProps = {
  /* Whether to show a warning before generating new codes, to prevent users from overwriting their existing codes */
  showReplaceOldCodesWarning?: boolean
  /* Invoked when the user decides not to generate new codes, or has acknowledged new codes. */
  onClose: () => void
}

export default function TwoFactorBackupCodes(props: TwoFactorBackupCodesProps) {
  const { showReplaceOldCodesWarning, onClose } = props
  const theme = useTheme()
  const [hasConfirmedRegeneration, setHasConfirmedRegeneration] = useState(
    !showReplaceOldCodesWarning,
  )

  const { accessToken } = useSynapseContext()

  const {
    mutate: generateCodes,
    data: recoveryCodes,
    error,
  } = useMutation<TwoFactorAuthRecoveryCodes, SynapseClientError>({
    mutationFn: () => createRecoveryCodes(accessToken),
    onMutate: () => {
      setHasConfirmedRegeneration(true)
    },
  })

  // Generate codes on mount if no warning is shown
  useEffect(() => {
    if (!showReplaceOldCodesWarning) {
      generateCodes()
    }
    // Run on mount only
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { visibleOnPrintClassName, hiddenOnPrintClassName } =
    useMediaPrintOnly()

  const copyCodesToClipboard = React.useCallback(() => {
    const codes = (recoveryCodes?.codes || []).join('\n')
    navigator.clipboard.writeText(codes).then(() => {
      displayToast('Recovery codes copied to clipboard', 'success')
    })
  }, [recoveryCodes])

  if (showReplaceOldCodesWarning && !hasConfirmedRegeneration) {
    return (
      <StyledOuterContainer sx={{ display: 'flex', flexDirection: 'column' }}>
        <RegenerateBackupCodesWarning
          onConfirm={generateCodes}
          onCancel={onClose}
        />
      </StyledOuterContainer>
    )
  }

  return (
    <LeftRightPanel
      className={visibleOnPrintClassName}
      leftContent={
        <Box
          sx={{
            py: 10,
            px: 8,
            height: '100%',
            position: 'relative',
          }}
        >
          <IconButton
            type="button"
            onClick={onClose}
            className={hiddenOnPrintClassName}
            sx={{
              position: 'absolute',
              top: theme.spacing(2),
              left: theme.spacing(2),
            }}
          >
            <IconSvg
              icon="arrowBack"
              wrap={false}
              sx={{ height: '24px', width: '24px' }}
            />
          </IconButton>
          <Typography variant="headline1" sx={{ mt: 7 }}>
            Backup codes
          </Typography>
          {showReplaceOldCodesWarning && (
            <Alert
              severity="warning"
              className={hiddenOnPrintClassName}
              sx={{
                my: 2,
              }}
              icon={false}
            >
              <strong>These new codes have replaced your old codes.</strong>{' '}
              Please save these codes and use them from now on.
            </Alert>
          )}
          <RecoveryCodeGrid recoveryCodes={recoveryCodes} />
          {error && (
            <Alert severity={'error'} sx={{ my: 2 }} icon={false}>
              {error.message}
            </Alert>
          )}
          <Box
            className={hiddenOnPrintClassName}
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '10px',
              mb: '10px',
            }}
          >
            <Button
              variant={'outlined'}
              onClick={copyCodesToClipboard}
              disabled={!recoveryCodes}
            >
              Copy to Clipboard
            </Button>
            <Button
              variant={'outlined'}
              disabled={!recoveryCodes}
              onClick={window.print}
            >
              Print Codes
            </Button>
          </Box>
          <Button
            variant={'contained'}
            className={hiddenOnPrintClassName}
            fullWidth
            disabled={!recoveryCodes}
            onClick={onClose}
          >
            Done
          </Button>
        </Box>
      }
      rightContent={
        <Box
          sx={{
            py: 10,
            height: '100%',
            background: `url(https://s3.amazonaws.com/static.synapse.org/images/twofactor-graphic.svg) no-repeat right bottom`,
            backgroundSize: '100%',
          }}
        >
          <Box
            sx={{
              mt: 7,
              px: 9,
            }}
          >
            <Typography variant="headline1" sx={{ mb: 2.5 }}>
              Save these codes
            </Typography>
            <Typography variant="body1" sx={{ my: 2 }}>
              You can use these 10 backup codes to access your account if you
              ever lose access to your authentication device.
            </Typography>
            <Typography variant="body1" sx={{ my: 2 }}>
              Each code can only be used once.
            </Typography>
          </Box>
        </Box>
      }
    />
  )
}
