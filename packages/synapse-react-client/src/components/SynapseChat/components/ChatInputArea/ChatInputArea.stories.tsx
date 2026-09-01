import { FILE } from '@/utils/APIConstants'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { Meta, StoryObj } from '@storybook/react-vite'
import { delay, http } from 'msw'
import { useState } from 'react'
import { fn, userEvent, within, waitFor, expect } from 'storybook/test'
import { ChatInputArea } from './ChatInputArea'

const meta = {
  title: 'Synapse/Chat/ChatInputArea',
  component: ChatInputArea,
  args: {
    onValueChange: fn(),
    onSend: fn(),
    placeholder: 'Message SynapseChat',
  },
  parameters: {
    stack: 'mock',
  },
  render: function Render(args) {
    // ChatInputArea controls its text value externally -- a trivial useState wrapper is enough
    // to demo it in isolation, without an agent session or chat MSW handlers.
    const [value, setValue] = useState(args.value)
    return (
      <ChatInputArea
        {...args}
        value={value}
        onValueChange={newValue => {
          setValue(newValue)
          args.onValueChange(newValue)
        }}
      />
    )
  },
} satisfies Meta<typeof ChatInputArea>
export default meta
type Story = StoryObj<typeof meta>

async function attachFiles(canvasElement: HTMLElement, fileNames: string[]) {
  const canvas = within(canvasElement.ownerDocument.body)

  await userEvent.click(
    await canvas.findByRole('button', { name: 'Add files' }),
  )
  // AddFilesDialog renders a MUI Dialog, which portals its content to document.body rather
  // than canvasElement, so the file input must be queried from the document.
  const fileInput = document.body.querySelector<HTMLInputElement>(
    'input[type="file"][id=filesToUpload]',
  )!
  const files = fileNames.map(
    name => new File(['content'], name, { type: 'text/plain' }),
  )
  await userEvent.upload(fileInput, files)

  const doneButton = await canvas.findByRole('button', { name: 'Done' })
  await waitFor(() => {
    expect(doneButton).not.toBeDisabled()
  })
  await userEvent.click(doneButton)

  await canvas.findByText(fileNames.at(-1)!)
}

export const Empty: Story = {
  args: { value: '' },
}

export const Typed: Story = {
  args: { value: 'What files are attached to this project?' },
}

export const Disabled: Story = {
  args: { value: 'Waiting for a session...', disabled: true },
}

export const OneAttachment: Story = {
  args: { value: '', allowAttachments: true },
  play: async ({ canvasElement }) => {
    await attachFiles(canvasElement, ['report.pdf'])
  },
}

export const ThreeAttachments: Story = {
  args: { value: '', allowAttachments: true },
  play: async ({ canvasElement }) => {
    await attachFiles(canvasElement, ['a.txt', 'b.txt', 'c.txt'])
  },
}

/**
 * The composer's inner content is 480px wide; a 4th chip is intentionally left partially
 * offscreen -- the container relies on default browser horizontal-scroll behavior rather than
 * a custom scrollbar (per the Figma designer's annotation).
 */
export const FourthAttachmentOverflows: Story = {
  args: { value: '', allowAttachments: true },
  decorators: [
    Story => (
      <div style={{ width: '480px' }}>
        <Story />
      </div>
    ),
  ],
  play: async ({ canvasElement }) => {
    await attachFiles(canvasElement, ['a.txt', 'b.txt', 'c.txt', 'd.txt'])
  },
}

/**
 * Overrides the mocked multipart-upload endpoint to hang indefinitely, so the story renders
 * mid-upload -- with the send button disabled -- instead of racing to a completed chip.
 */
export const Uploading: Story = {
  args: { value: 'hello', allowAttachments: true },
  parameters: {
    msw: {
      handlers: {
        file: [
          http.post(`${MOCK_REPO_ORIGIN}${FILE}/file/multipart`, async () => {
            await delay('infinite')
          }),
        ],
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(
      await canvas.findByRole('button', { name: 'Add files' }),
    )
    // AddFilesDialog renders a MUI Dialog, which portals its content to document.body rather
    // than canvasElement, so the file input must be queried from the document.
    const fileInput = document.body.querySelector<HTMLInputElement>(
      'input[type="file"][id=filesToUpload]',
    )!
    await userEvent.upload(
      fileInput,
      new File(['content'], 'report.pdf', { type: 'application/pdf' }),
    )
  },
}
