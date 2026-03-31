import { describe, expect, it } from 'vitest'
import { isBlockLevelElement, fixInvalidNesting } from './MarkdownUtils'

vi.mock('./widget/MarkdownSynapsePlot', () => ({
  default: vi
    .fn()
    .mockReturnValue(<figure data-testid={'MarkdownSynapsePlot'}></figure>),
}))

describe('MarkdownUtils DOM', () => {
  describe('isBlockLevelElement', () => {
    it('should return true for standard block elements', () => {
      const p = document.createElement('p')
      const div = document.createElement('div')
      const h1 = document.createElement('h1')

      expect(isBlockLevelElement(p)).toBe(true)
      expect(isBlockLevelElement(div)).toBe(true)
      expect(isBlockLevelElement(h1)).toBe(true)
    })

    it('should return true for Synapse widgets (data-widgetparams)', () => {
      const widget = document.createElement('div')
      widget.setAttribute('data-widgetparams', 'entitypreview?entityId=syn123')

      expect(isBlockLevelElement(widget)).toBe(true)
    })

    it('should return false for inline elements', () => {
      const span = document.createElement('span')
      const textNode = document.createTextNode('Hello world')

      expect(isBlockLevelElement(span)).toBe(false)
      expect(isBlockLevelElement(textNode)).toBe(false)
    })
  })

  describe('fixInvalidNesting', () => {
    it('should swap <p> for <div> when it contains a block descendant', () => {
      // p > div
      const p = document.createElement('p')
      const inner = document.createElement('div')
      inner.textContent = 'block'
      p.appendChild(inner)
      const container = document.createElement('div')
      container.appendChild(p)

      fixInvalidNesting(container)

      expect(container.querySelector('p')).toBeNull()
      expect(container.querySelector('div')).not.toBeNull()
    })

    it('should swap <a> for <div> when it contains a block descendant', () => {
      // a > div
      const a = document.createElement('a')
      a.setAttribute('href', 'https://synapse.org')
      const inner = document.createElement('div')
      inner.textContent = 'block'
      a.appendChild(inner)
      const container = document.createElement('div')
      container.appendChild(a)

      fixInvalidNesting(container)

      expect(container.querySelector('a')).toBeNull()
      const result = container.querySelector('[href]')
      expect(result?.getAttribute('href')).toBe('https://synapse.org')
    })

    it('should swap <button> for <div> when it contains a nested button', () => {
      // button > button
      const outerButton = document.createElement('button')
      const innerButton = document.createElement('button')
      innerButton.textContent = 'Nested'
      outerButton.appendChild(innerButton)

      const container = document.createElement('div')
      container.appendChild(outerButton)

      fixInvalidNesting(container)

      expect(container.querySelector('div')).not.toBeNull()

      const buttons = container.querySelectorAll('button')
      expect(buttons).toHaveLength(1)
      expect(buttons[0].textContent).toBe('Nested')
    })

    it('should recursively fix nested violations', () => {
      // p > span > div
      const p = document.createElement('p')
      p.className = 'outer'
      const span = document.createElement('span')
      const inner = document.createElement('div')
      inner.textContent = 'block'
      span.appendChild(inner)
      p.appendChild(span)
      const container = document.createElement('div')
      container.appendChild(p)

      fixInvalidNesting(container)

      // The outer <p> should now be a <div>
      const outer = container.querySelector('.outer')
      expect(outer?.tagName.toLowerCase()).toBe('div')
    })

    it('should preserve all attributes during swap', () => {
      // p > div
      const p = document.createElement('p')
      p.id = 'main'
      p.className = 'foo'
      p.setAttribute('data-test', 'bar')
      const inner = document.createElement('div')
      inner.textContent = 'block'
      p.appendChild(inner)
      const container = document.createElement('div')
      container.appendChild(p)

      fixInvalidNesting(container)

      const result = container.querySelector('#main')
      expect(result?.tagName.toLowerCase()).toBe('div')
      expect(result?.className).toBe('foo')
      expect(result?.getAttribute('data-test')).toBe('bar')
    })

    it('should preserve intentional whitespace but strip invalid table whitespace', () => {
      // p > span > text, table > tr > td
      const html = `
    <p>Word<span> </span>Word</p>
    <table>  <tr><td>Test</td></tr>  </table>
  `
      const doc = new DOMParser().parseFromString(html, 'text/html')

      fixInvalidNesting(doc.body)

      // intentional whitespace is preserved
      const p = doc.body.querySelector('p')
      expect(p?.textContent).toBe('Word Word')
      expect(doc.body.querySelector('span')?.textContent).toBe(' ')

      // whitespace in table is stripped
      const tr = doc.body.querySelector('tr')!
      // tr should only have one child (the <td>), no whitespace text nodes
      expect(tr.childNodes).toHaveLength(1)
      expect(tr.firstChild?.nodeName.toLowerCase()).toBe('td')
    })

    it('should swap <p> for <div> when it contains a block widget', () => {
      // p > span[data-widgetparams]
      const doc = new DOMParser().parseFromString(
        '<p><span data-widgetparams="plot?synapseId=syn123"></span></p>',
        'text/html',
      )

      fixInvalidNesting(doc.body)

      expect(doc.body.querySelector('p')).toBeNull()
      expect(doc.body.querySelector('[data-widgetparams]')).not.toBeNull()
    })

    it('should not modify valid inline nesting', () => {
      // p > span
      const html = '<p>Just some <span>text</span></p>'
      const doc = new DOMParser().parseFromString(html, 'text/html')

      fixInvalidNesting(doc.body)

      expect(doc.body.querySelector('p')).not.toBeNull()
      expect(doc.body.querySelector('span')).not.toBeNull()
    })
  })
})
