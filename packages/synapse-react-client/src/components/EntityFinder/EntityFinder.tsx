import SynapseClient from '@/synapse-client'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import { getEntityTypeFromHeader } from '@/utils/functions/EntityTypeUtils'
import { parseSynId } from '@/utils/functions/RegularExpressions'
import ClearIcon from '@mui/icons-material/Clear'
import SearchIcon from '@mui/icons-material/Search'
import {
  Box,
  Chip,
  IconButton,
  InputAdornment,
  Stack,
  Tab,
  Tabs,
  TextField,
} from '@mui/material'
import { EntityType } from '@sage-bionetworks/synapse-client'
import { KeyValue, Reference } from '@sage-bionetworks/synapse-types'
import { Map } from 'immutable'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useErrorHandler } from 'react-error-boundary'
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex'
import 'react-reflex/styles.css'
import { SynapseErrorBoundary } from '../error/ErrorBanner'
import { BreadcrumbItem, Breadcrumbs, BreadcrumbsProps } from './Breadcrumbs'
import {
  EntityDetailsList,
  EntityDetailsListDataConfiguration,
  EntityDetailsListDataConfigurationType,
  EntityDetailsListProps,
} from './details/EntityDetailsList'
import { EntityFinderHeader } from './EntityFinderHeader'
import { EntityTree, EntityTreeContainer, FinderScope } from './tree/EntityTree'
import { EntityTreeNodeType } from './tree/VirtualizedTree'
import { useEntitySelection } from './useEntitySelection'
import { VersionSelectionType } from './VersionSelectionType'

const DEFAULT_SELECTABLE_TYPES = Object.values(EntityType)
const TABLE_DEFAULT_VISIBLE_TYPES = Object.values(EntityType)
const TREE_DEFAULT_VISIBLE_TYPES = [EntityType.project, EntityType.folder]

const searchForOnlyTypesBooleanQuery = (
  entityTypes: EntityType[],
): KeyValue[] => {
  // Boolean query terms will be combined with AND, and there's no way to OR.
  // So we will negate searching for all omitted types.
  const allTypes = Object.values(EntityType)
  const typesToOmit = allTypes.filter(type => !entityTypes.includes(type))
  return typesToOmit.map(type => ({
    key: 'node_type',
    value: type.toString(),
    not: true,
  }))
}

export type EntityFinderProps = {
  /** Whether it is possible to select multiple entities */
  selectMultiple: boolean
  /** Callback invoked when the selection changes */
  onSelectedChange: (selected: Reference[]) => void
  /** The initial appearance of the entity finder. Possible values include "Current Project", "All Projects", "Projects Created By Me", "My Favorites" */
  initialScope: FinderScope
  /** The SynID of the 'Current Project'. If this is not a defined, then the scope cannot be "Current Project" */
  projectId?: string
  /** The SynID of the entity that should open by default. If this is a Syn ID, then it must be in the project specified in `projectId` */
  initialContainer: string | 'root' | null
  /** Determines if versions are selectable, and if so, how they should be shown. Default is "TRACKED" */
  versionSelection?: VersionSelectionType
  /** The entity types to show in the details view (right pane). Any types specified in `selectableTypes` will automatically be included. */
  visibleTypesInList?: EntityType[]
  /** The entity types that may be selected. Types in `visibleTypesInList` that are not in `selectableTypes` will appear as disabled options. Only the types in `selectableTypes` will appear in search */
  selectableTypes?: EntityType[]
  /** The types to show in the tree used to navigate. If `treeOnly` is true, any types specified in `selectableTypes` will automatically be included. */
  visibleTypesInTree?: EntityType[]
  /** Whether to show only the tree. If `true`, the tree will be used to make selections */
  treeOnly?: boolean
  /** If provided, the initial selection will be set to this list of references. The selection will be reset to this value if this object changes, so it should be memoized. */
  initialSelected?: Reference[]
}

enum EntityFinderTab {
  BROWSE,
  SELECTED,
}

export function EntityFinder({
  initialScope,
  projectId,
  initialContainer = null,
  selectMultiple,
  onSelectedChange,
  versionSelection = VersionSelectionType.TRACKED,
  selectableTypes = DEFAULT_SELECTABLE_TYPES,
  visibleTypesInList = TABLE_DEFAULT_VISIBLE_TYPES,
  visibleTypesInTree = TREE_DEFAULT_VISIBLE_TYPES,
  treeOnly = false,
  initialSelected,
}: EntityFinderProps): React.ReactNode {
  const { accessToken } = useSynapseContext()
  const [currentTab, setCurrentTab] = React.useState(EntityFinderTab.BROWSE)

  const [searchActive, setSearchActive] = useState(false)
  // The raw value of the search input box:
  const [searchInput, setSearchInput] = useState<string>('')
  // The "parsed" search terms, which are only calculated when Enter is pressed:
  const [searchTerms, setSearchTerms] = useState<string[]>()
  const [breadcrumbsProps, setBreadcrumbsProps] = useState<BreadcrumbsProps>({
    items: [],
  })
  const [searchByIdResults, setSearchByIdResults] = useState<
    EntityFinderHeader[]
  >([])
  const [configFromTreeView, setConfigFromTreeView] =
    useState<EntityDetailsListDataConfiguration>({
      type: EntityDetailsListDataConfigurationType.PROMPT,
    })

  // If a type is selectable, it should be visible in the tree/list (depending on treeOnly)
  const selectableAndVisibleTypesInTree = useMemo(
    () => [...visibleTypesInTree, ...selectableTypes],
    [visibleTypesInTree, selectableTypes],
  )
  const selectableAndVisibleTypesInList = useMemo(
    () => [...visibleTypesInList, ...selectableTypes],
    [visibleTypesInList, selectableTypes],
  )

  // For dual-pane, this state variable indicates which container is selected in the tree view and should be shown in the table view
  const [currentContainer, setCurrentContainer] =
    useState<EntityTreeContainer>(initialContainer)

  const handleError = useErrorHandler()

  const setBreadcrumbs = useCallback(
    (items: BreadcrumbItem[]) => {
      setBreadcrumbsProps({
        items,
      })
    },
    [setBreadcrumbsProps],
  )

  const { selectedEntities, toggleSelection, setSelection } =
    useEntitySelection(selectMultiple)

  useEffect(() => {
    if (initialSelected) {
      let map = Map<string, Reference>()
      map = map.withMutations(mutableMap => {
        initialSelected.forEach(reference => {
          mutableMap.set(reference.targetId, reference)
        })
      })

      setSelection(map)
    }
  }, [initialSelected, setSelection])

  // A snapshot of the selectedEntities used to populate the selection list, allowing deselection of entities without removing them from the list.
  const [selectedEntitiesSnapshot, setSelectedEntitiesSnapshot] =
    useState(selectedEntities)

  const isIdSelected = useCallback(
    (entity: EntityFinderHeader) => {
      return selectedEntities.has(entity.id)
    },
    [selectedEntities],
  )

  const isSelectable = useCallback(
    (entity: EntityFinderHeader) => {
      const type = getEntityTypeFromHeader(entity)
      return selectableTypes.includes(type)
    },
    [selectableTypes],
  )

  useEffect(() => {
    // When it changes, convert the map of selected items to a list of references and invoke the callback
    onSelectedChange(Array.from(selectedEntities.values()))
  }, [selectedEntities, onSelectedChange])

  useEffect(() => {
    if (searchTerms?.length === 1) {
      const searchTermReference = parseSynId(searchTerms[0])
      if (searchTermReference) {
        SynapseClient.getEntityHeaders([searchTermReference], accessToken)
          .then(response => {
            setSearchByIdResults(response.results)
          })
          .catch(e => handleError(e))
      }
    } else {
      setSearchByIdResults([])
    }
  }, [accessToken, searchTerms, handleError])

  const handleTabChange = (
    _event: React.SyntheticEvent,
    newValue: EntityFinderTab,
  ) => {
    setSelectedEntitiesSnapshot(selectedEntities)
    setCurrentTab(newValue)
  }

  const mainPanelClass = searchActive
    ? 'MainPanelSearch'
    : treeOnly
    ? 'MainPanelSinglePane'
    : 'MainPanelDualPane'

  const entityDetailsListProps: EntityDetailsListProps = {
    configuration: configFromTreeView,
    versionSelection: versionSelection,
    selected: selectedEntities,
    isIdSelected: isIdSelected,
    isSelectable: isSelectable,
    visibleTypes: selectableAndVisibleTypesInList,
    selectableTypes: selectableTypes,
    selectColumnType: selectMultiple ? 'checkbox' : 'none',
    toggleSelection: toggleSelection,
    enableSelectAll: selectMultiple,
    setCurrentContainer: setCurrentContainer,
  }

  return (
    <SynapseErrorBoundary>
      <div className="EntityFinder">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mb: 2.5,
            rowGap: 2,
            columnGap: 4,
            flexWrap: { xs: 'wrap', md: 'nowrap' },
          }}
        >
          <Tabs
            value={currentTab}
            onChange={handleTabChange}
            sx={{ flex: 'none' }}
          >
            <Tab value={EntityFinderTab.BROWSE} label={'Browse'}></Tab>
            <Tab
              value={EntityFinderTab.SELECTED}
              label={
                <Stack
                  direction={'row'}
                  sx={{
                    gap: 0.5,
                    alignItems: 'center',
                  }}
                >
                  <span>Selected</span>
                  <Chip
                    size={'small'}
                    label={selectedEntities.size.toLocaleString()}
                    sx={{
                      backgroundColor: 'tertiary.500',
                      color: 'grey.900',
                      height: '21px',
                    }}
                  ></Chip>
                </Stack>
              }
            ></Tab>
          </Tabs>
          <TextField
            size={'small'}
            placeholder="Search by name, wiki content, or SynID"
            value={searchInput}
            onChange={event => {
              setSearchInput(event.target.value)
            }}
            onKeyDown={(event: any) => {
              if (event.key === 'Enter') {
                const trimmedInput = event.target.value.trim()
                setSearchActive(!!trimmedInput)
                if (trimmedInput) {
                  setSearchTerms(trimmedInput.split(/\s+/))
                  setCurrentTab(EntityFinderTab.BROWSE)
                }
              }
            }}
            sx={{
              maxWidth: { xs: '100%', md: '350px' },
              flex: '1 1 350px',
            }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                endAdornment: searchTerms ? (
                  <InputAdornment position="end">
                    <IconButton
                      size={'small'}
                      onClick={() => {
                        setSearchInput('')
                        setSearchTerms(undefined)
                        setSearchActive(false)
                      }}
                      aria-label="Clear Search"
                      disabled={!searchInput && !searchActive}
                    >
                      <ClearIcon />
                    </IconButton>
                  </InputAdornment>
                ) : undefined,
              },
            }}
          />
        </Box>
        <div
          role={'tabpanel'}
          className={`EntityFinder__MainPanel ${mainPanelClass}`}
          style={{
            display: currentTab === EntityFinderTab.BROWSE ? 'block' : 'none',
          }}
        >
          {/* We have a separate Details component for search in order to preserve state in the other component between searches */}
          {searchActive && (
            <EntityDetailsList
              configuration={
                searchByIdResults && searchByIdResults.length > 0
                  ? {
                      type: EntityDetailsListDataConfigurationType.HEADER_LIST,
                      headerList: searchByIdResults,
                    }
                  : {
                      type: EntityDetailsListDataConfigurationType.ENTITY_SEARCH,
                      query: {
                        queryTerm: searchTerms,
                        booleanQuery:
                          searchForOnlyTypesBooleanQuery(selectableTypes),
                      },
                    }
              }
              versionSelection={versionSelection}
              selectColumnType={selectMultiple ? 'checkbox' : 'none'}
              selected={selectedEntities}
              isIdSelected={isIdSelected}
              isSelectable={isSelectable}
              visibleTypes={selectableTypes}
              selectableTypes={selectableTypes}
              toggleSelection={toggleSelection}
              enableSelectAll={selectMultiple}
              // Intentionally do not pass "setCurrentContainer" -- search does not use the tree so it has nothing to update
              setCurrentContainer={undefined}
            />
          )}
          {
            <div style={searchActive ? { display: 'none' } : {}}>
              {treeOnly ? (
                <div>
                  <SynapseErrorBoundary>
                    <EntityTree
                      toggleSelection={toggleSelection}
                      showDropdown={true}
                      visibleTypes={selectableAndVisibleTypesInTree}
                      initialScope={initialScope}
                      selectedEntities={selectedEntities}
                      projectId={projectId}
                      initialContainer={initialContainer}
                      currentContainer={currentContainer}
                      setCurrentContainer={setCurrentContainer}
                      showScopeAsRootNode={false}
                      treeNodeType={EntityTreeNodeType.SINGLE_PANE}
                      selectableTypes={selectableTypes}
                    />
                  </SynapseErrorBoundary>
                </div>
              ) : (
                <div className="EntityFinderReflexContainer">
                  <ReflexContainer orientation="vertical" windowResizeAware>
                    <ReflexElement
                      className="TreeViewReflexElement"
                      flex={0.24}
                    >
                      <SynapseErrorBoundary>
                        <EntityTree
                          selectedEntities={selectedEntities}
                          setDetailsViewConfiguration={setConfigFromTreeView}
                          showDropdown={true}
                          visibleTypes={visibleTypesInTree}
                          initialScope={initialScope}
                          projectId={projectId}
                          initialContainer={initialContainer}
                          currentContainer={currentContainer}
                          setCurrentContainer={setCurrentContainer}
                          treeNodeType={EntityTreeNodeType.DUAL_PANE}
                          setBreadcrumbItems={setBreadcrumbs}
                          selectableTypes={visibleTypesInTree}
                        />
                      </SynapseErrorBoundary>
                    </ReflexElement>
                    <ReflexSplitter></ReflexSplitter>
                    <ReflexElement className="DetailsViewReflexElement">
                      <SynapseErrorBoundary>
                        <EntityDetailsList {...entityDetailsListProps} />
                        <Breadcrumbs {...breadcrumbsProps} />
                      </SynapseErrorBoundary>
                    </ReflexElement>
                  </ReflexContainer>
                </div>
              )}
            </div>
          }
        </div>
        <div
          role={'tabpanel'}
          className={'MainPanelSelected'}
          style={{
            display: currentTab === EntityFinderTab.SELECTED ? 'block' : 'none',
          }}
        >
          <EntityDetailsList
            {...entityDetailsListProps}
            configuration={{
              type: EntityDetailsListDataConfigurationType.REFERENCE_LIST,
              referenceList: Array.from(selectedEntitiesSnapshot.values()),
            }}
          />
        </div>
      </div>
    </SynapseErrorBoundary>
  )
}

export default EntityFinder
