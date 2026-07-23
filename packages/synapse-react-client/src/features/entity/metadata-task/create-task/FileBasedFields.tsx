import EntityIdTextField from '@/components/EntityFinder/EntityIdTextField'
import { FinderScope } from '@/components/EntityFinder/tree/EntityTree'
import { VersionSelectionType } from '@/components/EntityFinder/VersionSelectionType'
import { EntityType } from '@sage-bionetworks/synapse-client'
import { Stack } from '@mui/material'
import {
  FILE_BASED_FILE_VIEW_INPUT_DESCRIPTION,
  FILE_BASED_UPLOAD_FOLDER_INPUT_DESCRIPTION,
  FILE_VIEW_FINDER_PROMPT,
  FILE_VIEW_FINDER_TITLE,
  UPLOAD_FOLDER_FINDER_PROMPT,
  UPLOAD_FOLDER_FINDER_TITLE,
} from '../utils/constants'
import { FileBasedFieldsValue } from './utils/buildCurateTaskPayload'

export type FileBasedFieldsProps = {
  value: FileBasedFieldsValue
  onChange: (value: FileBasedFieldsValue) => void
  /** True in edit mode, since these identity fields are immutable once the task is created. */
  disabled?: boolean
}

/**
 * Fields specific to a File-Based Curate Data task (`FileBasedMetadataTaskProperties`): the folder
 * files are uploaded to, and the FileView used to start grid sessions.
 */
export default function FileBasedFields(props: FileBasedFieldsProps) {
  const { value, onChange, disabled = false } = props

  return (
    <Stack gap={2}>
      <EntityIdTextField
        label="Upload Folder ID"
        value={value.uploadFolderId}
        description={FILE_BASED_UPLOAD_FOLDER_INPUT_DESCRIPTION}
        onChange={uploadFolderId => onChange({ ...value, uploadFolderId })}
        disabled={disabled}
        entityFinderModalProps={{
          title: UPLOAD_FOLDER_FINDER_TITLE,
          promptCopy: UPLOAD_FOLDER_FINDER_PROMPT,
          confirmButtonCopy: 'Select',
          configuration: {
            initialScope: FinderScope.ALL_PROJECTS,
            initialContainer: 'root',
            selectMultiple: false,
            treeOnly: false,
            versionSelection: VersionSelectionType.DISALLOWED,
            selectableTypes: [EntityType.folder],
          },
        }}
      />
      <EntityIdTextField
        label="File View ID"
        value={value.fileViewId}
        description={FILE_BASED_FILE_VIEW_INPUT_DESCRIPTION}
        onChange={fileViewId => onChange({ ...value, fileViewId })}
        disabled={disabled}
        entityFinderModalProps={{
          title: FILE_VIEW_FINDER_TITLE,
          promptCopy: FILE_VIEW_FINDER_PROMPT,
          confirmButtonCopy: 'Select',
          configuration: {
            initialScope: FinderScope.ALL_PROJECTS,
            initialContainer: 'root',
            selectMultiple: false,
            treeOnly: false,
            versionSelection: VersionSelectionType.DISALLOWED,
            selectableTypes: [EntityType.entityview],
          },
        }}
      />
    </Stack>
  )
}
