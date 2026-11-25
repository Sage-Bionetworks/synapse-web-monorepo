import AMPALSResearchPageLayout from '@sage-bionetworks/synapse-portal-framework/components/ampals/AMPALSResearchPageLayout'
import researcherResourcesHeaderSlat from '@/assets/researcher_resources_slat.png'
import { Link, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router'
import { MarkdownSynapse } from 'synapse-react-client/components/Markdown/MarkdownSynapse'

function ResourcesForResearchers() {
  return (
    <AMPALSResearchPageLayout
      headerTitle="Data Access Policy & Requirements"
      headerImageURL={researcherResourcesHeaderSlat}
      sidebarTitle="New to requesting data?"
      sidebarContent={
        <Typography>
          Start with the step-by-step guide on{' '}
          <Link component={RouterLink} to="/How to Access Data">
            How to Access Data
          </Link>
          . This page is the full policy it refers to.
        </Typography>
      }
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
