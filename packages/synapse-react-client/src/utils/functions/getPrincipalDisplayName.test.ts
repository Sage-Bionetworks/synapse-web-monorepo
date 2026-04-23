import { getPrincipalDisplayName } from './getPrincipalDisplayName'

describe('getPrincipalDisplayName', () => {
  describe('team principals (isIndividual: false)', () => {
    it('returns the team name without an @ prefix', () => {
      expect(
        getPrincipalDisplayName({ userName: 'My Team', isIndividual: false }),
      ).toBe('My Team')
    })

    it('ignores showFullName and showUsername options for teams', () => {
      const header = {
        userName: 'My Team',
        firstName: 'ignored',
        isIndividual: false,
      }
      expect(getPrincipalDisplayName(header, { showFullName: true })).toBe(
        'My Team',
      )
      expect(
        getPrincipalDisplayName(header, {
          showFullName: true,
          showUsername: false,
        }),
      ).toBe('My Team')
    })
  })

  describe('individual users (default / isIndividual: true)', () => {
    describe('default options (showFullName: false)', () => {
      it('returns @username when no name fields are present', () => {
        expect(getPrincipalDisplayName({ userName: 'jdoe' })).toBe('@jdoe')
      })

      it('returns @username even when name fields are present', () => {
        expect(
          getPrincipalDisplayName({
            userName: 'jdoe',
            firstName: 'Jane',
            lastName: 'Doe',
          }),
        ).toBe('@jdoe')
      })

      it('treats isIndividual: undefined the same as an individual', () => {
        expect(
          getPrincipalDisplayName({ userName: 'jdoe', firstName: 'Jane' }),
        ).toBe('@jdoe')
      })
    })

    describe('showFullName: true', () => {
      it('joins first and last name with a non-breaking space', () => {
        expect(
          getPrincipalDisplayName(
            { userName: 'jdoe', firstName: 'Jane', lastName: 'Doe' },
            { showFullName: true },
          ),
        ).toBe('Jane\u00A0Doe\u00A0(@jdoe)')
      })

      it('returns only firstName when lastName is absent', () => {
        expect(
          getPrincipalDisplayName(
            { userName: 'jdoe', firstName: 'Jane' },
            { showFullName: true },
          ),
        ).toBe('Jane\u00A0(@jdoe)')
      })

      it('returns only lastName when firstName is absent', () => {
        expect(
          getPrincipalDisplayName(
            { userName: 'jdoe', lastName: 'Doe' },
            { showFullName: true },
          ),
        ).toBe('Doe\u00A0(@jdoe)')
      })

      it('falls back to @username when no name fields exist', () => {
        expect(
          getPrincipalDisplayName({ userName: 'jdoe' }, { showFullName: true }),
        ).toBe('@jdoe')
      })

      it('falls back to @username when name fields are empty strings', () => {
        expect(
          getPrincipalDisplayName(
            { userName: 'jdoe', firstName: '', lastName: '' },
            { showFullName: true },
          ),
        ).toBe('@jdoe')
      })
    })

    describe('showFullName: true, showUsername: false', () => {
      it('omits the @username from the result', () => {
        expect(
          getPrincipalDisplayName(
            { userName: 'jdoe', firstName: 'Jane', lastName: 'Doe' },
            { showFullName: true, showUsername: false },
          ),
        ).toBe('Jane\u00A0Doe')
      })

      it('falls back to @username even when showUsername is false and no name fields exist', () => {
        expect(
          getPrincipalDisplayName(
            { userName: 'jdoe' },
            { showFullName: true, showUsername: false },
          ),
        ).toBe('@jdoe')
      })
    })
  })
})
