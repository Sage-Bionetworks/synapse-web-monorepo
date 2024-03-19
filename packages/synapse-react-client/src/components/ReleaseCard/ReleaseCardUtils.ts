import dayjs from 'dayjs'
import { formatDate } from '../../utils/functions/DateFormatter'
import { generateEncodedPathAndQueryForSelectedFacetURL } from '../QueryWrapper'
import { ReleaseCardSchema } from './ReleaseCard'
import {
  ButtonToExplorePageConfig,
  ReleaseCardStat,
  ReleaseMetadataConfig,
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
    releaseEntity: getValueFromData(
      schema,
      data,
      releaseMetdataConfig.releaseEntityColumnName,
    ),
    releaseDate: formatReleaseDate(
      schema,
      data,
      releaseMetdataConfig.releaseDateColumnName,
    ),
    stats: formatReleaseStats(schema, data, statsConfig),
  }
}

export const createButtonToExploreDataPathAndQueryString = (
  schema: ReleaseCardSchema,
  data: (string | null)[],
  buttonToExploreDataConfig?: ButtonToExplorePageConfig,
) => {
  if (!buttonToExploreDataConfig) return null
  const path = getValueFromData(
    schema,
    data,
    buttonToExploreDataConfig.sourcePathColumnName,
  )
  if (!path) {
    console.warn(
      `Column not found in source table or cell did not have value in source table for ${buttonToExploreDataConfig.sourcePathColumnName}`,
    )
    return null
  }

  const {
    exploreDataSql,
    exploreDataFacetColumnName,
    sourceDataFacetValueColumnName,
  } = buttonToExploreDataConfig

  const facetValue = sourceDataFacetValueColumnName
    ? getValueFromData(schema, data, sourceDataFacetValueColumnName)
    : null
  const hasSelectedFacet =
    exploreDataSql && exploreDataFacetColumnName && facetValue

  return hasSelectedFacet
    ? generateEncodedPathAndQueryForSelectedFacetURL(
        path,
        exploreDataSql,
        exploreDataFacetColumnName,
        facetValue,
      )
    : path
}
