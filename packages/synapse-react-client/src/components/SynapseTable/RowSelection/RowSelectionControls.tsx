import AddToDownloadListConfirmationAlert from '@/components/download_list/AddToDownloadListConfirmationAlert/AddToDownloadListConfirmationAlert'
import { useGetAddToDownloadListRequestForCurrentQuery } from '@/components/QueryWrapper/useGetAddToDownloadListRequestForCurrentQuery'
import { useGetEntity } from '@/synapse-queries'
import { canTableQueryBeAddedToDownloadList } from '@/utils/functions/queryUtils'
import { GetAppTwoTone } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import { Table } from '@sage-bionetworks/synapse-types'
import { useAtom } from 'jotai'
import { toast } from 'react-hot-toast'
import { useQueryContext } from '../../QueryContext'
import { useQueryVisualizationContext } from '../../QueryVisualizationWrapper'
import { selectedRowsAtom } from '../../QueryWrapper/TableRowSelectionState'
import { useGetQueryMetadata } from '../../QueryWrapper/useGetQueryMetadata'
import { getFileColumnModelId } from '../SynapseTableUtils'
import CustomControlPanel from '../CustomControls/CustomControlPanel'
import { CustomControl } from '../TopLevelControls/TopLevelControls'
import { RowSelectionUI } from './RowSelectionUI'

const SEND_TO_ANALYSIS_PLATFORM_BUTTON_ID =
  'SendToAnalysisPlatformRowSelectionControlButton'

export type RowSelectionControlsProps = {
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
  const { customControls = [], remount } = props
  const { entityId, versionNumber, getCurrentQueryRequest } = useQueryContext()
  const { data: entity } = useGetEntity<Table>(entityId, versionNumber)
  const { data: queryMetadata } = useGetQueryMetadata()
  const [selectedRows, setSelectedRows] = useAtom(selectedRowsAtom)

  const addToDownloadListRequest =
    useGetAddToDownloadListRequestForCurrentQuery()

  const {
    setIsShowingExportToAnalysisPlatformModal,
    enabledExternalAnalysisPlatforms,
  } = useQueryVisualizationContext()

  const showExportToAnalysisPlatformButton =
    enabledExternalAnalysisPlatforms.length > 0

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
              <CustomControlPanel
                key={customControl.buttonText}
                variant="contained"
                callbackData={{
                  tableId: entityId!,
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
          {/* TODO: Generic button */}
          {showExportToAnalysisPlatformButton && (
            <Button
              variant="outlined"
              onClick={() => {
                setIsShowingExportToAnalysisPlatformModal(true)
              }}
              id={SEND_TO_ANALYSIS_PLATFORM_BUTTON_ID}
            >
              Send to Analysis Platform
            </Button>
          )}
          {showAddToDownloadCart && (
            <Button
              variant="contained"
              onClick={() => {
                const toastId = toast.custom(
                  <Box
                    sx={{
                      width: '100%',
                    }}
                  >
                    <AddToDownloadListConfirmationAlert
                      addToDownloadListRequest={addToDownloadListRequest}
                      onClose={() => {
                        toast.dismiss(toastId)
                      }}
                    />
                  </Box>,
                  {
                    duration: Infinity,
                  },
                )
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
