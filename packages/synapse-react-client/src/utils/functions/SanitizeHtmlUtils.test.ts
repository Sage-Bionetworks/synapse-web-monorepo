import xss from 'xss'
import { xssOptions } from './SanitizeHtmlUtils'

function createHTML(innerHTML: string) {
  const html = document.createElement('html')
  html.innerHTML = innerHTML
  return html
}

describe('HTML Santization', () => {
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
    const sanitized = xss(`<a href="${script}">foo</span>`, xssOptions)
    const html = createHTML(sanitized)
    const anchor = html.querySelector('a')!
    expect(anchor).not.toBeNull()
    // Verify script was removed
    expect(anchor.getAttribute('href')).toEqual('')
  })
  test('Allows valid link href', () => {
    const validHref = 'https://synapse.org'
    const sanitized = xss(`<a href="${validHref}">foo</span>`, xssOptions)
    const html = createHTML(sanitized)
    const anchor = html.querySelector('a')!
    expect(anchor).not.toBeNull()
    expect(anchor.getAttribute('href')).toEqual(validHref)
  })

  describe.each(['td', 'th'])('%s cell text alignment', tag => {
    test(`Allows ${tag} with text-align style`, () => {
      const input = `<${tag} style="text-align:center;">foo</${tag}>`
      const expected = input
      const sanitized = xss(input, xssOptions)

      // style should be allowed in this case
      expect(sanitized).toEqual(expected)
    })

    test(`Removes styles other than text-align from ${tag}`, () => {
      // Some other style is applied, which is not allowed (may be a click-jacking attempt!)
      const input = `<${tag} style="text-align:center; position: absolute;">foo</${tag}>`
      // position is not an allowed CSS property
      const expected = `<${tag} style="text-align:center;">foo</${tag}>`
      const sanitized = xss(input, xssOptions)

      // style should be allowed in this case
      expect(sanitized).toEqual(expected)
    })
  })
})
