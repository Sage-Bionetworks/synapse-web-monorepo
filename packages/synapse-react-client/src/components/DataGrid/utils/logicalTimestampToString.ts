import { ITimestampStruct } from 'json-joy'

export default function logicalTimestampToString(
  logicalTimestamp: ITimestampStruct,
): string {
  return `[${logicalTimestamp.sid},${logicalTimestamp.time}]`
}
