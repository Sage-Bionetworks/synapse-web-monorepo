import { getIdentityProviderAlternativesText } from '@/utils/functions/IdentityProviderNameUtils'
import { Alert, AlertProps } from '@mui/material'
import { IdentityProviderName } from '@sage-bionetworks/synapse-client'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { Renewal, Request } from '@sage-bionetworks/synapse-types'
import { useState } from 'react'

/**
 * Whether saving the request failed because the caller may not create a request for its access requirement, e.g.
 * because they did not sign in through an identity provider the access requirement accepts. Retrying the save cannot
 * succeed without signing in again.
 */
function isRequestCreationRejected(
  error: SynapseClientError,
  savedRequest: Request | Renewal,
): boolean {
  // A request without an ID has not been created yet, so saving it creates it
  return !savedRequest.id && error.status === 403
}

/**
 * Tracks whether Synapse rejected creating the request, which no retry can fix.
 *
 * @param onOtherError invoked for any other failure to save the request
 * @returns `onUpdateRequestError`, to pass as the `onError` of `useUpdateDataAccessRequest`, and
 * `requestCreationRejection`, the rejection once one has occurred
 */
export function useRequestCreationRejection(
  onOtherError: (error: SynapseClientError) => void,
) {
  const [requestCreationRejection, setRequestCreationRejection] = useState<
    SynapseClientError | undefined
  >()

  function onUpdateRequestError(
    error: SynapseClientError,
    savedRequest: Request | Renewal,
  ) {
    if (isRequestCreationRejected(error, savedRequest)) {
      setRequestCreationRejection(error)
    } else {
      onOtherError(error)
    }
  }

  return { requestCreationRejection, onUpdateRequestError }
}

export type RequestCreationRejectedAlertProps = {
  error: SynapseClientError
  /** The identity providers the access requirement accepts */
  identityProviders?: IdentityProviderName[]
  sx?: AlertProps['sx']
}

/**
 * Explains that the request cannot be created, and if the access requirement accepts particular identity providers,
 * how to sign in to request access.
 */
export function RequestCreationRejectedAlert(
  props: RequestCreationRejectedAlertProps,
) {
  const { error, identityProviders = [], sx } = props
  return (
    <Alert severity="error" sx={sx}>
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
