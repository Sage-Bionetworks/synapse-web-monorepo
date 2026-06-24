import AMPALSResearchPageLayout from '@sage-bionetworks/synapse-portal-framework/components/ampals/AMPALSResearchPageLayout'
import { MarkdownSynapse } from 'synapse-react-client/components/Markdown/MarkdownSynapse'

function ApprovedAccessRequests() {
  return (
    <AMPALSResearchPageLayout
      headerTitle="Approved Access Requests"
      sidebarTitle="Intended Data Use Statements"
    >
      <MarkdownSynapse
        ownerId="syn64892175"
        wikiId="641026"
        loadingSkeletonRowCount={50}
      />
      <MarkdownSynapse
        ownerId="syn64892175"
        wikiId="641027"
        loadingSkeletonRowCount={50}
      />
    </AMPALSResearchPageLayout>
  )
}

export default ApprovedAccessRequests
