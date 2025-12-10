import React from 'react'
import { getFullQueryTableResults } from '@/synapse-client/SynapseClient'
import { SynapseConstants } from '@/utils'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import { parseEntityIdAndVersionFromSqlStatement } from '@/utils/functions/SqlFunctions'
import { QueryResultBundle, Row } from '@sage-bionetworks/synapse-types'
import { useEffect, useMemo, useState } from 'react'
import {
  InteractiveCopyIdsIcon,
  InteractiveCopyIdsIconProps,
} from '../InteractiveCopyIdsIcon'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'
import { useQueryContext } from '../QueryContext/QueryContext'
import { displayToast } from '../ToastMessage/ToastMessage'
import { copyStringToClipboard } from '@/utils/functions/StringUtils'

type EntityIDColumnCopyIconProps = Omit<InteractiveCopyIdsIconProps, 'onCopy'>

const EntityIDColumnCopyIcon = (
  props: EntityIDColumnCopyIconProps,
): React.ReactNode => {
  const synapseContext = useSynapseContext()
  const { getCurrentQueryRequest } = useQueryContext()
  const queryRequestClone = useMemo(
    () => getCurrentQueryRequest(),
    [getCurrentQueryRequest],
  )
  const [isLoading, setIsLoading] = useState(false)
  const [idData, setIdData] = useState<QueryResultBundle>()
  const [abortController, setAbortController] = useState<AbortController>()

  useEffect(() => {
    if (!abortController) {
      setAbortController(new AbortController())
    }
    return () => {
      // clean up
      if (abortController) {
        abortController.abort()
      }
    }
  }, [abortController])
  /**
   * handle copy IDs to clipboard
   */
  const handleCopyIdsToClipboard = () => {
    setIsLoading(true)

    // ask for all pages of data
    const { sql: oldSql } = queryRequestClone.query
    const { entityId, versionNumber } =
      parseEntityIdAndVersionFromSqlStatement(oldSql)
    const versionNumberString = versionNumber ? `.${versionNumber}` : ''
    queryRequestClone.partMask = SynapseConstants.BUNDLE_MASK_QUERY_RESULTS
    const entityIdString = `${entityId}${versionNumberString}`
    const indexOfEntityId = oldSql.indexOf(entityIdString)
    queryRequestClone.query.sql = `select id from ${entityIdString}${oldSql.substring(
      indexOfEntityId + entityIdString.length,
    )}`
    getFullQueryTableResults(
      queryRequestClone,
      synapseContext.accessToken,
      abortController?.signal,
    )
      .then((data: QueryResultBundle) => {
        setIdData(data)
      })
      .catch((err: any) => {
        console.error(err)
        displayToast('Unable to query for all Synapse IDs to copy', 'danger')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    if (idData) {
      const { rows } = idData.queryResult!.queryResults
      const synIDs = rows
        .map((row: Row) => {
          return `${row.values[0]}`
        })
        .join('\n')
      copyStringToClipboard(synIDs).then(() => {
        displayToast('Successfully copied to clipboard')
        setIdData(undefined)
      })
    }
  }, [idData])

  return isLoading ? (
    <SynapseSpinner size={25} />
  ) : (
    <InteractiveCopyIdsIcon
      {...props}
      onCopy={() => {
        handleCopyIdsToClipboard()
      }}
    />
  )
}

export default EntityIDColumnCopyIcon
