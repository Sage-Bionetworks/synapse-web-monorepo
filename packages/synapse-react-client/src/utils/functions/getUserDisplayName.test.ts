import { getUserDisplayName } from './getUserDisplayName'

describe('getUserDisplayName', () => {
  describe('userName', () => {
    it('always prefixes userName with @', () => {
      const { userName } = getUserDisplayName({ userName: 'jdoe' })
      expect(userName).toBe('@jdoe')
    })
  })

  describe('fullName', () => {
    it('is null when showFullName is false (default)', () => {
      const { fullName } = getUserDisplayName({
        userName: 'jdoe',
        firstName: 'Jane',
        lastName: 'Doe',
      })
      expect(fullName).toBeNull()
    })

    it('is null when showFullName is true but both name fields are absent', () => {
      const { fullName } = getUserDisplayName({ userName: 'jdoe' }, true)
      expect(fullName).toBeNull()
    })

    it('joins first and last name with a non-breaking space when both are present', () => {
      const { fullName } = getUserDisplayName(
        { userName: 'jdoe', firstName: 'Jane', lastName: 'Doe' },
        true,
      )
      expect(fullName).toBe('Jane\u00A0Doe')
    })

    it('returns only firstName when lastName is absent', () => {
      const { fullName } = getUserDisplayName(
        { userName: 'jdoe', firstName: 'Jane' },
        true,
      )
      expect(fullName).toBe('Jane')
    })

    it('returns only lastName when firstName is absent', () => {
      const { fullName } = getUserDisplayName(
        { userName: 'jdoe', lastName: 'Doe' },
        true,
      )
      expect(fullName).toBe('Doe')
    })

    it('treats empty-string name fields the same as absent', () => {
      const { fullName } = getUserDisplayName(
        { userName: 'jdoe', firstName: '', lastName: '' },
        true,
      )
      expect(fullName).toBeNull()
    })
  })
})
