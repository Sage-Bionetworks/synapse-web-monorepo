# Content Security Policy

Every page of the data portals, SageAccountWeb (accounts.synapse.org), and synapse-oauth-signin (signin.synapse.org) ships with a Content Security Policy (CSP) that lists the origins allowed to supply script, frames, and other content. This is these apps' definition of acceptable mobile code for NIST SP 800-53 SC-18 ([SWC-8037](https://sagebionetworks.jira.com/browse/SWC-8037)).

## Allowed origins

The allowlists in `src/` are the only place the policies are defined. Each entry records the directives it is allowed in, the feature that needs it, and who operates it:

- `contentSecurityPolicy.ts`: sources shared by every app (MUI styling, Bootstrap, Google Fonts, Google Analytics), and how sources become a policy.
- `portalContentSecurityPolicy.ts`: the portals.
  - `SHARED_ALLOWED_SOURCES`: needed by every portal.
  - `PORTAL_ALLOWED_SOURCES`: needed by one portal, keyed by its `VITE_PORTAL_KEY`. Examples are a portal's news feed, the challenges map, and the cancercomplexity help widget.
  - The portals always use the production stack, but they also allow the staging stack's Synapse origins, so a portal build can be tested against staging with the commented-out `SRC_OVERRIDE_ENDPOINT_CONFIG` snippet in its `index.html`.
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

Inline scripts are allowed only by SHA-256 hash. Each page carries its own hashes, and the portals also allow the fixed hash of the script that `HtmlPreview` writes into its frame (see below). The scripts are found with parse5, which implements the HTML parsing algorithm browsers use, so each hash covers the same script text a browser hashes. The enforced policies contain no `'unsafe-inline'` scripts, no development hosts, and no S3 host in `script-src`, `frame-src`, or `img-src` beyond that one bucket.

### Known limitation: scripts in trusted HTML previews (portals)

synapse-react-client's `HtmlPreview` (the wiki `preview` widget on an HTML file) renders the file in a sandboxed `<iframe srcdoc>`, and a `srcdoc` document inherits the embedding page's policy whatever its `sandbox` flags. On the portals:

- The height reporter that `HtmlPreview` prepends to every preview is allowed by its hash, so frames still size to their content. `HtmlPreview`'s tests fail if the script and the allowlisted hash diverge.
- HTML from the trusted HTML users team loses its inline scripts and event handlers. Its external scripts load only from hosts in the portal's `script-src`, and its requests are limited to the portal's `connect-src`. Static HTML and CSS render normally.

synapse.org is unaffected; its policy comes from SWC, not this package. Restoring trusted scripts on the portals requires serving trusted HTML from its own origin and allowing that origin in `frame-src`, rather than `'unsafe-inline'` in `script-src`.

### Known limitation: script hosts that serve chosen code

`script-src` trusts hosts, and some allowed hosts serve code chosen by URL: Google Tag Manager loads whatever container the `id` parameter names, and some other allowed script hosts may serve JSONP. If an attacker can inject HTML into a portal page (for example, an `<iframe srcdoc>` that inherits the page's policy), they can load their own GTM container, and on the portals `'unsafe-eval'` lets its Custom JavaScript run. The policy still blocks injected inline scripts, event handlers, and scripts from any other host, which a portal without a policy did not. Closing this requires `'strict-dynamic'` (trust only scripts that hashed scripts load) or removing `'unsafe-eval'` ([SWC-8151](https://sagebionetworks.jira.com/browse/SWC-8151)).

## How it is delivered

### Build-time `<meta>` and violation reporter (this repository)

Production builds add `<meta http-equiv="Content-Security-Policy">` to every HTML file, followed immediately by an inline script that reports the page's violations:

- **SPA portals** (Vite): `contentSecurityPolicyPlugin()` in `portalsViteConfig`.
- **SSG portals** (React Router framework mode): `createReactRouterConfig`'s `buildEnd`, which runs after prerendering. React Router writes inline scripts that differ per page, so each prerendered page gets its own hashes.
- **SageAccountWeb and synapse-oauth-signin**: `contentSecurityPolicyPlugin()` in each app's `vite.config.ts`. The endpoint script in `index.html` differs per stack, so each stack's build gets its own hash.

The dev server has no policy, because Vite's HMR client needs inline scripts and a localhost WebSocket. Each app deploys to staging before production, so a policy is exercised, with reporting, on the staging hosts first.

Browsers ignore `frame-ancestors`, `report-to`, `report-uri`, and `sandbox` in a `<meta>` policy, and a `<meta>` policy can't be Report-Only.

### Violation reporting

Browsers send no reports for a `<meta>` policy, but they fire a `securitypolicyviolation` event for each violation. The reporter (`cspViolationReporter.ts`) listens for it and posts the violation to SWC's `CSPReportServlet`, which logs it to CloudWatch as `csp.violation` ([SWC-8036](https://sagebionetworks.jira.com/browse/SWC-8036)):

- **Endpoint:** `/Portal/csp-report` on the app's Synapse web client: `https://www.synapse.org` for every portal, and the build's `VITE_SYNAPSE_PORTAL_ENDPOINT` for the account apps, so a staging build reports to staging. The build fails if the policy's `connect-src` does not allow that origin.
- **Format:** one `application/reports+json` entry of type `csp-violation` per violation, sent with `fetch` (`keepalive`, no credentials). The servlet strips query strings and tokens from the URLs.
- **Volume:** each distinct directive and blocked URL is sent once per page load, at most `MAX_REPORTS_PER_PAGE` times. Violations caused by browser extensions are dropped.
- **Script:** inline, hashed like the page's own scripts, and placed right after the `<meta>` so it runs before anything the policy governs.

Reports reflect exactly the policy each page enforced, so they never need updating when an allowlist changes. What they can't cover:

- Violations inside sandboxed `srcdoc` frames (`HtmlPreview`) fire in the frame's document, which the reporter can't observe.
- Script that gets past the policy can remove the listener; browser-sent reports can't be suppressed this way.
- A stricter policy can't be trialed without enforcing it. When one is needed (e.g. `'strict-dynamic'`, [SWC-8151](https://sagebionetworks.jira.com/browse/SWC-8151)), add a temporary `Content-Security-Policy-Report-Only` header for the trial, or check the stricter policy against the built apps in end-to-end tests first.

### CloudFront response headers (infrastructure, not in this repository)

S3 can't send custom response headers, so headers that a `<meta>` element can't deliver belong in CloudFront response headers policies ([PLFM-10221](https://sagebionetworks.jira.com/browse/PLFM-10221)). None of them depend on an allowlist, so every portal and account app distribution, staging and production, uses the same values, and allowlist changes never require a CloudFront change:

| Header                      | Value                                                                                                  |
| --------------------------- | ------------------------------------------------------------------------------------------------------ |
| `Content-Security-Policy`   | `frame-ancestors 'none'; report-to csp-endpoint; report-uri https://www.synapse.org/Portal/csp-report` |
| `Reporting-Endpoints`       | `csp-endpoint="https://www.synapse.org/Portal/csp-report"`                                             |
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains`                                                                  |
| `X-Content-Type-Options`    | `nosniff`                                                                                              |
| `X-Frame-Options`           | `DENY`                                                                                                 |
| `Referrer-Policy`           | `strict-origin-when-cross-origin`                                                                      |

These apps are never framed; `useFramebuster` already breaks out of frames. The header policy is enforced alongside the `<meta>` policy, and only adds `frame-ancestors`.

## Adding an origin

1. Add an entry to the narrowest allowlist that needs it, with purpose and owner. Use the narrowest directive and the exact host; avoid wildcards.
2. Build the app and load the affected page from the build. The browser console reports anything the policy blocks.

An inline `<script>` in an `index.html` or a React Router layout is hashed automatically. A script that the app writes into a `srcdoc` frame at runtime is not: add its hash to the allowlist, as for `HtmlPreview`.
