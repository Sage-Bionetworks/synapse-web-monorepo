import {
  returnIfTwoFactorAuthError,
  allowNotFoundError,
} from './SynapseClientUtils'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { ErrorResponseCode } from '@sage-bionetworks/synapse-client/generated/models/ErrorResponseCode'
import { TwoFactorAuthErrorResponse } from '@sage-bionetworks/synapse-client/generated/models/TwoFactorAuthErrorResponse'

describe('SynapseClientUtils', () => {
  describe('allowNotFoundError', () => {
    it('Passes along a non-404 successful response', async () => {
      const expected = {
        arbitrary: 'data',
      }
      const fn = vi.fn().mockResolvedValue(expected)

      const actual = await allowNotFoundError(fn)

      expect(expected).toEqual(actual)
    })
    it('Passes null on a 404 response', async () => {
      const expected = null
      const fn = vi
        .fn()
        .mockRejectedValue(
          new SynapseClientError(
            404,
            'Not found!',
            expect.getState().currentTestName!,
          ),
        )

      const actual = await allowNotFoundError(fn)

      expect(expected).toEqual(actual)
    })
    it('Passes along a non-404 error response', async () => {
      const expected = new SynapseClientError(
        400,
        'Bad request!',
        expect.getState().currentTestName!,
      )
      const fn = vi.fn().mockRejectedValue(expected)

      await expect(() => allowNotFoundError(fn)).rejects.toEqual(expected)
    })
  })
  describe('returnIfTwoFactorAuthError', () => {
    it('Passes along a successful response', async () => {
      const expected = {
        arbitrary: 'data',
      }
      const fn = vi.fn().mockResolvedValue(expected)

      const actual = await returnIfTwoFactorAuthError(fn)

      expect(expected).toEqual(actual)
    })
    it('Rethrows a non-2fa error', async () => {
      const notFoundError = new SynapseClientError(
        404,
        'Not found!',
        expect.getState().currentTestName!,
      )
      const fn = vi.fn().mockRejectedValue(notFoundError)

      await expect(returnIfTwoFactorAuthError(fn)).rejects.toEqual(
        notFoundError,
      )
    })
    it('Passes along a two factor authentication error response', async () => {
      const twoFactorAuthError: TwoFactorAuthErrorResponse = {
        reason: 'Need 2fa',
        errorCode: ErrorResponseCode.TWO_FA_REQUIRED,
        userId: 12345,
        twoFaToken: 'abc123',
        concreteType:
          'org.sagebionetworks.repo.model.auth.TwoFactorAuthErrorResponse',
      }
      const expected = new SynapseClientError(
        401,
        'Need 2fa',
        expect.getState().currentTestName!,
        twoFactorAuthError,
      )
      const fn = vi.fn().mockRejectedValue(expected)

      const actual = await returnIfTwoFactorAuthError(fn)
      expect(actual).toBe(twoFactorAuthError)
    })
  })
})
