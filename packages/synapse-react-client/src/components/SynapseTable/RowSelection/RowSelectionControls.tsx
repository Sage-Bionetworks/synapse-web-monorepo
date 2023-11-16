import React from 'react'
import { CustomControl } from '../TopLevelControls/TopLevelControls'
import { Button } from '@mui/material'
import { RowSelectionUI } from './RowSelectionUI'
import { useQueryContext } from '../../QueryContext'
import { useQueryVisualizationContext } from '../../QueryVisualizationWrapper'
import { Cavatica } from '../../../assets/icons/Cavatica'
import { GetAppTwoTone } from '@mui/icons-material'
import { canTableQueryBeAddedToDownloadList } from '../../../utils/functions/queryUtils'
import { useAtom, useAtomValue } from 'jotai'
import {
  tableQueryDataAtom,
  tableQueryEntityAtom,
} from '../../QueryWrapper/QueryWrapper'
import { selectedRowsAtom } from '../../QueryWrapper/TableRowSelectionState'
import { getFileColumnModelId } from '../SynapseTableUtils'
import CustomControlButton from '../TopLevelControls/CustomControlButton'

const SEND_TO_CAVATICA_BUTTON_ID = 'SendToCavaticaRowSelectionControlButton'

export type RowSelectionControlsProps = {
  showExportToCavatica?: boolean
  customControls?: CustomControl[]
  remount?: () => void
}

/**
 * This component is responsible for rendering the RowSelectionUI and the custom controls. Must be wrapped in a
 * QueryContext and a QueryVisualizationContext.
 * @param props
 * @constructor
 */
export function RowSelectionControls(props: RowSelectionControlsProps) {
  const { customControls = [], showExportToCavatica = false, remount } = props
  const { getCurrentQueryRequest } = useQueryContext()
  const data = useAtomValue(tableQueryDataAtom)
  const entity = useAtomValue(tableQueryEntityAtom)
  const [selectedRows, setSelectedRows] = useAtom(selectedRowsAtom)

  const { setIsShowingExportToCavaticaModal, setShowDownloadConfirmation } =
    useQueryVisualizationContext()

  const refresh = () => {
    // clear selection
    setSelectedRows([])
    if (remount) {
      remount()
    }
  }
  const fileColumnId = getFileColumnModelId(data?.columnModels)
  const showAddToDownloadCart =
    fileColumnId ?? canTableQueryBeAddedToDownloadList(entity)

  return (
    <RowSelectionUI
      show={selectedRows.length > 0}
      selectedRowCount={selectedRows.length}
      onClearSelection={() => setSelectedRows([])}
      customControls={
        <>
          {customControls.map(customControl => {
            return (
              <CustomControlButton
                key={customControl.buttonText}
                variant="contained"
                callbackData={{
                  data,
                  selectedRows,
                  refresh,
                  request: getCurrentQueryRequest(),
                }}
                control={customControl}
                startIcon={customControl.icon}
              />
            )
          })}
          {showExportToCavatica && (
            <Button
              variant="outlined"
              onClick={() => {
                setIsShowingExportToCavaticaModal(true)
              }}
              startIcon={<Cavatica />}
              id={SEND_TO_CAVATICA_BUTTON_ID}
            >
              Send to CAVATICA
            </Button>
          )}
          {showAddToDownloadCart && (
            <Button
              variant="contained"
              onClick={() => {
                setShowDownloadConfirmation(true)
              }}
              startIcon={<GetAppTwoTone />}
            >
              Add to Download Cart
            </Button>
          )}
        </>
      }
    />
  )
}
