import AMPALSResearchPageLayout from '@sage-bionetworks/synapse-portal-framework/components/ampals/AMPALSResearchPageLayout'
import { MarkdownSynapse } from 'synapse-react-client/components/Markdown/MarkdownSynapse'
import contributeDataSlat from '@/assets/contribute_data_slat.png'

function ContributeData() {
  return (
    <AMPALSResearchPageLayout
      headerTitle="Contribute Data"
      headerImageURL={contributeDataSlat}
      sidebarTitle="How to contribute data to the ALS Knowledge Portal"
    >
      <MarkdownSynapse
        ownerId="syn64892175"
        wikiId="632170"
        loadingSkeletonRowCount={50}
      />
    </AMPALSResearchPageLayout>
  )
}

export default ContributeData
