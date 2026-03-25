import {
  useGetAvailableFilesToDownloadInfinite,
  useRemoveFilesFromDownloadList,
} from '@/synapse-queries'
import { calculateFriendlyFileSize } from '@/utils/functions/calculateFriendlyFileSize'
import { formatDate } from '@/utils/functions/DateFormatter'
import { PRODUCTION_ENDPOINT_CONFIG } from '@/utils/functions/getEndpoint'
import { Box, Button, Tooltip, Typography } from '@mui/material'
import {
  AvailableFilter,
  DownloadListItem,
  DownloadListItemResult,
  Sort,
  SortField,
} from '@sage-bionetworks/synapse-types'
import {
  CellContext,
  createColumnHelper,
  getCoreRowModel,
  Row,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'
import dayjs from 'dayjs'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useErrorHandler } from 'react-error-boundary'
import FileEntityDirectDownload from '../DirectDownload/FileEntityDirectDownload'
import IconSvg from '../IconSvg/IconSvg'
import { InteractiveCopyIdsIcon } from '../InteractiveCopyIdsIcon'
import { BlockingLoader, SynapseSpinner } from '../LoadingScreen/LoadingScreen'
import { SkeletonTable } from '../Skeleton'
import { TOOLTIP_DELAY_SHOW } from '../SynapseTable/SynapseTableConstants'
import ColumnHeader from '../TanStackTable/ColumnHeader'
import StyledTanStackTable from '../TanStackTable/StyledTanStackTable'
import { displayToast } from '../ToastMessage'
import DirectProgrammaticDownload from './DirectProgrammaticDownload'
import { copyStringToClipboard } from '@/utils/functions/StringUtils'

export const TESTING_TRASH_BTN_CLASS = 'TESTING_TRASH_BTN_CLASS'

function notifyRemovedFromDownloadList(
  notificationTitle: string,
  fileName: string,
) {
  displayToast(`${fileName} has been removed from your list.`, 'success', {
    title: notificationTitle,
  })
}

function RemoveFromDownloadListButton(props: {
  ctx: CellContext<DownloadListItemResult, any>
}) {
  const { ctx } = props
  const { mutateAsync: removeFileFromDownloadList, isPending } =
    useRemoveFilesFromDownloadList({
      onSuccess: () =>
        displayToast(
          `${ctx.row.original.fileName} has been removed from your list.`,
          'success',
          {
            title: 'File Removed',
          },
        ),
    })

  return (
    <Tooltip
      title="Remove from Download List"
      placement="left"
      enterNextDelay={TOOLTIP_DELAY_SHOW}
    >
      <span className="removeItem">
        <button
          className={TESTING_TRASH_BTN_CLASS}
          onClick={() => {
            void removeFileFromDownloadList({
              batchToRemove: [
                {
                  fileEntityId: ctx.row.original.fileEntityId,
                  versionNumber: ctx.row.original.versionNumber,
                },
              ],
            })
          }}
        >
          {isPending ? <SynapseSpinner /> : <IconSvg icon="removeCircle" />}
        </button>
      </span>
    </Tooltip>
  )
}

const columnHelper = createColumnHelper<DownloadListItemResult>()
const getColumns = (args: {
  removeItem: (item: DownloadListItem, fileName: string, title: string) => void
  onCopySynIds: () => void
}) => {
  const { onCopySynIds, removeItem } = args
  return [
    columnHelper.accessor('isEligibleForPackaging', {
      header: () => <></>,
      cell: ctx => (
        <div>
          {!ctx.getValue() && (
            <Tooltip
              title={
                <>
                  This file can’t be packaged as a ZIP because it is {'>'}
                  100MB, or it is an external link, or it is not stored on
                  Synapse native storage.
                  <br />
                  Try clicking the “download” icon at the end of the row, or
                  download programmatically.
                </>
              }
              enterNextDelay={TOOLTIP_DELAY_SHOW}
              placement="right"
            >
              <span className="ineligibileIcon">
                <IconSvg wrap={false} icon="unpackagableFile" />
              </span>
            </Tooltip>
          )}
        </div>
      ),
      enableResizing: false,
      enableColumnFilter: false,
      size: 50,
    }),
    columnHelper.accessor('fileName', {
      header: props => <ColumnHeader {...props} title={'Name'} />,
      cell: ctx => (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`${PRODUCTION_ENDPOINT_CONFIG.PORTAL}Synapse:${ctx.row.original.fileEntityId}.${ctx.row.original.versionNumber}`}
        >
          {ctx.getValue()}
        </a>
      ),
      enableColumnFilter: false,
      size: 360,
    }),
    columnHelper.accessor('fileSizeBytes', {
      header: props => <ColumnHeader {...props} title={'Size'} />,
      cell: ctx =>
        ctx.getValue() != null && ctx.getValue() > 0 ? (
          calculateFriendlyFileSize(ctx.getValue())
        ) : (
          <Typography variant="smallText1" sx={{ color: 'grey.600' }}>
            Unknown
          </Typography>
        ),
      enableColumnFilter: false,
      size: 117,
    }),
    columnHelper.accessor('fileEntityId', {
      header: props => (
        <ColumnHeader
          {...props}
          title={'SynID'}
          additionalButtons={
            <InteractiveCopyIdsIcon size={'small'} onCopy={onCopySynIds} />
          }
        />
      ),
      cell: ctx => `${ctx.getValue()}.${ctx.row.original.versionNumber}`,
      enableColumnFilter: false,
      size: 143,
    }),
    columnHelper.accessor('addedOn', {
      header: props => <ColumnHeader {...props} title={'Added On'} />,
      cell: ctx => formatDate(dayjs(ctx.getValue())),
      enableColumnFilter: false,
      size: 150,
    }),
    columnHelper.accessor('projectName', {
      header: props => <ColumnHeader {...props} title={'Project'} />,
      enableColumnFilter: false,
      size: 170,
    }),
    columnHelper.display({
      id: 'actions',
      header: props => <ColumnHeader {...props} title={'Actions'} />,
      cell: ctx => (
        <div className="actionsContainer">
          <span className="downloadItem">
            <FileEntityDirectDownload
              entityId={ctx.row.original.fileEntityId}
              entityVersionNumber={ctx.row.original.versionNumber}
              displayFileName={false}
              onClickCallback={(isExternalLink: boolean) => {
                // SWC-5944: remove the item from the download list, unless it's an external link.
                if (!isExternalLink) {
                  removeItem(
                    {
                      fileEntityId: ctx.row.original.fileEntityId,
                      versionNumber: ctx.row.original.versionNumber,
                    },
                    ctx.row.original.fileName,
                    'File Downloaded',
                  )
                }
              }}
            />
          </span>
          <span className="programmaticAccessItem">
            <DirectProgrammaticDownload
              entityId={ctx.row.original.fileEntityId}
              version={ctx.row.original.versionNumber}
            />
          </span>
          <RemoveFromDownloadListButton ctx={ctx} />
        </div>
      ),
      enableResizing: false,
      enableColumnFilter: false,
      size: 140,
      meta: {
        textAlign: 'center',
      },
    }),
  ]
}

function getSortApiRequestFromTableSortState(
  sortingState: SortingState,
): Sort | undefined {
  if (sortingState.length === 0) {
    return undefined
  }
  const sort = sortingState[0]
  let field: SortField = 'addedOn'

  if (sort.id === 'fileName') {
    field = 'fileName'
  } else if (sort.id === 'fileSizeBytes') {
    field = 'fileSize'
  } else if (sort.id === 'fileEntityId') {
    field = 'synId'
  } else if (sort.id === 'projectName') {
    field = 'projectName'
  } else if (sort.id === 'addedOn') {
    field = 'addedOn'
  } else if (sort.id === 'createdBy') {
    field = 'createdBy'
  } else if (sort.id === 'createdOn') {
    field = 'createdOn'
  }

  return {
    field,
    direction: sort.desc ? 'DESC' : 'ASC',
  }
}

export default function DownloadListTable({
  filter,
}: {
  filter?: AvailableFilter
}) {
  const handleError = useErrorHandler()

  const [copyingAllSynapseIDs, setCopyingAllSynapseIDs] =
    useState<boolean>(false)
  const [tableSortState, setTableSortState] = useState<SortingState>([
    {
      desc: true,
      id: 'addedOn',
    },
  ])

  const {
    data,
    status,
    isFetchingNextPage,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isError,
    error: newError,
  } = useGetAvailableFilesToDownloadInfinite(
    getSortApiRequestFromTableSortState(tableSortState),
    filter,
  )

  useEffect(() => {
    if (isError && newError) {
      handleError(newError)
    }
  }, [isError, newError, handleError])

  const { mutateAsync: removeFileFromDownloadList } =
    useRemoveFilesFromDownloadList()

  const removeItem = useCallback(
    async (
      item: DownloadListItem,
      fileName: string,
      notificationTitle: string,
    ) => {
      await removeFileFromDownloadList({ batchToRemove: [item] })
      notifyRemovedFromDownloadList(notificationTitle, fileName)
    },
    [removeFileFromDownloadList],
  )

  const allRows = useMemo(
    () => data?.pages.flatMap(page => page.page) ?? [],
    [data?.pages],
  )

  const columns = useMemo(
    () =>
      getColumns({
        removeItem: (...args) => {
          void removeItem(...args)
        },
        onCopySynIds: () => {
          // trigger loading all pages of the download list table, and then copy all IDs to the clipboard
          setCopyingAllSynapseIDs(true)
        },
      }),
    [removeItem],
  )

  const table = useReactTable<DownloadListItemResult>({
    data: allRows,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    manualSorting: true,
    onSortingChange: setTableSortState,
    state: {
      columnPinning: {
        right: ['actions'],
      },
      sorting: tableSortState,
    },
    columnResizeMode: 'onChange',
    meta: {
      getRowClassNames(row: Row<DownloadListItemResult>) {
        if (!row.original.isEligibleForPackaging) {
          return 'ineligibleForPackaging'
        }
        return ''
      },
    },
  })

  useEffect(() => {
    const copyAllSynapseIDs = () => {
      const synIDs = allRows
        .map((item: DownloadListItemResult) => {
          return `${item.fileEntityId}.${item.versionNumber}`
        })
        .join('\n')
      copyStringToClipboard(synIDs).then(() => {
        displayToast('Successfully copied to clipboard')
      })
      setCopyingAllSynapseIDs(false)
    }

    if (
      status === 'success' &&
      !isFetchingNextPage &&
      hasNextPage &&
      fetchNextPage &&
      copyingAllSynapseIDs
    ) {
      void fetchNextPage()
    } else if (!hasNextPage && copyingAllSynapseIDs) {
      // We have all the data in allRows. Put it together and copy to the clipboard
      copyAllSynapseIDs()
    }
  }, [
    status,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    copyingAllSynapseIDs,
    allRows,
  ])

  return (
    <div>
      <BlockingLoader show={copyingAllSynapseIDs} />
      {allRows.length > 0 && (
        <div className="DownloadListTableV2">
          {/* TODO: This table can be very large, so it should be refactored to use row virtualization or discrete pagination */}
          <StyledTanStackTable table={table} fullWidth={false} />
          {hasNextPage && (
            <Box sx={{ display: 'flex', justifyContent: 'right' }}>
              <Button
                variant={'contained'}
                sx={{ my: 2, ml: 'auto' }}
                onClick={() => {
                  void fetchNextPage()
                }}
                disabled={isFetchingNextPage}
                startIcon={isFetchingNextPage ? <SynapseSpinner /> : undefined}
              >
                {isFetchingNextPage ? 'Loading...' : 'Show More'}
              </Button>
            </Box>
          )}
        </div>
      )}
      {allRows.length === 0 && !isLoading && (
        <Typography variant="body1Italic">
          You have no matching files in your download list.
        </Typography>
      )}
      {isLoading && <SkeletonTable numCols={5} numRows={3} />}
    </div>
  )
}
