import {
  ADKP_MOCK_PROFILE,
  CohortBuilderMockProfile,
  ELITE_MOCK_PROFILE,
} from '@/mocks/cohortBuilder/cohortBuilderMockProfiles'
import { CohortBuilderAccess } from '@/mocks/cohortBuilder/cohortBuilderMockQueryEngine'
import { getCohortBuilderStorybookHandlers } from '@/mocks/msw/handlers/cohortBuilderHandlers'
import { registerTableQueryResult } from '@/mocks/msw/handlers/tableQueryService'
import { Meta, StoryObj } from '@storybook/react-vite'
import { userEvent, within } from 'storybook/test'
import { CohortBuilder, CohortBuilderProps } from './CohortBuilder'

const meta: Meta<CohortBuilderProps & { isAuthenticated: boolean }> = {
  title: 'Explore/CohortBuilder',
  component: CohortBuilder,
  args: { isAuthenticated: true },
}

export default meta
type Story = StoryObj<typeof meta>

function getMockParameters(
  profile: CohortBuilderMockProfile,
  access: CohortBuilderAccess,
  maxCohortValues?: number,
) {
  return {
    stack: 'mock',
    msw: {
      handlers: getCohortBuilderStorybookHandlers({
        profile,
        access,
        maxCohortValues,
      }),
    },
  }
}

/** A play function that builds the cohort "`property` is any of `value`" with the Query Builder. */
function buildCohort(property: string, value: string): Story['play'] {
  return async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // The participant count shows once the cohort's results have loaded.
    await canvas.findByText(/participants$/, undefined, { timeout: 30_000 })
    await userEvent.type(
      await canvas.findByRole('combobox', { name: 'Property' }),
      property,
    )
    await userEvent.keyboard('{ArrowDown}{Enter}')
    await userEvent.click(
      await canvas.findByRole('button', { name: value }, { timeout: 10_000 }),
    )
    await userEvent.click(
      canvas.getByRole('button', { name: 'Update Results' }),
    )
  }
}

const eliteWithFilesArgs = {
  participantsTableId: ELITE_MOCK_PROFILE.participantsVirtualTableId,
  filesTableId: ELITE_MOCK_PROFILE.dataVirtualTableId,
}

/** ELITE, unapproved user, with the Files/Datasets panel: no filters, so every file and dataset is listed. */
export const EliteWithFiles: Story = {
  args: eliteWithFilesArgs,
  parameters: getMockParameters(ELITE_MOCK_PROFILE, 'AGGREGATE_ONLY'),
}

/** ELITE, unapproved user: the files and datasets of the cohort "Race is Black or African American". */
export const EliteWithFilesForCohort: Story = {
  args: eliteWithFilesArgs,
  parameters: getMockParameters(ELITE_MOCK_PROFILE, 'AGGREGATE_ONLY'),
  play: buildCohort('Race', 'Black or African American'),
}

/** ELITE, unapproved user: the LLFS cohort has 1,200 participants but only 3 datasets, fewer than the threshold of 20. */
export const EliteWithFilesBelowThreshold: Story = {
  args: eliteWithFilesArgs,
  parameters: getMockParameters(ELITE_MOCK_PROFILE, 'AGGREGATE_ONLY'),
  play: buildCohort('Study', 'LLFS'),
}

/** ELITE, unapproved user: with a cohort limit of 1,000, the 1,096 male participants are too many to hand off. */
export const EliteWithFilesCohortTooLarge: Story = {
  args: eliteWithFilesArgs,
  parameters: getMockParameters(ELITE_MOCK_PROFILE, 'AGGREGATE_ONLY', 1000),
  play: buildCohort('Sex', 'Male'),
}

/** ELITE synthetic participants, approved user: exact counts. */
export const EliteFullAccess: Story = {
  args: { participantsTableId: ELITE_MOCK_PROFILE.participantsVirtualTableId },
  parameters: getMockParameters(ELITE_MOCK_PROFILE, 'FULL'),
}

/** ELITE synthetic participants, unapproved user: facet counts rounded to bins of 5. */
export const EliteAggregateOnly: Story = {
  args: { participantsTableId: ELITE_MOCK_PROFILE.participantsVirtualTableId },
  parameters: getMockParameters(ELITE_MOCK_PROFILE, 'AGGREGATE_ONLY'),
}

/** ADKP synthetic participants, approved user: exact counts. */
export const AdkpFullAccess: Story = {
  args: { participantsTableId: ADKP_MOCK_PROFILE.participantsVirtualTableId },
  parameters: getMockParameters(ADKP_MOCK_PROFILE, 'FULL'),
}

/** ELITE, unapproved user: a cohort of 7 participants is below the suppression threshold of 20. */
export const EliteAggregateOnlyBelowThreshold: Story = {
  args: { participantsTableId: ELITE_MOCK_PROFILE.participantsVirtualTableId },
  parameters: getMockParameters(ELITE_MOCK_PROFILE, 'AGGREGATE_ONLY'),
  play: buildCohort('Race', 'American Indian or Alaska Native'),
}

/** ADKP synthetic participants, unapproved user: facet counts with Laplace noise. */
export const AdkpAggregateOnly: Story = {
  args: { participantsTableId: ADKP_MOCK_PROFILE.participantsVirtualTableId },
  parameters: getMockParameters(ADKP_MOCK_PROFILE, 'AGGREGATE_ONLY'),
}

/** A data manager (approved) previewing what unapproved ELITE users see. */
export const ElitePreview: Story = {
  args: {
    participantsTableId: ELITE_MOCK_PROFILE.participantsVirtualTableId,
    aggregateDataPreview: {
      suppressionThreshold: ELITE_MOCK_PROFILE.suppressionThreshold,
      facetPostProcessingConfig: ELITE_MOCK_PROFILE.facetPostProcessingConfig,
    },
  },
  parameters: getMockParameters(ELITE_MOCK_PROFILE, 'FULL'),
}

const emptyTableId = 'syn90000099'
/** No participants match. */
export const ZeroParticipants: Story = {
  args: { participantsTableId: emptyTableId },
  parameters: { stack: 'mock' },
  loaders: [
    () => {
      registerTableQueryResult(
        { sql: `SELECT * FROM ${emptyTableId}` },
        {
          concreteType:
            'org.sagebionetworks.repo.model.table.QueryResultBundle',
          queryCount: 0,
          selectColumns: [],
          columnModels: [],
          facets: [],
        },
      )
      return {}
    },
  ],
}

/** Signed out: asked to sign in, no queries. */
export const SignedOut: Story = {
  args: {
    participantsTableId: ELITE_MOCK_PROFILE.participantsVirtualTableId,
    isAuthenticated: false,
  },
  parameters: getMockParameters(ELITE_MOCK_PROFILE, 'AGGREGATE_ONLY'),
}
