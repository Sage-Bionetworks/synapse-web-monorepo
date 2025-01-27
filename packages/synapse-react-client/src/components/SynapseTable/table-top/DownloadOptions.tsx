import { MenuItem, Tooltip } from '@mui/material'
import { Table } from '@sage-bionetworks/synapse-types'
import { useQuery } from '@tanstack/react-query'
import { useAtomValue } from 'jotai'
import { useMemo, useState } from 'react'
import { useGetEntity } from '../../../synapse-queries'
import { useSynapseContext } from '../../../utils'
import { isDataset } from '../../../utils/functions/EntityTypeUtils'
import { canTableQueryBeAddedToDownloadList } from '../../../utils/functions/queryUtils'
import ModalDownload from '../../ModalDownload/ModalDownload'
import ProgrammaticTableDownload from '../../ProgrammaticTableDownload/ProgrammaticTableDownload'
import { useQueryContext } from '../../QueryContext'
import {
  hasSelectedRowsAtom,
  selectedRowsAtom,
} from '../../QueryWrapper/TableRowSelectionState'
import { ElementWithTooltip } from '../../widgets/ElementWithTooltip'
import { getFileColumnModelId } from '../SynapseTableUtils'
import { getNumberOfResultsToAddToDownloadListCopy } from '../TopLevelControls/TopLevelControlsUtils'
import { DownloadLoginModal } from './DownloadLoginModal'

export type DownloadOptionsProps = {
  onDownloadFiles: () => void
  darkTheme?: boolean
}

export function DownloadOptions(props: DownloadOptionsProps) {
  const { accessToken } = useSynapseContext()
  const {
    entityId,
    versionNumber,
    getCurrentQueryRequest,
    hasResettableFilters,
    queryMetadataQueryOptions,
  } = useQueryContext()
  const { data: entity } = useGetEntity<Table>(entityId, versionNumber)
  const { data: queryMetadata } = useQuery(queryMetadataQueryOptions)

  const selectedRows = useAtomValue(selectedRowsAtom)
  const hasSelectedRows = useAtomValue(hasSelectedRowsAtom)

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

  return (
    <>
      <ElementWithTooltip
        tooltipText={'Download Options'}
        size="lg"
        darkTheme={darkTheme}
        icon={'download'}
        menuItems={
          <>
            {showAddQueryToDownloadList && (
              <Tooltip
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
                    accessToken ? onDownloadFiles() : setShowLoginModal(true)
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
              </Tooltip>
            )}

            <MenuItem
              onClick={() => {
                setShowExportMetadata(true)
              }}
            >
              Export Table
            </MenuItem>
            <Tooltip
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
            </Tooltip>
          </>
        }
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
