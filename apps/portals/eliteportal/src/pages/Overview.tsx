import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import { Markdown } from 'synapse-react-client/components/Markdown/MarkdownSynapse'

function Overview() {
  return (
    <SectionLayout title={'Overview'}>
      <Markdown
        ownerId="syn27229419"
        wikiId="621273"
        loadingSkeletonRowCount={15}
      />
    </SectionLayout>
  )
}

export default Overview
