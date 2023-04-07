import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import TwoFactorBackupCodes from 'synapse-react-client/dist/containers/auth/TwoFactorBackupCodes'

/**
 * Shows a page used to regenerate 2FA backup codes.
 *
 * The page will show a warning unless the query parameter 'warn' is set to false
 */
export default function TwoFactorAuthBackupCodesPage() {
  const history = useHistory()
  const { search } = useLocation()
  let showWarning = true
  const warn = new URLSearchParams(search).get('warn')
  if (warn === 'false') {
    showWarning = false
  }
  return (
    <TwoFactorBackupCodes
      showReplaceOldCodesWarning={showWarning}
      onClose={() => history.push('/authenticated/myaccount')}
    />
  )
}
