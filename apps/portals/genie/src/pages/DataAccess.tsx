import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import { Markdown } from 'synapse-react-client/components/Markdown/MarkdownSynapse'

function DataAccess() {
  return (
    <SectionLayout
      title={'Access'}
      ContainerProps={{ className: 'DataAccessPage' }}
    >
      <Markdown
        ownerId="syn53013218"
        wikiId="626697"
        loadingSkeletonRowCount={8}
      />
    </SectionLayout>
  )
}

export default DataAccess
