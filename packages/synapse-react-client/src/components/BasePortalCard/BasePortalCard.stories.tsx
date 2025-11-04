import BasePortalCard from './BasePortalCard'
import PortalCard from './PortalCard'

export default {
  title: 'Generic/PortalCard',
  component: BasePortalCard,
}

export const Default = () => (
  <BasePortalCard
    borderRadius={8}
    boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
    cardSize="medium"
  >
    <div style={{ padding: '16px' }}>
      <h2>Portal Card</h2>
      <p>No variant matched. Showing default Portal Card.</p>
    </div>
  </BasePortalCard>
)

export const Challenge = () => (
  <PortalCard
    variant="challenge"
    sql="SELECT * FROM syn70820144"
    borderRadius={8}
  />
)
