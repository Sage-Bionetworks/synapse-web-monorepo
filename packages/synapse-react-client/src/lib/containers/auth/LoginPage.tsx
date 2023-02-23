import * as React from 'react'
import {
  Box,
  Stack,
  styled,
  Typography,
  TypographyProps,
  useTheme,
} from '@mui/material'
import { LeftRightPanel } from '../../components/styled/LeftRightPanel'
import useShowDesktop from '../../utils/hooks/useShowDesktop'
import LoginFlowBackButton from './LoginFlowBackButton'
import useLogin from '../../utils/hooks/useLogin'
import LoginForm from './LoginForm'
import { StyledComponent } from '@emotion/styled'

export type LoginPageProps = {
  ssoRedirectUrl?: string
  sessionCallback: () => void // Callback is invoked after login
}

const Tagline: StyledComponent<TypographyProps> = styled(Typography, {
  label: 'Tagline',
})(({ theme }) => ({
  marginBottom: theme.spacing(2),
  font: '300 24px/34px Lato, sans-serif',
}))

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
  } = useLogin(sessionCallback)

  const loginForm = (
    <Stack
      alignItems={'stretch'}
      sx={{ height: '100%', width: '325px', mx: 'auto' }}
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

      <LoginForm
        ssoRedirectUrl={ssoRedirectUrl}
        step={step}
        onStepChange={onStepChange}
        submitUsernameAndPassword={submitUsernameAndPassword}
        submitOneTimePassword={submitOneTimePassword}
        errorMessage={errorMessage}
      />
    </Stack>
  )

  if (showDesktop) {
    return (
      <LeftRightPanel
        leftContent={
          <>
            <Box sx={{ py: 10, px: 8, height: '100%', position: 'relative' }}>
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
              py: 10,
              height: '100%',
              background:
                "url('https://s3.amazonaws.com/static.synapse.org/images/login-panel-bg.svg') no-repeat right bottom 20px",
            }}
          >
            <Box
              sx={{
                py: 10,
                px: 9,
                color: '#1e4964',
              }}
            >
              {step === 'VERIFICATION_CODE' ? (
                <>
                  <Typography variant="headline1" sx={{ mb: 4 }}>
                    Enter your verification code
                  </Typography>
                  <Typography variant="headline2">
                    Enter the 6-digit, time-based verification code provided by
                    your authenticator app.
                  </Typography>
                </>
              ) : (
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
      </Box>
    )
  }
}
