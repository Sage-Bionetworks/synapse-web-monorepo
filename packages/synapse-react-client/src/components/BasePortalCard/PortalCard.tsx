import BasePortalCard from './BasePortalCard'
import ChallengePortalCard from './ChallengePortalCard/ChallengePortalCard'

type PortalCardProps = {
  sql?: string
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
    default:
      return (
        <BasePortalCard
          borderRadius={borderRadius}
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
          cardSize="medium"
        >
          <div style={{ padding: '16px' }}>
            <h2>Portal Card</h2>
            <p>No variant matched. Showing default Portal Card.</p>
          </div>
        </BasePortalCard>
      )
  }
}

export default PortalCard
