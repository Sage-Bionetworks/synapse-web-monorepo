import { describe, expect, it } from 'vitest'
import { isBlockLevelElement, hasBlockLevelDescendant } from './MarkdownUtils'

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
