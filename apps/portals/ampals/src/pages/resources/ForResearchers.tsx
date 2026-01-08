import AMPALSResearchPageLayout from '@sage-bionetworks/synapse-portal-framework/components/ampals/AMPALSResearchPageLayout'
import researcherResourcesHeaderSlat from '@/assets/researcher_resources_slat.png'
import MarkdownSynapse from 'synapse-react-client/components/Markdown/MarkdownSynapse'

function ResourcesForResearchers() {
  return (
    <AMPALSResearchPageLayout
      headerTitle="Resources"
      headerImageURL={researcherResourcesHeaderSlat}
      sidebarTitle="Resources for ALS researchers"
    >
      <MarkdownSynapse
        ownerId="syn64892175"
        wikiId="631452"
        loadingSkeletonRowCount={50}
      />
    </AMPALSResearchPageLayout>
  )
}

export default ResourcesForResearchers
