import { RJSFInputLabelWrapper } from '@/components/JsonSchemaForm/templates/RJSFInputLabel'
import { Box, Button } from '@mui/material'
import {
  ADDITIONAL_PROPERTY_FLAG,
  ArrayFieldTemplateItemType,
  ArrayFieldTemplateProps,
  getTemplate,
  getUiOptions,
  RJSFSchema,
  StrictRJSFSchema,
} from '@rjsf/utils'
import { JSONSchema7 } from 'json-schema'
import { isEmpty } from 'lodash-es'
import { useEffect } from 'react'
import { CustomFormContext } from '../CustomFormContext'
import { useAdditionalPropertyContext } from '../../SchemaDrivenAnnotationEditor/template/AdditionalPropertyContext'

/** The `ArrayFieldTemplate` component is the template used to render all items in an array.
 *
 * @param props - The `ArrayFieldTemplateItemType` props for the component
 */
function ArrayFieldTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends CustomFormContext = any,
>(props: ArrayFieldTemplateProps<T, S, F>) {
  const { idSchema, uiSchema, items, registry, schema, formContext } = props
  const uiOptions = getUiOptions<T, S, F>(uiSchema)
  const ArrayFieldTitleTemplate = getTemplate<
    'ArrayFieldTitleTemplate',
    T,
    S,
    F
  >('ArrayFieldTitleTemplate', registry, uiOptions)

  const ArrayFieldDescriptionTemplate = getTemplate<
    'ArrayFieldDescriptionTemplate',
    T,
    S,
    F
  >('ArrayFieldDescriptionTemplate', registry, uiOptions)
  const ArrayFieldItemTemplate = getTemplate<'ArrayFieldItemTemplate', T, S, F>(
    'ArrayFieldItemTemplate',
    registry,
    uiOptions,
  )

  const isAdditionalProperty = !!(
    props.schema as JSONSchema7 & Record<typeof ADDITIONAL_PROPERTY_FLAG, any>
  )[ADDITIONAL_PROPERTY_FLAG]
  const additionalPropertyContext = useAdditionalPropertyContext()

  /**
   * If
   *  - we have an array of 0 items AND
   *  - we do not permit arrays of 0 items
   * go ahead and automatically add one.
   */
  useEffect(() => {
    if (
      props.items.length === 0 &&
      !formContext?.allowRemovingLastItemInArray
    ) {
      props.onAddClick()
    }
  }, [props, formContext?.allowRemovingLastItemInArray])

  return (
    <Box id={idSchema.$id} className={props.className}>
      <RJSFInputLabelWrapper
        fieldLabel={<ArrayFieldTitleTemplate {...props} />}
        description={
          <ArrayFieldDescriptionTemplate
            idSchema={idSchema}
            schema={schema}
            description={(uiOptions.description || schema.description) ?? ''}
            uiSchema={uiSchema}
            registry={registry}
          />
        }
        registry={registry}
      >
        {(!items || isEmpty(items)) && (
          <Button variant={'outlined'} onClick={props.onAddClick}>
            Add item
          </Button>
        )}
        {items && (
          <>
            {items.map(
              ({
                key,
                index,
                ...itemProps
              }: ArrayFieldTemplateItemType<T, S, F>) => (
                <ArrayFieldItemTemplate
                  key={key}
                  index={index}
                  {...itemProps}
                  hasRemove={
                    // Override hasRemove to prevent removing the last item in an array (except additional properties),
                    // unless overridden by formContext
                    isAdditionalProperty ||
                    items.length > 1 ||
                    Boolean(formContext?.allowRemovingLastItemInArray)
                  }
                  onDropIndexClick={
                    isAdditionalProperty &&
                    items.length == 1 &&
                    additionalPropertyContext
                      ? () => {
                          return e => {
                            additionalPropertyContext.dropProperty(e)
                          }
                        }
                      : itemProps.onDropIndexClick
                  }
                />
              ),
            )}
          </>
        )}
      </RJSFInputLabelWrapper>
    </Box>
  )
}

export default ArrayFieldTemplate
