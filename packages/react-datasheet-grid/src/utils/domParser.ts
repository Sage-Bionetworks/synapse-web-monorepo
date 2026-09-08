import DOMPurify from 'dompurify'

const parser =
  typeof DOMParser !== 'undefined'
    ? new DOMParser()
    : { parseFromString: () => null as unknown as Document }

/**
 * Parses a clipboard HTML payload into an inert document.
 *
 * The payload is sanitized first. The parsed document is inert and only ever
 * read via `textContent`, so this is not a script-execution boundary — but
 * sanitizing also drops `<script>`/`<style>` elements, whose text would
 * otherwise be picked up by `textContent` and land in a pasted cell value.
 */
export const parseDom = (html: string): Document => {
  return parser.parseFromString(
    // <style> is allowed by default, but like <script> its text is not visible
    // content, so it must not be able to reach a cell value via textContent.
    DOMPurify.sanitize(html, { FORBID_TAGS: ['style'] }),
    'text/html',
  )
}
