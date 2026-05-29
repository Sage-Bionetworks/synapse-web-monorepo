/**
 * Shared client entry point for SSG portals using React Router framework mode.
 *
 * Each portal's `src/entry.client.tsx` is a 1-line side-effect import:
 * ```ts
 * import '@sage-bionetworks/synapse-portal-framework/ssg/entry.client'
 * ```
 *
 * The file must still live under each portal's `appDirectory` because React
 * Router framework mode discovers it by convention.
 */
import { startTransition, StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { HydratedRouter } from 'react-router/dom'

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <HydratedRouter unstable_useTransitions />
    </StrictMode>,
  )
})
