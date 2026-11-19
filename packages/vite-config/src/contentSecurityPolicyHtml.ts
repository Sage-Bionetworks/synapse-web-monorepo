import { createHash } from 'node:crypto'
import { readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import type { Plugin } from 'vite'
import {
  type AllowedSource,
  serializeContentSecurityPolicy,
} from './contentSecurityPolicy.js'

const SRC_ATTRIBUTE = /(?:^|\s)src\s*=/i
const TYPE_ATTRIBUTE = /(?:^|\s)type\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i
// The policy must precede every element it governs. It goes after <meta charset> so the charset declaration stays
// within the first 1024 bytes, where browsers look for it.
const HEAD_START = /<head\b[^>]*>(?:\s*<meta\s+charset\s*=[^>]*>)?/i
const CSP_HTTP_EQUIV = /http-equiv\s*=\s*["']?content-security-policy/i

// The document is scanned with indexOf instead of document-wide regular expressions, which take quadratic time on
// unterminated comments or tags.

/**
 * Returns the index of the next `tag` (e.g. `<script` or `</script`) at or after `from` whose name ends there, as the
 * HTML tokenizer reads it: followed by whitespace, `/`, or `>`, so `<scripts` doesn't match. `lowerHtml` is the
 * lower-cased document.
 */
function indexOfTag(lowerHtml: string, tag: string, from: number): number {
  for (
    let index = lowerHtml.indexOf(tag, from);
    index !== -1;
    index = lowerHtml.indexOf(tag, index + 1)
  ) {
    if (/[\s/>]/.test(lowerHtml.charAt(index + tag.length))) {
      return index
    }
  }
  return -1
}

type InlineScript = { attributes: string; text: string }

/** Returns every `<script>` element outside HTML comments, in document order. */
function findScripts(html: string): InlineScript[] {
  const lowerHtml = html.toLowerCase()
  const scripts: InlineScript[] = []
  // The next comment and script, searched from the end of the last one found, so no text is scanned twice
  let comment = lowerHtml.indexOf('<!--')
  let script = indexOfTag(lowerHtml, '<script', 0)
  let position: number
  while (script !== -1) {
    if (comment !== -1 && comment < script) {
      // A <script> inside a comment is commented out. An unterminated comment runs to the end of the document.
      const commentEnd = lowerHtml.indexOf('-->', comment + '<!--'.length)
      if (commentEnd === -1) {
        break
      }
      position = commentEnd + '-->'.length
    } else {
      const startTagEnd = lowerHtml.indexOf('>', script)
      const endTag =
        startTagEnd === -1
          ? -1
          : indexOfTag(lowerHtml, '</script', startTagEnd + 1)
      if (endTag === -1) {
        break
      }
      scripts.push({
        attributes: html.slice(script + '<script'.length, startTagEnd),
        text: html.slice(startTagEnd + 1, endTag),
      })
      const endTagEnd = lowerHtml.indexOf('>', endTag)
      position = endTagEnd === -1 ? html.length : endTagEnd + 1
    }
    if (comment !== -1 && comment < position) {
      comment = lowerHtml.indexOf('<!--', position)
    }
    if (script < position) {
      script = indexOfTag(lowerHtml, '<script', position)
    }
  }
  return scripts
}

function hasContentSecurityPolicyMeta(html: string): boolean {
  const lowerHtml = html.toLowerCase()
  for (
    let meta = indexOfTag(lowerHtml, '<meta', 0);
    meta !== -1;
    meta = indexOfTag(lowerHtml, '<meta', meta + 1)
  ) {
    const metaEnd = lowerHtml.indexOf('>', meta)
    if (metaEnd === -1) {
      return false
    }
    if (CSP_HTTP_EQUIV.test(lowerHtml.slice(meta, metaEnd))) {
      return true
    }
  }
  return false
}

function isDataBlock(scriptAttributes: string): boolean {
  const match = TYPE_ATTRIBUTE.exec(scriptAttributes)
  const type = match?.[1] ?? match?.[2] ?? match?.[3] ?? ''
  // e.g. application/ld+json. Browsers never execute these, so they need no hash.
  return /json/i.test(type)
}

/**
 * Returns `'sha256-…'` sources for every inline script in the document that a browser would execute.
 */
export function getInlineScriptHashes(html: string): string[] {
  const hashes = new Set<string>()
  for (const { attributes, text } of findScripts(html)) {
    if (SRC_ATTRIBUTE.test(attributes) || isDataBlock(attributes)) {
      continue
    }
    // Browsers hash the script text after the HTML parser normalizes newlines
    const normalized = text.replaceAll(/\r\n?/g, '\n')
    hashes.add(
      `'sha256-${createHash('sha256').update(normalized, 'utf8').digest('base64')}'`,
    )
  }
  return [...hashes]
}

/**
 * Adds a Content Security Policy built from `allowedSources` to an HTML document as a `<meta http-equiv>` element,
 * allowing the document's own inline scripts by hash.
 *
 * @throws if the document has no `<head>` or already has a Content Security Policy
 */
export function addContentSecurityPolicyToHtml(
  html: string,
  allowedSources: AllowedSource[],
): string {
  if (hasContentSecurityPolicyMeta(html)) {
    throw new Error('The document already has a Content-Security-Policy')
  }
  const headStart = HEAD_START.exec(html)
  if (!headStart) {
    throw new Error(
      'The document has no <head> for the Content-Security-Policy',
    )
  }
  const policy = serializeContentSecurityPolicy(
    allowedSources,
    getInlineScriptHashes(html),
  )
  const meta = `<meta http-equiv="Content-Security-Policy" content="${policy}">`
  const insertAt = headStart.index + headStart[0].length
  return html.slice(0, insertAt) + meta + html.slice(insertAt)
}

async function findHtmlFiles(directory: string): Promise<string[]> {
  const entries = await readdir(directory, {
    recursive: true,
    withFileTypes: true,
  })
  return entries
    .filter(entry => entry.isFile() && entry.name.endsWith('.html'))
    .map(entry => path.join(entry.parentPath, entry.name))
}

/**
 * Adds a Content Security Policy to every HTML file under `directory`, e.g. the pages prerendered by React Router.
 */
export async function addContentSecurityPolicyToHtmlFiles(
  directory: string,
  allowedSources: AllowedSource[],
): Promise<void> {
  // One page at a time: a portal can prerender thousands of pages, and opening them all at once can exceed the
  // open-file limit and hold every page in memory
  for (const file of await findHtmlFiles(directory)) {
    // oxlint-disable-next-line no-await-in-loop
    const html = await readFile(file, 'utf8')
    let withPolicy: string
    try {
      withPolicy = addContentSecurityPolicyToHtml(html, allowedSources)
    } catch (error) {
      throw new Error(`Could not add the Content-Security-Policy to ${file}`, {
        cause: error,
      })
    }
    // oxlint-disable-next-line no-await-in-loop
    await writeFile(file, withPolicy)
  }
}

/**
 * Adds a Content Security Policy to the HTML that a production build emits. The dev server is left without a policy
 * because Vite's HMR client relies on inline scripts and a localhost WebSocket.
 *
 * Place it after plugins that rewrite HTML (e.g. vite-plugin-html's minifier) so the hashes match the final markup.
 *
 * @param getAllowedSources returns the policy's sources for the build's environment variables (`VITE_*`)
 */
export function contentSecurityPolicyPlugin(
  getAllowedSources: (
    env: Record<string, string | undefined>,
  ) => AllowedSource[],
): Plugin {
  let allowedSources: AllowedSource[] = []
  return {
    name: 'content-security-policy',
    apply: 'build',
    enforce: 'post',
    configResolved(config) {
      allowedSources = getAllowedSources(
        config.env as Record<string, string | undefined>,
      )
    },
    generateBundle(_options, bundle) {
      for (const output of Object.values(bundle)) {
        if (
          output.type === 'asset' &&
          output.fileName.endsWith('.html') &&
          typeof output.source === 'string'
        ) {
          output.source = addContentSecurityPolicyToHtml(
            output.source,
            allowedSources,
          )
        }
      }
    },
  }
}
