import katex from 'katex'
import { RefObject } from 'react'
import { MarkdownSynapseProps } from './MarkdownSynapse'
import { truncateString } from '@/utils/functions/StringUtils'
import { synapseMarkdownIt } from './synapseMarkdownIt'
import {
  htmlToDOM,
  Element as DomElement,
  Text as DomText,
  type DOMNode,
} from 'html-react-parser'

/**
 * Find all math identified elements of the form [id^=\"mathjax-\"]
 * (e.g. <dom element id="mathjax-10"> text </dom element>)
 * and transform them to their math markdown equivalents
 */
export function processMath(markupRef: RefObject<HTMLElement | null>) {
  if (!markupRef.current) {
    return
  }
  // use regex to grab all elements
  const mathExpressions =
    markupRef.current.querySelectorAll<HTMLElement>('[id^="mathjax-"]')
  // go through all obtained elements and transform them with katex
  const regEx = new RegExp(/\\[()[\]]/, 'g') // Look for a '\' followed by either '(', ')', '[', or ']'. We delete these strings since they interfere with katex processing.
  mathExpressions.forEach(element => {
    if (element.textContent && !element.getAttribute('processed')) {
      // only process a math element once, used to double/triple process
      element.setAttribute('processed', 'true')
      const textContent = element.textContent.replace(regEx, '')
      return katex.render(textContent, element, {
        output: 'html',
        throwOnError: false,
      })
    }
  })
}

/**
 *  When the markdown string is transferred over the network certain characters get transformed,
 * this does a simple transformation back to the original user's string.
 *
 * @param {string} xml
 * @returns
 * @memberof MarkdownSynapse
 */
export function decodeXml(xml: string) {
  const escapedOneToXmlSpecialMap = {
    '&amp;': '&',
    '&gt;': '>',
    '&lt;': '<',
    '&quot;': '"',
  }
  return xml.replaceAll(
    /(&quot;|&lt;|&gt;|&amp;)/g,
    (str: string, item: keyof typeof escapedOneToXmlSpecialMap) => {
      return escapedOneToXmlSpecialMap[item]
    },
  )
}

export function addIdsToReferenceWidgets(text: string) {
  const referenceRegex =
    /<span.*?id="wikiReference.*?<span.*? data-widgetparams.*?span>/g
  let referenceCount = 1

  return text.replace(referenceRegex, () => {
    // replace all reference tags with id's of the form id="ref<number>"" that we can read onClick
    const current = referenceCount
    referenceCount += 1
    return `<a href="" id="ref${current}">[${current}]</a>`
  })
}

export function addIdsToTocWidgets(text: string) {
  const tocId = 'SRC-header-'
  let tocIdCount = 1
  const TOC_HEADER_REGEX = /<h[1-6] toc="true">.*<\/h[1-6]>/gm

  return text.replace(TOC_HEADER_REGEX, (match: string) => {
    // replace with id of the form id="toc" so we can read them with onclick events
    const curTocId = tocIdCount
    tocIdCount += 1
    const matchWithId = `${match.substring(
      0,
      3,
    )} id="${tocId}${curTocId}"${match.substring(3)}`
    return matchWithId
  })
}

// Manually handle clicks to anchor tags where the scrollto isn't handled by page hash
export function handleLinkClicks(event: MouseEvent) {
  const genericElement = event.target as HTMLElement
  const currentTarget = event.currentTarget as HTMLElement
  if (genericElement.tagName === 'A' || genericElement.tagName === 'BUTTON') {
    const anchor = event.target as HTMLAnchorElement
    if (anchor.id.startsWith('ref')) {
      event.preventDefault()

      // its a reference, so we scroll to the appropriate bookmark
      const referenceNumber = Number(currentTarget.id.substring(3)) // e.g. ref2 => '2'
      const goTo = currentTarget.querySelector(`#bookmark${referenceNumber}`)
      try {
        goTo!.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center',
        })
      } catch (e) {
        console.log('error on scroll', e)
      }
    } else if (currentTarget.id !== null && anchor.dataset.anchor) {
      event.preventDefault()
      // handle table of contents widget
      const idOfContent = anchor.dataset.anchor
      const goTo = currentTarget.querySelector(`[id="${idOfContent}"]`)
      try {
        goTo!.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center',
        })
      } catch (e) {
        console.log('error on scroll', e)
      }
    }
  }
}

/**
 * Extracts the plain text content from an HTML string. Implemented with an
 * isomorphic HTML parser (rather than `document.createElement`) so it can run
 * during server-side rendering / SSG prerender as well as in the browser.
 */
export function stripHTML(myHtmlString: string): string {
  if (!myHtmlString) {
    return ''
  }
  const collectText = (nodes: DOMNode[]): string =>
    nodes
      .map(node => {
        if (node instanceof DomText) {
          return node.data
        }
        if (node instanceof DomElement) {
          return collectText(node.children as DOMNode[])
        }
        return ''
      })
      .join('')

  return collectText(htmlToDOM(myHtmlString))
}

export function transformStringIntoMarkdownProps(
  value: string,
  isRawMarkdown?: boolean,
) {
  const newProps: MarkdownSynapseProps = {}
  if (isRawMarkdown) {
    newProps.markdown = value
  } else if (value.includes('/wiki/')) {
    // value looks like syn20681023/wiki/594680
    const split = value.split('/')
    const ownerId = split[0]
    const wikiId = split[2]
    newProps.ownerId = ownerId
    newProps.wikiId = wikiId
  } else if (value) {
    // else assume it's an ownerId
    newProps.ownerId = value
  }
  return newProps
}

// Synapse widget syntax: ${widgetType?param=value&...}. The closing brace is
// optional because search-index descriptions can be truncated mid-widget.
const SYNAPSE_WIDGET_REGEX = /\$\{[^}]*\}?/g

// Line-level Synapse syntax. The renderer already handles these in normal
// markdown, but markdown-it emits them as literal text when they sit inside a
// raw HTML block (lines following an HTML tag without a blank line between),
// so they are removed before rendering.
const LINE_SYNTAX_REGEXES = [
  // heading markers, including Synapse's `#!` (no-TOC) and no-space variants
  /^[ \t]*#{1,6}!?/gm,
  // centered text: ->text<-
  /^[ \t]*->/gm,
  /<-[ \t]*$/gm,
  // layout containers: {row}, {column width=N}
  /^[ \t]*\{(?:row|column)[^}\n]*\}[ \t]*$/gm,
]

/**
 * Converts Synapse markdown to a single line of plain text, removing Synapse
 * widgets, Synapse markdown syntax (centered text, `#!` headings, `{row}` and
 * `{column}` containers, tables), HTML tags, and HTML comments.
 */
export const markdownToPlainText = (markdown: string, maxLength?: number) => {
  if (!markdown) {
    return ''
  }

  const withoutSynapseSyntax = LINE_SYNTAX_REGEXES.reduce(
    (text, regex) => text.replaceAll(regex, ''),
    markdown.replaceAll(SYNAPSE_WIDGET_REGEX, ''),
  )
  const html = synapseMarkdownIt.render(withoutSynapseSyntax)
  const plainText = stripHTML(html).replaceAll(/\s+/g, ' ').trim()

  return maxLength ? truncateString(plainText, maxLength) : plainText
}

const blockLevelTags = new Set([
  'address',
  'article',
  'aside',
  'blockquote',
  'canvas',
  'dd',
  'div',
  'dl',
  'dt',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'header',
  'hr',
  'li',
  'main',
  'nav',
  'noscript',
  'ol',
  'p',
  'pre',
  'section',
  'table',
  'tfoot',
  'ul',
  'video',
])

const inlineTags = new Set([
  'span',
  'a',
  'em',
  'strong',
  'b',
  'i',
  'u',
  'sub',
  'sup',
])

const tableTags = new Set(['table', 'thead', 'tbody', 'tr', 'tfoot'])

// Widget types that render inline elements and should not be treated as block-level
const inlineWidgetTypes = new Set(['badge', 'image', 'imageLink', 'buttonlink'])

const isInlineContainer = (node: DOMNode): boolean => {
  if (!(node instanceof DomElement)) {
    return false
  }

  const tag = node.name.toLowerCase()
  return inlineTags.has(tag)
}

// Check if a node is a block level element
export const isBlockLevelElement = (node: DOMNode): boolean => {
  if (!(node instanceof DomElement)) {
    return false
  }

  const tag = node.name.toLowerCase()
  const isStandardBlock = blockLevelTags.has(tag)

  const widgetParams = node.attribs['data-widgetparams'] ?? null
  const isWidget =
    widgetParams !== null && !inlineWidgetTypes.has(widgetParams.split('?')[0])

  return isStandardBlock || isWidget
}

function isValidNesting(child: DomElement, ancestor: DomElement): boolean {
  // case 1: block level elements cannot be inside of inline containers
  if (isBlockLevelElement(child) && isInlineContainer(ancestor)) {
    return false
  }

  // case 2: buttons cannot be nested inside of other buttons
  if (
    ancestor.name.toLowerCase() === 'button' &&
    child.name.toLowerCase() === 'button'
  ) {
    return false
  }

  // A <p> tag cannot contain block-level elements (including other <p> tags)
  if (ancestor.name.toLowerCase() === 'p' && isBlockLevelElement(child)) {
    return false
  }

  return true
}

/**
 * Fixes invalid HTML nesting (e.g., <div> inside <p>) in a single O(n) pass.
 * It compares the current 'node' against a stack of its 'ancestors'.
 *
 * Operates on the `domhandler` node tree produced by `html-react-parser`'s
 * `htmlToDOM`, so it runs identically in the browser and during SSR/SSG
 * prerender (no dependency on a live DOM, `DOMParser`, or `HTMLElement`).
 * @param node - The current node being inspected.
 * @param ancestors - An array of the current node's ancestor elements
 */
export function fixInvalidNesting(
  node: DOMNode,
  ancestors: DomElement[] = [],
): void {
  // Whitespace-only text nodes are invalid children of table structure elements and must be removed.
  if (node instanceof DomText) {
    const parent = node.parent
    const parentTag =
      parent instanceof DomElement ? parent.name.toLowerCase() : undefined

    if (parentTag && tableTags.has(parentTag) && !node.data?.trim()) {
      const siblings = (parent as DomElement).children
      const index = siblings.indexOf(node)
      if (index !== -1) {
        siblings.splice(index, 1)
      }
    }

    return
  }

  // We only care about element nodes
  if (!(node instanceof DomElement)) {
    return
  }

  const element = node

  // We check the current element against every ancestor in the stack to see if there is any invalid nesting.
  // We iterate backwards (from immediate parent to root) so we fix the closest invalid container first.
  for (let i = ancestors.length - 1; i >= 0; i--) {
    const ancestor = ancestors[i]

    // if the nesting is invalid
    if (!isValidNesting(element, ancestor)) {
      // Demote the ancestor to a <div> in place. Renaming preserves the
      // existing attributes (`attribs`) and children, so no node surgery is
      // required.
      ancestor.name = 'div'
    }
  }

  // Push the current element to the stack before traversing children
  ancestors.push(element)

  // Iterate over a copy because invalid table whitespace may be removed.
  Array.from(element.children).forEach(child => {
    fixInvalidNesting(child as DOMNode, ancestors)
  })

  // Pop the current element off the stack after traversing its children
  ancestors.pop()
}
