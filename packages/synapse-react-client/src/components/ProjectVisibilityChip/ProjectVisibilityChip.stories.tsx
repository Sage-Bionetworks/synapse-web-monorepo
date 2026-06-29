import { Meta, StoryObj } from '@storybook/react-vite'
import ProjectVisibilityChip from './ProjectVisibilityChip'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { ACCESS_TYPE } from '@sage-bionetworks/synapse-types'
import {
  MOCK_AUTHENTICATED_PRINCIPAL_ID,
  MOCK_PUBLIC_PRINCIPAL_ID,
} from '@/mocks/realm/mockRealmPrincipal'
import { getEntityBundleHandler } from '@/mocks/msw/handlers/entityHandlers'
import { getHandlers } from '@/mocks/msw/handlers'

const meta = {
  title: 'Components/ProjectVisibilityChip',
  component: ProjectVisibilityChip,
  parameters: {
    chromatic: { viewports: [600, 1200] },
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

// No public/authenticated access -> PRIVATE
export const Private: Story = {
  args: { entityId: 'syn101' },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [
        getEntityBundleHandler(MOCK_REPO_ORIGIN, {
          benefactorAcl: {
            id: 'syn101',
            etag: 'mock-etag',
            resourceAccess: [],
          },
        }),
        ...getHandlers(MOCK_REPO_ORIGIN),
      ],
    },
  },
}

// public READ + authenticated READ -> DISCOVERABLE PROJECT
export const Discoverable: Story = {
  args: { entityId: 'syn102' },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [
        getEntityBundleHandler(MOCK_REPO_ORIGIN, {
          benefactorAcl: {
            id: 'syn102',
            etag: 'mock-etag',
            resourceAccess: [
              {
                principalId: MOCK_PUBLIC_PRINCIPAL_ID,
                accessType: [ACCESS_TYPE.READ],
              },
              {
                principalId: MOCK_AUTHENTICATED_PRINCIPAL_ID,
                accessType: [ACCESS_TYPE.READ],
              },
            ],
          },
        }),
        ...getHandlers(MOCK_REPO_ORIGIN),
      ],
    },
  },
}

// public READ + authenticated READ + authenticated DOWNLOAD -> PUBLIC
export const Public: Story = {
  args: { entityId: 'syn103' },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [
        getEntityBundleHandler(MOCK_REPO_ORIGIN, {
          benefactorAcl: {
            id: 'syn103',
            etag: 'mock-etag',
            resourceAccess: [
              {
                principalId: MOCK_PUBLIC_PRINCIPAL_ID,
                accessType: [ACCESS_TYPE.READ],
              },
              {
                principalId: MOCK_AUTHENTICATED_PRINCIPAL_ID,
                accessType: [ACCESS_TYPE.READ, ACCESS_TYPE.DOWNLOAD],
              },
            ],
          },
        }),
        ...getHandlers(MOCK_REPO_ORIGIN),
      ],
    },
  },
}
