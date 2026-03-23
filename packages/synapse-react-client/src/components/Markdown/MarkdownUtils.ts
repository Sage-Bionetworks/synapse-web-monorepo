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

const inlineTags = ['p', 'span', 'a']

// Check if a node is a block level element
export const isBlockLevelElement = (node: Node): boolean => {
  if (node.nodeType !== Node.ELEMENT_NODE) {
    return false
  }

  const element = node as HTMLElement
  const tag = element.tagName.toLowerCase()
  const isStandardBlock = blockLevelTags.includes(tag)

  const isWidget = element.hasAttribute('data-widgetparams')

  return isStandardBlock || isWidget
}

const isInlineContainer = (node: Node): boolean => {
  if (node.nodeType !== Node.ELEMENT_NODE) {
    return false
  }

  const element = node as HTMLElement
  const tag = element.tagName.toLowerCase()
  return inlineTags.includes(tag)
}

// Check if a node has any block level descendants
export const hasBlockLevelDescendant = (node: Node): boolean => {
  if (isBlockLevelElement(node)) {
    return true
  }

  return Array.from(node.childNodes).some(child =>
    hasBlockLevelDescendant(child),
  )
}

/**
 * Normalizes the DOM tree to be "React-safe" by fixing invalid HTML nesting
 * BEFORE the tree is passed to RecursiveRender.
 * This pre-processing ensures that inline containers (<p>, <span>, <a>) do not house block-level descendants
 * (like <div> or <figure>), which would otherwise trigger React hydration errors.
 * This function recursively walks the tree and swaps violating containers with
 * <div> elements while preserving all original attributes and child nodes.
 */
// export function transformTree(node: Node): void {
//   // Discard empty text nodes. Prevents invalid HTML in some cases, for example whitespace text nodes cannot be a child of <table>.
//   if (node.nodeType === Node.TEXT_NODE) {
//     if (!node.textContent?.trim()) {
//       node.parentNode?.removeChild(node)
//     }
//     return
//   }

//   if (node.nodeType !== Node.ELEMENT_NODE) return

//   const element = node as HTMLElement
//   const tag = element.tagName.toLowerCase()

//   // Define tags that are restricted to inline-only content in React/HTML
//   const isInlineContainer = tag === 'p' || tag === 'span' || tag === 'a'

//   if (
//     isInlineContainer &&
//     Array.from(element.childNodes).some(child => hasBlockLevelDescendant(child))
//   ) {
//     const div = element.ownerDocument.createElement('div')

//     // Preserve all original attributes
//     Array.from(element.attributes).forEach(attr =>
//       div.setAttribute(attr.name, attr.value),
//     )

//     // Move all children from the old element to the new <div>
//     while (element.firstChild) {
//       div.appendChild(element.firstChild)
//     }

//     // Swap the invalid element out in the DOM tree
//     element.parentNode!.replaceChild(div, element)

//     // Recursively process the children of the new <div> to catch nested violations
//     Array.from(div.childNodes).forEach(child => transformTree(child))
//     return
//   }

//   // If no swap was needed, continue walking the tree
//   Array.from(element.childNodes).forEach(child => transformTree(child))
// }

function isValidNesting(child: HTMLElement, ancestor: HTMLElement): boolean {
  // case 1: block level elements cannot be inside of inline containers
  if (isBlockLevelElement(child) && isInlineContainer(ancestor)) {
    return false
  }

  // case 2: block level elements cannot be inside 'a' tags

  // other cases, buttons cannot be inside of buttons
  return true
}

// new implementation
// hopefully o(n)
export function fixInvalidNesting(node: Node, ancestors: Node[] = []): void {
  // If 'node' is a block-level element and one or more ancestors are inline containers, change the ancestors to 'div' elements

  if (node.nodeType === Node.TEXT_NODE) {
    if (!node.textContent?.trim()) {
      node.parentNode?.removeChild(node)
    }
    return
  }

  if (node.nodeType !== Node.ELEMENT_NODE) {
    return
  }

  const element = node as HTMLElement

  // check the current node against all of its ancestors to see if there is any invalid nesting
  for (let i = 0; i < ancestors.length; i++) {
    const ancestor = ancestors[i]
    // if the nesting is valid, continue to next ancestor
    if (isValidNesting(element, ancestor as HTMLElement)) {
      continue
    }
    // if the nesting is invalid, change the ancestor to a div
    else {
      const ancestorElement = ancestor as HTMLElement
      const div = element.ownerDocument.createElement('div')

      // Preserve all original attributes
      Array.from(ancestorElement.attributes).forEach(attr =>
        div.setAttribute(attr.name, attr.value),
      )

      // Move all children from the old element to the new <div>
      while (ancestorElement.firstChild) {
        div.appendChild(ancestorElement.firstChild)
      }

      if (ancestorElement.parentNode) {
        ancestorElement.parentNode.replaceChild(div, ancestor)
      }
    }
  }

  const newAncestors = [...ancestors, node] // combine current node with ancestors

  Array.from(element.childNodes).forEach(child => {
    fixInvalidNesting(child, newAncestors)
  })
}
