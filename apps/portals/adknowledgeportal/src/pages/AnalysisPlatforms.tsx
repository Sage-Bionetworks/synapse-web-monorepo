import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import MarkdownSynapse from 'synapse-react-client/components/Markdown/MarkdownSynapse'

function AnalysisPlatforms() {
  return (
    <SectionLayout title={'Analysis Platforms'}>
      <MarkdownSynapse
        ownerId="syn12666371"
        wikiId="625598"
        loadingSkeletonRowCount={10}
      />
    </SectionLayout>
  )
}

export default AnalysisPlatforms
