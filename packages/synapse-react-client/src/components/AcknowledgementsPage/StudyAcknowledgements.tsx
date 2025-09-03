import { useGetQueryResultBundleWithAsyncStatus } from '@/synapse-queries'
import { parseEntityIdFromSqlStatement } from '@/utils/functions'
import { BUNDLE_MASK_QUERY_RESULTS } from '@/utils/SynapseConstants'
import { StudyAcknowledgement } from './StudyAcknowledgement'
import { AcknowledgementItem } from './AcknowledgementsPage'

export type StudyAcknowledgementsProps = {
  // First column should be the study name, second column should be the acknowledgement statement
  sql: string
  onSelectChange?: (item: AcknowledgementItem, checked: boolean) => void
}

export function StudyAcknowledgements({
  sql,
  onSelectChange,
}: StudyAcknowledgementsProps) {
  const entityId = parseEntityIdFromSqlStatement(sql)
  const { data } = useGetQueryResultBundleWithAsyncStatus({
    entityId: entityId,
    query: {
      sql,
    },
    partMask: BUNDLE_MASK_QUERY_RESULTS,
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  })

  // get raw data.  parse and then inject?  or just inject without parsing?
  const rows = data?.responseBody?.queryResult?.queryResults?.rows
  return (
    <>
      {rows?.map((row, index) => {
        const studyName = row.values[0]
        const acknowledgementStatementWikiRef = row.values[1]
        if (!studyName || !acknowledgementStatementWikiRef) {
          return null
        }
        return (
          <StudyAcknowledgement
            key={index}
            studyName={studyName}
            acknowledgementStatementWikiRef={acknowledgementStatementWikiRef}
            onSelectChange={onSelectChange}
          />
        )
      })}
    </>
  )
}
