import { describe, expect, it } from 'vitest'
import { isBlockLevelElement, fixInvalidNesting } from './MarkdownUtils'
import {
  Element as DomElement,
  Text as DomText,
  htmlToDOM,
  type DOMNode,
} from 'html-react-parser'

vi.mock('./widget/MarkdownSynapsePlot', () => ({
  default: vi
    .fn()
    .mockReturnValue(<figure data-testid={'MarkdownSynapsePlot'}></figure>),
}))

/**
 * Build a `domhandler` element node (the node type produced by
 * `html-react-parser`'s `htmlToDOM` and consumed by `fixInvalidNesting`),
 * wiring up parent references so the tree mirrors a parsed document.
 */
function el(
  name: string,
  attribs: Record<string, string> = {},
  children: DOMNode[] = [],
): DomElement {
  const element = new DomElement(name, attribs, children)
  children.forEach(child => {
    child.parent = element
  })
  return element
}

function txt(data: string): DomText {
  return new DomText(data)
}

/** Collect all element nodes in the tree (depth-first). */
function allElements(nodes: DOMNode[]): DomElement[] {
  const result: DomElement[] = []
  const walk = (ns: DOMNode[]) => {
    ns.forEach(node => {
      if (node instanceof DomElement) {
        result.push(node)
        walk(node.children as DOMNode[])
      }
    })
  }
  walk(nodes)
  return result
}

const findByTag = (nodes: DOMNode[], tag: string) =>
  allElements(nodes).filter(e => e.name.toLowerCase() === tag)

const findByAttrib = (nodes: DOMNode[], attr: string) =>
  allElements(nodes).filter(e => attr in e.attribs)

describe('MarkdownUtils DOM', () => {
  describe('isBlockLevelElement', () => {
    it('should return true for standard block elements', () => {
      expect(isBlockLevelElement(el('p'))).toBe(true)
      expect(isBlockLevelElement(el('div'))).toBe(true)
      expect(isBlockLevelElement(el('h1'))).toBe(true)
    })

    it('should return true for block Synapse widgets (data-widgetparams)', () => {
      const widget = el('div', {
        'data-widgetparams': 'entitypreview?entityId=syn123',
      })

      expect(isBlockLevelElement(widget)).toBe(true)
    })

    it('should return false for inline Synapse widgets (badge)', () => {
      const widget = el('span', { 'data-widgetparams': 'badge?alias=test' })

      expect(isBlockLevelElement(widget)).toBe(false)
    })

    it('should return false for inline elements', () => {
      expect(isBlockLevelElement(el('span'))).toBe(false)
      expect(isBlockLevelElement(txt('Hello world'))).toBe(false)
    })
  })

  describe('fixInvalidNesting', () => {
    it('should swap <p> for <div> when it contains a block descendant', () => {
      // p > div
      const p = el('p', {}, [el('div', {}, [txt('block')])])
      const container = el('div', {}, [p])

      fixInvalidNesting(container)

      expect(findByTag([container], 'p')).toHaveLength(0)
      expect(findByTag([container], 'div').length).toBeGreaterThan(0)
    })

    it('should swap <a> for <div> when it contains a block descendant', () => {
      // a > div
      const a = el('a', { href: 'https://synapse.org' }, [
        el('div', {}, [txt('block')]),
      ])
      const container = el('div', {}, [a])

      fixInvalidNesting(container)

      expect(findByTag([container], 'a')).toHaveLength(0)
      const result = findByAttrib([container], 'href')
      expect(result[0]?.attribs['href']).toBe('https://synapse.org')
    })

    it('should swap <button> for <div> when it contains a nested button', () => {
      // button > button
      const outerButton = el('button', {}, [el('button', {}, [txt('Nested')])])
      const container = el('div', {}, [outerButton])

      fixInvalidNesting(container)

      expect(findByTag([container], 'div').length).toBeGreaterThan(0)

      const buttons = findByTag([container], 'button')
      expect(buttons).toHaveLength(1)
      expect((buttons[0].children[0] as DomText).data).toBe('Nested')
    })

    it('should recursively fix nested violations', () => {
      // p > span > div
      const p = el('p', { class: 'outer' }, [
        el('span', {}, [el('div', {}, [txt('block')])]),
      ])
      const container = el('div', {}, [p])

      fixInvalidNesting(container)

      // The outer <p> should now be a <div>
      const outer = findByAttrib([container], 'class').find(
        e => e.attribs['class'] === 'outer',
      )
      expect(outer?.name.toLowerCase()).toBe('div')
    })

    it('should preserve all attributes during swap', () => {
      // p > div
      const p = el('p', { id: 'main', class: 'foo', 'data-test': 'bar' }, [
        el('div', {}, [txt('block')]),
      ])
      const container = el('div', {}, [p])

      fixInvalidNesting(container)

      const result = findByAttrib([container], 'id').find(
        e => e.attribs['id'] === 'main',
      )
      expect(result?.name.toLowerCase()).toBe('div')
      expect(result?.attribs['class']).toBe('foo')
      expect(result?.attribs['data-test']).toBe('bar')
    })

    it('should preserve intentional whitespace but strip invalid table whitespace', () => {
      // p > span > text, table > tr > td
      const html = `
    <p>Word<span> </span>Word</p>
    <table>  <tr><td>Test</td></tr>  </table>
  `
      const nodes = htmlToDOM(html)
      nodes.forEach(node => fixInvalidNesting(node))

      // intentional whitespace is preserved
      const span = findByTag(nodes, 'span')[0]
      expect((span.children[0] as DomText).data).toBe(' ')

      // whitespace in table is stripped
      const tr = findByTag(nodes, 'tr')[0]
      // tr should only have one child (the <td>), no whitespace text nodes
      expect(tr.children).toHaveLength(1)
      expect((tr.children[0] as DomElement).name.toLowerCase()).toBe('td')
    })

    it('should swap <p> for <div> when it contains a block widget', () => {
      // p > span[data-widgetparams]
      const p = el('p', {}, [
        el('span', { 'data-widgetparams': 'plot?synapseId=syn123' }),
      ])
      const container = el('div', {}, [p])

      fixInvalidNesting(container)

      expect(findByTag([container], 'p')).toHaveLength(0)
      expect(findByAttrib([container], 'data-widgetparams').length).toBe(1)
    })

    it('should not swap <p> for a badge widget (inline widget)', () => {
      const p = el('p', {}, [
        el('span', { 'data-widgetparams': 'badge?alias=jsmith' }),
      ])
      const container = el('div', {}, [p])

      fixInvalidNesting(container)

      expect(findByTag([container], 'p').length).toBe(1)
    })

    it('should not modify valid inline nesting', () => {
      // p > span
      const p = el('p', {}, [txt('Just some '), el('span', {}, [txt('text')])])
      const container = el('div', {}, [p])

      fixInvalidNesting(container)

      expect(findByTag([container], 'p').length).toBe(1)
      expect(findByTag([container], 'span').length).toBe(1)
    })
  })
})
