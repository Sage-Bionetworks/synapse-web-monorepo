import React, { useCallback, useEffect, useState } from 'react'
import ReactFlow, {
  Controls,
  Node,
  Edge,
  useNodesState,
  useEdgesState,
  getConnectedEdges,
  ReactFlowProvider,
  useReactFlow,
} from 'reactflow'
import {
  getLayoutedElements,
  isArrayEqual,
  NodeType,
  ProvenanceNodeData,
} from './ProvenanceUtils'
import {
  Activity,
  Used,
  UsedEntity,
  UsedURL,
  USED_ENTITY_CONCRETE_TYPE_VALUE,
} from '@sage-bionetworks/synapse-types'
import { EntityHeader, ReferenceList } from '@sage-bionetworks/synapse-types'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import SynapseClient from '../../synapse-client'
import { ExpandGraphNodeDataProps } from './ExpandGraphNodeLabel'
import { useGetEntityHeaders } from '../../synapse-queries'
import { CircularProgress } from '@mui/material'
import { displayToast } from '../ToastMessage/ToastMessage'
import { SynapseErrorBoundary } from '../error/ErrorBanner'
import { useErrorHandler } from 'react-error-boundary'
import {
  addActivityNode,
  addEntityNode,
  addEntityPlaceholderNode,
  addExpandNode,
  addExternalNode,
  addUndefinedNode,
  findEntityNode,
  isRootEntity,
} from './ProvenanceGraphUtils'
import 'reactflow/dist/style.css'

export type ProvenanceProps = {
  // what entity nodes should we start with?
  entityRefs: ReferenceList
  containerHeight?: string
  initialNodes?: Node[]
  initialEdges?: Edge[]
  onNodesChangedListener?: (nodes: Node[]) => void
  onEdgesChangedListener?: (edges: Edge[]) => void
}

const MAX_ACTIVITY_EXPAND_NODES = 400
const DEFAULT_ZOOM = 0.85

/**
 * Renders a Provenance Graph for a set of entities.
 * New Nodes are added to tempNodes, and new Edges are added to tempEdges.
 * On change, these are fed into the dagre js graph library to figure out the node positions,
 * and the output stored in 'nodes' and 'edges'. The 'nodes' and 'edges' arrays are used by the
 * ReactFlow component.
 */
const ProvenanceReactFlow = (props: ProvenanceProps) => {
  const {
    entityRefs: rootEntityRefs,
    containerHeight = '200px',
    initialNodes = [],
    initialEdges = [],
    onNodesChangedListener,
    onEdgesChangedListener,
  } = props
  const { accessToken } = useSynapseContext()
  const [tempNodes, setTempNodes] = React.useState<Node[]>(initialNodes)
  const [tempEdges, setTempEdges] = React.useState<Edge[]>(initialEdges)
  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const [clickedNode, setClickedNode] = useState<Node>()
  const handleError = useErrorHandler()

  const { data: rootEntityHeadersPage, isSuccess } = useGetEntityHeaders(
    rootEntityRefs,
    { throwOnError: true },
  )
  if (
    isSuccess &&
    rootEntityHeadersPage &&
    rootEntityHeadersPage.totalNumberOfResults == 0
  ) {
    const synapseIds = rootEntityRefs.map(ref => ref.targetId).join(',')
    handleError(
      `Unable to load provenance for the given Synapse IDs: ${synapseIds}`,
    )
  }
  const rootEntityHeaders = rootEntityHeadersPage?.results
  const [initializedPosition, setInitializedPosition] =
    React.useState<boolean>(false)

  // Get the react flow instance so we attempt to properly center the view.
  const reactFlowInstance = useReactFlow()

  const onClickNode = useCallback((_event: React.MouseEvent, node: Node) => {
    setClickedNode(node)
  }, [])

  /**
   * Called when we have a new entity to add to the graph.  This will result in adding
   * a new Entity Node to the nodesCopy, a link from the usedInActivity to the new Entity Node,
   * AND it will look for an Activity associated with the new entity.  If an Activity is found,
   * it will add an Expand Node for the user to click (to expand to see this Activity!).
   * If this is a root node (starting entity node), then we automatically add the Activity Node
   * and process it.
   */
  const addEntity = useCallback(
    async (params: {
      entityHeader: EntityHeader
      usedInActivity?: Activity
      nodesCopy: Node[]
      edgesCopy: Edge[]
    }) => {
      const { entityHeader, nodesCopy, edgesCopy, usedInActivity } = params
      addEntityNode({
        entityHeader,
        activity: usedInActivity,
        nodesCopy,
        edgesCopy,
      })
      //look for Activity
      try {
        const activity = await SynapseClient.getActivityForEntity(
          entityHeader.id,
          entityHeader.versionNumber,
          accessToken,
        )
        // if this is not a root node (or there are too many items to show), add an expand node
        if (
          !isRootEntity({ entityHeader, rootEntityHeaders }) ||
          (activity.used && activity.used.length >= MAX_ACTIVITY_EXPAND_NODES)
        ) {
          addExpandNode({
            entityHeader,
            itemCount: activity.used?.length,
            nodesCopy,
            edgesCopy,
          })
        }
      } catch (e) {
        // Activity is not accessible
        console.error(e)
        if (
          isRootEntity({
            entityHeader,
            rootEntityHeaders,
          })
        ) {
          // add provenance undefined node
          addUndefinedNode({
            entityHeader,
            nodesCopy,
            edgesCopy,
          })
        }
      }
    },
    [accessToken, rootEntityHeaders],
  )

  /**
   * This effect attempts to center the graph on one of the root nodes.
   * Only initializes after after a root node has been added to the graph.
   */
  useEffect(() => {
    if (!initializedPosition && nodes.length > 0) {
      setTimeout(() => {
        if (rootEntityHeaders) {
          const rootEntityNode = findEntityNode(rootEntityHeaders[0], nodes)
          if (rootEntityNode) {
            const currentZoom = reactFlowInstance.getZoom()
            const zoom = currentZoom > DEFAULT_ZOOM ? DEFAULT_ZOOM : currentZoom
            reactFlowInstance?.setCenter(
              rootEntityNode.position.x + 150,
              rootEntityNode.position.y - 30,
              { zoom, duration: 0 },
            )
          }
          setInitializedPosition(true)
        }
      })
    }
  }, [initializedPosition, nodes, reactFlowInstance, rootEntityHeaders])

  /**
   * This is called when the user clicks on an Expand Node.  It will add the associated Activity
   * and all "used" items (entities and urls) to the graph by adding items to the nodesCopy and edgesCopy arrays.
   */
  const onExpandEntity = useCallback(
    async (params: {
      entityHeader: EntityHeader
      nodesCopy: Node[]
      edgesCopy: Edge[]
    }) => {
      const { entityHeader, nodesCopy, edgesCopy } = params
      try {
        const activity = await SynapseClient.getActivityForEntity(
          entityHeader.id,
          entityHeader.versionNumber,
          accessToken,
        )
        addActivityNode({
          activity,
          entityHeader,
          nodesCopy,
          edgesCopy,
        })
        // go through Activity.used array to add these nodes/edges
        if (activity.used && activity.used.length < MAX_ACTIVITY_EXPAND_NODES) {
          const usedEntityReferences: ReferenceList = []
          activity.used.forEach((usedItem: Used) => {
            if (usedItem.concreteType == USED_ENTITY_CONCRETE_TYPE_VALUE) {
              usedEntityReferences.push((usedItem as UsedEntity).reference)
            } else {
              // UsedURL
              const usedURL = usedItem as UsedURL
              addExternalNode({ usedURL, activity, nodesCopy, edgesCopy })
            }
          })
          const usedEntityHeadersPage = await SynapseClient.getEntityHeaders(
            usedEntityReferences,
            accessToken,
          )
          const { results: usedEntityHeaderPageResults } = usedEntityHeadersPage
          // find refs that were not returned by the entity header call
          const refsMissingEntityHeaders = usedEntityReferences.filter(ref => {
            return (
              usedEntityHeaderPageResults.find(header => {
                return header.id == ref.targetId
              }) == undefined
            )
          })
          refsMissingEntityHeaders.forEach(ref => {
            addEntityPlaceholderNode({ ref, activity, nodesCopy, edgesCopy })
          })
          const addEntityPromises: Promise<void>[] = []
          usedEntityHeaderPageResults.forEach(header => {
            addEntityPromises.push(
              addEntity({
                entityHeader: header,
                nodesCopy,
                edgesCopy,
                usedInActivity: activity,
              }),
            )
          })
          await Promise.allSettled(addEntityPromises)
        }
      } catch (e) {
        // Activity is not accessible
        console.error(e)
      }
    },
    [accessToken, addEntity],
  )

  /**
   * This effect code executes when no nodes have been added.
   * It will add the root nodes, and attempt to expand the root nodes.
   */
  useEffect(() => {
    if (rootEntityHeaders && tempNodes.length == 0) {
      const nodesCopy = [...tempNodes]
      const edgesCopy = [...tempEdges]
      const addAndExpandPromises: Promise<void>[] = []
      rootEntityHeaders.forEach(header => {
        const addEntityPromise = addEntity({
          entityHeader: header,
          nodesCopy,
          edgesCopy,
        })
        addAndExpandPromises.push(addEntityPromise)

        const expandEntityPromise = onExpandEntity({
          entityHeader: header,
          nodesCopy,
          edgesCopy,
        })
        addAndExpandPromises.push(expandEntityPromise)
      })
      Promise.allSettled(addAndExpandPromises).finally(() => {
        setTempNodes(nodesCopy)
        setTempEdges(edgesCopy)
      })
    }
  }, [
    addEntity,
    handleError,
    onExpandEntity,
    rootEntityHeaders,
    rootEntityRefs,
    tempEdges,
    tempNodes,
  ])

  /**
   * This effect code executes when a node is clicked.
   * We check to see if it is an expand node.  If it is, then we remove the expand node (and associated edge)
   * and ask for the Activity and associated "used" nodes (entities and URLs)
   */
  useEffect(() => {
    const nodeData: ProvenanceNodeData = clickedNode?.data as ProvenanceNodeData
    if (clickedNode && nodeData?.type == NodeType.EXPAND) {
      const expandNodeDataProps = nodeData.props as ExpandGraphNodeDataProps
      if (expandNodeDataProps.itemCount > MAX_ACTIVITY_EXPAND_NODES) {
        displayToast(
          'Web visualization does not support expanding this many items at this time.',
          'danger',
        )
        return
      } else {
        // graph will be used outside of synapse, so show a non-branded spinner
        nodeData.label = <CircularProgress size={30} />
        // remove clicked node
        const nodesWithoutExpandNode = tempNodes.filter(
          node => node.id != clickedNode.id,
        )
        const edgeToRemove = getConnectedEdges([clickedNode], tempEdges)[0]
        const edgesWithoutExpandEdge = tempEdges.filter(
          edge => edge != edgeToRemove,
        )
        onExpandEntity({
          entityHeader: expandNodeDataProps.entityHeader,
          nodesCopy: nodesWithoutExpandNode,
          edgesCopy: edgesWithoutExpandEdge,
        }).finally(() => {
          setTempNodes(nodesWithoutExpandNode)
          setTempEdges(edgesWithoutExpandEdge)
        })
      }
      setClickedNode(undefined)
    }
  }, [clickedNode, tempNodes, tempEdges, onExpandEntity])

  /**
   * This effect code is run when the graph nodes or edges change.
   * It feeds the nodes and edges into our layout library to figure out where they should be positioned.
   * The result is saved in the state variable "nodes" and "edges".
   */
  useEffect(() => {
    const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
      tempNodes,
      tempEdges,
      'TB',
    )
    // hack: ProvenanceUtils.getProvenanceNode() returns a new object every time, so check to see if
    // there were any real changes
    if (!isArrayEqual(layoutedNodes, nodes)) {
      setNodes(layoutedNodes)
      if (onNodesChangedListener) {
        onNodesChangedListener(layoutedNodes)
      }
    }
    if (!isArrayEqual(layoutedEdges, edges)) {
      setEdges(layoutedEdges)
      if (onEdgesChangedListener) {
        onEdgesChangedListener(layoutedEdges)
      }
    }
  }, [
    tempNodes,
    tempEdges,
    nodes,
    edges,
    setNodes,
    setEdges,
    initializedPosition,
    reactFlowInstance,
    rootEntityRefs,
    onNodesChangedListener,
    onEdgesChangedListener,
  ])

  const onPaneScrollFunction: (event?: React.WheelEvent) => void = useCallback(
    event => {
      // Cannot simply check the truthy value of event.deltaX (or Y) because the value might be 0 (or -0), which is falsy
      if (
        event &&
        typeof event.deltaX !== 'undefined' &&
        typeof event.deltaY !== 'undefined'
      ) {
        window.scrollTo(
          window.scrollX + event.deltaX,
          window.scrollY + event.deltaY,
        )
      }
    },
    [],
  )

  return (
    <div
      className="bootstrap-4-backport ProvenanceWidget"
      role="graphics-doc" //https://www.w3.org/wiki/SVG_Accessibility/ARIA_roles_for_charts#Document_Roles
      style={{ width: '100%', height: containerHeight }}
    >
      <ReactFlow
        defaultViewport={{ x: 0, y: 0, zoom: DEFAULT_ZOOM }}
        nodes={nodes}
        edges={edges}
        onNodeClick={onClickNode}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        attributionPosition="bottom-right"
        onConnect={undefined}
        zoomOnScroll={false}
        onPaneScroll={onPaneScrollFunction}
      >
        <Controls />
      </ReactFlow>
    </div>
  )
}

const ProvenanceGraph = (props: ProvenanceProps) => {
  return (
    <SynapseErrorBoundary>
      <ReactFlowProvider>
        <ProvenanceReactFlow {...props} />
      </ReactFlowProvider>
    </SynapseErrorBoundary>
  )
}

export default ProvenanceGraph
