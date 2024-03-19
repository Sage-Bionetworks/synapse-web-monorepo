import { Query } from '@sage-bionetworks/synapse-types'
import { render, screen, within } from '@testing-library/react'
import React from 'react'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { ReleaseCard, ReleaseCardProps, ReleaseCardSchema } from './ReleaseCard'
import { ReleaseCardLargeProps } from './ReleaseCardLarge'
import {
  ButtonToExplorePageConfig,
  ReleaseCardLargeConfig,
  ReleaseMetadataConfig,
  SelectedFacetConfig,
} from './ReleaseCardTypes'

const defaultPath = '/explore/files/genie'
const defaultSourcePathColumnName = 'releaseExplorePath'

const defaultSql = 'select * from syn123456'
const defaultExploreDataSqlColumnName = 'exploreDataSql'

const defaultFacetValue1 = '15.0-public'
const defaultFacetValueColumnName1 = 'version'
const defaultFacetColumnName1 = 'versionInSyn123456'

const defaultFacetValue2 = 'main'
const defaultFacetValueColumnName2 = 'Cohort'
const defaultFacetColumnName2 = 'cohortInSyn123456'

const defaultSelectedFacetConfigs: SelectedFacetConfig[] = [
  {
    facetColumnName: defaultFacetColumnName1,
    facetValueColumnName: defaultFacetValueColumnName1,
  },
  {
    facetColumnName: defaultFacetColumnName2,
    facetValueColumnName: defaultFacetValueColumnName2,
  },
]

const defaultButtonToExplorePageConfig: ButtonToExplorePageConfig = {
  label: 'Explore Current Data Release',
  sourcePathColumnName: defaultSourcePathColumnName,
  sourceExploreDataSqlColumnName: defaultExploreDataSqlColumnName,
  selectedFacetConfigs: defaultSelectedFacetConfigs,
}

const defaultReleaseMetadataConfig: ReleaseMetadataConfig = {
  releaseDateColumnName: 'releaseDate',
  releaseEntityColumnName: 'releaseEntity',
  releaseNameColumnName: 'releaseName',
}

const defaultCountPatients = 170505
const defaultCountSamples = 196541
const defaultStatsConfig = [
  { columnName: 'countPatients', label: 'Patients' },
  { columnName: 'countSamples', label: 'Samples' },
]

const defaultReleaseCardLargeConfig: ReleaseCardLargeConfig = {
  cardSize: 'large',
  prependRelease: false,
  releaseMetadataConfig: defaultReleaseMetadataConfig,
  statsConfig: defaultStatsConfig,
  buttonToExplorePageConfig: defaultButtonToExplorePageConfig,
}

const defaultSchema: ReleaseCardSchema = {
  releaseEntity: 0,
  releaseName: 1,
  releaseDate: 2,
  countPatients: 3,
  countSamples: 4,
  [defaultFacetValueColumnName1]: 6,
  [defaultSourcePathColumnName]: 7,
  [defaultExploreDataSqlColumnName]: 8,
  [defaultFacetValueColumnName2]: 9,
}
const defaultData: (string | null)[] = [
  'syn51417430',
  '14.1-public',
  '1704235808000',
  defaultCountPatients.toString(),
  defaultCountSamples.toString(),
  'false',
  defaultFacetValue1,
  defaultPath,
  defaultSql,
  defaultFacetValue2,
]

const defaultReleaseCardLargeProps: ReleaseCardLargeProps = {
  schema: defaultSchema,
  data: defaultData,
  releaseCardConfig: defaultReleaseCardLargeConfig,
}

function renderComponent(props: ReleaseCardProps) {
  return render(<ReleaseCard {...props} />, {
    wrapper: createWrapper(),
  })
}

function setUp(props: ReleaseCardProps) {
  const component = renderComponent(props)
  const exploreButtonLink = screen.queryByRole('link', {
    name: defaultButtonToExplorePageConfig.label,
  })
  return { component, exploreButtonLink }
}

describe('Release Card', () => {
  beforeEach(() => jest.clearAllMocks())

  describe('ReleaseCardLarge', () => {
    it('does not show an explore button when path data is missing', () => {
      const consoleWarnSpy = jest
        .spyOn(console, 'warn')
        .mockImplementation(() => {})
      const missingLinkData = [...defaultData]
      const pathColumnIndex =
        defaultSchema[defaultButtonToExplorePageConfig.sourcePathColumnName]
      missingLinkData[pathColumnIndex] = null

      const { exploreButtonLink } = setUp({
        ...defaultReleaseCardLargeProps,
        data: missingLinkData,
      })
      expect(exploreButtonLink).toBeNull()
      expect(consoleWarnSpy).toHaveBeenLastCalledWith(
        `Column not found in source table or cell did not have value in source table for ${defaultButtonToExplorePageConfig.sourcePathColumnName}`,
      )
      consoleWarnSpy.mockRestore()
    })

    it('explore button has link to path when query config values are missing', () => {
      const { exploreButtonLink } = setUp({
        ...defaultReleaseCardLargeProps,
        releaseCardConfig: {
          ...defaultReleaseCardLargeConfig,
          buttonToExplorePageConfig: {
            ...defaultButtonToExplorePageConfig,
            sourceExploreDataSqlColumnName: undefined,
          },
        },
      })
      expect(exploreButtonLink).toBeVisible()
      expect(exploreButtonLink).toHaveAttribute('href', defaultPath)
    })

    it('explore button has link with path and query string', () => {
      const query: Query = {
        sql: defaultSql,
        selectedFacets: [
          {
            concreteType:
              'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
            columnName: defaultFacetColumnName1,
            facetValues: [defaultFacetValue1],
          },
          {
            concreteType:
              'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
            columnName: defaultFacetColumnName2,
            facetValues: [defaultFacetValue2],
          },
        ],
      }
      const pathAndQueryString = `${defaultPath}?QueryWrapper0=${encodeURIComponent(
        JSON.stringify(query),
      )}`

      const { exploreButtonLink } = setUp(defaultReleaseCardLargeProps)
      expect(exploreButtonLink).toBeVisible()
      expect(exploreButtonLink).toHaveAttribute('href', pathAndQueryString)
    })

    it('shows all statistics', () => {
      setUp(defaultReleaseCardLargeProps)

      const statsDivPatients = screen.getByText('Patients').parentElement
      expect(statsDivPatients).not.toBeNull()
      within(statsDivPatients!).getByText(defaultCountPatients.toLocaleString())

      const statsDivSamples = screen.getByText('Samples').parentElement
      expect(statsDivSamples).not.toBeNull()
      within(statsDivSamples!).getByText(defaultCountSamples.toLocaleString())
    })
  })

  describe('ReleaseCardMedium', () => {
    it('shows all statistics', () => {
      setUp({
        schema: defaultSchema,
        data: defaultData,
        releaseCardConfig: {
          cardSize: 'medium',
          requestAccessPath: 'request access',
          releaseMetadataConfig: defaultReleaseMetadataConfig,
          statsConfig: defaultStatsConfig,
        },
      })

      const statsDivPatients =
        screen.getByText('Patients').parentElement?.parentElement
      expect(statsDivPatients).not.toBeNull()
      within(statsDivPatients!).getByText(defaultCountPatients.toLocaleString())

      const statsDivSamples =
        screen.getByText('Samples').parentElement?.parentElement
      expect(statsDivSamples).not.toBeNull()
      within(statsDivSamples!).getByText(defaultCountSamples.toLocaleString())
    })
  })
})
