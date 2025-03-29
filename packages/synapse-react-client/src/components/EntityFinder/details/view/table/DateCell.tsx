import { formatDate } from '@/utils/functions/DateFormatter'
import dayjs from 'dayjs'

export function DateCell({ cellData }: { cellData?: string }) {
  return <>{(cellData && formatDate(dayjs(cellData))) ?? <></>}</>
}
