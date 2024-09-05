import vitestConfig from './vitest-config.js'
import { mergeConfig } from 'vitest/config'
import { createHtmlPlugin } from 'vite-plugin-html'

export default mergeConfig(vitestConfig, {
  plugins: [
    createHtmlPlugin({
      inject: {
        data: {
          headContent: `<meta charset="utf-8" />
    <link rel="shortcut icon" href="/favicon.svg" />


    <!-- Facebook Meta Tags -->
    <meta property="og:url" content="https://%VITE_PORTAL_KEY%.synapse.org/" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="%VITE_PORTAL_NAME%" />
    <meta property="og:description" content="%VITE_PORTAL_DESCRIPTION%" />
    <meta
      name="image"
      property="og:image"
      content="https://%VITE_PORTAL_KEY%.synapse.org/socialmedia.png"
    />

    <!-- Twitter Meta Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:domain" content="synapse.org" />
    <meta
      property="twitter:url"
      content="https://%VITE_PORTAL_KEY%.synapse.org/"
    />
    <meta name="twitter:title" content="%VITE_PORTAL_NAME%" />
    <meta name="twitter:description" content="%VITE_PORTAL_DESCRIPTION%" />
    <meta
      name="twitter:image"
      content="https://%VITE_PORTAL_KEY%.synapse.org/socialmedia.png"
    />

    <meta name="description" content="%VITE_PORTAL_DESCRIPTION%" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="./manifest.json" />
    <title>%VITE_PORTAL_NAME%</title>
    <!-- This gets populated on app load -->
    <!-- links below are SRC dependencies -->
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
      integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
      crossorigin="anonymous"
    />

    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-KPW4KS62');
    </script>
    <!-- End Google Tag Manager -->
    <script type="module">
        /* Fix polyfill issues with vite and @apidevtools/json-schema-ref-parser */
        import { Buffer } from 'buffer'
        import process from 'process'
        window.Buffer = Buffer
        window.process = process

        globalThis.global = globalThis
    </script>`,
          gtmNoscript: `    <!-- Google Tag Manager (noscript) -->
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KPW4KS62"
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
`,
        },
      },
    }),
  ],
})
