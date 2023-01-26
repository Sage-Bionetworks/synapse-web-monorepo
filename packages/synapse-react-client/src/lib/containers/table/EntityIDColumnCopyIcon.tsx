import * as React from 'react'
import { useQueryContext } from '../QueryContext'
import { useSynapseContext } from '../../utils/SynapseContext'
import { InteractiveCopyIdsIcon } from '../InteractiveCopyIdsIcon'
import { displayToast } from '../ToastMessage'
import { QueryResultBundle, Row } from '../../utils/synapseTypes'
import { SynapseSpinner } from '../LoadingScreen'
import { SynapseConstants } from '../../utils'
import { getFullQueryTableResults } from '../../utils/SynapseClient'
import { parseEntityIdAndVersionFromSqlStatement } from '../../utils/functions/sqlFunctions'

const EntityIDColumnCopyIcon = () => {
  const synapseContext = useSynapseContext()
  const queryContext = useQueryContext()
  const [isLoading, setIsLoading] = React.useState(false)
  const [idData, setIdData] = React.useState<QueryResultBundle>()
  const [abortController, setAbortController] =
    React.useState<AbortController>()

  React.useEffect(() => {
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
    const { getLastQueryRequest } = queryContext
    const queryRequestClone = getLastQueryRequest()
    const { sql: oldSql } = queryRequestClone.query
    const { entityId, versionNumber } =
      parseEntityIdAndVersionFromSqlStatement(oldSql)!
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

  React.useEffect(() => {
    if (idData) {
      const { rows } = idData.queryResult!.queryResults
      const synIDs = rows
        .map((row: Row) => {
          return `${row.values[0]}`
        })
        .join('\n')
      // https://caniuse.com/mdn-api_clipboard_writetext
      navigator.clipboard.writeText(synIDs).then(() => {
        displayToast('Successfully copied to clipboard')
        setIdData(undefined)
      })
    }
  }, [idData])

  return isLoading ? (
    <SynapseSpinner size={25} />
  ) : (
    <InteractiveCopyIdsIcon
      onCopy={() => {
        handleCopyIdsToClipboard()
      }}
    />
  )
}

export default EntityIDColumnCopyIcon
