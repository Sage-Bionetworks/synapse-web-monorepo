import { describe, expect, it } from 'vitest'
import {
  isBlockLevelElement,
  hasBlockLevelDescendant,
  transformTree,
} from './MarkdownUtils'

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

  describe('hasBlockLevelDescendant', () => {
    it('should return true if the element itself is block-level', () => {
      const div = document.createElement('div')
      expect(hasBlockLevelDescendant(div)).toBe(true)
    })

    it('should return true if a deep child is a block-level widget', () => {
      // Create: span -> span -> div[data-widgetparams]
      const outerSpan = document.createElement('span')
      const innerSpan = document.createElement('span')
      const widget = document.createElement('div')
      widget.setAttribute('data-widgetparams', 'somesettings')

      outerSpan.appendChild(innerSpan)
      innerSpan.appendChild(widget)

      // <span>
      //   <span>
      //     <div data-widgetparams="somesettings"></div>
      //   </span>
      // </span>

      expect(hasBlockLevelDescendant(outerSpan)).toBe(true)
    })
  })

  describe('transformTree', () => {
    it('should swap <p> for <div> when it contains a block descendant', () => {
      const doc = new DOMParser().parseFromString(
        '<p><span data-widgetparams="foo"></span></p>',
        'text/html',
      )

      transformTree(doc.body)

      expect(doc.body.querySelector('p')).toBeNull()
      expect(doc.body.querySelector('div')).not.toBeNull()
    })

    it('should swap <a> for <div> when it contains a block descendant', () => {
      const doc = new DOMParser().parseFromString(
        '<a href="https://synapse.org"><span data-widgetparams="foo"></span></a>',
        'text/html',
      )

      transformTree(doc.body)

      expect(doc.body.querySelector('a')).toBeNull()
      const divLink = doc.body.querySelector('div')
      expect(divLink?.getAttribute('href')).toBe('https://synapse.org')
    })

    it('should recursively fix nested violations', () => {
      // p > span > widget
      const doc = new DOMParser().parseFromString(
        '<p class="outer"><span><span data-widgetparams="foo"></span></span></p>',
        'text/html',
      )

      transformTree(doc.body)

      // The outer <p> should now be a <div>
      const outer = doc.body.querySelector('.outer')
      expect(outer?.tagName.toLowerCase()).toBe('div')
    })

    it('should preserve all attributes during swap', () => {
      const doc = new DOMParser().parseFromString(
        '<p id="main" class="foo" data-test="bar"><span data-widgetparams="x"></span></p>',
        'text/html',
      )

      transformTree(doc.body)

      const div = doc.body.querySelector('div')
      expect(div?.id).toBe('main')
      expect(div?.className).toBe('foo')
      expect(div?.getAttribute('data-test')).toBe('bar')
    })

    it('should not modify valid inline nesting', () => {
      const html = '<p>Just some <span>text</span></p>'
      const doc = new DOMParser().parseFromString(html, 'text/html')

      transformTree(doc.body)

      expect(doc.body.querySelector('p')).not.toBeNull()
      expect(doc.body.querySelector('span')).not.toBeNull()
    })
  })
})
