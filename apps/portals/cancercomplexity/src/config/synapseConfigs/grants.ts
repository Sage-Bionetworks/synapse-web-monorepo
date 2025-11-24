import type {
  CardConfiguration,
  IconOptions,
  QueryWrapperPlotNavProps,
} from 'synapse-react-client'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { Project as ProjectIcon } from 'synapse-react-client/assets/themed_icons/Project'
import { TableToGenericCardMapping } from 'synapse-react-client/components/GenericCard/TableRowGenericCard'
import { grantsSql } from '../resources'
import { sharePageLinkButtonDetailPageProps } from '@sage-bionetworks/synapse-portal-framework/shared-config/SharePageLinkButtonConfig'

const rgbIndex = 3

export const grantsSchema: TableToGenericCardMapping = {
  type: 'Grant',
  title: 'grantName',
  subTitle: 'grantInstitution',
  description: 'abstract',
  includeShareButton: true,
  secondaryLabels: [
    'investigator',
    'grantNumber',
    'consortium',
    'grantType',
    'grantStartDate',
    'theme',
  ],
}

// TODO: Change iconOptions type to map () => string | ReactNode and remove cast
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
  type: SynapseConstants.GENERIC_CARD,
  secondaryLabelLimit: 4,
  iconOptions,
  sharePageLinkButtonProps: sharePageLinkButtonDetailPageProps,
}

export const grantQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  sql: grantsSql,
  cardConfiguration: grantsCardConfiguration,
  shouldDeepLink: true,
  name: 'Grants',
  facetsToPlot: ['consortium', 'grantType'],
  searchConfiguration: {
    ftsConfig: {
      textMatchesMode: 'BOOLEAN',
      distance: 80,
    },
    searchable: [
      'grantName',
      'abstract',
      'grantInstitution',
      'investigator',
      'grantNumber',
    ],
  },
}
