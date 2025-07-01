import DynamicForm from '@/components/DynamicForm/DynamicForm'

export type MarkdownJSONSchemaFormProps = {
  schemaUrl: string
  uiSchemaUrl?: string
  postUrl: string
}

export default function MarkdownJSONSchemaForm(
  props: MarkdownJSONSchemaFormProps,
) {
  const { schemaUrl, uiSchemaUrl, postUrl } = props
  return (
    <DynamicForm
      schemaUrl={schemaUrl}
      uiSchemaUrl={uiSchemaUrl}
      postUrl={postUrl}
    />
  )
}
