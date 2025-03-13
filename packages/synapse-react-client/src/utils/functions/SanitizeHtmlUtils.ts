import DOMPurify from 'dompurify'
import { escapeAttrValue, IFilterXSSOptions, safeAttrValue } from 'xss'

// allow list used by both the xss config and DOMPurify config
const xssWhiteList: XSS.IWhiteList = {
  a: ['target', 'href', 'title', 'rel'],
  abbr: ['title'],
  address: [],
  area: ['shape', 'coords', 'href', 'alt'],
  article: [],
  aside: [],
  audio: ['autoplay', 'controls', 'loop', 'preload', 'src'],
  b: [],
  bdi: ['dir'],
  bdo: ['dir'],
  big: [],
  blockquote: ['cite'],
  body: [],
  br: [],
  button: ['class'],
  caption: [],
  center: [],
  cite: [],
  code: [],
  col: ['align', 'valign', 'span', 'width'],
  colgroup: ['align', 'valign', 'span', 'width'],
  dd: [],
  del: ['datetime'],
  details: ['open'],
  div: ['class'],
  dl: [],
  dt: [],
  em: [],
  font: ['color', 'size', 'face'],
  footer: [],
  g: [],
  h1: ['toc'],
  h2: ['toc'],
  h3: ['toc'],
  h4: ['toc'],
  h5: ['toc'],
  h6: ['toc'],
  head: [],
  header: [],
  hr: [],
  html: [],
  i: [],
  img: ['src', 'alt', 'title', 'width', 'height'],
  ins: ['datetime'],
  li: ['class'],
  mark: [],
  nav: [],
  noscript: [],
  ol: ['class'],
  p: [],
  pre: [],
  s: [],
  section: [],
  small: [],
  span: ['data-widgetparams', 'data-widget-type', 'class', 'id'],
  sub: [],
  summary: [],
  sup: [],
  strong: [],
  svg: [],
  table: ['width', 'border', 'align', 'valign', 'class'],
  tbody: ['align', 'valign'],
  td: ['width', 'rowspan', 'colspan', 'align', 'valign', 'style'],
  tfoot: ['align', 'valign'],
  th: ['width', 'rowspan', 'colspan', 'align', 'valign', 'class', 'style'],
  thead: ['class', 'align', 'valign'],
  tr: ['rowspan', 'align', 'valign'],
  tt: [],
  u: [],
  ul: ['class'],
  video: ['autoplay', 'controls', 'loop', 'preload', 'src', 'height', 'width'],
}

// PORTALS-1450: including 'style' in the allow-list will cause string values to come through, which crashes the app when used (because it uses jsx).
export const xssOptions: IFilterXSSOptions = {
  whiteList: xssWhiteList,
  stripIgnoreTagBody: true, // filter out all tags not in the whitelist
  allowCommentTag: false,
  css: {
    whiteList: {
      // SWC-7015 - Allow text-align property in style attr to support GFM table syntax
      // The 'style' attribute is used to set text alignment for table cells, so explicitly allow it here
      'text-align': true,
    },
  },
  onIgnoreTag: function (tag, html, options) {
    if (tag === '!doctype') {
      // do not filter doctype
      return html
    }
    return undefined
  },
  safeAttrValue: function (tag, name, value, cssFilter) {
    // Apply default safeAttrValue filtering:
    value = safeAttrValue(tag, name, value, cssFilter)
    // If the tag is an image and the attribute is 'src', only allow data:image URIs or http(s) URLs
    if (tag === 'img' && name === 'src') {
      if (
        !(
          value &&
          (value.startsWith('data:image/') || value.startsWith('http'))
        )
      ) {
        return ''
      }
    }
    value = escapeAttrValue(value)
    return value
  },
}

const ALLOWED_TAGS: string[] = Object.keys(xssWhiteList as object)
const ALLOWED_ATTR: string[] = [
  ...new Set(
    Object.values(xssWhiteList as object).flat() as string[], // Flatten all attributes into a single array
  ),
]

const ALLOWED_STYLES: Record<string, boolean> = {
  'text-align': true,
}
// Regex to allow only secure image sources
const ALLOWED_URI_REGEXP: RegExp = /^(https?:|data:image\/)/

// Configure DOMPurify with TypeScript support
DOMPurify.setConfig({
  ALLOWED_TAGS,
  ALLOWED_ATTR,
  KEEP_CONTENT: true,
  RETURN_DOM_FRAGMENT: false,
  RETURN_TRUSTED_TYPE: false,
})

// Hook: Sanitize attributes (equivalent to safeAttrValue)
DOMPurify.addHook('uponSanitizeAttribute', (node, data) => {
  const { attrName, attrValue } = data

  // Ensure only safe src values for images
  if (node.nodeName.toLowerCase() === 'img' && attrName === 'src') {
    if (!ALLOWED_URI_REGEXP.test(attrValue)) {
      data.keepAttr = false // Remove unsafe src values
    }
  }

  if (attrName === 'data-widgetparams' || attrName === 'data-widget-type') {
    data.attrValue = attrValue
  } else if (attrName === 'style') {
    const safeStyles = attrValue
      .split(';')
      .map(style => style.trim())
      .filter(style => {
        const [property] = style.split(':').map(s => s.trim())
        return ALLOWED_STYLES[property] || false // Only allow explicitly listed styles
      })
      .join('; ')
    data.attrValue = safeStyles
  } else {
    data.attrValue = DOMPurify.sanitize(attrValue)
  }
})

// Hook: Prevent removal of `!doctype` (equivalent to onIgnoreTag)
DOMPurify.addHook('uponSanitizeElement', (node, data) => {
  if (data.tagName === '!doctype') {
    // Reinsert the doctype manually after sanitization
    if (node.parentNode) {
      node.parentNode.insertBefore(
        document.implementation.createDocumentType('html', '', ''),
        node,
      )
    }
  }
})

// Sanitize function with TypeScript type safety
export function sanitize(input: string): string {
  return DOMPurify.sanitize(input)
}
