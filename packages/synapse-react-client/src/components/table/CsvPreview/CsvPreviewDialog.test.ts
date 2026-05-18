import { getInitialSeparatorForFile } from './CsvPreviewDialog'

function makeFile(name: string, type: string): File {
  return new File([''], name, { type })
}

describe('getInitialSeparatorForFile', () => {
  it('returns a tab for files with the tab-separated-values MIME type', () => {
    expect(
      getInitialSeparatorForFile(
        makeFile('data.csv', 'text/tab-separated-values'),
      ),
    ).toBe('\t')
  })

  it('returns a tab for .tsv extensions even when the MIME type is missing', () => {
    expect(getInitialSeparatorForFile(makeFile('data.tsv', ''))).toBe('\t')
  })

  it('returns a tab for .tab extensions', () => {
    expect(getInitialSeparatorForFile(makeFile('data.tab', ''))).toBe('\t')
  })

  it('falls back to comma for CSV files', () => {
    expect(getInitialSeparatorForFile(makeFile('data.csv', 'text/csv'))).toBe(
      ',',
    )
  })

  it('falls back to comma for unrecognized files', () => {
    expect(getInitialSeparatorForFile(makeFile('data.txt', 'text/plain'))).toBe(
      ',',
    )
    expect(getInitialSeparatorForFile(makeFile('mystery', ''))).toBe(',')
  })

  it('is case-insensitive on MIME type and extension', () => {
    expect(
      getInitialSeparatorForFile(
        makeFile('DATA.TSV', 'TEXT/TAB-SEPARATED-VALUES'),
      ),
    ).toBe('\t')
  })
})
