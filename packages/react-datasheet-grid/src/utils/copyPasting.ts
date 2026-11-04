import { parseDom } from './domParser'

export const parseTextHtmlData = (data: string): string[][] => {
  const doc = parseDom(data.replaceAll(/<br\/?>/g, '\n'))
  const table = doc.getElementsByTagName('table')[0]

  if (table) {
    const rows: string[][] = []

    for (const tableRow of Array.from(table.rows)) {
      const row: string[] = []
      rows.push(row)

      for (const cell of Array.from(tableRow.cells)) {
        row.push(cell.textContent ?? '')
      }
    }

    return rows
  }

  const span = doc.getElementsByTagName('span')[0]

  if (span) {
    return [[span.textContent ?? '']]
  }

  return [['']]
}

export const parseTextPlainData = (data: string): string[][] => {
  const cleanData = data.replaceAll(/\r|\n$/g, '')
  const output: string[][] = [[]]
  let cursor = 0
  let startCell = 0
  let quoted = false
  let lastRowIndex = 0

  const saveCell = () => {
    let str = cleanData.slice(startCell, cursor)
    if (str.startsWith('"') && str.at(-1) === '"') {
      quoted = true
    }

    if (quoted && str.at(-1) === '"' && str.includes('\n')) {
      str = str.slice(1, -1).replaceAll('""', '"')
      quoted = false
    }

    if (quoted && str.at(-1) !== '"') {
      str.split('\n').forEach((cell, i, { length }) => {
        output[lastRowIndex].push(cell)

        if (i < length - 1) {
          output.push([])
          lastRowIndex++
        }
      })
    } else {
      output[lastRowIndex].push(str)
    }
  }

  while (cursor < cleanData.length) {
    if (
      quoted &&
      cleanData[cursor] === '"' &&
      ![undefined, '\t', '"'].includes(cleanData[cursor + 1])
    ) {
      quoted = false
    }

    if (quoted && cleanData[cursor] === '"' && cleanData[cursor + 1] === '"') {
      cursor++
    }

    if (cursor === startCell && cleanData[cursor] === '"') {
      quoted = true
    }

    if (cleanData[cursor] === '\t') {
      saveCell()
      startCell = cursor + 1
      quoted = false
    }

    if (cleanData[cursor] === '\n' && !quoted) {
      saveCell()
      output.push([])
      startCell = cursor + 1
      lastRowIndex++
    }

    cursor++
  }

  saveCell()

  return output
}

export const quoteTsvCell = (value: string): string =>
  /[\t\n\r"]/.test(value) ? `"${value.replaceAll('"', '""')}"` : value

export const encodeHtml = (str: string) => {
  return str
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

export const isPrintableUnicode = (str: string): boolean => {
  // Matches a single character that is neither a C0 control or space
  // (\x00-\x20) nor a C1 control (\x7F-\x9F) — i.e. a keystroke that should
  // start editing a cell. Matching control characters is the point here.
  // oxlint-disable-next-line no-control-regex
  return /^[^\x00-\x20\x7F-\x9F]$/.exec(str) !== null
}
