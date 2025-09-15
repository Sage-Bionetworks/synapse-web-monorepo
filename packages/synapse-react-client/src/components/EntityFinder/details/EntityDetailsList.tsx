import { getIsAllSelectedFromInfiniteList } from '@/utils/hooks/useGetIsAllSelectedInfiniteList'
import { EntityType } from '@sage-bionetworks/synapse-client'
import {
  GetProjectsParameters,
  Reference,
  SearchQuery,
} from '@sage-bionetworks/synapse-types'
import { Dispatch, SetStateAction, useState } from 'react'
import useDeepCompareEffect from 'use-deep-compare-effect'
import { SynapseErrorBoundary } from '../../error/ErrorBanner'
import { EntityFinderHeader } from '../EntityFinderHeader'
import { EntityTreeContainer } from '../tree/EntityTree'
import { EntitySelectionMapType } from '../useEntitySelection'
import { VersionSelectionType } from '../VersionSelectionType'
import { EntityChildrenDetails } from './configurations/EntityChildrenDetails'
import { FavoritesDetails } from './configurations/FavoritesDetails'
import { ProjectListDetails } from './configurations/ProjectListDetails'
import { ReferenceDetails } from './configurations/ReferenceDetails'
import { SearchDetails } from './configurations/SearchDetails'
import { DetailsView, DetailsViewColumn } from './view/DetailsView'

export enum EntityDetailsListDataConfigurationType {
  REFERENCE_LIST, // Provide references to show in the DetailsList. Incompatible with pagination
  HEADER_LIST, // simply displays one or more entity headers. incompatible with pagination
  PARENT_CONTAINER, // retrieve the children for a given entity ID
  USER_PROJECTS, // retrieve the user's projects (using the parameters)
  USER_FAVORITES, // retrieve the user's favorites (using the parameters)
  ENTITY_SEARCH, // Search for an entity
  PROMPT, // Show no entities and instruct the user to make a selection
}

export type EntityDetailsListDataConfiguration = {
  type: EntityDetailsListDataConfigurationType
  /** Defined if type is REFERENCE_LIST */
  referenceList?: Reference[]
  /** Defined if type is HEADER_LIST */
  headerList?: Pick<EntityFinderHeader, 'id' | 'name' | 'type'>[]
  /** Defined if type is PARENT_CONTAINER */
  parentContainerId?: string
  /** Defined if type is USER_PROJECTS */
  getProjectParams?: GetProjectsParameters
  /** Defined if type is ENTITY_SEARCH */
  query?: SearchQuery
}

/**
 * These props are set by a parent to this component, but they are not affected by the configuration.
 * We collect them into this type to simplify passing them through to the view.
 */
export type EntityDetailsListSharedProps = {
  versionSelection: VersionSelectionType
  selectColumnType: 'checkbox' | 'none'
  enableSelectAll: boolean
  visibleTypes: EntityType[]
  selected: EntitySelectionMapType
  selectableTypes: EntityType[]
  isIdSelected: (header: EntityFinderHeader) => boolean
  isSelectable: (header: EntityFinderHeader) => boolean
  toggleSelection: (entity: Reference | Reference[]) => void
  setCurrentContainer?: Dispatch<SetStateAction<EntityTreeContainer>>
  /** Chosen columns to hide. Defaults to just the DirectDownload column. */
  hiddenColumns?: DetailsViewColumn[]
}

export type EntityDetailsListProps = EntityDetailsListSharedProps & {
  configuration: EntityDetailsListDataConfiguration
}

export function EntityDetailsList({
  configuration,
  ...sharedProps
}: EntityDetailsListProps) {
  /**
   * This component simply uses the data configuration prop to determine which configuration component
   * to use. Each configuration component has its own logic to utilize different Synapse APIs.
   * The configuration components also manage view props that are more tightly-coupled with data,
   * such as pagination and sorting.
   *
   * In the future, if we wanted to reuse this in other contexts (e.g. not selecting entities), we should consider refactoring
   * to support different 'Row' components, with the correct component determined at this level.
   */

  const [component, setComponent] = useState(<></>)

  useDeepCompareEffect(() => {
    const getComponentFromConfiguration = (
      config: EntityDetailsListDataConfiguration,
    ) => {
      switch (config.type) {
        case EntityDetailsListDataConfigurationType.PARENT_CONTAINER:
          return (
            <EntityChildrenDetails
              parentContainerId={config.parentContainerId!}
              {...sharedProps}
            />
          )

        case EntityDetailsListDataConfigurationType.HEADER_LIST:
          return (
            <DetailsView
              entities={config.headerList as EntityFinderHeader[]}
              isLoading={false}
              hasNextPage={false}
              {...sharedProps}
              enableSelectAll={sharedProps.enableSelectAll}
              selectAllIsChecked={getIsAllSelectedFromInfiniteList(
                (config.headerList as EntityFinderHeader[]) ?? [],
                sharedProps.selected.size,
                sharedProps.isIdSelected,
                sharedProps.isSelectable,
              )}
            />
          )
        case EntityDetailsListDataConfigurationType.REFERENCE_LIST:
          return (
            <ReferenceDetails
              {...sharedProps}
              references={config.referenceList!}
            />
          )
        case EntityDetailsListDataConfigurationType.USER_FAVORITES:
          return <FavoritesDetails {...sharedProps} />
        case EntityDetailsListDataConfigurationType.ENTITY_SEARCH:
          return <SearchDetails searchQuery={config.query!} {...sharedProps} />

        case EntityDetailsListDataConfigurationType.USER_PROJECTS:
          return (
            <ProjectListDetails
              projectsParams={config.getProjectParams!}
              {...sharedProps}
            />
          )
        case EntityDetailsListDataConfigurationType.PROMPT:
          return (
            <DetailsView
              entities={[]}
              isLoading={false}
              noResultsPlaceholder={
                <div>
                  Use the left panel to browse Synapse, then make a selection in
                  this panel
                </div>
              }
              {...sharedProps}
              enableSelectAll={false}
            />
          )

        default:
          console.warn(
            'The configuration type does not map to a known view type. No Details view will be rendered. Invalid configuration: ',
            config,
          )
          return <></>
      }
    }
    setComponent(getComponentFromConfiguration(configuration))
  }, [configuration, sharedProps])

  return <SynapseErrorBoundary>{component}</SynapseErrorBoundary>
}
