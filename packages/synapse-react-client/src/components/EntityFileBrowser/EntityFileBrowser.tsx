import React, { useCallback, useState } from 'react'
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex'
import 'react-reflex/styles.css'
import { SizeMe } from 'react-sizeme'
import { Map } from 'immutable'
import {
  EntityDetailsList,
  EntityDetailsListDataConfiguration,
  EntityDetailsListDataConfigurationType,
} from '../EntityFinder/details/EntityDetailsList'
import {
  EntityTree,
  EntityTreeContainer,
  FinderScope,
} from '../EntityFinder/tree/EntityTree'
import { EntityTreeNodeType } from '../EntityFinder/tree/VirtualizedTree'
import { VersionSelectionType } from '../EntityFinder/VersionSelectionType'
import { EntityType, Reference } from '@sage-bionetworks/synapse-types'
import { useGetEntityBundle } from '../../synapse-queries'
import {
  BreadcrumbItem,
  Breadcrumbs,
  BreadcrumbsProps,
} from '../EntityFinder/Breadcrumbs'

export type EntityFileBrowserProps = {
  parentContainerId: string
  onSelect: (entity: Reference) => void
}

/**
 * Entity File Browser.  Essentially an EntityFinder where selection will call back (to change the page to the target entity)
 *
 * @returns
 */
export const EntityFileBrowser: React.FunctionComponent<
  EntityFileBrowserProps
> = ({ parentContainerId, onSelect }) => {
  const { data: entityBundle } = useGetEntityBundle(parentContainerId)
  const [currentContainer, setCurrentContainer] =
    useState<EntityTreeContainer>(parentContainerId)
  const [breadcrumbsProps, setBreadcrumbsProps] = useState<BreadcrumbsProps>({
    items: [],
  })
  const setBreadcrumbs = useCallback(
    (items: BreadcrumbItem[]) => {
      setBreadcrumbsProps({
        items,
      })
    },
    [setBreadcrumbsProps],
  )
  const projectId = entityBundle?.path.path[1].id ?? undefined
  const emptyMap = Map<string, number>()
  const types: EntityType[] = [EntityType.FOLDER, EntityType.FILE]

  const configuration: EntityDetailsListDataConfiguration = {
    type: EntityDetailsListDataConfigurationType.PARENT_CONTAINER,
    parentContainerId: currentContainer ?? undefined,
    getProjectParams: {
      sort: 'PROJECT_NAME',
    },
  }
  return (
    <div className="EntityFinderReflexContainer">
      <SizeMe>
        {({ size }) => (
          <ReflexContainer
            key={(!!size.width).toString()}
            orientation="vertical"
            windowResizeAware
          >
            <ReflexElement className="TreeViewReflexElement" flex={0.24}>
              <EntityTree
                selectedEntities={emptyMap}
                setDetailsViewConfiguration={() => {}}
                showDropdown={false}
                initialScope={FinderScope.CURRENT_PROJECT}
                projectId={projectId}
                initialContainer={parentContainerId}
                currentContainer={currentContainer}
                setCurrentContainer={setCurrentContainer}
                treeNodeType={EntityTreeNodeType.DUAL_PANE}
                setBreadcrumbItems={setBreadcrumbs}
                selectableTypes={types}
                hideScopeSelector={true}
                showScopeAsRootNode={false}
              />
            </ReflexElement>
            <ReflexSplitter></ReflexSplitter>
            <ReflexElement className="DetailsViewReflexElement">
              <EntityDetailsList
                configuration={configuration}
                versionSelection={VersionSelectionType.DISALLOWED}
                selected={emptyMap}
                isIdSelected={() => false}
                isSelectable={() => false}
                visibleTypes={types}
                selectableTypes={types}
                selectColumnType={'none'}
                toggleSelection={reference => {
                  if (Array.isArray(reference)) {
                    onSelect(reference[0])
                  } else {
                    onSelect(reference)
                  }
                }}
                enableSelectAll={false}
                setCurrentContainer={setCurrentContainer}
              />
              <Breadcrumbs {...breadcrumbsProps} />
            </ReflexElement>
          </ReflexContainer>
        )}
      </SizeMe>
    </div>
  )
}
