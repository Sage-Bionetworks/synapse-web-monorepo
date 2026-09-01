import { portalMetadata } from '@/config/portalMetadata'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import { createStaticMeta } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import { MarkdownSynapse } from 'synapse-react-client/components/Markdown/MarkdownSynapse'

export const meta = createStaticMeta({ title: 'Data Access' }, portalMetadata)

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
