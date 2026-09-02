import { portalMetadata } from '@/config/portalMetadata'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import { createStaticMeta } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import { MarkdownSynapse } from 'synapse-react-client/components/Markdown/MarkdownSynapse'

export const meta = createStaticMeta({ title: 'About' }, portalMetadata)

function About() {
  return (
    <SectionLayout title={'About'}>
      <MarkdownSynapse
        ownerId={'syn26710600'}
        wikiId={'619467'}
        loadingSkeletonRowCount={8}
      />
    </SectionLayout>
  )
}

export default About
