import {
  CrdtId,
  GridModel,
  ReplicaSelectionModel,
} from '@/components/DataGrid/DataGridTypes'
import { ArrApi } from 'json-joy'
import { SelectionWithId } from 'react-datasheet-grid/dist/types'

/**
 * Compute the ReplicaSelectionModel that should be attached to the grid model
 * @param selection the selection provided by react-datasheet-grid
 * @param model the current Data Grid CRDT Model
 */
export default function computeReplicaSelectionModel(
  selection: SelectionWithId,
  model: GridModel,
): ReplicaSelectionModel {
  const replicaSelectionModel: ReplicaSelectionModel = {}
  const modelSnapshot = model.api.getSnapshot()
  if (isSelectAll(modelSnapshot.rows, selection.min.row, selection.max.row)) {
    replicaSelectionModel.rowSelectAll = true
  } else {
    // Get the arr element CrdtIds from the rows array
    const rowsArr = model.api.arr(['rows'])
    replicaSelectionModel.rowSelection = getCrdtIdsForArrayRange(
      rowsArr,
      selection.min.row,
      selection.max.row,
    )
  }

  if (
    isSelectAll(modelSnapshot.columnOrder, selection.min.col, selection.max.col)
  ) {
    replicaSelectionModel.columnSelectAll = true
  } else {
    // Get the arr element CrdtIds from the columnOrder array
    const columnOrderArr = model.api.arr(['columnOrder'])
    replicaSelectionModel.columnSelection = getCrdtIdsForArrayRange(
      columnOrderArr,
      selection.min.col,
      selection.max.col,
    )
  }

  return replicaSelectionModel
}

function isSelectAll(arrSnapshot: unknown[], min: number, max: number) {
  // If the min and max cover the entire array, it's a select all
  return min === 0 && max === arrSnapshot.length - 1
}

function getCrdtIdsForArrayRange(array: ArrApi, min: number, max: number) {
  const crdtIds: CrdtId[] = []
  for (let i = min; i <= max; i++) {
    const findChunkResult = array.node.findChunk(i)
    if (findChunkResult) {
      const [chunk, offset] = findChunkResult
      crdtIds.push({ rep: chunk.id.sid, seq: chunk.id.time + offset })
    }
  }
  return crdtIds
}
