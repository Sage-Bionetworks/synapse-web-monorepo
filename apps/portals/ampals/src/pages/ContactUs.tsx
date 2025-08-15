import { MarkdownSynapse } from 'synapse-react-client/components/Markdown/MarkdownSynapse'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'

function ContactUs() {
  return (
    <SectionLayout
      title={'Contact Us'}
      ContainerProps={{ className: 'ContactUs' }}
    >
      <MarkdownSynapse
        ownerId="syn64892175"
        wikiId="633933"
        loadingSkeletonRowCount={30}
      />
    </SectionLayout>
  )
}

export default ContactUs
