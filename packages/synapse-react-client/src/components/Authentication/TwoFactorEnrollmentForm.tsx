import React, { useEffect, useRef, useState } from 'react'
import {
  Box,
  BoxProps,
  Button,
  Divider,
  IconButton,
  Link,
  Paper,
  Stack,
  styled,
  Typography,
} from '@mui/material'
import { StyledOuterContainer } from '../styled/LeftRightPanel'
import { StyledComponent } from '@emotion/styled'
import { TotpSecret } from '@sage-bionetworks/synapse-types'
import { useGetNotificationEmail } from '../../synapse-queries'
import { toCanvas } from 'qrcode'
import TextField from '../TextField/TextField'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'
import FullWidthAlert from '../FullWidthAlert/FullWidthAlert'
import {
  useFinishTwoFactorEnrollment,
  useStartTwoFactorEnrollment,
} from '../../synapse-queries/auth/useTwoFactorEnrollment'
import TwoFactorSecretDialog from './TwoFactorSecretDialog'
import IconSvg from '../IconSvg/IconSvg'

/**
 * Returns a URL that can be used to generate a QR code that 2FA authenticator apps can interpret
 * @param secret
 * @param subject
 */
function toOtpAuthUrl(secret: TotpSecret, subject: string) {
  return `otpauth://totp/Synapse:${subject}?secret=${secret.secret}&issuer=Sage%20Bionetworks&algorithm=${secret.alg}&digits=${secret.digits}&period=${secret.period}`
}

const Section: StyledComponent<BoxProps> = styled(
  (props: BoxProps) => (
    <Box
      sx={{
        my: 3,
        ...props.sx,
      }}
      {...props}
    />
  ),
  {
    label: 'Section',
  },
)(() => ({}))

const SectionInnerGrid: StyledComponent<BoxProps> = styled(
  props => <Box {...props} />,
  {
    label: 'SectionInnerGrid',
  },
)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'auto 200px',
  columnGap: theme.spacing(5),
}))

export const TWO_FACTOR_DOCS_LINK =
  'https://help.synapse.org/docs/Managing-Your-Account.2055405596.html#Adding-Two-Factor-Authentication-(2FA)-to-your-account'

export type TwoFactorEnrollmentFormProps = {
  onTwoFactorEnrollmentSuccess: () => void
  onBackClicked: () => void
}

export default function TwoFactorEnrollmentForm(
  props: TwoFactorEnrollmentFormProps,
) {
  const { onTwoFactorEnrollmentSuccess, onBackClicked } = props

  const [totp, setTotp] = useState('')
  const [hasQrCode, setHasQrCode] = useState(false)
  const [showSecretInModal, setShowSecretInModal] = useState(false)
  const { data: currentUserEmail } = useGetNotificationEmail()

  const qrCodeCanvasElement = useRef<HTMLCanvasElement>(null)

  const { mutate: start2FAEnrollment, data: totpSecret } =
    useStartTwoFactorEnrollment()

  const {
    mutate: finishEnrollment,
    isPending: isFinishingEnrollment,
    error,
  } = useFinishTwoFactorEnrollment({
    onSuccess: onTwoFactorEnrollmentSuccess,
  })

  /* When the component mounts, begin enrollment by fetching the data for the QR code. */
  useEffect(() => {
    start2FAEnrollment()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    async function createQrCode() {
      if (totpSecret && currentUserEmail && qrCodeCanvasElement.current) {
        await toCanvas(
          qrCodeCanvasElement.current,
          toOtpAuthUrl(totpSecret, currentUserEmail.email),
          { version: 10, margin: 0, scale: 3.5 },
        )
        setHasQrCode(true)
      }
    }
    createQrCode()
  }, [totpSecret, currentUserEmail])

  return (
    <StyledOuterContainer>
      <Paper
        sx={{
          position: 'relative',
          width: '800px',
          py: 6.5,
          px: 8,
          mx: 'auto',
        }}
      >
        {onBackClicked && (
          <IconButton
            type="button"
            onClick={() => {
              onBackClicked()
            }}
            sx={theme => ({
              position: 'absolute',
              top: theme.spacing(2),
              left: theme.spacing(2),
            })}
          >
            <IconSvg
              icon="arrowBack"
              wrap={false}
              sx={{ height: '24px', width: '24px' }}
            />
          </IconButton>
        )}
        <Section>
          <Typography variant="headline2" sx={{ mb: 3 }}>
            Activate Two-factor Authentication
          </Typography>
          <Typography variant="body1">
            After setting up 2FA, you’ll use an authenticator app as part of
            your login process, in addition to your existing password. If you
            log in using your Google{' '}
            {/* Remove conditionality when NIH RAS login is supported */}
            {false && 'or NIH RAS'} account, you may need to use 2FA as part of
            {/*those processes*/}
            that process as well.{' '}
            <Link href={TWO_FACTOR_DOCS_LINK}>Learn more about 2FA</Link>.
          </Typography>
        </Section>
        <Section>
          <SectionInnerGrid>
            <Box>
              <Typography variant="body1" sx={{ fontWeight: 700 }}>
                Step 1. Get one of these apps
              </Typography>
              <Typography variant="body1">
                Download and install one of these authentication apps to set up
                2FA on your mobile device, tablet, or desktop. If you have one
                of these apps already installed, you can skip this step.
              </Typography>
            </Box>
            <Stack justifyContent={'space-between'} sx={{ flexShrink: 0 }}>
              <Link href={'https://authy.com/download/'}>Authy</Link>
              <Link
                href={
                  'https://duo.com/product/multi-factor-authentication-mfa/duo-mobile-app'
                }
              >
                DUO Mobile
              </Link>
              <Link href={'https://googleauthenticator.net/'}>
                Google Authenticator
              </Link>
              <Link
                href={
                  'https://www.microsoft.com/en-us/security/mobile-authenticator-app'
                }
              >
                Microsoft Authenticator
              </Link>
            </Stack>
          </SectionInnerGrid>
        </Section>
        <Divider />
        <Section>
          <SectionInnerGrid>
            <Box>
              <Typography variant="body1" sx={{ fontWeight: 700 }}>
                Step 2. Scan the QR Code
              </Typography>
              <Typography component="ol" variant="body1" sx={{ pl: 2, my: 1 }}>
                <li>Open your authenticator app</li>
                <li>Tap the &quot;+&quot; button</li>
                <li>Use your camera to scan the image to the right</li>
              </Typography>
              <Link
                onClick={() => {
                  setShowSecretInModal(true)
                }}
              >
                Can&apos;t use your camera?
              </Link>
              <TwoFactorSecretDialog
                secret={totpSecret?.secret ?? ''}
                open={showSecretInModal}
                onClose={() => setShowSecretInModal(false)}
              />
            </Box>
            <Box
              display={'flex'}
              justifyContent={'center'}
              alignItems={'middle'}
              height={'auto'}
            >
              {!hasQrCode && <SynapseSpinner size={50} />}
              <canvas
                style={{ display: hasQrCode ? undefined : 'none' }}
                ref={qrCodeCanvasElement}
              />
            </Box>
          </SectionInnerGrid>
        </Section>
        <Divider />
        <Section>
          <SectionInnerGrid>
            <Box>
              <Typography variant="body1" sx={{ fontWeight: 700 }}>
                Step 3. Enter the Verification Code
              </Typography>
              <Typography variant="body1">
                After scanning in the QR code in step 2, your app will provide a
                6-digit code. Enter it in in the field to the right.
              </Typography>
            </Box>
            <form
              onSubmit={e => {
                e.preventDefault()
                finishEnrollment({
                  secretId: totpSecret!.secretId,
                  totp,
                })
              }}
            >
              <Stack direction={'row'} gap={2} height={'48px'}>
                <TextField
                  noWrapInFormControl
                  inputProps={{ maxLength: totpSecret?.digits }}
                  value={totp}
                  onChange={e => {
                    setTotp(e.target.value)
                  }}
                />
                <Button
                  type={'submit'}
                  variant={'contained'}
                  sx={{ flexShrink: 0 }}
                  disabled={
                    isFinishingEnrollment || totp.length != totpSecret?.digits
                  }
                >
                  Activate
                </Button>
              </Stack>
            </form>
          </SectionInnerGrid>
        </Section>
        {error && (
          <FullWidthAlert
            variant={'danger'}
            isGlobal={false}
            description={error.reason}
          />
        )}
      </Paper>
    </StyledOuterContainer>
  )
}

export const EXPORTED_FOR_UNIT_TESTING = { toOtpAuthUrl }
