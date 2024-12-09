import { Box, Grid } from '@mui/material'
import {
  ArrayFieldTemplateItemType,
  FormContextType,
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
>(props: ArrayFieldTemplateItemType<T, S, F>) {
  const {
    children,
    disabled,
    hasToolbar,
    hasCopy,
    hasMoveDown,
    hasMoveUp,
    hasRemove,
    index,
    onCopyIndexClick,
    onDropIndexClick,
    onReorderClick,
    readonly,
    uiSchema,
    registry,
    onAddIndexClick,
  } = props
  const { CopyButton, MoveDownButton, MoveUpButton, RemoveButton, AddButton } =
    registry.templates.ButtonTemplates

  return (
    <Grid
      container
      gap={2}
      justifyContent={'space-between'}
      className={`array-item`}
    >
      <Grid item={true} xs>
        <Box mb={2}>{children}</Box>
      </Grid>
      {hasToolbar && (
        <Grid
          item={true}
          sx={{ alignSelf: 'start', my: 1 }}
          display={'flex'}
          flexDirection={'row'}
          gap={1}
          justifyContent={'flex-start'}
        >
          {(hasMoveUp || hasMoveDown) && (
            <MoveUpButton
              disabled={disabled || readonly || !hasMoveUp}
              onClick={onReorderClick(index, index - 1)}
              uiSchema={uiSchema}
              registry={registry}
            />
          )}
          {(hasMoveUp || hasMoveDown) && (
            <MoveDownButton
              disabled={disabled || readonly || !hasMoveDown}
              onClick={onReorderClick(index, index + 1)}
              uiSchema={uiSchema}
              registry={registry}
            />
          )}
          {hasCopy && (
            <CopyButton
              disabled={disabled || readonly}
              onClick={onCopyIndexClick(index)}
              uiSchema={uiSchema}
              registry={registry}
            />
          )}
          {hasRemove && (
            <RemoveButton
              aria-label={`Remove`}
              disabled={disabled || readonly}
              onClick={onDropIndexClick(index)}
              uiSchema={uiSchema}
              registry={registry}
            />
          )}
          <AddButton
            disabled={disabled || readonly}
            uiSchema={uiSchema}
            registry={registry}
            aria-label={`Add Item`}
            onClick={onAddIndexClick(index + 1)}
          />
        </Grid>
      )}
    </Grid>
  )
}
