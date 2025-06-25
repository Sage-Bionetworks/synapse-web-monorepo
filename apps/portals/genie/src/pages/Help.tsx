import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import { Markdown } from 'synapse-react-client/components/Markdown/MarkdownSynapse'

function Help() {
  return (
    <SectionLayout title={'Help'} ContainerProps={{ className: 'HelpPage' }}>
      <Markdown
        ownerId="syn53013218"
        wikiId="626556"
        loadingSkeletonRowCount={8}
      />
    </SectionLayout>
  )
}

export default Help
