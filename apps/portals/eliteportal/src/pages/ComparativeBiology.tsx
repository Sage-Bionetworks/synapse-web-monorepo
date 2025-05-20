import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import { Markdown } from 'synapse-react-client/components/Markdown/MarkdownSynapse'

function ComparativeBiology() {
  return (
    <SectionLayout title={'Comparative Biology'}>
      <Markdown
        ownerId="syn27229419"
        wikiId="630611"
        loadingSkeletonRowCount={15}
      />
    </SectionLayout>
  )
}

export default ComparativeBiology
