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
