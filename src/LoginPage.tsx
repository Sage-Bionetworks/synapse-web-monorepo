import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import Login from 'synapse-react-client/dist/containers/Login'

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
    <Login
      sessionCallback={() => setIsSessionEstablished(true)}
    />
  )
}

export default withRouter(LoginPage)
