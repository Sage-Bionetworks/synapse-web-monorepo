import { HelpPopover } from '../../../HelpPopover/HelpPopover'
import { VersionSelectionType } from '../../VersionSelectionType'

const CHOOSE_REFERENCE =
  'Choose which version of this item you would like to reference.'
const CHOOSE_ACTION =
  'Choose which version of this item you would like to perform this action on.'
const ALWAYS_LATEST_VERSION_EXPLANATION =
  'If you would like the selection to update as new versions are created, choose "Always Latest Version".'

export function VersionColumnHeader(props: {
  versionSelection: VersionSelectionType
}) {
  const { versionSelection } = props
  let helpCopy = ''
  switch (versionSelection) {
    case VersionSelectionType.REQUIRED:
      helpCopy = CHOOSE_REFERENCE
      break
    case VersionSelectionType.TRACKED:
      helpCopy = CHOOSE_REFERENCE + ' ' + ALWAYS_LATEST_VERSION_EXPLANATION
      break
    case VersionSelectionType.UNTRACKED:
      // If the selected version isn't being tracked, then this is most likely a one-time action
      helpCopy = CHOOSE_ACTION
      break
    case VersionSelectionType.DISALLOWED:
    default:
    // this column is not shown in these cases.
  }
  return (
    <>
      Version
      <HelpPopover
        className="SRC-margin-left-5"
        markdownText={helpCopy}
        placement="right"
      />
    </>
  )
}
