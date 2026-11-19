import { createHash } from 'node:crypto'
import { readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import type { Plugin } from 'vite'
import {
  type AllowedSource,
  serializeContentSecurityPolicy,
} from './contentSecurityPolicy.js'

// Comments are matched first so a commented-out <script> is consumed as part of the comment and never hashed
const COMMENT_OR_SCRIPT =
  /<!--[\s\S]*?-->|<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi
const SRC_ATTRIBUTE = /(?:^|\s)src\s*=/i
const TYPE_ATTRIBUTE = /(?:^|\s)type\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i
// The policy must precede every element it governs. It goes after <meta charset> so the charset declaration stays
// within the first 1024 bytes, where browsers look for it.
const HEAD_START = /<head\b[^>]*>(?:\s*<meta\s+charset\s*=[^>]*>)?/i
const CSP_META = /<meta\s[^>]*http-equiv\s*=\s*["']?content-security-policy/i

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
  for (const [element, attributes, content] of html.matchAll(
    COMMENT_OR_SCRIPT,
  )) {
    if (
      element.startsWith('<!--') ||
      SRC_ATTRIBUTE.test(attributes) ||
      isDataBlock(attributes)
    ) {
      continue
    }
    // Browsers hash the script text after the HTML parser normalizes newlines
    const text = content.replaceAll(/\r\n?/g, '\n')
    hashes.add(
      `'sha256-${createHash('sha256').update(text, 'utf8').digest('base64')}'`,
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
  if (CSP_META.test(html)) {
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
