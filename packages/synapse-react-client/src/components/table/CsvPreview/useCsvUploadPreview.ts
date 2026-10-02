import { useCallback, useState } from 'react'
import {
  CsvTableDescriptor,
  UploadToTablePreviewResult,
} from '@sage-bionetworks/synapse-client'

export const DEFAULT_CSV_TABLE_DESCRIPTOR: CsvTableDescriptor = {
  separator: ',',
  quoteCharacter: '"',
  escapeCharacter: '\\',
  lineEnd: '\n',
  isFirstLineHeader: true,
}

export enum CsvUploadPreviewStep {
  UPLOAD_CSV = 0,
  COLUMN_PREVIEW = 1,
}

/**
 * Shared state and logic for CSV upload/preview dialogs.
 * Manages the common state needed for uploading a CSV file and previewing its contents.
 */
export default function useCsvUploadPreview() {
  const [step, setStep] = useState(CsvUploadPreviewStep.UPLOAD_CSV)
  const [csvTableDescriptor, setCsvTableDescriptor] =
    useState<CsvTableDescriptor>(DEFAULT_CSV_TABLE_DESCRIPTOR)
  const [uploadedFileHandleId, setUploadedFileHandleId] = useState<
    string | null
  >(null)
  const [csvPreviewData, setCsvPreviewData] =
    useState<UploadToTablePreviewResult | null>(null)
  const [isLoadingPreview, setIsLoadingPreview] = useState(false)

  const onFileUploaded = useCallback((fileHandleId: string) => {
    setUploadedFileHandleId(fileHandleId)
    setStep(CsvUploadPreviewStep.COLUMN_PREVIEW)
  }, [])

  return {
    step,
    setStep,
    csvTableDescriptor,
    setCsvTableDescriptor,
    uploadedFileHandleId,
    csvPreviewData,
    setCsvPreviewData,
    isLoadingPreview,
    setIsLoadingPreview,
    onFileUploaded,
  }
}
