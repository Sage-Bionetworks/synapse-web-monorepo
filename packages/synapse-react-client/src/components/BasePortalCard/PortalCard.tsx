import ChallengePortalCard from './ChallengePortalCard/ChallengePortalCard'

type PortalCardProps = {
  sql?: string
  /** The variant of the portal card. Add more portal variants here. */
  variant: 'challenge'
  /** border radius in px */
  borderRadiusPx?: number
}

const PortalCard = ({ sql, variant, borderRadiusPx }: PortalCardProps) => {
  switch (variant) {
    case 'challenge':
      if (!sql) {
        throw new Error('The "challenge" variant requires an SQL statement.')
      }
      return <ChallengePortalCard sql={sql} borderRadiusPx={borderRadiusPx} />
  }
}

export default PortalCard
