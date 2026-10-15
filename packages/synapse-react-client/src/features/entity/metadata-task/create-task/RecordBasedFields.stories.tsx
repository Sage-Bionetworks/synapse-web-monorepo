import { putEntitySchemaBindingHandler } from '@/mocks/msw/handlers/entityHandlers'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { Meta, StoryObj } from '@storybook/react-vite'
import { HttpHandler } from 'msw'
import { userEvent, screen, within } from 'storybook/test'
import RecordBasedFields, { RecordBasedFieldsProps } from './RecordBasedFields'

const meta = {
  title: 'Synapse/Entity/MetadataTask/RecordBasedFields',
  component: RecordBasedFields,
} satisfies Meta<RecordBasedFieldsProps>
export default meta

type Story = StoryObj<typeof meta>

/** The mock schema's $id, matched against `mockValidationSchema` (see `src/mocks/mockSchema.ts`). */
const SCHEMA_ID = 'org.sagebionetworks-MockSchema'

const createNewHandlers: Record<string, HttpHandler[]> = {
  bindSchema: [
    putEntitySchemaBindingHandler({ backendOrigin: MOCK_REPO_ORIGIN }),
  ],
}

const createNewBindErrorHandlers: Record<string, HttpHandler[]> = {
  bindSchema: [
    putEntitySchemaBindingHandler({
      backendOrigin: MOCK_REPO_ORIGIN,
      status: 500,
      reason: 'The schema could not be bound to the RecordSet.',
    }),
  ],
}

export const PickExisting: Story = {
  args: {
    value: { recordSetId: '' },
    onChange: () => {},
  },
}

export const CreateNewSuccess: Story = {
  args: {
    value: { recordSetId: '' },
    onChange: () => {},
  },
  parameters: {
    msw: { handlers: createNewHandlers },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(
      canvas.getByRole('button', { name: /create new recordset/i }),
    )
    await userEvent.type(canvas.getByLabelText(/^parent/i), 'syn111')
    await userEvent.type(canvas.getByLabelText(/^json schema \$id/i), SCHEMA_ID)
    const upsertKeyCombobox = await canvas.findByRole('combobox', {
      name: /upsert key/i,
    })
    await userEvent.click(upsertKeyCombobox)
    await userEvent.click(
      await screen.findByRole('option', { name: 'country' }),
    )
    await userEvent.keyboard('{Escape}')
    await userEvent.type(
      await canvas.findByLabelText(/^recordset name/i),
      'My Record Set',
    )
    const submitButton = await canvas.findByRole('button', {
      name: /create recordset/i,
    })
    await userEvent.click(submitButton)
    await canvas.findByText('RecordSet Created')
  },
}

export const CreateNewBindError: Story = {
  args: {
    value: { recordSetId: '' },
    onChange: () => {},
  },
  parameters: {
    msw: { handlers: createNewBindErrorHandlers },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(
      canvas.getByRole('button', { name: /create new recordset/i }),
    )
    await userEvent.type(canvas.getByLabelText(/^parent/i), 'syn111')
    await userEvent.type(canvas.getByLabelText(/^json schema \$id/i), SCHEMA_ID)
    const upsertKeyCombobox = await canvas.findByRole('combobox', {
      name: /upsert key/i,
    })
    await userEvent.click(upsertKeyCombobox)
    await userEvent.click(
      await screen.findByRole('option', { name: 'country' }),
    )
    await userEvent.keyboard('{Escape}')
    await userEvent.type(
      await canvas.findByLabelText(/^recordset name/i),
      'My Record Set',
    )
    const submitButton = await canvas.findByRole('button', {
      name: /create recordset/i,
    })
    await userEvent.click(submitButton)
    await canvas.findByText(/could not be bound/i)
  },
}
