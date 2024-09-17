import {
  returnIfTwoFactorAuthError,
  allowNotFoundError,
} from './SynapseClientUtils'
import {
  SynapseClientError,
  ErrorResponseCode,
  TwoFactorAuthErrorResponse,
} from 'synapse-client'

describe('SynapseClientUtils', () => {
  describe('allowNotFoundError', () => {
    it('Passes along a non-404 successful response', async () => {
      const expected = {
        arbitrary: 'data',
      }
      const fn = jest.fn().mockResolvedValue(expected)

      const actual = await allowNotFoundError(fn)

      expect(expected).toEqual(actual)
    })
    it('Passes null on a 404 response', async () => {
      const expected = null
      const fn = jest
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
      const fn = jest.fn().mockRejectedValue(expected)

      await expect(() => allowNotFoundError(fn)).rejects.toEqual(expected)
    })
  })
  describe('returnIfTwoFactorAuthError', () => {
    it('Passes along a successful response', async () => {
      const expected = {
        arbitrary: 'data',
      }
      const fn = jest.fn().mockResolvedValue(expected)

      const actual = await returnIfTwoFactorAuthError(fn)

      expect(expected).toEqual(actual)
    })
    it('Rethrows a non-2fa error', async () => {
      const notFoundError = new SynapseClientError(
        404,
        'Not found!',
        expect.getState().currentTestName!,
      )
      const fn = jest.fn().mockRejectedValue(notFoundError)

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
      const fn = jest.fn().mockRejectedValue(expected)

      const actual = await returnIfTwoFactorAuthError(fn)
      expect(actual).toBe(twoFactorAuthError)
    })
  })
})
