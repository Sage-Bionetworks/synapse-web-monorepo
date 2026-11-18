import { GridModel, gridSchema } from '@/components/DataGrid/DataGridTypes'
import {
  buildDeleteHistory,
  buildImportedHistory,
  encodeServerSnapshot,
  IMPORT_REPLICA,
  INTERNAL_REPLICA,
  OTHER_REPLICA,
  patchesHubResends,
} from '@/components/DataGrid/utils/hubClockTestFixtures'
import { Model } from 'json-joy/lib/json-crdt'
import { Timestamp } from 'json-joy/lib/json-crdt-patch/clock'
import { describe, expect, it } from 'vitest'
import { decodeServerSnapshot, toHubClock } from './hubClock'

const replicaId = 4324438

describe('decodeServerSnapshot', () => {
  it('reports every replica in an exported snapshot at its next sequence number', () => {
    const { server, createPatch, importPatch } = buildImportedHistory()

    const model = decodeServerSnapshot(
      encodeServerSnapshot(server, [
        new Timestamp(INTERNAL_REPLICA, createPatch.nextTime()),
        new Timestamp(IMPORT_REPLICA, importPatch.nextTime()),
      ]),
      replicaId,
    )

    const hubClock = toHubClock(model.clock)
    expect(hubClock).toHaveLength(3)
    expect(hubClock).toEqual(
      expect.arrayContaining([
        [replicaId, importPatch.nextTime()],
        [INTERNAL_REPLICA, createPatch.nextTime()],
        [IMPORT_REPLICA, importPatch.nextTime()],
      ]),
    )
  })

  it('is resent no patch the snapshot holds, though the newest is a single operation', () => {
    const { server, serverPatches, createPatch, deletePatch } =
      buildDeleteHistory()
    expect(deletePatch.span()).toBe(1)

    const model = decodeServerSnapshot(
      encodeServerSnapshot(server, [
        new Timestamp(INTERNAL_REPLICA, createPatch.nextTime()),
        new Timestamp(OTHER_REPLICA, deletePatch.nextTime()),
      ]),
      replicaId,
    )

    expect(patchesHubResends(serverPatches, toHubClock(model.clock))).toEqual(
      [],
    )
  })

  it("keeps the local time past this replica's own operations when another replica leads the table", () => {
    const server = Model.create(undefined, INTERNAL_REPLICA).setSchema(
      gridSchema,
      false,
    )
    const createPatch = server.api.flush()
    const earlierConnection = server.fork(replicaId)
    earlierConnection.api.vec(['columnNames']).set([[0, 'from_this_replica']])
    const ownPatch = earlierConnection.api.flush()
    server.applyPatch(ownPatch)

    const model = decodeServerSnapshot(
      encodeServerSnapshot(server as unknown as GridModel, [
        new Timestamp(INTERNAL_REPLICA, createPatch.nextTime()),
        new Timestamp(replicaId, ownPatch.nextTime()),
      ]),
      replicaId,
    )

    expect(toHubClock(model.clock)).toEqual([
      [replicaId, ownPatch.nextTime()],
      [INTERNAL_REPLICA, createPatch.nextTime()],
    ])
    model.api.vec(['columnNames']).set([[1, 'local_edit']])
    expect(model.api.flush().getId()).toEqual(
      new Timestamp(replicaId, ownPatch.nextTime()),
    )
  })

  it('resends no patch an initial snapshot holds, and every patch written after it', () => {
    // Initial snapshots hold each replica's highest node ID rather than its next sequence number
    const { server, importer, createPatch, importPatch } =
      buildImportedHistory()
    const model = decodeServerSnapshot(
      encodeServerSnapshot(server, [
        new Timestamp(INTERNAL_REPLICA, createPatch.nextTime() - 1),
        new Timestamp(IMPORT_REPLICA, importPatch.nextTime() - 1),
      ]),
      replicaId,
    )
    importer.api.vec(['columnNames']).set([[1, 'after_the_snapshot']])
    const laterPatch = importer.api.flush()

    expect(
      patchesHubResends(
        [createPatch, importPatch, laterPatch],
        toHubClock(model.clock),
      ),
    ).toEqual([laterPatch])
  })

  it('applies a local edit to a cell another replica wrote', () => {
    const { server, createPatch, importPatch } = buildImportedHistory()
    const model = decodeServerSnapshot(
      encodeServerSnapshot(server, [
        new Timestamp(INTERNAL_REPLICA, createPatch.nextTime()),
        new Timestamp(IMPORT_REPLICA, importPatch.nextTime()),
      ]),
      replicaId,
    )
    expect(model.api.getSnapshot().columnNames[0]).toBe('imported')

    model.api.vec(['columnNames']).set([[0, 'local_edit']])
    model.api.flush()

    expect(model.api.getSnapshot().columnNames[0]).toBe('local_edit')
  })
})
