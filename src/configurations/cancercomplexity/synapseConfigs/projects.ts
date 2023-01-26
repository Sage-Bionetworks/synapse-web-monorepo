import { SynapseConstants } from 'synapse-react-client'
import { GenericCardSchema } from 'synapse-react-client/dist/containers/GenericCard'
import { CardConfiguration } from 'synapse-react-client/dist/containers/CardContainerLogic'
import { projectsSql } from '../resources'
import { SynapseConfig } from 'types/portal-config'

const rgbIndex = 1

export const projectsSchema: GenericCardSchema = {
  type: SynapseConstants.PROJECT,
  title: 'projectName',
  subTitle: 'grantName',
  description: 'description',
  secondaryLabels: [
    'investigator',
    'consortium', 
    'grantType',
  ],
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
