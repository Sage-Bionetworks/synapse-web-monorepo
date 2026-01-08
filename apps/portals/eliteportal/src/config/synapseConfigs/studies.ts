import {
  CardConfiguration,
  QueryWrapperPlotNavProps,
} from 'synapse-react-client'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import {
  defaultSearchConfiguration,
  studiesSql,
  SYNAPSE_PORTAL_ID,
} from '../resources'
import { TargetEnum } from 'synapse-react-client/utils/html/TargetEnum'
import { PortalDOIConfiguration } from 'synapse-react-client/components/GenericCard/PortalDOI/PortalDOIConfiguration'
import {
  doiSerializer,
  ELITEResourceType,
  RESOURCE_TYPE_KEY_CONFIGURATION,
} from '../doiRedirector'

export const studiesRgbIndex = 0

export const studyDoiConfiguration: PortalDOIConfiguration = {
  portalId: SYNAPSE_PORTAL_ID,
  resourceType: 'STUDY',
  resourceIdKeyColumns: RESOURCE_TYPE_KEY_CONFIGURATION['STUDY'],
  serializeDoiString: (type, attrs) =>
    doiSerializer.serialize(type as ELITEResourceType, attrs),
}

export const studyCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  secondaryLabelLimit: 4,
  titleLinkConfig: {
    isMarkdown: false,
    baseURL: 'Explore/Studies/DetailsPage',
    URLColumnName: 'studyKey',
    matchColumnName: 'studyKey',
    target: TargetEnum.CURRENT_WINDOW,
  },
  labelLinkConfig: [
    {
      isMarkdown: false,
      baseURL: 'Explore/Projects',
      URLColumnName: 'grant',
      matchColumnName: 'grants',
    },
    {
      isMarkdown: false,
      matchColumnName: 'projectFullName',
      overrideLinkURLColumnName: 'project',
      overrideLinkURLColumnTransform: shortName =>
        `/Explore/Projects/DetailsPage?shortName=${shortName}`,
    },
  ],
  genericCardSchema: {
    type: SynapseConstants.STUDY,
    title: 'studyName',
    // subTitle: 'dataContributor',
    icon: 'Access_Type',
    description: 'studyAbstract',
    secondaryLabels: [
      'dataStatus',
      'dataRestriction',
      'dataTypeAll',
      'studyFocus',
      'Species',
      'specimenType',
      'projectFullName',
      'grantNumber',
    ],
    portalDoiConfiguration: studyDoiConfiguration,
  },
}

export const studyColumnAliases = {
  dataTypeAll: 'Data Types',
  Number_of_Individuals: 'Individuals',
  projectFullName: 'Project',
}

const studiesQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex: studiesRgbIndex,
  columnAliases: studyColumnAliases,
  sql: studiesSql,
  name: 'Studies',
  shouldDeepLink: true,
  cardConfiguration: studyCardConfiguration,
  searchConfiguration: defaultSearchConfiguration,
}

export default studiesQueryWrapperPlotNavProps
