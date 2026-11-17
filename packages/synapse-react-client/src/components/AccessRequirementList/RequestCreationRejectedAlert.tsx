import { getIdentityProviderAlternativesText } from '@/utils/functions/IdentityProviderNameUtils'
import { Alert } from '@mui/material'
import { IdentityProviderName } from '@sage-bionetworks/synapse-client'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { Renewal, Request } from '@sage-bionetworks/synapse-types'

/**
 * Whether saving the request failed because the caller may not create a request for its access requirement, e.g.
 * because they did not sign in through an identity provider the access requirement accepts. Retrying the save cannot
 * succeed without signing in again.
 */
export function isRequestCreationRejected(
  error: SynapseClientError,
  savedRequest: Request | Renewal,
): boolean {
  // A request without an ID has not been created yet, so saving it creates it
  return !savedRequest.id && error.status === 403
}

export type RequestCreationRejectedAlertProps = {
  error: SynapseClientError
  /* The identity providers the access requirement accepts */
  identityProviders?: IdentityProviderName[]
}

/**
 * Explains that the request cannot be created, and if the access requirement accepts particular identity providers,
 * how to sign in to request access.
 */
export function RequestCreationRejectedAlert(
  props: RequestCreationRejectedAlertProps,
) {
  const { error, identityProviders = [] } = props
  return (
    <Alert severity="error" sx={{ mt: 2 }}>
      {error.reason}
      {identityProviders.length > 0 && (
        <>
          {' '}
          To request access, sign out, then sign in with{' '}
          {getIdentityProviderAlternativesText(identityProviders)}.
        </>
      )}
    </Alert>
  )
}
