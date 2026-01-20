import {
  hex2ascii,
  normalizeNumericId,
  replaceFileExtension,
  splitAndTrim,
} from './StringUtils'
import { JoinTeamSignedToken } from '@sage-bionetworks/synapse-types'

describe('StringUtils', () => {
  describe('hex2ascii', () => {
    it('should parse hex encoded string properly', () => {
      const exampleToken =
        '7b22636f6e637265746554797065223a226f72672e7361676562696f6e6574776f726b732e7265706f2e6d6f64656c2e4a6f696e5465616d5369676e6564546f6b656e222c22686d6163223a2266616b65686d6163222c2276657273696f6e223a312c22657870697265734f6e223a22323032332d30332d30385432323a30323a35372e3534365a222c22637265617465644f6e223a22323032332d30322d30365432323a30323a35372e3532315a222c22757365724964223a2231323334222c227465616d4964223a2235363738222c226d656d6265724964223a2231323334227d'
      const tokenJson = hex2ascii(exampleToken)
      const joinTeamToken = JSON.parse(tokenJson) as JoinTeamSignedToken
      expect(joinTeamToken.teamId).toEqual('5678')
      expect(joinTeamToken.userId).toEqual('1234')
      expect(joinTeamToken.memberId).toEqual('1234')
    })
  })

  describe('normalizeNumericId', () => {
    it('returns NaN when the input is null', () => {
      // @ts-expect-error - `null` input is not allowed by the type, but may have gotten passed in with an erroneous assertion
      expect(normalizeNumericId(null)).toBeNaN()
    })
    it("should return the number if it's a number", () => {
      expect(normalizeNumericId(123)).toEqual(123)
    })
    it("should return the targetVersionNumber if it's a synID", () => {
      expect(normalizeNumericId('syn123')).toEqual(123)
    })
    it("should return the targetVersionNumber if it's a synID with version", () => {
      expect(normalizeNumericId('syn123.4')).toEqual(123)
    })
    it('should return the parsed number if it is a string', () => {
      expect(normalizeNumericId('123')).toEqual(123)
    })
    it('returns NaN for anything else', () => {
      expect(normalizeNumericId('foo')).toBeNaN()
    })
  })

  describe('replaceFileExtension', () => {
    it('should replace the file extension with the new extension', () => {
      const filePath = 'example.txt'
      const newExtension = 'md'
      const result = replaceFileExtension(filePath, newExtension)
      expect(result).toEqual('example.md')
    })
    it('should replace the file extension with the new extension using a path with slashes', () => {
      const filePath = 'path/to/example.md'
      const newExtension = 'html'
      const result = replaceFileExtension(filePath, newExtension)
      expect(result).toEqual('example.html')
    })
  })

  describe('splitAndTrim', () => {
    it('should split a string by the default separator (a comma) and trim', () => {
      const input = 'foo, baz, bar'
      const result = splitAndTrim(input)
      expect(result).toEqual(['foo', 'baz', 'bar'])
    })
    it('should split by a custom separator and trim', () => {
      const input = 'foo :: baz :: bar'
      const result = splitAndTrim(input, '::')
      expect(result).toEqual(['foo', 'baz', 'bar'])
    })
    it('should handle strings without extra spaces', () => {
      const input = 'foo,baz,bar'
      const result = splitAndTrim(input)
      expect(result).toEqual(['foo', 'baz', 'bar'])
    })
    it('should handle strings with varying amounts of spaces', () => {
      const input = 'foo,  baz  ,   bar   '
      const result = splitAndTrim(input)
      expect(result).toEqual(['foo', 'baz', 'bar'])
    })
    it('should handle a single value', () => {
      const input = 'foo'
      const result = splitAndTrim(input)
      expect(result).toEqual(['foo'])
    })
    it('should handle empty strings in the list', () => {
      const input = 'foo,,bar'
      const result = splitAndTrim(input)
      expect(result).toEqual(['foo', '', 'bar'])
    })
  })
})
