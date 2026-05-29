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

export const RECORD_BASED_TASK_TITLE = 'Records-Based Data'
export const RECORD_BASED_TASK_DESCRIPTION =
  'Data consists of a CSV containing records as individual rows.\nRequirements: A schema for this data type exists in the system.'

export const AUTH_MODE_NONE_TOOLTIP =
  "Sessions are not linked to this task — each user starts their own independent grid session. Without coordination, users may overwrite each other's annotations. Use this only to maintain existing tasks that predate session management, or if your workflow does not require collaboration."
export const AUTH_MODE_SESSION_OWNER_TOOLTIP =
  'The grid session is owned by the task assignee (or assignee team). Only the assignee or their team members can join, and the session includes only rows that the assignee has edit access to. Best suited for File Views that span entities with varied access permissions.'
export const AUTH_MODE_SOURCE_BENEFACTOR_TOOLTIP =
  'The grid session is accessible to any user with edit access to all benefactors of the source entities. The session includes all rows that the creating user has edit access to. Best suited for tasks that manage metadata across many entities with consistent permissions, such as a project-level File View.'

export const ASSIGNEE_TOOLTIP =
  "The user or team assigned to this task. If using 'Session Owner' authorization mode, the assignee is the default owner of the grid session. For team assignees in 'Session Owner' mode, any team member can access the session."
export const COLLABORATORS_TOOLTIP =
  'Collaborators can contribute to the grid session alongside the assignee. For "Session Owner" authorization mode, collaborators are added as additional owners of the session.'

export const UNRECOGNIZED_TASK_TYPE_ERROR =
  'This task has an unrecognized task type and cannot be edited here.'
export const AUTH_MODE_CHANGED_WARNING =
  'Changing the Authorization Mode will clear the active session ID on this task. Any in-progress grid session linked to this task will no longer be associated with it.'
export const GENERIC_SAVE_ERROR_MESSAGE = 'An error occurred. Please try again.'

export const UPLOAD_FOLDER_FINDER_TITLE = 'Select Upload Folder'
export const UPLOAD_FOLDER_FINDER_PROMPT =
  'Select the folder where data files will be uploaded.'

export const FILE_VIEW_FINDER_TITLE = 'Select File View'
export const FILE_VIEW_FINDER_PROMPT =
  'Select the FileView used to create grid sessions for this task.'

export const RECORD_SET_FINDER_TITLE = 'Select Record Set'
export const RECORD_SET_FINDER_PROMPT =
  'Select the RecordSet used to start grid sessions for this task.'
