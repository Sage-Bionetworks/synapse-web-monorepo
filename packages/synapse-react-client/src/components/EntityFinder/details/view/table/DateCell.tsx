import dayjs from 'dayjs'
import { formatDate } from '../../../../../utils/functions/DateFormatter'

export function DateCell({ cellData }: { cellData?: string }) {
  return <>{(cellData && formatDate(dayjs(cellData))) ?? <></>}</>
}
