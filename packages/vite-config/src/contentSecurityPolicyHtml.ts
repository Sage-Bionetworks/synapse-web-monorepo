import { createHash } from 'node:crypto'
import { readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import pLimit from 'p-limit'
import { type DefaultTreeAdapterTypes, defaultTreeAdapter, parse } from 'parse5'
import type { Plugin } from 'vite'
import {
  type AllowedSource,
  serializeContentSecurityPolicy,
} from './contentSecurityPolicy.js'

type Document = DefaultTreeAdapterTypes.Document
type Element = DefaultTreeAdapterTypes.Element
type ParentNode = DefaultTreeAdapterTypes.ParentNode

// A portal can prerender thousands of pages; opening them all at once can exceed the open-file limit
const CONCURRENT_HTML_FILES = 8

function getAttribute(element: Element, name: string): string | undefined {
  return element.attrs.find(attribute => attribute.name === name)?.value
}

/** Returns every element in the document, in document order. */
function getElements(root: ParentNode): Element[] {
  const elements: Element[] = []
  const visit = (parent: ParentNode) => {
    for (const child of parent.childNodes) {
      if (defaultTreeAdapter.isElementNode(child)) {
        elements.push(child)
        // A <template>'s scripts run once its content is cloned into the document
        visit('content' in child ? child.content : child)
      }
    }
  }
  visit(root)
  return elements
}

function getChildElement(
  parent: ParentNode | undefined,
  nodeName: string,
): Element | undefined {
  return parent?.childNodes.find(
    (child): child is Element =>
      defaultTreeAdapter.isElementNode(child) && child.nodeName === nodeName,
  )
}

/**
 * Returns where the policy goes: it must precede every element it governs, and it follows a leading `<meta charset>`
 * so the charset declaration stays within the first 1024 bytes, where browsers look for it. Returns `undefined` if
 * the document has no `<head>` start tag.
 */
function getPolicyOffset(document: Document): number | undefined {
  const head = getChildElement(getChildElement(document, 'html'), 'head')
  const headStartTag = head?.sourceCodeLocation?.startTag
  if (!head || !headStartTag) {
    return undefined
  }
  const firstChild = head.childNodes.find(
    child => !(defaultTreeAdapter.isTextNode(child) && !child.value.trim()),
  )
  if (
    firstChild &&
    defaultTreeAdapter.isElementNode(firstChild) &&
    firstChild.nodeName === 'meta' &&
    getAttribute(firstChild, 'charset') !== undefined &&
    firstChild.sourceCodeLocation
  ) {
    return firstChild.sourceCodeLocation.endOffset
  }
  return headStartTag.endOffset
}

function getScriptHashes(document: Document): string[] {
  const hashes = new Set<string>()
  for (const element of getElements(document)) {
    if (
      element.nodeName !== 'script' ||
      getAttribute(element, 'src') !== undefined ||
      // e.g. application/ld+json. Browsers never execute these, so they need no hash.
      /json/i.test(getAttribute(element, 'type') ?? '')
    ) {
      continue
    }
    const text = element.childNodes
      .flatMap(child =>
        defaultTreeAdapter.isTextNode(child) ? [child.value] : [],
      )
      .join('')
    hashes.add(
      `'sha256-${createHash('sha256').update(text, 'utf8').digest('base64')}'`,
    )
  }
  return [...hashes]
}

/**
 * Returns `'sha256-…'` sources for every inline script in the document that a browser would execute.
 */
export function getInlineScriptHashes(html: string): string[] {
  return getScriptHashes(parse(html))
}

/**
 * Adds a Content Security Policy built from `allowedSources` to an HTML document as a `<meta http-equiv>` element,
 * allowing the document's own inline scripts by hash. The rest of the markup is left byte-for-byte unchanged.
 *
 * @throws if the document has no `<head>` or already has a Content Security Policy
 */
export function addContentSecurityPolicyToHtml(
  html: string,
  allowedSources: AllowedSource[],
): string {
  // parse5 implements the HTML parsing algorithm that browsers use, so the script text it yields is the text a
  // browser hashes, and its source locations let the policy be spliced into the original markup without
  // reserializing it
  const document = parse(html, { sourceCodeLocationInfo: true })
  const hasPolicy = getElements(document).some(
    element =>
      element.nodeName === 'meta' &&
      getAttribute(element, 'http-equiv')?.toLowerCase() ===
        'content-security-policy',
  )
  if (hasPolicy) {
    throw new Error('The document already has a Content-Security-Policy')
  }
  const insertAt = getPolicyOffset(document)
  if (insertAt === undefined) {
    throw new Error(
      'The document has no <head> for the Content-Security-Policy',
    )
  }
  const policy = serializeContentSecurityPolicy(
    allowedSources,
    getScriptHashes(document),
  )
  const meta = `<meta http-equiv="Content-Security-Policy" content="${policy}">`
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

async function addContentSecurityPolicyToHtmlFile(
  file: string,
  allowedSources: AllowedSource[],
): Promise<void> {
  const html = await readFile(file, 'utf8')
  let withPolicy: string
  try {
    withPolicy = addContentSecurityPolicyToHtml(html, allowedSources)
  } catch (error) {
    throw new Error(`Could not add the Content-Security-Policy to ${file}`, {
      cause: error,
    })
  }
  await writeFile(file, withPolicy)
}

/**
 * Adds a Content Security Policy to every HTML file under `directory`, e.g. the pages prerendered by React Router.
 */
export async function addContentSecurityPolicyToHtmlFiles(
  directory: string,
  allowedSources: AllowedSource[],
): Promise<void> {
  const limit = pLimit(CONCURRENT_HTML_FILES)
  const files = await findHtmlFiles(directory)
  await Promise.all(
    files.map(file =>
      limit(() => addContentSecurityPolicyToHtmlFile(file, allowedSources)),
    ),
  )
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
