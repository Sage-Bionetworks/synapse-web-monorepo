import { ORG_TABLE_COLUMN_CONSTS, GC_ORG_IDS } from '@/config/resources'
import { GCInfo } from '@/config/GrandChallengeResources'
import { useFetchTableData } from '@/hooks/useFetchTableData'
import { CardDeck } from 'synapse-react-client/components/CardDeck/CardDeck'
import { CardDeckCardProps } from 'synapse-react-client/components/CardDeck/CardDeckCardProps'
import { ErrorBanner } from 'synapse-react-client'

/**
 * Card view of challenges for the home page
 */

const COLS_NEEDED = ['ID', 'NAME', 'DESCRIPTION'].map(k =>
  String(ORG_TABLE_COLUMN_CONSTS[k]),
)
export function ChallengesCardDeck() {
  const { data, error, isLoading } = useFetchTableData({
    tableName: 'Organization_denormalized',
    colExpressions: COLS_NEEDED,
    ids: GC_ORG_IDS,
  })
  console.log({ data, error, isLoading })
  const gcOrgs = data ?? []

  if (error) {
    return <ErrorBanner error={error} />
  }
  if (isLoading) {
    return <div>Loading...</div>
  }

  const challengeCards: CardDeckCardProps[] = gcOrgs.map(gcOrg => {
    const orgId = gcOrg[ORG_TABLE_COLUMN_CONSTS.ID]
    const img = <img src={GCInfo[orgId].svg} />

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
