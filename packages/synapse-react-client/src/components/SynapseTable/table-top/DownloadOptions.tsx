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
import { useQueryVisualizationContext } from '../../QueryVisualizationWrapper'
import {
  useHasSelectedRowsAtomValue,
  useSelectedRowsAtomValue,
} from '../../QueryWrapper/TableRowSelectionState'
import { useAddSelectedRowsToDownloadList } from '../../QueryWrapper/useAddSelectedRowsToDownloadList'
import { useGetQueryMetadata } from '../../QueryWrapper/useGetQueryMetadata'
import { ElementWithTooltip } from '../../widgets/ElementWithTooltip'
import { getFileColumnModelId } from '../SynapseTableUtils'
import { getNumberOfResultsToAddToDownloadListCopy } from '../TopLevelControls/TopLevelControlsUtils'
import { DownloadLoginModal } from './DownloadLoginModal'

export type DownloadOptionsProps = {
  darkTheme?: boolean
  /** If true, the "Add ... files to Download List" menu item will be hidden */
  hideAddToDownloadListMenuItem?: boolean
  /** If true, the "Programmatic Options" menu item will be hidden */
  hideProgrammaticOptionsMenuItem?: boolean
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
  const { addSelectedRowsToDownloadList } = useAddSelectedRowsToDownloadList()

  const queryBundleRequest = useMemo(
    () => getCurrentQueryRequest(),
    [getCurrentQueryRequest],
  )

  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showExportMetadata, setShowExportMetadata] = useState(false)
  const [showProgrammaticOptions, setShowProgrammaticOptions] = useState(false)
  const {
    darkTheme = true,
    hideAddToDownloadListMenuItem,
    hideProgrammaticOptionsMenuItem,
  } = props
  const { setShowDownloadConfirmation } = useQueryVisualizationContext()

  const fileColumnId = getFileColumnModelId(queryMetadata?.columnModels)

  // The table's type decides which file version the whole result adds, so the item waits for the table to load.
  const showAddQueryToDownloadList =
    !hideAddToDownloadListMenuItem &&
    entity !== undefined &&
    canTableQueryBeAddedToDownloadList(entity, fileColumnId)

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
              ? 'A draft version of a dataset cannot be added to the Download List'
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
            onClick={() => {
              if (!isAuthenticated) {
                setShowLoginModal(true)
              } else if (hasSelectedRows) {
                void addSelectedRowsToDownloadList()
              } else {
                // The enclosing query view shows the confirmation, with the whole result's file count and size.
                setShowDownloadConfirmation(true)
              }
            }}
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
    if (!hideProgrammaticOptionsMenuItem) {
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
    }
    return downloadMenuItems
  }, [
    addSelectedRowsToDownloadList,
    isAuthenticated,
    disableDownload,
    hasResettableFilters,
    hasSelectedRows,
    hideProgrammaticOptionsMenuItem,
    setShowDownloadConfirmation,
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
        // Every option opens a dialog or starts an action, so the menu closes once one is chosen.
        closeMenuOnClick
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
