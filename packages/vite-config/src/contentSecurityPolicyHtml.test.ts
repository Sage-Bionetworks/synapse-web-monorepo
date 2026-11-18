import { describe, expect, it } from 'vitest'
import {
  addContentSecurityPolicyToHtml,
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

// Example from https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src
const MDN_SCRIPT = "alert('Hello, world.');"
const MDN_SCRIPT_HASH = "'sha256-qznLcsROx4GACP2dm0UCKCzCG+HiZ1guq6ZZDob/Tng='"

function getPolicy(html: string) {
  return /<meta http-equiv="Content-Security-Policy" content="([^"]*)">/.exec(
    html,
  )?.[1]
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

  it('refuses documents it cannot protect', () => {
    expect(() =>
      addContentSecurityPolicyToHtml('<p>no head</p>', SELF),
    ).toThrow(/no <head>/)
    expect(() =>
      addContentSecurityPolicyToHtml(
        `<head><meta http-equiv="Content-Security-Policy" content="default-src 'none'"></head>`,
        SELF,
      ),
    ).toThrow(/already has/)
  })
})
