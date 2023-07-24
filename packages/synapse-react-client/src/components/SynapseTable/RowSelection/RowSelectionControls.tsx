import React from 'react'
import { CustomControl } from '../TopLevelControls/TopLevelControls'
import { Button } from '@mui/material'
import { RowSelectionUI } from './RowSelectionUI'
import { useQueryContext } from '../../QueryContext'
import { useQueryVisualizationContext } from '../../QueryVisualizationWrapper'
import { Cavatica } from '../../../assets/icons/Cavatica'
import { GetAppTwoTone } from '@mui/icons-material'
import { canTableQueryBeAddedToDownloadList } from '../../../utils/functions/queryUtils'

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
  const { data, entity, getLastQueryRequest, selectedRows, setSelectedRows } =
    useQueryContext()
  const { setIsShowingExportToCavaticaModal, setShowDownloadConfirmation } =
    useQueryVisualizationContext()

  const refresh = () => {
    // clear selection
    setSelectedRows([])
    if (remount) {
      remount()
    }
  }

  const showAddToDownloadCart = canTableQueryBeAddedToDownloadList(entity)

  return (
    <RowSelectionUI
      show={selectedRows.length > 0}
      selectedRowCount={selectedRows.length}
      onClearSelection={() => setSelectedRows([])}
      customControls={
        <>
          {customControls.map(customControl => {
            return (
              <Button
                key={customControl.buttonText}
                variant="contained"
                onClick={() =>
                  customControl.onClick({
                    data,
                    selectedRows,
                    refresh,
                    request: getLastQueryRequest(),
                  })
                }
                startIcon={customControl.icon}
              >
                {customControl.buttonText}
              </Button>
            )
          })}
          {showExportToCavatica && (
            <Button
              variant="outlined"
              onClick={() => {
                setIsShowingExportToCavaticaModal(true)
              }}
              startIcon={<Cavatica />}
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
