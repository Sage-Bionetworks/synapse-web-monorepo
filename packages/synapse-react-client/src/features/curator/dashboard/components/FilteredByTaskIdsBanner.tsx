import FullWidthAlert from '@/components/FullWidthAlert/FullWidthAlert'

export type FilteredByTaskIdsBannerProps = {
  taskIds: number[] | undefined
  onClear: () => void
}

/**
 * Displayed above a curation task list when it is filtered down to a specific set of task IDs (via
 * the `taskIds` URL search param), with an action to clear the filter and return to the unfiltered list.
 */
export default function FilteredByTaskIdsBanner(
  props: FilteredByTaskIdsBannerProps,
) {
  const { taskIds, onClear } = props

  if (!taskIds || taskIds.length === 0) {
    return null
  }

  return (
    <FullWidthAlert
      isGlobal={false}
      variant="info"
      description={`Showing ${taskIds.length} filtered task${
        taskIds.length === 1 ? '' : 's'
      }`}
      primaryButtonConfig={{
        text: 'Clear filter',
        onClick: onClear,
      }}
    />
  )
}
