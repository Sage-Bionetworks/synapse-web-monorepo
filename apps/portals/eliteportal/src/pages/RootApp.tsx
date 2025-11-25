import App from '@sage-bionetworks/synapse-portal-framework/App'
import RepositoryUnderReviewAlert from '@sage-bionetworks/synapse-portal-framework/components/RepositoryUnderReviewAlert'
import TemporaryBanner from 'synapse-react-client/components/TemporaryBanner/TemporaryBanner'
import Link from '@mui/material/Link'
import FundingBanner from '@sage-bionetworks/synapse-portal-framework/components/eliteportal/FundingBanner'

function RootApp() {
  const description = (
    <>
      Seeking U.S. Researchers: Apply by January 26, 2026 for up to $132,500 to
      expand Exceptional Longevity research with NIA-funded data. View the full
      FOA and submission requirements{' '}
      <Link
        href="https://www.longevityconsortium.org/funding-opportunity/"
        target="_blank"
        rel="noopener noreferrer"
      >
        here
      </Link>
      .
    </>
  )
  return (
    <App>
      {/* PORTALS-3508 */}
      <RepositoryUnderReviewAlert portalSpecificDisclaimer="This repository is developed by Sage Bionetworks to host and share resources related to Exceptional Longevity research, and remains fully operational. We continue to maintain and accept longevity-related data and resources throughout this review process." />
      <TemporaryBanner deadline="2026-01-26" content={<FundingBanner />} />
    </App>
  )
}

export default RootApp
