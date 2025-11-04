import ChallengePortalCard from './ChallengePortalCard/ChallengePortalCard'

type PortalCardProps = {
  sql?: string
  /** The variant of the portal card. Add more portal variants here. */
  variant: 'challenge'
  /** border radius in px */
  borderRadius?: number
}

const PortalCard = ({ sql, variant, borderRadius }: PortalCardProps) => {
  switch (variant) {
    case 'challenge':
      if (!sql) {
        throw new Error('The "challenge" variant requires an SQL statement.')
      }
      return <ChallengePortalCard sql={sql} borderRadius={borderRadius} />
  }
}

export default PortalCard
