import { Edge, Node } from 'reactflow'
import { EntityHeader, Reference } from '../../utils/synapseTypes'
import {
  Activity,
  UsedURL,
} from '../../utils/synapseTypes/Provenance/Provenance'
import {
  getNodeId,
  getProvenanceEdge,
  getProvenanceNode,
  NodeType,
  ProvenanceNodeProps,
} from './ProvenanceUtils'

/**
 * Is one of the root Entities given by the user
 */
export const isRootEntity = (params: {
  entityHeader: EntityHeader
  rootEntityHeaders?: EntityHeader[]
}) => {
  const { entityHeader, rootEntityHeaders } = params
  const foundNode = rootEntityHeaders?.find(header => {
    return (
      entityHeader.id == header.id &&
      entityHeader.versionNumber == header.versionNumber
    )
  })
  return foundNode !== undefined
}

/**
 * Given the node properties, will return true if this node is already in the nodesCopy array.
 */
export const isNodeNotFound = (
  nodeProps: ProvenanceNodeProps,
  nodesCopy: Node[],
) => {
  const foundNode = nodesCopy.find(node => {
    return node.id === getNodeId(nodeProps)
  })
  return foundNode === undefined
}

export const findEntityNode = (
  entityHeader: EntityHeader,
  nodesCopy: Node[],
) => {
  const nodeProps = {
    type: NodeType.ENTITY,
    data: entityHeader,
  }
  return nodesCopy.find(node => {
    return node.id === getNodeId(nodeProps)
  })
}

/**
 * Given the node properties, will return true if this edge is already in the edgesCopy array.
 */
export const isEdgeNotFound = (
  nodeProps1: ProvenanceNodeProps,
  nodeProps2: ProvenanceNodeProps,
  edgesCopy: Edge[],
) => {
  const foundEdge = edgesCopy.find(edge => {
    return (
      edge.source === getNodeId(nodeProps1) &&
      edge.target === getNodeId(nodeProps2)
    )
  })
  return foundEdge === undefined
}

/**
 * Given node properties of the new node and existing node, this function creates and adds a new node to
 * nodesCopy, and creates an edge from the new node to the existing node.  Note, this will only create
 * a new node or edge if these items are not found in the input nodesCopy array and edgesCopy array.
 */
export const addNodeAndEdge = (params: {
  newNodeProps: ProvenanceNodeProps
  existingNodeProps: ProvenanceNodeProps
  nodesCopy: Node[]
  edgesCopy: Edge[]
}) => {
  const { newNodeProps, existingNodeProps, nodesCopy, edgesCopy } = params
  if (isNodeNotFound(newNodeProps, nodesCopy)) {
    nodesCopy.push(getProvenanceNode(newNodeProps))
  }
  if (isEdgeNotFound(newNodeProps, existingNodeProps, edgesCopy)) {
    edgesCopy.push(getProvenanceEdge(newNodeProps, existingNodeProps))
  }
}

export const addActivityNode = (params: {
  activity: Activity
  entityHeader: EntityHeader
  nodesCopy: Node[]
  edgesCopy: Edge[]
}) => {
  const { activity, entityHeader, nodesCopy, edgesCopy } = params
  const activityNodeProps = {
    type: NodeType.ACTIVITY,
    data: activity,
  }
  const entityNodeProps = {
    type: NodeType.ENTITY,
    data: entityHeader,
  }
  addNodeAndEdge({
    newNodeProps: activityNodeProps,
    existingNodeProps: entityNodeProps,
    nodesCopy,
    edgesCopy,
  })
}

export const addExpandNode = (params: {
  entityHeader: EntityHeader
  itemCount: number | undefined
  nodesCopy: Node[]
  edgesCopy: Edge[]
}) => {
  const { entityHeader, itemCount = 0, nodesCopy, edgesCopy } = params
  const expandNodeProps = {
    type: NodeType.EXPAND,
    data: {
      itemCount,
      entityHeader,
    },
  }
  const entityNodeProps = {
    type: NodeType.ENTITY,
    data: entityHeader,
  }
  addNodeAndEdge({
    newNodeProps: expandNodeProps,
    existingNodeProps: entityNodeProps,
    nodesCopy,
    edgesCopy,
  })
}

export const addEntityPlaceholderNode = (params: {
  ref: Reference
  activity: Activity
  nodesCopy: Node[]
  edgesCopy: Edge[]
}) => {
  const { ref, activity, nodesCopy, edgesCopy } = params
  const entityPlaceholderNodeProps = {
    type: NodeType.ENTITY_PLACEHOLDER,
    data: ref,
  }
  const activityNodeProps = {
    type: NodeType.ACTIVITY,
    data: activity,
  }
  addNodeAndEdge({
    newNodeProps: entityPlaceholderNodeProps,
    existingNodeProps: activityNodeProps,
    nodesCopy,
    edgesCopy,
  })
}

export const addUndefinedNode = (params: {
  entityHeader: EntityHeader
  nodesCopy: Node[]
  edgesCopy: Edge[]
}) => {
  const { entityHeader, nodesCopy, edgesCopy } = params
  const undefinedNodeProps = {
    type: NodeType.UNDEFINED,
    data: entityHeader,
  }
  const entityNodeProps = {
    type: NodeType.ENTITY,
    data: entityHeader,
  }
  addNodeAndEdge({
    newNodeProps: undefinedNodeProps,
    existingNodeProps: entityNodeProps,
    nodesCopy,
    edgesCopy,
  })
}

export const addExternalNode = (params: {
  usedURL: UsedURL
  activity: Activity
  nodesCopy: Node[]
  edgesCopy: Edge[]
}) => {
  const { usedURL, activity, nodesCopy, edgesCopy } = params
  const activityNodeProps = {
    type: NodeType.ACTIVITY,
    data: activity,
  }
  const externalNodeProps = {
    type: NodeType.EXTERNAL,
    data: usedURL,
  }
  addNodeAndEdge({
    newNodeProps: externalNodeProps,
    existingNodeProps: activityNodeProps,
    nodesCopy,
    edgesCopy,
  })
}

export const addEntityNode = (params: {
  entityHeader: EntityHeader
  activity: Activity | undefined
  nodesCopy: Node[]
  edgesCopy: Edge[]
}) => {
  const { entityHeader, activity, nodesCopy, edgesCopy } = params
  const entityNodeProps = {
    type: NodeType.ENTITY,
    data: entityHeader,
  }
  if (isNodeNotFound(entityNodeProps, nodesCopy)) {
    // add the new entity node
    nodesCopy.push(getProvenanceNode(entityNodeProps))
    if (activity) {
      const activityNodeProps = {
        type: NodeType.ACTIVITY,
        data: activity,
      }
      edgesCopy.push(getProvenanceEdge(entityNodeProps, activityNodeProps))
    }
  }
}
