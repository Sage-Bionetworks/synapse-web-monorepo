import { describe, expect, it } from 'vitest'
import {
  type AllowedSource,
  CSP_DIRECTIVES,
  serializeContentSecurityPolicy,
} from './contentSecurityPolicy.js'
import { parseContentSecurityPolicy as parse } from './testUtils/parseContentSecurityPolicy.js'

function allowed(
  source: string,
  ...directives: AllowedSource['directives']
): AllowedSource {
  return { source, directives, purpose: 'test', owner: 'test' }
}

describe('serializeContentSecurityPolicy', () => {
  it('sets every directive, blocking those with no allowed source', () => {
    const policy = parse(
      serializeContentSecurityPolicy([allowed("'self'", 'script-src')]),
    )
    expect([...policy.keys()]).toEqual([...CSP_DIRECTIVES])
    expect(policy.get('script-src')).toEqual(["'self'"])
    for (const directive of CSP_DIRECTIVES.filter(d => d !== 'script-src')) {
      expect(policy.get(directive)).toEqual(["'none'"])
    }
  })

  it('adds extra script sources, such as inline script hashes, to script-src only', () => {
    const hash = "'sha256-qznLcsROx4GACP2dm0UCKCzCG+HiZ1guq6ZZDob/Tng='"
    const policy = parse(
      serializeContentSecurityPolicy(
        [allowed("'self'", 'script-src', 'style-src')],
        [hash],
      ),
    )
    expect(policy.get('script-src')).toEqual(["'self'", hash])
    expect(policy.get('style-src')).toEqual(["'self'"])
  })

  it('lists a source once and drops HTTPS origins that https: already allows', () => {
    const policy = parse(
      serializeContentSecurityPolicy([
        allowed('https://a.example', 'img-src', 'connect-src'),
        allowed('https:', 'img-src'),
        allowed('https://a.example', 'connect-src'),
        allowed('http://b.example', 'img-src'),
      ]),
    )
    expect(policy.get('img-src')).toEqual(['https:', 'http://b.example'])
    expect(policy.get('connect-src')).toEqual(['https://a.example'])
  })
})
