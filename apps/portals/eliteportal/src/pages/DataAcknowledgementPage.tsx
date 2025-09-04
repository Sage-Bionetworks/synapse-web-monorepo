import { AcknowledgementPage } from 'synapse-react-client/components/AcknowledgementsPage/AcknowledgementsPage'

function DataAcknowledgementPage() {
  return (
    <AcknowledgementPage
      portalName="ELITE Portal"
      createDoiHelpUrl="https://help.eliteportal.org/help/how-to-get-a-doi-for-your-publication"
      portalAcknowledgementProps={{
        ownerId: 'syn27229419',
        wikiId: '634761',
      }}
      dataAvailabilityProps={{
        ownerId: 'syn27229419',
        wikiId: '634762',
      }}
      studyAcknowledgementSql={
        "SELECT studyName, acknowledgment FROM syn57394664 where isReleased='true'"
      }
    />
  )
}

export default DataAcknowledgementPage
