import ChallengePortalCard from './ChallengePortalCard/ChallengePortalCard'

type PortalCardProps = {
  sql?: string
  variant: 'challenge'
  /** border radius in px */
  borderRadius?: number
}

const PortalCard = ({
  sql = '',
  variant = 'challenge',
  borderRadius,
}: PortalCardProps) => {
  switch (variant) {
    case 'challenge':
      return <ChallengePortalCard sql={sql} borderRadius={borderRadius} />
  }
}

export default PortalCard
