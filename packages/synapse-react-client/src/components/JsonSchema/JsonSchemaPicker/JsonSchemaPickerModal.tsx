import { ConfirmationDialog } from '@/components/ConfirmationDialog'
import { useState } from 'react'
import { JsonSchemaPicker, JsonSchemaSelection } from './JsonSchemaPicker'
import { VersionSelectionType } from './VersionSelectionType'

export type JsonSchemaPickerModalProps = {
  open: boolean
  /** Called with the confirmed schema selection when the user clicks the confirm button. */
  onConfirm: (result: JsonSchemaSelection) => void
  onCancel: () => void
  /** If provided, and a matching Organization is found, it will be preselected. */
  defaultOrganizationName?: string
  /** Controls whether a concrete numbered version must be selected, or if "Latest" is an option. */
  versionSelectionType?: VersionSelectionType
  /** The initially-selected schema/version, e.g. when editing an existing selection. */
  initialSelected?: JsonSchemaSelection
  title?: string
  confirmButtonCopy?: string
}

/**
 * A modal dialog for selecting a single JSON Schema (and, depending on
 * {@link VersionSelectionType}, a version of that schema).
 */
export function JsonSchemaPickerModal(props: JsonSchemaPickerModalProps) {
  const {
    open,
    onConfirm,
    onCancel,
    defaultOrganizationName,
    versionSelectionType,
    initialSelected,
    title = 'Select a Schema',
    confirmButtonCopy = 'Add Selected Schema',
  } = props

  const [selected, setSelected] = useState<JsonSchemaSelection | undefined>(
    undefined,
  )

  return (
    <ConfirmationDialog
      open={open}
      title={title}
      maxWidth="xl"
      confirmButtonProps={{ children: confirmButtonCopy, disabled: !selected }}
      onConfirm={() => {
        if (selected) {
          onConfirm(selected)
        }
      }}
      onCancel={onCancel}
      content={
        <JsonSchemaPicker
          key={open ? 'open' : 'closed'}
          defaultOrganizationName={defaultOrganizationName}
          versionSelectionType={versionSelectionType}
          initialSelected={initialSelected}
          onSelectionChange={setSelected}
        />
      }
    />
  )
}

export default JsonSchemaPickerModal
