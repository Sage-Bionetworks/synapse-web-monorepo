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
}
