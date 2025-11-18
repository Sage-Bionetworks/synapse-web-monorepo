import AMPALSResearchPageLayout from '@sage-bionetworks/synapse-portal-framework/components/ampals/AMPALSResearchPageLayout'
import MarkdownSynapse from 'synapse-react-client/components/Markdown/MarkdownSynapse'

function FrequentlyAskedQuestions() {
  return (
    <AMPALSResearchPageLayout headerTitle="Frequently Asked Questions">
      <MarkdownSynapse
        ownerId="syn64892175"
        wikiId="632193"
        loadingSkeletonRowCount={50}
      />
    </AMPALSResearchPageLayout>
  )
}

export default FrequentlyAskedQuestions
