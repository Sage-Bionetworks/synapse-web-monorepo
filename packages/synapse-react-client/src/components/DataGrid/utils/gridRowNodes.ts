import { ConNode, JsonNode, ObjNode, VecNode } from 'json-joy/lib/json-crdt'
import type { GridModel } from '../DataGridTypes'

/**
 * Returns the CRDT node of every row, in the same order as the rows of a
 * snapshot of the model.
 */
export function getRowNodes(model: GridModel): JsonNode[] {
  // Resolving a row by its path (rows/<index>) gets slower the further the row
  // is from the start of the array, so resolving every row that way is
  // quadratic in the row count. Walking the array visits each row once.
  const rowNodes: JsonNode[] = []
  model.api.arr(['rows']).node.children(rowNode => {
    // The model's view skips an element it cannot resolve, so skip it here too
    // to stay aligned with the snapshot's rows.
    if (rowNode) rowNodes.push(rowNode)
  })
  return rowNodes
}

/** Returns the vector holding a row's cell values, if the row has one. */
export function getRowDataNode(
  rowNode: JsonNode | undefined,
): VecNode | undefined {
  const dataNode = getObjectChild(rowNode, 'data')
  return dataNode instanceof VecNode ? dataNode : undefined
}

/** Returns the constant holding a row's validation results, if the row has one. */
export function getRowValidationNode(
  rowNode: JsonNode | undefined,
): ConNode | undefined {
  const validationNode = getObjectChild(
    getObjectChild(rowNode, 'metadata'),
    'rowValidation',
  )
  return validationNode instanceof ConNode ? validationNode : undefined
}

function getObjectChild(
  node: JsonNode | undefined,
  key: string,
): JsonNode | undefined {
  if (!(node instanceof ObjNode)) return undefined
  return (node as ObjNode<Record<string, JsonNode>>).get(key)
}
