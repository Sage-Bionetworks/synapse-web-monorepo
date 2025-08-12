import {
  TABLE_IDS,
  ORG_TABLE_COLUMN_NAMES,
  ORG_TABLE_JSON_COLUMNS,
  GC_ORG_IDS,
} from '@/config/resources'
import { GCInfo } from '@/config/GrandChallengeResources'
import {
  QueryBundleRequest,
  ColumnSingleValueQueryFilter,
  ColumnSingleValueFilterOperator,
} from '@sage-bionetworks/synapse-types'
import { CardDeck } from 'synapse-react-client/components/CardDeck/CardDeck'
import { CardDeckCardProps } from 'synapse-react-client/components/CardDeck/CardDeckCardProps'
import useGetQueryResultBundle from 'synapse-react-client/synapse-queries/entity/useGetQueryResultBundle'
import { ErrorBanner, SynapseConstants } from 'synapse-react-client'
import { getFieldIndex } from 'synapse-react-client/utils/functions/queryUtils'

/**
 * Card view of challenges for the home page
 */

const COLS_NEEDED = ['ID', 'NAME', 'DESCRIPTION'].map(
  k => ORG_TABLE_COLUMN_NAMES[k],
)
export function ChallengesCardDeck() {
  const additionalFilters: ColumnSingleValueQueryFilter[] = [
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
      columnName: ORG_TABLE_COLUMN_NAMES.ID,
      operator: ColumnSingleValueFilterOperator.IN,
      values: GC_ORG_IDS.map(id => id.replace(/'/g, '')),
    },
  ]

  const queryBundleRequest: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId: TABLE_IDS.Organization.id,
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    query: {
      sql: `SELECT ${COLS_NEEDED.join(', ')} FROM ${TABLE_IDS.Organization.id}`,
      additionalFilters,
    },
  }

  const {
    data: queryResult,
    error: gcOrgsError,
    isLoading: isLoadingGcOrgsTableQuery,
  } = useGetQueryResultBundle(queryBundleRequest, {
    select: data => {
      const columns = COLS_NEEDED
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

  const gcOrgs = queryResult ?? []

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
  const isLoading = isLoadingGcOrgsTableQuery
  if (isLoading) {
    return <div>Loading...</div>
  }

  const challengeCards: CardDeckCardProps[] = gcOrgs.map(gcOrg => {
    const orgId = gcOrg[ORG_TABLE_COLUMN_NAMES.ID]
    const img = <img src={GCInfo[orgId].svg} />

    const card: CardDeckCardProps = {
      title: gcOrg[ORG_TABLE_COLUMN_NAMES.NAME],
      description: 'foo ' + gcOrg[ORG_TABLE_COLUMN_NAMES.DESCRIPTION],
      cardDeckType: 'b2ai',
      ctaButtonText: 'NOT USED IN cardDeckType = b2ai',
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
