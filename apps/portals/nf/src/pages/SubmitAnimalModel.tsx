import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import { DynamicForm } from 'synapse-react-client'

function SubmitAnimalModel() {
  return (
    <SectionLayout>
      <DynamicForm
        schemaUrl="https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/refs/heads/main/NF-Tools-Schemas/animal-model/submitAnimalModel.json"
        uiSchemaUrl="https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/refs/heads/main/NF-Tools-Schemas/animal-model/SubmitAnimalModelUiSchema.json"
        postUrl="https://submit-form.com/KwZ46H4T"
      />
    </SectionLayout>
  )
}

export default SubmitAnimalModel
