import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import { Markdown } from 'synapse-react-client/components/Markdown/MarkdownSynapse'

function ContributeData() {
  return (
    <SectionLayout title={'Contribute Data'}>
      <Markdown
        ownerId="syn68988177"
        wikiId="635439"
        loadingSkeletonRowCount={15}
      />
    </SectionLayout>
  )
}

export default ContributeData
