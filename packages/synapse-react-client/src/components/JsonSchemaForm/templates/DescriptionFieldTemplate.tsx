import { CustomFormContext } from '@/components/JsonSchemaForm/CustomFormContext'
import { DescriptionFieldProps } from '@rjsf/utils'
import { Typography } from '@mui/material'
import FieldDescriptionTable from './FieldDescriptionTable'

export default function DescriptionFieldTemplate(props: DescriptionFieldProps) {
  const { id, description, schema = {}, registry } = props

  const descriptionFormat =
    (registry.formContext as CustomFormContext).descriptionFormat || 'string'

  if (schema.type === 'object') {
    return (
      <Typography variant={'body1'} sx={{ my: 2 }}>
        {description}
      </Typography>
    )
  }

  if (descriptionFormat === 'string') {
    // The id is what a field's input names in `aria-describedby`.
    return (
      <Typography id={id} variant={'body1'}>
        {description}
      </Typography>
    )
  }

  return <FieldDescriptionTable schema={schema} description={description} />
}
