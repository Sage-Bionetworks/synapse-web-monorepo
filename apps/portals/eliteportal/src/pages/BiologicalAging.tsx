import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import { Markdown } from 'synapse-react-client/components/Markdown/MarkdownSynapse'

function BiologicalAging() {
  return (
    <SectionLayout title={'Measuring Biological Aging'}>
      <Markdown
        ownerId="syn27229419"
        wikiId="630613"
        loadingSkeletonRowCount={15}
      />
    </SectionLayout>
  )
}

export default BiologicalAging
