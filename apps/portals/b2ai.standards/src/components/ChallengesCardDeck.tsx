import healthSvg from '@/assets/health.svg?url'
import soundSvg from '@/assets/sound.svg?url'
import { dataSql, DST_TABLE_COLUMN_NAMES } from '@/config/resources'
import { Query, QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { CardDeck } from 'synapse-react-client/components/CardDeck/CardDeck'
import { CardDeckCardProps } from 'synapse-react-client/components/CardDeck/CardDeckCardProps'
import { useGetQueryResultBundle } from 'synapse-react-client/synapse-queries/entity/useGetQueryResultBundle'
import useShowDesktop from 'synapse-react-client/utils/hooks/useShowDesktop'
import { ErrorBanner, SynapseConstants } from 'synapse-react-client'
import { getFieldIndex } from 'synapse-react-client/utils/functions/queryUtils'
import ResourcesDesktop from 'synapse-react-client/components/Resources/Resources.Desktop'
import ResourcesMobile from 'synapse-react-client/components/Resources/Resources.Mobile'
import { Data } from 'synapse-react-client/components/Resources/Resources'

function createExplorePageLink(query: Query): string {
  return `/Explore?QueryWrapper0=${encodeURIComponent(JSON.stringify(query))}`
}

const PRECISION_PUBLIC_HEALTH_CHALLENGE_FILTERED_QUERY: Query = {
  sql: dataSql,
  limit: 25,
  selectedFacets: [
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
      columnName: DST_TABLE_COLUMN_NAMES.RELEVANT_ORG_NAMES,
      facetValues: ['Precision Public Health Grand Challenge'],
    },
  ],
}

const CLINICAL_CARE_CHALLENGE_FILTERED_QUERY: Query = {
  sql: dataSql,
  limit: 25,
  selectedFacets: [
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
      columnName: DST_TABLE_COLUMN_NAMES.RELEVANT_ORG_NAMES,
      facetValues: ['AI/ML for Clinical Care Grand Challenge'],
    },
  ],
}

const CHALLENGE_CARDS: CardDeckCardProps[] = [
  {
    title: 'Precision Public Health Challenge',
    description:
      'Developing an ethically-sourced and diverse voice database linked to multimodal health biomarkers to assist in screening, diagnosis, and treatment of diseases.',
    ctaButtonText: 'Explore Standards',
    ctaButtonURL: createExplorePageLink(
      PRECISION_PUBLIC_HEALTH_CHALLENGE_FILTERED_QUERY,
    ),
    headerImage: <img src={soundSvg} />,
  },
  {
    title: 'Clinical Care Challenge',
    description:
      'Establishing the most diverse, high-resolution, ethically sourced, AI-ready data set to explore questions around improving recovery from acute illness',
    ctaButtonText: 'Explore Standards',
    ctaButtonURL: createExplorePageLink(CLINICAL_CARE_CHALLENGE_FILTERED_QUERY),
    headerImage: <img src={healthSvg} />,
  },
]

/**
 * Card view of challenges for the home page
 */
export function ChallengesCardDeck() {
  /*
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
  const results = useGetQueryResultBundle(`SELECT`)
  const {data, isLoading, } = results
  */
  return <CardDeck cards={CHALLENGE_CARDS} cardDeckType="b2ai" />
}

export default ChallengesCardDeck
