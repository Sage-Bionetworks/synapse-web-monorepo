import mfaRequiredImageURL from '@/assets/2FAHeroImage.svg?url'
import usePathBefore2FARedirect from '@/hooks/usePathBefore2FARedirect'
import { useSkipMfaPrompt } from '@/hooks/useSkipMfaPrompt'
import { Box, Button, Link, Paper, Typography } from '@mui/material'
import { FeatureFlagEnum } from '@sage-bionetworks/synapse-types'
import { useNavigate } from 'react-router'
import { StyledOuterContainer } from '../components/StyledComponents.js'
import { useGetFeatureFlag } from 'synapse-react-client/synapse-queries/featureflags/useGetFeatureFlag'

const MFA_SOON_REQUIRED_TITLE =
  'Two Factor Authentication (2FA) will be required starting July 1, 2025'
const MFA_SOON_REQUIRED_DESCRIPTION =
  'To enhance account security, two-factor authentication (2FA) will soon be mandatory for all users. This extra layer ' +
  'of protection helps keep your data safe by requiring both your password and a verification code sent to your device.'

const MFA_REQUIRED_TITLE = 'Two Factor Authentication (2FA) is now required'
const MFA_REQUIRED_DESCRIPTION =
  'To enhance account security, two-factor authentication (2FA) is mandatory for all users. This extra layer ' +
  'of protection helps keep your data safe by requiring both your password and a verification code sent to your device.'

function MfaRequiredPage() {
  const isMfaRequired = useGetFeatureFlag(FeatureFlagEnum.MFA_REQUIRED)
  const navigate = useNavigate()

  // START TEMPORARY CODE - SWC-7385: This code can be removed once MFA is required for all users.
  const { skip: skipMfaPrompt } = useSkipMfaPrompt()
  const { value: pathBefore2faRedirect, remove: clearPathBefore2faRedirect } =
    usePathBefore2FARedirect()
  function onSkip() {
    // 1. Set the last skipped 2FA prompt timestamp to the current time, so we don't immediately redirect them back here.
    skipMfaPrompt()

    // 2. Redirect them to the last page they were on before being redirected to enroll in 2FA.
    const redirectToAfterSkip =
      pathBefore2faRedirect || '/authenticated/myaccount'
    clearPathBefore2faRedirect()
    navigate(redirectToAfterSkip)
  }
  // END TEMPORARY CODE

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
            {isMfaRequired ? MFA_REQUIRED_TITLE : MFA_SOON_REQUIRED_TITLE}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '20px' }}>
            {isMfaRequired
              ? MFA_REQUIRED_DESCRIPTION
              : MFA_SOON_REQUIRED_DESCRIPTION}
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
            {!isMfaRequired && (
              <Button
                variant={'outlined'}
                size="large"
                sx={{
                  width: {
                    xs: '100%',
                    md: 'unset',
                  },
                  display: 'block',
                }}
                onClick={onSkip}
              >
                Skip for now
              </Button>
            )}
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
