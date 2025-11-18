import AMPALSResearchPageLayout from '@sage-bionetworks/synapse-portal-framework/components/ampals/AMPALSResearchPageLayout'
import pwleResourcesHeaderSlat from '@/assets/pwles_resources_slat.png'
import MarkdownSynapse from 'synapse-react-client/components/Markdown/MarkdownSynapse'

function ResourcesForPWLEs() {
  return (
    <AMPALSResearchPageLayout
      headerTitle="Resources"
      headerImageURL={pwleResourcesHeaderSlat}
      sidebarTitle="Resources for ALS patients and people with lived experience"
    >
      <MarkdownSynapse
        ownerId="syn64892175"
        wikiId="631453"
        loadingSkeletonRowCount={50}
      />
    </AMPALSResearchPageLayout>
  )
}

export default ResourcesForPWLEs
