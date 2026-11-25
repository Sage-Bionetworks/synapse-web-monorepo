import type { CardConfiguration } from 'synapse-react-client/components/CardContainer/CardConfiguration'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { rgbIndex, studiesSearchIndexId } from '../resources'
import { SearchQueryWrapperPlotNavProps } from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'

const type = SynapseConstants.GENERIC_CARD

const columnAliases = {
  studyId: 'Open project space',
  NAMsTechFocus: 'NAMs Tech Focus',
}

export const studyCardConfiguration: CardConfiguration = {
  type,
  genericCardSchema: {
    title: 'studyName',
    type: SynapseConstants.STUDY,
    description: 'summary',
    subTitle: 'studyLeads',
    includeShareButton: true,
    secondaryLabels: [
      'diseaseFocus',
      'NAMsTechFocus',
      'institution',
      'studyDoi',
      'synapseProjectId',
      'alternateName',
    ],
  },
  secondaryLabelLimit: 20,
}

export const studiesSearch: SearchQueryWrapperPlotNavProps = {
  rgbIndex,
  name: 'Studies',
  shouldDeepLink: false,
  cardConfiguration: studyCardConfiguration,
  columnAliases,
  searchIndexId: studiesSearchIndexId,
  autocompleteFieldName: 'studyName',
  hideTopLevelControls: false,
  hideQueryCount: false,
}
