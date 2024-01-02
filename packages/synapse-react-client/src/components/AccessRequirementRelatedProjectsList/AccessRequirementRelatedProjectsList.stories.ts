import { Meta, StoryObj } from '@storybook/react'
import { AccessRequirementRelatedProjectsList } from './AccessRequirementRelatedProjectsList'
import { MOCK_REPO_ORIGIN } from '../../utils/functions/getEndpoint'
import { rest } from 'msw'
import { ACCESS_REQUIREMENT_SEARCH } from '../../utils/APIConstants'

const meta = {
  title: 'Governance/AccessRequirementRelatedProjectsList',
  component: AccessRequirementRelatedProjectsList,
} satisfies Meta
export default meta

type Story = StoryObj<typeof meta>

export const ManyProjects: Story = {
  args: {
    accessRequirementId: 9603055,
  },
}

export const OneProject: Story = {
  args: {
    accessRequirementId: 9605913,
  },
}

export const ZeroProjectsMock: Story = {
  args: {
    accessRequirementId: 1234567,
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [
        // searchAccessRequirements
        rest.post(
          `${MOCK_REPO_ORIGIN}${ACCESS_REQUIREMENT_SEARCH}`,

          async (req, res, ctx) => {
            const zeroRelatedProjects = {
              results: [
                {
                  id: '1234567',
                  type: 'org.sagebionetworks.repo.model.ManagedACTAccessRequirement',
                  createdOn: '2017-08-23T18:48:20.892Z',
                  modifiedOn: '2023-12-14T00:43:41.315Z',
                  name: 'Team AR without Related Projects',
                  version: '1',
                  relatedProjectIds: [],
                  reviewerIds: [],
                },
              ],
            }
            return res(ctx.status(200), ctx.json(zeroRelatedProjects))
          },
        ),
      ],
    },
  },
}
