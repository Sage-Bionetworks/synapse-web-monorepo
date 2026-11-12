import {
  ADKP_MOCK_PROFILE,
  CohortBuilderMockProfile,
  ELITE_MOCK_PROFILE,
  withMaskedCounts,
} from '@/mocks/cohortBuilder/cohortBuilderMockProfiles'
import {
  ADKP_MOCK_SAMPLE_QUERIES,
  ELITE_MOCK_SAMPLE_QUERIES,
} from '@/mocks/cohortBuilder/cohortBuilderMockSampleQueries'
import { CohortBuilderAccess } from '@/mocks/cohortBuilder/cohortBuilderMockQueryEngine'
import { getCohortBuilderStorybookHandlers } from '@/mocks/msw/handlers/cohortBuilderHandlers'
import { registerTableQueryResult } from '@/mocks/msw/handlers/tableQueryService'
import { Meta, StoryObj } from '@storybook/react-vite'
import { userEvent, within } from 'storybook/test'
import {
  AGGREGATE_DATA_PREVIEW_TITLE,
  APPLY_PREVIEW_BUTTON_TEXT,
} from './AggregateDataPreviewControls'
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

const ELITE_MASKING_MOCK_PROFILE = withMaskedCounts(ELITE_MOCK_PROFILE)
const ADKP_MASKING_MOCK_PROFILE = withMaskedCounts(ADKP_MOCK_PROFILE)

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

/** ELITE, unapproved user, masking: facet counts below the suppression threshold of 20 show as "< 20", others binned. */
export const EliteAggregateOnlyMaskedFacetValues: Story = {
  args: { participantsTableId: ELITE_MOCK_PROFILE.participantsVirtualTableId },
  parameters: getMockParameters(ELITE_MASKING_MOCK_PROFILE, 'AGGREGATE_ONLY'),
}

/** ADKP synthetic participants, approved user: exact counts. */
export const AdkpFullAccess: Story = {
  args: { participantsTableId: ADKP_MOCK_PROFILE.participantsVirtualTableId },
  parameters: getMockParameters(ADKP_MOCK_PROFILE, 'FULL'),
}

/** ELITE, unapproved user: a cohort of 7 participants is below the suppression threshold of 20. */
export const EliteAggregateOnlyBelowThreshold: Story = {
  args: { participantsTableId: ELITE_MOCK_PROFILE.participantsVirtualTableId },
  // Masking, rather than excluding, keeps the rare value listed so it can be selected.
  parameters: getMockParameters(ELITE_MASKING_MOCK_PROFILE, 'AGGREGATE_ONLY'),
  play: buildCohort('Race', 'American Indian or Alaska Native'),
}

/** ADKP synthetic participants, unapproved user: facet counts with Laplace noise. */
export const AdkpAggregateOnly: Story = {
  args: { participantsTableId: ADKP_MOCK_PROFILE.participantsVirtualTableId },
  parameters: getMockParameters(ADKP_MOCK_PROFILE, 'AGGREGATE_ONLY'),
}

/** ADKP, unapproved user, masking: facet counts below the suppression threshold of 20 show as "< 20", others noised. */
export const AdkpAggregateOnlyMaskedFacetValues: Story = {
  args: { participantsTableId: ADKP_MOCK_PROFILE.participantsVirtualTableId },
  parameters: getMockParameters(ADKP_MASKING_MOCK_PROFILE, 'AGGREGATE_ONLY'),
}

/** ELITE, unapproved user: sample queries to load into the Query Builder. */
export const EliteSampleQueries: Story = {
  args: {
    ...eliteWithFilesArgs,
    sampleQueries: ELITE_MOCK_SAMPLE_QUERIES,
  },
  parameters: getMockParameters(ELITE_MOCK_PROFILE, 'AGGREGATE_ONLY'),
}

/** ADKP, approved user: sample queries to load into the Query Builder. */
export const AdkpSampleQueries: Story = {
  args: {
    participantsTableId: ADKP_MOCK_PROFILE.participantsVirtualTableId,
    sampleQueries: ADKP_MOCK_SAMPLE_QUERIES,
  },
  parameters: getMockParameters(ADKP_MOCK_PROFILE, 'FULL'),
}

/**
 * An administrator of the ELITE participant source table (approved) previewing what unapproved ELITE users see:
 * rounding to bins of 5, threshold 20.
 */
export const ElitePreview: Story = {
  args: {
    ...eliteWithFilesArgs,
    participantsSourceTableId: ELITE_MOCK_PROFILE.participantsSourceTableId,
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: getCohortBuilderStorybookHandlers({
        profile: ELITE_MOCK_PROFILE,
        access: 'FULL',
        isSourceAdministrator: true,
      }),
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await canvas.findByText(/participants$/, undefined, { timeout: 30_000 })
    await userEvent.click(
      await canvas.findByRole('button', {
        name: AGGREGATE_DATA_PREVIEW_TITLE,
      }),
    )
    await userEvent.type(
      canvas.getByRole('spinbutton', { name: /^Suppression threshold/ }),
      String(ELITE_MOCK_PROFILE.suppressionThreshold),
    )
    await userEvent.click(
      canvas.getByRole('combobox', { name: 'Facet post-processing' }),
    )
    // The select's options render in a popover outside the story's canvas.
    await userEvent.click(
      within(canvasElement.ownerDocument.body).getByRole('option', {
        name: 'Rounding',
      }),
    )
    await userEvent.type(
      canvas.getByRole('spinbutton', { name: /^Round to/ }),
      '5',
    )
    await userEvent.click(
      canvas.getByRole('button', { name: APPLY_PREVIEW_BUTTON_TEXT }),
    )
  },
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

/**
 * The synthetic test Cohort Builder on production, with the signed-in user's own access. Always uses the production
 * stack, whatever the Stack toolbar is set to.
 */
export const ProductionSyntheticDataCohortBuilderTest: Story = {
  args: {
    participantsTableId: 'syn78350488',
    filesTableId: 'syn78350475',
    participantsSourceTableId: 'syn78350314',
  },
  // Story globals override, and lock, the Stack toolbar for this story.
  globals: { stack: 'production' },
  parameters: { requireLogin: true },
}

/**
 * The ELITE Cohort Builder on production, with the signed-in user's own access. Always uses the production stack,
 * whatever the Stack toolbar is set to.
 */
export const ProductionEliteCohortBuilder: Story = {
  args: {
    participantsTableId: 'syn78340012',
    filesTableId: 'syn78340377',
    participantsSourceTableId: 'syn77454377',
  },
  // Story globals override, and lock, the Stack toolbar for this story.
  globals: { stack: 'production' },
  parameters: { requireLogin: true },
}

/**
 * The ADKP Cohort Builder on production, with the signed-in user's own access. Always uses the production stack,
 * whatever the Stack toolbar is set to.
 */
export const ProductionAdkpCohortBuilder: Story = {
  args: {
    participantsTableId: 'syn78155293',
    filesTableId: 'syn78157126',
    participantsSourceTableId: 'syn77485039',
  },
  // Story globals override, and lock, the Stack toolbar for this story.
  globals: { stack: 'production' },
  parameters: { requireLogin: true },
}
