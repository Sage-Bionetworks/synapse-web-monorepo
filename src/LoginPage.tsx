import * as React from 'react'
import { Col, Row } from 'react-bootstrap'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import Login from 'synapse-react-client/dist/containers/Login'
import SourceApp from './components/SourceApp'
import SageBionetworksLogo from './assets/SageBionetworksLogo.svg'
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
    <div className="LoginPage SourceAppPage bootstrap-4-backport">
      <Row>
        <Col xs={12} sm={4} className="sourceAppPanel">
          <SourceApp isAccountCreationTextVisible={false}/>
        </Col>
        <Col xs={12} sm={8} className="blue-background">
          <img
            className="sageLogo"
            src={SageBionetworksLogo}
            alt="Sage Bionetworks Logo"
            style={{width: 270}}
          />
          <div className="loginPanel">
            <Typography variant="headline1" className="title">Login</Typography>
            <Login
              sessionCallback={() => setIsSessionEstablished(true)}
              registerAccountUrl={'/register1'}
            />
          </div>
          
        </Col>
      </Row>
    </div>
  )
}

export default withRouter(LoginPage)
