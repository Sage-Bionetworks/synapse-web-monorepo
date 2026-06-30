import katex from 'katex'
import { RefObject } from 'react'
import { MarkdownSynapseProps } from './MarkdownSynapse'
import MarkdownIt from 'markdown-it'
import { truncateString } from '@/utils/functions/StringUtils'
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
  return xml.replace(
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
    if (anchor.id.substring(0, 3) === 'ref') {
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
    } else if (
      currentTarget.id !== null &&
      anchor.getAttribute('data-anchor')
    ) {
      event.preventDefault()
      // handle table of contents widget
      const idOfContent = anchor.getAttribute('data-anchor')
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
  } else {
    if (value.includes('/wiki/')) {
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
  }
  return newProps
}

const md = new MarkdownIt()

export const markdownToPlainText = (markdown: string, maxLength?: number) => {
  if (!markdown || markdown.length === 0) {
    return ''
  }

  const html = md.render(markdown)
  const plainText = stripHTML(html)
    .replace(/\|/g, '')
    .replace(/#/g, '')
    .replace(/<Synapse widget>/g, '')

  return maxLength ? truncateString(plainText, maxLength) : plainText
}

const blockLevelTags = [
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
]

const inlineTags = ['span', 'a', 'em', 'strong', 'b', 'i', 'u', 'sub', 'sup']

const tableTags = ['table', 'thead', 'tbody', 'tr', 'tfoot']

// Widget types that render inline elements and should not be treated as block-level
const inlineWidgetTypes = ['badge', 'image', 'imageLink', 'buttonlink']

const isInlineContainer = (node: DOMNode): boolean => {
  if (!(node instanceof DomElement)) {
    return false
  }

  const tag = node.name.toLowerCase()
  return inlineTags.includes(tag)
}

// Check if a node is a block level element
export const isBlockLevelElement = (node: DOMNode): boolean => {
  if (!(node instanceof DomElement)) {
    return false
  }

  const tag = node.name.toLowerCase()
  const isStandardBlock = blockLevelTags.includes(tag)

  const widgetParams = node.attribs['data-widgetparams'] ?? null
  const isWidget =
    widgetParams !== null &&
    !inlineWidgetTypes.includes(widgetParams.split('?')[0])

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

    if (parentTag && tableTags.includes(parentTag) && !node.data?.trim()) {
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
