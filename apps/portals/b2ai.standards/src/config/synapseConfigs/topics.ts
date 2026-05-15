import type { LabelLinkConfig } from 'synapse-react-client/components/CardContainerLogic/CardContainerLogic'
import { TOPIC_TABLE_COLUMN_CONSTS } from '@/config/resources'

export const topicsRgbIndex = 3

export const topicsColumnLinks: LabelLinkConfig = [
  {
    isMarkdown: true,
    matchColumnName: TOPIC_TABLE_COLUMN_CONSTS.NAME,
  },
]
