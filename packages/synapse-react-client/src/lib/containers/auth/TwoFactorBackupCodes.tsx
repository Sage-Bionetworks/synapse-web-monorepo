import React, { useEffect, useState } from 'react'
import {
  Alert,
  Box,
  Button,
  IconButton,
  SxProps,
  Typography,
  useTheme,
} from '@mui/material'
import {
  LeftRightPanel,
  StyledOuterContainer,
} from '../../components/styled/LeftRightPanel'
import IconSvg from '../IconSvg'
import { useMutation } from 'react-query'
import { createRecoveryCodes } from '../../utils/SynapseClient'
import { useSynapseContext } from '../../utils/SynapseContext'
import TwoFactorGraphic from '../../assets/icons/twofactor-graphic.svg'
import { displayToast } from '../ToastMessage'
import { RegenerateBackupCodesWarning } from './RegenerateBackupCodesWarning'
import { RecoveryCodeGrid } from './RecoveryCodeGrid'

const hideOnPrintStyle: SxProps = {
  '@media print': {
    display: 'none',
  },
}

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
  } = useMutation({
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
  }, [])

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
      leftContent={
        <>
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
              sx={{
                position: 'absolute',
                top: theme.spacing(2),
                left: theme.spacing(2),
                ...hideOnPrintStyle,
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
                sx={{
                  my: 2,
                  ...hideOnPrintStyle,
                }}
                icon={false}
              >
                <strong>These new codes have replaced your old codes.</strong>{' '}
                Please save these codes and use them from now on.
              </Alert>
            )}
            <RecoveryCodeGrid recoveryCodes={recoveryCodes} />
            {error && (
              <Alert severity={'error'} sx={{ my: 2 }}>
                {error.message}
              </Alert>
            )}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '10px',
                mb: '10px',
                ...hideOnPrintStyle,
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
              fullWidth
              disabled={!recoveryCodes}
              sx={hideOnPrintStyle}
              onClick={onClose}
            >
              Done
            </Button>
          </Box>
        </>
      }
      rightContent={
        <Box
          sx={{
            py: 10,
            height: '100%',
            background: `url(${TwoFactorGraphic}) no-repeat right bottom`,
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
