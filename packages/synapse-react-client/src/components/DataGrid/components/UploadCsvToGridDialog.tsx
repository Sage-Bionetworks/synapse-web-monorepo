import { displayToast } from '@/components/index'
import { reconcileCsvImportSchema } from '@/components/DataGrid/utils/reconcileCsvImportSchema'
import CsvPreviewDialog from '@/components/table/CsvPreview/CsvPreviewDialog'
import { useImportCsvIntoGrid } from '@/synapse-queries/grid/useImportCsvIntoGrid'
import { SchemaPropertiesMap } from '@/utils/jsonschema/getSchemaPropertyInfo'
import { GridCsvImportResponse } from '@sage-bionetworks/synapse-client'
import upperFirst from 'lodash-es/upperFirst'

type UploadCsvToGridDialogProps = {
  gridSessionId: string
  open: boolean
  onClose: () => void
  onComplete: () => void
  /** The grid's current schema property info, used to preserve the existing type of columns the
   * CSV preview step might otherwise mis-infer from content alone (e.g. an entityId column). */
  schemaPropertiesInfo: SchemaPropertiesMap
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
  const { gridSessionId, open, onClose, onComplete, schemaPropertiesInfo } =
    props

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
      key={String(open)}
      open={open}
      onClose={onClose}
      onConfirm={(fileHandleId, schema, csvDescriptor) => {
        importCsvIntoGrid({
          concreteType:
            'org.sagebionetworks.repo.model.grid.GridCsvImportRequest',
          sessionId: gridSessionId,
          fileHandleId,
          csvDescriptor,
          schema: reconcileCsvImportSchema(schema, schemaPropertiesInfo),
        })
      }}
      errorMessage={error?.message}
      confirmIsPending={isPending}
    />
  )
}
