import { CustomControl } from '../TopLevelControls/TopLevelControls'
import { Button } from '@mui/material'
import { RowSelectionUI } from './RowSelectionUI'
import { useQueryContext } from '../../QueryContext'
import { useQueryVisualizationContext } from '../../QueryVisualizationWrapper'
import { Cavatica } from '../../../assets/icons/Cavatica'
import { GetAppTwoTone } from '@mui/icons-material'
import { canTableQueryBeAddedToDownloadList } from '../../../utils/functions/queryUtils'
import { useAtom } from 'jotai'
import { selectedRowsAtom } from '../../QueryWrapper/TableRowSelectionState'
import { getFileColumnModelId } from '../SynapseTableUtils'
import CustomControlButton from '../TopLevelControls/CustomControlButton'
import { useQuery } from '@tanstack/react-query'
import { useGetEntity } from '../../../synapse-queries'
import { Table } from '@sage-bionetworks/synapse-types'

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
  const {
    entityId,
    versionNumber,
    getCurrentQueryRequest,
    queryMetadataQueryOptions,
  } = useQueryContext()
  const { data: entity } = useGetEntity<Table>(entityId, versionNumber)
  const { data: queryMetadata } = useQuery(queryMetadataQueryOptions)
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
  const fileColumnId = getFileColumnModelId(queryMetadata?.columnModels)
  const showAddToDownloadCart = canTableQueryBeAddedToDownloadList(
    entity,
    fileColumnId,
  )

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
                  tableId: entityId,
                  queryMetadata: queryMetadata,
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
