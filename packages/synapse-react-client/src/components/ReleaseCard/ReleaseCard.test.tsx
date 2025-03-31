import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { Query } from '@sage-bionetworks/synapse-types'
import { render, screen, within } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { SelectedFacet } from '../QueryWrapper/generateEncodedPathAndQueryForSelectedFacetURL'
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
    destinationTableColumnName: defaultFacetColumnName1,
    sourceTableColumnName: defaultFacetValueColumnName1,
  },
  {
    destinationTableColumnName: defaultFacetColumnName2,
    sourceTableColumnName: defaultFacetValueColumnName2,
  },
]

const defaultPrimaryBtnConfig: ButtonToExplorePageConfig = {
  label: 'Explore Current Data Release',
  sourceTablePathColumnName: defaultSourcePathColumnName,
  sourceTableSqlColumnName: defaultExploreDataSqlColumnName,
  selectedFacetConfigs: defaultSelectedFacetConfigs,
}

const defaultSecondaryBtnSelectedFacetStatic: SelectedFacet = {
  facet: 'dataType',
  facetValue: 'data_guide',
}
const defaultSecondaryBtnConfig: ButtonToExplorePageConfig = {
  label: 'View Data Guide',
  sourceTablePathColumnName: 'releaseExplorePath',
  sourceTableSqlColumnName: 'exploreDataSql',
  selectedFacetConfigs: defaultSelectedFacetConfigs,
  staticSelectedFacets: [defaultSecondaryBtnSelectedFacetStatic],
}

const defaultReleaseMetadataConfig: ReleaseMetadataConfig = {
  releaseDateColumnName: 'releaseDate',
  releaseEntityIdColumnName: 'releaseEntityId',
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
  primaryBtnConfig: defaultPrimaryBtnConfig,
  secondaryBtnConfig: defaultSecondaryBtnConfig,
}

const defaultSchema: ReleaseCardSchema = {
  releaseEntityId: 0,
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
  const router = createMemoryRouter([
    {
      path: '/',
      element: <ReleaseCard {...props} />,
    },
  ])

  return render(<RouterProvider router={router} />, {
    wrapper: createWrapper(),
  })
}

function setUp(props: ReleaseCardProps) {
  const component = renderComponent(props)
  const primaryBtnLink = screen.queryByRole('link', {
    name: defaultPrimaryBtnConfig.label,
  })
  const secondaryBtnLink = screen.queryByRole('link', {
    name: defaultSecondaryBtnConfig.label,
  })
  return { component, primaryBtnLink, secondaryBtnLink }
}

describe('Release Card', () => {
  beforeEach(() => jest.clearAllMocks())

  describe('ReleaseCardLarge', () => {
    it('does not show primary explore button when path data is missing', () => {
      const consoleWarnSpy = jest
        .spyOn(console, 'warn')
        .mockImplementation(() => {})
      const missingLinkData = [...defaultData]
      const pathColumnIndex =
        defaultSchema[defaultPrimaryBtnConfig.sourceTablePathColumnName]
      missingLinkData[pathColumnIndex] = null

      const { primaryBtnLink } = setUp({
        ...defaultReleaseCardLargeProps,
        data: missingLinkData,
      })
      expect(primaryBtnLink).toBeNull()
      expect(consoleWarnSpy).toHaveBeenLastCalledWith(
        `Column not found in source table or cell did not have value in source table for ${defaultPrimaryBtnConfig.sourceTablePathColumnName}`,
      )
      consoleWarnSpy.mockRestore()
    })

    it('primary explore button has link to path when query config values are missing', () => {
      const { primaryBtnLink } = setUp({
        ...defaultReleaseCardLargeProps,
        releaseCardConfig: {
          ...defaultReleaseCardLargeConfig,
          primaryBtnConfig: {
            ...defaultPrimaryBtnConfig,
            sourceTableSqlColumnName: undefined,
          },
        },
      })
      expect(primaryBtnLink).toBeVisible()
      expect(primaryBtnLink).toHaveAttribute('href', defaultPath)
    })

    it('primary explore button has link with path and query string', () => {
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

      const { primaryBtnLink } = setUp(defaultReleaseCardLargeProps)
      expect(primaryBtnLink).toBeVisible()
      expect(primaryBtnLink).toHaveAttribute('href', pathAndQueryString)
    })

    it('secondary explore button has link with path and query string', () => {
      const query: Query = {
        sql: defaultSql,
        selectedFacets: [
          // static facets
          {
            concreteType:
              'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
            columnName: defaultSecondaryBtnSelectedFacetStatic.facet,
            facetValues: [defaultSecondaryBtnSelectedFacetStatic.facetValue],
          },
          // dynamic facets
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

      const { secondaryBtnLink } = setUp(defaultReleaseCardLargeProps)
      expect(secondaryBtnLink).toBeVisible()
      expect(secondaryBtnLink).toHaveAttribute('href', pathAndQueryString)
    })

    it('handles explore button with only static selected facets', () => {
      const query: Query = {
        sql: defaultSql,
        selectedFacets: [
          {
            concreteType:
              'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
            columnName: defaultSecondaryBtnSelectedFacetStatic.facet,
            facetValues: [defaultSecondaryBtnSelectedFacetStatic.facetValue],
          },
        ],
      }

      const pathAndQueryString = `${defaultPath}?QueryWrapper0=${encodeURIComponent(
        JSON.stringify(query),
      )}`

      const { secondaryBtnLink } = setUp({
        ...defaultReleaseCardLargeProps,
        releaseCardConfig: {
          ...defaultReleaseCardLargeConfig,
          secondaryBtnConfig: {
            ...defaultSecondaryBtnConfig,
            selectedFacetConfigs: undefined,
          },
        },
      })

      expect(secondaryBtnLink).toBeVisible()
      expect(secondaryBtnLink).toHaveAttribute('href', pathAndQueryString)
    })

    it('handles explore button without any selected facets', () => {
      const { secondaryBtnLink } = setUp({
        ...defaultReleaseCardLargeProps,
        releaseCardConfig: {
          ...defaultReleaseCardLargeConfig,
          secondaryBtnConfig: {
            ...defaultSecondaryBtnConfig,
            selectedFacetConfigs: undefined,
            staticSelectedFacets: undefined,
          },
        },
      })

      expect(secondaryBtnLink).toBeVisible()
      expect(secondaryBtnLink).toHaveAttribute('href', defaultPath)
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
