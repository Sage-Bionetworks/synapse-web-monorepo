import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { SynapseComponents } from 'synapse-react-client'

/**
 * Shows a page used to regenerate 2FA backup codes.
 *
 * The page will show a warning unless the query parameter 'warn' is set to false
 */
export default function TwoFactorAuthBackupCodesPage() {
  const history = useHistory()
  const { search } = useLocation()
  const warn = new URLSearchParams(search).get('warn')
  return (
    <SynapseComponents.TwoFactorBackupCodes
      showReplaceOldCodesWarning={warn !== 'false'}
      onClose={() => history.push('/authenticated/myaccount')}
    />
  )
}
