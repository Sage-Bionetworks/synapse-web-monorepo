import { parseSynId } from './RegularExpressions'

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
})
