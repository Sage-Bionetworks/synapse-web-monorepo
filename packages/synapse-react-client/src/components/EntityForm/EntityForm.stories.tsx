import {
  getEntityFormHandlers,
  MOCK_FORM_PARENT_CONTAINER_ID,
  MOCK_FORM_SCHEMA_ID,
  MOCK_FORM_UI_SCHEMA_ID,
} from '@/mocks/msw/handlers/entityFormHandlers'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { Meta, StoryObj } from '@storybook/react-vite'
import { HttpHandler } from 'msw'
import { fn } from 'storybook/test'
import EntityForm from './EntityForm'

// Each story passes one group as a flat array, which replaces the global handlers: the global `entity` and
// `userProfile` groups would otherwise match first and shadow these
const handlers: Record<string, HttpHandler[]> = {
  default: getEntityFormHandlers(MOCK_REPO_ORIGIN),
  loading: getEntityFormHandlers(MOCK_REPO_ORIGIN, { neverLoad: true }),
  missingUserFolder: getEntityFormHandlers(MOCK_REPO_ORIGIN, { children: {} }),
}

const meta: Meta = {
  title: 'Synapse/EntityForm',
  component: EntityForm,
  argTypes: {
    isAuthenticated: {
      control: { type: 'boolean' },
    },
  },
  args: {
    parentContainerId: MOCK_FORM_PARENT_CONTAINER_ID,
    formSchemaEntityId: MOCK_FORM_SCHEMA_ID,
    formUiSchemaEntityId: MOCK_FORM_UI_SCHEMA_ID,
    initFormData: false,
    synIdCallback: fn(),
    isAuthenticated: true,
  },
  parameters: { stack: 'mock' },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Form: Story = {
  parameters: {
    msw: { handlers: handlers.default },
  },
}

export const Loading: Story = {
  parameters: {
    msw: { handlers: handlers.loading },
  },
}

export const MissingUserFolder: Story = {
  parameters: {
    msw: { handlers: handlers.missingUserFolder },
  },
}

export const SignedOut: Story = {
  args: { isAuthenticated: false },
}
