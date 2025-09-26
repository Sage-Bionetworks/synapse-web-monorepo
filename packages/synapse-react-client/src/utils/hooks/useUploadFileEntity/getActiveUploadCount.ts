import {
  PENDING_UPLOAD_STATES,
  UploadFileStatus,
} from '@/utils/hooks/useUploadFileEntity/useTrackFileUploads'

export default function getActiveUploadCount(
  statuses: UploadFileStatus[],
): number {
  return statuses.filter(status => PENDING_UPLOAD_STATES.includes(status))
    .length
}
