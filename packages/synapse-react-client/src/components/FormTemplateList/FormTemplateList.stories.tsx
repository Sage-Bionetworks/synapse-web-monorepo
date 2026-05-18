import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { mockFormTemplates } from '@/mocks/accessRequirement/mockFormTemplates'
import { getFormTemplateHandlers } from '@/mocks/msw/handlers/formTemplateHandlers'
import { FormTemplateList } from './FormTemplateList'

const meta: Meta<typeof FormTemplateList> = {
  title: 'Governance/JSON Schema AR/Form Template List',
  component: FormTemplateList,
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getFormTemplateHandlers(MOCK_REPO_ORIGIN)],
    },
  },
  args: {
    onEdit: fn(),
    onAddNew: fn(),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FormTemplateList>

export default meta
type Story = StoryObj<typeof meta>

/** List of all available form templates with seed data. */
export const WithSeedData: Story = {
  args: {
    templates: mockFormTemplates,
  },
}

/** Empty state with no templates created yet. */
export const Empty: Story = {
  args: {
    templates: [],
  },
}
