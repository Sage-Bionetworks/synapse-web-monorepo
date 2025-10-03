import { displayToast } from '@/components/index'
import CsvPreviewDialog from '@/components/table/CsvPreview/CsvPreviewDialog'
import { useImportCsvIntoGrid } from '@/synapse-queries/grid/useImportCsvIntoGrid'
import { GridCsvImportResponse } from '@sage-bionetworks/synapse-client'
import upperFirst from 'lodash-es/upperFirst'

type UploadCsvToGridDialogProps = {
  gridSessionId: string
  open: boolean
  onClose: () => void
  onComplete: () => void
}

export function getUpdateMessage({
  createdCount = 0,
  updatedCount = 0,
}: GridCsvImportResponse): string {
  let message = ''
  if (createdCount > 0) {
    message += `created ${createdCount.toLocaleString()} rows`
  }
  if (createdCount > 0 && updatedCount > 0) {
    message += ' and '
  } else if (updatedCount == 0) {
    message += '.'
  }
  if (updatedCount > 0) {
    message += `updated ${updatedCount.toLocaleString()} rows.`
  }
  return upperFirst(message)
}

export default function UploadCsvToGridDialog(
  props: UploadCsvToGridDialogProps,
) {
  const { gridSessionId, open, onClose, onComplete } = props

  const {
    mutate: importCsvIntoGrid,
    isPending,
    error,
  } = useImportCsvIntoGrid({
    onSuccess: result => {
      displayToast(getUpdateMessage(result), 'success', {
        title: 'Data imported successfully',
      })
      onComplete()
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
      errorMessage={error?.message}
      confirmIsPending={isPending}
    />
  )
}
