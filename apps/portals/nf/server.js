import express from 'express'

const BUILD_PATH = './build/server/index.js'
const DEVELOPMENT = process.env.NODE_ENV === 'development'
const PORT = Number.parseInt(process.env.PORT || '3001')

const app = express()

app.disable('x-powered-by')

// Health check endpoint for load balancers (ALB, etc.)
app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' })
})

if (DEVELOPMENT) {
  console.log('Starting development server')
  const viteDevServer = await import('vite').then(vite =>
    vite.createServer({
      server: { middlewareMode: true },
    }),
  )
  app.use(viteDevServer.middlewares)
  app.use(async (req, res, next) => {
    try {
      const source = await viteDevServer.ssrLoadModule('./server/app.ts')
      return await source.app(req, res, next)
    } catch (error) {
      if (typeof error === 'object' && error instanceof Error) {
        viteDevServer.ssrFixStacktrace(error)
      }
      next(error)
    }
  })
} else {
  console.log('Starting production server')
  app.use(
    '/assets',
    express.static('build/client/assets', { immutable: true, maxAge: '1y' }),
  )
  app.use(express.static('build/client', { maxAge: '1h' }))
  app.use(await import(BUILD_PATH).then(mod => mod.app))
}

app.listen(PORT, () => {
  console.log(`NF portal server listening on http://localhost:${PORT}`)

  if (!DEVELOPMENT) {
    // Warm up the sitemap cache on startup so the first real request gets
    // a full sitemap (with dynamic resources from Synapse tables) instead
    // of the static-only fallback. Re-fetch every 24 hours to keep the
    // cache fresh — this matches the sitemap loader's 24-hour TTL.
    const SITEMAP_URL = `http://localhost:${PORT}/sitemap.xml`
    const TWENTY_FOUR_HOURS_MS = 24 * 60 * 60 * 1000

    const warmSitemap = () => {
      fetch(SITEMAP_URL).then(
        res => console.log(`[sitemap] Warmup: ${res.status}`),
        err => console.warn('[sitemap] Warmup failed:', err.message),
      )
    }

    // Initial warmup after a short delay to let the server fully initialize
    setTimeout(warmSitemap, 1000)
    setInterval(warmSitemap, TWENTY_FOUR_HOURS_MS)
  }
})
