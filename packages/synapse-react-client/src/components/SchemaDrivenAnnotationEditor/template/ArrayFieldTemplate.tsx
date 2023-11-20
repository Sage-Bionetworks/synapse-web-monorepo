import {
  ADDITIONAL_PROPERTY_FLAG,
  ArrayFieldTemplateItemType,
  ArrayFieldTemplateProps,
  getTemplate,
  getUiOptions,
  RJSFSchema,
  StrictRJSFSchema,
} from '@rjsf/utils'
import React, { useEffect, useState } from 'react'
import { Box, Button, Collapse, IconButton, Tooltip } from '@mui/material'
import { HelpOutline } from '@mui/icons-material'
import { useAdditionalPropertyContext } from './AdditionalPropertyContext'
import { JSONSchema7 } from 'json-schema'
import { CustomFormContext } from '../CustomFormContext'
import { isEmpty } from 'lodash-es'

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

  const [showDetails, setShowDetails] = useState(false)
  /**
   * If we have an array of 0 items, go ahead and add one.
   */
  useEffect(() => {
    if (
      props.items.length === 0 &&
      !formContext?.allowRemovingLastItemInArray
    ) {
      props.onAddClick()
    }
  }, [props])

  return (
    <Box id={idSchema.$id} className={props.className}>
      <div className="LabelContainer">
        <ArrayFieldTitleTemplate {...props} />
        {!isAdditionalProperty && (
          <Tooltip title={'More Info'}>
            <IconButton
              onClick={e => {
                e.preventDefault()
                setShowDetails(!showDetails)
              }}
              aria-expanded={showDetails}
              size={'small'}
            >
              <HelpOutline
                color={'primary'}
                sx={{ width: '16px', height: '16px' }}
              />
            </IconButton>
          </Tooltip>
        )}
      </div>
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
                hasCopy={true}
                hasMoveUp={items.length > 1 && index != 0}
                hasMoveDown={items.length > 1 && index != items.length - 1}
                hasRemove={
                  isAdditionalProperty ||
                  items.length > 1 ||
                  Boolean(formContext?.allowRemovingLastItemInArray)
                }
                onDropIndexClick={
                  isAdditionalProperty &&
                  items.length == 1 &&
                  additionalPropertyContext
                    ? i => {
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
      <Collapse className="field-description" in={showDetails}>
        <ArrayFieldDescriptionTemplate
          idSchema={idSchema}
          schema={schema}
          description={(uiOptions.description || schema.description) ?? ''}
          uiSchema={uiSchema}
          registry={registry}
        />
      </Collapse>
    </Box>
  )
}

export default ArrayFieldTemplate
