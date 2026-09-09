import { SxProps } from '@mui/material'

export const DATASET_CREATED_BY_TOOLTIP =
  'This is the user who created this Dataset. ' +
  'This may not be the same person who generated the files in this Dataset, or who originally uploaded these files to Synapse.'

export function getTableModifiedOnTooltip(friendlyName: string) {
  return (
    <>
      <p>
        This is when the configuration of this {friendlyName} was last changed.
      </p>
      <p>Configuration changes may be triggered by (for example):</p>
      <ul>
        <li>Editing the name of the {friendlyName}</li>
        <li>Updating the schema used by the {friendlyName}</li>
      </ul>
      <p>
        This does NOT reflect changes to the data displayed in the the{' '}
        {friendlyName}.
      </p>
    </>
  )
}

// The ReactNode tooltip title does not auto-populate aria-label, so MUI needs a
// string handed to it explicitly.
export function getTableModifiedOnAccessibleLabel(friendlyName: string) {
  return `This is when the configuration of this ${friendlyName} was last changed.`
}

export function getTableLastRebuiltTooltip(friendlyName: string) {
  return (
    `When data changes, the ${friendlyName} is rebuilt to reflect those changes. ` +
    `This is the last time changes were made to the data.`
  )
}

export const INFO_ICON_SX: SxProps = {
  width: '16px',
  height: '16px',
  ml: '4px',
  verticalAlign: 'text-bottom',
}
