import { Patch } from 'json-joy/lib/json-crdt'
import {
  CompactCodecPatch,
  decode,
  encode,
} from 'json-joy/lib/json-crdt-patch/codec/compact'
import {
  CompactCodecOperation,
  CompactCodecTimestamp,
} from 'json-joy/lib/json-crdt-patch/codec/compact/types'

/**
 * Calculates the size in bytes of the UTF-8 string representation of a compact-encoded JSON CRDT Patch.
 * This is useful for determining the size of patch that will be sent in a WebSocket connection, which requires UTF-8
 * encoding.
 * @param patch the compact-encoded JSON CRDT Patch
 * @returns the size in bytes of the UTF-8 string representation of the patch
 */
export function getPatchSizeInBytes(patch: CompactCodecPatch): number {
  return new TextEncoder().encode(JSON.stringify(patch)).length
}

/**
 * Computes the header for the next JSON CRDT patch based on the last patch.
 * @param lastPatch - the previous JSON CRDT patch
 * @returns the header for the next patch, which includes the replica ID and the next timestamp
 */
function computeNextPatchHeader(
  lastPatch: CompactCodecPatch,
): [CompactCodecTimestamp] {
  // TODO: Compute the next patch header without decoding the entire patch
  // decoding it is inefficient, but easy because it lets us easily compute the span.
  const decodedPatch = decode(lastPatch)

  const lastPatchHeader = decodedPatch.getId()!
  const lastPatchSpan = decodedPatch.span()

  return [[lastPatchHeader?.sid, lastPatchHeader.time + lastPatchSpan]]
}

/**
 * Given a json-joy JSON CRDT Patch, splits it into multiple patches if its compact encoding
 * exceeds the specified maximum size in bytes.
 * @param patch
 * @param maxPatchSizeBytes
 * @returns An array of patches that are compact-encoded. Each patch is guaranteed to be within the specified size limit, or to only contain
 * a single operation if it cannot be split further.
 */
export function splitPatch(
  patch: Patch,
  maxPatchSizeBytes: number,
): CompactCodecPatch[] {
  if (!patch.ops || patch.ops.length === 0) {
    return []
  }

  const binaryEncodedPatch = encode(patch)
  const sizeOfFullPatch = getPatchSizeInBytes(binaryEncodedPatch)

  // Check if this patch needs to be split
  if (sizeOfFullPatch <= maxPatchSizeBytes) {
    return [binaryEncodedPatch]
  }

  if (patch.ops.length == 1) {
    console.warn(
      `Patch is too large (${sizeOfFullPatch} B) but cannot be split further since it only contains one operation.`,
    )
    return [binaryEncodedPatch]
  }

  const firstPatchHeader = binaryEncodedPatch[0]
  const splitPatches: CompactCodecPatch[] = []
  let currentSplitPatch: CompactCodecPatch = [firstPatchHeader]
  for (let i = 1; i < binaryEncodedPatch.length; i += 1) {
    const currentSplitPatchOpCount = currentSplitPatch.length - 1 // Exclude header
    const sizeOfCurrentSplitPatchWithNextOp = getPatchSizeInBytes([
      ...currentSplitPatch,
      binaryEncodedPatch[i] as CompactCodecOperation,
    ])
    if (
      sizeOfCurrentSplitPatchWithNextOp > maxPatchSizeBytes &&
      currentSplitPatchOpCount > 0
    ) {
      splitPatches.push(currentSplitPatch)
      currentSplitPatch = [computeNextPatchHeader(currentSplitPatch)]
    }
    currentSplitPatch.push(binaryEncodedPatch[i] as CompactCodecOperation)
  }
  if (currentSplitPatch.length > 1) {
    splitPatches.push(currentSplitPatch)
  }

  return splitPatches
}
