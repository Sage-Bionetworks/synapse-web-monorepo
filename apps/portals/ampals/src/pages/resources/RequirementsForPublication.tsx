import AMPALSResearchPageLayout from '@sage-bionetworks/synapse-portal-framework/components/ampals/AMPALSResearchPageLayout'
import publishingRequirementsSlat from '@/assets/publishing_requirements.png'
import { MarkdownSynapse } from 'synapse-react-client/components/Markdown/MarkdownSynapse'

function RequirementsForPublication() {
  return (
    <AMPALSResearchPageLayout
      headerTitle="Requirements for Publication"
      headerImageURL={publishingRequirementsSlat}
      sidebarTitle="Using data from the ALS Knowledge Portal in publications"
    >
      <MarkdownSynapse
        ownerId="syn64892175"
        wikiId="632170"
        loadingSkeletonRowCount={50}
      />
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdZCSXj3DHZxshCNk2bgSHkCGFHL5qsfoaid51plQb5QV4nBg/viewform?embedded=true"
        width="640"
        height="414"
      >
        Loading…
      </iframe>
    </AMPALSResearchPageLayout>
  )
}

export default RequirementsForPublication
