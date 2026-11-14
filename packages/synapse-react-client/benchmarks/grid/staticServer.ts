import { createReadStream, existsSync, statSync } from 'node:fs'
import { createServer, type Server } from 'node:http'
import type { AddressInfo } from 'node:net'
import path from 'node:path'
import { CACHE_DIR, SNAPSHOT_ROUTE, STORYBOOK_DIR } from './config'

const CONTENT_TYPES: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.woff2': 'font/woff2',
  '.cbor': 'application/cbor',
}

export type StaticServer = {
  origin: string
  /** `Date.now()` when the last byte of each snapshot response was handed to the socket, by file name. */
  snapshotSentAt: Map<string, number>
  close: () => Promise<void>
}

/**
 * Serves the production Storybook build and the cached snapshot payloads from one origin.
 * It runs inside the benchmark worker so snapshot send times share a clock with the test.
 */
export async function startStaticServer(): Promise<StaticServer> {
  if (!existsSync(path.join(STORYBOOK_DIR, 'iframe.html'))) {
    throw new Error(
      `No Storybook build at ${STORYBOOK_DIR}. Run \`pnpm nx run synapse-react-client:storybook:build\` first.`,
    )
  }
  const snapshotSentAt = new Map<string, number>()
  const server: Server = createServer((req, res) => {
    const pathname = decodeURIComponent(
      new URL(req.url ?? '/', 'http://x').pathname,
    )
    const isSnapshot = pathname.startsWith(SNAPSHOT_ROUTE)
    const root = isSnapshot ? CACHE_DIR : STORYBOOK_DIR
    const relative = isSnapshot
      ? pathname.slice(SNAPSHOT_ROUTE.length)
      : pathname
    let file = path.join(root, relative)
    if (!file.startsWith(root) || !existsSync(file)) {
      res.writeHead(404).end()
      return
    }
    if (statSync(file).isDirectory()) file = path.join(file, 'index.html')
    res.writeHead(200, {
      'Content-Type':
        CONTENT_TYPES[path.extname(file)] ?? 'application/octet-stream',
      'Content-Length': statSync(file).size,
      'Cache-Control': 'no-store',
    })
    if (isSnapshot) {
      res.on('finish', () => snapshotSentAt.set(relative, Date.now()))
    }
    createReadStream(file).pipe(res)
  })
  const listening = Promise.withResolvers<void>()
  server.listen(0, '127.0.0.1', listening.resolve)
  await listening.promise
  const { port } = server.address() as AddressInfo
  return {
    origin: `http://127.0.0.1:${port}`,
    snapshotSentAt,
    close: () => {
      const closed = Promise.withResolvers<void>()
      server.close(() => closed.resolve())
      return closed.promise
    },
  }
}
