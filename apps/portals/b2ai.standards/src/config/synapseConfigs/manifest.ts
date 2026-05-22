import type { LabelLinkConfig } from 'synapse-react-client/components/CardContainerLogic/CardContainerLogic'
import { MANIFEST_COLUMN_CONSTS } from '@/config/resources'

// Column links for rendering the Manifest table: each `_LINKS` column carries
// markdown links that should be rendered as such rather than as raw text.
export const manifestColumnLinks: LabelLinkConfig = [
  {
    isMarkdown: true,
    matchColumnName: MANIFEST_COLUMN_CONSTS.STANDARDS_AND_TOOLS_LINKS,
  },
  {
    isMarkdown: true,
    matchColumnName: MANIFEST_COLUMN_CONSTS.USES_DATA_SUBSTRATES_LINKS,
  },
  {
    isMarkdown: true,
    matchColumnName: MANIFEST_COLUMN_CONSTS.CONCERNS_DATA_TOPICS_LINKS,
  },
  {
    isMarkdown: true,
    matchColumnName: MANIFEST_COLUMN_CONSTS.CONCERNS_DATA_TOPICS_DOC_LINKS,
  },
  {
    isMarkdown: true,
    matchColumnName: MANIFEST_COLUMN_CONSTS.ANATOMY_LINKS,
  },
  {
    isMarkdown: true,
    matchColumnName: MANIFEST_COLUMN_CONSTS.DATASETS_LINK,
  },
]
