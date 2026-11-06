import type { CohortBuilderProps } from 'synapse-react-client/components/CohortBuilder/CohortBuilder'
import type { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import type {
  QBConditionDefinition,
  QBGroupDefinition,
} from 'synapse-react-client/components/QueryBuilder/QueryBuilderTypes'
import {
  cavaticaConnectAccountURL,
  cohortBuilderFilesSql,
  cohortBuilderSql,
  cohortBuilderV2FilesTableId,
  cohortBuilderV2ParticipantsSourceTableId,
  cohortBuilderV2ParticipantsTableId,
  enabledAnalysisPlatforms,
} from '../resources'
import {
  viewAssociatedParticipantsCustomControl,
  viewAssociatedFilesCustomControl,
} from '@sage-bionetworks/synapse-portal-framework/shared-config/cohortBuilderHandlers'

const rgbIndex = 1

export const individualsViewQueryWrapperPlotNavProps: QueryWrapperPlotNavProps =
  {
    rgbIndex,
    name: 'Participants',
    visibleColumnCount: 10,
    // facetsToPlot: ['Sex', 'dataTypes', 'Assays', 'Diagnosis', 'fileFormat'],
    isRowSelectionVisible: true,
    hideCopyToClipboard: true, //PORTALS-3212
    rowSelectionPrimaryKey: ['individualID'],
    helpConfiguration: [
      {
        columnName: 'individualID',
        helpText:
          'A unique identifier that represents a study participant in this system. Individual IDs in our system do not match study-specific participant IDs.',
      },
    ],
    tableConfiguration: {
      showAccessColumn: false,
      showDownloadColumn: false,

      columnLinks: [
        {
          isMarkdown: false,
          matchColumnName: 'studies',
          URLColumnName: 'Study_Name',
          baseURL: 'Explore/Studies/DetailsPage',
        },
        {
          isMarkdown: false,
          matchColumnName: 'grants',
          URLColumnName: 'Grant Number',
          baseURL: 'Explore/Projects/DetailsPage',
        },
      ],
    },
    additionalFiltersSessionStorageKey:
      'cohort-builder-individuals-perspective',
    customControls: [viewAssociatedFilesCustomControl],
    sql: cohortBuilderSql,
    shouldDeepLink: false,
  }

export const filesViewQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  name: 'Participant Data',
  enabledExternalAnalysisPlatforms: enabledAnalysisPlatforms,
  fileIdColumnName: 'id',
  fileNameColumnName: 'fileName',
  fileVersionColumnName: 'fileVersion',
  cavaticaConnectAccountURL: cavaticaConnectAccountURL,
  visibleColumnCount: 10,
  isRowSelectionVisible: true,
  hideCopyToClipboard: true, //PORTALS-3212
  rowSelectionPrimaryKey: ['id'],
  additionalFiltersSessionStorageKey: 'cohort-builder-files-perspective',
  tableConfiguration: {
    showAccessColumn: true,
    showAccessColumnHeader: true,
    showDownloadColumn: true,
    columnLinks: [
      {
        isMarkdown: false,
        matchColumnName: 'study',
        URLColumnName: 'Study_Name',
        baseURL: 'Explore/Studies/DetailsPage',
      },
      {
        isMarkdown: false,
        baseURL: 'Explore/Programs/DetailsPage',
        URLColumnName: 'Program',
        matchColumnName: 'program',
      },
    ],
  },
  sql: cohortBuilderFilesSql,

  customControls: [viewAssociatedParticipantsCustomControl],
  shouldDeepLink: false,
}

const allBraakStages: QBConditionDefinition = {
  columnName: 'Braak',
  op: 'is_any_of',
  values: [
    'None',
    'Stage I',
    'Stage II',
    'Stage III',
    'Stage IV',
    'Stage V',
    'Stage VI',
  ],
}

/** Participants with both single-nucleus RNA-seq and ATAC-seq data, from a 10x multiome assay or separate assays. */
const multiomeAssays: QBGroupDefinition = {
  combinator: 'AND',
  children: [
    {
      columnName: 'Assays',
      op: 'is_any_of',
      values: ['10x multiome, snrnaSeq', 'snrnaSeq'],
    },
    {
      columnName: 'Assays',
      op: 'is_any_of',
      values: ['10x multiome, snATACSeq', 'snATACSeq'],
    },
  ],
}

const neocorticalTissues: QBConditionDefinition = {
  columnName: 'tissues',
  op: 'is_any_of',
  values: [
    'inferior temporal gyrus',
    'dorsolateral prefrontal cortex',
    'angular gyrus',
  ],
}

export const cohortBuilderV2Props: CohortBuilderProps = {
  participantsTableId: cohortBuilderV2ParticipantsTableId,
  filesTableId: cohortBuilderV2FilesTableId,
  participantsSourceTableId: cohortBuilderV2ParticipantsSourceTableId,
  sampleQueries: {
    'Hippocampal Multiome Across All Braak Stages': {
      combinator: 'AND',
      children: [
        multiomeAssays,
        allBraakStages,
        {
          columnName: 'tissues',
          op: 'is_any_of',
          values: [
            'insular cortex',
            'medial entorhinal cortex',
            'lateral entorhinal cortex',
            'hippocampus',
          ],
        },
      ],
    },
    'Neocortical Multiome Across All Braak Stages': {
      combinator: 'AND',
      children: [multiomeAssays, allBraakStages, neocorticalTissues],
    },
    'Neocortical Multiome, Ages 71+, APOE4-Typed': {
      combinator: 'AND',
      children: [
        {
          columnName: 'binnedAges',
          op: 'is_any_of',
          values: ['71-75', '76-80', '81-85', '86-89', '90+'],
        },
        { columnName: 'apoe4Statuses', op: 'is_any_of', values: ['no', 'yes'] },
        multiomeAssays,
        allBraakStages,
        neocorticalTissues,
      ],
    },
  },
}
