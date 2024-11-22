import React from 'react'
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex'
import 'react-reflex/styles.css'
import { SizeMe } from 'react-sizeme'
import { Map } from 'immutable'
import { Breadcrumbs } from '../EntityFinder/Breadcrumbs'
import { EntityDetailsList } from '../EntityFinder/details/EntityDetailsList'
import { EntityTree, FinderScope } from '../EntityFinder/tree/EntityTree'
import { EntityTreeNodeType } from '../EntityFinder/tree/VirtualizedTree'
import { VersionSelectionType } from '../EntityFinder/VersionSelectionType'
import { EntityType } from '@sage-bionetworks/synapse-types'

export type EntityFileBrowserProps = {
  parentContainerId: string
}

/**
 * Entity File Browser.  Essentially an EntityFinder where selection will call back (to change the page to the target entity)
 *
 * @returns
 */
export const EntityFileBrowser: React.FunctionComponent<
  EntityFileBrowserProps
> = ({ parentContainerId }) => {
  const emptyMap = Map<string, number>()
  const visibleTypes: EntityType[] = [EntityType.FOLDER, EntityType.FILE]
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
                setDetailsViewConfiguration={setConfigFromTreeView}
                showDropdown={false}
                visibleTypes={visibleTypes}
                initialScope={FinderScope.CURRENT_PROJECT}
                projectId={projectId}
                initialContainer={parentContainerId}
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
                versionSelection={VersionSelectionType.DISALLOWED}
                selected={emptyMap}
                isIdSelected={() => false}
                isSelectable={() => false}
                visibleTypes={selectableAndVisibleTypesInList}
                selectableTypes={selectableTypes}
                selectColumnType={'none'}
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
  )
}
