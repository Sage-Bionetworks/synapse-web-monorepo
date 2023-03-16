import React from 'react'
import { Button, Link } from '@mui/material'
import IconSvg from 'synapse-react-client/dist/containers/IconSvg'
import { Container } from 'react-bootstrap'

export type EmailConfirmationPageProps = {
  email: string
}
export const EmailConfirmationPage: React.FunctionComponent<
  EmailConfirmationPageProps
> = ({ email }) => {
  const buttonSx = {
    width: '100%',
    padding: '10px',
    color: 'white',
  }

  const iconSx = {
    color: 'primary.main',
    fontSize: '60px',
  }

  return (
    <Container className="thankYouContainer">
      <div className="thankYouPanel">
        <IconSvg icon="email" sx={iconSx} />
        <div className="thankYouText">
          <h3>Please check your email.</h3>
          <p>
            We’ve sent an email to <strong>{email}</strong>
          </p>
          <p>
            Click the link in the message to verify your address, then continue
            registration.
          </p>
          <Link
            href={
              'https://sagebionetworks.jira.com/servicedesk/customer/portal/9'
            }
            target="_blank"
          >
            I didn’t receive an email
          </Link>
        </div>
        <Button
          onClick={() => window.location.assign('/authenticated/myaccount')}
          variant="contained"
          sx={buttonSx}
        >
          Close
        </Button>
      </div>
    </Container>
  )
}
