import { SearchManagementResourceType } from '@/synapse-queries/searchmanagement/SearchManagementResourceType'
import { SearchResourcePayload } from './SearchResourcePayload'

export type PayloadEditorProps<
  T extends SearchManagementResourceType = SearchManagementResourceType,
> = {
  /** Read only on mount; remount with a new `key` to edit a different resource. */
  initialPayload: SearchResourcePayload<T>
  onChange: (payload: SearchResourcePayload<T>) => void
  /** Reports whether the input identified by `inputKey` holds valid JSON and a complete selection. */
  onInputValidityChange: (inputKey: string, isValid: boolean) => void
}
