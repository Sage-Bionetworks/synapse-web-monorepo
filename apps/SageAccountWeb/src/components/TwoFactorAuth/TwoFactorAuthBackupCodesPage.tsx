import { useLocation, useNavigate } from 'react-router'
import { TwoFactorBackupCodes } from 'synapse-react-client'

/**
 * Shows a page used to regenerate 2FA backup codes.
 *
 * The page will show a warning unless the query parameter 'warn' is set to false
 */
export default function TwoFactorAuthBackupCodesPage() {
  const navigate = useNavigate()
  const { search } = useLocation()
  const warn = new URLSearchParams(search).get('warn')
  return (
    <TwoFactorBackupCodes
      showReplaceOldCodesWarning={warn !== 'false'}
      onClose={() => navigate('/authenticated/myaccount')}
    />
  )
}
