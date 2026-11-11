import {
  getEntityFormHandlers,
  MOCK_FORM_PARENT_CONTAINER_ID,
  MOCK_FORM_SCHEMA_ID,
  MOCK_FORM_UI_SCHEMA_ID,
} from '@/mocks/msw/handlers/entityFormHandlers'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { Meta, StoryObj } from '@storybook/react-vite'
import EntityForm from './EntityForm'

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
    synIdCallback: (synId: string) => console.log('Saved form data to', synId),
    isAuthenticated: true,
  },
  parameters: { stack: 'mock' },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Form: Story = {
  parameters: {
    msw: { handlers: getEntityFormHandlers(MOCK_REPO_ORIGIN) },
  },
}

export const Loading: Story = {
  parameters: {
    msw: {
      handlers: getEntityFormHandlers(MOCK_REPO_ORIGIN, { neverLoad: true }),
    },
  },
}

export const MissingUserFolder: Story = {
  parameters: {
    msw: {
      handlers: getEntityFormHandlers(MOCK_REPO_ORIGIN, { children: {} }),
    },
  },
}

export const SignedOut: Story = {
  args: { isAuthenticated: false },
}
