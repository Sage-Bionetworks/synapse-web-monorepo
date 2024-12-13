import { CardConfiguration } from 'synapse-react-client/components/CardContainerLogic/index'
import { GenericCardSchema } from 'synapse-react-client/components/GenericCard/GenericCard'
import { IconOptions } from 'synapse-react-client/components/Icon/Icon'
import { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/index'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import ProjectIcon from 'synapse-react-client/assets/themed_icons/Project'

import { grantsSql } from '../resources'

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
    'nihReporterLink',
    'grantStartDate',
    'theme',
  ],
}

// TODO: Change iconOptions type to map () => string | JSX.Element and remove cast
const iconOptions: IconOptions = {
  Grant: ProjectIcon as unknown as string,
}

export const grantsCardConfiguration: CardConfiguration = {
  genericCardSchema: grantsSchema,
  titleLinkConfig: {
    isMarkdown: false,
    URLColumnName: 'grantId',
    matchColumnName: 'grantId',
    baseURL: 'Explore/Grants/DetailsPage',
  },
  labelLinkConfig: [
    {
      isMarkdown: true,
      matchColumnName: 'nihReporterLink',
    },
  ],
  type: SynapseConstants.GENERIC_CARD,
  secondaryLabelLimit: 4,
  iconOptions,
}

export const grantQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
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
}
