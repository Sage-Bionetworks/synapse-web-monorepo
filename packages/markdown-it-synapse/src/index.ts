/* eslint-disable no-useless-escape,@typescript-eslint/restrict-plus-operands */

// Process ${widgetname?param1=1&param2=2}

'use strict'

import { type RuleInline } from 'markdown-it/lib/parser_inline'
import type MarkdownIt from 'markdown-it'
import { type Token } from 'markdown-it'
import { type ParseResult } from 'markdown-it/lib/helpers/parse_link_destination'

// same as UNESCAPE_MD_RE plus a space
const UNESCAPE_RE = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g
const REFERENCE_START = 'reference?'
const BOOKMARK_START = 'bookmark?'
const synapseRE = new RegExp('^syn([0-9]+[.]?[0-9]*)+')
// match url that starts with a leading slash / and is followed by an alphanumeric character
const internalURL = new RegExp(/^\/\w/)
const urlWithoutProtocolRE = new RegExp(
  '^([\\da-z\\.-]+)\\.([a-z\\.]{2,6})([\\/w \\.-]*)*\\/?.*$',
)
const doiRE = new RegExp('^doi:10[.]{1}[0-9]+[/]{1}[a-zA-Z0-9_.]+$')
const gridLayoutColumnParamRE = new RegExp(
  '^\\s*(width[=]{1})?\\s*(.*)[}]{1}\\s*$',
)
const navTextParamRE = new RegExp(
  '^\\s*(text[=]{1}["]{1})?\\s*(.*)["]{1}[}]{1}\\s*$',
)
const ulMarkerRE = new RegExp('^\\s*[*-+>]{1}[^|]*$')
const olMarkerRE = new RegExp('^\\s*\\w+\\s*[.)]{1}[^|]*$')
const codeRE = new RegExp('^\\s*[`]{3}s*([a-zA-Z_0-9-]*)s*$')
let suffix: string | undefined
let widgetIndex: number | undefined
let navIndex: number | undefined
let footnoteId: number | undefined
let footnotes: string | undefined
let baseURL: string | undefined

function getParamValue(params: string, name: string): string | null {
  const queryStringArray = params.split('?')
  const queryStringParamArray = queryStringArray[1].split('&')
  let nameValue: string | null = null
  let queryStringNameValueArray: string[]
  for (let i = 0; i < queryStringParamArray.length; i++) {
    queryStringNameValueArray = queryStringParamArray[i].split('=')
    if (name === queryStringNameValueArray[0]) {
      nameValue = queryStringNameValueArray[1]
    }
  }
  return nameValue
}

function isWhiteSpace(code: number) {
  if (code >= 0x2000 && code <= 0x200a) {
    return true
  }
  switch (code) {
    case 0x09: // \t
    case 0x0a: // \n
    case 0x0b: // \v
    case 0x0c: // \f
    case 0x0d: // \r
    case 0x20:
    case 0xa0:
    case 0x1680:
    case 0x202f:
    case 0x205f:
    case 0x3000:
      return true
  }
  return false
}

function isSupportedUsernameCharacter(code: number) {
  //uppercase letter
  if (code >= 0x41 && code <= 0x5a) {
    return true
  }
  //number
  if (code >= 0x30 && code <= 0x39) {
    return true
  }
  //lowercase letter
  if (code >= 0x61 && code <= 0x7a) {
    return true
  }

  switch (code) {
    case 0x40: // '@' initial symbol
    case 0x2e: // '.'
    case 0x2d: // '-'
    case 0x5f: // '_'
      return true
  }
  return false
}

function startsWith(src: string, searchString: string, position?: number) {
  position = position || 0
  return src.substr(position, searchString.length) === searchString
}

function isInternalLink(src: string) {
  if (src.length > 2) {
    return internalURL.test(src.substr(0, 2))
  }
  return false
}

const synapse: RuleInline = function (state, silent) {
  let found: boolean = false
  let content: string
  let token: Token
  let widgetParams
  let decodedWidgetParams
  let footnoteText
  let widgetContainerClass = 'widgetContainer'
  const max = state.posMax
  const start = state.pos

  if (start + 3 >= max) {
    return false
  }
  if (silent) {
    return false
  } // don't run any pairs in validation mode
  // handle special username mentions (output badge widget)
  if (state.src.charCodeAt(start) === 0x40 /* @ */) {
    // do not process unless previous character is a whitespace
    if (start > 0 && !isWhiteSpace(state.src.charCodeAt(state.pos - 1))) {
      return false
    }
    // go to end of username
    while (
      state.pos < max &&
      !isWhiteSpace(state.src.charCodeAt(state.pos)) &&
      isSupportedUsernameCharacter(state.src.charCodeAt(state.pos))
    ) {
      state.pos++
    }
    content = state.src.slice(start + 1, state.pos)

    state.posMax = state.pos
    state.pos = start

    token = state.push('synapse_open', 'span', 1)
    token.markup = '@'
    token.attrs = [
      ['data-widgetparams', 'badge?alias=' + content],
      ['data-widget-type', 'badge'],
      ['class', widgetContainerClass],
      ['id', 'widget-' + widgetIndex + suffix],
    ]

    token = state.push('link_open', 'a', 1)
    token.attrs = [
      [
        'href',
        'https://www.synapse.org/Portal/aliasredirector?alias=' + content,
      ],
    ]
    token.markup = 'autolink'
    token.info = 'auto'

    token = state.push('text', '', 0)
    token.content = '@' + content

    token = state.push('link_close', 'a', -1)
    token.markup = 'autolink'
    token.info = 'auto'
    token = state.push('text', '', 0)

    token = state.push('synapse_close', 'span', -1)
    state.pos = state.posMax
    state.posMax = max
    widgetIndex = widgetIndex + 1
    return true
  }

  if (state.src.charCodeAt(start) !== 0x24 /* $ */) {
    return false
  }
  if (state.src.charCodeAt(start + 1) !== 0x7b /* { */) {
    return false
  }

  state.pos = start + 2

  while (state.pos < max) {
    if (state.src.charCodeAt(state.pos) === 0x7d /* } */) {
      found = true
      break
    }

    state.md.inline.skipToken(state)
  }

  if (!found || start + 2 === state.pos) {
    state.pos = start
    return false
  }

  content = state.src.slice(start + 2, state.pos)
  widgetParams = content.replace(UNESCAPE_RE, '$1')
  if (content.lastIndexOf(REFERENCE_START, 0) === 0) {
    // If reference widget, then add an additional widget param and output token.
    widgetParams += '&footnoteId=' + footnoteId
    token = state.push('synapse_reference_open', 'span', 1)
    token.attrs = [['id', 'wikiReference' + footnoteId]]
    token = state.push('synapse_reference_close', 'span', -1)
    // also push bookmark markdown into the environment variable
    // (will be reprocessed and appended to the html output from the first pass)
    decodedWidgetParams = decodeURIComponent(widgetParams)
    footnoteText = getParamValue(decodedWidgetParams, 'text')
    if (footnoteText) {
      footnotes +=
        '${bookmark?text=[' +
        footnoteId +
        ']&bookmarkID=wikiReference' +
        footnoteId +
        '} ' +
        footnoteText +
        '\n'
    }
    footnoteId++
    widgetContainerClass = 'inlineWidgetContainer'
  } else if (content.lastIndexOf(BOOKMARK_START, 0) === 0) {
    // If bookmark widget, add additional span (target)
    token = state.push('synapse_footnote_target_open', 'span', 1)
    token.attrs = [['id', 'wikiFootnote' + footnoteId]]
    token = state.push('synapse_footnote_target_close', 'span', -1)

    footnoteId++
    widgetContainerClass = 'inlineWidgetContainer'
  }

  // NOTE: allows unescaped spaces/newlines inside content
  // found!
  state.posMax = state.pos
  state.pos = start + 2

  // Earlier we checked !silent, but this implementation does not need it
  token = state.push('synapse_open', 'span', 1)
  token.markup = '${'
  token.attrs = [
    ['data-widgetparams', widgetParams],
    ['class', widgetContainerClass],
    ['id', 'widget-' + widgetIndex + suffix],
    ['data-widget-type', widgetParams.substring(0, widgetParams.indexOf('?'))],
  ]

  token = state.push('text', '', 0)
  token.content = '<Synapse widget>'

  token = state.push('synapse_close', 'span', -1)
  token.markup = '}'

  state.pos = state.posMax + 1
  state.posMax = max
  widgetIndex = widgetIndex + 1
  return true
}

function synapse_plugin(md, _suffix, _baseURL) {
  widgetIndex = 0
  navIndex = 0
  footnoteId = 1
  suffix = _suffix
  footnotes = ''
  baseURL = ''
  if (_baseURL) {
    baseURL = _baseURL
  }
  md.inline.ruler.after('emphasis', 'synapse', synapse)
}

function getFootnotes() {
  return footnotes
}

function resetFootnotes() {
  footnotes = ''
  footnoteId = 1
}

function preprocessMarkdown(mdString: string) {
  let md = ''
  const splitMD = mdString.split('\n')

  let isPreviousLineInList = false
  let isCurrentLineInList = false
  let isInCode = false
  for (let i = 0; i < splitMD.length; i++) {
    if (codeRE.test(splitMD[i])) {
      // toggle isInCode
      isInCode = !isInCode
    }
    if (!isInCode) {
      isCurrentLineInList =
        ulMarkerRE.test(splitMD[i]) || olMarkerRE.test(splitMD[i])
      if (isPreviousLineInList && !isCurrentLineInList) {
        md += '\n'
      }
      isPreviousLineInList = isCurrentLineInList
    }
    md += splitMD[i] + '\n'
  }

  return md
}

function init_markdown_it(
  md: MarkdownIt,
  markdownitSub?: MarkdownIt.PluginSimple,
  markdownitSup?: MarkdownIt.PluginSimple,
  markdownitCentertext?: MarkdownIt.PluginSimple,
  markdownitSynapseHeading?: MarkdownIt.PluginSimple,
  markdownitSynapseTable?: MarkdownIt.PluginSimple,
  markdownitStrikethroughAlt?: MarkdownIt.PluginSimple,
  markdownitContainer?: MarkdownIt.PluginSimple,
  markdownitInlineComments?: MarkdownIt.PluginSimple,
  markdownitBr?: MarkdownIt.PluginSimple,
) {
  function sendLinksToNewWindow() {
    const defaultRender =
      md.renderer.rules.link_open ||
      function (tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options)
      }

    md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
      // If you are sure other plugins can't add `target` - drop check below
      const aIndex = tokens[idx].attrIndex('target')
      const hrefIndex = tokens[idx].attrIndex('href')
      const isInternalSynapseLink = startsWith(
        tokens[idx].attrs[hrefIndex][1],
        '#!',
      )
      if (isInternalSynapseLink) {
        tokens[idx].attrs[hrefIndex][1] = `/${tokens[idx].attrs[
          hrefIndex
        ][1].substring(2)}`
      }
      const isInternalPageLink = isInternalLink(tokens[idx].attrs[hrefIndex][1])
      if (aIndex < 0) {
        // if it has no href OR it is neither a synapse link or internal page link
        if (hrefIndex < 0 || !(isInternalPageLink || isInternalSynapseLink)) {
          tokens[idx].attrPush(['target', '_blank']) // add new attribute
          tokens[idx].attrPush(['ref', 'noopener noreferrer']) // add new attribute
        }
      } else {
        tokens[idx].attrs[aIndex][1] = '_blank' // replace value of existing attr
        tokens[idx].attrPush(['ref', 'noopener noreferrer']) // add ref
      }

      // pass token to default renderer.
      return defaultRender(tokens, idx, options, env, self)
    }
  }

  function initMarkdownTableStyle() {
    const defaultRender =
      md.renderer.rules.table_open ||
      function (tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options)
      }

    md.renderer.rules.table_open = function (tokens, idx, options, env, self) {
      const aIndex = tokens[idx].attrIndex('class')
      if (aIndex < 0) {
        tokens[idx].attrPush(['class', 'markdowntable']) // add new attribute
      } else {
        tokens[idx].attrs[aIndex][1] += ' markdowntable' // add value to existing attr
      }

      // pass token to default renderer.
      return defaultRender(tokens, idx, options, env, self)
    }
  }

  function initLinkify() {
    md.linkify.set({ fuzzyLink: false })

    // synapse (may have version or wiki page id)
    md.linkify.add('syn', {
      validate: function (text, pos, self) {
        const tail = text.slice(pos)
        if (!self.re.synapse) {
          self.re.synapse = new RegExp(
            '^([0-9]{3,}[.]?[0-9]*(\\/wiki\\/[0-9]+)?)+(?!_)(?=$|' +
              self.re.src_ZPCc +
              ')',
          )
        }
        if (self.re.synapse.test(tail)) {
          return tail.match(self.re.synapse)[0].length
        }
        return 0
      },
      normalize: function (match) {
        match.url =
          baseURL + '/Synapse:' + match.url.replace(/[.]/, '/version/')
      },
    })

    md.linkify.add('doi:10.', {
      validate: function (text, pos, self) {
        const tail = text.slice(pos)
        if (!self.re.doi) {
          self.re.doi = new RegExp(
            '^[0-9]+[/]{1}[a-zA-Z0-9_.]+(?!_)(?=$|' + self.re.src_ZPCc + ')',
          )
        }
        if (self.re.doi.test(tail)) {
          return tail.match(self.re.doi)[0].length
        }
        return 0
      },
      normalize: function (match) {
        match.url = 'https://doi.org/' + match.url
      },
    })
  }

  const link: RuleInline = function (state, silent) {
    let attrs: [string, string][]
    let code: number
    let label: string
    let pos: number
    let res: ParseResult
    let ref
    let title: string
    let token: Token
    let href = ''
    let start = state.pos

    const oldPos = state.pos,
      max = state.posMax,
      parseLinkLabel = md.helpers.parseLinkLabel,
      parseLinkDestination = md.helpers.parseLinkDestination,
      parseLinkTitle = md.helpers.parseLinkTitle,
      isSpace = md.utils.isSpace,
      normalizeReference = md.utils.normalizeReference

    if (state.src.charCodeAt(state.pos) !== 0x5b) {
      return false
    } // [
    const labelStart = state.pos + 1
    const labelEnd = parseLinkLabel(state, state.pos, true)

    // parser failed to find ']', so it's not a valid link
    if (labelEnd < 0) {
      return false
    }

    pos = labelEnd + 1
    if (pos < max && state.src.charCodeAt(pos) === 0x28) {
      // (
      //
      // Inline link
      //

      // [link](  <href>  "title"  )
      //        ^^ skipping these spaces
      pos++
      for (; pos < max; pos++) {
        code = state.src.charCodeAt(pos)
        if (!isSpace(code) && code !== 0x0a) {
          break
        }
      }
      if (pos >= max) {
        return false
      }

      // [link](  <href>  "title"  )
      //          ^^^^^^ parsing link destination
      start = pos
      res = parseLinkDestination(state.src, pos, state.posMax)
      if (res.ok) {
        // !!!!!!!!!!!!!!!!!! Changed for Synapse  !!!!!!!!!!!!!!!!!!!!!!!!!/
        const testString = res.str
        if (synapseRE.test(testString)) {
          // this is a synapse ID
          res.str =
            baseURL + '/Synapse:' + testString.replace(/[.]/, '/version/')
        } else if (urlWithoutProtocolRE.test(testString)) {
          res.str = 'http://' + testString
        } else if (doiRE.test(testString)) {
          res.str = 'http://dx.doi.org/' + testString
        }
        // !!!!!!!!!!!!!! End of change for Synapse  !!!!!!!!!!!!!!!!!!!!!!/
        href = state.md.normalizeLink(res.str)
        if (state.md.validateLink(href)) {
          pos = res.pos
        } else {
          href = ''
        }
      }

      // [link](  <href>  "title"  )
      //                ^^ skipping these spaces
      start = pos
      for (; pos < max; pos++) {
        code = state.src.charCodeAt(pos)
        if (!isSpace(code) && code !== 0x0a) {
          break
        }
      }

      // [link](  <href>  "title"  )
      //                  ^^^^^^^ parsing link title
      res = parseLinkTitle(state.src, pos, state.posMax)
      if (pos < max && start !== pos && res.ok) {
        title = res.str
        pos = res.pos

        // [link](  <href>  "title"  )
        //                         ^^ skipping these spaces
        for (; pos < max; pos++) {
          code = state.src.charCodeAt(pos)
          if (!isSpace(code) && code !== 0x0a) {
            break
          }
        }
      } else {
        title = ''
      }

      if (pos >= max || state.src.charCodeAt(pos) !== 0x29) {
        // )
        state.pos = oldPos
        return false
      }
      pos++
    } else {
      //
      // Link reference
      //
      if (typeof state.env.references === 'undefined') {
        return false
      }

      if (pos < max && state.src.charCodeAt(pos) === 0x5b) {
        // [
        start = pos + 1
        pos = parseLinkLabel(state, pos)
        if (pos >= 0) {
          label = state.src.slice(start, pos++)
        } else {
          pos = labelEnd + 1
        }
      } else {
        pos = labelEnd + 1
      }

      // covers label === '' and label === undefined
      // (collapsed reference link and shortcut reference link respectively)
      if (!label) {
        label = state.src.slice(labelStart, labelEnd)
      }

      ref = state.env.references[normalizeReference(label)]
      if (!ref) {
        state.pos = oldPos
        return false
      }
      href = ref.href
      title = ref.title
    }

    //
    // We found the end of the link, and know for a fact it's a valid link;
    // so all that's left to do is to call tokenizer.
    //
    if (!silent) {
      state.pos = labelStart
      state.posMax = labelEnd

      token = state.push('link_open', 'a', 1)
      token.attrs = attrs = [['href', href]]
      if (title) {
        attrs.push(['title', title])
      }

      state.md.inline.tokenize(state)

      token = state.push('link_close', 'a', -1)
    }

    state.pos = pos
    state.posMax = max
    return true
  }

  // Define custom scanDelims that does not conclude that a token can open or close based on whitespace
  function scanDelims(src, posMax, start) {
    let pos = start
    const max = posMax,
      marker = src.charCodeAt(start)
    while (pos < max && src.charCodeAt(pos) === marker) {
      pos++
    }
    const count = pos - start
    const can_open = true
    const can_close = true
    return {
      can_open: can_open,
      can_close: can_close,
      length: count,
    }
  }

  // Copy of markdown-it emphasis function,
  // but uses the scanDelims function above instead of StateInline.prototype.scanDelims()
  const emphasis: RuleInline = function (state, silent) {
    let i, token
    const start = state.pos,
      marker = state.src.charCodeAt(start)

    if (silent) {
      return false
    }

    if (marker !== 0x5f && marker !== 0x2a) {
      return false
    } // '_' or '*'

    const scanned = scanDelims(state.src, state.posMax, state.pos)

    for (i = 0; i < scanned.length; i++) {
      token = state.push('text', '', 0)
      token.content = String.fromCharCode(marker)

      state.delimiters.push({
        // Char code of the starting marker (number).
        //
        marker: marker,

        // An amount of characters before this one that's equivalent to
        // current one. In plain English: if this delimiter does not open
        // an emphasis, neither do previous `jump` characters.
        //
        // Used to skip sequences like "*****" in one step, for 1st asterisk
        // value will be 0, for 2nd it's 1 and so on.
        //
        jump: i,

        // A position of the token this delimiter corresponds to.
        //
        token: state.tokens.length - 1,

        // Token level.
        // @ts-ignore
        level: state.level,

        // If this delimiter is matched as a valid opener, `end` will be
        // equal to its position, otherwise it's `-1`.
        //
        end: -1,

        // Boolean flags that determine if this delimiter could open or close
        // an emphasis.
        //
        open: scanned.can_open,
        close: scanned.can_close,
      })
    }

    state.pos += scanned.length

    return true
  }

  function initMarkdownIt() {
    md.set({
      html: true,
      breaks: true,
      linkify: true,
    })
    md.disable(['heading'])
    md.disable(['lheading'])
    if (markdownitSub) {
      md.use(markdownitSub)
    }
    if (markdownitSup) {
      md.use(markdownitSup)
    }
    if (markdownitCentertext) {
      md.use(markdownitCentertext)
    }
    if (markdownitSynapseHeading) {
      md.use(markdownitSynapseHeading)
    }
    if (markdownitSynapseTable) {
      md.use(markdownitSynapseTable)
    }
    if (markdownitStrikethroughAlt) {
      md.use(markdownitStrikethroughAlt)
    }
    if (markdownitInlineComments) {
      md.use(markdownitInlineComments)
    }
    if (markdownitBr) {
      md.use(markdownitBr)
    }

    if (markdownitContainer) {
      md.use(markdownitContainer, 'row', {
        marker: '{row}',
        minMarkerCount: 1,
        render: function (tokens, idx) {
          let t
          if (tokens[idx].nesting === 1) {
            // opening tag
            t = '<div class="container-fluid"><div class="row">'
          } else {
            // closing tag
            t = '</div></div>\n'
          }
          return t
        },
        validate: function () {
          return true
        },
      })
      md.use(markdownitContainer, 'column', {
        marker: '{column',
        endMarker: '{column}',
        minMarkerCount: 1,
        render: function (tokens, idx) {
          let m, t
          if (tokens[idx].nesting === 1) {
            // opening tag
            m = gridLayoutColumnParamRE.exec(tokens[idx].info)
            t = '<div class="col-sm-' + md.utils.escapeHtml(m[2]) + '">'
          } else {
            // closing tag
            t = '</div>\n'
          }
          return t
        },
        validate: function (params) {
          return gridLayoutColumnParamRE.test(params)
        },
      })
      md.use(markdownitContainer, 'nav', {
        marker: '{nav',
        endMarker: '{nav}',
        minMarkerCount: 1,
        render: function (tokens, idx) {
          let m, t
          if (tokens[idx].nesting === 1) {
            // opening tag
            m = navTextParamRE.exec(tokens[idx].info)
            t =
              '<div id="nav-target-' +
              navIndex +
              suffix +
              '" target-text="' +
              md.utils.escapeHtml(m[2]) +
              '">'
            navIndex = navIndex + 1
          } else {
            // closing tag
            t = '</div>\n'
          }
          return t
        },
        validate: function (params) {
          return navTextParamRE.test(params)
        },
      })
    }
    sendLinksToNewWindow()
    initLinkify()
    initMarkdownTableStyle()
    md.inline.ruler.at('link', link)
    md.inline.ruler.at('emphasis', emphasis)
  }

  initMarkdownIt()
}

export {
  getFootnotes as footnotes,
  resetFootnotes,
  preprocessMarkdown,
  init_markdown_it,
}
export default synapse_plugin
