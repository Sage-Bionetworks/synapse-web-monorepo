import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import { Markdown } from 'synapse-react-client/components/Markdown/MarkdownSynapse'

function Organoids() {
  return (
    <SectionLayout title={'Organoids'}>
      <Markdown
        ownerId="syn27229419"
        wikiId="630615"
        loadingSkeletonRowCount={15}
      />
    </SectionLayout>
  )
}

export default Organoids
