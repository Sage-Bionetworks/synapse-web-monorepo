import {
  isJSONObjectAllPrimitiveKeys,
  isJSONPrimitive,
} from './JSONRendererUtils'

describe('JSONRendererUtils', () => {
  describe('isJSONPrimitive', () => {
    it.each([
      ['string', 'foo', true],
      ['number', 25, true],
      ['boolean', false, true],
      ['null', null, true],
      ['object', { foo: 'bar' }, false],
      ['array', ['foo', 'bar'], false],
      ['function', () => {}, false],
      ['undefined', undefined, false],
      ['Infinity', Infinity, false],
      ['NaN', NaN, false],
      ['Symbol', Symbol('someSymbol'), false],
    ])('%s case', (_case, value, expected) => {
      expect(isJSONPrimitive(value)).toBe(expected)
    })
  })

  describe('isJSONObjectAllPrimitiveKeys', () => {
    const allPrimitiveValues = {
      string: 'foo',
      number: 25,
      boolean: false,
      null: null,
    }
    it('should return true if all keys are primitive', () => {
      expect(isJSONObjectAllPrimitiveKeys(allPrimitiveValues)).toBe(true)
    })

    it('should return true if there are no keys (empty object)', () => {
      expect(isJSONObjectAllPrimitiveKeys({})).toBe(true)
    })

    it('should return false if any keys are not primitive', () => {
      expect(
        isJSONObjectAllPrimitiveKeys({
          ...allPrimitiveValues,
          nonPrimitive: {},
        }),
      ).toBe(false)
    })
  })
})
