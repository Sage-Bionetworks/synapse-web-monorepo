import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import { Box, Button, Link } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import { StyledConfirmationCard } from '@/components/StyledComponents'

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
    <StyledConfirmationCard>
      <Box sx={{ width: '300px', maxWidth: '100%', margin: '0 auto' }}>
        <Avatar sx={avatarSx}>
          <EmailOutlinedIcon sx={iconSx} />
        </Avatar>
        <Box sx={{ marginBottom: 5 }}>
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
        </Box>
        <Button
          onClick={() => window.location.assign('/authenticated/myaccount')}
          variant="contained"
          sx={buttonSx}
        >
          Close
        </Button>
      </Box>
    </StyledConfirmationCard>
  )
}
