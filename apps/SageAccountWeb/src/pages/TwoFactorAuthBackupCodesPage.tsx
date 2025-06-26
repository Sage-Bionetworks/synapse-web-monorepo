import usePathBefore2FARedirect from '@/hooks/usePathBefore2FARedirect'
import { useLocation, useNavigate } from 'react-router'
import TwoFactorBackupCodes from 'synapse-react-client/components/Authentication/TwoFactorBackupCodes'

/**
 * Shows a page used to regenerate 2FA backup codes.
 *
 * The page will show a warning unless the query parameter 'warn' is set to false
 */
function TwoFactorAuthBackupCodesPage() {
  const navigate = useNavigate()
  const { search } = useLocation()
  const warn = new URLSearchParams(search).get('warn')

  const { value: pathBefore2faRedirect, remove: clearPathBefore2faRedirect } =
    usePathBefore2FARedirect()

  return (
    <TwoFactorBackupCodes
      showReplaceOldCodesWarning={warn !== 'false'}
      onClose={() => {
        // This is the last step in 2FA enrollment. Once the user is done, take them to the page they were on before being
        // redirected to start 2FA enrollment.
        // If the user was not originally redirected (e.g. the user voluntarily regenerated backup codes), redirect to the
        // account settings page.
        const redirectToAfterComplete =
          pathBefore2faRedirect || '/authenticated/myaccount'
        clearPathBefore2faRedirect()
        navigate(redirectToAfterComplete)
      }}
    />
  )
}

export default TwoFactorAuthBackupCodesPage
