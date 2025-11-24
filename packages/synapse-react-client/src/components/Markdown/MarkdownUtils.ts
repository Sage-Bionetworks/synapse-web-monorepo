import katex from 'katex'
import { RefObject } from 'react'
import { MarkdownSynapseProps } from './MarkdownSynapse'

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
