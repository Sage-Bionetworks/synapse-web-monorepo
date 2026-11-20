/**
 * A file the user has attached to an in-progress chat message, pending send. Only fully
 * uploaded files are represented here -- upload-in-progress state is shown by
 * BasicFileHandleUpload's own progress UI while the Add Files dialog is open (see decision to
 * render "completed uploads" as chips).
 */
export type ChatAttachment = {
  fileHandleId: string
  fileName: string
  contentType: string
  sizeBytes: number
}

/**
 * The look of a chat's suggested prompts and composer buttons. `sidebar` suits a chat docked in a
 * narrow sidebar: prompts stack as pills whose text wraps, and the buttons use upload and send
 * icons.
 */
export type ChatAppearance = 'default' | 'sidebar'
