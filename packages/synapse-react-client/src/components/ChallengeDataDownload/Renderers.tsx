import React from 'react'
import { CellRendererProps, ChallengeDataTableRowData } from './types'
import { Checkbox } from '../widgets/Checkbox'
import { formatDate } from '../../utils/functions/DateFormatter'
import dayjs from 'dayjs'
import { calculateFriendlyFileSize } from '../../utils/functions/calculateFriendlyFileSize'

export function CheckboxRenderer<T extends ChallengeDataTableRowData>({
  rowData: { entityId, isSelected, isDisabled, onChangeSelected },
}: CellRendererProps<T>): JSX.Element | false {
  return (
    !isDisabled && (
      <Checkbox
        label={`Select ${entityId}`}
        hideLabel={true}
        className={`SRC-pointer-events-none`}
        checked={isSelected}
        onChange={onChangeSelected}
      />
    )
  )
}

export function DateRenderer({ cellData }: { cellData?: string }): JSX.Element {
  return <>{(cellData && formatDate(dayjs(cellData))) ?? <></>}</>
}

export function ModifiedOnRenderer<T extends ChallengeDataTableRowData>({
  rowData: { modifiedOn },
}: CellRendererProps<T>): JSX.Element | false {
  return !!modifiedOn && <DateRenderer cellData={modifiedOn} />
}

export function NameRenderer<T extends ChallengeDataTableRowData>({
  rowData: { name },
}: CellRendererProps<T>): JSX.Element | false {
  return !!name && <span>{name}</span>
}

export function SizeRenderer<T extends ChallengeDataTableRowData>({
  rowData: { size },
}: CellRendererProps<T>): JSX.Element {
  const friendlySize = calculateFriendlyFileSize(size)
  return <span>{friendlySize}</span>
}
