import * as React from 'react'
import { Redirect, withRouter, RouteComponentProps } from 'react-router-dom'
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
    return <Redirect to={returnToUrl} />
  }
  return (
    <Login
      sessionCallback={() => setIsSessionEstablished(true)}
    />
  )
}

export default withRouter(LoginPage)
