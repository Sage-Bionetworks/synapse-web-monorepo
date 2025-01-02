import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import { Button, Link } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import { Container } from 'react-bootstrap'

export type EmailConfirmationPageProps = {
  email: string
}
export function EmailConfirmationPage({ email }: EmailConfirmationPageProps) {
  const buttonSx = {
    width: '100%',
    padding: '10px',
    color: 'white',
  }

  const avatarSx = {
    backgroundColor: 'primary.main',
    height: '100px',
    width: '100px',
    marginBottom: '40px',
  }

  const iconSx = {
    fontSize: '60px',
  }

  return (
    <Container className="thankYouContainer">
      <div className="thankYouPanel">
        <Avatar sx={avatarSx}>
          <EmailOutlinedIcon sx={iconSx} />
        </Avatar>
        <div className="thankYouText">
          <h3>Please check your email.</h3>
          <p>
            We've sent an email to <strong>{email}</strong>
          </p>
          <p>
            Click the link in the message to verify your address, then continue
            registration.
          </p>
          <Link
            color="primary"
            href={
              'https://sagebionetworks.jira.com/servicedesk/customer/portal/9'
            }
            target="_blank"
          >
            I didn't receive an email
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
