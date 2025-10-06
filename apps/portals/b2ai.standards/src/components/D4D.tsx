import { LinearProgress } from '@mui/material'
import { ErrorBanner } from 'synapse-react-client'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import useGetQueryResultBundle from 'synapse-react-client/synapse-queries/entity/useGetQueryResultBundle'
import {
  D4D_CONTENT_COLUMN_CONSTS,
  getColumnExpressions,
} from '@/config/resources'
import {
  getQueryBundleRequestWithIdFilter,
  getRowsAsObjects,
} from '@/hooks/fetchDataUtils'

type D4DProps = {
  org_id: string
}

export function D4D(props: D4DProps) {
  const { org_id } = props

  const colExpressions = getColumnExpressions({ tableName: 'D4D_content' })

  const queryBundleRequest: QueryBundleRequest =
    getQueryBundleRequestWithIdFilter('D4D_content', colExpressions, [org_id])

  const {
    data = [],
    error,
    isLoading,
  } = useGetQueryResultBundle(queryBundleRequest, {
    select: result => {
      return getRowsAsObjects(result)
    },
  })

  if (error) {
    return <ErrorBanner error={error} />
  }
  if (isLoading) {
    return <LinearProgress />
  }
  return (
    <div className="d4d-styles">
      {data.map((d4d, index) => {
        return (
          <div
            key={index}
            dangerouslySetInnerHTML={{
              __html: d4d[D4D_CONTENT_COLUMN_CONSTS.CONTENT_TEXT] ?? '',
            }}
          />
        )
      })}
    </div>
  )
}
