import AdknowledgeContributeCard from '@sage-bionetworks/synapse-portal-framework/components/adknowledge/AdknowledgeContributeCard/AdknowledgeContributeCard'
import AdknowledgeHeader from '@sage-bionetworks/synapse-portal-framework/components/adknowledge/AdknowledgeHeader/AdknowledgeHeader'

function HomePageV2() {
  return (
    <div className="HomePageV2">
      <AdknowledgeHeader />
      <AdknowledgeContributeCard />
    </div>
  )
}

export default HomePageV2
