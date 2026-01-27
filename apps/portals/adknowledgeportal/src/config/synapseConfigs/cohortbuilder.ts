import { QueryWrapperPlotNavProps } from 'synapse-react-client'
import {
  cavaticaConnectAccountURL,
  cohortBuilderFilesSql,
  cohortBuilderSql,
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
