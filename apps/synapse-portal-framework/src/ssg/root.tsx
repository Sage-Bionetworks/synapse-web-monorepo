/**
 * Shared HTML shell for SSG portals using React Router framework mode.
 *
 * `Layout`, `links`, and the default `Root` component are portal-agnostic and
 * can be re-exported directly. `meta` reads portal env values (name, description,
 * key) and is therefore exposed via the `createRootMeta` factory — env values
 * cannot be read inside this pre-built library, so the portal-side wrapper
 * passes them in.
 *
 * Typical usage in a portal's `src/root.tsx`:
 * ```ts
 * import {
 *   createRootMeta,
 *   links,
 *   Layout,
 * } from '@sage-bionetworks/synapse-portal-framework/ssg/root'
 *
 * export const meta = createRootMeta({
 *   portalName: import.meta.env.VITE_PORTAL_NAME,
 *   portalDescription: import.meta.env.VITE_PORTAL_DESCRIPTION,
 *   portalKey: import.meta.env.VITE_PORTAL_KEY,
 * })
 * export { links, Layout }
 * export { default } from '@sage-bionetworks/synapse-portal-framework/ssg/root'
 * ```
 */
import type { ReactNode } from 'react'
import type { MetaArgs, MetaDescriptor } from 'react-router'
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router'
import { mergeMeta } from '../utils/mergeMeta'

export type RootMetaOptions = {
  /** Portal display name, used as `<title>` and in OG/Twitter title tags. */
  portalName: string
  /** Optional portal description, used as `<meta name="description">` etc. */
  portalDescription?: string
  /** Portal key (e.g. "nf"); used to derive `https://${key}.synapse.org` URLs. */
  portalKey?: string
}

/**
 * Returns a `meta()` export for the root route.
 *
 * Emits the standard `<title>`, `<meta>`, OG, and Twitter tags using values
 * passed in. Routes deeper in the tree that export their own `meta()` replace
 * these defaults; routes that don't inherit them.
 */
export function createRootMeta(options: RootMetaOptions) {
  const { portalName, portalDescription, portalKey = '' } = options
  const baseUrl = `https://${portalKey}.synapse.org`

  return function meta(args: MetaArgs): MetaDescriptor[] {
    const descriptors: MetaDescriptor[] = [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: portalName },
      { property: 'og:url', content: `${baseUrl}/` },
      { property: 'og:title', content: portalName },
      { property: 'og:type', content: 'website' },
      {
        name: 'image',
        property: 'og:image',
        content: `${baseUrl}/socialmedia.png`,
      },
      { name: 'twitter:url', content: `${baseUrl}/` },
      { name: 'twitter:title', content: portalName },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:domain', content: 'synapse.org' },
      { name: 'twitter:image', content: `${baseUrl}/socialmedia.png` },
    ]

    if (portalDescription) {
      descriptors.push({ name: 'description', content: portalDescription })
      descriptors.push({
        property: 'og:description',
        content: portalDescription,
      })
      descriptors.push({
        name: 'twitter:description',
        content: portalDescription,
      })
    }

    return mergeMeta(args, descriptors)
  }
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
      integrity:
        'sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u',
      crossOrigin: 'anonymous' as const,
    },
    {
      rel: 'shortcut icon',
      href: '/favicon.svg',
    },
  ]
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {/* Google Tag Manager (noscript) — same GTM property across all Sage portals */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KPW4KS62"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <noscript>You need to enable JavaScript to run this app.</noscript>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function Root() {
  return <Outlet />
}
