import {
  TABLE_IDS,
  ORG_TABLE_COLUMN_NAMES,
  ORG_TABLE_JSON_COLUMNS,
  // standardsSql,
  // DST_TABLE_COLUMN_NAMES,
  GC_ORG_IDS,
} from '@/config/resources'
import { imageUrls } from '@/config/images'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { CardDeck } from 'synapse-react-client/components/CardDeck/CardDeck'
import { CardDeckCardProps } from 'synapse-react-client/components/CardDeck/CardDeckCardProps'
import useGetQueryResultBundle from 'synapse-react-client/synapse-queries/entity/useGetQueryResultBundle'
import { ErrorBanner, SynapseConstants } from 'synapse-react-client'
import { getFieldIndex } from 'synapse-react-client/utils/functions/queryUtils'

/**
 * Card view of challenges for the home page
 */

type useTableFetchProps = {
  entityId: string
  columns: string[]
  sql?: string
  whereClause?: string
  shouldRun?: boolean
}

export function useTableFetch({
  entityId,
  columns, // required
  sql, // if filters or aliases or anything are needed, pass in whole sql query
  whereClause, // or pass in where clause and will still use columns
  shouldRun = true, // if calling before ready, send false
}: useTableFetchProps) {
  if (!sql) {
    sql = `SELECT ${columns.join(', ')} FROM ${entityId}`
  }
  if (whereClause) {
    sql += ` WHERE ${whereClause}`
  }

  const queryBundleRequest: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId,
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    query: { sql },
  }
  return useGetQueryResultBundle(queryBundleRequest, {
    enabled: shouldRun,
    select: data => {
      const colIndexes = columns.map(column => ({
        column,
        index: getFieldIndex(column, data),
      }))
      const results: Record<string, string>[] =
        data?.queryResult?.queryResults.rows.map(el => {
          const values = el.values as string[]
          if (values.some(value => value === null)) {
            console.warn('Row has null value(s) when no nulls expected')
          }
          const result = {}
          colIndexes.forEach(({ column, index }) => {
            result[column] = values[index]
          })
          return result
        }) ?? []
      return results
    },
  })
}

export function ChallengesCardDeck() {
  const {
    data: gcOrgs = [],
    error: gcOrgsError,
    isLoading: isLoadingGcOrgsTableQuery,
  } = useTableFetch({
    entityId: TABLE_IDS.Organization.id,
    columns: Object.values(ORG_TABLE_COLUMN_NAMES),
    whereClause: `${ORG_TABLE_COLUMN_NAMES.ID} in (${GC_ORG_IDS.join(',')})`,
  })

  const orgs = {}
  for (const gcOrg of gcOrgs) {
    for (const key of ORG_TABLE_JSON_COLUMNS) {
      try {
        if (gcOrg[key]) {
          gcOrg[key] = JSON.parse(gcOrg[key])
        }
      } catch (error) {
        console.log(`Failed to parse ${key}:`, error)
      }
    }
    orgs[gcOrg[ORG_TABLE_COLUMN_NAMES.ID]] = gcOrg
  }

  if (gcOrgsError) {
    return <ErrorBanner error={gcOrgsError} />
  }
  const isLoading =
    // isLoadingChallengesTableQuery ||
    // isLoadingChallengesEntity ||
    isLoadingGcOrgsTableQuery
  if (isLoading) {
    return <div>Loading...</div>
  }

  const challengeCards: CardDeckCardProps[] = gcOrgs.map(gcOrg => {
    const orgId = gcOrg[ORG_TABLE_COLUMN_NAMES.ID]
    const img = <img src={imageUrls[orgId]} />

    const card: CardDeckCardProps = {
      title: gcOrg[ORG_TABLE_COLUMN_NAMES.NAME],
      description: gcOrg[ORG_TABLE_COLUMN_NAMES.DESCRIPTION],
      cardDeckType: 'b2ai',
      ctaButtonText: 'NOT USED IN cardDeckType = b2ai',
      // ctaButtonURL: createExplorePageLink(query),
      // ctaButtonURL: `/OrganizationDetailsPage?id=${DATASET_TABLE_COLUMN_NAMES.ID}`,
      ctaButtonURL: `/Explore/Organization/OrganizationDetailsPage?${
        ORG_TABLE_COLUMN_NAMES.ID
      }=${gcOrg[ORG_TABLE_COLUMN_NAMES.ID]}`,
      headerImage: img,
    }
    return card
  })

  return <CardDeck cards={challengeCards} cardDeckType="b2ai" />
}

export default ChallengesCardDeck
