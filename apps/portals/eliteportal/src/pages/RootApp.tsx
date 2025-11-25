import App from '@sage-bionetworks/synapse-portal-framework/App'
import RepositoryUnderReviewAlert from '@sage-bionetworks/synapse-portal-framework/components/RepositoryUnderReviewAlert'
import FundingBanner from '@sage-bionetworks/synapse-portal-framework/components/eliteportal/FundingBanner'

function RootApp() {
  return (
    <App>
      {/* PORTALS-3508 */}
      <RepositoryUnderReviewAlert portalSpecificDisclaimer="This repository is developed by Sage Bionetworks to host and share resources related to Exceptional Longevity research, and remains fully operational. We continue to maintain and accept longevity-related data and resources throughout this review process." />
      <FundingBanner />
    </App>
  )
}

export default RootApp
