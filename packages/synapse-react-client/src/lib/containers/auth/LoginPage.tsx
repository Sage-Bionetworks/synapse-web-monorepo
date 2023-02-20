import * as React from 'react'
import Login from './Login'
import IconSvg from '../IconSvg'
import { IconButton } from '@mui/material'

export type LoginPageProps = {
  ssoRedirectUrl?: string
  sessionCallback: () => void // Callback is invoked after login
}

function LoginPage(props: LoginPageProps) {
  const { ssoRedirectUrl, sessionCallback } = props
  const [isOnUsernameOrPasswordScreen, setIsOnUsernameOrPasswordScreen] =
    React.useState<boolean>(false)
  const thisClass = 'login-panel-wrapper'

  return (
    <div className={'login-panel-wrapper-bg'}>
      <div id={thisClass} className={thisClass}>
        {isOnUsernameOrPasswordScreen && (
          <IconButton
            className="back-button"
            onClick={() => setIsOnUsernameOrPasswordScreen(false)}
          >
            <IconSvg icon="arrowBack" />
          </IconButton>
        )}
        <div className={'login-panel panel-left'}>
          <div className={'panel-logo'}>
            <img
              alt={'Synapse logo'}
              src={
                'https://s3.amazonaws.com/static.synapse.org/images/synapse-logo-blue.svg'
              }
            />
            <p className={'panel-tagline'}>
              Organize. Get credit. Collaborate.
            </p>
          </div>
          <Login
            ssoRedirectUrl={ssoRedirectUrl}
            sessionCallback={sessionCallback}
            renderBackButton={false}
            handleIsOnUsernameOrPasswordScreen={setIsOnUsernameOrPasswordScreen}
            showUsernameOrPassword={isOnUsernameOrPasswordScreen}
          />
        </div>
        <div className={'login-panel panel-right'}>
          <div className={'panel-tagline'}>
            <strong>Organize</strong> your digital research assets.
            <br />
            <strong>Get credit</strong> for your research.
            <br />
            <strong>Collaborate</strong> with your colleagues and the public.
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
