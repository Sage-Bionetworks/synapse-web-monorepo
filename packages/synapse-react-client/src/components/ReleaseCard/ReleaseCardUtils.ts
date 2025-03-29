import { formatDate } from '@/utils/functions/DateFormatter'
import dayjs from 'dayjs'
import { generateEncodedPathAndQueryForSelectedFacetURL } from '../QueryWrapper'
import { SelectedFacet } from '../QueryWrapper/generateEncodedPathAndQueryForSelectedFacetURL'
import { ReleaseCardSchema } from './ReleaseCard'
import {
  ButtonToExplorePageConfig,
  ReleaseCardStat,
  ReleaseMetadataConfig,
  SelectedFacetConfig,
  StatConfig,
} from './ReleaseCardTypes'

const MISSING_STAT_DEFAULT_VALUE = 'Unknown'

const formatNumber = (num: number) => {
  if (num < 1_000_000) return num.toLocaleString()
  const numberFormatter = new Intl.NumberFormat([], {
    minimumFractionDigits: 1,
    maximumFractionDigits: 2,
    notation: 'compact',
    localeMatcher: 'best fit',
  })
  return numberFormatter.format(num)
}

const getValueFromData = (
  schema: ReleaseCardSchema,
  data: (string | null)[],
  columnName: string,
) => {
  const columnIndex = schema[columnName]
  let columnValue
  if (columnIndex === undefined) {
    console.error(`Could not find column named ${columnName}`)
    columnValue = null
  } else {
    columnValue = data[columnIndex]
  }
  return columnValue
}

const formatReleaseStats = (
  schema: ReleaseCardSchema,
  data: (string | null)[],
  statsConfig: StatConfig[],
) => {
  return statsConfig.map(statConfig => {
    const { columnName, label } = statConfig
    const statString = getValueFromData(schema, data, columnName)
    const cardStat: ReleaseCardStat = {
      label: label,
      value: statString
        ? formatNumber(Number(statString))
        : MISSING_STAT_DEFAULT_VALUE,
    }
    return cardStat
  })
}

const formatReleaseDate = (
  schema: ReleaseCardSchema,
  data: (string | null)[],
  releaseDateColumnName: string,
) => {
  const releaseDateString = getValueFromData(
    schema,
    data,
    releaseDateColumnName,
  )
  const cardStat: ReleaseCardStat = {
    label: 'Date of release',
    value: releaseDateString
      ? formatDate(dayjs(Number(releaseDateString)), 'MM/DD/YYYY')
      : MISSING_STAT_DEFAULT_VALUE,
  }
  return cardStat
}

export const formatReleaseCardData = (
  schema: ReleaseCardSchema,
  data: (string | null)[],
  releaseMetdataConfig: ReleaseMetadataConfig,
  statsConfig: StatConfig[],
) => {
  return {
    releaseName: getValueFromData(
      schema,
      data,
      releaseMetdataConfig.releaseNameColumnName,
    ),
    releaseEntityId: getValueFromData(
      schema,
      data,
      releaseMetdataConfig.releaseEntityIdColumnName,
    ),
    releaseDate: formatReleaseDate(
      schema,
      data,
      releaseMetdataConfig.releaseDateColumnName,
    ),
    stats: formatReleaseStats(schema, data, statsConfig),
  }
}

const getAllSelectedFacets = (
  schema: ReleaseCardSchema,
  data: (string | null)[],
  selectedFacetConfigs: SelectedFacetConfig[] | undefined,
  staticSelectedFacets: SelectedFacet[] | undefined,
): SelectedFacet[] => {
  const allSelectedFacets: SelectedFacet[] = staticSelectedFacets
    ? [...staticSelectedFacets]
    : []

  if (selectedFacetConfigs) {
    selectedFacetConfigs.forEach(selectedFacetConfig => {
      const sourceDataFacetValueColumnName =
        selectedFacetConfig.sourceTableColumnName
      const facetValue = sourceDataFacetValueColumnName
        ? getValueFromData(schema, data, sourceDataFacetValueColumnName)
        : null
      if (facetValue) {
        allSelectedFacets.push({
          facet: selectedFacetConfig.destinationTableColumnName,
          facetValue: facetValue,
        })
      }
    })
  }

  return allSelectedFacets
}

export const formatExplorePagePathAndQueryString = (
  schema: ReleaseCardSchema,
  data: (string | null)[],
  btnConfig?: ButtonToExplorePageConfig,
) => {
  if (!btnConfig) return null
  const path = getValueFromData(
    schema,
    data,
    btnConfig.sourceTablePathColumnName,
  )
  if (!path) {
    console.warn(
      `Column not found in source table or cell did not have value in source table for ${btnConfig.sourceTablePathColumnName}`,
    )
    return null
  }

  const {
    sourceTableSqlColumnName: sourceExploreDataSqlColumnName,
    selectedFacetConfigs,
    staticSelectedFacets,
  } = btnConfig

  const exploreDataSql = sourceExploreDataSqlColumnName
    ? getValueFromData(schema, data, sourceExploreDataSqlColumnName)
    : null
  const allSelectedFacets = getAllSelectedFacets(
    schema,
    data,
    selectedFacetConfigs,
    staticSelectedFacets,
  )
  const hasSelectedFacets = exploreDataSql && allSelectedFacets.length > 0

  return hasSelectedFacets
    ? generateEncodedPathAndQueryForSelectedFacetURL(
        path,
        exploreDataSql,
        allSelectedFacets,
      )
    : path
}
