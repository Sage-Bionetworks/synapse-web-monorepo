import App from '@sage-bionetworks/synapse-portal-framework/App'
import SurveyToast from '@sage-bionetworks/synapse-portal-framework/components/SurveyToast'

function RootApp() {
  return (
    <App>
      <SurveyToast
        localStorageKey={
          'org.sagebionetworks.security.cookies.portal.nfsurvey.dismissed'
        }
        description="Help us improve the NF Data Portal by completing a data access survey!"
        surveyURL="https://docs.google.com/forms/d/e/1FAIpQLSdSgkq66IoLHbvXNmMEjEg4nMELwM-_CaJK3rFkU9pn84gYuA/viewform"
      />
    </App>
  )
}

export default RootApp
