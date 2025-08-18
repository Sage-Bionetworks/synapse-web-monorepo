import mfaRequiredImageURL from '@/assets/2FAHeroImage.svg?url'
import { Box, Button, Link, Paper, Typography } from '@mui/material'
import { useNavigate } from 'react-router'
import { StyledOuterContainer } from '../components/StyledComponents.js'

const MFA_REQUIRED_TITLE = 'Two Factor Authentication (2FA) is now required'
const MFA_REQUIRED_DESCRIPTION =
  'To enhance account security, two-factor authentication (2FA) is mandatory for all users. This extra layer ' +
  'of protection helps keep your data safe by requiring both your password and a verification code sent to your device.'

function MfaRequiredPage() {
  const navigate = useNavigate()
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
            src={mfaRequiredImageURL}
            alt="2fa required image"
          />
        </Box>
        <Box
          sx={{
            py: '60px',
            px: { xs: '10px', med: '60px' },
            position: 'relative',
          }}
        >
          <Typography
            variant="headline3"
            sx={{ marginTop: '20px', marginBottom: '20px' }}
          >
            {MFA_REQUIRED_TITLE}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '20px' }}>
            {MFA_REQUIRED_DESCRIPTION}
          </Typography>
          <Link
            target={'_blank'}
            rel={'noreferrer'}
            href={
              'https://help.synapse.org/docs/Managing-Your-Account.2055405596.html#ManagingYourAccount-AddingTwo-FactorAuthentication(2FA)toyouraccount'
            }
          >
            Learn more about 2FA
          </Link>
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
                navigate('/authenticated/2fa/enroll')
              }}
            >
              Activate 2FA to Continue
            </Button>
          </Box>
        </Box>
      </Paper>
    </StyledOuterContainer>
  )
}

export default MfaRequiredPage
