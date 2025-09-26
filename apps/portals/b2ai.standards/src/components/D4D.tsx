import { GCInfo } from '@/config/GrandChallengeResources'
import { D4D_CONTENT_COLUMN_NAMES } from '@/config/resources'
import { useFetchTableData } from '@/hooks/useFetchTableData'
import { ErrorBanner } from 'synapse-react-client'

const colNames = [
  D4D_CONTENT_COLUMN_NAMES.CONTENT_ID,
  D4D_CONTENT_COLUMN_NAMES.CONTENT_TEXT,
]

type D4DProps = {
  org_id: string
}

export function D4D(props: D4DProps) {
  const { org_id } = props

  const {
    data = [],
    error,
    isLoading,
  } = useFetchTableData({
    tableName: 'D4D_content',
    colNames,
    id: org_id,
  })
  console.log({ data, error, isLoading })

  if (error) {
    return <ErrorBanner error={error} />
  }
  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <div className="d4d-styles">
      {data.map((d4d, index) => {
        return (
          <div
            key={index}
            dangerouslySetInnerHTML={{
              __html: d4d[D4D_CONTENT_COLUMN_NAMES.CONTENT_TEXT],
            }}
          />
        )
      })}
    </div>
  )
}

export function D4D_old(props: D4DProps) {
  const { org_id } = props
  const html = GCInfo[org_id]?.d4dHtml ?? ''

  if (!html) {
    return <div>No datasheet available for organization: {org_id}</div>
  }

  return (
    <div className="d4d-styles">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}
