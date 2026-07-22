import { TaskStatusStateEnum } from '@sage-bionetworks/synapse-client'

export const OPEN_CURATOR_ERROR_TITLE =
  'An error occurred while trying to open Curator'
export const OPEN_CURATOR_UNAUTHORIZED_ERROR_MESSAGE =
  "You don't have permission to view the existing Curator session for this task. It was likely created by another data contributor. A data manager should create a new task and assign it to you or your team."

export const OPEN_CURATOR_TOOLTIP_TITLE = 'Open Curator to edit metadata'
export const OPEN_CURATOR_NO_PERMISSION_ON_SOURCE_ERROR_MESSAGE =
  'You do not have permission to view the Working Copy'
export const OPEN_CURATOR_LINK_TASK_CONFLICT_ERROR_MESSAGE =
  'Failed to link Grid session to Curation Task. The task was updated since it was last retrieved. Please refresh and try again.'

// CreateOrUpdateCurationTaskDialog

export const CREATE_CURATION_TASK_DIALOG_TITLE = 'Create Curation Task'
export const EDIT_CURATION_TASK_DIALOG_TITLE = 'Edit Curation Task'

export const SELECT_TASK_TYPE_DESCRIPTION =
  'Choose the type of data this curation task will manage. This cannot be changed after the task is created.'

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

export const AUTH_MODE_NONE_TITLE = 'Work independently'
export const AUTH_MODE_NONE_TOOLTIP =
  'This is the legacy behavior. Each contributor works on their own view of the data, based on what they personally have permission to edit. Without coordination, users may overwrite each other’s annotations.'

export const AUTH_MODE_SESSION_OWNER_TITLE = 'Share with assignees only'
export const AUTH_MODE_SESSION_OWNER_TOOLTIP =
  'The assigned user or team works together in one shared grid session. Only those assignees can join, and they’ll only see rows that every assignee has permission to edit.'

export const AUTH_MODE_SOURCE_BENEFACTOR_TITLE = 'Share with all editors'
export const AUTH_MODE_SOURCE_BENEFACTOR_TOOLTIP =
  'Contributors work together in one shared grid session. Anyone who has edit access to the task’s data can join and edit the rows available in the session.'

export const TASK_NAME_INPUT_DESCRIPTION =
  'Specify the task name so that contributors know which task they should work on.'
export const TASK_INSTRUCTIONS_INPUT_DESCRIPTION =
  '(Optional) Provide instructions on how to complete the task.'

export const ASSIGNEE_TOOLTIP =
  "The user or team assigned to this task. If using 'Session Owner' authorization mode, the assignee is the default owner of the grid session. For team assignees in 'Session Owner' mode, any team member can access the session."
export const COLLABORATORS_TOOLTIP =
  'Collaborators can contribute to the grid session alongside the assignee. For "Session Owner" authorization mode, collaborators are added as additional owners of the session.'

export const UNRECOGNIZED_TASK_TYPE_ERROR =
  'This task has an unrecognized task type and cannot be edited here.'
export const AUTH_MODE_CHANGED_WARNING =
  'Changing the Authorization Mode will clear the active session ID on this task. Any in-progress grid session linked to this task will no longer be associated with it.'
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

export const UPLOAD_FOLDER_FINDER_TITLE = 'Select Upload Folder'
export const UPLOAD_FOLDER_FINDER_PROMPT =
  'Select the folder where data files will be uploaded.'

export const FILE_VIEW_FINDER_TITLE = 'Select File View'
export const FILE_VIEW_FINDER_PROMPT =
  'Select the FileView used to create grid sessions for this task.'

export const RECORD_SET_FINDER_TITLE = 'Select Record Set'
export const RECORD_SET_FINDER_PROMPT =
  'Select the RecordSet used to start grid sessions for this task.'
