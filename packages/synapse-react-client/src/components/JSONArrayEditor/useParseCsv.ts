import { JSONSchema7Definition } from 'json-schema'
import { parse as papaparse } from 'papaparse'
import { useCallback, useMemo } from 'react'
import { isObject } from 'lodash-es'

export type ParseCsvOptions = {
  /* If provided, items will be parsed based on the data type prescribed by the schema */
  jsonSchemaDefinition?: JSONSchema7Definition
}

export type UseParseCsvReturn = {
  parse: (dataToParse: string) => Promise<unknown[]>
}

const DEFAULT_OPTIONS: ParseCsvOptions = {
  jsonSchemaDefinition: { type: 'string' },
}

export default function useParseCsv(
  options: ParseCsvOptions = DEFAULT_OPTIONS,
): UseParseCsvReturn {
  const { jsonSchemaDefinition } = options
  const itemsAreString = useMemo(
    () =>
      isObject(jsonSchemaDefinition) &&
      jsonSchemaDefinition.type &&
      jsonSchemaDefinition.type === 'string',
    [jsonSchemaDefinition],
  )

  const parse = useCallback(
    (dataToParse: string): Promise<unknown[]> => {
      return new Promise((resolve, reject) => {
        papaparse(dataToParse, {
          // If the items are not strings, let papaparse guess the type. Otherwise, always parse as strings.
          dynamicTyping: !itemsAreString,
          complete: result => {
            if (result.errors.length > 0) {
              reject(result.errors)
            } else {
              resolve(result.data.flat())
            }
          },
        })
      })
    },
    [itemsAreString],
  )

  return {
    parse,
  }
}
