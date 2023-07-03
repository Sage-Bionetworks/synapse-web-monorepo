import { displayToast } from '../ToastMessage'

export function displayFilesWereAddedToDownloadListSuccess(
  downloadCartPageUrl: string,
) {
  displayToast(
    'File(s) were successfully added to your Download Cart.',
    'success',
    {
      primaryButtonConfig: {
        text: 'View Download Cart',
        onClick: () => {
          window.location.href = downloadCartPageUrl
        },
      },
    },
  )
}
