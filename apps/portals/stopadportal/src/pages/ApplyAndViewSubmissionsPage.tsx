import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import SynapseFormSubmissionGrid from 'synapse-react-client/components/SynapseForm/SynapseFormSubmissionGrid'
import { Markdown } from 'synapse-react-client/components/Markdown/MarkdownSynapse'

function ApplyAndViewSubmissionsPage() {
  return (
    <SectionLayout>
      <Markdown ownerId="syn20717442" wikiId="595813" />
      <SynapseFormSubmissionGrid
        pathpart="/Apply/FormSubmission"
        formGroupId="9"
        itemNoun="Compound"
        formClass="drug-upload-tool"
      />
    </SectionLayout>
  )
}

export default ApplyAndViewSubmissionsPage
