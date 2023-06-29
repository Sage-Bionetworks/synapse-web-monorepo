import React from 'react'
import { CustomControl } from '../TopLevelControls/TopLevelControls'
import { Button } from '@mui/material'
import { RowSelectionUI } from './RowSelectionUI'
import { useQueryContext } from '../../QueryContext'
import { useQueryVisualizationContext } from '../../QueryVisualizationWrapper'
import { Cavatica } from '../../../assets/icons/Cavatica'

export type RowSelectionControlsProps = {
  showExportToCavatica?: boolean
  customControls?: CustomControl[]
}

/**
 * This component is responsible for rendering the RowSelectionUI and the custom controls. Must be wrapped in a
 * QueryContext and a QueryVisualizationContext.
 * @param props
 * @constructor
 */
export function RowSelectionControls(props: RowSelectionControlsProps) {
  const { customControls = [], showExportToCavatica = false } = props
  const { data, executeQueryRequest, getLastQueryRequest } = useQueryContext()
  const { selectedRows, setSelectedRows, setIsShowingExportToCavaticaModal } =
    useQueryVisualizationContext()

  const refresh = () => {
    // clear selection
    setSelectedRows([])
    // refresh the data
    executeQueryRequest(getLastQueryRequest())
  }

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
                  customControl.onClick({ data, selectedRows, refresh })
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
        </>
      }
    />
  )
}
