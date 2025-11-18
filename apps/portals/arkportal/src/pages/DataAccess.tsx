import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import MarkdownSynapse from 'synapse-react-client/components/Markdown/MarkdownSynapse'

function DataAccess() {
  return (
    <SectionLayout title={'Data Access'}>
      <MarkdownSynapse
        ownerId={'syn26710600'}
        wikiId={'619468'}
        loadingSkeletonRowCount={8}
      />
    </SectionLayout>
  )
}

export default DataAccess
