import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import { Markdown } from 'synapse-react-client/components/Markdown/MarkdownSynapse'

function SWC7536Test() {
  return (
    <>
      <SectionLayout>
        <Markdown
          ownerId="syn71464286"
          wikiId="635819"
          loadingSkeletonRowCount={10}
        />
      </SectionLayout>
    </>
  )
}

export default SWC7536Test
