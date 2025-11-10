import { CardDeck } from 'synapse-react-client/components/CardDeck/CardDeck'
import { CardDeckCardProps } from 'synapse-react-client/components/CardDeck/CardDeckCardProps'
import { ErrorBanner } from 'synapse-react-client'
import useGetQueryResultBundle from 'synapse-react-client/synapse-queries/entity/useGetQueryResultBundle'
import { ORG_TABLE_COLUMN_CONSTS, GC_ORG_IDS } from '@/config/resources'
import { GCImages } from '@/config/GrandChallengeImages'
import {
  getQueryBundleRequestWithIdFilter,
  getRowsAsObjects,
} from '@/hooks/fetchDataUtils'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'

/**
 * Card view of challenges for the home page
 */

const COLS_NEEDED = ['ID', 'NAME', 'DESCRIPTION'].map(k =>
  String(ORG_TABLE_COLUMN_CONSTS[k]),
)
export function ChallengesCardDeck() {
  const queryBundleRequest: QueryBundleRequest =
    getQueryBundleRequestWithIdFilter(
      'Organization_denormalized',
      COLS_NEEDED,
      GC_ORG_IDS,
    )

  const {
    data = [],
    error,
    isLoading,
  } = useGetQueryResultBundle(queryBundleRequest, {
    select: result => {
      return getRowsAsObjects(result)
    },
  })
  const gcOrgs = (data ?? []) as Record<string, string>[]

  if (error) {
    return <ErrorBanner error={error} />
  }
  if (isLoading) {
    return <div>Loading...</div>
  }

  const challengeCards: CardDeckCardProps[] = gcOrgs.map(gcOrg => {
    const orgId = gcOrg[ORG_TABLE_COLUMN_CONSTS.ID]
    const img = <img src={GCImages[orgId]} alt={`image for ${orgId}`} />

    const card: CardDeckCardProps = {
      title: gcOrg[ORG_TABLE_COLUMN_CONSTS.NAME],
      description: gcOrg[ORG_TABLE_COLUMN_CONSTS.DESCRIPTION],
      cardDeckType: 'b2ai',
      ctaButtonText: 'NOT USED IN cardDeckType = b2ai',
      ctaButtonURL: `/Explore/Organization/OrganizationDetailsPage?${
        ORG_TABLE_COLUMN_CONSTS.ID
      }=${gcOrg[ORG_TABLE_COLUMN_CONSTS.ID]}`,
      headerImage: img,
    }
    return card
  })

  return <CardDeck cards={challengeCards} cardDeckType="b2ai" />
}

export default ChallengesCardDeck
