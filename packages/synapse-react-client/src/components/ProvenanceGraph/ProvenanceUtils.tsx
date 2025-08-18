import { ReactNode } from 'react'
import { Node, Position, ConnectionLineType, Edge, MarkerType } from 'reactflow'
import { ActivityNodeLabel } from './ActivityNodeLabel'
import { EntityNodeLabel } from './EntityNodeLabel'
import {
  ExpandGraphNodeDataProps,
  ExpandGraphNodeLabel,
} from './ExpandGraphNodeLabel'
import { ExternalGraphNodeLabel } from './ExternalGraphNodeLabel'
import dagre from 'dagre'
import { differenceWith, isEqual } from 'lodash-es'
import { UndefinedNodeLabel } from './UndefinedNodeLabel'
import { EntityHeader, Reference } from '@sage-bionetworks/synapse-types'
import { Activity, UsedURL } from '@sage-bionetworks/synapse-types'
import { EntityPlaceholderNodeLabel } from './EntityPlaceholderNodeLabel'

export enum NodeType {
  ENTITY = 'EntityNode',
  ENTITY_PLACEHOLDER = 'EntityPlaceholderNode',
  EXTERNAL = 'ExternalNode',
  ACTIVITY = 'ActivityNode',
  EXPAND = 'ExpandNode',
  UNDEFINED = 'UndefinedNode',
}

type ProvenanceNodeLabelProps =
  | UsedURL
  | Activity
  | ExpandGraphNodeDataProps
  | EntityHeader
  | Reference

export type ProvenanceNodeProps = {
  type: NodeType
  data: ProvenanceNodeLabelProps
}

export type ProvenanceNodeData = {
  label: ReactNode
  props: ProvenanceNodeLabelProps
  type: NodeType
}

export const getProvenanceNode = (props: ProvenanceNodeProps): Node => {
  const { type, data } = props
  let nodeLabel: ReactNode
  switch (type) {
    case NodeType.ENTITY:
      nodeLabel = <EntityNodeLabel {...(data as EntityHeader)} />
      break
    case NodeType.ENTITY_PLACEHOLDER:
      nodeLabel = <EntityPlaceholderNodeLabel {...(data as Reference)} />
      break
    case NodeType.EXTERNAL:
      nodeLabel = <ExternalGraphNodeLabel {...(data as UsedURL)} />
      break
    case NodeType.ACTIVITY:
      nodeLabel = <ActivityNodeLabel {...(data as Activity)} />
      break
    case NodeType.EXPAND:
      nodeLabel = (
        <ExpandGraphNodeLabel {...(data as ExpandGraphNodeDataProps)} />
      )
      break
    case NodeType.UNDEFINED:
      nodeLabel = <UndefinedNodeLabel />
      break
    default:
      nodeLabel = <p>Unrecognized node type: {type}</p>
      break
  }
  const nodeData: ProvenanceNodeData = {
    label: nodeLabel,
    props: data,
    type: type,
  }
  return {
    id: getNodeId(props),
    position: { x: 100, y: 100 }, // hard coded, let graph layout library figure this out
    data: nodeData,
    connectable: false,
    draggable: false,
    // selectable: false, // like to make unselectable, but node contents become non-interactive
    className: `${type}`,
  }
}

export const getProvenanceEdge = (
  node1Props: ProvenanceNodeProps,
  node2Props: ProvenanceNodeProps,
): Edge => {
  const node1Id = getNodeId(node1Props)
  const node2Id = getNodeId(node2Props)
  return {
    id: `${node1Id}-${node2Id}`,
    source: node1Id,
    target: node2Id,
    animated: true,
    type: ConnectionLineType.SimpleBezier,
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  }
}

export const getNodeId = (props: ProvenanceNodeProps) => {
  const { type, data } = props
  switch (type) {
    case NodeType.ENTITY:
      return `${(data as EntityHeader).id}.${
        (data as EntityHeader).versionNumber ?? 'latest'
      }`
    case NodeType.ENTITY_PLACEHOLDER:
      return `${(data as Reference).targetId}.${
        (data as Reference).targetVersionNumber ?? 'latest'
      }`
    case NodeType.EXTERNAL:
      return `${(data as UsedURL).url}`
    case NodeType.ACTIVITY:
      return `${(data as Activity).id}`
    case NodeType.EXPAND:
      return `expand.node.${
        (data as ExpandGraphNodeDataProps).entityHeader.id
      }.${
        (data as ExpandGraphNodeDataProps).entityHeader.versionNumber ??
        'latest'
      }`
    case NodeType.UNDEFINED:
      return `undefined.dummy.node.${(data as EntityHeader).id}.${
        (data as EntityHeader).versionNumber ?? 'latest'
      }`
  }
}

// layout
const dagreGraph = new dagre.graphlib.Graph()
dagreGraph.setDefaultEdgeLabel(() => ({}))

const getNodeHeight = (node: Node) => {
  const nodeData: ProvenanceNodeData = node.data as ProvenanceNodeData
  return nodeData.type == NodeType.EXPAND ? 30 : 100
}
const getNodeWidth = (node: Node) => {
  const nodeData: ProvenanceNodeData = node.data as ProvenanceNodeData
  return nodeData.type == NodeType.EXPAND ? 30 : 172
}

export const getLayoutedElements = (
  nodes: Node[],
  edges: Edge[],
  direction: string,
) => {
  const isHorizontal = direction === 'LR'
  dagreGraph.setGraph({ rankdir: direction })

  nodes.forEach(node => {
    dagreGraph.setNode(node.id, {
      width: getNodeWidth(node),
      height: getNodeHeight(node),
    })
  })

  edges.forEach(edge => {
    dagreGraph.setEdge(edge.source, edge.target)
  })

  dagre.layout(dagreGraph)

  nodes.forEach(node => {
    const nodeWithPosition = dagreGraph.node(node.id)
    node.targetPosition = isHorizontal ? Position.Left : Position.Top
    node.sourcePosition = isHorizontal ? Position.Right : Position.Bottom

    // We are shifting the dagre node position (anchor=center center) to the top left
    // so it matches the React Flow node anchor point (top left).
    node.position = {
      x: nodeWithPosition.x - getNodeWidth(node) / 2,
      y: nodeWithPosition.y - getNodeHeight(node) / 2,
    }

    return node
  })

  return { nodes, edges }
}

export const isArrayEqual = (x: any[], y: any[]) => {
  return differenceWith(x, y, isEqual).length == 0
}
