import type { CardConfiguration } from 'synapse-react-client/components/CardContainer/CardConfiguration'
import type { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { rgbIndex, studiesSql } from '../resources'

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

const studiesQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  sql: studiesSql,
  name: 'Studies',
  shouldDeepLink: true,
  cardConfiguration: studyCardConfiguration,
  columnAliases,
  searchConfiguration: {
    searchable: [
      'studyName',
      'summary',
      'studyLeads',
      'diseaseFocus',
      'institution',
      'NAMsTechFocus',
      'alternateName',
      'studyDoi',
    ],
  },
}

export default studiesQueryWrapperPlotNavProps
