import { ORG_TABLE_COLUMN_NAMES, GC_ORG_IDS } from '@/config/resources'
import { GCInfo } from '@/config/GrandChallengeResources'
import { useOrgQuery } from '@/hooks/useOrgQuery'
import { CardDeck } from 'synapse-react-client/components/CardDeck/CardDeck'
import { CardDeckCardProps } from 'synapse-react-client/components/CardDeck/CardDeckCardProps'
import { ErrorBanner } from 'synapse-react-client'

/**
 * Card view of challenges for the home page
 */

const COLS_NEEDED = ['ID', 'NAME', 'DESCRIPTION'].map(k =>
  String(ORG_TABLE_COLUMN_NAMES[k]),
)
export function ChallengesCardDeck() {
  const { data, error, isLoading } = useOrgQuery({
    columns: COLS_NEEDED,
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
    const orgId = gcOrg[ORG_TABLE_COLUMN_NAMES.ID]
    const img = <img src={GCInfo[orgId].svg} />

    const card: CardDeckCardProps = {
      title: gcOrg[ORG_TABLE_COLUMN_NAMES.NAME],
      description: gcOrg[ORG_TABLE_COLUMN_NAMES.DESCRIPTION],
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
