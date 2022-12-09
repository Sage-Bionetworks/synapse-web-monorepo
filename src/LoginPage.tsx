import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import Login from 'synapse-react-client/dist/containers/Login'
import { SourceAppDescription, SourceAppLogo } from './components/SourceApp'
import { Typography } from 'synapse-react-client'

export type OwnProps = {
  returnToUrl:string
}
export type LoginPageProps = OwnProps & RouteComponentProps

const LoginPage:React.FunctionComponent<LoginPageProps> = ({
  returnToUrl
}: OwnProps) => {
  const [isSessionEstablished, setIsSessionEstablished] = React.useState<boolean>(false)
  if (isSessionEstablished) {
    // using this instead of Redirect since we may need a page refresh
    window.location.replace(returnToUrl)
  }
  return (
    <div className={'panel-wrapper-bg'}>
      <div className={'panel-wrapper with-login-panel-bg'}>
        <div className={'panel-left'}>
          <div className={'panel-logo'}>
            <SourceAppLogo />
          </div>
          <Login
              sessionCallback={() => setIsSessionEstablished(true)}
              registerAccountUrl={'/register1'}
              resetPasswordUrl={'/resetPassword'}
            />
        </div>
        <div className={'panel-right'}>
          <Typography className='headline' variant='headline2'>
            Sign in to your account
          </Typography>
          <SourceAppDescription />
        </div>
      </div>
    </div>
  )
}

export default withRouter(LoginPage)
