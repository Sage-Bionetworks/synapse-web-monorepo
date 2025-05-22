import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import { DynamicForm } from 'synapse-react-client'

function SubmitAntibody() {
  return (
    <SectionLayout>
      <DynamicForm
        schemaUrl="https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/refs/heads/main/NF-Tools-Schemas/antibody/submitAntibody.json"
        uiSchemaUrl="https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/refs/heads/main/NF-Tools-Schemas/antibody/SubmitAntibodyUiSchema.json"
        postUrl="https://submit-form.com/KwZ46H4T"
      />
    </SectionLayout>
  )
}

export default SubmitAntibody
