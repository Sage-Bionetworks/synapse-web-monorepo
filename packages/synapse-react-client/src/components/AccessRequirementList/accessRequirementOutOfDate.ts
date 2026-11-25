import { ErrorResponseCode } from '@sage-bionetworks/synapse-client'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'

/**
 * Shown when a submission is rejected because the access requirement changed after the request was last saved. The
 * server's own message refers to version numbers and to a save action that the request flow does not show.
 */
export const ACCESS_REQUIREMENT_CHANGED_ON_SUBMIT_MESSAGE =
  'The requirements for this data changed while you were submitting. Try submitting again.'

/** Whether a submission was rejected because the access requirement changed after the request was last saved. */
export function isAccessRequirementOutOfDateError(
  error: SynapseClientError,
): boolean {
  return (
    error.errorResponse !== undefined &&
    'errorCode' in error.errorResponse &&
    error.errorResponse.errorCode ===
      ErrorResponseCode.ACCESS_REQUIREMENT_VERSION_OUT_OF_DATE
  )
}

/** The message to show when a submission is rejected. */
export function getSubmissionErrorMessage(error: SynapseClientError): string {
  return isAccessRequirementOutOfDateError(error)
    ? ACCESS_REQUIREMENT_CHANGED_ON_SUBMIT_MESSAGE
    : error.reason
}
