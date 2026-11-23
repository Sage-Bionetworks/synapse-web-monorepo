import { createHash } from 'node:crypto'
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { build } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import {
  addContentSecurityPolicyToHtml,
  addContentSecurityPolicyToHtmlFiles,
  contentSecurityPolicyPlugin,
  getInlineScriptHashes,
} from './contentSecurityPolicyHtml.js'
import type { AllowedSource } from './contentSecurityPolicy.js'

const SELF: AllowedSource[] = [
  {
    source: "'self'",
    directives: ['script-src'],
    purpose: 'test',
    owner: 'test',
  },
]

let directory: string
beforeEach(async () => {
  directory = await mkdtemp(path.join(tmpdir(), 'csp-test-'))
})
afterEach(async () => {
  await rm(directory, { recursive: true, force: true })
})

// Example from https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src
const MDN_SCRIPT = "alert('Hello, world.');"
const MDN_SCRIPT_HASH = "'sha256-qznLcsROx4GACP2dm0UCKCzCG+HiZ1guq6ZZDob/Tng='"

function getPolicy(html: string) {
  return /<meta http-equiv="Content-Security-Policy" content="([^"]*)">/.exec(
    html,
  )?.[1]
}

function sha256Source(scriptText: string) {
  return `'sha256-${createHash('sha256').update(scriptText).digest('base64')}'`
}

describe('getInlineScriptHashes', () => {
  it('hashes inline classic and module scripts the way browsers do', () => {
    const html = `<script>${MDN_SCRIPT}</script><script type="module">import "/a.js";</script>`
    const hashes = getInlineScriptHashes(html)
    expect(hashes).toHaveLength(2)
    expect(hashes[0]).toBe(MDN_SCRIPT_HASH)
  })

  it('hashes CRLF line endings as the LF text the HTML parser produces', () => {
    expect(getInlineScriptHashes('<script>a\r\nb\rc</script>')).toEqual(
      getInlineScriptHashes('<script>a\nb\nc</script>'),
    )
  })

  it('skips scripts that need no hash', () => {
    const html = [
      '<script type="module" crossorigin src="/assets/index.js"></script>',
      '<script type="application/ld+json">{"@type":"Dataset"}</script>',
      `<!-- <script>${MDN_SCRIPT}</script> -->`,
    ].join('\n')
    expect(getInlineScriptHashes(html)).toEqual([])
  })

  it('ends a script at any end tag the HTML parser accepts', () => {
    for (const endTag of ['</script >', '</SCRIPT>', '</script\t\n bar>']) {
      expect(getInlineScriptHashes(`<script>${MDN_SCRIPT}${endTag}`)).toEqual([
        MDN_SCRIPT_HASH,
      ])
    }
  })

  it('finds scripts and their text exactly as the HTML parser does', () => {
    const html = [
      // Not a script element
      '<scripts>x</scripts>',
      // "<!--" inside a script is script text, not a comment hiding the next script
      "<script>const marker = '<!--'</script>",
      `<script data-src="x">${MDN_SCRIPT}</script>`,
      // ">" inside a quoted attribute value doesn't end the start tag
      '<script data-x="a>b">attribute()</script>',
      // Inside "<!--" in a script, "<script>…</script>" doesn't end the script
      '<script><!--<script>escaped()</script>--></script>',
      // Template content runs once it is cloned into the document
      '<template><script>template()</script></template>',
      // An unterminated comment runs to the end of the document
      '<!-- <script>hidden()</script>',
    ].join('')
    expect(getInlineScriptHashes(html)).toEqual([
      sha256Source("const marker = '<!--'"),
      MDN_SCRIPT_HASH,
      sha256Source('attribute()'),
      sha256Source('<!--<script>escaped()</script>-->'),
      sha256Source('template()'),
    ])
  })

  it('scans unterminated comments and tags in linear time', () => {
    // Regular expressions with lazy quantifiers take quadratic time on these inputs, minutes at this size
    for (const html of ['<!--'.repeat(100_000), '<script'.repeat(100_000)]) {
      expect(getInlineScriptHashes(html)).toEqual([])
    }
  })
})

describe('addContentSecurityPolicyToHtml', () => {
  it('adds the policy after <meta charset> and before any resource it governs', () => {
    const html = `<!DOCTYPE html><html><head><meta charSet="utf-8"/><link rel="stylesheet" href="/a.css"/></head><body><script>${MDN_SCRIPT}</script></body></html>`
    const result = addContentSecurityPolicyToHtml(html, SELF)
    expect(result).toMatch(
      /^<!DOCTYPE html><html><head><meta charSet="utf-8"\/><meta http-equiv="Content-Security-Policy" content="[^"]+"><link rel="stylesheet"/,
    )
    expect(getPolicy(result)?.split('; ')).toContain(
      `script-src 'self' ${MDN_SCRIPT_HASH}`,
    )
  })

  it('adds the policy at the start of <head> when there is no <meta charset>', () => {
    const result = addContentSecurityPolicyToHtml(
      '<html><head lang="en"><title>t</title></head></html>',
      SELF,
    )
    expect(result).toMatch(
      /^<html><head lang="en"><meta http-equiv="Content-Security-Policy" content="[^"]+"><title>/,
    )
  })

  it('leaves the rest of the document byte-for-byte unchanged', () => {
    const html =
      '<!DOCTYPE html>\r\n<HTML>\r\n<head>\r\n  <meta charset=utf-8>\r\n  <title>t</title>\r\n</head><body><p class=a>x</body>\r\n'
    const result = addContentSecurityPolicyToHtml(html, SELF)
    const meta =
      /<meta http-equiv="Content-Security-Policy" content="[^"]+">/.exec(result)
    expect(result.replace(meta![0], '')).toBe(html)
    expect(result).toContain(`<meta charset=utf-8>${meta![0]}\r\n  <title>`)
  })

  it('refuses documents it cannot protect', () => {
    expect(() =>
      addContentSecurityPolicyToHtml('<p>no head</p>', SELF),
    ).toThrow(/no <head>/)
    for (const meta of [
      `<meta http-equiv="Content-Security-Policy" content="default-src 'none'">`,
      `<META name=x HTTP-EQUIV=content-security-policy content="default-src 'none'">`,
    ]) {
      expect(() =>
        addContentSecurityPolicyToHtml(`<head>${meta}</head>`, SELF),
      ).toThrow(/already has/)
    }
  })

  it('ignores other meta elements and unterminated tags, in linear time', () => {
    const html = `<head><meta name="description" content="Content-Security-Policy">${'<meta '.repeat(100_000)}`
    expect(addContentSecurityPolicyToHtml(html, SELF)).toMatch(
      /^<head><meta http-equiv="Content-Security-Policy"/,
    )
  })
})

describe('addContentSecurityPolicyToHtmlFiles', () => {
  it('adds the policy to every HTML file in the directory tree and leaves other files alone', async () => {
    await mkdir(path.join(directory, 'Explore/Studies'), { recursive: true })
    const page = `<html><head><script>${MDN_SCRIPT}</script></head></html>`
    await writeFile(path.join(directory, 'Explore/Studies/index.html'), page)
    await writeFile(path.join(directory, '__spa-fallback.html'), page)
    await writeFile(path.join(directory, 'robots.txt'), '<head>')

    await addContentSecurityPolicyToHtmlFiles(directory, SELF)

    const pages = await Promise.all(
      ['Explore/Studies/index.html', '__spa-fallback.html'].map(file =>
        readFile(path.join(directory, file), 'utf8'),
      ),
    )
    for (const html of pages) {
      expect(getPolicy(html)?.split('; ')).toContain(
        `script-src 'self' ${MDN_SCRIPT_HASH}`,
      )
    }
    expect(await readFile(path.join(directory, 'robots.txt'), 'utf8')).toBe(
      '<head>',
    )
  })

  it('names the page it could not protect', async () => {
    await writeFile(path.join(directory, 'broken.html'), '<p>no head</p>')
    await expect(
      addContentSecurityPolicyToHtmlFiles(directory, SELF),
    ).rejects.toThrow(/broken\.html/)
  })
})

describe('contentSecurityPolicyPlugin', () => {
  it("hashes the inline scripts of the HTML a production build emits, with sources from the build's env", async () => {
    await writeFile(
      path.join(directory, 'index.html'),
      `<!doctype html><html><head><meta charset="utf-8" />
        <script>
          window.config = { repo: '%VITE_TEST_ORIGIN%' }
        </script>
        <script type="module" src="./main.js"></script>
      </head><body><%- body %></body></html>`,
    )
    await writeFile(path.join(directory, 'main.js'), 'console.log(1)')
    await writeFile(
      path.join(directory, '.env.production'),
      'VITE_TEST_ORIGIN=https://repo.example',
    )

    const result = await build({
      root: directory,
      configFile: false,
      logLevel: 'silent',
      build: { write: false },
      plugins: [
        // Minifies the HTML in generateBundle, so the hashes must be taken after it
        createHtmlPlugin({ minify: true, inject: { data: { body: '<p>' } } }),
        contentSecurityPolicyPlugin(env => [
          ...SELF,
          {
            source: env.VITE_TEST_ORIGIN!,
            directives: ['connect-src'],
            purpose: 'test',
            owner: 'test',
          },
        ]),
      ],
    })
    if (!('output' in result)) {
      throw new Error('Expected a single build output')
    }

    const html = result.output.find(file => file.fileName === 'index.html')
    const script = result.output.find(file => file.type === 'chunk')
    if (html?.type !== 'asset' || script?.type !== 'chunk') {
      throw new Error('The build emitted no HTML page or script')
    }
    const htmlSource = String(html.source)
    const policy = getPolicy(htmlSource)!.split('; ')
    expect(policy).toContain('connect-src https://repo.example')
    const scriptSrc = policy.find(d => d.startsWith('script-src '))!
    const finalHashes = getInlineScriptHashes(htmlSource)
    expect(finalHashes).toHaveLength(1)
    expect(scriptSrc).toBe(`script-src 'self' ${finalHashes[0]}`)
    expect(script.code).not.toContain('Content-Security-Policy')
  })
})
