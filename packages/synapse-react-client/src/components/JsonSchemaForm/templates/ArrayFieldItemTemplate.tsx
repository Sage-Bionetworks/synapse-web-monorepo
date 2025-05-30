import { Box, GridLegacy as Grid } from '@mui/material'
import {
  ArrayFieldItemTemplateType,
  FormContextType,
  getTemplate,
  getUiOptions,
  RJSFSchema,
  StrictRJSFSchema,
} from '@rjsf/utils'

/** The `ArrayFieldItemTemplate` component is the template used to render an items of an array.
 *
 * @param props - The `ArrayFieldTemplateItemType` props for the component
 */
export default function ArrayFieldItemTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: ArrayFieldItemTemplateType<T, S, F>) {
  const { children, hasToolbar, uiSchema, registry, buttonsProps } = props
  const uiOptions = getUiOptions<T, S, F>(uiSchema)
  const ArrayFieldItemButtonsTemplate = getTemplate<
    'ArrayFieldItemButtonsTemplate',
    T,
    S,
    F
  >('ArrayFieldItemButtonsTemplate', registry, uiOptions)
  return (
    <Grid
      container
      className={`rjsf-array-item`}
      sx={{
        gap: 2,
        justifyContent: 'space-between',
      }}
    >
      <Grid item={true} xs>
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
          item={true}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 1,
            justifyContent: 'flex-start',
            alignSelf: 'start',
            my: 1,
          }}
        >
          <ArrayFieldItemButtonsTemplate {...buttonsProps} />
        </Grid>
      )}
    </Grid>
  )
}
