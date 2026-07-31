import { Meta, StoryObj } from '@storybook/react-vite'
import { fn, userEvent, expect, within } from 'storybook/test'
import { AddFilesDialog } from './AddFilesDialog'
import { MAX_ATTACHMENT_FILE_SIZE_BYTES } from '../../utils/constants'

const meta = {
  title: 'Synapse/Chat/AddFilesDialog',
  component: AddFilesDialog,
  args: {
    open: true,
    currentAttachmentCount: 0,
    onClose: fn(),
    onAttachmentUploaded: fn(),
    onUploadStateChange: fn(),
  },
  parameters: {
    requireLogin: true,
    stack: 'mock',
  },
} satisfies Meta<typeof AddFilesDialog>
export default meta
type Story = StoryObj<typeof meta>

export const Empty: Story = {}

export const AtAttachmentLimit: Story = {
  args: {
    currentAttachmentCount: 20,
  },
}

export const ClientValidationError: Story = {
  play: async ({ canvasElement }) => {
    // DialogBase renders a MUI Dialog, which portals its content to document.body rather than
    // canvasElement, so the file input must be queried from the document.
    const canvas = within(canvasElement.ownerDocument.body)
    await canvas.findByText('Click to upload')
    const fileInput =
      canvasElement.ownerDocument.body.querySelector<HTMLInputElement>(
        'input[type="file"][id=filesToUpload]',
      )!
    expect(fileInput).toBeInTheDocument()
    const oversizedFile = new File(
      [new Uint8Array(MAX_ATTACHMENT_FILE_SIZE_BYTES + 1)],
      'huge-file.txt',
      { type: 'text/plain' },
    )
    await userEvent.upload(fileInput, oversizedFile)
  },
}
