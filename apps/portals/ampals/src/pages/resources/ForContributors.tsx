import AMPALSResearchPageLayout from '@sage-bionetworks/synapse-portal-framework/components/ampals/AMPALSResearchPageLayout'
import contributorResourcesHeaderSlat from '@/assets/data_contributor_resources_slat.png'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import MarkdownSynapse from 'synapse-react-client/components/Markdown/MarkdownSynapse'

function ResourcesForContributors() {
  return (
    <AMPALSResearchPageLayout
      headerTitle="Resources"
      headerImageURL={contributorResourcesHeaderSlat}
      sidebarTitle="How to contribute data to the ALS Knowledge Portal"
      sidebarContent={
        <>
          <Typography>
            For questions or inquiries about contributing data, contact &nbsp;
            <Link href="mailto:alsKP@sagebase.org">alsKP@sagebase.org</Link>
          </Typography>
        </>
      }
    >
      <MarkdownSynapse
        ownerId="syn64892175"
        wikiId="632172"
        loadingSkeletonRowCount={50}
      />
    </AMPALSResearchPageLayout>
  )
}

export default ResourcesForContributors
