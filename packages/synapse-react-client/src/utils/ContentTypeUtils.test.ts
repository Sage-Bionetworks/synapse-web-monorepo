import {
  APPLICATION_OCTET_STREAM,
  fixDefaultContentType,
  PLAIN_TEXT,
  TEXT_COMMA_SEPARATED_VALUES,
  TEXT_TAB_SEPARATED_VALUES,
} from './ContentTypeUtils'

describe('ContentTypeUtils', () => {
  test('fixDefaultContentType', () => {
    let inputFilename = 'file.R'
    let inputContentType: string | null = 'foo/bar'

    // if the content type coming from the browser field is set,
    // then this method should never override it
    expect(inputContentType).toEqual(
      fixDefaultContentType(inputContentType, inputFilename),
    )

    // but if the field reports a null or empty content type, then this method should fix it
    inputContentType = ''
    expect(PLAIN_TEXT).toEqual(
      fixDefaultContentType(inputContentType, inputFilename),
    )

    inputContentType = null
    expect(PLAIN_TEXT).toEqual(
      fixDefaultContentType(inputContentType, inputFilename),
    )

    // should fix tab delimited files too
    inputFilename = 'file.tab'
    expect(TEXT_TAB_SEPARATED_VALUES).toEqual(
      fixDefaultContentType(inputContentType, inputFilename),
    )

    inputFilename = 'file.tsv'
    expect(TEXT_TAB_SEPARATED_VALUES).toEqual(
      fixDefaultContentType(inputContentType, inputFilename),
    )

    // should fix CSV files as well
    inputFilename = 'file.CSV'
    expect(TEXT_COMMA_SEPARATED_VALUES).toEqual(
      fixDefaultContentType(inputContentType, inputFilename),
    )

    // should fix text files as well
    inputFilename = 'file.TXT'
    expect(PLAIN_TEXT).toEqual(
      fixDefaultContentType(inputContentType, inputFilename),
    )

    // should fix workflow files
    expect(PLAIN_TEXT).toEqual(
      fixDefaultContentType(inputContentType, 'test.wDL'),
    )
    expect(PLAIN_TEXT).toEqual(
      fixDefaultContentType(inputContentType, 'test.Cwl'),
    )

    // test default
    inputContentType = null
    inputFilename = ''
    expect(APPLICATION_OCTET_STREAM).toEqual(
      fixDefaultContentType(inputContentType, inputFilename),
    )
  })
})
