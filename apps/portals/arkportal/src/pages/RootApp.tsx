import App from '@sage-bionetworks/synapse-portal-framework/App'
import RepositoryUnderReviewAlert from '@sage-bionetworks/synapse-portal-framework/components/RepositoryUnderReviewAlert'

function RootApp() {
  return (
    <App>
      {/* PORTALS-3508 and PORTALS-3515 */}
      <RepositoryUnderReviewAlert portalSpecificDisclaimer="This repository is developed by Sage Bionetworks to host and share resources related to arthritis and autoimmune and related diseases, and remains fully operational. We continue to maintain and accept related data and resources throughout this review process." />
    </App>
  )
}

export default RootApp
