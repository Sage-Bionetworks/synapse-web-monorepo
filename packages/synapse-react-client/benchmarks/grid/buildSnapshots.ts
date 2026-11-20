import {
  existsSync,
  mkdirSync,
  renameSync,
  statSync,
  writeFileSync,
} from 'node:fs'
import { createRequire } from 'node:module'
import path from 'node:path'
import { Model } from 'json-joy/lib/json-crdt'
import { Encoder } from 'json-joy/lib/json-crdt/codec/indexed/binary/Encoder'
import { s } from 'json-joy/lib/json-crdt-patch'
import { gridSchema } from '../../src/components/DataGrid/DataGridTypes'
import {
  CACHE_DIR,
  COLS,
  ROW_COUNTS,
  snapshotFileName,
  SOURCE_REPLICA_ID,
} from './config'

type CborEncoderInstance = { encode: (value: unknown) => Uint8Array }

/**
 * json-joy's own CBOR encoder is much faster than cbor2 on maps with millions of entries. It is a
 * dependency of json-joy, not of this package, so resolve it from json-joy's install location.
 */
function createCborEncoder(): CborEncoderInstance {
  const requireFromJsonJoy = createRequire(
    createRequire(import.meta.url).resolve('json-joy/package.json'),
  )
  const { CborEncoder } = requireFromJsonJoy(
    '@jsonjoy.com/json-pack/lib/cbor/CborEncoder',
  ) as { CborEncoder: new () => CborEncoderInstance }
  return new CborEncoder()
}

/**
 * A model as the grid service would hand it to a fresh replica: `cols` named columns, `rows`
 * rows of distinct string cells, and the per-row validation metadata real grids carry.
 */
function buildSnapshot(rows: number, cols: number): Uint8Array {
  const model = Model.create(gridSchema, SOURCE_REPLICA_ID)
  for (let i = 0; i < cols; i++) {
    model.api.arr(['columnOrder']).push(s.con(i))
    model.api.vec(['columnNames']).push(s.con(`c${i}`))
  }
  for (let i = 0; i < rows; i++) {
    const data = []
    for (let j = 0; j < cols; j++) data.push(s.con(`r${i}c${j}`))
    model.api.arr(['rows']).push(
      s.obj({
        data: s.vec(...data),
        metadata: s.obj({ rowValidation: s.con({ isValid: true }) }),
      }),
    )
  }
  model.api.flush()
  return createCborEncoder().encode(new Encoder().encode(model))
}

/**
 * Builds the snapshot for each benchmarked grid size unless it is already cached. Runs under tsx
 * (see `globalSetup`) because json-joy's directory imports do not resolve in Playwright's ESM loader.
 */
for (const rows of ROW_COUNTS) {
  mkdirSync(CACHE_DIR, { recursive: true })
  const file = path.join(CACHE_DIR, snapshotFileName(rows, COLS))
  if (existsSync(file)) continue
  const started = Date.now()
  const bytes = buildSnapshot(rows, COLS)
  // Write then rename, so an interrupted build never leaves a truncated payload in the cache.
  writeFileSync(`${file}.tmp`, bytes)
  renameSync(`${file}.tmp`, file)
  console.log(
    `[grid-benchmark] built ${path.basename(file)} ` +
      `(${(statSync(file).size / 1e6).toFixed(1)} MB) in ${Date.now() - started} ms`,
  )
}
