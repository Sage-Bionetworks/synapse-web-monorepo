import { SynapseConfig } from 'types/portal-config'
import {
  cohortBuilderFilesSql,
  cohortBuilderSql,
  defaultSearchConfiguration,
} from '../resources'
import {
  handleParticipantsToFiles,
  handleSelectedParticipantsToFiles,
} from './handleParticipantsToFiles'
import {
  handleFilesToParticipants,
  handleSelectedFilesToParticipants,
} from './handleFilesToParticipants'

const rgbIndex = 1

export const individualsView: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    name: 'Participants',
    visibleColumnCount: 10,
    facetsToPlot: ['Sex', 'dataTypes', 'Assays', 'Diagnosis', 'fileFormat'],
    isRowSelectionVisible: true,
    rowSelectionPrimaryKey: ['individualID'],
    combineRangeFacetConfig: {
      label: 'Age',
      minFacetColumn: 'minAge',
      maxFacetColumn: 'maxAge',
    },
    tableConfiguration: {
      showAccessColumn: false,
      showDownloadColumn: false,
      columnLinks: [
        {
          matchColumnName: 'study',
          isMarkdown: false,
          baseURL: 'Explore/Studies/DetailsPage',
          URLColumnName: 'studyKey',
          wrapValueWithParens: false,
        },
      ],
    },
    additionalFiltersLocalStorageKey: 'cohort-builder-individuals-perspective',
    customControls: [
      {
        buttonText: 'View files in selection',
        onClick: (event) => {
          handleSelectedParticipantsToFiles(event)
        },
        isRowSelectionSupported: true,
      },
      {
        buttonText: 'View associated files',
        onClick: (event) => {
          handleParticipantsToFiles(event)
        },
        isRowSelectionSupported: false,
      },
    ],
    sql: cohortBuilderSql,
    shouldDeepLink: true,
    searchConfiguration: defaultSearchConfiguration,
  },
}

export const filesView: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    name: 'Data',
    showExportToCavatica: true,
    fileIdColumnName: 'fileId',
    fileNameColumnName: 'fileId',
    fileVersionColumnName: 'currentVersion',
    cavaticaHelpURL: '/Limited%20Data%20Commons',
    visibleColumnCount: 10,
    isRowSelectionVisible: true,
    rowSelectionPrimaryKey: ['fileId'],
    additionalFiltersLocalStorageKey: 'cohort-builder-files-perspective',
    combineRangeFacetConfig: {
      label: 'Age',
      minFacetColumn: 'minAge',
      maxFacetColumn: 'maxAge',
    },
    tableConfiguration: {
      showAccessColumn: true,
      showDownloadColumn: true,
      columnLinks: [
        {
          matchColumnName: 'study',
          isMarkdown: false,
          baseURL: 'Explore/Studies/DetailsPage',
          URLColumnName: 'studyKey',
        },
      ],
    },
    sql: cohortBuilderFilesSql,

    customControls: [
      {
        buttonText: 'View participants in selection',
        onClick: (event) => {
          handleSelectedFilesToParticipants(event)
        },
        isRowSelectionSupported: true,
      },
      {
        buttonText: 'View associated participants',
        onClick: (event) => {
          handleFilesToParticipants(event)
        },
        isRowSelectionSupported: false,
      },
    ],
    shouldDeepLink: true,
    searchConfiguration: defaultSearchConfiguration,
  },
}
