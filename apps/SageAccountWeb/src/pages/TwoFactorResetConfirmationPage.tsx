import { StyledOuterContainer } from '@/components/StyledComponents'
import usePathBefore2FARedirect from '@/hooks/usePathBefore2FARedirect'
import { useNavigate } from 'react-router'
import Reset2FAWarning from 'synapse-react-client/components/Authentication/Reset2FAWarning'

/**
 * Shows a page used to confirm resetting 2FA.
 * If the user confirms, they will be redirected to the 2FA enrollment page.
 * If the user cancels, they will be redirected to the page they were on before being
 * redirected to reset 2FA.
 */
function TwoFactorResetConfirmationPage() {
  const navigate = useNavigate()

  const { value: pathBefore2faRedirect, remove: clearPathBefore2faRedirect } =
    usePathBefore2FARedirect()

  return (
    <StyledOuterContainer sx={{ display: 'flex', flexDirection: 'column' }}>
      <Reset2FAWarning
        onConfirm={() => {
          // redirect to enrollment page
          navigate('/authenticated/2fa/enroll')
        }}
        onCancel={() => {
          const redirectToAfterComplete =
            pathBefore2faRedirect || '/authenticated/myaccount'
          clearPathBefore2faRedirect()
          navigate(redirectToAfterComplete)
        }}
      />
    </StyledOuterContainer>
  )
}

export default TwoFactorResetConfirmationPage
