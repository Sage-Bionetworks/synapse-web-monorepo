import { Checkbox, IconButton, Skeleton, Tooltip } from '@mui/material'
import {
  EntityRef,
  EntityType,
  FileHandle,
  Reference,
} from '@sage-bionetworks/synapse-types'
import { useMutation } from '@tanstack/react-query'
import { CellContext } from '@tanstack/react-table'
import dayjs from 'dayjs'
import { ReactNode, SyntheticEvent, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { useAddFileToDownloadList } from '../../../../synapse-queries'
import {
  useGetEntity,
  useGetVersionsInfinite,
} from '../../../../synapse-queries/entity/useEntity'
import useGetEntityBundle from '../../../../synapse-queries/entity/useEntityBundle'
import { useSynapseContext } from '../../../../utils'
import { calculateFriendlyFileSize } from '../../../../utils/functions/calculateFriendlyFileSize'
import { formatDate } from '../../../../utils/functions/DateFormatter'
import { isTableType } from '../../../../utils/functions/EntityTypeUtils'
import FileEntityDirectDownload from '../../../DirectDownload/FileEntityDirectDownload'
import { displayFilesWereAddedToDownloadListSuccess } from '../../../download_list/DownloadConfirmationUtils'
import { EntityBadgeIcons } from '../../../EntityBadgeIcons/EntityBadgeIcons'
import { EntityTypeIcon } from '../../../EntityIcon'
import { EntityLink } from '../../../EntityLink'
import IconSvg from '../../../IconSvg/IconSvg'
import { SynapseSpinner } from '../../../LoadingScreen/LoadingScreen'
import { DatasetItemsEditorTableData } from '../../../SynapseTable/datasets/DatasetItemsEditor'
import { displayToast } from '../../../ToastMessage'
import { UserBadge } from '../../../UserCard/UserBadge'
import { VersionSelectionType } from '../../VersionSelectionType'
import { EntityFinderTableViewRowData } from './DetailsView'

export type FileHandleWithPreview = FileHandle & {
  isPreview?: boolean
}

/**
 * The data across tables may differ, but it has entity ID and version, then it can use many of these renderers
 */
export type EntityIdAndVersionNumber = {
  entityId: string
  versionNumber?: number
}

/**
 * Renders Entity Badges using the entity bundle.
 * @param props
 * @returns
 */
export function BadgeIconsRenderer<T extends EntityIdAndVersionNumber>(
  props: CellContext<T, any>,
) {
  const { row } = props

  return (
    <EntityBadgeIcons
      entityId={row.original.entityId}
      versionNumber={row.original.versionNumber}
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
  props: CellContext<T, any>,
) {
  const { row } = props
  const { data: bundle, isLoading } = useGetEntityBundle(
    row.original.entityId,
    row.original.versionNumber,
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
  props: CellContext<T, any>,
) {
  const { row } = props
  const { data: bundle, isLoading } = useGetEntityBundle(
    row.original.entityId,
    row.original.versionNumber,
  )

  if (isLoading) {
    return <Skeleton width={200} />
  }

  return <DateRenderer {...props} cellData={bundle?.entity?.createdOn} />
}

export function EntityNameRenderer<T extends EntityIdAndVersionNumber>(
  props: CellContext<T, any>,
) {
  const { data: bundle, isLoading } = useGetEntityBundle(
    props.row.original.entityId,
    props.row.original.versionNumber,
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
  props: CellContext<T, any>,
) {
  const { data: entityBundle, isLoading: isLoadingBundle } = useGetEntityBundle(
    props.row.original.entityId,
    props.row.original.versionNumber,
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
  props: CellContext<T, any>,
) {
  const { row } = props
  const { data: bundle, isLoading } = useGetEntityBundle(
    row.original.entityId,
    row.original.versionNumber,
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

export function DetailsViewCheckboxRenderer<
  T extends { entityId: string; isSelected: boolean; isDisabled?: boolean },
>(props: CellContext<T, any>) {
  const { row } = props
  const { entityId, isSelected, isDisabled } = row.original

  if (isDisabled) {
    return null
  }

  return (
    <Checkbox
      inputProps={{ 'aria-label': `Select ${entityId}` }}
      checked={isSelected}
      onChange={() => {
        // no-op
      }}
    />
  )
}

export function TypeIconRenderer(
  props: CellContext<EntityFinderTableViewRowData, EntityType>,
) {
  const { getValue } = props
  return (
    <EntityTypeIcon
      className="EntityFinderTableCellEntityIcon"
      type={getValue()}
    />
  )
}

export function EmptyRenderer({
  noResultsPlaceholder,
}: {
  noResultsPlaceholder: ReactNode
}) {
  return (
    <div className="EntityFinderDetailsViewPlaceholder">
      {noResultsPlaceholder || <div>Empty</div>}
    </div>
  )
}

export function MD5Renderer(
  props: CellContext<EntityFinderTableViewRowData, unknown>,
) {
  const { row } = props
  const { data: bundle, isLoading: isLoadingEntityBundle } = useGetEntityBundle(
    row.original.entityId,
    row.original.versionNumber,
  )
  const { mutate: copyMd5ToClipboard } = useMutation({
    mutationFn: (md5: string) => navigator.clipboard.writeText(md5),
    onSuccess: () => displayToast('MD5 copied to the clipboard', 'success'),
  })
  if (isLoadingEntityBundle) {
    return <Skeleton width={200} />
  }
  const file = bundle?.fileHandles.find(
    (file: FileHandleWithPreview) => file.isPreview !== true,
  )
  if (file?.contentMd5 == undefined) {
    return <></>
  }

  return (
    <Tooltip title="Click to copy MD5 to your clipboard" placement="right">
      <button
        className="md5Button"
        aria-label="MD5"
        onClick={event => {
          event.stopPropagation()
          copyMd5ToClipboard(file?.contentMd5 ?? '')
        }}
      >
        {file?.contentMd5}
      </button>
    </Tooltip>
  )
}

export function AddFileToDownloadListRenderer(
  props: CellContext<EntityFinderTableViewRowData, unknown>,
) {
  const { row } = props
  const { entityId, versionNumber } = row.original
  const { data: bundle } = useGetEntityBundle(entityId, versionNumber)

  const { downloadCartPageUrl } = useSynapseContext()

  const { mutate: addToDownloadList } = useAddFileToDownloadList({
    onSuccess: () => {
      displayFilesWereAddedToDownloadListSuccess(downloadCartPageUrl)
    },
    onError: error => {
      displayToast(error.reason, 'danger')
    },
  })
  if (bundle?.entityType !== EntityType.FILE) {
    return <></>
  }
  return (
    <Tooltip title="Add to Download Cart" placement="right">
      <IconButton
        sx={{ height: '35px', width: '35px' }}
        onClick={event => {
          addToDownloadList({ entityId, entityVersionNumber: versionNumber })
          event.stopPropagation()
        }}
      >
        <IconSvg icon="download" />
      </IconButton>
    </Tooltip>
  )
}

type DatasetEditorVersionRendererProps = CellContext<
  DatasetItemsEditorTableData,
  unknown
> & {
  toggleSelection: (entity: EntityRef) => void
}

export function DatasetEditorVersionRenderer(
  props: DatasetEditorVersionRendererProps,
) {
  const { row, toggleSelection } = props
  const { entityId, versionNumber } = row.original

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
      void fetchNextPage()
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

export const DetailsViewVersionRenderer = (props: {
  context: CellContext<EntityFinderTableViewRowData, any>
  versionSelection: VersionSelectionType
  toggleSelection: (entity: Reference | Reference[]) => void
}) => {
  const { context, toggleSelection, versionSelection } = props
  const { row } = context

  const {
    id,
    entityType,
    isVersionableEntity,
    isSelected,
    currentSelectedVersion,
  } = row.original

  const NO_VERSION_NUMBER_OPTION_VALUE = -1

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
      currentSelectedVersion == null &&
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

  const currentSelectedVersionOptionValue =
    currentSelectedVersion ?? NO_VERSION_NUMBER_OPTION_VALUE

  return (
    <div>
      {versions && versions.length > 0 ? (
        <Form.Control
          role="listbox"
          size="sm"
          as="select"
          value={currentSelectedVersionOptionValue}
          onClick={(event: SyntheticEvent<HTMLSelectElement>) => {
            event.stopPropagation()
          }}
          onChange={event => {
            event.stopPropagation()
            const version = parseInt(event.target.value)
            toggleSelection({
              targetId: id,
              targetVersionNumber:
                version === NO_VERSION_NUMBER_OPTION_VALUE
                  ? undefined
                  : version,
            })
          }}
        >
          {showLatestVersion && (
            <option value={NO_VERSION_NUMBER_OPTION_VALUE}>
              {latestVersionText}
            </option>
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
>(props: CellContext<T, any>) {
  const { isSelected, isDisabled, setSelected, entityId } = props.row.original
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
  props: CellContext<T, any>,
) => {
  const { entityId, versionNumber } = props.row.original
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

export function SizeRenderer(
  props: CellContext<EntityFinderTableViewRowData, unknown>,
) {
  const { row } = props
  const { data: bundle, isLoading } = useGetEntityBundle(
    row.original.entityId,
    row.original.versionNumber,
  )

  if (isLoading) {
    return <Skeleton width={200} />
  }
  const file = bundle?.fileHandles.find(
    (file: FileHandleWithPreview) => file.isPreview !== true,
  )
  const friendlySize = file?.contentSize
    ? calculateFriendlyFileSize(file?.contentSize)
    : ''
  return <span>{friendlySize}</span>
}

// TODO: In the challenge portal, this is shown instead of add to download cart
export function DirectDownloadRenderer(
  props: CellContext<EntityFinderTableViewRowData, unknown>,
) {
  const { row } = props
  return (
    <FileEntityDirectDownload
      entityId={row.original.entityId}
      entityVersionNumber={row.original.versionNumber}
      stopPropagation={true}
    />
  )
}
