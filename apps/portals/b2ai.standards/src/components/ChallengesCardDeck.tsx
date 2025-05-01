import { isEmpty } from 'lodash'
import {
  dataSql,
  DST_TABLE_COLUMN_NAMES,
  ORG_TABLE_COLUMN_NAMES,
  CHALLENGES_TABLE_COLUMN_NAMES,
  challengesTableId,
  // dataSetTableId,
  organizationTableId,
} from '@/config/resources'
import { Query, QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { CardDeck } from 'synapse-react-client/components/CardDeck/CardDeck'
import { CardDeckCardProps } from 'synapse-react-client/components/CardDeck/CardDeckCardProps'
import useGetQueryResultBundle from 'synapse-react-client/synapse-queries/entity/useGetQueryResultBundle'
import {
  ErrorBanner,
  getFileHandleAssociation,
  SynapseConstants,
} from 'synapse-react-client'
import { getFieldIndex } from 'synapse-react-client/utils/functions/queryUtils'
import { useGetEntity } from 'synapse-react-client/synapse-queries/entity/useEntity'
import { ImageFileHandle } from 'synapse-react-client/components/widgets/ImageFileHandle'

/**
 * Card view of challenges for the home page
 */

function createExplorePageLink(query: Query): string {
  return `/Explore?QueryWrapper0=${encodeURIComponent(JSON.stringify(query))}`
}

type ObjList = {
  [key: string]: string
}[]
type useTableFetchProps = {
  entityId: string
  columns: string[]
  sql?: string
  shouldRun?: boolean
}

export function useTableFetch({
  entityId,
  columns, // required
  sql, // if filters or aliases or anything are needed, pass in whole sql query
  shouldRun = true, // if calling before ready, send false
}: useTableFetchProps) {
  let data: ObjList = []
  const error = undefined

  if (!sql) {
    sql = `SELECT ${columns.join(', ')} FROM ${entityId}`
  }

  const queryBundleRequest: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId,
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    query: { sql },
  }
  const queryResultBundle = useGetQueryResultBundle(queryBundleRequest, {
    enabled: shouldRun,
  })

  if (!shouldRun || error || !queryResultBundle?.data) {
    return { data, error }
  }

  const colIndexes = columns.map(column => ({
    column,
    index: getFieldIndex(column, queryResultBundle.data),
  }))

  data =
    queryResultBundle?.data?.queryResult?.queryResults.rows.map(el => {
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

  return { data, error }
}

export function ChallengesCardDeck() {
  const { data: challengesData = [], error: challengesError } = useTableFetch({
    entityId: challengesTableId,
    columns: [
      CHALLENGES_TABLE_COLUMN_NAMES.ORG_ID,
      CHALLENGES_TABLE_COLUMN_NAMES.IMG_HANDLE_ID,
    ],
  })

  const {
    data: challengesEntity,
    error: challengesEntityError,
    isLoading,
  } = useGetEntity(challengesTableId)

  const gcOrgIds = challengesData
    .map(c => c[CHALLENGES_TABLE_COLUMN_NAMES.ORG_ID])
    .map(id => `'${id}'`)
    .join(', ')

  const orgCols = [
    ORG_TABLE_COLUMN_NAMES.ID,
    ORG_TABLE_COLUMN_NAMES.NAME,
    ORG_TABLE_COLUMN_NAMES.DESCRIPTION,
  ]
  const { data: gcOrgData, error: gcOrgError } = useTableFetch({
    entityId: organizationTableId,
    columns: orgCols,
    sql: `SELECT ${orgCols.join(
      ', ',
    )} FROM ${organizationTableId} WHERE id IN (${gcOrgIds})`,
    shouldRun: !!challengesData?.length,
  })

  if (challengesEntityError) {
    return <ErrorBanner error={challengesEntityError} />
  }
  if (challengesError) {
    return <ErrorBanner error={challengesError} />
  }
  if (gcOrgError) {
    return <ErrorBanner error={gcOrgError} />
  }
  if (isLoading) {
    return <div style={{}}>Loading Challenges entity</div>
  }
  if (isEmpty(challengesData)) {
    return <div style={{}}>Loading Challenges table</div>
  }
  if (isEmpty(gcOrgData)) {
    return <div style={{}}>Loading org data for GCs</div>
  }

  const orgs = {}
  gcOrgData.forEach(org => {
    orgs[org[ORG_TABLE_COLUMN_NAMES.ID]] = org
  })

  const challengeCards: CardDeckCardProps[] = challengesData.map(challenge => {
    const org = orgs[challenge[CHALLENGES_TABLE_COLUMN_NAMES.ORG_ID]]
    const query: Query = {
      sql: dataSql,
      limit: 25,
      selectedFacets: [
        {
          concreteType:
            'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
          columnName: DST_TABLE_COLUMN_NAMES.RELEVANT_ORG_NAMES,
          facetValues: [org[ORG_TABLE_COLUMN_NAMES.NAME]],
        },
      ],
    }
    const imgHandleId = challenge[CHALLENGES_TABLE_COLUMN_NAMES.IMG_HANDLE_ID]
    const imgAssoc = getFileHandleAssociation(challengesEntity, imgHandleId)
    const img = (
      <ImageFileHandle key={imgHandleId} fileHandleAssociation={imgAssoc!} />
    )

    const card: CardDeckCardProps = {
      title: org[ORG_TABLE_COLUMN_NAMES.NAME],
      description: org[ORG_TABLE_COLUMN_NAMES.DESCRIPTION],
      ctaButtonText: 'Explore Standards',
      ctaButtonURL: createExplorePageLink(query),
      headerImage: img,
    }
    return card
  })

  return <CardDeck cards={challengeCards} cardDeckType="b2ai" />
}

export default ChallengesCardDeck
