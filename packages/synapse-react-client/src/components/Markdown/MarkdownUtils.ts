import katex from 'katex'
import { RefObject } from 'react'
import { MarkdownSynapseProps } from './MarkdownSynapse'
import MarkdownIt from 'markdown-it'
import { truncateString } from '@/utils/functions/StringUtils'

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

export function stripHTML(myHtmlString: string): string {
  const el = document.createElement('div')
  el.innerHTML = myHtmlString
  return el.textContent || el.innerText || ''
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

const isInlineContainer = (node: Node): boolean => {
  if (node.nodeType !== Node.ELEMENT_NODE) {
    return false
  }

  const element = node as HTMLElement
  const tag = element.tagName.toLowerCase()
  return inlineTags.includes(tag)
}

// Check if a node is a block level element
export const isBlockLevelElement = (node: Node): boolean => {
  if (node.nodeType !== Node.ELEMENT_NODE) {
    return false
  }

  const element = node as HTMLElement
  const tag = element.tagName.toLowerCase()
  const isStandardBlock = blockLevelTags.includes(tag)

  const widgetParams = element.getAttribute('data-widgetparams')
  const isWidget =
    widgetParams !== null &&
    !inlineWidgetTypes.includes(widgetParams.split('?')[0])

  return isStandardBlock || isWidget
}

function isValidNesting(child: HTMLElement, ancestor: HTMLElement): boolean {
  // case 1: block level elements cannot be inside of inline containers
  if (isBlockLevelElement(child) && isInlineContainer(ancestor)) {
    return false
  }

  // case 2: buttons cannot be nested inside of other buttons
  if (
    ancestor.tagName.toLowerCase() === 'button' &&
    child.tagName.toLowerCase() === 'button'
  ) {
    return false
  }

  // A <p> tag cannot contain block-level elements (including other <p> tags)
  if (ancestor.tagName.toLowerCase() === 'p' && isBlockLevelElement(child)) {
    return false
  }

  return true
}

/**
 * Fixes invalid HTML nesting (e.g., <div> inside <p>) in a single O(n) pass.
 * It compares the current 'node' against a stack of its 'ancestors'.
 * @param node - The current DOM node being inspected.
 * @param ancestors - An array of the current node's parent elements
 */
export function fixInvalidNesting(
  node: Node,
  ancestors: HTMLElement[] = [],
): void {
  // Whitespace-only text nodes are invalid children of table structure elements and must be removed.
  if (node.nodeType === Node.TEXT_NODE) {
    const parentTag = (node.parentNode as HTMLElement)?.tagName?.toLowerCase()

    if (tableTags.includes(parentTag) && !node.textContent?.trim()) {
      node.parentNode?.removeChild(node)
    }

    return
  }

  // We only care about element nodes
  if (node.nodeType !== Node.ELEMENT_NODE) {
    return
  }

  const element = node as HTMLElement

  // We check the current element against every ancestor in the stack to see if there is any invalid nesting.
  // We iterate backwards (from immediate parent to root) so we fix the closest invalid container first.
  for (let i = ancestors.length - 1; i >= 0; i--) {
    const ancestor = ancestors[i]

    // if the nesting is invalid
    if (!isValidNesting(element, ancestor)) {
      // change the ancestor to a div
      const div = element.ownerDocument.createElement('div')

      // Preserve all original attributes
      Array.from(ancestor.attributes).forEach(attr =>
        div.setAttribute(attr.name, attr.value),
      )

      // Move all children from the old element to the new <div>
      while (ancestor.firstChild) {
        div.appendChild(ancestor.firstChild)
      }

      // replace the ancestor with the new div
      if (ancestor.parentNode) {
        ancestor.parentNode.replaceChild(div, ancestor)
      }

      ancestors[i] = div // Update our local stack to reference to the new div
    }
  }

  // Push the current element to the stack before traversing children
  ancestors.push(element)

  Array.from(element.childNodes).forEach(child => {
    fixInvalidNesting(child, ancestors)
  })

  // Pop the current element off the stack after traversing its children
  ancestors.pop()
}
