import pluralize from 'pluralize'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined'
import ClearIcon from '@mui/icons-material/Clear'
import SearchIcon from '@mui/icons-material/Search'
import { useErrorHandler } from 'react-error-boundary'
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex'
import 'react-reflex/styles.css'
import { SizeMe } from 'react-sizeme'
import SynapseClient from '../../synapse-client'
import {
  entityTypeToFriendlyName,
  getEntityTypeFromHeader,
} from '../../utils/functions/EntityTypeUtils'
import { parseSynId } from '../../utils/functions/RegularExpressions'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import { Reference } from '@sage-bionetworks/synapse-types'
import { EntityType } from '@sage-bionetworks/synapse-types'
import { KeyValue } from '@sage-bionetworks/synapse-types'
import { SynapseErrorBoundary } from '../error/ErrorBanner'
import { BreadcrumbItem, Breadcrumbs, BreadcrumbsProps } from './Breadcrumbs'
import {
  EntityDetailsList,
  EntityDetailsListDataConfiguration,
  EntityDetailsListDataConfigurationType,
} from './details/EntityDetailsList'
import { EntityFinderHeader } from './EntityFinderHeader'
import { SelectionPane } from './SelectionPane'
import { EntityTree, EntityTreeContainer, FinderScope } from './tree/EntityTree'
import { EntityTreeNodeType } from './tree/VirtualizedTree'
import { useEntitySelection } from './useEntitySelection'
import { VersionSelectionType } from './VersionSelectionType'

const DEFAULT_SELECTABLE_TYPES = Object.values(EntityType)
const TABLE_DEFAULT_VISIBLE_TYPES = Object.values(EntityType)
const TREE_DEFAULT_VISIBLE_TYPES = [EntityType.PROJECT, EntityType.FOLDER]

// In the map used to track selections, we use -1 to denote 'selected without version'
// This is necessary because undefined is returned by map.get when the item is not in the map
export const NO_VERSION_NUMBER = -1

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
  /** Whether or not it is possible to select multiple entities */
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
  /** The text to show before the list of selected entities */
  selectedCopy?: string | ((count: number) => string)
  /** Whether to show only the tree. If `true`, the tree will be used to make selections */
  treeOnly?: boolean
}

export const EntityFinder: React.FunctionComponent<EntityFinderProps> = ({
  initialScope,
  projectId,
  initialContainer = null,
  selectMultiple,
  onSelectedChange,
  versionSelection = VersionSelectionType.TRACKED,
  selectableTypes = DEFAULT_SELECTABLE_TYPES,
  visibleTypesInList = TABLE_DEFAULT_VISIBLE_TYPES,
  visibleTypesInTree = TREE_DEFAULT_VISIBLE_TYPES,
  selectedCopy = selectMultiple ? count => `Selected (${count})` : 'Selected',
  treeOnly = false,
}: EntityFinderProps) => {
  const { accessToken } = useSynapseContext()

  const [searchActive, setSearchActive] = useState(false)
  // The raw value of the search input box:
  const [searchInput, setSearchInput] = useState<string>()
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

  const searchInputRef = useRef<HTMLInputElement>(null)

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

  const [selectedEntities, toggleSelection] = useEntitySelection(selectMultiple)

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
    onSelectedChange(
      selectedEntities.toArray().map(([id, version]) => {
        return {
          targetId: id,
          targetVersionNumber:
            version === NO_VERSION_NUMBER ? undefined : version,
        }
      }),
    )
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

  const mainPanelClass = searchActive
    ? 'MainPanelSearch'
    : treeOnly
    ? 'MainPanelSinglePane'
    : 'MainPanelDualPane'

  let searchButtonText
  const tableArray = [
    'table',
    'entityview',
    'materializedview',
    'submissionview',
    'dataset',
    'datasetcollection',
  ]
  if (selectableTypes.length === 1) {
    searchButtonText = `Search for ${pluralize(
      entityTypeToFriendlyName(selectableTypes[0]),
    )}`
  } else if (selectableTypes.every(element => tableArray.includes(element))) {
    searchButtonText = 'Search for Tables'
  } else {
    searchButtonText = 'Search all of Synapse'
  }

  return (
    <SynapseErrorBoundary>
      <div className="EntityFinder">
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="stretch"
          pb={1}
        >
          <>
            {searchActive ? (
              <Button
                variant="outlined"
                color="primary"
                onClick={() => {
                  setSearchActive(false)
                  setSearchInput('')
                  setSearchTerms(undefined)
                }}
                startIcon={<ArrowBackOutlinedIcon />}
                sx={{ flexShrink: 0, mr: 1 }}
              >
                Back to Browse
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                className="EntityFinder__Search__SearchButton"
                onClick={() => {
                  setSearchActive(true)
                  searchInputRef.current!.focus()
                }}
                startIcon={<SearchIcon />}
                sx={{ flexShrink: 0 }}
              >
                {searchButtonText}
              </Button>
            )}
            <TextField
              className="EntityFinder__Search__Input"
              aria-hidden={!searchActive}
              data-active={searchActive}
              inputRef={searchInputRef}
              placeholder="Search by name, Wiki contents, or Synapse ID"
              value={searchInput}
              onChange={event => {
                setSearchInput(event.target.value)
              }}
              onKeyDown={(event: any) => {
                if (event.key === 'Enter') {
                  if (event.target.value === '') {
                    setSearchTerms(undefined)
                  } else {
                    setSearchTerms(event.target.value.trim().split(' '))
                  }
                }
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => {
                        setSearchInput('')
                        setSearchTerms(undefined)
                      }}
                      aria-label="Clear Search"
                      disabled={!searchInput}
                    >
                      <ClearIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </>
        </Box>
        <div className={`EntityFinder__MainPanel ${mainPanelClass}`}>
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
                </div>
              ) : (
                <div className="EntityFinderReflexContainer">
                  <SizeMe>
                    {({ size }) => (
                      <ReflexContainer
                        key={(!!size.width).toString()}
                        orientation="vertical"
                        windowResizeAware
                      >
                        <ReflexElement
                          className="TreeViewReflexElement"
                          flex={0.24}
                        >
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
                        </ReflexElement>
                        <ReflexSplitter></ReflexSplitter>
                        <ReflexElement className="DetailsViewReflexElement">
                          <EntityDetailsList
                            configuration={configFromTreeView}
                            versionSelection={versionSelection}
                            selected={selectedEntities}
                            isIdSelected={isIdSelected}
                            isSelectable={isSelectable}
                            visibleTypes={selectableAndVisibleTypesInList}
                            selectableTypes={selectableTypes}
                            selectColumnType={
                              selectMultiple ? 'checkbox' : 'none'
                            }
                            toggleSelection={toggleSelection}
                            enableSelectAll={selectMultiple}
                            setCurrentContainer={setCurrentContainer}
                          />
                          <Breadcrumbs {...breadcrumbsProps} />
                        </ReflexElement>
                      </ReflexContainer>
                    )}
                  </SizeMe>
                </div>
              )}
            </div>
          }
        </div>

        {selectedEntities.size > 0 && (
          <SelectionPane
            title={selectedCopy}
            selectedEntities={selectedEntities}
            toggleSelection={toggleSelection}
          />
        )}
      </div>
    </SynapseErrorBoundary>
  )
}

export default EntityFinder
