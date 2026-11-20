# Content Security Policy

Every page of the data portals, SageAccountWeb (accounts.synapse.org), and synapse-oauth-signin (signin.synapse.org) ships with a Content Security Policy (CSP) that lists the origins allowed to supply script, frames, and other content. This is these apps' definition of acceptable mobile code for NIST SP 800-53 SC-18 ([SWC-8037](https://sagebionetworks.jira.com/browse/SWC-8037)).

## Allowed origins

The allowlists in `src/` are the only place the policies are defined. Each entry records the directives it is allowed in, the feature that needs it, and who operates it:

- `contentSecurityPolicy.ts`: sources shared by every app (MUI styling, Bootstrap, Google Fonts, Google Analytics), and how sources become a policy.
- `portalContentSecurityPolicy.ts`: the portals.
  - `SHARED_ALLOWED_SOURCES`: needed by every portal.
  - `PORTAL_ALLOWED_SOURCES`: needed by one portal, keyed by its `VITE_PORTAL_KEY`. Examples are a portal's news feed, the challenges map, and the cancercomplexity help widget.
- `accountAppsContentSecurityPolicy.ts`: SageAccountWeb and synapse-oauth-signin. These apps are built once per Synapse stack, so their Synapse origins come from the build's `VITE_SYNAPSE_REPO_ENDPOINT` and `VITE_SYNAPSE_PORTAL_ENDPOINT`; a production build allows no staging or development hosts.

Directives with no allowed source are `'none'`. `default-src 'none'` blocks every resource type the policy does not list.

Exceptions that a stricter policy cannot remove yet:

| Source                                   | Applies to              | Why                                                                                                                                                                                                        |
| ---------------------------------------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `script-src 'unsafe-eval'`               | Portals                 | `@rjsf/validator-ajv8` compiles JSON schemas into functions at runtime (table Export dialog, data access request forms, `DynamicForm`). Removing it requires an RJSF validator that doesn't generate code. |
| `style-src 'unsafe-inline'`              | All apps                | MUI/Emotion insert `<style>` elements, and React renders `style` attributes. A static site can't issue per-request nonces.                                                                                 |
| `img-src https:`, `media-src https:`     | Portals                 | Wiki markdown can show images and video from any HTTPS host. This content is display-only; `script-src` is unaffected.                                                                                     |
| `connect-src https://*.s3.amazonaws.com` | Portals                 | Presigned URLs for files in external S3 storage locations, named per bucket.                                                                                                                               |
| `connect-src https://s3.amazonaws.com`   | Portals, SageAccountWeb | Path-style presigned URLs for Synapse-managed buckets: uploads (profile pictures, attestation documents), and the portals' map data. Data only; S3 is in no `script-src`.                                  |

Images from S3 in the account apps are limited to the `static.synapse.org` bucket by a path-scoped source.

Inline scripts are allowed only by SHA-256 hash, and each page carries its own hashes. The enforced policies contain no `'unsafe-inline'` scripts, no development hosts, and no S3 host in `script-src`, `frame-src`, or `img-src` beyond that one bucket.

### Known limitation: script hosts that serve chosen code

`script-src` trusts hosts, and some allowed hosts serve code chosen by URL: Google Tag Manager loads whatever container the `id` parameter names, and some other allowed script hosts may serve JSONP. If an attacker can inject HTML into a portal page (for example, an `<iframe srcdoc>` that inherits the page's policy), they can load their own GTM container, and on the portals `'unsafe-eval'` lets its Custom JavaScript run. The policy still blocks injected inline scripts, event handlers, and scripts from any other host, which a portal without a policy did not. Closing this requires `'strict-dynamic'` (trust only scripts that hashed scripts load) or removing `'unsafe-eval'` ([SWC-8151](https://sagebionetworks.jira.com/browse/SWC-8151)).

## How it is delivered

### Build-time `<meta>` (this repository)

Production builds add `<meta http-equiv="Content-Security-Policy">` to every HTML file:

- **SPA portals** (Vite): `contentSecurityPolicyPlugin()` in `portalsViteConfig`.
- **SSG portals** (React Router framework mode): `createReactRouterConfig`'s `buildEnd`, which runs after prerendering. React Router writes inline scripts that differ per page, so each prerendered page gets its own hashes.
- **SageAccountWeb and synapse-oauth-signin**: `contentSecurityPolicyPlugin()` in each app's `vite.config.ts`. The endpoint script in `index.html` differs per stack, so each stack's build gets its own hash.

The dev server has no policy, because Vite's HMR client needs inline scripts and a localhost WebSocket. Each app deploys to staging before production, so a policy is exercised on the staging hosts first.

Browsers ignore `frame-ancestors`, `report-to`, `report-uri`, and `sandbox` in a `<meta>` policy. Report-Only mode is also unavailable there.

### CloudFront response headers (infrastructure, not in this repository)

S3 can't send custom response headers, so these belong in CloudFront response headers policies ([IT-5554](https://sagebionetworks.jira.com/browse/IT-5554)):

- **Portals:** one policy for every portal distribution, staging and production.
- **SageAccountWeb and synapse-oauth-signin:** one policy per Synapse stack, shared by both apps' distributions on that stack.

Print the headers with:

```bash
cd packages/vite-config && pnpm build
node -e "import('./dist/portalContentSecurityPolicy.js').then(m => console.log(m.getPortalSecurityHeaders()))"
node -e "import('./dist/accountAppsContentSecurityPolicy.js').then(m => console.log(m.getAccountAppSecurityHeaders({ repo: process.argv[1], portal: process.argv[2] })))" https://repo-prod.prod.sagebase.org https://www.synapse.org
```

Use the `VITE_SYNAPSE_REPO_ENDPOINT` and `VITE_SYNAPSE_PORTAL_ENDPOINT` values from the account apps' `.env.<mode>` file for the stack.

The headers are:

- `Content-Security-Policy` with `frame-ancestors 'none'`. These apps are never framed; `useFramebuster` already breaks out of frames.
- `Content-Security-Policy-Report-Only` with every source that any app sharing the response headers policy allows. Violations of an app's enforced `<meta>` policy are reported to SWC's `CSPReportServlet` at `https://www.synapse.org/Portal/csp-report`, which logs them to CloudWatch ([SWC-8036](https://sagebionetworks.jira.com/browse/SWC-8036)).
  - Blocked requests to a source that only another app on the same policy allows (for example, `maps.googleapis.com` from a portal other than challenges) are enforced but not reported.
  - The header can't carry per-page hashes, so it allows inline scripts. The `<meta>` policy still enforces the hashes, so blocked inline scripts are not reported.
  - The value must stay within CloudFront's 1,783-character limit for a header value; a test fails when it doesn't. To fit, its sources omit the `https://` scheme, which on these HTTPS pages still matches only HTTPS (and WSS) URLs.
- `Reporting-Endpoints`, `Strict-Transport-Security`, `X-Content-Type-Options`, `X-Frame-Options`, and `Referrer-Policy`.

Regenerate the headers whenever an allowlist changes, and update the CloudFront policies.

## Adding an origin

1. Add an entry to the narrowest allowlist that needs it, with purpose and owner. Use the narrowest directive and the exact host; avoid wildcards.
2. Build the app and load the affected page from the build. The browser console reports anything the policy blocks.
3. Update the CloudFront response headers policies.

An inline `<script>` in an `index.html` or a React Router layout is hashed automatically. The commented-out `SRC_OVERRIDE_ENDPOINT_CONFIG` snippet in the portals would also need its endpoints in `connect-src`.
