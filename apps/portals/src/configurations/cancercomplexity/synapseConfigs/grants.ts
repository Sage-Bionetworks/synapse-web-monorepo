import { SynapseConstants, SynapseComponents } from 'synapse-react-client'
import type { GenericCardSchema } from '../../../../../../packages/synapse-react-client/src/components/GenericCard'
import type { IconOptions } from 'synapse-react-client/dist/containers/row_renderers/utils/Icon'
import type { CardConfiguration } from '../../../../../../packages/synapse-react-client/src/components/CardContainerLogic'
import { grantsSql } from '../resources'
import { SynapseConfig } from 'types/portal-config'
const rgbIndex = 3

export const grantsSchema: GenericCardSchema = {
  type: 'Grant',
  title: 'grantName',
  subTitle: 'grantInstitution',
  description: 'abstract',
  secondaryLabels: [
    'investigator',
    'grantNumber',
    'consortium',
    'grantType',
    'theme',
  ],
}

// TODO: Change iconOptions type to map () => string | JSX.Element and remove cast
const iconOptions: IconOptions = {
  Grant: SynapseComponents.ProjectIcon as unknown as string,
}

export const grantsCardConfiguration: CardConfiguration = {
  genericCardSchema: grantsSchema,
  titleLinkConfig: {
    isMarkdown: false,
    URLColumnName: 'grantId',
    matchColumnName: 'grantId',
    baseURL: 'Explore/Grants/DetailsPage',
  },
  type: SynapseConstants.GENERIC_CARD,
  secondaryLabelLimit: 4,
  iconOptions,
}

export const grants: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    sql: grantsSql,
    cardConfiguration: grantsCardConfiguration,
    shouldDeepLink: true,
    name: 'Grants',
    facetsToPlot: ['consortium', 'grantType'],
    searchConfiguration: {
      searchable: [
        'grantName',
        'abstract',
        'grantInstitution',
        'investigator',
        'grantNumber',
      ],
    },
  },
}
