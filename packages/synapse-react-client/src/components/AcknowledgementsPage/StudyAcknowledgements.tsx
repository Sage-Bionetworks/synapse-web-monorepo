import { useGetQueryResultBundleWithAsyncStatus } from '@/synapse-queries'
import { parseEntityIdFromSqlStatement } from '@/utils/functions'
import { BUNDLE_MASK_QUERY_RESULTS } from '@/utils/SynapseConstants'
import MarkdownCollapse from '../Markdown/MarkdownCollapse'
import { transformStringIntoMarkdownProps } from '../Markdown/MarkdownUtils'

export type StudyAcknowledgementsProps = {
  // First column should be the study name, second column should be the acknowledgement statement
  sql: string
}

export function StudyAcknowledgements({ sql }: StudyAcknowledgementsProps) {
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
        const acknowledgementStatement = row.values[1]
        return (
          <div key={index} style={{ marginBottom: '20px' }}>
            <strong>{studyName}</strong>
            {acknowledgementStatement && (
              <MarkdownCollapse
                {...transformStringIntoMarkdownProps(acknowledgementStatement)}
              />
            )}
          </div>
        )
      })}
    </>
  )
}
