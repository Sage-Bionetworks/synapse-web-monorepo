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
) {
  return {
    stack: 'mock',
    msw: { handlers: getCohortBuilderStorybookHandlers({ profile, access }) },
  }
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // The participant count shows once the cohort's results have loaded.
    await canvas.findByText(/participants$/, undefined, { timeout: 30_000 })
    await userEvent.type(
      await canvas.findByRole('combobox', { name: 'Property' }),
      'Race',
    )
    await userEvent.keyboard('{ArrowDown}{Enter}')
    await userEvent.click(
      await canvas.findByRole(
        'button',
        { name: 'American Indian or Alaska Native' },
        { timeout: 10_000 },
      ),
    )
    await userEvent.click(
      canvas.getByRole('button', { name: 'Update Results' }),
    )
  },
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
