import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import MarkdownSynapse from 'synapse-react-client/components/Markdown/MarkdownSynapse'

function ContributeHome() {
  return (
    <SectionLayout title={'Contribute'}>
      <MarkdownSynapse
        ownerId="syn12666371"
        wikiId="600033"
        loadingSkeletonRowCount={20}
      />
    </SectionLayout>
  )
}

export default ContributeHome
