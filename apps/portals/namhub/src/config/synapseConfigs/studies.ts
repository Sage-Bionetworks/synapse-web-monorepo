import type { CardConfiguration } from 'synapse-react-client/components/CardContainer/CardConfiguration'
import type { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { studiesSql } from '../resources'

const type = SynapseConstants.GENERIC_CARD

const rgbIndex = 5

const columnAliases = {
  studyId: 'On Synapse',
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
      'modelTypeDesc',
      'fundingAgency',
      'institution',
      'grantId',
      'studyDoi',
      'synapseProjectId',
      'alternateName',
      'studyId',
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
      'fundingAgency',
      'institution',
      'NAMsTechFocus',
      'modelTypeDesc',
      'grantId',
      'alternateName',
      'studyDoi',
      'studyId',
    ],
  },
}

export default studiesQueryWrapperPlotNavProps
