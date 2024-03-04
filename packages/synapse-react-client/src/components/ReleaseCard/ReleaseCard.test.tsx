import { Query } from '@sage-bionetworks/synapse-types'
import { render, screen, within } from '@testing-library/react'
import React from 'react'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { ReleaseCard, ReleaseCardProps, ReleaseCardSchema } from './ReleaseCard'
import { ReleaseCardLargeProps } from './ReleaseCardLarge'
import {
  ButtonToExplorePageConfig,
  ReleaseCardLargeConfig,
} from './ReleaseCardTypes'

const defaultPath = '/explore/files/genie'
const defaultReleaseType = 'some-facet-value'

const defaultButtonToExplorePageConfig: ButtonToExplorePageConfig = {
  label: 'Explore Current Data Release',
  sourcePathColumnName: 'releaseExplorePath',
  exploreDataSql: 'select * from syn123456',
  exploreDataFacetColumnName: 'columnInSyn123456',
  sourceDataFacetValueColumnName: 'releaseType',
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
  statsConfig: defaultStatsConfig,
  buttonToExplorePageConfig: defaultButtonToExplorePageConfig,
}

const defaultSchema: ReleaseCardSchema = {
  releaseEntity: 0,
  releaseVersion: 1,
  releaseDate: 2,
  countPatients: 3,
  countSamples: 4,
  releaseType: 6,
  releaseExplorePath: 7,
}
const defaultData: (string | null)[] = [
  'syn51417430',
  '14.1-public',
  '1704235808000',
  defaultCountPatients.toString(),
  defaultCountSamples.toString(),
  'false',
  defaultReleaseType,
  defaultPath,
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
      const missingLinkData = [...defaultData]
      const pathColumnIndex =
        defaultSchema[defaultButtonToExplorePageConfig.sourcePathColumnName]
      missingLinkData[pathColumnIndex] = null

      const { exploreButtonLink } = setUp({
        ...defaultReleaseCardLargeProps,
        data: missingLinkData,
      })
      expect(exploreButtonLink).toBeNull()
    })

    it('explore button has link to path when query config values are missing', () => {
      const { exploreButtonLink } = setUp({
        ...defaultReleaseCardLargeProps,
        releaseCardConfig: {
          ...defaultReleaseCardLargeConfig,
          buttonToExplorePageConfig: {
            ...defaultButtonToExplorePageConfig,
            exploreDataSql: undefined,
          },
        },
      })
      expect(exploreButtonLink).toBeVisible()
      expect(exploreButtonLink).toHaveAttribute('href', defaultPath)
    })

    it('explore button has link with path and query string', () => {
      const query: Query = {
        sql: defaultButtonToExplorePageConfig.exploreDataSql!,
        selectedFacets: [
          {
            concreteType:
              'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
            columnName:
              defaultButtonToExplorePageConfig.exploreDataFacetColumnName!,
            facetValues: [defaultReleaseType],
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
