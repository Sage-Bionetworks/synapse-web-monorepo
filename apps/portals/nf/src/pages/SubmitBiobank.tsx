import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import DynamicForm from 'synapse-react-client/components/DynamicForm/DynamicForm'

function SubmitBiobank() {
  return (
    <SectionLayout>
      <DynamicForm
        schemaUrl="https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/refs/heads/main/NF-Tools-Schemas/biobank/submitBiobank.json"
        uiSchemaUrl="https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/refs/heads/main/NF-Tools-Schemas/biobank/submitBiobankUiSchema.json"
        postUrl="https://submit-form.com/KwZ46H4T"
      />
    </SectionLayout>
  )
}

export default SubmitBiobank
