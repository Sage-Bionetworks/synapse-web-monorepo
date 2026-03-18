/**
 * Client-side stub for jsdom.
 *
 * jsdom is statically imported by SanitizeHtmlUtils.ts but only used inside a
 * `typeof window === 'undefined'` guard (i.e. Node.js only). This stub
 * satisfies the named import at bundle time without pulling in Node.js-only
 * transitive dependencies (agent-base, http-proxy-agent, etc.) that crash
 * the browser.
 */
export const JSDOM = undefined
