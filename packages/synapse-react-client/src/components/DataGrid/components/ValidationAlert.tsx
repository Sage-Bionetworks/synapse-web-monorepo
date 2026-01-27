import FullWidthAlert from '../../FullWidthAlert/FullWidthAlert'
import { DataGridRow } from '../DataGridTypes'

type ValidationAlertProps = {
  selectedRowIndex: number | null
  rowValues: DataGridRow[]
}

export const ValidationAlert = ({
  selectedRowIndex,
  rowValues,
}: ValidationAlertProps) => {
  if (selectedRowIndex === null) return null

  const selectedRow = rowValues[selectedRowIndex]
  if (!selectedRow) return null

  const validationMessages =
    selectedRow.__validationResults?.allValidationMessages
  if (!Array.isArray(validationMessages) || validationMessages.length === 0) {
    return null
  }

  return (
    <FullWidthAlert
      variant="warning"
      title="Validation Messages For Selected Row:"
      isGlobal={false}
      description={
        <ul>
          {validationMessages.map((msg: string) => (
            <li key={msg}>{msg}</li>
          ))}
        </ul>
      }
      sx={{
        marginTop: '12px',
      }}
    />
  )
}
