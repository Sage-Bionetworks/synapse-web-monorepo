import {
  getColumnSizeCssVariable,
  getHeaderSizeCssVariable,
} from './TanStackTableUtils'

// Custom property names referenced in `var()` must be valid CSS identifiers, or the browser drops the declaration.
const VALID_UNESCAPED_CUSTOM_PROPERTY_NAME = /^--[A-Za-z0-9_-]+$/

describe('TanStackTableUtils', () => {
  describe.each([
    ['getColumnSizeCssVariable', getColumnSizeCssVariable],
    ['getHeaderSizeCssVariable', getHeaderSizeCssVariable],
  ])('%s', (_name, getCssVariable) => {
    it.each([
      'AMP AIM_Technology Core_TC-Michigan_Access Team',
      'New Column',
      '__SRC.RowSelectionColumn',
      'weight (kg)',
      'café',
    ])('returns a valid custom property name for column ID "%s"', id => {
      expect(getCssVariable(id)).toMatch(VALID_UNESCAPED_CUSTOM_PROPERTY_NAME)
    })

    it('returns distinct names for distinct column IDs', () => {
      const ids = ['a b', 'a_b', 'a_20_b', 'a-b', 'a.b', 'ab']
      const names = new Set(ids.map(getCssVariable))
      expect(names.size).toBe(ids.length)
    })
  })
})
