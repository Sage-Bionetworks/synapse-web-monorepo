import App from '@sage-bionetworks/synapse-portal-framework/App'
import RepositoryUnderReviewAlert from '@sage-bionetworks/synapse-portal-framework/components/RepositoryUnderReviewAlert'

export function Layout() {
  return (
    <App>
      {/* PORTALS-3508 */}
      <RepositoryUnderReviewAlert
        portalSpecificDisclaimer={
          "This repository is developed by Sage Bionetworks to host and share resources related to Alzheimer's Disease research, and remains fully operational. We continue to maintain and accept Alzheimer's disease-related data and resources throughout this review process."
        }
      />
    </App>
  )
}

export default Layout
