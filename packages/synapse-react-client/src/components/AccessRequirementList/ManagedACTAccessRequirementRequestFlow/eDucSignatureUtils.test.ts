import {
  EDucSignatureStatusDucStatusEnum,
  EDucSignerStatusStatusEnum,
} from '@sage-bionetworks/synapse-client'
import { isSignatureEnvelopeUpdatable } from './eDucSignatureUtils'

/**
 * Envelope statuses that must keep the "already-signed collaborators won't need to sign again"
 * guarantee, paired with the statuses that must revoke it. Asserted against the full enum below so
 * a new DocuSign status can't be silently classified as correctable.
 */
const CORRECTABLE_STATUSES: EDucSignatureStatusDucStatusEnum[] = [
  EDucSignatureStatusDucStatusEnum.draft,
  EDucSignatureStatusDucStatusEnum.sent,
  EDucSignatureStatusDucStatusEnum.delivered,
  EDucSignatureStatusDucStatusEnum.correct,
]

const UNCORRECTABLE_STATUSES: EDucSignatureStatusDucStatusEnum[] = [
  EDucSignatureStatusDucStatusEnum.completed,
  EDucSignatureStatusDucStatusEnum.declined,
  EDucSignatureStatusDucStatusEnum.voided,
]

describe('isSignatureEnvelopeUpdatable', () => {
  it('classifies every envelope status the API can return', () => {
    expect([...CORRECTABLE_STATUSES, ...UNCORRECTABLE_STATUSES].sort()).toEqual(
      Object.values(EDucSignatureStatusDucStatusEnum).sort(),
    )
  })

  it.each(CORRECTABLE_STATUSES)(
    'returns true for an envelope in the "%s" state',
    ducStatus => {
      expect(
        isSignatureEnvelopeUpdatable({
          ducStatus,
          signerStatus: [{ name: 'Alice', status: 'done' }],
        }),
      ).toBe(true)
    },
  )

  it.each(UNCORRECTABLE_STATUSES)(
    'returns false for an envelope in the "%s" state',
    ducStatus => {
      expect(
        isSignatureEnvelopeUpdatable({
          ducStatus,
          signerStatus: [{ name: 'Alice', status: 'done' }],
        }),
      ).toBe(false)
    },
  )

  it('returns false when a signer declined, even while the envelope is still in flight', () => {
    expect(
      isSignatureEnvelopeUpdatable({
        ducStatus: EDucSignatureStatusDucStatusEnum.sent,
        signerStatus: [
          { name: 'Alice', status: EDucSignerStatusStatusEnum.done },
          { name: 'Dan', status: EDucSignerStatusStatusEnum.declined },
        ],
      }),
    ).toBe(false)
  })

  it('tolerates a bounced signer, whose address a correction can still fix', () => {
    expect(
      isSignatureEnvelopeUpdatable({
        ducStatus: EDucSignatureStatusDucStatusEnum.sent,
        signerStatus: [
          { name: 'Alice', status: EDucSignerStatusStatusEnum.done },
          { name: 'Bob', status: EDucSignerStatusStatusEnum.bounced },
        ],
      }),
    ).toBe(true)
  })

  it('returns false when the status has not loaded', () => {
    expect(isSignatureEnvelopeUpdatable(undefined)).toBe(false)
  })
})
