import { displayToast } from '@/components/index'
import CsvPreviewDialog from '@/components/table/CsvPreview/CsvPreviewDialog'
import { useImportCsvIntoGrid } from '@/synapse-queries/grid/useImportCsvIntoGrid'
import upperFirst from 'lodash-es/upperFirst'

type UploadCsvToGridDialogProps = {
  gridSessionId: string
  open: boolean
  onClose: () => void
  onComplete: () => void
}

export function getUpdateMessage(result: {
  createdCount: number
  updatedCount: number
}) {
  let message = ''
  if (result.createdCount > 0) {
    message += `created ${result.createdCount.toLocaleString()} rows`
  }
  if (result.createdCount > 0 && result.updatedCount > 0) {
    message += ' and '
  } else if (result.updatedCount == 0) {
    message += '.'
  }
  if (result.updatedCount > 0) {
    message += `updated ${result.updatedCount.toLocaleString()} rows.`
  }
  return upperFirst(message)
}

export default function UploadCsvToGridDialog(
  props: UploadCsvToGridDialogProps,
) {
  const { gridSessionId, open, onClose, onComplete } = props

  const { mutate: importCsvIntoGrid } = useImportCsvIntoGrid({
    onSuccess: result => {
      displayToast(getUpdateMessage(result), 'success', {
        title: 'Data imported successfully',
      })
      onComplete()
    },
    onError: error => {
      displayToast(error.message, 'danger', {
        title: 'Error importing the data into the grid',
      })
    },
  })

  return (
    <CsvPreviewDialog
      open={open}
      onClose={onClose}
      onConfirm={(fileHandleId, schema, csvDescriptor) => {
        importCsvIntoGrid({
          concreteType:
            'org.sagebionetworks.repo.model.grid.GridCsvImportRequest',
          sessionId: gridSessionId,
          fileHandleId,
          csvDescriptor,
          schema,
        })
      }}
    />
  )
}
