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
  const portalName = import.meta.env.VITE_PORTAL_NAME ?? 'NF Data Portal'
  const portalDescription = import.meta.env.VITE_PORTAL_DESCRIPTION ?? ''
  return [
    { title: portalName },
    ...(portalDescription
      ? [{ name: 'description', content: portalDescription }]
      : []),
  ]
}

export function Layout({ children }: { children: React.ReactNode }) {
  const portalKey = import.meta.env.VITE_PORTAL_KEY ?? ''
  const portalName = import.meta.env.VITE_PORTAL_NAME ?? ''
  const portalDescription = import.meta.env.VITE_PORTAL_DESCRIPTION ?? ''
  const baseUrl = `https://${portalKey}.synapse.org`

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        {/* Facebook / Open Graph Meta Tags */}
        <meta property="og:url" content={`${baseUrl}/`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={portalName} />
        <meta property="og:description" content={portalDescription} />
        <meta
          name="image"
          property="og:image"
          content={`${baseUrl}/socialmedia.png`}
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="synapse.org" />
        <meta property="twitter:url" content={`${baseUrl}/`} />
        <meta name="twitter:title" content={portalName} />
        <meta name="twitter:description" content={portalDescription} />
        <meta name="twitter:image" content={`${baseUrl}/socialmedia.png`} />

        {/*
          Note: <meta name="description"> is provided by route-level meta() exports
          (rendered by <Meta /> below), NOT as a hardcoded tag here.
          This avoids duplicate description tags when child routes provide their own.
        */}

        <link rel="shortcut icon" href="/favicon.svg" />

        {/* Bootstrap CSS — SRC dependency */}
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
          crossOrigin="anonymous"
        />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KPW4KS62');`,
          }}
        />
        {/* End Google Tag Manager */}

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
