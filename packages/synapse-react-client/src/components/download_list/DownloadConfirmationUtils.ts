import { displayToast } from '../ToastMessage'

/**
 * Reports files added to the Download List, with a link to it.
 * @param numberOfFilesAdded the server's count, when the caller has it
 */
export function displayFilesWereAddedToDownloadListSuccess(
  downloadCartPageUrl: string,
  numberOfFilesAdded?: number,
) {
  displayToast(
    numberOfFilesAdded === undefined
      ? 'File(s) were successfully added to your Download List.'
      : `${numberOfFilesAdded.toLocaleString()} ${numberOfFilesAdded === 1 ? 'file was' : 'files were'} added to your Download List.`,
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
