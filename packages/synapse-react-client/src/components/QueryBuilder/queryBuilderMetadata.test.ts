import { facetValueMatchesFilter } from './queryBuilderMetadata'

describe('facetValueMatchesFilter', () => {
  // An ENTITYID column stores the bare numeric ID, but the pill is labeled
  // with the resolved entity name.
  const value = '123'
  const label = 'My mock file entity'

  it.each([
    ['an empty query', ''],
    ['a whitespace-only query', '   '],
    ['a label substring', 'mock file'],
    ['a label substring in a different case', 'MOCK FILE'],
    ['a label substring with surrounding whitespace', '  mock file  '],
    ['the raw value', '123'],
    ['a raw value substring', '12'],
    ['the value as a pasted entity ID', 'syn123'],
    ['a pasted entity ID in a different case', 'SYN123'],
    ['a pasted entity ID with a version suffix', 'syn123.4'],
  ])('matches %s', (_description, query) => {
    expect(facetValueMatchesFilter(value, label, query)).toBe(true)
  })

  it.each([
    ['text absent from both the label and the value', 'zebra'],
    ['a different entity ID', 'syn456'],
    // Guards against `syn`-prefixing the value, which would make the bare
    // prefix match every pill.
    ['a bare syn prefix', 'syn'],
    ['an ID that only shares a prefix with the value', 'syn1234'],
  ])('does not match %s', (_description, query) => {
    expect(facetValueMatchesFilter(value, label, query)).toBe(false)
  })

  it('matches a user ID pasted without a syn prefix', () => {
    expect(facetValueMatchesFilter('999', 'myUserName', '999')).toBe(true)
  })

  it('matches the friendly not-set label', () => {
    expect(
      facetValueMatchesFilter(
        'org.sagebionetworks.UNDEFINED_NULL_NOTSET',
        'Not Assigned',
        'not assigned',
      ),
    ).toBe(true)
  })
})
