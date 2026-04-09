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
export function meta(): MetaDescriptor[] {
  const portalName = import.meta.env.VITE_PORTAL_NAME
  const portalDescription = import.meta.env.VITE_PORTAL_DESCRIPTION
  const portalKey = import.meta.env.VITE_PORTAL_KEY ?? ''
  const baseUrl = `https://${portalKey}.synapse.org`
  return [
    { title: portalName },
    ...(portalDescription
      ? [{ name: 'description', content: portalDescription }]
      : []),
    { property: 'og:url', content: `${baseUrl}/` },
    { property: 'og:title', content: portalName },
    ...(portalDescription
      ? [{ property: 'og:description', content: portalDescription }]
      : []),
    { property: 'twitter:url', content: `${baseUrl}/` },
    { name: 'twitter:title', content: portalName },
    ...(portalDescription
      ? [{ name: 'twitter:description', content: portalDescription }]
      : []),
  ]
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
  ]
}

export function Layout({ children }: { children: React.ReactNode }) {
  const portalKey = import.meta.env.VITE_PORTAL_KEY ?? ''
  const baseUrl = `https://${portalKey}.synapse.org`

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        {/* Facebook / Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta
          name="image"
          property="og:image"
          content={`${baseUrl}/socialmedia.png`}
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="synapse.org" />
        <meta name="twitter:image" content={`${baseUrl}/socialmedia.png`} />

        {/*
          Note: <meta name="description"> is provided by route-level meta() exports
          (rendered by <Meta /> below), NOT as a hardcoded tag here.
          This avoids duplicate description tags when child routes provide their own.
        */}

        <link rel="shortcut icon" href="/favicon.svg" />

        {/* React Router injects route-level <title>, <meta>, and stylesheet <link> elements here */}
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
