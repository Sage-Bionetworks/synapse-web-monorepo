import { CTASection, PortalSectionHeader } from 'synapse-react-client'

function ELContributeYourData() {
  const content = (
    <PortalSectionHeader
      centered
      reverseButtonAndText
      title="Contribute Your Data"
      summaryText="If you are a funded portal contributor and ready to upload data to the
        ELITE Portal, you can begin the data submission process by contacting
        our data curation team through our service desk."
      buttonText="Start Contributing"
      link="https://sagebionetworks.jira.com/servicedesk/customer/portal/12"
      sx={{
        h2: {
          color: 'primary.contrastText',
          fontSize: '24px',
          borderColor: 'rgba(255, 255, 255, 0.40)',
        },
        '.MuiButton-root': { border: '1px solid white' },
        '& p': {
          fontSize: '16px',
          paddingBottom: '10px',
          color: 'primary.contrastText',
          width: '400px',
        },
      }}
    />
  )
  return <CTASection content={content} themeMode="dark" />
}

export default ELContributeYourData
