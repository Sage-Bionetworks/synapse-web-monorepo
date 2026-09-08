import { describe, expect, it } from 'vitest'
import { normalizeWebsocketError } from './normalizeWebsocketError'

describe('normalizeWebsocketError', () => {
  it('converts a server error payload with a message string into an Error instance', () => {
    const payload = {
      message:
        'org.springframework.dao.DataIntegrityViolationException: PreparedStatementCallback; SQL [...]; Cannot add or update a child row',
      code: 'Bad Request',
      errno: 400,
    }

    const result = normalizeWebsocketError(payload)

    expect(result).toBeInstanceOf(Error)
    expect((result as Error).message).toBe(payload.message)
  })

  it('passes through a payload with no message property unchanged', () => {
    const payload = { code: 'Bad Request', errno: 400 }

    expect(normalizeWebsocketError(payload)).toBe(payload)
  })

  it('passes through a string unchanged', () => {
    expect(normalizeWebsocketError('something went wrong')).toBe(
      'something went wrong',
    )
  })

  it('passes through null unchanged', () => {
    expect(normalizeWebsocketError(null)).toBeNull()
  })

  it('passes through undefined unchanged', () => {
    expect(normalizeWebsocketError(undefined)).toBeUndefined()
  })
})
