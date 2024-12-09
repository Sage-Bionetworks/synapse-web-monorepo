import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { SynapseConstants } from '../../utils'
import { ErrorBanner } from '../error/ErrorBanner'
import useGetQueryResultBundle from '../../synapse-queries/entity/useGetQueryResultBundle'
import ResourcesDesktop from './Resources.Desktop'
import ResourcesMobile from './Resources.Mobile'
import useShowDesktop from '../../utils/hooks/useShowDesktop'
import { getFieldIndex } from '../../utils/functions/queryUtils'

export type ResourcesProps = {
  entityId: string
}

enum ExpectedColumns {
  NAME = 'Name',
  WIKI = 'Wiki',
}

export type Data = {
  name: string
  ownerId: string
  wikiId: string
}[]

export function Resources(props: ResourcesProps) {
  const { entityId } = props
  const showDesktop = useShowDesktop()

  const queryBundleRequest: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId,
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    query: {
      sql: `SELECT Name, Wiki FROM ${entityId} ORDER BY ItemOrder`,
    },
  }
  const { data: queryResultBundle, error } =
    useGetQueryResultBundle(queryBundleRequest)

  const nameIndex = getFieldIndex(ExpectedColumns.NAME, queryResultBundle)
  const wikiIndex = getFieldIndex(ExpectedColumns.WIKI, queryResultBundle)
  const data: Data =
    queryResultBundle?.queryResult?.queryResults.rows.map(el => {
      const values = el.values as string[]
      if (values.some(value => value === null)) {
        console.warn('Row has null value(s) when no nulls expected')
      }

      const name = values[nameIndex]
      const wikiValue = values[wikiIndex] ?? ''
      const split = wikiValue.split('/')
      const ownerId = split[0]
      const wikiId = split[2]
      return {
        name,
        ownerId,
        wikiId,
      }
    }) ?? []
  return (
    <div className="Resources">
      <ErrorBanner error={error} />
      {showDesktop ? (
        <ResourcesDesktop data={data} />
      ) : (
        <ResourcesMobile data={data} />
      )}
    </div>
  )
}

export default Resources
