import { Container } from '@mui/material'
import { useScrollOnMount } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/utils'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import { Markdown } from 'synapse-react-client/components/Markdown/MarkdownSynapse'

function DataAccess() {
  useScrollOnMount()
  return (
    <Container>
      <SectionLayout title={'Data Access Overview'}>
        <Markdown
          ownerId="syn27229419"
          wikiId="621276"
          loadingSkeletonRowCount={10}
        />
      </SectionLayout>
    </Container>
  )
}

export default DataAccess
