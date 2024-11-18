import type { CardConfiguration, GenericCardSchema } from 'synapse-react-client'
import { SynapseConstants } from 'synapse-react-client'

export const projectsSchema: GenericCardSchema = {
  type: SynapseConstants.PROJECT,
  title: 'projectName',
  subTitle: 'grantName',
  description: 'description',
  secondaryLabels: ['investigator', 'consortium', 'grantType'],
}

export const projectCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: projectsSchema,
  secondaryLabelLimit: 4,
  descriptionConfig: {
    isMarkdown: true,
  },
}
