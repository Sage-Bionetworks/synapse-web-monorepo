import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import DynamicForm from 'synapse-react-client/components/DynamicForm/DynamicForm'

const SubmitComputationalTool = () => {
  return (
    <SectionLayout>
      <DynamicForm
        schemaUrl="https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/refs/heads/main/NF-Tools-Schemas/computational-tool/submitComputationalTool.json"
        uiSchemaUrl="https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/refs/heads/main/NF-Tools-Schemas/computational-tool/submitComputationalToolUiSchema.json"
        postUrl="https://submit-form.com/KwZ46H4T"
      />
    </SectionLayout>
  )
}

export default SubmitComputationalTool
