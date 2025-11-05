import { parseEntityIdAndVersionFromSqlStatement } from '@/utils/functions/SqlFunctions'
import BasePortalCard from './BasePortalCard'
import ColorfulPortalCardWithChips from './ColorfulPortalCardWithChips/ColorfulPortalCardWithChips'

export default {
  title: 'Generic/PortalCard',
  component: BasePortalCard,
}

const mockRow = {
  values: [
    'Challenge Title',
    'Challenge Name',
    'A brief description of the challenge.',
    'https://www.synapse.org',
    JSON.stringify(['Genomics', 'AI', 'Data Sharing']),
    'Open',
    '',
    '#BFE8F4',
  ],
}

const mockIndices = {
  title: 0,
  subtitle: 1,
  description: 2,
  learnMoreLink: 3,
  chips: 4,
  tag: 5,
  backgroundImage: 6,
  backgroundColor: 7,
}

const newChallengesSql = `SELECT * FROM syn70820144`

export const Default = () => {
  const { entityId } = parseEntityIdAndVersionFromSqlStatement(newChallengesSql)
  return (
    <ColorfulPortalCardWithChips
      row={mockRow}
      entityId={entityId}
      indices={mockIndices}
      sql={newChallengesSql}
      borderRadiusPx={8}
    />
  )
}
