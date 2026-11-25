import { RJSFInputLabelWrapper } from '@/components/JsonSchemaForm/templates/RJSFInputLabel'
import { Box, Button } from '@mui/material'
import {
  ADDITIONAL_PROPERTY_FLAG,
  ArrayFieldTemplateProps,
  getTemplates,
  getUiOptions,
  hasSchemaMarker,
  RJSFSchema,
  StrictRJSFSchema,
} from '@rjsf/utils'
import { useEffect, useMemo } from 'react'
import { CustomFormContext } from '../CustomFormContext'
import { useAdditionalPropertyContext } from '../../SchemaDrivenAnnotationEditor/template/AdditionalPropertyContext'
import {
  ArrayFieldParentContext,
  ArrayFieldParentContextType,
} from './ArrayFieldParentContext'

/** The `ArrayFieldTemplate` component is the template used to render all items in an array.
 *
 * @param props - The `ArrayFieldTemplateProps` props for the component
 */
function ArrayFieldTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends CustomFormContext = any,
>(props: ArrayFieldTemplateProps<T, S, F>) {
  const {
    id,
    uiSchema,
    items,
    registry,
    schema,
    disabled,
    readonly,
    onAddClick,
  } = props
  const formContext = registry.formContext as CustomFormContext | undefined
  const uiOptions = getUiOptions<T, S, F>(uiSchema, registry.globalUiOptions)
  const { ArrayFieldTitleTemplate, ArrayFieldDescriptionTemplate } =
    getTemplates<T, S, F>(registry, uiOptions)

  const isAdditionalProperty = hasSchemaMarker(schema, ADDITIONAL_PROPERTY_FLAG)
  const additionalPropertyContext = useAdditionalPropertyContext()
  const removeProperty = isAdditionalProperty
    ? additionalPropertyContext?.dropProperty
    : undefined
  const parentContext = useMemo<ArrayFieldParentContextType>(
    () => ({ removeProperty }),
    [removeProperty],
  )

  /**
   * If
   *  - we have an array of 0 items AND
   *  - we do not permit arrays of 0 items
   * go ahead and automatically add one.
   */
  const autoAdd =
    // Do not manipulate if the widget is hidden (e.g. 'scopeIds' in an EntityView)
    // FIXME: We should probably remove this hook and migrate to a design that accommodates empty arrays.
    uiOptions.widget !== 'hidden' &&
    items.length === 0 &&
    !formContext?.allowRemovingLastItemInArray
  useEffect(() => {
    if (autoAdd) {
      onAddClick()
    }
  }, [autoAdd, onAddClick])

  const description = uiOptions.description || schema.description

  return (
    <Box id={id} className={props.className}>
      <RJSFInputLabelWrapper
        fieldLabel={
          <ArrayFieldTitleTemplate
            id={id}
            title={uiOptions.title || props.title}
            schema={schema}
            uiSchema={uiSchema}
            required={props.required}
            registry={registry}
          />
        }
        description={
          // RJSF always renders `description` as a DescriptionFieldTemplate node, even when
          // there's no description text, so gate on the raw text instead of the rendered node.
          description && (
            <ArrayFieldDescriptionTemplate
              id={id}
              schema={schema}
              description={description}
              uiSchema={uiSchema}
              registry={registry}
            />
          )
        }
        registry={registry}
      >
        {items.length === 0 && (
          <Button
            variant={'outlined'}
            onClick={onAddClick}
            disabled={disabled || readonly}
          >
            Add item
          </Button>
        )}
        <ArrayFieldParentContext.Provider value={parentContext}>
          {items}
        </ArrayFieldParentContext.Provider>
      </RJSFInputLabelWrapper>
    </Box>
  )
}

export default ArrayFieldTemplate
