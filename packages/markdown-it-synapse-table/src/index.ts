import MarkdownIt, { Token } from 'markdown-it'
import StateBlock from 'markdown-it/lib/rules_block/state_block'
import { RuleBlock } from 'markdown-it/lib/parser_block'

const tableClassStartRE = new RegExp(
  '^\\s*{[|]\\s*class\\s*=\\s*"\\s*(.*)"\\s*',
)
const tableClassEndRE = new RegExp('^\\s*[|]}\\s*')
const centerStartRE = new RegExp('^s*->.*')
const centerEndRE = new RegExp('.*<-s*$')
const outerPipesRE = new RegExp('^s*[|].+[|]s*$')

function getLine(state: StateBlock, line: number): string {
  const pos = state.bMarks[line] + state.blkIndent
  const max = state.eMarks[line]

  return state.src.substring(pos, max)
}

function escapedSplit(str: string): string[] {
  if (outerPipesRE.test(str)) {
    str = str.replace(/^\||\|$/g, '')
  }

  const result: string[] = []
  let pos = 0
  const max = str.length
  let ch: number
  let escapes = 0
  let lastPos = 0
  let backTicked = false
  let lastBackTick = (ch = str.charCodeAt(pos))

  while (pos < max) {
    if (ch === 0x60 && escapes % 2 === 0) {
      // `
      backTicked = !backTicked
      lastBackTick = pos
    } else if (ch === 0x7c && escapes % 2 === 0 && !backTicked) {
      // |
      result.push(str.substring(lastPos, pos))
      lastPos = pos + 1
    } else if (ch === 0x5c) {
      // \
      escapes++
    } else {
      escapes = 0
    }

    pos++

    // If there was an un-closed backtick, go back to just after
    // the last backtick, but as if it was a normal character
    if (pos === max && backTicked) {
      backTicked = false
      pos = lastBackTick + 1
    }

    ch = str.charCodeAt(pos)
  }

  result.push(str.substring(lastPos))

  return result
}

const ALLOWED_CLASS_NAMES = [
  'text-align-center',
  'text-align-right',
  'border',
  'center',
  'short',
]

function filterClassNames(classNames: string): string {
  return classNames
    .split(' ')
    .filter(className => ALLOWED_CLASS_NAMES.includes(className))
    .join(' ')
}

function parseDividerForAlignment(
  dividerLine: string,
): null | ('left' | 'center' | 'right' | null)[] {
  if (!dividerLine.startsWith('|') || !dividerLine.endsWith('|')) {
    // Must start and end with pipes for us to parse out alignment
    return null
  }
  const cols = dividerLine.split('|').map(cell => cell.trim())
  cols.splice(0, 1) // Remove the first element, which will always be empty
  const alignments: ('left' | 'center' | 'right' | null)[] = []
  cols.forEach(col => {
    if (col.startsWith(':') && col.endsWith(':')) {
      alignments.push('center')
    } else if (col.startsWith(':')) {
      alignments.push('left')
    } else if (col.endsWith(':')) {
      alignments.push('right')
    } else {
      alignments.push(null)
    }
  })

  return alignments
}

export default function synapse_table_plugin(md: MarkdownIt) {
  const table: RuleBlock = (state, startLine, endLine, silent) => {
    let lineText: string
    let pos: number
    let i: number
    let nextLine: number
    let columns: string[]
    let token: Token
    let tableLines: [number, number]
    let tbodyLines: [number, number]
    let classNames: string
    let tableBodyStartLine: number
    let headerLine: number
    let isSpecialSyntaxTable = false
    let wrapWithDiv = false
    // should have at least two lines
    // (!!! Synapse change, used to be 3 due to required ---|---|--- line).  Header and single row.
    if (startLine + 1 > endLine) {
      return false
    }

    pos = state.bMarks[startLine] + state.tShift[startLine]
    if (pos >= state.eMarks[startLine]) {
      return false
    }
    lineText = getLine(state, startLine)

    // look for optional class definition start, like '{| class="border"'
    if (tableClassStartRE.test(lineText)) {
      // this table definition includes class names, so the start marker is {| and end marker will be |}
      classNames = lineText.match(tableClassStartRE)[1]
      wrapWithDiv = classNames.indexOf('short') !== -1
      headerLine = startLine + 1
      // If tableClassStartRE passes, then it's definitely a table.
      isSpecialSyntaxTable = true
    } else {
      headerLine = startLine
    }

    if (state.sCount[headerLine] < state.blkIndent) {
      return false
    }

    pos = state.bMarks[headerLine] + state.tShift[headerLine]
    if (pos >= state.eMarks[headerLine]) {
      return false
    }

    // read column headers
    lineText = getLine(state, headerLine).trim()
    if (lineText.indexOf('|') === -1 && !isSpecialSyntaxTable) {
      return false
    }

    // has a '|'.  If it looks like there is math on this line, skip it.
    if (lineText.indexOf('$$') !== -1) {
      return false
    }
    columns = escapedSplit(lineText)
    // header row will define an amount of columns in the entire table,
    // and align row shouldn't be smaller than that (the rest of the rows can)
    const columnCount = columns.length

    if (silent) {
      return true
    }

    if (wrapWithDiv) {
      token = state.push('div_wrapper', 'div', 1)
      token.attrJoin('class', 'markdowntableWrap')
    }
    token = state.push('table_open', 'table', 1)
    token.map = tableLines = [startLine, 0]
    if (classNames) {
      token.attrJoin('class', filterClassNames(classNames))
      // start line of the table (header) is really the second line.
      startLine++
    }

    lineText = getLine(state, headerLine + 1).trim()

    let alignments: (string | null)[] | null = null
    // If this line is of the form ---|---|---, then we have column headers, and we should skip this line.
    // Else, no column headers and we should skip to the body.
    if (/^[-:| ]+$/.test(lineText) && lineText.indexOf('|') !== -1) {
      alignments = parseDividerForAlignment(lineText)
      // we have column headers
      tableBodyStartLine = headerLine + 2
      token = state.push('thead_open', 'thead', 1)
      token.map = [startLine, startLine + 1]

      token = state.push('tr_open', 'tr', 1)
      token.map = [startLine, startLine + 1]

      for (i = 0; i < columns.length; i++) {
        token = state.push('th_open', 'th', 1)
        token.map = [startLine, startLine + 1]
        if (alignments && alignments[i]) {
          token.attrSet('style', `text-align: ${alignments[i]}`)
        }

        token = state.push('inline', '', 0)
        token.content = columns[i].trim()
        token.map = [startLine, startLine + 1]
        token.children = []

        token = state.push('th_close', 'th', -1)
      }

      token = state.push('tr_close', 'tr', -1)
      token = state.push('thead_close', 'thead', -1)
    } else {
      // no column headers
      tableBodyStartLine = headerLine
    }

    token = state.push('tbody_open', 'tbody', 1)
    token.map = tbodyLines = [tableBodyStartLine, 0]

    for (nextLine = tableBodyStartLine; nextLine < endLine; nextLine++) {
      if (state.sCount[nextLine] < state.blkIndent) {
        break
      }

      lineText = getLine(state, nextLine).trim()
      if (tableClassEndRE.test(lineText)) {
        // end of table with class definitions. Include this line in the table definition
        nextLine++
        break
      }
      if (lineText.indexOf('|') === -1 && !isSpecialSyntaxTable) {
        break
      }
      columns = escapedSplit(lineText)

      token = state.push('tr_open', 'tr', 1)
      // if line starts with -> and ends with <-, then eat these characters (SWC-3000)
      if (
        centerStartRE.test(columns[0]) &&
        centerEndRE.test(columns[columnCount - 1])
      ) {
        columns[0] = columns[0].substring(columns[0].indexOf('->') + 2)
        columns[columnCount - 1] = columns[columnCount - 1].substring(
          0,
          columns[columnCount - 1].indexOf('<-'),
        )
      }
      for (i = 0; i < columnCount; i++) {
        token = state.push('td_open', 'td', 1)
        if (alignments && alignments[i]) {
          token.attrSet('style', `text-align: ${alignments[i]}`)
        }
        token = state.push('inline', '', 0)
        token.content = columns[i] ? columns[i].trim() : ''
        token.children = []

        token = state.push('td_close', 'td', -1)
      }
      token = state.push('tr_close', 'tr', -1)
    }
    state.push('tbody_close', 'tbody', -1)
    state.push('table_close', 'table', -1)

    if (wrapWithDiv) {
      state.push('div_wrapper', 'div', -1)
    }

    tableLines[1] = tbodyLines[1] = nextLine
    state.line = nextLine
    return true
  }
  const rulesCanBeTerminated = ['paragraph', 'reference']
  md.block.ruler.at('table', table, { alt: rulesCanBeTerminated.slice() })
}
