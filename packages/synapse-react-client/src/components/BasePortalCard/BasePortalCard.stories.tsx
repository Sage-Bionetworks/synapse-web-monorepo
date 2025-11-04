import BasePortalCard from './BasePortalCard'
import PortalCard from './PortalCard'

export default {
  title: 'Generic/PortalCard',
  component: BasePortalCard,
}

export const Challenge = () => (
  <PortalCard variant="challenge" sql="SELECT * FROM syn70820144" />
)
