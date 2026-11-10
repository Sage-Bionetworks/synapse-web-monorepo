// @vitest-environment node

/**
 * Server-side rendering (SSR) / SSG-prerender regression tests for useImmutableTableQuery. They run in the `node`
 * Vitest environment, where there is no `window`, and guard against reading the URL during render, which crashes
 * React Router's prerender step for every page with a deep-linked table.
 */
import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'
import useImmutableTableQuery from './useImmutableTableQuery'

function DeepLinkedQuery() {
  const { isRestoringQueryFromUrl, getCurrentQueryRequest } =
    useImmutableTableQuery({
      initQueryRequest: {
        concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
        entityId: 'syn123',
        partMask: 1,
        query: { sql: 'SELECT * FROM syn123' },
      },
      shouldDeepLink: true,
    })
  return (
    <p>
      {getCurrentQueryRequest().query.sql} restoring:
      {String(isRestoringQueryFromUrl)}
    </p>
  )
}

describe('useImmutableTableQuery SSR (node environment)', () => {
  it('renders the initial query, not restoring from a URL, when deep linking on the server', () => {
    expect(typeof window).toBe('undefined')

    expect(renderToStaticMarkup(<DeepLinkedQuery />)).toBe(
      '<p>SELECT * FROM syn123 restoring:false</p>',
    )
  })
})
