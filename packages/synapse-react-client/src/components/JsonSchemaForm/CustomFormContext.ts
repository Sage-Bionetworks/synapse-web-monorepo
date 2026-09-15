import { FormContextType } from '@rjsf/utils'

export interface CustomFormContext extends FormContextType {
  /**
   * If true, non-additionalProperty arrays show controls that allow the user to make the array empty.
   * This is useful for the annotations editor because we always want to show fields for array items, even if the
   * array is empty. We don't want users to be able to remove the field for the last item in the array.
   *
   * This is not desirable in other places where we would want to use a JSON Schema form.
   *
   * Default is undefined/falsy
   */
  allowRemovingLastItemInArray?: boolean

  /**
   * Allows varying the appearance of descriptions in the UI as either a popover or an expand/collapse control
   */
  descriptionVariant?: 'popover' | 'expand'

  /**
   * Allows varying the format of the description in the UI. If 'table', then the description and type are both shown
   * in a table format. If 'string', then the description is shown as a string.
   */
  descriptionFormat?: 'table' | 'string'

  /**
   * If true, the derived annotation placeholder is shown in the widget when a derived Synapse annotation would be computed.
   */
  showDerivedAnnotationPlaceholder?: boolean

  /**
   * If true, the SelectWidget (used for enums) allows free text input in addition to the enum values.
   */
  allowFreeSoloEnum?: boolean

  /**
   * Controls how `boolean` schema properties render.
   *
   * - `'yesNoSelect'` (default) — a Yes/No dropdown. Used by the annotations editor, where a
   *   boolean annotation needs an explicit "unset" state distinct from false.
   * - `'checkbox'` — a real checkbox (RJSF/MUI's own `CheckboxWidget`), for forms where the
   *   source schema is a genuine yes/no toggle with no meaningful "unset" state.
   */
  booleanWidget?: 'yesNoSelect' | 'checkbox'
}
