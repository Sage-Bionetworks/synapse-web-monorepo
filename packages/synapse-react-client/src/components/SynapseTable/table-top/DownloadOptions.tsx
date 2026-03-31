import { useGetEntity } from '@/synapse-queries'
import { useSynapseContext } from '@/utils'
import { isDataset } from '@/utils/functions/EntityTypeUtils'
import { canTableQueryBeAddedToDownloadList } from '@/utils/functions/queryUtils'
import { MenuItem, Tooltip } from '@mui/material'
import { Table } from '@sage-bionetworks/synapse-types'
import { ReactNode, useMemo, useState } from 'react'
import ModalDownload from '../../ModalDownload/ModalDownload'
import ProgrammaticTableDownload from '../../ProgrammaticTableDownload/ProgrammaticTableDownload'
import { useQueryContext } from '../../QueryContext'
import {
  useHasSelectedRowsAtomValue,
  useSelectedRowsAtomValue,
} from '../../QueryWrapper/TableRowSelectionState'
import { useGetQueryMetadata } from '../../QueryWrapper/useGetQueryMetadata'
import { ElementWithTooltip } from '../../widgets/ElementWithTooltip'
import { getFileColumnModelId } from '../SynapseTableUtils'
import { getNumberOfResultsToAddToDownloadListCopy } from '../TopLevelControls/TopLevelControlsUtils'
import { DownloadLoginModal } from './DownloadLoginModal'

export type DownloadOptionsProps = {
  onDownloadFiles: () => void
  darkTheme?: boolean
}

export function DownloadOptions(props: DownloadOptionsProps) {
  const { isAuthenticated } = useSynapseContext()
  const {
    entityId,
    versionNumber,
    getCurrentQueryRequest,
    hasResettableFilters,
  } = useQueryContext()
  const { data: entity } = useGetEntity<Table>(entityId, versionNumber)
  const { data: queryMetadata } = useGetQueryMetadata()

  const selectedRows = useSelectedRowsAtomValue()
  const hasSelectedRows = useHasSelectedRowsAtomValue()

  const queryBundleRequest = useMemo(
    () => getCurrentQueryRequest(),
    [getCurrentQueryRequest],
  )

  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showExportMetadata, setShowExportMetadata] = useState(false)
  const [showProgrammaticOptions, setShowProgrammaticOptions] = useState(false)
  const { onDownloadFiles, darkTheme = true } = props

  const fileColumnId = getFileColumnModelId(queryMetadata?.columnModels)

  const showAddQueryToDownloadList = canTableQueryBeAddedToDownloadList(
    entity,
    fileColumnId,
  )

  // SWC-5878 - Disable downloading a "Draft" dataset
  const disableDownload = entity && isDataset(entity) && entity.isLatestVersion

  const downloadMenuItems: ReactNode[] = useMemo(() => {
    const downloadMenuItems = []
    if (showAddQueryToDownloadList) {
      downloadMenuItems.push(
        <Tooltip
          key={'add-to-download-list'}
          title={
            disableDownload
              ? 'A draft version of a dataset cannot be added to the Download Cart'
              : null
          }
          placement="left"
          enterNextDelay={300}
          describeChild={true}
        >
          <MenuItem
            className={disableDownload ? 'ignoreLink' : undefined}
            disabled={disableDownload}
            // If disabled, add pointer-events-auto so the tooltip still works
            style={disableDownload ? { pointerEvents: 'auto' } : {}}
            onClick={() =>
              isAuthenticated ? onDownloadFiles() : setShowLoginModal(true)
            }
          >
            {getNumberOfResultsToAddToDownloadListCopy(
              hasResettableFilters,
              hasSelectedRows,
              selectedRows,
              queryMetadata?.queryCount,
              'file',
            )}
          </MenuItem>
        </Tooltip>,
      )
    }
    downloadMenuItems.push(
      <MenuItem
        key={'export-table'}
        onClick={() => {
          setShowExportMetadata(true)
        }}
      >
        Export Table
      </MenuItem>,
    )
    downloadMenuItems.push(
      <Tooltip
        key={'programmatic-options'}
        title={
          disableDownload
            ? 'A draft version of a dataset cannot be downloaded programmatically'
            : null
        }
        placement="left"
        enterNextDelay={300}
        describeChild={true}
      >
        <MenuItem
          className={disableDownload ? 'ignoreLink' : undefined}
          disabled={disableDownload}
          // If disabled, add pointer-events-auto so the tooltip still works
          style={disableDownload ? { pointerEvents: 'auto' } : {}}
          onClick={() => setShowProgrammaticOptions(true)}
        >
          Programmatic Options
        </MenuItem>
      </Tooltip>,
    )
    return downloadMenuItems
  }, [
    isAuthenticated,
    disableDownload,
    hasResettableFilters,
    hasSelectedRows,
    onDownloadFiles,
    queryMetadata?.queryCount,
    selectedRows,
    showAddQueryToDownloadList,
  ])

  return (
    <>
      <ElementWithTooltip
        tooltipText={'Download Options'}
        size="lg"
        darkTheme={darkTheme}
        icon={'download'}
        menuItems={downloadMenuItems}
      />
      {showLoginModal && (
        <DownloadLoginModal
          showModal={showLoginModal}
          onHide={() => setShowLoginModal(false)}
        ></DownloadLoginModal>
      )}
      {
        // modal can render anywhere, this is not a particular location
        showExportMetadata && (
          <ModalDownload
            onClose={() => setShowExportMetadata(false)}
            queryBundleRequest={queryBundleRequest}
          />
        )
      }
      {showProgrammaticOptions && queryMetadata && (
        <ProgrammaticTableDownload
          onHide={() => setShowProgrammaticOptions(false)}
          queryBundleRequest={queryBundleRequest}
        ></ProgrammaticTableDownload>
      )}
    </>
  )
}
