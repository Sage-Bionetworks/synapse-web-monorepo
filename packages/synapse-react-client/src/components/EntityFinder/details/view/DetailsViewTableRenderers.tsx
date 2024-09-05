import { Checkbox, Skeleton, Tooltip } from '@mui/material'
import BaseTable, {
  CallOrReturn,
  ColumnShape,
  SortOrder,
} from '@sage-bionetworks/react-base-table'
import dayjs from 'dayjs'
import React, { SyntheticEvent, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import SortIcon from '../../../../assets/icons/Sort'
import { formatDate } from '../../../../utils/functions/DateFormatter'
import { isTableType } from '../../../../utils/functions/EntityTypeUtils'
import {
  useGetEntity,
  useGetVersionsInfinite,
} from '../../../../synapse-queries/entity/useEntity'
import useGetEntityBundle from '../../../../synapse-queries/entity/useEntityBundle'
import {
  EntityRef,
  EntityType,
  Reference,
} from '@sage-bionetworks/synapse-types'
import { EntityBadgeIcons } from '../../../EntityBadgeIcons/EntityBadgeIcons'
import { EntityTypeIcon } from '../../../EntityIcon'
import { EntityLink } from '../../../EntityLink'
import IconSvg from '../../../IconSvg/IconSvg'
import { SynapseSpinner } from '../../../LoadingScreen/LoadingScreen'
import { DatasetItemsEditorTableData } from '../../../SynapseTable/datasets/DatasetItemsEditor'
import { NO_VERSION_NUMBER } from '../../EntityFinder'
import { VersionSelectionType } from '../../VersionSelectionType'
import { EntityFinderTableViewRowData } from './DetailsView'
import { UserBadge } from '../../../UserCard/UserBadge'

// TODO: Consider sharing logic with SynapseTableCell.tsx

export type CellRendererProps<T> = {
  cellData: any
  columns: ColumnShape<T>[]
  column: ColumnShape<T>
  columnIndex: number
  rowData: T
  rowIndex: number
  container: BaseTable<T>
  isScrolling?: boolean
}

export type CellRenderer<T> = CallOrReturn<
  React.ReactNode,
  CellRendererProps<T>
>

/**
 * The data across tables may differ, but it has entity ID and version, then it can use many of these renderers
 */
export type EntityIdAndVersionNumber = {
  entityId: string
  versionNumber?: number
}

export const CustomSortIndicator = ({
  className,
  sortOrder,
}: {
  className: string
  sortOrder: SortOrder
}) => {
  return (
    <SortIcon
      className={className}
      active={true}
      role="button"
      style={{ height: '20px', marginLeft: 'auto' }}
      direction={sortOrder}
    />
  )
}

/**
 * Renders Entity Badges using the entity bundle.
 * @param props
 * @returns
 */
export function BadgeIconsRenderer<T extends EntityIdAndVersionNumber>(
  props: CellRendererProps<T>,
) {
  return (
    <EntityBadgeIcons
      entityId={props.rowData.entityId}
      versionNumber={props.rowData.versionNumber}
      showHasDiscussionThread={false}
      showHasWiki={false}
      showUnlink={false}
      canOpenModal={false}
      // We render the tooltip component outside of the table so it plays nicely with list virtualization
      // https://github.com/wwayne/react-tooltip/issues/300#issuecomment-468042592
      renderTooltipComponent={false}
    />
  )
}

export function DateRenderer({ cellData }: { cellData?: string }) {
  return <>{(cellData && formatDate(dayjs(cellData))) ?? <></>}</>
}

/**
 * Renders 'modifiedOn' from the entity bundle.
 * @param props
 * @returns
 */
export function ModifiedOnRenderer<T extends EntityIdAndVersionNumber>(
  props: CellRendererProps<T>,
) {
  const { data: bundle, isLoading } = useGetEntityBundle(
    props.rowData.entityId,
    props.rowData.versionNumber,
  )

  if (isLoading) {
    return <Skeleton width={200} />
  }

  return <DateRenderer {...props} cellData={bundle?.entity.modifiedOn} />
}

/**
 * Renders 'createdOn' from the entity bundle.
 * @param props
 * @returns
 */
export function CreatedOnRenderer<T extends EntityIdAndVersionNumber>(
  props: CellRendererProps<T>,
) {
  const { data: bundle, isLoading } = useGetEntityBundle(
    props.rowData.entityId,
    props.rowData.versionNumber,
  )

  if (isLoading) {
    return <Skeleton width={200} />
  }

  return <DateRenderer {...props} cellData={bundle?.entity?.createdOn} />
}

export function EntityNameRenderer<T extends EntityIdAndVersionNumber>(
  props: CellRendererProps<T>,
) {
  const { data: bundle, isLoading } = useGetEntityBundle(
    props.rowData.entityId,
    props.rowData.versionNumber,
  )
  if (isLoading) {
    return <Skeleton width={200} />
  }

  return bundle ? (
    <EntityLink
      className="EntityNameWithIconRenderer"
      entity={bundle.entity}
      link={false}
    />
  ) : (
    <></>
  )
}

export function ProjectRenderer<T extends EntityIdAndVersionNumber>(
  props: CellRendererProps<T>,
) {
  const { data: entityBundle, isLoading: isLoadingBundle } = useGetEntityBundle(
    props.rowData.entityId,
    props.rowData.versionNumber,
  )
  const { data: project, isLoading: isLoadingProjectEntity } = useGetEntity(
    entityBundle?.path.path[1].id ?? '',
    undefined,
    { enabled: !!entityBundle },
  )

  if (isLoadingBundle || isLoadingProjectEntity) {
    return <Skeleton width={200} />
  }

  return project ? <EntityLink entity={project} /> : <></>
}

export function UserBadgeRenderer({ cellData }: { cellData?: string }) {
  return cellData ? (
    <UserBadge userId={cellData} openLinkInNewTab={true} />
  ) : (
    <></>
  )
}

/**
 * Renders 'modifiedBy' from the entity bundle.
 * @param props
 * @returns
 */
export function ModifiedByRenderer<T extends EntityIdAndVersionNumber>(
  props: CellRendererProps<T>,
) {
  const { data: bundle, isLoading } = useGetEntityBundle(
    props.rowData.entityId,
    props.rowData.versionNumber,
  )

  if (isLoading) {
    return <Skeleton width={200} />
  }

  return <UserBadgeRenderer {...props} cellData={bundle?.entity.modifiedBy} />
}

export function LoadingRenderer() {
  return (
    <div className="EntityFinderDetailsViewPlaceholder">
      <SynapseSpinner size={30} />
    </div>
  )
}

export const DetailsViewCheckboxRenderer: ColumnShape<EntityFinderTableViewRowData>['cellRenderer'] =
  props => {
    const { rowData } = props
    const { isSelected, isDisabled } = rowData
    return (
      !isDisabled && (
        <Checkbox
          inputProps={{ 'aria-label': `Select ${rowData.entityId}` }}
          checked={isSelected}
          onChange={() => {
            // no-op
          }}
        />
      )
    )
  }

export const TypeIconRenderer: ColumnShape<EntityFinderTableViewRowData>['cellRenderer'] =
  props => {
    const { cellData } = props
    return (
      <EntityTypeIcon
        className="EntityFinderTableCellEntityIcon"
        type={cellData as EntityType}
      />
    )
  }

export function EmptyRenderer({
  noResultsPlaceholder,
}: {
  noResultsPlaceholder: React.ReactNode
}) {
  return (
    <div className="EntityFinderDetailsViewPlaceholder">
      {noResultsPlaceholder || <div>Empty</div>}
    </div>
  )
}

export const DatasetEditorVersionRenderer = ({
  rowData,
  toggleSelection,
}: CellRendererProps<DatasetItemsEditorTableData> & {
  toggleSelection: (entity: EntityRef) => void
}) => {
  const { entityId, versionNumber } = rowData

  const {
    data: versionData,
    isError,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGetVersionsInfinite(entityId, {
    staleTime: 60 * 1000, // 60 seconds
  })
  const versions = versionData?.pages.flatMap(page => page.results) ?? []
  const currentVersionHasBeenRetrieved = !!versions.find(
    version => version.versionNumber === versionNumber,
  )
  useEffect(() => {
    if (!currentVersionHasBeenRetrieved && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [
    currentVersionHasBeenRetrieved,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  ])

  if (isError) {
    return <>{versionNumber}</>
  }

  return (
    <div>
      {versions && versions.length > 0 && (
        <Form.Control
          role="listbox"
          size="sm"
          as="select"
          value={versionNumber}
          onClick={(event: SyntheticEvent<HTMLSelectElement>) => {
            event.stopPropagation()
          }}
          onChange={event => {
            event.stopPropagation()
            const version = parseInt(event.target.value)
            toggleSelection({
              entityId: entityId,
              versionNumber: version,
            })
          }}
        >
          {
            /* The selected version number doesn't exist */
            !currentVersionHasBeenRetrieved &&
              !hasNextPage &&
              !isFetchingNextPage && (
                <option disabled key={versionNumber} value={versionNumber}>
                  {versionNumber} (Not Found)
                </option>
              )
          }
          {versions.map(version => {
            return (
              <option key={version.versionNumber} value={version.versionNumber}>
                {version.versionNumber}
                {version.isLatestVersion && ' (Latest)'}
              </option>
            )
          })}
        </Form.Control>
      )}
    </div>
  )
}

function getLatestVersionText(
  versionSelection: VersionSelectionType,
  entityType: EntityType,
) {
  let versionDisplay = 'Latest'
  let snapshotDisplay = ''
  if (isTableType(entityType)) {
    if (entityType === EntityType.DATASET) {
      versionDisplay = 'Draft'
      snapshotDisplay = 'Stable Version'
    } else {
      versionDisplay = 'Current'
      snapshotDisplay = 'Snapshot'
    }
  }

  if (versionSelection === VersionSelectionType.TRACKED) {
    return `Always ${versionDisplay} Version`
  } else if (versionSelection === VersionSelectionType.REQUIRED) {
    return (
      <>
        {versionDisplay}

        <IconSvg
          icon="helpOutlineTwoTone"
          label={`No ${snapshotDisplay} exists. The ${versionDisplay} version will be referenced until a new ${snapshotDisplay} is created.`}
          sx={{
            width: '12px',
            paddingLeft: '0.2rem',
          }}
        />
      </>
    )
  }

  return `${versionDisplay} Version`
}

export const DetailsViewVersionRenderer = ({
  rowData,
  versionSelection,
  toggleSelection,
}: CellRendererProps<EntityFinderTableViewRowData> & {
  versionSelection: VersionSelectionType
  toggleSelection: (entity: Reference | Reference[]) => void
}) => {
  const {
    id,
    entityType,
    isVersionableEntity,
    isSelected,
    currentSelectedVersion,
  } = rowData
  const { data: versionData } = useGetVersionsInfinite(id, {
    enabled: isVersionableEntity,
    staleTime: 60 * 1000, // 60 seconds
  })
  const versions = versionData?.pages.flatMap(page => page.results) ?? []

  useEffect(() => {
    // If VersionSelectionType.REQUIRED, and the user has selected this entity and hasn't selected a version, then we force a version selection
    if (
      isSelected &&
      versionSelection == VersionSelectionType.REQUIRED &&
      currentSelectedVersion === NO_VERSION_NUMBER &&
      versions.length > 0
    ) {
      toggleSelection({
        targetId: id,
        targetVersionNumber: versions[0].versionNumber,
      })
    }
  }, [
    currentSelectedVersion,
    id,
    isSelected,
    versionSelection,
    toggleSelection,
    versions,
  ])

  const showLatestVersion =
    versionSelection === VersionSelectionType.TRACKED ||
    (versionSelection === VersionSelectionType.UNTRACKED &&
      isTableType(entityType))

  const latestVersionText = getLatestVersionText(versionSelection, entityType)

  if (!isSelected || !isVersionableEntity) {
    return <></>
  }

  return (
    <div>
      {versions && versions.length > 0 ? (
        <Form.Control
          role="listbox"
          size="sm"
          as="select"
          value={currentSelectedVersion}
          onClick={(event: SyntheticEvent<HTMLSelectElement>) => {
            event.stopPropagation()
          }}
          onChange={event => {
            event.stopPropagation()
            const version = parseInt(event.target.value)
            toggleSelection({
              targetId: id,
              targetVersionNumber:
                version === NO_VERSION_NUMBER ? undefined : version,
            })
          }}
        >
          {showLatestVersion && (
            <option value={NO_VERSION_NUMBER}>{latestVersionText}</option>
          )}
          {versions.map(version => {
            return (
              <option key={version.versionNumber} value={version.versionNumber}>
                Version {version.versionNumber}
              </option>
            )
          })}
        </Form.Control>
      ) : (
        latestVersionText
      )}
    </div>
  )
}

export function DatasetEditorCheckboxRenderer<
  T extends EntityIdAndVersionNumber & {
    isSelected: boolean
    isDisabled?: boolean
    setSelected: (newValue: boolean) => void
  },
>(props: CellRendererProps<T>) {
  const { isSelected, isDisabled, setSelected, entityId } = props.rowData
  return (
    !isDisabled && (
      <Checkbox
        disabled={isDisabled}
        inputProps={{ 'aria-label': `Select ${entityId}` }}
        checked={isSelected}
        onChange={(_event, checked) => {
          setSelected(checked)
        }}
      />
    )
  )
}

export const EntityErrorRenderer = <T extends EntityIdAndVersionNumber>(
  props: CellRendererProps<T>,
) => {
  const { entityId, versionNumber } = props.rowData
  const { error, isError } = useGetEntity(entityId, versionNumber)

  let message = error?.reason

  if (error?.status === 403) {
    message = "You don't have permission to view this entity."
  } else if (error?.status === 404) {
    message = 'The entity or version does not exist. It may have been deleted.'
  }

  if (!isError) {
    return <></>
  } else {
    return (
      <Tooltip
        title={message ?? ''}
        placement="right"
        className="EntityBadgeTooltip"
      >
        <div className="EntityErrorRenderer">
          <IconSvg icon="warningOutlined" />
        </div>
      </Tooltip>
    )
  }
}
