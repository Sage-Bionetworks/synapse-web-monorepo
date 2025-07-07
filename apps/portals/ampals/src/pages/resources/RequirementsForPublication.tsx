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
        src="https://docs.google.com/forms/d/e/1FAIpQLSfjsLpVDzxRSs83qL_i4G8cq_DUYMGK8J10PKj3p9vve-0ftw/viewform?embedded=true"
        width="640"
        height="600"
      >
        Loading…
      </iframe>
    </AMPALSResearchPageLayout>
  )
}

export default RequirementsForPublication
