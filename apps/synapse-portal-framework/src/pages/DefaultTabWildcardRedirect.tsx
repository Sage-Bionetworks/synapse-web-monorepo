import { useOutletContext } from 'react-router'
import RedirectWithQuery from '../components/RedirectWithQuery'
import type { DefaultTabRedirectContext } from './DefaultTabIndexRedirect'

/**
 * Wildcard fallback for tabbed detail pages — redirects unmatched sub-paths
 * (e.g. `/Studies/syn123/garbage`) back to the parent's default tab.
 *
 * The default tab path comes from the parent detail-page route via outlet
 * context. PORTALS-3708 introduced this fallback for SPA-mode portals; in
 * SSG it serves the same purpose for client-side route fallbacks.
 *
 * Wire up via a 1-line portal-side wrapper file:
 * ```tsx
 * // portal: src/pages/DefaultTabWildcardRedirect.tsx
 * export { default } from '@sage-bionetworks/synapse-portal-framework/pages/DefaultTabWildcardRedirect'
 * ```
 */
export default function DefaultTabWildcardRedirect() {
  const { defaultTabPath } = useOutletContext<DefaultTabRedirectContext>()
  return <RedirectWithQuery to={`../${defaultTabPath}`} />
}
