import React from 'react'
import { getEntityChildren } from '@/synapse-client'
import { useSynapseContext } from '@/utils'
import { formatDate } from '@/utils/functions/DateFormatter'
import {
  getEntityTypeFromHeader,
  isContainerType,
} from '@/utils/functions/EntityTypeUtils'
import { Writable } from '@/utils/types/Writable'
import { ChevronRight, ExpandMore } from '@mui/icons-material'
import { Skeleton, Tooltip, Typography } from '@mui/material'
import { EntityType } from '@sage-bionetworks/synapse-client'
import { EntityChildrenRequest } from '@sage-bionetworks/synapse-types'
import { useQueryClient } from '@tanstack/react-query'
import dayjs from 'dayjs'
import { cloneDeep } from 'lodash-es'
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import AutoSizer from 'react-virtualized-auto-sizer'
import {
  TreeWalker,
  TreeWalkerValue,
  VariableSizeNodeData,
  VariableSizeNodePublicState,
  VariableSizeTree,
} from 'react-vtree'
import { NodeComponentProps } from 'react-vtree/dist/es/Tree'
import { EntityBadgeIcons } from '../../EntityBadgeIcons'
import { EntityTypeIcon } from '../../EntityIcon'
import { SynapseSpinner } from '../../LoadingScreen/LoadingScreen'
import { UserBadge } from '../../UserCard/UserBadge'
import { EntityFinderHeader } from '../EntityFinderHeader'
import { EntitySelectionMapType } from '../useEntitySelection'

export enum EntityTreeNodeType {
  /** The tree component's appearance and interactions will facilitate selection. Nodes will be larger and styles will indicate primary selection */
  SINGLE_PANE,
  /** The tree component's appearance and interactions will facilitate browsing. Nodes will be smaller and styles will indicate secondary selection */
  DUAL_PANE,
}

type NodeChildren = Readonly<{
  /** The node's children. If undefined, then children have not been fetched. */
  children?: EntityHeaderNode[]
  /** The token used to fetch the next page of children for this entity. If this property is nullish and children is defined, then all children have been fetched. */
  childrenNextPageToken?: string | null
}>

export type EntityHeaderNode = (
  | EntityFinderHeader
  // Only will have a subset of fields if the node is fetched via the entity path:
  | Pick<EntityFinderHeader, 'id' | 'name' | 'type'>
) &
  NodeChildren
type PaginationNode = { __paginationNode: true }

type TreeNode = EntityHeaderNode | RootNodeConfiguration | PaginationNode

function getTreeNodeType(
  node: TreeNode,
): 'entityHeader' | 'rootNodeConfiguration' | 'pagination' {
  if ('__paginationNode' in node) {
    return 'pagination'
  }
  return 'id' in node ? 'entityHeader' : 'rootNodeConfiguration'
}

function isPaginationNode(node: TreeNode): node is PaginationNode {
  return getTreeNodeType(node) === 'pagination'
}

function isEntityHeaderNode(node: TreeNode): node is EntityHeaderNode {
  return getTreeNodeType(node) === 'entityHeader'
}

function isRootNodeConfiguration(
  node: TreeNode,
): node is RootNodeConfiguration {
  return getTreeNodeType(node) === 'rootNodeConfiguration'
}

function hasMoreChildren(node: TreeNode) {
  if (isPaginationNode(node)) {
    return false
  } else if (isRootNodeConfiguration(node)) {
    return node.hasNextPage
  }

  return node.children == null || node.childrenNextPageToken != null
}

function isLeafNode(node: TreeNode) {
  if (isPaginationNode(node)) {
    return true
  } else if (isRootNodeConfiguration(node)) {
    return false
  } else {
    return (
      // Entity is not a container
      !isContainerType(getEntityTypeFromHeader(node)) ||
      // OR Children have been fetched (nonnull) and there are 0 children
      (node.children != null && node.children.length === 0)
    )
  }
}

function maybeHasChildren(
  node: TreeNode,
): node is RootNodeConfiguration | EntityHeaderNode {
  if (isPaginationNode(node)) {
    return false
  } else if (isRootNodeConfiguration(node)) {
    return node.children.length > 0 || node.hasNextPage
  } else {
    return !isLeafNode(node)
  }
}

export type TreeData = VariableSizeNodeData &
  Readonly<{
    node: TreeNode
    getNextPageOfChildren: () => Promise<void>
    isLeaf: boolean
    nestingLevel: number
    setSelectedId: (entityId: string) => void
    treeNodeType: EntityTreeNodeType
    isSelected: boolean
    isDisabled: boolean
  }>

type NodeMeta = Readonly<{
  nestingLevel: number
  node: TreeNode
}>

export type RootNodeConfiguration = {
  show: boolean
  nodeText: string
  children: EntityHeaderNode[]
  /** If undefined, no more entities to fetch */
  fetchNextPage: () => Promise<void>
  hasNextPage: boolean
}

/**
 * Converts a TreeNode and related data into a TreeWalkerValue that react-vtree can use to render the tree.
 * Exported for testing purposes only.
 * @param config
 * @returns
 */
export const getNodeData = (config: {
  node: TreeNode
  nestingLevel: number
  getNextPageOfChildren: () => Promise<void>
  setSelectedId: (entityId: string) => void
  treeNodeType: EntityTreeNodeType
  selected: EntitySelectionMapType
  selectableTypes: EntityType[]
  autoExpand: (entityId: string) => boolean
  defaultHeight: number
  currentContainer?: string | 'root' | null
}): TreeWalkerValue<TreeData, NodeMeta> => {
  const {
    node,
    nestingLevel,
    getNextPageOfChildren,
    setSelectedId,
    treeNodeType,
    selected,
    selectableTypes,
    autoExpand,
    defaultHeight,
    currentContainer,
  } = config

  if (isPaginationNode(node)) {
    throw new Error('Cannot create data for a pagination node')
  }

  const id = isRootNodeConfiguration(node) ? 'root' : node.id

  const isSelected =
    treeNodeType === EntityTreeNodeType.SINGLE_PANE
      ? selected.has(id)
      : currentContainer === id
  const isDisabled =
    !isRootNodeConfiguration(node) &&
    !selectableTypes.includes(getEntityTypeFromHeader(node))

  const isOpenByDefault = autoExpand(id)
  /*
   * If the node is open by default and we haven't fetched its children,
   * fetch the first page (otherwise we won't fetch unless re-toggled)
   */
  if (isOpenByDefault && node.children == null && hasMoreChildren(node)) {
    getNextPageOfChildren()
  }

  return {
    data: {
      node,
      getNextPageOfChildren,
      id: id,
      isLeaf: isLeafNode(node),
      isOpenByDefault: isOpenByDefault,
      nestingLevel,
      setSelectedId,
      treeNodeType,
      isSelected,
      isDisabled,
      defaultHeight,
    },
    nestingLevel,
    node,
  }
}

/**
 * Node component for the react-vtree virtualized tree. Exported only for testing purposes
 */
export function Node(
  props: NodeComponentProps<TreeData, VariableSizeNodePublicState<TreeData>>,
) {
  const {
    data: {
      node,
      getNextPageOfChildren,
      isLeaf,
      id,
      nestingLevel,
      setSelectedId,
      treeNodeType,
      isSelected,
      isDisabled,
    },
    isOpen,
    style,
    setOpen,
  } = props

  const [isLoading, setLoading] = useState(false)

  const nodeText = isEntityHeaderNode(node) ? (
    <span>{node.name}</span>
  ) : isRootNodeConfiguration(node) ? (
    <span>{node.nodeText}</span>
  ) : (
    // Pagination node
    <Skeleton width={100} />
  )

  // We only use this for pagination nodes. If the pagination node comes into view, then immediately call `getNextPageOfChildren`
  const { ref, inView } = useInView()

  useEffect(() => {
    if (isPaginationNode(node) && inView) {
      getNextPageOfChildren()
    }
  }, [node, inView, getNextPageOfChildren])

  const toggleExpand = useCallback(async () => {
    if (hasMoreChildren(node)) {
      setLoading(true)
      await getNextPageOfChildren()
      await setOpen(!isOpen)
      setLoading(false)
    } else {
      await setOpen(!isOpen)
    }
  }, [getNextPageOfChildren, node, isOpen, setOpen])

  /**
   * If in the dual-pane view, expand a node when it becomes selected
   */
  useEffect(() => {
    if (
      treeNodeType === EntityTreeNodeType.DUAL_PANE &&
      isSelected &&
      !isOpen
    ) {
      toggleExpand()
    }
    // Intentionally only toggle the expanded state when isSelected changes, otherwise the node cannot be un-expanded
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSelected])

  /**
   * If the height is 0, the node is purposefully hidden. Just render a fragment.
   */
  if ('height' in style && style.height === 0) {
    return <></>
  }

  let tooltipContent: ReactNode = ''
  if (isEntityHeaderNode(node)) {
    tooltipContent = (
      <div style={{ textAlign: 'center' }}>
        <Typography
          component="span"
          variant="smallText1"
          sx={{
            display: 'inline',
          }}
        >
          {node.name}
          <br />
          <b>ID: </b>
          {node.id}
          {'modifiedBy' in node && (
            <>
              <br />
              <b>Modified By: </b>
              <UserBadge
                userId={node.modifiedBy.toString()}
                showFullName
                disableLink
                showCardOnHover={false}
              />
            </>
          )}
          {'modifiedOn' in node && (
            <>
              <br />
              <b>Modified On: </b>
              {formatDate(dayjs(node.modifiedOn))}
            </>
          )}
        </Typography>
      </div>
    )
  }

  const ExpandIcon = isOpen ? ExpandMore : ChevronRight

  return (
    <div
      className={`Node ${
        treeNodeType === EntityTreeNodeType.SINGLE_PANE
          ? 'SelectNode'
          : 'BrowseNode'
      }`}
      aria-selected={isSelected}
      aria-disabled={isDisabled}
      onClick={event => {
        event.stopPropagation()
        if (!isDisabled) {
          setSelectedId(id)
        }
      }}
      style={{
        ...style,
        paddingLeft: `${nestingLevel * 20}px`,
      }}
    >
      {!isLeaf && (
        <>
          {isLoading ? (
            <SynapseSpinner size={10} />
          ) : (
            <button
              aria-label={isOpen ? 'Collapse' : 'Expand'}
              onClick={event => {
                event.stopPropagation()
                toggleExpand()
              }}
            >
              <ExpandIcon className="ExpandButton" />
            </button>
          )}
        </>
      )}
      {treeNodeType === EntityTreeNodeType.SINGLE_PANE && ( // SWC-5592
        <div className="EntityIcon">
          {isEntityHeaderNode(node) && (
            <EntityTypeIcon type={getEntityTypeFromHeader(node)} />
          )}
        </div>
      )}

      <Tooltip title={tooltipContent} placement="right">
        <div className="EntityName" ref={ref}>
          {nodeText}
        </div>
      </Tooltip>

      {treeNodeType === EntityTreeNodeType.SINGLE_PANE && (
        <EntityBadgeIcons
          entityId={id}
          showHasDiscussionThread={false}
          showHasWiki={false}
          showUnlink={false}
          canOpenModal={false}
        />
      )}
    </div>
  )
}

/**
 * Extracted from the React component for testing purposes
 * @returns a generator function compatible with react-vtree
 */
export function getTreeWalkerFunction(
  rootNode: RootNodeConfiguration,
  setSelectedId: VirtualizedTreeProps['setSelectedId'],
  treeNodeType: VirtualizedTreeProps['treeNodeType'],
  selected: VirtualizedTreeProps['selected'],
  selectableTypes: VirtualizedTreeProps['selectableTypes'],
  autoExpand: VirtualizedTreeProps['autoExpand'],
  itemSize: (index?: number) => number,
  currentContainer: VirtualizedTreeProps['currentContainer'],
  fetchNextPageOfChildren: (node: Writable<EntityHeaderNode>) => Promise<void>,
): TreeWalker<TreeData, NodeMeta> {
  return function* treeWalker() {
    // Step [1]: Define the root node of our tree.
    yield getNodeData({
      node: rootNode,
      nestingLevel: 0,
      getNextPageOfChildren: rootNode.fetchNextPage,
      setSelectedId,
      treeNodeType,
      selected,
      selectableTypes,
      autoExpand,
      defaultHeight: itemSize(),
      currentContainer,
    })

    while (true) {
      // Step [2]: Get the parent node and nesting level, which will be passed into the Generator.next function by react-vtree.
      // Yielding `undefined` indicates to react-vtree that we've finished iterating children from the last time we were in the loop.
      const parentMeta = yield

      if (maybeHasChildren(parentMeta.node)) {
        // Step [3]: Yielding all the known children of the parent
        if (parentMeta.node.children) {
          for (let i = 0; i < parentMeta.node.children.length; i++) {
            const childNode = parentMeta.node.children[i]

            yield getNodeData({
              node: childNode,
              nestingLevel: parentMeta.nestingLevel + 1,
              getNextPageOfChildren: () => fetchNextPageOfChildren(childNode),
              setSelectedId,
              treeNodeType,
              selected,
              selectableTypes,
              autoExpand,
              defaultHeight: itemSize(),
              currentContainer,
            })
          }
        }

        // Step [4] - If the parent node has more children, render a "pagination node" that will fetch more children when it comes into view (via intersection observer)
        if (hasMoreChildren(parentMeta.node)) {
          const paginationNode: PaginationNode = {
            __paginationNode: true,
          }
          const paginationTreeWalkerValue: TreeWalkerValue<TreeData, NodeMeta> =
            {
              data: {
                id: parentMeta.data.id + '-pagination',
                node: paginationNode,
                isOpenByDefault: false,
                getNextPageOfChildren: parentMeta.data.getNextPageOfChildren,
                isLeaf: true,
                isSelected: false,
                defaultHeight: itemSize(),
                isDisabled: true,
                nestingLevel: parentMeta.nestingLevel + 1,
                setSelectedId: () => {},
                treeNodeType,
              },
              nestingLevel: parentMeta.nestingLevel + 1,
              node: {
                __paginationNode: true,
              },
            }
          yield paginationTreeWalkerValue
        }
      }
    }
  }
}

export type VirtualizedTreeProps = Readonly<{
  treeNodeType: EntityTreeNodeType
  rootNodeConfiguration: RootNodeConfiguration
  setSelectedId: (entityId: string) => void
  selected: EntitySelectionMapType
  /* currentContainer is the container whose contents are shown on in the right pane in dual-pane configuration, and may only be defined when treeNodeType is DUAL_PANE */
  currentContainer?: string | 'root' | null
  autoExpand: (entityId: string) => boolean
  selectableTypes: EntityType[]
  visibleTypes: EntityType[]
}>

/**
 * Component that utilizes react-vtree to efficiently display a tree of entities. react-vtree utilizes react-window
 * to only render visible nodes, which eliminates performance issues as seen in SWC-5978.
 */
export const VirtualizedTree = (
  props: VirtualizedTreeProps,
): React.ReactNode => {
  const {
    rootNodeConfiguration,
    setSelectedId,
    treeNodeType,
    selected,
    currentContainer,
    selectableTypes,
    visibleTypes,
    autoExpand,
  } = props

  const { accessToken, keyFactory } = useSynapseContext()
  const queryClient = useQueryClient()

  const [rootNode, setRootNode] = useState<RootNodeConfiguration>(
    rootNodeConfiguration,
  )

  const treeInstance = useRef<VariableSizeTree<TreeData>>(null)

  useEffect(() => {
    setRootNode(rootNodeConfiguration)
  }, [rootNodeConfiguration, rootNodeConfiguration.children])

  // This function is used by VariableSizeTree to identify the size of each node in the tree.
  const itemSize = useCallback(
    (index?: number) => {
      /**
       * We must have a root node, but we don't always want to show it.
       * In those cases, set the height of the root node to 0.
       */
      if (index === 0 && !rootNodeConfiguration.show) {
        return 0
      }
      /**
       * The height of all other nodes in the tree varies depending on the tree node type.
       */
      return treeNodeType === EntityTreeNodeType.DUAL_PANE ? 30 : 60
    },
    [treeNodeType, rootNodeConfiguration.show],
  )

  /**
   * Fetches the next page of children for a given node. After fetching the children, this method will make a deep clone of the
   *  full tree, including the new data, and updates the state of the component
   */
  const fetchNextPageOfChildren = useCallback(
    // Because we update the root node with a copy at the end of this function, we can write to the node under update.
    async (node: Writable<EntityHeaderNode>) => {
      // Fetch the children of the node
      const entityChildrenRequest: EntityChildrenRequest = {
        parentId: node.id,
        nextPageToken: node.childrenNextPageToken,
        includeTypes: visibleTypes,
      }
      const children = await queryClient.fetchQuery({
        queryKey: keyFactory.getEntityChildrenQueryKey(
          entityChildrenRequest,
          false,
        ),
        queryFn: () => getEntityChildren(entityChildrenRequest, accessToken),
      })
      // Update the node data -- add the children and store the nextPageToken
      if (node.children) {
        for (const newChild of children.page) {
          // SWC-6751 - Prevent adding duplicate entries in case this function is called twice
          if (!node.children.find(child => child.id == newChild.id)) {
            node.children.push(newChild)
          }
        }
      } else {
        node.children = children.page
      }
      node.childrenNextPageToken = children.nextPageToken

      // Ensure the node for which we fetched children is expanded/open
      if (treeInstance.current) {
        await treeInstance.current.recomputeTree({
          [node.id]: {
            open: true,
          },
        })
      }

      // cloneDeep is required to re-render the tree with the new children
      setRootNode(cloneDeep(rootNode))
    },
    [visibleTypes, queryClient, keyFactory, rootNode, accessToken],
  )

  /**
   * treeWalker is a generator function used by react-vtree to generate the tree structure. The tree is re-built when the function is updated,
   * so the dependencies specified in useCallback are important.
   */
  const memoizedTreeWalker = useCallback(
    getTreeWalkerFunction(
      rootNode,
      setSelectedId,
      treeNodeType,
      selected,
      selectableTypes,
      autoExpand,
      itemSize,
      currentContainer,
      fetchNextPageOfChildren,
    ),
    [
      rootNode,
      setSelectedId,
      treeNodeType,
      selected,
      selectableTypes,
      autoExpand,
      currentContainer,
      fetchNextPageOfChildren,
      itemSize,
    ],
  )

  return (
    <AutoSizer disableWidth>
      {({ height }: { height: number }) => (
        <VariableSizeTree
          ref={treeInstance}
          treeWalker={memoizedTreeWalker}
          itemSize={itemSize}
          height={height}
          async={true}
          width="100%"
        >
          {Node}
        </VariableSizeTree>
      )}
    </AutoSizer>
  )
}
