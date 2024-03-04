import { Query } from '@sage-bionetworks/synapse-types'
import dayjs from 'dayjs'
import { formatDate } from '../../utils/functions/DateFormatter'
import { ReleaseCardSchema } from './ReleaseCard'
import {
  ButtonToExplorePageConfig,
  ReleaseCardStat,
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
) => {
  const releaseDateString = data[schema.releaseDate]
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
  statsConfig: StatConfig[],
) => {
  return {
    releaseVersion: data[schema.releaseVersion],
    releaseEntity: data[schema.releaseEntity],
    releaseDate: formatReleaseDate(schema, data),
    stats: formatReleaseStats(schema, data, statsConfig),
  }
}

const createButtonToExploreDataQueryString = (
  schema: ReleaseCardSchema,
  data: (string | null)[],
  buttonToExploreDataConfig?: ButtonToExplorePageConfig,
) => {
  if (!buttonToExploreDataConfig) return null

  const {
    exploreDataSql,
    exploreDataFacetColumnName,
    sourceDataFacetValueColumnName,
  } = buttonToExploreDataConfig
  if (
    exploreDataSql &&
    exploreDataFacetColumnName &&
    sourceDataFacetValueColumnName
  ) {
    const facetValue = getValueFromData(
      schema,
      data,
      sourceDataFacetValueColumnName,
    )
    // column not found in source table or cell did not have value in source table
    if (facetValue === null) return null

    const query: Query = {
      sql: exploreDataSql,
      selectedFacets: [
        {
          concreteType:
            'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
          columnName: exploreDataFacetColumnName,
          facetValues: [facetValue],
        },
      ],
    }
    return `?QueryWrapper0=${encodeURIComponent(JSON.stringify(query))}`
  }
  return null
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
  // column not found in source table or cell did not have value in source table
  if (!path) return null

  const queryString = createButtonToExploreDataQueryString(
    schema,
    data,
    buttonToExploreDataConfig,
  )
  return `${path}${queryString || ''}`
}
