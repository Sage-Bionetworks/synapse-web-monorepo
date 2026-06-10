import App from '@sage-bionetworks/synapse-portal-framework/App'
import RepositoryUnderReviewAlert from '@sage-bionetworks/synapse-portal-framework/components/RepositoryUnderReviewAlert'
import SurveyDialog from '@sage-bionetworks/synapse-portal-framework/components/SurveyDialog'
import { ReactComponent as SurveyDialogImage } from '../assets/survey-dialog.svg'

export function Layout() {
  return (
    <App>
      {/* PORTALS-3508 */}
      <RepositoryUnderReviewAlert
        portalSpecificDisclaimer={
          "This repository is developed by Sage Bionetworks to host and share resources related to Alzheimer's Disease research, and remains fully operational. We continue to maintain and accept Alzheimer's disease-related data and resources throughout this review process."
        }
      />
      <SurveyDialog
        localStorageKey="adkp-survey-dialog-dismissed"
        Svg={SurveyDialogImage}
        title="Help Us Improve the ADKP Ecosystem!"
        description={
          <>
            We need your input! Please complete this 10-minute survey on how the
            ADKP influences your research outputs and career development.{' '}
            <strong>
              Your anonymous feedback helps us enhance our support for the AD
              research community.
            </strong>
          </>
        }
        surveyURL="https://docs.google.com/forms/d/e/1FAIpQLSewZ479nxfOpGvahaPG658aL0CjY_M3Ld9i6uDqIzyQhObC6w/viewform"
      />
    </App>
  )
}

export default Layout
