import React from 'react'
import TwoFactorEnrollmentForm from 'synapse-react-client/dist/containers/auth/TwoFactorEnrollmentForm'
import { useHistory } from 'react-router-dom'

export default function TwoFactorAuthEnrollmentPage() {
  const history = useHistory()
  return (
    <TwoFactorEnrollmentForm
      onTwoFactorEnrollmentSuccess={() =>
        // explicitly skip the backup code overwrite warning and generate new codes
        history.push('/authenticated/2fa/generatecodes?warn=false')
      }
      onBackClicked={() => {
        history.goBack()
      }}
    />
  )
}
