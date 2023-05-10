import React from 'react'
import { SynapseComponents } from 'synapse-react-client'
import { useHistory } from 'react-router-dom'

export default function TwoFactorAuthEnrollmentPage() {
  const history = useHistory()
  return (
    <SynapseComponents.TwoFactorEnrollmentForm
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
