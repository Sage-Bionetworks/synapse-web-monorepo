import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import { Markdown } from 'synapse-react-client/components/Markdown/MarkdownSynapse'

function AnalysisPlatforms() {
  return (
    <SectionLayout title={'Analysis Platforms'}>
      <Markdown
        ownerId="syn27229419"
        wikiId="621275"
        loadingSkeletonRowCount={10}
      />
    </SectionLayout>
  )
}

export default AnalysisPlatforms
