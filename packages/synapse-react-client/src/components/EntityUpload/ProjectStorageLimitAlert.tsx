import { calculateFriendlyFileSize } from '@/utils/functions/calculateFriendlyFileSize'
import { SAGE_OFFERINGS_HELP_URL } from '@/utils/SynapseConstants'
import { ProjectStorageLocationUsage } from '@sage-bionetworks/synapse-client'
import FullWidthAlert from '../FullWidthAlert'

export type ProjectStorageLimitAlertProps = {
  didUploadsExceedLimit: boolean
  usage: ProjectStorageLocationUsage
}

// When the remaining storage is less than this percentage, show a warning
const PERCENT_REMAINING_STORAGE_TO_SHOW_WARNING = 0.25

export function ProjectStorageLimitAlert(props: ProjectStorageLimitAlertProps) {
  const { usage, didUploadsExceedLimit } = props

  if (usage.maxAllowedFileBytes == null) {
    // No limit!
    return null
  }

  const warningThresholdBytes =
    usage.maxAllowedFileBytes * (1 - PERCENT_REMAINING_STORAGE_TO_SHOW_WARNING)

  const remainingStorageBytes = usage.maxAllowedFileBytes - usage.sumFileBytes!

  if (!didUploadsExceedLimit && usage.sumFileBytes! < warningThresholdBytes) {
    // No need to show a warning
    return null
  }

  if (usage.isOverLimit) {
    return (
      <FullWidthAlert
        variant="danger"
        isGlobal={false}
        title={'You have no data availability'}
        description={
          'You do not have any remaining data within this project. In order to upload more files, you must edit your file list or upgrade your plan.'
        }
        primaryButtonConfig={{
          text: 'Learn more',
          href: SAGE_OFFERINGS_HELP_URL,
        }}
      ></FullWidthAlert>
    )
  }

  if (didUploadsExceedLimit) {
    return (
      <FullWidthAlert
        variant="danger"
        isGlobal={false}
        title={'Selected files exceed available storage'}
        description={`This project has only ${calculateFriendlyFileSize(
          remainingStorageBytes,
          1,
        )} of storage remaining. To continue, you must upgrade your storage, or add custom storage.`}
        primaryButtonConfig={{
          text: 'Learn more',
          href: SAGE_OFFERINGS_HELP_URL,
        }}
      ></FullWidthAlert>
    )
  }

  // Otherwise, show a warning
  return (
    <FullWidthAlert
      variant="warning"
      isGlobal={false}
      title={'Warning: Your storage availability is limited'}
      description={`Your project has less than ${
        PERCENT_REMAINING_STORAGE_TO_SHOW_WARNING * 100
      }% remaining of available storage left. Upgrade your storage, or bring your own custom storage.`}
      primaryButtonConfig={{
        text: 'Learn more',
        href: SAGE_OFFERINGS_HELP_URL,
      }}
    ></FullWidthAlert>
  )
}
