import { validateAlias } from './validateAlias'

describe('validateAlias', () => {
  it('does not throw if alias is valid', () => {
    validateAlias({ valid: true, available: true })
  })
  it('throws if alias is taken', () => {
    expect(() => validateAlias({ valid: true, available: false })).toThrowError(
      'Sorry, that username has already been taken.',
    )
  })
  it('throws if alias is invalid', () => {
    expect(() => validateAlias({ valid: false, available: true })).toThrowError(
      'Sorry, that username is not valid. User names can contain letters, numbers, dot (.), dash (-) and underscore (_) and must be at least 3 characters long.',
    )
  })
  it('throws if invalid and unavailable, warning about validity', () => {
    expect(() =>
      validateAlias({ valid: false, available: false }),
    ).toThrowError(
      'Sorry, that username is not valid. User names can contain letters, numbers, dot (.), dash (-) and underscore (_) and must be at least 3 characters long.',
    )
  })
})
