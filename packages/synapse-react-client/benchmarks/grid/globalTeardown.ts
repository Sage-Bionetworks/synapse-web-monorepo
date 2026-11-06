import path from 'node:path'
import { RESULTS_DIR, RUN_LABEL } from './config'
import { writeReport } from './results'

export default function globalTeardown() {
  const markdown = writeReport(RUN_LABEL)
  console.log(
    `\n[grid-benchmark] results for "${RUN_LABEL}" in ${path.join(RESULTS_DIR, RUN_LABEL)}.{md,json}\n\n${markdown}`,
  )
}
