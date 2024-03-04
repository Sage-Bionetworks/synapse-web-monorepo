import React, { useMemo } from 'react'
import { Dropdown } from 'react-bootstrap'
import ModalDownload from '../../ModalDownload/ModalDownload'
import {
  hasFilesInView,
  isDataset,
  isEntityView,
} from '../../../utils/functions/EntityTypeUtils'
import { useSynapseContext } from '../../../utils'
import { Tooltip } from '@mui/material'
import { useQueryContext } from '../../QueryContext'
import { ElementWithTooltip } from '../../widgets/ElementWithTooltip'
import { DownloadLoginModal } from './DownloadLoginModal'
import ProgrammaticTableDownload from '../../ProgrammaticTableDownload/ProgrammaticTableDownload'
import { getNumberOfResultsToAddToDownloadListCopy } from '../TopLevelControls/TopLevelControlsUtils'
import { canTableQueryBeAddedToDownloadList } from '../../../utils/functions/queryUtils'
import { getFileColumnModelId } from '../SynapseTableUtils'
import { useAtomValue } from 'jotai'
import {
  tableQueryDataAtom,
  tableQueryEntityAtom,
} from '../../QueryWrapper/QueryWrapper'
import {
  hasSelectedRowsAtom,
  selectedRowsAtom,
} from '../../QueryWrapper/TableRowSelectionState'

export type DownloadOptionsProps = {
  onDownloadFiles: () => void
  darkTheme?: boolean
}

export const DownloadOptions: React.FunctionComponent<
  DownloadOptionsProps
> = props => {
  const { accessToken } = useSynapseContext()
  const { getCurrentQueryRequest, hasResettableFilters } = useQueryContext()
  const queryResultBundle = useAtomValue(tableQueryDataAtom)
  const entity = useAtomValue(tableQueryEntityAtom)

  const selectedRows = useAtomValue(selectedRowsAtom)
  const hasSelectedRows = useAtomValue(hasSelectedRowsAtom)

  const queryBundleRequest = useMemo(
    () => getCurrentQueryRequest(),
    [getCurrentQueryRequest],
  )

  const [showLoginModal, setShowLoginModal] = React.useState(false)
  const [showExportMetadata, setShowExportMetadata] = React.useState(false)
  const [showProgrammaticOptions, setShowProgrammaticOptions] =
    React.useState(false)
  const { onDownloadFiles, darkTheme = true } = props

  const fileColumnId = getFileColumnModelId(queryResultBundle?.columnModels)

  const isEntityViewWithoutFiles =
    entity && isEntityView(entity) && !hasFilesInView(entity)

  const showAddQueryToDownloadList =
    !isEntityViewWithoutFiles &&
    (fileColumnId || canTableQueryBeAddedToDownloadList(entity))
  // SWC-5878 - Disable downloading a "Draft" dataset
  const disableDownload = entity && isDataset(entity) && entity.isLatestVersion

  return (
    <React.Fragment>
      <Dropdown as="span">
        <ElementWithTooltip
          tooltipText={'Download Options'}
          size="lg"
          darkTheme={darkTheme}
          icon={'download'}
        ></ElementWithTooltip>
        <Dropdown.Menu
          className="SRC-primary-color-hover-dropdown"
          alignRight={true}
        >
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
              <Dropdown.Item
                role="button"
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
                  queryResultBundle,
                  'file',
                )}
              </Dropdown.Item>
            </Tooltip>
          )}
          <Dropdown.Item
            onClick={() => {
              setShowExportMetadata(true)
            }}
          >
            Export Table
          </Dropdown.Item>
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
            <Dropdown.Item
              className={disableDownload ? 'ignoreLink' : undefined}
              disabled={disableDownload}
              // If disabled, add pointer-events-auto so the tooltip still works
              style={disableDownload ? { pointerEvents: 'auto' } : {}}
              onClick={() => setShowProgrammaticOptions(true)}
            >
              Programmatic Options
            </Dropdown.Item>
          </Tooltip>
        </Dropdown.Menu>
      </Dropdown>
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
      {showProgrammaticOptions && queryResultBundle && (
        <ProgrammaticTableDownload
          onHide={() => setShowProgrammaticOptions(false)}
          queryBundleRequest={queryBundleRequest}
        ></ProgrammaticTableDownload>
      )}
    </React.Fragment>
  )
}
