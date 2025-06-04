import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import { DynamicForm } from 'synapse-react-client'

function SubmitGeneticReagent() {
  return (
    <SectionLayout>
      <DynamicForm
        schemaUrl="https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/refs/heads/main/NF-Tools-Schemas/genetic-reagent/submitGeneticReagent.json"
        uiSchemaUrl="https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/refs/heads/main/NF-Tools-Schemas/genetic-reagent/submitGeneticReagentUiSchema.json"
        postUrl="https://submit-form.com/KwZ46H4T"
      />
    </SectionLayout>
  )
}

export default SubmitGeneticReagent
