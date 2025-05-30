import { TotpSecret } from '@sage-bionetworks/synapse-types'
import { useLoaderData, useNavigate } from 'react-router'
import TwoFactorEnrollmentForm from 'synapse-react-client/components/Authentication/TwoFactorEnrollmentForm'
import * as SynapseClient from 'synapse-react-client/synapse-client/SynapseClient'

export async function clientLoader() {
  // Fetch the TOTP secret to begin 2FA enrollment.
  const token = await SynapseClient.getAccessTokenFromCookie()
  if (!token) {
    // If not signed in, do not start 2FA enrollment.
    return null
  }
  return await SynapseClient.start2FAEnrollment(token)
}

function TwoFactorAuthEnrollmentPage() {
  const totpSecret = useLoaderData<TotpSecret>()
  const navigate = useNavigate()

  if (!totpSecret) {
    // Typically because the user is not signed in -- the user will be presented with login UI
    // Once they have logged in, the totpSecret will be fetched.
    return null
  }

  return (
    <TwoFactorEnrollmentForm
      totpSecret={totpSecret}
      onTwoFactorEnrollmentSuccess={() =>
        // explicitly skip the backup code overwrite warning and generate new codes
        void navigate('/authenticated/2fa/generatecodes?warn=false')
      }
      onBackClicked={() => {
        navigate(-1)
      }}
    />
  )
}

export default TwoFactorAuthEnrollmentPage
