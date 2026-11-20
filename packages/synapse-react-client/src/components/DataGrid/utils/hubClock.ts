import { GridModel } from '@/components/DataGrid/DataGridTypes'
import { decode as decodeCbor } from 'cbor2'
import { Timestamp } from 'json-joy/lib/json-crdt-patch/clock'
import { ClockTable } from 'json-joy/lib/json-crdt-patch/codec/clock/ClockTable'
import { CrdtReader } from 'json-joy/lib/json-crdt-patch/util/binary/CrdtReader'
import type { IndexedFields } from 'json-joy/lib/json-crdt/codec/indexed/binary'
import { Decoder as IndexedDecoder } from 'json-joy/lib/json-crdt/codec/indexed/binary/Decoder'

const indexedDecoder = new IndexedDecoder()

/**
 * Decodes a server snapshot (CBOR of json-joy's indexed binary fields) into a model that writes as `replicaId`.
 *
 * The indexed binary decoder builds the clock from the first clock-table entry only
 * (https://github.com/streamich/json-joy/issues/1059). Every replica in the table other
 * than `replicaId` must become a peer: a replica missing from the sync clock gets all of its patches resent, and until
 * they arrive local edits lose last-writer-wins against the cells it wrote. A peer holds the last sequence seen, and
 * exported snapshots hold each replica's next one, so each is recorded at `time - 1`. Initial snapshots hold the
 * highest node ID instead, for which `time - 1` only makes the hub resend that replica's patch at that ID.
 */
export function decodeServerSnapshot(
  snapshot: Uint8Array,
  replicaId: number,
): GridModel {
  const fields = decodeCbor(snapshot) as IndexedFields
  const model = indexedDecoder.decode(fields) as unknown as GridModel
  model.setSid(replicaId)
  // setSid records the decoded replica as a peer at its table entry, not at `time - 1`. Drop it so the loop below
  // records every replica, that one included, from the clock table.
  model.clock.peers.clear()
  const reader = new CrdtReader()
  reader.reset(fields.c)
  for (const { sid, time: nextTime } of ClockTable.decode(reader).byIdx) {
    model.clock.observe(new Timestamp(sid, nextTime - 1), 1)
  }
  return model
}

export type HubClockEntry = [replicaId: number, nextSequenceNumber: number]

/**
 * The clock for a `synchronize-clock` request. The hub resends each replica's patches from the sequence number given
 * for it, as its own replica clocks do, so every entry is that replica's next sequence number: this replica's local
 * time, and one past the last operation seen from each peer.
 */
export function toHubClock(clock: GridModel['clock']): HubClockEntry[] {
  const hubClock: HubClockEntry[] = [[clock.sid, clock.time]]
  clock.peers.forEach(peer => hubClock.push([peer.sid, peer.time + 1]))
  return hubClock
}
