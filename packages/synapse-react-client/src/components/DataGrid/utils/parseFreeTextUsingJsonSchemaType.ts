import { JSONSchema7Type } from 'json-schema'

export default function parseFreeTextGivenJsonSchemaType(
  freeText: string,
  colType?: JSONSchema7Type,
): unknown {
  if (!colType || colType === 'string') {
    return String(freeText)
  } else if (colType === 'number') {
    if (freeText.trim() === '') {
      // empty string parse result is 0, so treat it as empty
      return freeText
    }
    const parsed = Number(freeText)
    if (!isNaN(parsed)) {
      return parsed
    } else {
      return freeText
    }
  } else if (colType === 'boolean') {
    if (freeText.toLowerCase() === 'true') {
      return true
    } else if (freeText.toLowerCase() === 'false') {
      return false
    } else {
      return freeText
    }
  } else if (colType === 'object' || colType === 'array') {
    try {
      const parsed = JSON.parse(freeText)
      return parsed
    } catch (e) {
      // If we can't parse it, just set it to the input value
      return freeText
    }
  } else {
    // Unknown type, just set it to the input value
    return freeText
  }
}
