import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import { Markdown } from 'synapse-react-client/components/Markdown/MarkdownSynapse'

function DataCoordinatingCenter() {
  return (
    <SectionLayout title={'Data Coordinating Center'}>
      <Markdown
        ownerId="syn27229419"
        wikiId="639419"
        loadingSkeletonRowCount={15}
      />
    </SectionLayout>
  )
}

export default DataCoordinatingCenter
