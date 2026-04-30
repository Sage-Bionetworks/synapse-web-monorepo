import { mergeMeta } from '@sage-bionetworks/synapse-portal-framework/utils/mergeMeta'
import type { MetaDescriptor } from 'react-router'
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router'

/**
 * Default meta tags for the root route.
 *
 * React Router uses the `meta()` export from the deepest matching route that
 * defines one. Routes that export their own `meta()` (detail pages, Explore
 * tabs, etc.) completely replace these defaults. Routes that do NOT export
 * `meta()` inherit these.
 */
export function meta(args): MetaDescriptor[] {
  const portalName = import.meta.env.VITE_PORTAL_NAME
  const portalDescription = import.meta.env.VITE_PORTAL_DESCRIPTION
  const portalKey = import.meta.env.VITE_PORTAL_KEY ?? ''
  const baseUrl = `https://${portalKey}.synapse.org`

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
    descriptors.push({ property: 'og:description', content: portalDescription })
    descriptors.push({
      name: 'twitter:description',
      content: portalDescription,
    })
  }

  return mergeMeta(args, descriptors)
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
      integrity:
        'sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'shortcut icon',
      href: '/favicon.svg',
    },
  ]
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KPW4KS62"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

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
