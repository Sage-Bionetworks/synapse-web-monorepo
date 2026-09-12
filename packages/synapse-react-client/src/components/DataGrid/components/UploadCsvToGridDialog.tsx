import { displayToast } from '@/components/index'
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
  /** Names of the grid's current columns, including system/metadata columns (e.g. a RecordSet's
   * `entityId`, `id`, `path`) that are not declared in schemaPropertiesInfo but should still be
   * treated as strings rather than re-inferred from CSV content. */
  existingColumnNames: readonly string[]
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
  const {
    gridSessionId,
    open,
    onClose,
    onComplete,
    schemaPropertiesInfo,
    existingColumnNames,
  } = props

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
      existingColumnSchema={schemaPropertiesInfo}
      existingColumnNames={existingColumnNames}
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
