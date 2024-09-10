/*! markdown-it-synapse-table 1.0.6 https://github.com/jay-hodgson/markdown-it-synapse-table @license MIT */ ;(function (
  f,
) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = f()
  } else if (typeof define === 'function' && define.amd) {
    define([], f)
  } else {
    var g
    if (typeof window !== 'undefined') {
      g = window
    } else if (typeof global !== 'undefined') {
      g = global
    } else if (typeof self !== 'undefined') {
      g = self
    } else {
      g = this
    }
    g.markdownitSynapseTable = f()
  }
})(function () {
  var define, module, exports
  return (function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == 'function' && require
          if (!u && a) return a(o, !0)
          if (i) return i(o, !0)
          var f = new Error("Cannot find module '" + o + "'")
          throw ((f.code = 'MODULE_NOT_FOUND'), f)
        }
        var l = (n[o] = { exports: {} })
        t[o][0].call(
          l.exports,
          function (e) {
            var n = t[o][1][e]
            return s(n ? n : e)
          },
          l,
          l.exports,
          e,
          t,
          n,
          r,
        )
      }
      return n[o].exports
    }
    var i = typeof require == 'function' && require
    for (var o = 0; o < r.length; o++) s(r[o])
    return s
  })(
    {
      1: [
        function (require, module, exports) {
          // Process '## headings'

          'use strict'

          module.exports = function synapse_table_plugin(md) {
            var tableClassStartRE = new RegExp(
              '^\\s*{[|]{1}\\s*class\\s*=\\s*"\\s*(.*)"\\s*',
            )
            var tableClassEndRE = new RegExp('^\\s*[|]{1}}\\s*')
            var centerStartRE = new RegExp('^s*[-]{1}[>]{1}.*')
            var centerEndRE = new RegExp('.*[<]{1}[-]{1}s*$')
            var outerPipesRE = new RegExp('^s*[|]{1}.+[|]{1}s*$')
            function getLine(state, line) {
              var pos = state.bMarks[line] + state.blkIndent,
                max = state.eMarks[line]

              return state.src.substr(pos, max - pos)
            }

            function escapedSplit(str) {
              if (outerPipesRE.test(str)) {
                str = str.replace(/^\||\|$/g, '')
              }

              var result = [],
                pos = 0,
                max = str.length,
                ch,
                escapes = 0,
                lastPos = 0,
                backTicked = false,
                lastBackTick = 0

              ch = str.charCodeAt(pos)

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

            function table(state, startLine, endLine, silent) {
              var lineText,
                pos,
                i,
                nextLine,
                columns,
                columnCount,
                token,
                tableLines,
                tbodyLines,
                classNames,
                tableBodyStartLine,
                headerLine,
                isSpecialSyntaxTable = false,
                wrapWithDiv = false
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
              columnCount = columns.length

              if (silent) {
                return true
              }

              if (wrapWithDiv) {
                token = state.push('div_wrapper', 'div', 1)
                token.attrs = [['class', ' markdowntableWrap ']]
              }
              token = state.push('table_open', 'table', 1)
              token.map = tableLines = [startLine, 0]
              if (classNames) {
                token.attrs = [['class', ' ' + classNames + ' ']]
                // start line of the table (header) is really the second line.
                startLine++
              }

              lineText = getLine(state, headerLine + 1).trim()

              // If this line is of the form ---|---|---, then we have column headers and we should skip this line.
              // Else, no column headers and we should skip to the body.
              if (/^[-:| ]+$/.test(lineText) && lineText.indexOf('|') !== -1) {
                // we have column headers
                tableBodyStartLine = headerLine + 2
                token = state.push('thead_open', 'thead', 1)
                token.map = [startLine, startLine + 1]

                token = state.push('tr_open', 'tr', 1)
                token.map = [startLine, startLine + 1]

                for (i = 0; i < columns.length; i++) {
                  token = state.push('th_open', 'th', 1)
                  token.map = [startLine, startLine + 1]

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

              for (
                nextLine = tableBodyStartLine;
                nextLine < endLine;
                nextLine++
              ) {
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
                  columns[0] = columns[0].substring(
                    columns[0].indexOf('->') + 2,
                  )
                  columns[columnCount - 1] = columns[columnCount - 1].substring(
                    0,
                    columns[columnCount - 1].indexOf('<-'),
                  )
                }
                for (i = 0; i < columnCount; i++) {
                  token = state.push('td_open', 'td', 1)

                  token = state.push('inline', '', 0)
                  token.content = columns[i] ? columns[i].trim() : ''
                  token.children = []

                  token = state.push('td_close', 'td', -1)
                }
                token = state.push('tr_close', 'tr', -1)
              }
              token = state.push('tbody_close', 'tbody', -1)
              token = state.push('table_close', 'table', -1)

              if (wrapWithDiv) {
                token = state.push('div_wrapper', 'div', -1)
              }

              tableLines[1] = tbodyLines[1] = nextLine
              state.line = nextLine
              return true
            }
            var rulesCanBeTerminated = ['paragraph', 'reference']
            md.block.ruler.at('table', table, {
              alt: rulesCanBeTerminated.slice(),
            })
          }
        },
        {},
      ],
    },
    {},
    [1],
  )(1)
})
