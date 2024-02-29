import React from 'react'
import {
  Box,
  Stack,
  styled,
  Link,
  Typography,
  TypographyProps,
  useTheme,
} from '@mui/material'
import { LeftRightPanel } from '../styled/LeftRightPanel'
import useShowDesktop from '../../utils/hooks/useShowDesktop'
import LoginFlowBackButton from './LoginFlowBackButton'
import useLogin from '../../utils/hooks/useLogin'
import LoginForm from './LoginForm'
import { StyledComponent } from '@emotion/styled'
import SystemUseNotification from '../SystemUseNotification/SystemUseNotification'

const LOST_ACCOUNT_SERVICE_DESK_ISSUE_TITLE = encodeURIComponent(
  'Lost access to my Synapse account',
)
const LOST_ACCOUNT_SERVICE_DESK_DESCRIPTION = encodeURIComponent(
  '<Please provide your username and/or email address associated with your account.>',
)
const LOST_ACCOUNT_ACCESS_CONTACT_URL = `https://sagebionetworks.jira.com/servicedesk/customer/portal/9/group/16/create/85?summary=${LOST_ACCOUNT_SERVICE_DESK_ISSUE_TITLE}&description=${LOST_ACCOUNT_SERVICE_DESK_DESCRIPTION}`

export type LoginPageProps = {
  ssoRedirectUrl?: string
  sessionCallback: () => void // Callback is invoked after login
}

const Tagline: StyledComponent<TypographyProps> = styled(Typography, {
  label: 'Tagline',
})(({ theme }) => ({
  marginBottom: theme.spacing(2),
  font: '300 24px/34px DM Sans, sans-serif',
}))

function BackupCodeInstructions(props: TypographyProps) {
  return (
    <>
      <Typography {...props}>
        Your backup code is a 16 digit code, with groups of 4 letters or numbers
        separated by hyphens, like this:
      </Typography>
      <Typography
        {...props}
        component={'div' as any}
        variant={'monospace'}
        sx={{ my: 1, fontSize: '18px' }}
      >
        xxxx-xxxx-xxxx-xxxx
      </Typography>
      <Typography {...props}>
        Each code can only be used once. If you don’t have access to these
        codes, please{' '}
        <Link href={LOST_ACCOUNT_ACCESS_CONTACT_URL}>contact us</Link>.
      </Typography>
    </>
  )
}

export default function LoginPage(props: LoginPageProps) {
  const { ssoRedirectUrl, sessionCallback } = props
  const showDesktop = useShowDesktop(910)
  const theme = useTheme()

  const {
    step,
    onStepChange,
    submitUsernameAndPassword,
    submitOneTimePassword,
    errorMessage,
    isLoading,
  } = useLogin(sessionCallback)

  const loginForm = (
    <Stack
      alignItems={'stretch'}
      sx={{ height: '100%', width: '330px', mx: 'auto' }}
    >
      {!showDesktop && (
        <Stack flexDirection={'row'}>
          <LoginFlowBackButton step={step} onStepChange={onStepChange} />
        </Stack>
      )}

      <Box
        sx={{
          mb: 4,
          textAlign: 'center',
          maxWidth: '90vw',
        }}
      >
        <img
          alt={'Synapse logo'}
          src={
            'https://s3.amazonaws.com/static.synapse.org/images/synapse-logo-blue.svg'
          }
        />
        {!showDesktop && (
          <Typography variant="body1" align="center" sx={{ my: 1 }}>
            Organize. Get credit. Collaborate.
          </Typography>
        )}
      </Box>
      {!showDesktop && step === 'VERIFICATION_CODE' && (
        <Typography variant={'body1'} align={'center'} sx={{ my: 1 }}>
          Enter the 6-digit, time-based verification code provided by your
          authenticator app.
        </Typography>
      )}
      {!showDesktop && step === 'RECOVERY_CODE' && (
        <BackupCodeInstructions
          variant={'body1'}
          align={'center'}
          sx={{ my: 1 }}
        />
      )}
      <LoginForm
        ssoRedirectUrl={ssoRedirectUrl}
        step={step}
        onStepChange={onStepChange}
        submitUsernameAndPassword={submitUsernameAndPassword}
        submitOneTimePassword={submitOneTimePassword}
        errorMessage={errorMessage}
        isLoading={isLoading}
      />
    </Stack>
  )

  if (showDesktop) {
    return (
      <LeftRightPanel
        leftContent={
          <>
            <Box sx={{ py: 15, px: 8, height: '100%', position: 'relative' }}>
              <LoginFlowBackButton
                step={step}
                onStepChange={onStepChange}
                sx={{
                  position: 'absolute',
                  top: theme.spacing(2),
                  left: theme.spacing(2),
                }}
              />
              {loginForm}
            </Box>
          </>
        }
        rightContent={
          <Box
            sx={{
              py: 15,
              height: '100%',
              background:
                "url('https://s3.amazonaws.com/static.synapse.org/images/login-panel-bg.svg') no-repeat right bottom 5px",
            }}
          >
            <Box
              sx={{
                px: 9,
                color: '#1e4964',
              }}
            >
              {step === 'VERIFICATION_CODE' && (
                <>
                  <Typography variant="headline1" sx={{ mb: 4 }}>
                    Enter your verification code
                  </Typography>
                  <Typography variant={'headline2'} sx={{ lineHeight: '30px' }}>
                    Enter the 6-digit, time-based verification code provided by
                    your authenticator app.
                  </Typography>
                </>
              )}
              {step === 'RECOVERY_CODE' && (
                <>
                  <Typography variant="headline1" sx={{ mb: 4 }}>
                    Enter your backup code
                  </Typography>
                  <BackupCodeInstructions
                    variant={'body1'}
                    sx={{ fontSize: '18px', lineHeight: '30px' }}
                  />
                </>
              )}
              {step !== 'VERIFICATION_CODE' && step !== 'RECOVERY_CODE' && (
                <>
                  <Tagline variant="headline2">
                    <strong>Organize</strong> your digital research assets.
                  </Tagline>
                  <Tagline variant="headline2">
                    <strong>Get credit</strong> for your research.
                  </Tagline>
                  <Tagline variant="headline2">
                    <strong>Collaborate</strong> with your colleagues and the
                    public.
                  </Tagline>
                </>
              )}
              <SystemUseNotification />
            </Box>
          </Box>
        }
      />
    )
  } else {
    return (
      <Box
        sx={{
          px: 0,
          py: 12,
          height: '95vh',
          background:
            "#fff url('https://s3.amazonaws.com/static.synapse.org/images/SynapseMobileLogInFull.svg') 50% 50%",
          backgroundSize: 'contain',
        }}
      >
        {loginForm}
        <SystemUseNotification />
      </Box>
    )
  }
}
