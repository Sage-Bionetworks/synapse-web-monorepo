# Plan 2: True Server-Side Rendering

## Goal

Add per-request server-side rendering to the NF portal. Every HTTP request is handled by a running Node.js process that renders React to HTML, sends it to the browser, and the browser then hydrates the page. This enables:

- Dynamic content in the initial HTML response (including authenticated views)
- Route-level data prefetching (TanStack Query dehydration/hydration)
- Server-driven HTTP status codes and redirects
- Streaming HTML delivery via `renderToPipeableStream`

**This plan requires [Plan 1](./plan-1-static-prerendering.md) to be fully complete first.** Plan 1 migrates the portal to React Router Framework Mode. This plan builds on that by enabling `ssr: true` and adding a Node server.

---

## Prerequisites

All success criteria from Plan 1 must be met before starting this plan. Specifically:

- [ ] React Router Framework Mode is active (`@react-router/dev` installed, `reactRouter()` Vite plugin in use)
- [ ] `root.tsx`, `entry.client.tsx`, and `react-router.config.ts` exist
- [ ] The SSR smoke test passes (no `window is not defined` errors during `renderToString`)
- [ ] No hydration mismatches in the browser
- [ ] `QueryClient` is instantiated per-render (not at module scope)

---

## Phase 3 — True Per-Request SSR

### P3.1 — Enable `ssr: true` in `react-router.config.ts`

**File:** `apps/portals/nf/react-router.config.ts`

```ts
import type { Config } from '@react-router/dev/config'

export default {
  appDirectory: 'src',
  ssr: true,
  // prerender() can remain for routes where static generation is preferred;
  // pre-rendered routes take precedence over the SSR handler.
  async prerender() {
    return ['/'] // homepage can stay pre-rendered; other routes go through SSR
  },
} satisfies Config
```

With `ssr: true`, React Router Framework Mode generates two build outputs:

- `build/client/` — browser bundle (JS, CSS, assets)
- `build/server/` — Node.js SSR bundle

> **Risk:** Setting `ssr: true` is a one-line change but it invalidates the current S3/Caddy static deployment. Do not merge this to production until P3.5 (server deployment) is ready. Keep `ssr: false` on the main branch and develop this on a feature branch.

### P3.2 — Add `@react-router/node` server adapter

```bash
pnpm add @react-router/node --filter nf
```

This package provides the `createRequestHandler` function that bridges a Node.js HTTP request to the React Router Framework Mode SSR handler:

```ts
import { createRequestHandler } from '@react-router/node'

// build is the server bundle output from `react-router build`
const handler = createRequestHandler(build, process.env.NODE_ENV)
```

> **Risk:** `@react-router/node` requires Node.js 18+. Verify the deployment target Node version. If targeting Cloudflare Workers or another edge runtime, use `@react-router/cloudflare` instead — the APIs are identical, only the runtime adapter changes.

### P3.3 — Create `server.ts`

**New file:** `apps/portals/nf/server.ts`

The server handles:

1. Static asset serving from `build/client/`
2. SSR request handling via `createRequestHandler`
3. Dev mode: Vite dev middleware (live reload, HMR)
4. Prod mode: serve pre-built bundles

```ts
import { createRequestHandler } from '@react-router/node'
import express from 'express'
import { createServer as createViteServer } from 'vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const isProd = process.env.NODE_ENV === 'production'
const port = process.env.PORT ?? 3001

async function main() {
  const app = express()

  if (isProd) {
    // Serve Vite-built client assets
    app.use(
      '/assets',
      express.static(path.join(__dirname, 'build/client/assets'), {
        immutable: true,
        maxAge: '1y',
      }),
    )
    app.use(
      express.static(path.join(__dirname, 'build/client'), {
        maxAge: '1h',
      }),
    )

    const build = await import('./build/server/index.js')
    app.all('*', createRequestHandler({ build, mode: 'production' }))
  } else {
    // Dev mode: Vite middleware
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    })
    app.use(vite.middlewares)
    app.all('*', async (req, res, next) => {
      try {
        const build = await vite.ssrLoadModule(
          'virtual:react-router/server-build',
        )
        const handler = createRequestHandler({ build, mode: 'development' })
        return handler(req, res, next)
      } catch (e) {
        vite.ssrFixStacktrace(e as Error)
        next(e)
      }
    })
  }

  app.listen(port, () => {
    console.log(`NF portal SSR server listening on :${port}`)
  })
}

main()
```

**Add `express` dependency:**

```bash
pnpm add express --filter nf
pnpm add -D @types/express --filter nf
```

**Alternative: Hono instead of Express**

Hono's native Web Fetch API means no request/response conversion is needed. If the team prefers Hono (lighter, Cloudflare Workers-compatible):

```bash
pnpm add hono @hono/node-server --filter nf
```

```ts
import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import { createRequestHandler } from '@react-router/node'
import { Hono } from 'hono'

const app = new Hono()
app.use('/assets/*', serveStatic({ root: './build/client' }))

const build = await import('./build/server/index.js')
const handler = createRequestHandler({ build, mode: 'production' })

app.all('*', c => handler(c.req.raw))
serve({ fetch: app.fetch, port: 3001 })
```

> **Risk:** Express is more familiar and has more middleware ecosystem (compression, cookie-parser, rate limiting). Hono requires less boilerplate. Pick based on team familiarity. Either works.

### P3.4 — Create `entry.server.tsx`

**New file:** `apps/portals/nf/src/entry.server.tsx`

Framework Mode calls this file on every SSR request. It controls how React renders to a stream and how the HTML document is assembled.

```tsx
import type { EntryContext } from 'react-router'
import { ServerRouter } from 'react-router'
import { renderToPipeableStream } from 'react-dom/server'
import { PassThrough } from 'node:stream'
import type { NodePassThrough } from '@react-router/node'

const ABORT_DELAY = 5000

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  routerContext: EntryContext,
) {
  return new Promise((resolve, reject) => {
    let shellRendered = false

    const { pipe, abort } = renderToPipeableStream(
      <ServerRouter context={routerContext} url={request.url} />,
      {
        onShellReady() {
          shellRendered = true
          const body = new PassThrough()
          const stream = body as unknown as NodePassThrough

          responseHeaders.set('Content-Type', 'text/html')

          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode,
            }),
          )

          pipe(body)
        },
        onShellError(error: unknown) {
          reject(error)
        },
        onError(error: unknown) {
          responseStatusCode = 500
          if (shellRendered) {
            console.error(error)
          }
        },
      },
    )

    setTimeout(abort, ABORT_DELAY)
  })
}
```

> **Risk:** `renderToPipeableStream` with streaming means the HTTP response starts before all async operations (route loaders, Suspense boundaries) finish. If a loader throws after the shell is sent, the error cannot be reflected in the HTTP status code. For hard errors, use `onShellError` to fall back to a non-streaming error response. Ensure all route loaders have proper error handling.

### P3.5 — Wire Emotion/MUI critical CSS extraction

Without this, every SSR response ships unstyled HTML. The browser applies MUI styles only after the client JavaScript runs — visible as a flash of unstyled content (FOUC).

**Install `@emotion/server`:**

```bash
pnpm add @emotion/server --filter @sage-bionetworks/synapse-portal-framework
```

**Modify `entry.server.tsx`** to wrap the render in an Emotion cache and extract critical styles:

```tsx
import createEmotionServer from '@emotion/server/create-instance'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  routerContext: EntryContext,
) {
  // Create a fresh Emotion cache per request to avoid style leakage between requests
  const cache = createCache({ key: 'mui' })
  const { extractCriticalToChunks, constructStyleTagsFromChunks } =
    createEmotionServer(cache)

  // renderToString to collect critical styles (then stream the full response)
  // NOTE: this is a two-pass approach:
  //   1. renderToString with CacheProvider → extract critical CSS
  //   2. Stream the full response with styles injected into <head>
  //
  // A streaming-native alternative exists via Emotion's `renderStylesToNodeStream`
  // but is more complex. Two-pass is simpler and acceptable for most use cases.

  return new Promise((resolve, reject) => {
    const { pipe, abort } = renderToPipeableStream(
      <CacheProvider value={cache}>
        <ServerRouter context={routerContext} url={request.url} />
      </CacheProvider>,
      {
        onShellReady() {
          // ... (same as P3.4, with styles injected)
          responseHeaders.set('Content-Type', 'text/html')
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode,
            }),
          )
          pipe(body)
        },
        // ...
      },
    )
  })
}
```

Additionally, in `root.tsx`, render the Emotion style tags into `<head>` using the styles extracted from context:

```tsx
// root.tsx — add Emotion style injection
import { useContext } from 'react'
import { EmotionCacheContext } from './EmotionCacheContext' // new context

export function links(): LinkDescriptor[] {
  return [
    // Bootstrap CSS (moved from vite-plugin-html)
    {
      rel: 'stylesheet',
      href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
    },
  ]
}
```

> **Risk (P3.5):** This is the most technically complex step in this phase. The two-pass render (once to collect styles, once to stream) adds latency. If MUI uses a different cache key than `'mui'`, styles will not be captured. Test by disabling client-side JavaScript and verifying the page is styled. If FOUC is acceptable for an initial release, this step can be deferred.

### P3.6 — Read auth cookie from HTTP request in route loaders

On the server, `document.cookie` is not available. The Synapse access token (stored in the `ACCESS_TOKEN_COOKIE_KEY` cookie) must be read from the incoming HTTP request's `Cookie` header.

**Create a root route loader:**

```tsx
// apps/portals/nf/src/routes/root.loader.ts
import type { LoaderFunctionArgs } from 'react-router'
import { parse as parseCookies } from 'cookie'

const ACCESS_TOKEN_COOKIE_KEY =
  'org.sagebionetworks.web.client.SynapseAccessToken'

export async function loader({ request }: LoaderFunctionArgs) {
  const cookieHeader = request.headers.get('Cookie') ?? ''
  const cookies = parseCookies(cookieHeader)
  const accessToken = cookies[ACCESS_TOKEN_COOKIE_KEY] ?? null

  // Pass the token to the client via loader data.
  // The ApplicationSessionManager picks it up on the client.
  // Do NOT expose this as a public API — only pass it to the session context.
  return { serverAccessToken: accessToken }
}
```

**Thread the token through `ApplicationSessionManager`:**

`SynapseSessionManager.getAccessTokenFromCookie()` currently reads `document.cookie` via the `universal-cookie` library. A server-safe code path needs to be added that accepts a token provided externally (from the loader). The cleanest approach:

1. Pass `serverAccessToken` from the root loader via a context (e.g., `ServerTokenContext`).
2. In `useSessionManager`, check for `serverAccessToken` as the initial state before calling `getAccessTokenFromCookie()`.
3. `getAccessTokenFromCookie()` still runs on the client for subsequent navigations.

> **Risk (P3.6):** This touches `SynapseSessionManager` and `useSessionManager` in `synapse-react-client` — a shared library used by all portals and `SageAccountWeb`. Changes must be backward-compatible (the `serverAccessToken` parameter should be optional). **Do not** log or serialize access tokens; treat them as sensitive credentials. The token is passed as loader data, which React Router serializes into `window.__staticRouterHydrationData` — this is sent to the browser and is readable by JavaScript. This is acceptable (the client already has the cookie), but be aware that this embeds the token in the page HTML.

### P3.7 — Add TanStack Query prefetching in route loaders

This is the main performance benefit of true SSR. Without it, every page still fetches data client-side after hydration, meaning the user sees a loading spinner before content appears.

**Pattern for a single route (e.g., the Studies explore page):**

```tsx
// apps/portals/nf/src/pages/Explore/Studies.tsx
import { QueryClient, dehydrate } from '@tanstack/react-query'
import { HydrationBoundary } from '@tanstack/react-query'
import type { LoaderFunctionArgs } from 'react-router'

export async function loader({ request }: LoaderFunctionArgs) {
  // Per-request QueryClient — NEVER use a module-level singleton here
  const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: 60 * 1000 } },
  })

  // Prefetch the data this route needs
  await queryClient.prefetchQuery({
    queryKey: ['studies', 'list'],
    queryFn: () => fetchStudiesFromSynapse(),
  })

  // Serialize the cache for the client
  return { dehydratedState: dehydrate(queryClient) }
}

export default function StudiesPage() {
  const { dehydratedState } = useLoaderData<typeof loader>()

  return (
    <HydrationBoundary state={dehydratedState}>
      <StudiesExplore /> {/* useQuery inside here gets data immediately */}
    </HydrationBoundary>
  )
}
```

**Serialization safety:** `JSON.stringify` of dehydrated state is unsafe (XSS via `</script>`). React Router's `useLoaderData` serializes loader return values safely. Do not manually serialize/embed the dehydrated state in a `<script>` tag — let React Router handle it.

**Priority order for prefetching** (implement in this sequence for maximum user-visible impact):

1. Homepage cards and feature counts
2. Explore list pages (Studies, Datasets, Files, Publications)
3. Detail pages (Studies/:id, Tools/:id) — only after pre-rendering or SSR is confirmed working for list pages

> **Risk (P3.7):** Prefetch functions run on the server and make outbound HTTP requests to the Synapse API. Network failures in `prefetchQuery` should not crash the page — wrap in `try/catch` and fall back to an empty dehydrated state (the client will fetch on mount as it does today). Also: the Synapse API may not accept unauthenticated prefetch requests for some data; verify which queries are publicly accessible.

### P3.8 — Update Nx targets for SSR build

**File:** `apps/portals/nf/project.json` (or `package.json` scripts)

Add new build and serve targets for SSR:

```json
{
  "targets": {
    "build": {
      "executor": "@nx/vite:build",
      "options": {
        "outputPath": "apps/portals/nf/build"
      }
    },
    "build:server": {
      "executor": "nx:run-commands",
      "options": {
        "command": "react-router build",
        "cwd": "apps/portals/nf"
      }
    },
    "start:ssr": {
      "executor": "nx:run-commands",
      "options": {
        "command": "node server.js",
        "cwd": "apps/portals/nf"
      },
      "dependsOn": ["build:server"]
    }
  }
}
```

The existing `build` target and `start` (Vite dev server) targets should continue to work for local development. The new `build:server` target is used in CI for production SSR deployments.

### P3.9 — Update deployment infrastructure

**This is the highest-risk item in this plan and requires coordination outside the codebase.**

Currently: S3 + CloudFront (static files) or Caddy serving the `build/` directory as a static site.

Required for SSR: A running Node.js process that handles HTTP requests.

Options (in order of increasing complexity):

| Option                                 | Description                                                                                                                                           | Effort                               |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| **Docker + ECS/Fargate**               | Container runs `node server.js`. CloudFront proxies to the ALB.                                                                                       | Medium                               |
| **Lambda@Edge or Lambda Function URL** | Bundle the SSR handler as a Lambda. React Router's `@react-router/aws-lambda` adapter handles the bridge. CloudFront invokes Lambda for each request. | Medium-High                          |
| **Cloudflare Workers**                 | Replace `@react-router/node` with `@react-router/cloudflare`. Zero cold start.                                                                        | Medium (requires Cloudflare account) |
| **Fly.io**                             | Deploy the Docker container to Fly. Simple, but requires a new hosting account.                                                                       | Low-Medium                           |

**Minimal-risk deployment path:**

1. Add a `Dockerfile` to `apps/portals/nf/` that builds the SSR bundle and runs `node server.js`.
2. Deploy to ECS Fargate behind an Application Load Balancer.
3. Update the CloudFront distribution to use the ALB as the origin instead of the S3 bucket.
4. Keep the S3 origin as a fallback for static assets (`/assets/*`).

**Caching strategy for CloudFront:**

| Path pattern                              | Cache behavior                                                                                                                  |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `/assets/*`                               | Cache forever (`Cache-Control: immutable, max-age=31536000`) — Vite adds content hashes                                         |
| `/*.ico`, `/*.png`, `/*.svg` (public dir) | Cache with revalidation (`max-age=3600`)                                                                                        |
| All other paths (SSR routes)              | Default: `no-cache` (SSR responses are dynamic). For unauthenticated routes, consider `max-age=60, stale-while-revalidate=300`. |
| Authenticated routes                      | Must `Vary: Cookie` to prevent caching across users. CloudFront requires explicit configuration to forward the `Cookie` header. |

> **Risk (P3.9):** This step has the most operational complexity and is outside the codebase. Involve the infrastructure/DevOps team early. The key question is whether Sage Bionetworks has an existing ECS/Fargate pattern or prefers Lambda@Edge. Do not attempt to ship `ssr: true` to production without the deployment infrastructure in place.

---

## Additional Work Items (Supporting)

### P3.10 — Add `entry.server.tsx` error handling and observability

The production server should catch and log render errors, emit structured logs, and return a fallback HTML response for 500 errors. Add:

- Error logging integration (Datadog, CloudWatch, Sentry — whichever Sage Bionetworks uses)
- A fallback static HTML page for catastrophic SSR failures (the app shell without content, so the client JS can still hydrate)

### P3.11 — Streaming Suspense boundaries

React's `renderToPipeableStream` (used in P3.4) supports progressive streaming: the server sends the HTML shell immediately and streams in Suspense boundary content as it resolves. For maximum perceived performance:

1. Identify the above-the-fold content (hero/header) and render it outside any `<Suspense>` boundary.
2. Wrap data-dependent sections (explore tables, card lists) in `<Suspense fallback={<Skeleton />}>`.
3. The server streams the skeleton to the browser immediately; the resolved content replaces it as async operations complete.

This is an optimization that can be added after basic SSR is working.

### P3.12 — Update `generate-sitemap` script

The sitemap generation script (`src/sitemap/entry.ts`) already uses a separate SSR Vite build (`sitemap.vite.config.ts`). With Framework Mode, the route tree is available through different APIs. Update the sitemap extraction to use the Framework Mode route manifest instead of the custom stub plugin, simplifying the sitemap build.

---

## Success Criteria

- [ ] `pnpm nx run nf:build:server` produces `build/client/` and `build/server/` directories
- [ ] `node apps/portals/nf/server.js` starts and serves requests
- [ ] `curl http://localhost:3001/` returns HTML with rendered content (not `<div id="root"></div>`)
- [ ] `<title>` and `<meta name="description">` are correct in the server response
- [ ] MUI styles are present in the server response (no FOUC in browser with JS disabled)
- [ ] Auth cookie is read server-side and passed to `ApplicationSessionManager` correctly
- [ ] An authenticated user's navigation bar state (e.g., "Welcome, Jane") appears in the initial HTML response
- [ ] TanStack Query data is dehydrated into server responses for at least the homepage and one explore page
- [ ] No React hydration warnings in the browser console
- [ ] CloudFront/load balancer caching is configured correctly (authenticated routes are not cached cross-user)
- [ ] The SSR server is deployed and the DNS record points to it (not S3)

---

## Risk Summary

| Risk                                                                                                                    | Severity       | Mitigation                                                                                                                                                                                                              |
| ----------------------------------------------------------------------------------------------------------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Deployment infrastructure does not exist yet (SSR requires a running Node process, not static file serving)             | **Critical**   | Coordinate with DevOps/infrastructure before enabling `ssr: true`. P3.9 must be planned in parallel. Do not merge until infra is ready.                                                                                 |
| Access tokens embedded in `window.__staticRouterHydrationData` (React Router's hydration data) are visible in page HTML | **High**       | The client already has the cookie, so this is not a new vulnerability. However: do not embed tokens in SSR responses beyond what is already accessible to the client. Treat loader data containing tokens as sensitive. |
| `SynapseSessionManager` changes to support server-side token injection affect all portals and SageAccountWeb            | **High**       | Changes must be backward-compatible. The `serverAccessToken` parameter should be optional. Run full SRC test suite. Test all portals in CI before merging.                                                              |
| Emotion CSS extraction two-pass render adds latency per request                                                         | **Medium**     | For most pages, the added latency is <50ms. Monitor with real traffic. If latency is unacceptable, switch to streaming-native Emotion style collection (more complex).                                                  |
| Synapse API calls in route loaders add SSR latency                                                                      | **Medium**     | Add timeouts and fallback to empty state on failure. Consider caching prefetch results server-side (Redis or in-memory with a short TTL) for high-traffic public routes.                                                |
| CloudFront caching authenticated SSR responses across users (data leakage)                                              | **High**       | Configure CloudFront to forward the `Cookie` header for all SSR routes. Set `Cache-Control: private, no-store` for authenticated responses. This must be reviewed by someone with CloudFront access.                    |
| `renderToPipeableStream` streams errors after shell is sent — HTTP status cannot be updated                             | **Medium**     | Add `onError` handler in `entry.server.tsx` to log errors. Use React error boundaries in the route tree to catch render errors before they reach the stream.                                                            |
| Cold starts (if using Lambda@Edge or serverless)                                                                        | **Low-Medium** | Lambda@Edge cold starts can add 200–500ms latency on first request. Use provisioned concurrency for critical routes, or prefer a persistent container (ECS/Fargate).                                                    |
| Sitemap generation script breaks with Framework Mode route changes                                                      | **Low**        | P3.12 — update sitemap extraction to use Framework Mode route manifest. Low complexity.                                                                                                                                 |

---

## Appendix: Relationship to Plan 1

Plan 2 depends on Plan 1. The following Plan 1 artifacts are directly consumed here:

| Plan 1 Artifact                   | How Plan 2 Uses It                                                            |
| --------------------------------- | ----------------------------------------------------------------------------- |
| `react-router.config.ts`          | Change `ssr: false` → `ssr: true`                                             |
| `root.tsx`                        | Add Emotion style tag injection; the `<Meta>` component serves SEO metadata   |
| `entry.client.tsx`                | No change — `HydratedRouter` handles both pre-render and SSR hydration        |
| Framework Mode route files        | Add `export async function loader()` for data prefetching (P3.7)              |
| `Portal.tsx` provider refactor    | Per-request `QueryClient` (P0.2 from Plan 1) is required before P3.7          |
| SSR smoke test (P2.5 from Plan 1) | Extend to test the full `entry.server.tsx` handler, not just `renderToString` |
