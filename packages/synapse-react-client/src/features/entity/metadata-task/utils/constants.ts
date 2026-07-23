import {
  FileBasedMetadataTaskPropertiesConcreteTypeEnum,
  RecordBasedMetadataTaskPropertiesConcreteTypeEnum,
  RecordSetGenerationExecutionPropertiesConcreteTypeEnum,
  SampleSheetGenerationExecutionPropertiesConcreteTypeEnum,
  TaskStatusStateEnum,
} from '@sage-bionetworks/synapse-client'

export const OPEN_CURATOR_ERROR_TITLE =
  'An error occurred while trying to open Curator'
export const OPEN_CURATOR_UNAUTHORIZED_ERROR_MESSAGE =
  "You don't have permission to view the existing Curator session for this task. It was likely created by another data contributor. A data manager should create a new task and assign it to you or your team."

export const OPEN_CURATOR_TOOLTIP_TITLE = 'Open Curator to edit metadata'
export const OPEN_CURATOR_NO_PERMISSION_ON_SOURCE_ERROR_MESSAGE =
  'You do not have permission to view the Working Copy'
export const OPEN_CURATOR_LINK_TASK_CONFLICT_ERROR_MESSAGE =
  'Failed to link Grid session to Curation Task. The task was updated since it was last retrieved. Please refresh and try again.'

// Create/Edit Curation Task pages (see `create-task/`)

export const EDIT_CURATION_TASK_PAGE_TITLE = 'Edit Task'
export const EDIT_CURATION_TASK_PAGE_DESCRIPTION =
  'Update the details for this task.'

export const SELECT_TASK_CATEGORY_DESCRIPTION = 'Select Category for New Task'

export const BACK_TO_ALL_TASKS_LABEL = 'Back to All Tasks'

export const COMPUTE_TASK_CATEGORY_TITLE = 'Compute Data'
export const CURATE_TASK_CATEGORY_TITLE = 'Curate Data'

export const CREATE_COMPUTE_TASK_PAGE_TITLE = 'Create New Compute Task'
export const FILL_IN_COMPUTE_TASK_DETAILS_DESCRIPTION =
  'Fill in New Compute Data Task Details'

export const CREATE_CURATE_TASK_PAGE_TITLE = 'Create New Curate Task'
export const FILL_IN_CURATE_TASK_DETAILS_DESCRIPTION =
  'Fill in New Curate Data Task Details'

export const COMPUTE_TASK_TYPE_INPUT_LABEL = 'Compute Task Type'

/** The two supported Compute Data concrete types, in the order they should be presented in the type selector. */
export const COMPUTE_TASK_TYPE_OPTIONS = [
  SampleSheetGenerationExecutionPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_execution_SampleSheetGenerationExecutionProperties,
  RecordSetGenerationExecutionPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_execution_RecordSetGenerationExecutionProperties,
] as const

export const DEFAULT_COMPUTE_TASK_TYPE = COMPUTE_TASK_TYPE_OPTIONS[0]

/**
 * Config for the two supported Compute Data task types. Centralized here so that labels/descriptions
 * can be changed easily without hunting through the form components.
 */
export const COMPUTE_TASK_TYPE_CONFIG: Record<
  | SampleSheetGenerationExecutionPropertiesConcreteTypeEnum
  | RecordSetGenerationExecutionPropertiesConcreteTypeEnum,
  { label: string; description: string }
> = {
  [SampleSheetGenerationExecutionPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_execution_SampleSheetGenerationExecutionProperties]:
    {
      label: 'Sample Sheet Generation',
      description:
        'Generates a sample sheet from the source annotations of a file-based task and writes it to a record-based task.',
    },
  [RecordSetGenerationExecutionPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_execution_RecordSetGenerationExecutionProperties]:
    {
      label: 'Record Set Generation',
      description:
        'Transforms files in a folder into a generated CSV, written to a record-based task.',
    },
}

export const CURATE_TASK_TYPE_INPUT_LABEL = 'Curate Task Type'

/** The two supported Curate Data concrete types, in the order they should be presented in the type selector. */
export const CURATE_TASK_TYPE_OPTIONS = [
  FileBasedMetadataTaskPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_metadata_FileBasedMetadataTaskProperties,
  RecordBasedMetadataTaskPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_metadata_RecordBasedMetadataTaskProperties,
] as const

export const DEFAULT_CURATE_TASK_TYPE = CURATE_TASK_TYPE_OPTIONS[0]

export const FILE_BASED_TASK_TITLE = 'File-Based Data'
export const FILE_BASED_TASK_DESCRIPTION =
  'Data consists of files uploaded to Synapse.\nRequirements: A schema for this data type exists in the system, the files have been uploaded to a Synapse folder, and a FileView has been created containing these files.'

export const FILE_BASED_UPLOAD_FOLDER_INPUT_DESCRIPTION =
  'Select the Synapse folder where files will be uploaded for this task.'
export const FILE_BASED_FILE_VIEW_INPUT_DESCRIPTION =
  'Select the Synapse file view that includes all files that should have curated metadata. If this task is used in Curator, this file view will determine which files are included.'

export const RECORD_BASED_TASK_TITLE = 'Records-Based Data'
export const RECORD_BASED_TASK_DESCRIPTION =
  'Data consists of a CSV containing records as individual rows.\nRequirements: A schema for this data type exists in the system.'

export const RECORD_BASED_RECORD_SET_INPUT_DESCRIPTION =
  'Select the Synapse record set that should be used for this task.'

/**
 * Config for the two supported Curate Data task types. Centralized here so that labels/descriptions
 * can be changed easily without hunting through the form components.
 */
export const CURATE_TASK_TYPE_CONFIG: Record<
  | FileBasedMetadataTaskPropertiesConcreteTypeEnum
  | RecordBasedMetadataTaskPropertiesConcreteTypeEnum,
  { label: string; description: string }
> = {
  [FileBasedMetadataTaskPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_metadata_FileBasedMetadataTaskProperties]:
    {
      label: FILE_BASED_TASK_TITLE,
      description: FILE_BASED_TASK_DESCRIPTION,
    },
  [RecordBasedMetadataTaskPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_metadata_RecordBasedMetadataTaskProperties]:
    {
      label: RECORD_BASED_TASK_TITLE,
      description: RECORD_BASED_TASK_DESCRIPTION,
    },
}

export const AUTH_MODE_INPUT_LABEL = 'Authorization Mode'
export const AUTH_MODE_INPUT_DESCRIPTION =
  'Choose how contributors share access to the grid session for this task.'
export const AUTH_MODE_NONE_TITLE = 'Work independently'
export const AUTH_MODE_NONE_TOOLTIP =
  'This is the legacy behavior. Each contributor works on their own view of the data, based on what they personally have permission to edit. Without coordination, users may overwrite each other’s annotations.'

export const AUTH_MODE_SESSION_OWNER_TITLE = 'Share with assignees only'
export const AUTH_MODE_SESSION_OWNER_TOOLTIP =
  'The assigned user or team works together in one shared grid session. Only those assignees can join, and they’ll only see rows that every assignee has permission to edit.'

export const AUTH_MODE_SOURCE_BENEFACTOR_TITLE = 'Share with all editors'
export const AUTH_MODE_SOURCE_BENEFACTOR_TOOLTIP =
  'Contributors work together in one shared grid session. Anyone who has edit access to the task’s data can join and edit the rows available in the session.'

/** The authorization mode options, in the order they should be presented in the selector. */
export const AUTH_MODE_OPTIONS = [
  'NONE',
  'SESSION_OWNER',
  'SOURCE_BENEFACTOR',
] as const

/**
 * Config for the authorization mode options. Centralized here so labels/tooltips can be changed
 * easily without hunting through the form components.
 */
export const AUTH_MODE_CONFIG: Record<
  (typeof AUTH_MODE_OPTIONS)[number],
  { label: string; tooltip: string }
> = {
  NONE: { label: AUTH_MODE_NONE_TITLE, tooltip: AUTH_MODE_NONE_TOOLTIP },
  SESSION_OWNER: {
    label: AUTH_MODE_SESSION_OWNER_TITLE,
    tooltip: AUTH_MODE_SESSION_OWNER_TOOLTIP,
  },
  SOURCE_BENEFACTOR: {
    label: AUTH_MODE_SOURCE_BENEFACTOR_TITLE,
    tooltip: AUTH_MODE_SOURCE_BENEFACTOR_TOOLTIP,
  },
}

export const AUTH_MODE_CHANGED_WARNING =
  'Changing the Authorization Mode will clear the active session ID on this task. Any in-progress grid session linked to this task will no longer be associated with it.'

export const UPLOAD_FOLDER_FINDER_TITLE = 'Select Upload Folder'
export const UPLOAD_FOLDER_FINDER_PROMPT =
  'Select the folder where data files will be uploaded.'

export const FILE_VIEW_FINDER_TITLE = 'Select File View'
export const FILE_VIEW_FINDER_PROMPT =
  'Select the FileView used to create grid sessions for this task.'

export const RECORD_SET_FINDER_TITLE = 'Select Record Set'
export const RECORD_SET_FINDER_PROMPT =
  'Select the RecordSet used to start grid sessions for this task.'

export const PROJECT_SELECTOR_LABEL = 'Project'
export const PROJECT_SELECTOR_DESCRIPTION =
  'Select the Synapse project this task belongs to.'
export const PROJECT_FINDER_TITLE = 'Select Project'
export const PROJECT_FINDER_PROMPT = 'Select the project for this task.'

export const TASK_NAME_INPUT_DESCRIPTION =
  'Enter a clear, descriptive name for the curation task.'
export const TASK_DUE_DATE_INPUT_LABEL = 'Task Due Date'
export const TASK_DUE_DATE_INPUT_DESCRIPTION =
  'Enter the date by which this task should be completed.'
export const TASK_INSTRUCTIONS_INPUT_DESCRIPTION =
  'Provide any details the assignee needs to complete the task.'

export const ASSIGNEE_INPUT_DESCRIPTION =
  'List the person or team responsible for completing the task.'

export const SAMPLE_SHEET_INPUT_TASK_ID_LABEL = 'Input Task ID'
export const SAMPLE_SHEET_INPUT_TASK_ID_DESCRIPTION =
  'The ID of the file-based task whose FileView provides the source annotations.'
export const SAMPLE_SHEET_DESTINATION_TASK_ID_LABEL = 'Destination Task ID'
export const SAMPLE_SHEET_DESTINATION_TASK_ID_DESCRIPTION =
  'The ID of the record-based task whose RecordSet will receive the generated sample sheet.'

export const RECORD_SET_FOLDER_ID_LABEL = 'Source Folder'
export const RECORD_SET_FOLDER_ID_DESCRIPTION =
  'Select the folder whose files will be transformed into the generated CSV.'
export const RECORD_SET_FOLDER_FINDER_TITLE = 'Select Source Folder'
export const RECORD_SET_FOLDER_FINDER_PROMPT =
  'Select the folder containing the files to be transformed.'
export const RECORD_SET_INSTRUCTIONS_LABEL = 'Agent Instructions'
export const RECORD_SET_INSTRUCTIONS_DESCRIPTION =
  'Instructions for the agent describing how the input files should be transformed to produce the output CSV.'
export const RECORD_SET_DESTINATION_TASK_ID_LABEL = 'Destination Task ID'
export const RECORD_SET_DESTINATION_TASK_ID_DESCRIPTION =
  'The ID of the record-based task whose RecordSet will receive the generated CSV.'

export const TASK_ID_FIELD_INVALID_ERROR_MESSAGE =
  'Must be a positive whole number'

export const CREATE_TASK_CONFIRMATION_TITLE = 'Task Created'
export const CREATE_TASK_CONFIRMATION_DESCRIPTION =
  'Your new task has been created and is ready to be configured.'

export const EDIT_TASK_UNRECOGNIZED_TYPE_MESSAGE =
  'This task has an unrecognized task type. Its category-specific fields cannot be edited here.'

export const GENERIC_SAVE_ERROR_MESSAGE = 'An error occurred. Please try again.'

export const TASK_STATUS_INPUT_LABEL = 'Status'

export const TASK_STATUS_CONFIG: Record<
  TaskStatusStateEnum,
  { label: string; backgroundColor: string }
> = {
  NOT_STARTED: { label: 'Not Started', backgroundColor: '#EAECEE' },
  IN_PROGRESS: { label: 'In Progress', backgroundColor: '#FFF3CD' },
  EXECUTING: { label: 'Executing', backgroundColor: '#FFF3CD' },
  IN_REVIEW: { label: 'Needs Review', backgroundColor: '#B8CCFF' },
  COMPLETED: { label: 'Completed', backgroundColor: '#C8E6C9' },
  CANCELED: { label: 'Canceled', backgroundColor: '#FFCCBC' },
}

export const DELETE_CURATION_TASK_DIALOG_TITLE = 'Delete Task'
export const DELETE_CURATION_TASK_CONFIRMATION_PROMPT =
  'Are you sure you want to delete this task? This action cannot be undone.'
export const DELETE_CURATION_TASK_GRID_SESSION_WARNING =
  'Any grid sessions associated with this task will also be deleted.'
export const DELETE_CURATION_TASK_SUCCESS_TOAST = 'Task deleted successfully'
export const DELETE_CURATION_TASK_ERROR_TOAST_PREFIX = 'Error deleting task: '

export const CREATE_TASK_STATUS_NOT_SAVED_WARNING =
  'The task was created, but its due date and status could not be saved. You can set them by editing the task.'

// The following constants are consumed by the legacy CreateOrUpdateCurationTaskDialog, which is
// removed in a follow-up PR. They are retained here so the dialog continues to compile until then.
export const CREATE_CURATION_TASK_DIALOG_TITLE = 'Create Curation Task'
export const EDIT_CURATION_TASK_DIALOG_TITLE = 'Edit Curation Task'
export const SELECT_TASK_TYPE_DESCRIPTION =
  'Choose the type of data this curation task will manage. This cannot be changed after the task is created.'
export const COLLABORATORS_TOOLTIP =
  'Collaborators can contribute to the grid session alongside the assignee. For "Session Owner" authorization mode, collaborators are added as additional owners of the session.'
export const UNRECOGNIZED_TASK_TYPE_ERROR =
  'This task has an unrecognized task type and cannot be edited here.'
