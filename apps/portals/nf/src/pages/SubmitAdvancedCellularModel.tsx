import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import DynamicForm from 'synapse-react-client/components/DynamicForm/DynamicForm'

function SubmitAdvancedCellularModel() {
  return (
    <SectionLayout>
      <DynamicForm
        schemaUrl="https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/refs/heads/main/NF-Tools-Schemas/advanced-cellular-model/submitAdvancedCellularModel.json"
        uiSchemaUrl="https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/refs/heads/main/NF-Tools-Schemas/advanced-cellular-model/submitAdvancedCellularModelUiSchema.json"
        postUrl="https://submit-form.com/KwZ46H4T"
      />
    </SectionLayout>
  )
}

export default SubmitAdvancedCellularModel
