import { displayToast } from '../ToastMessage'

export function displayFilesWereAddedToDownloadListSuccess(
  downloadCartPageUrl: string,
) {
  displayToast(
    'File(s) were successfully added to your Download List.',
    'success',
    {
      primaryButtonConfig: {
        text: 'View Download List',
        onClick: () => {
          window.location.href = downloadCartPageUrl
        },
      },
    },
  )
}
