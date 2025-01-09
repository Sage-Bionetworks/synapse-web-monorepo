import { parseSynId, convertDoiToLink } from './RegularExpressions'

describe('RegularExpressions', () => {
  describe('parseSynId', () => {
    test.each([
      ['syn123', { targetId: 'syn123', targetVersionNumber: undefined }],
      ['syn123.4', { targetId: 'syn123', targetVersionNumber: 4 }],
      ['Syn123.4', { targetId: 'syn123', targetVersionNumber: 4 }],
      ['123.4', null],
    ])('parseSynId - %s', (synId, expected) => {
      expect(parseSynId(synId)).toEqual(expected)
    })
  })
  describe('convertDoiToLink', () => {
    test('valid input', () => {
      const validInput = '   10.1000/abc123   '
      const result = convertDoiToLink(validInput)
      expect(result).toBe('https://dx.doi.org/10.1000/abc123')
    })
    test('empty string input', () => {
      const input = ''
      const result = convertDoiToLink(input)
      expect(result).toBe('')
    })
    test('invalid input', () => {
      const invalidInput = 'not-a-valid-doi'
      const result = convertDoiToLink(invalidInput)
      expect(result).toBe('')
    })
    test('malformed doi', () => {
      const malformedDoi = '10.1000'
      const result = convertDoiToLink(malformedDoi)
      expect(result).toBe('')
    })
  })
})
