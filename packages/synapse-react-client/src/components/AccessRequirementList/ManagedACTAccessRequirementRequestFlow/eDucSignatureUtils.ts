import {
  EDucSignatureStatus,
  EDucSignatureStatusDucStatusEnum,
  EDucSignerStatusStatusEnum,
} from '@sage-bionetworks/synapse-client'

/**
 * Envelope states DocuSign will not accept a correction for. Reaching one of these means the
 * request's pending changes can only be delivered by voiding the envelope and routing a new one,
 * which discards the signatures collected so far.
 */
const UNCORRECTABLE_DUC_STATUSES: ReadonlySet<EDucSignatureStatusDucStatusEnum> =
  new Set([
    EDucSignatureStatusDucStatusEnum.completed,
    EDucSignatureStatusDucStatusEnum.declined,
    EDucSignatureStatusDucStatusEnum.voided,
  ])

/**
 * Whether the request's pending changes can be applied to the envelope that is already in flight
 * without asking the signers who have already signed to sign again.
 *
 * This is a client-side approximation of `GET /dataAccessRequest/{id}/signature/precheck`, used to
 * decide what to promise the user *before* they commit to sending. The server's answer at send
 * time is authoritative; this only governs copy and the quota preflight, so it is deliberately
 * conservative — an absent or unresolved status reads as not updatable.
 */
export function isSignatureEnvelopeUpdatable(
  signatureStatus: EDucSignatureStatus | undefined,
): boolean {
  if (!signatureStatus) {
    return false
  }
  if (
    signatureStatus.ducStatus &&
    UNCORRECTABLE_DUC_STATUSES.has(signatureStatus.ducStatus)
  ) {
    return false
  }
  // A single declined signer strands the envelope even while its overall status still reads as
  // in-flight, so the "won't need to sign again" guarantee no longer holds.
  return !(signatureStatus.signerStatus ?? []).some(
    signer => signer.status === EDucSignerStatusStatusEnum.declined,
  )
}

export const SIGNATURE_QUOTA_EXHAUSTED_TITLE =
  "Sorry, you've used all of your electronic signature requests."

export function getSignatureQuotaExhaustedMessage(quota: number | undefined) {
  return `You have used all ${quota ?? ''} of your electronic signature routings for this request. Please contact ACT to request a quota reset.`
}
