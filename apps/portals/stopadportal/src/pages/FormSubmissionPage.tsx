import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import SynapseFormWrapper from 'synapse-react-client/components/SynapseForm/SynapseFormWrapper'
import { useGetFormPropsFromSearchParams } from 'synapse-react-client/components/SynapseForm'

function FormSubmissionPage() {
  const propsFromParams = useGetFormPropsFromSearchParams()

  return (
    <SectionLayout ContainerProps={{ maxWidth: false }}>
      <SynapseFormWrapper
        formSchemaEntityId="syn20680102"
        fileNamePath="naming.compound_name"
        formUiSchemaEntityId="syn20693568"
        formNavSchemaEntityId="syn20680027"
        formTitle="Your Submission"
        formClass="drug-upload-tool"
        {...propsFromParams}
      />
    </SectionLayout>
  )
}

export default FormSubmissionPage
