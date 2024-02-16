import React, { useEffect, useMemo, useState } from 'react'
import { Link } from '@mui/material'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { ProgrammaticInstructionsModal } from '../ProgrammaticInstructionsModal/ProgrammaticInstructionsModal'
import { useGetQueryResultBundleWithAsyncStatus } from '../../synapse-queries'
import { SynapseConstants } from '../../utils'
import {
  PYTHON_CLIENT_IMPORT_AND_LOGIN,
  R_CLIENT_IMPORT_AND_LOGIN,
} from '../DownloadCart/DirectProgrammaticDownload'

export type ProgrammaticTableDownloadProps = {
  queryBundleRequest: QueryBundleRequest
  onHide: () => void
}

export function ProgrammaticTableDownload({
  queryBundleRequest,
  onHide,
}: ProgrammaticTableDownloadProps) {
  const [generatedSql, setGeneratedSql] = useState('...')

  const {
    data: asyncJobStatus,
    isLoading: queryIsLoading,
    isPlaceholderData: newQueryIsFetching,
  } = useGetQueryResultBundleWithAsyncStatus(
    {
      ...queryBundleRequest,
      partMask: SynapseConstants.BUNDLE_MASK_COMBINED_SQL,
    },
    {
      placeholderData: previousData => previousData,
      throwOnError: true,
    },
  )

  const combinedSql = asyncJobStatus?.responseBody?.combinedSql
  const isLoadingNewBundle = queryIsLoading || newQueryIsFetching

  useEffect(() => {
    if (combinedSql && !isLoadingNewBundle) {
      // SWC-5686: The ID column is required by the client, and this column may not have been selected!
      // Change the SQL to "SELECT * ..."
      const indexOfFrom = combinedSql.toUpperCase().indexOf('FROM SYN')
      const selectStarTransformedSql = `SELECT * ${combinedSql.substring(
        indexOfFrom,
      )}`
      setGeneratedSql(selectStarTransformedSql)
    }
  }, [combinedSql, isLoadingNewBundle])

  // Replace quotation marks with escaped quotations. For CLI, also escape backticks.
  const commandLineSql = useMemo(
    () => generatedSql.replace(/(["`])/g, '\\$1'),
    [generatedSql],
  )

  const clientSql = useMemo(
    () => generatedSql.replace(/"/g, '\\"'),
    [generatedSql],
  )

  return (
    <ProgrammaticInstructionsModal
      show={true}
      onClose={onHide}
      title="Download Programmatically"
      cliNotes={
        <>
          This command line code will download Synapse files AND file
          annotations to your working directory.
        </>
      }
      cliCode={`synapse get -q "${commandLineSql}"`}
      rNotes={
        <>
          This R code will download file annotations only. Use{' '}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://help.synapse.org/docs/Get-Started-with-Downloading-Data.2004254837.html#GetStartedwithDownloadingData-DownloadingFiles"
          >
            synGet{'()'}
          </Link>{' '}
          to loop over the list of Synapse IDs from the file annotations to
          download files.
        </>
      }
      rCode={`${R_CLIENT_IMPORT_AND_LOGIN}
query ${'<-'} synTableQuery("${clientSql}")${'\n'}read.table(query$filepath, sep = ",")`}
      pythonNotes={
        <>
          This Python code will download file annotations only. Use{' '}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://help.synapse.org/docs/Get-Started-with-Downloading-Data.2004254837.html#GetStartedwithDownloadingData-DownloadingFiles"
          >
            syn.get
          </Link>{' '}
          to loop over the list of Synapse IDs from the file annotations to
          download files.
        </>
      }
      pythonCode={`${PYTHON_CLIENT_IMPORT_AND_LOGIN}
query = syn.tableQuery("${clientSql}")${'\n'}query.asDataFrame()`}
    />
  )
}

export default ProgrammaticTableDownload
