import { useOutletContext } from 'react-router'
import RedirectWithQuery from '../components/RedirectWithQuery'

/**
 * Context shape provided by tabbed detail-page parent routes via
 * `<Outlet context={{ defaultTabPath }} />`.
 */
export type DefaultTabRedirectContext = {
  /** Path segment for the tab to redirect to (relative). */
  defaultTabPath: string
}

/**
 * Index route for tabbed detail pages — redirects `/Resource/:id` to
 * `/Resource/:id/<defaultTabPath>` while preserving the query string and hash.
 *
 * The default tab path comes from the parent detail-page route via outlet
 * context, so this single component works for every detail page in a portal.
 *
 * Wire up by pointing `routes.ts` at this component (typically through a
 * 1-line portal-side wrapper file, since route file paths must be relative
 * to the portal's `appDirectory`):
 *
 * ```tsx
 * // portal: src/pages/DefaultTabIndexRedirect.tsx
 * export { default } from '@sage-bionetworks/synapse-portal-framework/pages/DefaultTabIndexRedirect'
 * ```
 *
 * And in the parent detail page render:
 * ```tsx
 * <Outlet context={{ defaultTabPath: STUDY_DETAILS_PAGE_DETAILS_TAB_PATH }} />
 * ```
 */
export default function DefaultTabIndexRedirect() {
  const { defaultTabPath } = useOutletContext<DefaultTabRedirectContext>()
  return <RedirectWithQuery to={defaultTabPath} />
}
