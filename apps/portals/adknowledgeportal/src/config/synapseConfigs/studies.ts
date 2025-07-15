import {
  ADKPResourceType,
  doiSerializer,
  RESOURCE_TYPE_KEY_CONFIGURATION,
} from '@/config/doiRedirector'
import type {
  CardConfiguration,
  QueryWrapperPlotNavProps,
} from 'synapse-react-client'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { studiesSql, SYNAPSE_PORTAL_ID } from '../resources'
import { PortalDOIConfiguration } from 'synapse-react-client/components/GenericCard/PortalDOI/PortalDOIConfiguration'

export const STUDY_TABLE_COLUMN_NAMES = {
  STUDY: 'Study',
  STUDY_NAME: 'Study_Name',
  GRANT_NUMBER: 'Grant Number',
  PROGRAM: 'Program',
  ACK_CONTEXT: 'ackContext',
  ACKNOWLEDGEMENT: 'Acknowledgement',
  CITATIONS: 'Citations',
  METHODS: 'Methods',
  RELATED_STUDIES: 'Related_Studies',
  ACCESS_REQS: 'accessReqs',
  STUDY_METADATA: 'studyMetadata',
}

export const studyRgbIndex = 0

export const studyDoiConfiguration: PortalDOIConfiguration = {
  portalId: SYNAPSE_PORTAL_ID,
  resourceType: 'STUDY',
  resourceIdKeyColumns: RESOURCE_TYPE_KEY_CONFIGURATION['STUDY'],
  serializeDoiString: (type, attrs) =>
    doiSerializer.serialize(type as ADKPResourceType, attrs),
}

export const studyCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  secondaryLabelLimit: 4,
  titleLinkConfig: {
    isMarkdown: false,
    baseURL: 'Explore/Studies/DetailsPage',
    URLColumnName: 'Study',
    matchColumnName: 'Study',
  },
  labelLinkConfig: [
    {
      isMarkdown: false,
      matchColumnName: 'Program',
      URLColumnName: 'Program',
      baseURL: 'Explore/Programs/DetailsPage',
    },
  ],
  genericCardSchema: {
    type: SynapseConstants.STUDY,
    title: 'Study_Name',
    subTitle: 'Data_Contributor',
    icon: 'Access_Type',
    description: 'Study_Description',
    secondaryLabels: [
      'DataType_All',
      'studyFocus',
      'Number_Of_Individuals',
      'specimenType',
      'Species',
      'Cohort_Type',
      'Study_Status',
      'Program',
      'Grant Number',
    ],
    portalDoiConfiguration: studyDoiConfiguration,
  },
}
export const studyColumnAliases = {
  DataType_All: 'Data Types',
  Data_Contributor: 'Data Contributor',
  Study_Description: 'Study Description',
  Study_Name: 'Study Name',
  Number_of_Individuals: 'Individuals',
  'Grant Number': 'Grant',
}

export const studiesQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex: studyRgbIndex,
  columnAliases: studyColumnAliases,
  sql: studiesSql,
  name: 'Studies',
  shouldDeepLink: true,
  cardConfiguration: studyCardConfiguration,
  searchConfiguration: {
    searchable: [
      'Study_Name',
      'Study_Description',
      'DataType_All',
      'studyFocus',
      'Data_Contributor',
      'specimenType',
      'Species',
      'Grant Number',
      'Program',
    ],
  },
}
