import { Container } from '@mui/material'
import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { useScrollOnMount } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/utils'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import { Markdown } from 'synapse-react-client/components/Markdown/MarkdownSynapse'

function ApprovedAccessRequests() {
  useScrollOnMount()
  return (
    <Container>
      <SectionLayout title={'Approved Access Requests'}>
        <Markdown
          ownerId="syn27229419"
          wikiId="640189"
          loadingSkeletonRowCount={10}
        />
      </SectionLayout>
      <DetailsPageContent
        content={[
          {
            title: 'The Arivale Scientific Wellness Study',
            id: 'Arivale',
            element: (
              <Markdown
                ownerId="syn27229419"
                wikiId="640292"
                loadingSkeletonRowCount={10}
              />
            ),
          },
          {
            title: 'Integrative Longevity Omics (ILO)',
            id: 'ILO',
            element: (
              <Markdown
                ownerId="syn27229419"
                wikiId="622485"
                loadingSkeletonRowCount={10}
              />
            ),
          },
          {
            title: 'The Longevity Consortium (LC)',
            id: 'LC',
            element: (
              <Markdown
                ownerId="syn27229419"
                wikiId="640285"
                loadingSkeletonRowCount={10}
              />
            ),
          },
          {
            title: 'The Longevity Genomics Consortium (LG)',
            id: 'LG',
            element: (
              <Markdown
                ownerId="syn27229419"
                wikiId="622372"
                loadingSkeletonRowCount={10}
              />
            ),
          },
          {
            title: 'The Long Life Family Study (LLFS) Danish Cohort',
            id: 'LLFS_Danish',
            element: (
              <Markdown
                markdown={`###Past Data Use Proposals\n\n**Project Lead:** Susheel Varma\n**Institution:** Sage Bionetworks\n**Data Access Request Submitted By:** @milan.vu\n**Intended Data Use Statement (accepted on 1/16/2026):**\n\nThis request is to enable access to the following datasets in order to perform data curation and scientific facilitation as part of my role on the Sage Bionetworks Exceptional Longevity Data Management and Coordination Center (EL DMCC) team.\n\nData sets requested: The Long Life Family Study (LLFS) Danish Family Cohort.`}
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
            title: 'The New England Centenarian Study (NECS)',
            id: 'NECS',
            element: (
              <Markdown
                ownerId="syn27229419"
                wikiId="640286"
                loadingSkeletonRowCount={10}
              />
            ),
          },
          {
            title: 'The SuperAgers Family Study',
            id: 'SuperAgers',
            element: (
              <Markdown
                ownerId="syn27229419"
                wikiId="640293"
                loadingSkeletonRowCount={10}
              />
            ),
          },
        ]}
      />
    </Container>
  )
}

export default ApprovedAccessRequests
