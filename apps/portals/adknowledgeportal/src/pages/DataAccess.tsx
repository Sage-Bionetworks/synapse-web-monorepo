import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import MarkdownSynapse from 'synapse-react-client/components/Markdown/MarkdownSynapse'

function DataAccess() {
  return (
    <SectionLayout title={'Data Access'}>
      <MarkdownSynapse
        ownerId="syn12666371"
        wikiId="581937"
        loadingSkeletonRowCount={20}
      />
    </SectionLayout>
  )
}

export default DataAccess
