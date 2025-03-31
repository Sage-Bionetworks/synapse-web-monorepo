import {
  useGetAvailableFilesToDownloadInfinite,
  useRemoveFilesFromDownloadList,
} from '@/synapse-queries'
import { calculateFriendlyFileSize } from '@/utils/functions/calculateFriendlyFileSize'
import { formatDate } from '@/utils/functions/DateFormatter'
import { PRODUCTION_ENDPOINT_CONFIG } from '@/utils/functions/getEndpoint'
import { Box, Button, Select, Tooltip } from '@mui/material'
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
import { UserBadge } from '../UserCard/UserBadge'
import DirectProgrammaticDownload from './DirectProgrammaticDownload'
import DownloadListStats from './DownloadListStats'

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
      title="Remove from Download Cart"
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
          {ctx.getValue() && (
            <Tooltip
              title="Eligible for packaging"
              enterNextDelay={TOOLTIP_DELAY_SHOW}
              placement="right"
            >
              <span className="eligibileIcon">
                <IconSvg wrap={false} icon="packagableFile" />
              </span>
            </Tooltip>
          )}
          {!ctx.getValue() && (
            <Tooltip
              title="This file is ineligible for Web packaging because it is >100MB, or it is an external link, or it is not stored on Synapse native storage"
              enterNextDelay={TOOLTIP_DELAY_SHOW}
              placement="right"
            >
              <span className="ineligibileIcon">
                <IconSvg wrap={false} icon="warningOutlined" />
              </span>
            </Tooltip>
          )}
        </div>
      ),
      enableResizing: false,
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
      size: 160,
    }),
    columnHelper.accessor('fileSizeBytes', {
      header: props => <ColumnHeader {...props} title={'Size'} />,
      cell: ctx =>
        ctx.getValue() != null ? (
          calculateFriendlyFileSize(ctx.getValue())
        ) : (
          <></>
        ),
      size: 100,
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
      size: 100,
    }),
    columnHelper.accessor('projectName', {
      header: props => <ColumnHeader {...props} title={'Project'} />,
    }),
    columnHelper.accessor('addedOn', {
      header: props => <ColumnHeader {...props} title={'Added On'} />,
      cell: ctx => formatDate(dayjs(ctx.getValue())),
    }),
    columnHelper.accessor('createdBy', {
      header: props => <ColumnHeader {...props} title={'Created By'} />,
      cell: ctx => <UserBadge userId={ctx.getValue()} />,
    }),
    columnHelper.accessor('createdOn', {
      header: props => <ColumnHeader {...props} title={'Created On'} />,
      cell: ctx => formatDate(dayjs(ctx.getValue())),
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

export default function DownloadListTable() {
  const handleError = useErrorHandler()

  const [copyingAllSynapseIDs, setCopyingAllSynapseIDs] =
    useState<boolean>(false)
  const [tableSortState, setTableSortState] = useState<SortingState>([
    {
      desc: true,
      id: 'addedOn',
    },
  ])

  const [filter, setFilter] = useState<AvailableFilter | undefined>(undefined)
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
      // https://caniuse.com/mdn-api_clipboard_writetext
      navigator.clipboard.writeText(synIDs).then(() => {
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

  const getFilterDisplayText = (f: AvailableFilter) => {
    if (!f) {
      return 'All'
    } else if (f == 'eligibleForPackaging') {
      return 'Only Eligible'
    } else {
      return 'Only Ineligible'
    }
  }

  const availableFiltersArray: AvailableFilter[] = [
    undefined,
    'eligibleForPackaging',
    'ineligibleForPackaging',
  ]
  return (
    <div>
      <BlockingLoader show={copyingAllSynapseIDs} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
          justifyContent: 'space-between',
          alignItems: 'center',
          py: '15px',
          rowGap: '15px',
        }}
      >
        <DownloadListStats />
        <Box
          sx={{
            display: 'flex',
            gap: '10px',
            alignItems: 'inherit',
            justifyContent: 'end',
          }}
        >
          <Box
            sx={{
              fontWeight: '700',
              fontSize: '14px',
            }}
          >
            Filter Files By
          </Box>
          <Box
            sx={{
              button: {
                width: '144px',
              },
            }}
          >
            <Select native fullWidth value={getFilterDisplayText(filter)}>
              {availableFiltersArray.map(availableFilter => (
                <option
                  key={`${getFilterDisplayText(availableFilter)}-filter-option`}
                  onClick={() => {
                    setFilter(availableFilter)
                  }}
                >
                  {getFilterDisplayText(availableFilter)}
                </option>
              ))}
            </Select>
          </Box>
        </Box>
      </Box>
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
      {isLoading && <SkeletonTable numCols={5} numRows={3} />}
    </div>
  )
}
