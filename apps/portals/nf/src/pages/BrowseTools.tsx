import { popularSearchesSql, toolsSql } from '@/config/resources'
import NFBrowseToolsPage from '@sage-bionetworks/synapse-portal-framework/components/nf/NFBrowseToolsPage'

function BrowseTools() {
  return (
    <NFBrowseToolsPage
      popularSearchesSql={popularSearchesSql}
      toolsSql={toolsSql}
    />
  )
}

export default BrowseTools
