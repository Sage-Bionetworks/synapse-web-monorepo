import { execFileSync } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { resetResults } from './results'

/**
 * Builds (or reuses cached) snapshots before any browser starts, so no run measures generation.
 * The builder imports json-joy, whose directory imports Playwright's ESM loader cannot resolve, so
 * it runs in its own tsx process with a larger heap for the 4M-cell model.
 */
export default function globalSetup() {
  resetResults()
  execFileSync(
    process.execPath,
    [
      '--max-old-space-size=8192',
      '--import',
      'tsx',
      path.join(
        path.dirname(fileURLToPath(import.meta.url)),
        'buildSnapshots.ts',
      ),
    ],
    { stdio: 'inherit' },
  )
}
