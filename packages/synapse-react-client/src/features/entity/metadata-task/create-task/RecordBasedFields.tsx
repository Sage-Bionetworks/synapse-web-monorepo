import EntityIdTextField from '@/components/EntityFinder/EntityIdTextField'
import { FinderScope } from '@/components/EntityFinder/tree/EntityTree'
import { VersionSelectionType } from '@/components/EntityFinder/VersionSelectionType'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { EntityType } from '@sage-bionetworks/synapse-client'
import { useState } from 'react'
import {
  RECORD_BASED_RECORD_SET_INPUT_DESCRIPTION,
  RECORD_SET_FINDER_PROMPT,
  RECORD_SET_FINDER_TITLE,
  RECORD_SET_MODE_CREATE_NEW_LABEL,
  RECORD_SET_MODE_PICK_EXISTING_LABEL,
} from '../utils/constants'
import CreateRecordSetPanel from './CreateRecordSetPanel'
import { RecordBasedFieldsValue } from './utils/buildCurateTaskPayload'

export type RecordBasedFieldsProps = {
  value: RecordBasedFieldsValue
  onChange: (value: RecordBasedFieldsValue) => void
  /** True in edit mode, since this identity field is immutable once the task is created. */
  disabled?: boolean
}

type RecordSetMode = 'pick' | 'create'

/**
 * Fields specific to a Records-Based Curate Data task (`RecordBasedMetadataTaskProperties`): the
 * RecordSet used to start grid sessions. In create mode, a toggle lets the user either pick an
 * existing RecordSet or create a new one from a parent container and a JSON Schema `$id` (see
 * `CreateRecordSetPanel`). The toggle is hidden in edit mode, since the RecordSet is immutable once
 * the task is created.
 */
export default function RecordBasedFields(props: RecordBasedFieldsProps) {
  const { value, onChange, disabled = false } = props
  const [mode, setMode] = useState<RecordSetMode>('pick')

  const existingPicker = (
    <EntityIdTextField
      label="Record Set ID"
      value={value.recordSetId}
      description={RECORD_BASED_RECORD_SET_INPUT_DESCRIPTION}
      onChange={recordSetId => onChange({ ...value, recordSetId })}
      disabled={disabled}
      required
      entityFinderModalProps={{
        title: RECORD_SET_FINDER_TITLE,
        promptCopy: RECORD_SET_FINDER_PROMPT,
        confirmButtonCopy: 'Select',
        configuration: {
          initialScope: FinderScope.ALL_PROJECTS,
          initialContainer: 'root',
          selectMultiple: false,
          treeOnly: false,
          versionSelection: VersionSelectionType.DISALLOWED,
          selectableTypes: [EntityType.recordset],
        },
      }}
    />
  )

  if (disabled) {
    return existingPicker
  }

  return (
    <>
      <ToggleButtonGroup
        value={mode}
        exclusive
        onChange={(_e, newMode: RecordSetMode | null) => {
          if (newMode != null) {
            setMode(newMode)
          }
        }}
      >
        <ToggleButton value="pick">
          {RECORD_SET_MODE_PICK_EXISTING_LABEL}
        </ToggleButton>
        <ToggleButton value="create">
          {RECORD_SET_MODE_CREATE_NEW_LABEL}
        </ToggleButton>
      </ToggleButtonGroup>

      {mode === 'pick' ? (
        existingPicker
      ) : (
        <CreateRecordSetPanel
          onCreated={recordSet =>
            onChange({ ...value, recordSetId: recordSet.id })
          }
        />
      )}
    </>
  )
}
