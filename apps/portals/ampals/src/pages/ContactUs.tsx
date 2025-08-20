import { MarkdownSynapse } from 'synapse-react-client/components/Markdown/MarkdownSynapse'
import AMPALSResearchPageLayout from '@sage-bionetworks/synapse-portal-framework/components/ampals/AMPALSResearchPageLayout'

function ContactUs() {
  return (
    <AMPALSResearchPageLayout
      headerTitle="Contact Us"
      sidebarTitle="Contact Us"
    >
      <MarkdownSynapse
        ownerId="syn64892175"
        wikiId="633933"
        loadingSkeletonRowCount={30}
      />
    </AMPALSResearchPageLayout>
  )
}

export default ContactUs
