import { useRef } from 'react'
import useCsvUploadPreview from './useCsvUploadPreview'
import {
  BasicFileHandleUpload,
  FileUploadHandle,
} from '@/components/file/upload/BasicFileHandleUpload'
import { CsvUploadPreviewStep } from '@/components/table/CsvPreview/useCsvUploadPreview'
import { SchemaPropertiesMap } from '@/utils/jsonschema/getSchemaPropertyInfo'
import { ColumnType } from '@sage-bionetworks/synapse-client'
import CsvPreviewWithOptions from './CsvPreviewWithOptions'

export type CsvUploadPreviewContentProps = {
  /**
   * Shared upload/preview workflow state and callbacks from useCsvUploadPreview.
   */
  workflow: ReturnType<typeof useCsvUploadPreview>
  /** Known column types that take precedence over the CSV-content-based type suggestion */
  existingColumnSchema?: SchemaPropertiesMap
  /** Names of columns that already exist, even if not declared in existingColumnSchema */
  existingColumnNames?: readonly string[]
  /** Exact known ColumnTypes for columns that already exist, keyed by column name */
  existingColumnTypesByName?: Readonly<Record<string, ColumnType>>
}

/**
 * Renders the active CSV upload workflow step: file upload first, then preview/options.
 */
export default function CsvUploadPreviewContent({
  workflow,
  existingColumnSchema,
  existingColumnNames,
  existingColumnTypesByName,
}: CsvUploadPreviewContentProps) {
  const {
    step,
    uploadedFileHandleId,
    onFileUploaded,
    csvTableDescriptor,
    setCsvTableDescriptor,
    setCsvPreviewData,
    setIsLoadingPreview,
  } = workflow

  const uploadRef = useRef<FileUploadHandle | null>(null)

  // Upload step
  if (step === CsvUploadPreviewStep.UPLOAD_CSV) {
    return (
      <BasicFileHandleUpload
        ref={uploadRef}
        allowMultipleUpload={false}
        onFileUploadComplete={onFileUploaded}
        disableDragAndDrop={true}
      />
    )
  }

  // Preview step
  return (
    <CsvPreviewWithOptions
      fileHandleId={uploadedFileHandleId}
      csvTableDescriptor={csvTableDescriptor}
      existingColumnSchema={existingColumnSchema}
      existingColumnNames={existingColumnNames}
      existingColumnTypesByName={existingColumnTypesByName}
      onCsvTableDescriptorChange={setCsvTableDescriptor}
      onCsvPreviewDataChange={setCsvPreviewData}
      onIsLoadingChange={setIsLoadingPreview}
    />
  )
}
