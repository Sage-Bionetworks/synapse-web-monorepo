import healthSvg from '@/assets/health.svg?url'
import soundSvg from '@/assets/sound.svg?url'
import { dataSql, DST_TABLE_COLUMN_NAMES } from '@/config/resources'
import { Query } from '@sage-bionetworks/synapse-types'
import { CardDeck } from 'synapse-react-client/components/CardDeck/CardDeck'
import { CardDeckCardProps } from 'synapse-react-client/components/CardDeck/CardDeckCardProps'

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

export function ChallengesCardDeck() {
  return <CardDeck cards={CHALLENGE_CARDS} cardDeckType="b2ai" />
}

export default ChallengesCardDeck
