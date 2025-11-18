import AMPALSResearchPageLayout from '@sage-bionetworks/synapse-portal-framework/components/ampals/AMPALSResearchPageLayout'
import MarkdownSynapse from 'synapse-react-client/components/Markdown/MarkdownSynapse'

function PublishingRequirements() {
  return (
    <AMPALSResearchPageLayout
      headerTitle="Publishing Requirements"
      sidebarTitle="ALSKP Publication Policy Guidelines"
    >
      <MarkdownSynapse
        ownerId="syn64892175"
        wikiId="632170"
        loadingSkeletonRowCount={20}
      />
    </AMPALSResearchPageLayout>
  )
}

export default PublishingRequirements
