import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import { Markdown } from 'synapse-react-client/components/Markdown/MarkdownSynapse'

function StandardMetadataCollectionTools() {
  return (
    <SectionLayout title={'Standard Metadata Collection Tools'}>
      <Markdown
        ownerId="syn68988177"
        wikiId="634947"
        loadingSkeletonRowCount={15}
      />
    </SectionLayout>
  )
}

export default StandardMetadataCollectionTools
