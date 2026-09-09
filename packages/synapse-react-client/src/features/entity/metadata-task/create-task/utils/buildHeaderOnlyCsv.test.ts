import { CsvTableDescriptor } from '@sage-bionetworks/synapse-client'
import { buildHeaderOnlyCsv } from './buildHeaderOnlyCsv'

describe('buildHeaderOnlyCsv', () => {
  const defaultDescriptor: CsvTableDescriptor = {
    separator: ',',
    quoteCharacter: '"',
    escapeCharacter: '\\',
    lineEnd: '\n',
    isFirstLineHeader: true,
  }

  it('quotes every header and joins them with the separator, terminated by lineEnd', () => {
    expect(
      buildHeaderOnlyCsv(['firstName', 'lastName'], defaultDescriptor),
    ).toBe('"firstName","lastName"\n')
  })

  it('doubles an embedded quote character', () => {
    expect(buildHeaderOnlyCsv(['a"b'], defaultDescriptor)).toBe('"a""b"\n')
  })

  it('doubles an embedded escape character', () => {
    expect(buildHeaderOnlyCsv(['a\\b'], defaultDescriptor)).toBe('"a\\\\b"\n')
  })

  it('doubles embedded quote and escape characters together, in a single pass', () => {
    expect(buildHeaderOnlyCsv(['a"\\b'], defaultDescriptor)).toBe(
      '"a""\\\\b"\n',
    )
  })

  it('does not escape an embedded separator, since the field is always quoted', () => {
    expect(buildHeaderOnlyCsv(['a,b'], defaultDescriptor)).toBe('"a,b"\n')
  })

  it('quotes an empty field as an empty quoted string', () => {
    expect(buildHeaderOnlyCsv([''], defaultDescriptor)).toBe('""\n')
  })

  it('produces just the lineEnd for an empty list of headers', () => {
    expect(buildHeaderOnlyCsv([], defaultDescriptor)).toBe('\n')
  })

  it('respects a custom descriptor (separator, quote character, escape character, line end)', () => {
    const customDescriptor: CsvTableDescriptor = {
      separator: ';',
      quoteCharacter: "'",
      escapeCharacter: '^',
      lineEnd: '\r\n',
      isFirstLineHeader: true,
    }

    expect(buildHeaderOnlyCsv(["a'b", 'c^d', 'e'], customDescriptor)).toBe(
      "'a''b';'c^^d';'e'\r\n",
    )
  })
})
