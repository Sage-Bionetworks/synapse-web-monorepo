import {
  ArrayFieldItemButtonsTemplateProps,
  buttonId,
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
} from '@rjsf/utils'

/** The `ArrayFieldTemplateItemButtons` component is the template used to render the buttons associated with items of
 * an array. Unlike RJSF's, every item has a button that adds a new item below it.
 *
 * @param props - The `ArrayFieldItemButtonsTemplateProps` props for the component
 */
export default function ArrayFieldItemButtonsTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: ArrayFieldItemButtonsTemplateProps<T, S, F>) {
  const {
    canAdd,
    disabled,
    hasCopy,
    hasMoveDown,
    hasMoveUp,
    hasRemove,
    id,
    itemButtonProps,
    onAddItem,
    onCopyItem,
    onRemoveItem,
    onMoveDownItem,
    onMoveUpItem,
    readonly,
    registry,
    uiSchema,
  } = props
  const { CopyButton, MoveDownButton, MoveUpButton, RemoveButton, AddButton } =
    registry.templates.ButtonTemplates

  return (
    <>
      {(hasMoveUp || hasMoveDown) && (
        <MoveUpButton
          {...itemButtonProps?.moveUp}
          id={buttonId(id, 'moveUp')}
          className="rjsf-array-item-move-up"
          disabled={disabled || readonly || !hasMoveUp}
          onClick={onMoveUpItem}
          uiSchema={uiSchema}
          registry={registry}
        />
      )}
      {(hasMoveUp || hasMoveDown) && (
        <MoveDownButton
          {...itemButtonProps?.moveDown}
          id={buttonId(id, 'moveDown')}
          className="rjsf-array-item-move-down"
          disabled={disabled || readonly || !hasMoveDown}
          onClick={onMoveDownItem}
          uiSchema={uiSchema}
          registry={registry}
        />
      )}
      {hasCopy && (
        <CopyButton
          {...itemButtonProps?.copy}
          id={buttonId(id, 'copy')}
          className="rjsf-array-item-copy"
          disabled={disabled || readonly}
          onClick={onCopyItem}
          uiSchema={uiSchema}
          registry={registry}
        />
      )}
      {hasRemove && (
        <RemoveButton
          {...itemButtonProps?.remove}
          id={buttonId(id, 'remove')}
          className="rjsf-array-item-remove"
          disabled={disabled || readonly}
          onClick={onRemoveItem}
          uiSchema={uiSchema}
          registry={registry}
        />
      )}
      <AddButton
        disabled={disabled || readonly || !canAdd}
        uiSchema={uiSchema}
        registry={registry}
        aria-label={`Add Item`}
        onClick={onAddItem}
      />
    </>
  )
}
