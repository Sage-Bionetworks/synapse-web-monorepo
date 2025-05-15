import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import MarkdownSynapse from 'synapse-react-client/components/Markdown/MarkdownSynapse'
import SynapseFormWrapper from 'synapse-react-client/components/SynapseForm/SynapseFormWrapper'

function ContributeHome() {
  return (
    <SectionLayout>
      <MarkdownSynapse ownerId="syn12666371" wikiId="600034" />
      <SynapseFormWrapper
        formSchemaEntityId={'syn20692910'}
        fileNamePath={'study.submission_name'}
        formUiSchemaEntityId={'syn20692911'}
        formNavSchemaEntityId={'syn20968007'}
        isWizardMode={true}
        formTitle={'Your Contribution Request'}
        formClass={'contribution-request'}
      />
    </SectionLayout>
  )
}

export default ContributeHome
