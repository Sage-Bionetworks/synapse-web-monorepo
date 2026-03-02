import { describe, expect, it } from 'vitest'
import { addIdsToReferenceWidgets, addIdsToTocWidgets } from './MarkdownUtils'

describe('MarkdownUtils', () => {
  describe('addIdsToReferenceWidgets', () => {
    it('replaces a single reference widget with a numbered anchor', () => {
      const input =
        '<p>This is a ref <span id="wikiReference1"></span><span data-widgetparams="reference?inlineWidget=true&amp;text=Citation&amp;footnoteId=1" class="inlineWidgetContainer" id="widget-4undefined" data-widget-type="reference">&lt;Synapse widget&gt;</span>.</p>'
      const result = addIdsToReferenceWidgets(input)
      expect(result).toBe('<p>This is a ref <a href="" id="ref1">[1]</a>.</p>')
    })

    it('replaces multiple reference widgets with sequentially numbered anchors', () => {
      const input =
        '<p>First ref <span id="wikiReference1"></span><span data-widgetparams="reference?inlineWidget=true&amp;text=A&amp;footnoteId=1" class="inlineWidgetContainer" id="widget-0undefined" data-widget-type="reference">&lt;Synapse widget&gt;</span> and second ref <span id="wikiReference2"></span><span data-widgetparams="reference?inlineWidget=true&amp;text=B&amp;footnoteId=2" class="inlineWidgetContainer" id="widget-1undefined" data-widget-type="reference">&lt;Synapse widget&gt;</span> done.</p>'
      const result = addIdsToReferenceWidgets(input)
      expect(result).toBe(
        '<p>First ref <a href="" id="ref1">[1]</a> and second ref <a href="" id="ref2">[2]</a> done.</p>',
      )
    })

    it('returns the string unchanged when there are no reference widgets', () => {
      const input = '<p>No references here.</p>'
      const result = addIdsToReferenceWidgets(input)
      expect(result).toBe(input)
    })

    it('does not match bookmark widgets (only reference widgets)', () => {
      // Bookmark widgets have wikiFootnote IDs, not wikiReference
      const input =
        '<p><span id="wikiFootnote2"></span><span data-widgetparams="bookmark?text=[1]&amp;bookmarkID=wikiReference1" class="inlineWidgetContainer" id="widget-5undefined" data-widget-type="bookmark">&lt;Synapse widget&gt;</span></p>'
      const result = addIdsToReferenceWidgets(input)
      expect(result).toBe(input)
    })

    it('completes in reasonable time on pathological input (ReDoS resistance)', () => {
      // Many repeated '<span' tokens cause quadratic backtracking with the old .*? regex.
      // With a safe regex using negated character classes, this should be linear.
      const malicious = '<span'.repeat(10000)
      const start = performance.now()
      addIdsToReferenceWidgets(malicious)
      const elapsed = performance.now() - start
      // A safe regex handles 50K chars in <5ms; the old regex took >100ms
      expect(elapsed).toBeLessThan(50)
    })

    it('completes in reasonable time on pathological input with wikiReference prefix (ReDoS resistance)', () => {
      // Repeated 'id="wikiReference' tokens after the initial '<span' match cause
      // quadratic backtracking between the .*? groups in the old regex.
      const malicious =
        '<spanid="wikiReference' + 'id="wikiReference'.repeat(10000)
      const start = performance.now()
      addIdsToReferenceWidgets(malicious)
      const elapsed = performance.now() - start
      expect(elapsed).toBeLessThan(50)
    })
  })

  describe('addIdsToTocWidgets', () => {
    it('adds an id to a single TOC header', () => {
      const input = '<h1 toc="true">Introduction</h1>'
      const result = addIdsToTocWidgets(input)
      expect(result).toBe('<h1 id="SRC-header-1" toc="true">Introduction</h1>')
    })

    it('adds sequential ids to multiple TOC headers', () => {
      const input =
        '<h1 toc="true">First</h1>\n<h2 toc="true">Second</h2>\n<h3 toc="true">Third</h3>'
      const result = addIdsToTocWidgets(input)
      expect(result).toBe(
        '<h1 id="SRC-header-1" toc="true">First</h1>\n<h2 id="SRC-header-2" toc="true">Second</h2>\n<h3 id="SRC-header-3" toc="true">Third</h3>',
      )
    })

    it('returns the string unchanged when there are no TOC headers', () => {
      const input = '<h1>No toc attribute</h1>'
      const result = addIdsToTocWidgets(input)
      expect(result).toBe(input)
    })

    it('does not match headers without toc="true"', () => {
      const input = '<h1>Plain header</h1><h2 toc="false">Not a toc</h2>'
      const result = addIdsToTocWidgets(input)
      expect(result).toBe(input)
    })

    it('handles multiple TOC headers on the same line without over-matching', () => {
      // With a greedy .* the regex would match both headers as a single match.
      // A correct regex should match each header individually.
      const input = '<h1 toc="true">First</h1><h2 toc="true">Second</h2>'
      const result = addIdsToTocWidgets(input)
      expect(result).toBe(
        '<h1 id="SRC-header-1" toc="true">First</h1><h2 id="SRC-header-2" toc="true">Second</h2>',
      )
    })

    it('completes in reasonable time on pathological input (ReDoS resistance)', () => {
      // Many '</h' near-matches that could cause backtracking
      const malicious = '<h1 toc="true">' + '</h'.repeat(10000)
      const start = performance.now()
      addIdsToTocWidgets(malicious)
      const elapsed = performance.now() - start
      expect(elapsed).toBeLessThan(50)
    })
  })
})
