import { computationalSql } from '@/config/resources'
import ELBrowseToolsPage from '@sage-bionetworks/synapse-portal-framework/components/eliteportal/ELBrowseToolsPage'

function BrowseTools() {
  return (
    <ELBrowseToolsPage popularSearchesSql={''} toolsSql={computationalSql} />
  )
}

export default BrowseTools
