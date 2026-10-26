import { StyledOuterContainer } from '@/components/StyledComponents'
import { Paper, Typography, Button } from '@mui/material'
import { Box } from '@mui/system'
import { useNavigate } from 'react-router'
import emailUndeliverableImageURL from '@/assets/EmailUndeliverable.svg?url'
import {
  processRedirectURLInOneSage,
  restoreLastPlace,
} from 'synapse-react-client/utils/AppUtils/AppUtils'
import { useGetNotificationEmail } from 'synapse-react-client/synapse-queries/user/useUserBundle'
import { useAppContext } from '@/AppContext'
import { DISMISSED_EMAIL_UNDELIVERABLE_PROMPT_SESSIONSTORAGE_KEY } from '@/utils/StorageKeys'
import { LAST_PLACE_LOCALSTORAGE_KEY } from 'synapse-react-client/utils/SynapseConstants'

const EMAIL_UNDELIVERABLE_TITLE = 'Action needed: Update your email address'

function EmailUndeliverablePage() {
  const navigate = useNavigate()
  const appContext = useAppContext()
  const { data: notificationEmail } = useGetNotificationEmail()
  const description = (
    <>
      <p>
        We can no longer reach you at the primary email address on your account:
      </p>
      <p style={{ fontStyle: 'italic' }}>{notificationEmail?.email}</p>
      <p>
        Until you update it, you won’t get system notifications, like updates on
        your access requests, and you won’t be able to reset your password.
      </p>
    </>
  )

  const redirectAfterSkip = () => {
    const didRedirect =
      restoreLastPlace(navigate) || processRedirectURLInOneSage()
    if (!didRedirect && appContext?.redirectURL) {
      // The user opened this page directly, so there is no page in this app or source app to return to
      window.location.replace(appContext.redirectURL)
    }
  }

  return (
    <StyledOuterContainer>
      <Paper
        sx={{
          m: '0 auto',
          p: {
            xs: '15px',
            md: '50px',
          },
          width: { xs: '100%', md: '900px' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            style={{ width: '100%' }}
            src={emailUndeliverableImageURL}
            alt="Envelope with an alert icon"
          />
        </Box>
        <Box
          sx={{
            py: '60px',
            px: { xs: '10px', md: '60px' },
            position: 'relative',
          }}
        >
          <Typography
            variant="headline3"
            sx={{ marginTop: '20px', marginBottom: '20px' }}
          >
            {EMAIL_UNDELIVERABLE_TITLE}
          </Typography>
          <Box sx={{ marginBottom: '20px' }}>{description}</Box>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              justifyContent: {
                xs: 'center',
                md: 'flex-end',
              },
              flexWrap: {
                xs: 'wrap',
                md: 'nowrap',
              },
              mt: {
                xs: '30px',
                md: '0px',
              },

              alignItems: 'center',
            }}
          >
            <Button
              variant="text"
              size="large"
              sx={{
                width: {
                  xs: '100%',
                  md: 'unset',
                },
                display: 'block',
              }}
              onClick={() => {
                sessionStorage.setItem(
                  DISMISSED_EMAIL_UNDELIVERABLE_PROMPT_SESSIONSTORAGE_KEY,
                  'true',
                )
                redirectAfterSkip()
              }}
            >
              Ignore for now
            </Button>
            <Button
              variant="contained"
              size="large"
              sx={{
                width: {
                  xs: '100%',
                  md: 'unset',
                },
                display: 'block',
              }}
              onClick={() => {
                sessionStorage.setItem(
                  DISMISSED_EMAIL_UNDELIVERABLE_PROMPT_SESSIONSTORAGE_KEY,
                  'true',
                )
                // Only "Ignore for now" should return to the saved place
                localStorage.removeItem(LAST_PLACE_LOCALSTORAGE_KEY)
                navigate('/authenticated/myaccount#email')
              }}
            >
              Update your email
            </Button>
          </Box>
        </Box>
      </Paper>
    </StyledOuterContainer>
  )
}

export default EmailUndeliverablePage
