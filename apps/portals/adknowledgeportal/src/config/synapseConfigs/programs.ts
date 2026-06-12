import type { CardConfiguration } from 'synapse-react-client/components/CardContainer/CardConfiguration'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { programsSearchIndexId } from '../resources'
import { SearchQueryWrapperPlotNavProps } from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'

export const PROGRAM_TABLE_COLUMN_NAMES = {
  PROGRAM: 'Program',
  GRANT_NUMBER: 'Grant Number',
}

export const programCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: {
    type: 'Program',
    title: 'Full Name',
    subTitle: 'Short Description',
    icon: 'Program',
    secondaryLabels: ['More Information'],
    imageFileHandleColumnName: 'Details Page Image',
  },
  titleLinkConfig: {
    isMarkdown: false,
    baseURL: 'Explore/Programs/DetailsPage',
    URLColumnName: 'Program',
    matchColumnName: 'Program',
  },
  secondaryLabelLimit: 4,
  labelLinkConfig: [
    {
      isMarkdown: false,
      matchColumnName: 'More Information',
      linkColumnName: 'More Information URL',
    },
  ],
}

export default programCardConfiguration

export const programsSearch: SearchQueryWrapperPlotNavProps = {
  rgbIndex: 0,
  name: 'Programs',
  shouldDeepLink: false,
  cardConfiguration: programCardConfiguration,
  searchIndexId: programsSearchIndexId,
  autocompleteFieldName: 'Full Name',
  hideTopLevelControls: false,
  hideQueryCount: false,
}
