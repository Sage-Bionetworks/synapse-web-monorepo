// Copied from lib-shared-models ContentTypeUtils.class

const CODE_EXTENSIONS = [
  '.awk',
  '.bat',
  '.btm',
  '.c',
  '.cmd',
  '.cpp',
  '.cxx',
  '.def',
  '.dlg',
  '.dpc',
  '.dpj',
  '.dtd',
  '.h',
  '.hdl',
  '.hpp',
  '.hrc',
  '.html',
  '.hxx',
  '.inc',
  '.ini',
  '.inl',
  '.ins',
  '.ipy',
  '.java',
  '.js',
  '.jsp',
  '.l',
  '.lgt',
  '.ll',
  '.par',
  '.pl',
  '.py',
  '.r',
  '.rc',
  '.rdb',
  '.res',
  '.s',
  '.sbl',
  '.scp',
  '.sh',
  '.sql',
  '.src',
  '.srs',
  '.xml',
  '.xrb',
  '.y',
  '.yaml',
  '.yxx',
]

export const PLAIN_TEXT = 'text/plain'
export const TEXT_COMMA_SEPARATED_VALUES = 'text/csv'
export const TEXT_TAB_SEPARATED_VALUES = 'text/tab-separated-values'
export const APPLICATION_OCTET_STREAM = 'application/octet-stream'

const WEB_CODE_EXTENSIONS = ['.cwl', '.wdl', '.json']

export function isRecognizedCodeFileName(fileName: string): boolean {
  let isCodeFile = false
  if (fileName != null) {
    const lastDot = fileName.lastIndexOf('.')
    if (lastDot > -1) {
      const extension = fileName.substring(lastDot).toLowerCase()
      isCodeFile = CODE_EXTENSIONS.includes(extension)
    }
  }

  return isCodeFile
}

function getExtension(fileName: string): string | null {
  if (fileName != null) {
    const lastDot = fileName.lastIndexOf('.')
    if (lastDot > -1) {
      return fileName.substring(lastDot + 1).toLowerCase()
    }
  }
  return null
}

function isWebRecognizedCodeFileName(fileName: string): boolean {
  let isPlainText = false
  const extension = getExtension(fileName)
  if (extension != null) {
    isPlainText = WEB_CODE_EXTENSIONS.includes('.' + extension)
  }
  return isPlainText
}

/**
 * Given an initial Content Type and a file name, returns an appropriate Content
 * Type if the initial value is null or empty. Otherwise, the original Content
 * Type is returned.
 * @param type
 * @param fileName
 */
export function fixDefaultContentType(
  type: string | null,
  fileName: string,
): string {
  let contentType = type
  const lowercaseFilename = fileName.toLowerCase()
  if (type == null || type.trim().length == 0) {
    if (
      isRecognizedCodeFileName(fileName) ||
      isWebRecognizedCodeFileName(fileName) ||
      lowercaseFilename.endsWith('.txt')
    ) {
      contentType = PLAIN_TEXT
    } else if (
      lowercaseFilename.endsWith('.tsv') ||
      lowercaseFilename.endsWith('.tab')
    ) {
      contentType = TEXT_TAB_SEPARATED_VALUES
    } else if (lowercaseFilename.endsWith('.csv')) {
      contentType = TEXT_COMMA_SEPARATED_VALUES
    } else {
      // fall back to the least specific official MIME type...
      contentType = APPLICATION_OCTET_STREAM
    }
  }
  return contentType!
}
