import EntityIdTextField from '@/components/EntityFinder/EntityIdTextField'
import { FinderScope } from '@/components/EntityFinder/tree/EntityTree'
import { VersionSelectionType } from '@/components/EntityFinder/VersionSelectionType'
import { EntityType } from '@sage-bionetworks/synapse-client'
import {
  RECORD_BASED_RECORD_SET_INPUT_DESCRIPTION,
  RECORD_SET_FINDER_PROMPT,
  RECORD_SET_FINDER_TITLE,
} from '../utils/constants'
import { RecordBasedFieldsValue } from './utils/buildCurateTaskPayload'

export type RecordBasedFieldsProps = {
  value: RecordBasedFieldsValue
  onChange: (value: RecordBasedFieldsValue) => void
  /** True in edit mode, since this identity field is immutable once the task is created. */
  disabled?: boolean
}

/**
 * Fields specific to a Records-Based Curate Data task (`RecordBasedMetadataTaskProperties`): the
 * RecordSet used to start grid sessions.
 */
export default function RecordBasedFields(props: RecordBasedFieldsProps) {
  const { value, onChange, disabled = false } = props

  return (
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
}
