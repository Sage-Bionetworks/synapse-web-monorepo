import xss from 'xss'
import { sanitize, xssOptions } from './SanitizeHtmlUtils'

function createHTML(innerHTML: string) {
  const html = document.createElement('html')
  html.innerHTML = innerHTML
  return html
}

describe('HTML Santization - DOMPurify', () => {
  test('Prevents XSS through onload', () => {
    const sanitized = sanitize("<span onload='alert('XSS')'>foo</span>")
    const html = createHTML(sanitized)
    const span = html.querySelector('span')!
    expect(span).not.toBeNull()
    expect(span.getAttribute('onload')).toBeNull()
  })
  test('Prevents XSS through onclick', () => {
    const sanitized = sanitize("<span onclick='alert('XSS')'>foo</span>")
    const html = createHTML(sanitized)
    const span = html.querySelector('span')!
    expect(span).not.toBeNull()
    expect(span.getAttribute('onclick')).toBeNull()
  })
  test('Prevents XSS through href', () => {
    const script = 'javascript:alert(1)'
    const sanitized = sanitize(`<a href="${script}">foo</a>`)
    const html = createHTML(sanitized)
    const anchor = html.querySelector('a')!
    expect(anchor).not.toBeNull()
    // Verify script was removed
    expect(anchor.getAttribute('href')).toBeNull()
  })
  test('Allows valid link href', () => {
    const validHref = 'https://synapse.org'
    const sanitized = sanitize(`<a href="${validHref}">foo</a>`)
    const html = createHTML(sanitized)
    const anchor = html.querySelector('a')!
    expect(anchor).not.toBeNull()
    expect(anchor.getAttribute('href')).toEqual(validHref)
  })
  test('Allows link rel property', () => {
    const href = 'https://synapse.org'
    const rel = 'noopener noreferrer'
    const sanitized = sanitize(`<a href="${href}" rel="${rel}">foo</a>`)
    const html = createHTML(sanitized)
    const anchor = html.querySelector('a')!
    expect(anchor).not.toBeNull()
    expect(anchor.getAttribute('href')).toEqual(href)
    expect(anchor.getAttribute('rel')).toEqual(rel)
  })

  describe.each(['td', 'th'])('%s cell text alignment', tag => {
    test(`Allows ${tag} with text-align style`, () => {
      const input = `<table><tbody><tr><${tag} style="text-align:center">foo</${tag}></tr></tbody></table>`
      const expected = input
      const sanitized = sanitize(input)

      // style should be allowed in this case
      expect(sanitized).toEqual(expected)
    })

    test(`Removes styles other than text-align from ${tag}`, () => {
      // Some other style is applied, which is not allowed (may be a click-jacking attempt!)
      const input = `<table><tbody><tr><${tag} style="text-align:center; position: absolute;">foo</${tag}></tr></tbody></table>`
      // position is not an allowed CSS property
      const expected = `<table><tbody><tr><${tag} style="text-align:center">foo</${tag}></tr></tbody></table>`
      const sanitized = sanitize(input)

      // style should be allowed in this case
      expect(sanitized).toEqual(expected)
    })
  })
})

describe('HTML Santization - xss (legacy)', () => {
  test('Prevents XSS through onload', () => {
    const sanitized = xss("<span onload='alert('XSS')'>foo</span>", xssOptions)
    const html = createHTML(sanitized)
    const span = html.querySelector('span')!
    expect(span).not.toBeNull()
    expect(span.getAttribute('onload')).toBeNull()
  })
  test('Prevents XSS through onclick', () => {
    const sanitized = xss("<span onclick='alert('XSS')'>foo</span>", xssOptions)
    const html = createHTML(sanitized)
    const span = html.querySelector('span')!
    expect(span).not.toBeNull()
    expect(span.getAttribute('onclick')).toBeNull()
  })
  test('Prevents XSS through href', () => {
    const script = 'javascript:alert(1)'
    const sanitized = xss(`<a href="${script}">foo</a>`, xssOptions)
    const html = createHTML(sanitized)
    const anchor = html.querySelector('a')!
    expect(anchor).not.toBeNull()
    // Verify script was removed
    expect(anchor.getAttribute('href')).toEqual('')
  })
  test('Allows valid link href', () => {
    const validHref = 'https://synapse.org'
    const sanitized = xss(`<a href="${validHref}">foo</a>`, xssOptions)
    const html = createHTML(sanitized)
    const anchor = html.querySelector('a')!
    expect(anchor).not.toBeNull()
    expect(anchor.getAttribute('href')).toEqual(validHref)
  })
  test('Allows link rel property', () => {
    const href = 'https://synapse.org'
    const rel = 'noopener noreferrer'
    const sanitized = xss(`<a href="${href}" rel="${rel}">foo</a>`, xssOptions)
    const html = createHTML(sanitized)
    const anchor = html.querySelector('a')!
    expect(anchor).not.toBeNull()
    expect(anchor.getAttribute('href')).toEqual(href)
    expect(anchor.getAttribute('rel')).toEqual(rel)
  })

  describe.each(['td', 'th'])('%s cell text alignment', tag => {
    test(`Allows ${tag} with text-align style`, () => {
      const input = `<table><tbody><tr><${tag} style="text-align:center;">foo</${tag}></tr></tbody></table>`
      const expected = input
      const sanitized = xss(input, xssOptions)

      // style should be allowed in this case
      expect(sanitized).toEqual(expected)
    })

    test(`Removes styles other than text-align from ${tag}`, () => {
      // Some other style is applied, which is not allowed (may be a click-jacking attempt!)
      const input = `<table><tbody><tr><${tag} style="text-align:center; position: absolute;">foo</${tag}></tr></tbody></table>`
      // position is not an allowed CSS property
      const expected = `<table><tbody><tr><${tag} style="text-align:center;">foo</${tag}></tr></tbody></table>`
      const sanitized = xss(input, xssOptions)

      // style should be allowed in this case
      expect(sanitized).toEqual(expected)
    })
  })
})
