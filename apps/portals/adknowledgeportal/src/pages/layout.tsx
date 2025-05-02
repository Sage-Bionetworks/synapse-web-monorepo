import App from '@sage-bionetworks/synapse-portal-framework/App'
import RepositoryUnderReviewAlert from '@sage-bionetworks/synapse-portal-framework/components/RepositoryUnderReviewAlert'
import SurveyToast from '@sage-bionetworks/synapse-portal-framework/components/SurveyToast'

export function Layout() {
  return (
    <App>
      {/* PORTALS-3508 */}
      <RepositoryUnderReviewAlert
        portalSpecificDisclaimer={
          "This repository is developed by Sage Bionetworks to host and share resources related to Alzheimer's Disease research, and remains fully operational. We continue to maintain and accept Alzheimer's disease-related data and resources throughout this review process."
        }
      />
      <SurveyToast
        localStorageKey="org.sagebionetworks.security.cookies.portal.adkpsurvey.dismissed"
        title="What Metrics Matter to You? Help Us Improve the AD Knowledge Portal!"
        description="Take our quick survey and share your feedback to make the portal even better. Your input will directly impact the data and insights we provide."
        surveyURL="https://docs.google.com/forms/d/e/1FAIpQLScpWL2N3LGQlNcqKRXQ-qST-UPKngutNkvbhPVkozD7cQR8-g/viewform"
      />
    </App>
  )
}

export default Layout
