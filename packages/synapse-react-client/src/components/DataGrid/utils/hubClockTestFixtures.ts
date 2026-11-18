import { GridModel, gridSchema } from '@/components/DataGrid/DataGridTypes'
import { encode as encodeCbor } from 'cbor2'
import { Model } from 'json-joy/lib/json-crdt'
import { Patch } from 'json-joy/lib/json-crdt-patch'
import { Timestamp } from 'json-joy/lib/json-crdt-patch/clock'
import { ClockTable } from 'json-joy/lib/json-crdt-patch/codec/clock/ClockTable'
import { Encoder as IndexedEncoder } from 'json-joy/lib/json-crdt/codec/indexed/binary/Encoder'

export const INTERNAL_REPLICA = 66534
export const IMPORT_REPLICA = 66538
export const OTHER_REPLICA = 7776543

/**
 * Server history as after a CSV import: the internal replica created the grid, then an import replica, ahead of
 * it in time, wrote the cells.
 */
export function buildImportedHistory() {
  const server = Model.create(undefined, INTERNAL_REPLICA).setSchema(
    gridSchema,
    false,
  )
  const createPatch = server.api.flush()
  const importer = server.fork(IMPORT_REPLICA)
  for (let i = 1; i <= 20; i++) {
    importer.api.vec(['columnNames']).set([[i, `imported_${i}`]])
  }
  importer.api.vec(['columnNames']).set([[0, 'imported']])
  const importPatch = importer.api.flush()
  server.applyPatch(importPatch)
  return {
    server: server as unknown as GridModel,
    importer: importer as unknown as GridModel,
    createPatch,
    importPatch,
  }
}

/** Server history whose newest patch is another replica's delete, a single operation as a row delete is, so a span of 1 */
export function buildDeleteHistory() {
  const server = Model.create(undefined, INTERNAL_REPLICA).setSchema(
    gridSchema,
    false,
  )
  const createPatch = server.api.flush()
  const otherSession = server.fork(OTHER_REPLICA)
  otherSession.api.arr(['columnOrder']).ins(0, ['a', 'b'])
  const insertPatch = otherSession.api.flush()
  otherSession.api.arr(['columnOrder']).del(0, 1)
  const deletePatch = otherSession.api.flush()
  server.applyBatch([insertPatch, deletePatch])
  return {
    server: server as unknown as GridModel,
    serverPatches: [createPatch, insertPatch, deletePatch],
    createPatch,
    deletePatch,
  }
}

/**
 * The patches the hub answers a sync clock with: every patch of a replica absent from the clock, and each patch whose
 * ID is at or after its replica's entry
 */
export function patchesHubResends(
  patches: Patch[],
  clock: [number, number][],
): Patch[] {
  const nextTimes = new Map(clock)
  return patches.filter(patch => {
    const { sid, time } = patch.getId()!
    const nextTime = nextTimes.get(sid)
    return nextTime === undefined || time >= nextTime
  })
}

/** Encode a snapshot the way the server does: CBOR of the indexed binary fields, with the given clock table */
export function encodeServerSnapshot(
  model: GridModel,
  clockTableEntries: Timestamp[],
): Uint8Array {
  const clockTable = new ClockTable()
  clockTableEntries.forEach(entry => clockTable.push(entry))
  return encodeCbor(
    new IndexedEncoder().encode(model as unknown as Model, clockTable),
  )
}
