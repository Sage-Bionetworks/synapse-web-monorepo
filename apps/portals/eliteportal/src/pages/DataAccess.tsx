import { Container } from '@mui/material'
import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { useScrollOnMount } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/utils'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import { Markdown } from 'synapse-react-client/components/Markdown/MarkdownSynapse'

function DataAccess() {
  useScrollOnMount()
  return (
    <Container>
      <SectionLayout title={'Data Access'}>
        <Markdown
          ownerId="syn27229419"
          wikiId="621276"
          loadingSkeletonRowCount={10}
        />
      </SectionLayout>
      <DetailsPageContent
        content={[
          {
            title:
              'The Characterization of Gene Associations with Aging-Related Traits with a Genetically-Predicted Transcriptome-Wide Association Study (ADAMTS7)',
            id: 'ADAMTS7',
            element: (
              <Markdown
                ownerId="syn27229419"
                wikiId="622372"
                loadingSkeletonRowCount={10}
              />
            ),
          },
          {
            title:
              'The Single Cell Transcriptomic Analysis of PBMCs in Extreme Longevity (ELPSCRNA) Study',
            id: 'ELPSCRNA',
            element: (
              <Markdown
                ownerId="syn27229419"
                wikiId="622485"
                loadingSkeletonRowCount={10}
              />
            ),
          },
          {
            title: 'The Long Life Family Study (LLFS) US Cohort',
            id: 'LLFS_US',
            element: (
              <Markdown
                ownerId="syn27229419"
                wikiId="622486"
                loadingSkeletonRowCount={10}
              />
            ),
          },
          {
            title: 'The Long Life Family Study (LLFS) Danish Cohort',
            id: 'LLFS_Danish',
            element: (
              <Markdown
                ownerId="syn27229419"
                wikiId="631447"
                loadingSkeletonRowCount={10}
              />
            ),
          },
        ]}
      />
    </Container>
  )
}

export default DataAccess
