import { useEffect, useState } from 'react'
import { useErrorHandler } from 'react-error-boundary'
import {
  AvailableFilter,
  Direction,
  DownloadListItem,
  DownloadListItemResult,
  FilesStatisticsResponse,
  Sort,
  SortField,
} from '@sage-bionetworks/synapse-types'
import { Dropdown, Table } from 'react-bootstrap'
import { calculateFriendlyFileSize } from '../../utils/functions/calculateFriendlyFileSize'
import { useGetAvailableFilesToDownloadInfinite } from '../../synapse-queries'
import { useInView } from 'react-intersection-observer'
import SynapseClient from '../../synapse-client'
import dayjs from 'dayjs'
import SortIcon from '../../assets/icons/Sort'
import { useSynapseContext } from '../../utils'
import { PRODUCTION_ENDPOINT_CONFIG } from '../../utils/functions/getEndpoint'
import IconSvg from '../IconSvg/IconSvg'
import { TOOLTIP_DELAY_SHOW } from '../SynapseTable/SynapseTableConstants'
import { SkeletonTable } from '../Skeleton'
import { displayToast } from '../ToastMessage'
import DirectProgrammaticDownload from './DirectProgrammaticDownload'
import { BlockingLoader } from '../LoadingScreen/LoadingScreen'
import { Tooltip } from '@mui/material'
import { InteractiveCopyIdsIcon } from '../InteractiveCopyIdsIcon'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import FileEntityDirectDownload from '../DirectDownload/FileEntityDirectDownload'
import { UserBadge } from '../UserCard/UserBadge'

export const TESTING_TRASH_BTN_CLASS = 'TESTING_TRASH_BTN_CLASS'

dayjs.extend(localizedFormat)

export type DownloadListTableProps = {
  filesStatistics: FilesStatisticsResponse
  refetchStatistics: () => Promise<any>
}

export default function DownloadListTable(props: DownloadListTableProps) {
  const { filesStatistics, refetchStatistics } = props
  const { accessToken } = useSynapseContext()
  const handleError = useErrorHandler()
  // Load the next page when this ref comes into view.
  const { ref, inView } = useInView()
  const [copyingAllSynapseIDs, setCopyingAllSynapseIDs] =
    useState<boolean>(false)
  const [sort, setSort] = useState<Sort | undefined>(undefined)
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
    refetch,
  } = useGetAvailableFilesToDownloadInfinite(sort, filter)

  //SWC-5858: Update the Download List files table when the statistics change
  useEffect(() => {
    if (refetch) {
      refetch()
    }
  }, [filesStatistics, refetch])

  useEffect(() => {
    if (isError && newError) {
      handleError(newError)
    }
  }, [isError, newError, handleError])

  const allRows = data?.pages.flatMap(page => page.page) ?? []

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
      (inView || copyingAllSynapseIDs)
    ) {
      fetchNextPage()
    } else if (!hasNextPage && copyingAllSynapseIDs) {
      // We have all the data in allRows. Put it together and copy to the clipboard
      copyAllSynapseIDs()
    }
  }, [
    status,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    inView,
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
  const removeItem = async (
    item: DownloadListItem,
    fileName: string,
    title: string,
  ) => {
    try {
      await SynapseClient.removeItemFromDownloadListV2(item, accessToken)
      displayToast(`${fileName} has been removed from your list.`, 'success', {
        title,
      })
      // refetching the statistics will update the download list, but refresh the list immediately since this will take time
      refetch()
      refetchStatistics()
    } catch (err) {
      console.error(err)
    }
  }
  const InteractiveSortIcon = ({
    columnSortBy,
  }: {
    columnSortBy: SortField
  }) => {
    return (
      <span>
        {setSort && (
          <SortIcon
            role="button"
            style={{ height: '20px' }}
            active={sort?.field === columnSortBy}
            direction={
              sort?.field === columnSortBy
                ? sort.direction === 'DESC'
                  ? Direction.DESC
                  : Direction.ASC
                : Direction.DESC
            }
            onClick={() => {
              const direction =
                columnSortBy === sort?.field
                  ? sort.direction === 'ASC'
                    ? 'DESC'
                    : 'ASC'
                  : 'DESC'
              setSort({
                field: columnSortBy,
                direction,
              })
            }}
          />
        )}
      </span>
    )
  }

  const availableFiltersArray: AvailableFilter[] = [
    undefined,
    'eligibleForPackaging',
    'ineligibleForPackaging',
  ]
  return (
    <div className="bootstrap-4-backport">
      <BlockingLoader show={copyingAllSynapseIDs} />
      <div className="filterFilesContainer">
        <span className="filterFilesByText">Filter Files By</span>
        <Dropdown>
          <Dropdown.Toggle variant="gray-primary-500" id="dropdown-basic">
            {getFilterDisplayText(filter)}
          </Dropdown.Toggle>
          <Dropdown.Menu role="menu">
            {availableFiltersArray.map(availableFilter => (
              <Dropdown.Item
                role="menuitem"
                key={`${getFilterDisplayText(availableFilter)}-filter-option`}
                onClick={() => {
                  setFilter(availableFilter)
                }}
              >
                {getFilterDisplayText(availableFilter)}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
      {allRows.length > 0 && (
        <>
          <Table
            striped={true}
            responsive={true}
            className="DownloadListTableV2"
          >
            <thead>
              <tr>
                <th>{/* Eligible/Ineligible icon */}</th>
                <th>
                  Name
                  <InteractiveSortIcon columnSortBy="fileName" />
                </th>
                <th>
                  Size
                  <InteractiveSortIcon columnSortBy="fileSize" />
                </th>
                <th>
                  SynID
                  <InteractiveCopyIdsIcon
                    size={'small'}
                    onCopy={() => {
                      // trigger loading all pages of the download list table, and then copy all IDs to the clipboard
                      setCopyingAllSynapseIDs(true)
                    }}
                  />
                  <InteractiveSortIcon columnSortBy="synId" />
                </th>
                <th>
                  Project
                  <InteractiveSortIcon columnSortBy="projectName" />
                </th>
                <th>
                  Added On
                  <InteractiveSortIcon columnSortBy="addedOn" />
                </th>
                <th>
                  Created By
                  <InteractiveSortIcon columnSortBy="createdBy" />
                </th>
                <th>
                  Created On
                  <InteractiveSortIcon columnSortBy="createdOn" />
                </th>
                <th className="stickyColumn">Actions</th>
              </tr>
            </thead>
            <tbody>
              {allRows.map((item: DownloadListItemResult) => {
                if (item) {
                  const addedOn = dayjs(item.addedOn).format('L LT')
                  const createdOn = dayjs(item.createdOn).format('L LT')
                  return (
                    <tr key={item.fileEntityId}>
                      <td
                        className={
                          item.isEligibleForPackaging
                            ? ''
                            : 'ineligibleForPackagingTd'
                        }
                      >
                        {item.isEligibleForPackaging && (
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
                        {!item.isEligibleForPackaging && (
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
                      </td>
                      <td>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={`${PRODUCTION_ENDPOINT_CONFIG.PORTAL}Synapse:${item.fileEntityId}.${item.versionNumber}`}
                        >
                          {item.fileName}
                        </a>
                      </td>
                      <td>
                        {item.fileSizeBytes &&
                          calculateFriendlyFileSize(item.fileSizeBytes)}
                      </td>
                      <td>{`${item.fileEntityId}${
                        item.versionNumber ? `.${item.versionNumber}` : ''
                      }`}</td>
                      <td>{item.projectName}</td>
                      <td>{addedOn}</td>
                      <td>
                        <UserBadge userId={item.createdBy} />
                      </td>
                      <td>{createdOn}</td>
                      <td className="stickyColumn">
                        <div className="actionsContainer">
                          <span className="downloadItem">
                            <FileEntityDirectDownload
                              entityId={item.fileEntityId}
                              entityVersionNumber={item.versionNumber}
                              displayFileName={false}
                              onClickCallback={(isExternalLink: boolean) => {
                                // SWC-5944: remove the item from the download list, unless it's an external link.
                                if (!isExternalLink) {
                                  removeItem(
                                    {
                                      fileEntityId: item.fileEntityId,
                                      versionNumber: item.versionNumber,
                                    },
                                    item.fileName,
                                    'File Downloaded',
                                  )
                                }
                              }}
                            />
                          </span>
                          <span className="programmaticAccessItem">
                            <DirectProgrammaticDownload
                              entityId={item.fileEntityId}
                              version={item.versionNumber}
                            />
                          </span>
                          <Tooltip
                            title="Remove from Download Cart"
                            placement="left"
                            enterNextDelay={TOOLTIP_DELAY_SHOW}
                          >
                            <span className="removeItem">
                              <button
                                className={TESTING_TRASH_BTN_CLASS}
                                onClick={() => {
                                  removeItem(
                                    {
                                      fileEntityId: item.fileEntityId,
                                      versionNumber: item.versionNumber,
                                    },
                                    item.fileName,
                                    'File Removed',
                                  )
                                }}
                              >
                                <IconSvg icon="removeCircle" />
                              </button>
                            </span>
                          </Tooltip>
                        </div>
                      </td>
                    </tr>
                  )
                } else return false
              })}
              {/* To trigger loading the next page */}
              <tr ref={ref} />
            </tbody>
          </Table>
        </>
      )}
      {isLoading && <SkeletonTable numCols={5} numRows={3} />}
    </div>
  )
}
