import { SynapseConstants } from 'synapse-react-client'
import type { GenericCardSchema } from '../../../../../../packages/synapse-react-client/src/components/GenericCard'
import type { CardConfiguration } from '../../../../../../packages/synapse-react-client/src/components/CardContainerLogic'
import { projectsSql } from '../resources'
import { SynapseConfig } from 'types/portal-config'

const rgbIndex = 1

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

export const projects: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    cardConfiguration: projectCardConfiguration,
    shouldDeepLink: true,
    name: 'Projects',
    sql: projectsSql,
  },
}
