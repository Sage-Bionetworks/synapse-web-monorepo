import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import DynamicForm from 'synapse-react-client/components/DynamicForm/DynamicForm'

function SubmitPatientDerivedModel() {
  return (
    <SectionLayout>
      <DynamicForm
        schemaUrl="https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/refs/heads/main/NF-Tools-Schemas/patient-derived-model/submitPatientDerivedModel.json"
        uiSchemaUrl="https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/refs/heads/main/NF-Tools-Schemas/patient-derived-model/submitPatientDerivedModelUiSchema.json"
        postUrl="https://submit-form.com/KwZ46H4T"
      />
    </SectionLayout>
  )
}

export default SubmitPatientDerivedModel
