import { CustomFormContext } from '@/components/JsonSchemaForm/CustomFormContext'
import { Box, Grid } from '@mui/material'
import {
  ArrayFieldItemTemplateProps,
  FormContextType,
  getTemplates,
  getUiOptions,
  RJSFSchema,
  StrictRJSFSchema,
} from '@rjsf/utils'
import { useArrayFieldParentContext } from './ArrayFieldParentContext'

/** The `ArrayFieldItemTemplate` component is the template used to render an items of an array.
 *
 * The last item of an array can only be removed if the form context allows it, except in a custom annotation, where
 * removing the last item removes the annotation.
 *
 * @param props - The `ArrayFieldItemTemplateProps` props for the component
 */
export default function ArrayFieldItemTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: ArrayFieldItemTemplateProps<T, S, F>) {
  const { children, hasToolbar, uiSchema, registry, buttonsProps, totalItems } =
    props
  const uiOptions = getUiOptions<T, S, F>(uiSchema, registry.globalUiOptions)
  const { ArrayFieldItemButtonsTemplate } = getTemplates<T, S, F>(
    registry,
    uiOptions,
  )
  const { removeProperty } = useArrayFieldParentContext()
  const allowRemovingLastItem = Boolean(
    (registry.formContext as CustomFormContext | undefined)
      ?.allowRemovingLastItemInArray,
  )
  const removesProperty = removeProperty !== undefined && totalItems === 1

  return (
    <Grid
      container
      className={`rjsf-array-item`}
      sx={{
        gap: 2,
        justifyContent: 'space-between',
      }}
    >
      <Grid size="grow">
        <Box
          sx={{
            mb: 2,
          }}
        >
          {children}
        </Box>
      </Grid>
      {hasToolbar && (
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 1,
            justifyContent: 'flex-start',
            alignSelf: 'start',
            my: 1,
          }}
        >
          <ArrayFieldItemButtonsTemplate
            {...buttonsProps}
            hasRemove={
              removesProperty ||
              (buttonsProps.hasRemove &&
                (totalItems > 1 || allowRemovingLastItem))
            }
            onRemoveItem={
              removesProperty ? removeProperty : buttonsProps.onRemoveItem
            }
          />
        </Grid>
      )}
    </Grid>
  )
}
