export type FileUploadComplete = {
  fileHandleId: string
  fileName: string
}

export type UploadCallbackResp = {
  resp?: FileUploadComplete
  context?: any
  success?: boolean
  error?: any
}
