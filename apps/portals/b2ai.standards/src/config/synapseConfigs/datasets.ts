import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import type { CardConfiguration } from 'synapse-react-client/components/CardContainer/CardConfiguration'
import { DATASET_DENORMALIZED_COLUMN_CONSTS } from '@/config/resources'

export const linkedDataSetCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: {
    type: '',
    title: DATASET_DENORMALIZED_COLUMN_CONSTS.NAME,
    description: DATASET_DENORMALIZED_COLUMN_CONSTS.DESCRIPTION,
    link: DATASET_DENORMALIZED_COLUMN_CONSTS.DATA_URL,
    secondaryLabels: [
      DATASET_DENORMALIZED_COLUMN_CONSTS.DATA_URL,
      DATASET_DENORMALIZED_COLUMN_CONSTS.DOCUMENTATION_URL,
      DATASET_DENORMALIZED_COLUMN_CONSTS.TOPICS,
      DATASET_DENORMALIZED_COLUMN_CONSTS.SUBSTRATES,
    ],
  },
}
