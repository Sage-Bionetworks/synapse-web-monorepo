// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/CsvTableDescriptor.html
// The description of a csv for upload or download.

export type CsvTableDescriptor = {
  separator?: string //	The delimiter to be used for separating entries in the resulting file. The default character ',' will be used if this is not provided by the caller. For tab-separated values use '\t'
  quoteCharacter?: string //	The character to be used for quoted elements in the resulting file. The default character '"' will be used if this is not provided by the caller.
  escapeCharacter?: string //	The escape character to be used for escaping a separator or quote in the resulting file. The default character '\\' will be used if this is not provided by the caller.
  lineEnd?: string //	The line feed terminator to be used for the resulting file. The default value of '\n' will be used if this is not provided by the caller.
  isFirstLineHeader?: boolean // Is the first line a header? The default value of 'true' will be used if this is not provided by the caller.
}
