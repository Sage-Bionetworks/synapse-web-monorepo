import { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { AttachmentStripItem, ChatAttachmentStrip } from './ChatAttachmentStrip'

const meta = {
  title: 'Synapse/Chat/ChatAttachmentStrip',
  component: ChatAttachmentStrip,
  args: {
    onRemove: fn(),
  },
} satisfies Meta<typeof ChatAttachmentStrip>
export default meta
type Story = StoryObj<typeof meta>

function attachmentItem(
  fileHandleId: string,
  overrides: Partial<AttachmentStripItem> = {},
): AttachmentStripItem {
  return {
    fileHandleId,
    label: `file-${fileHandleId}.txt`,
    contentType: 'text/plain',
    ...overrides,
  }
}

export const Empty: Story = {
  args: {
    items: [],
  },
}

export const WithAttachments: Story = {
  args: {
    items: [
      attachmentItem('1', {
        label: 'PCA_Lung_Cancer_Feature_Reduction_Classification.pdf',
        contentType: 'application/pdf',
      }),
      attachmentItem('2', { label: 'Adams cool text file.txt' }),
      attachmentItem('3', {
        label: 'Another file.csv',
        contentType: 'text/csv',
      }),
    ],
  },
}

/**
 * In the composer (nowrap), a 4th chip is intentionally left partially offscreen -- the
 * container relies on default browser horizontal-scroll behavior rather than a custom
 * scrollbar.
 */
export const FourthChipOverflows: Story = {
  args: {
    items: Array.from({ length: 4 }, (_, i) => attachmentItem(`${i + 1}`)),
  },
  parameters: {
    // Matches the composer card's inner content width (480px).
    chromatic: { viewports: [480] },
  },
  decorators: [
    Story => (
      <div style={{ width: '480px' }}>
        <Story />
      </div>
    ),
  ],
}

export const Wrapping: Story = {
  args: {
    wrap: true,
    onRemove: undefined,
    items: Array.from({ length: 5 }, (_, i) => attachmentItem(`${i + 1}`)),
  },
  decorators: [
    Story => (
      <div style={{ width: '512px' }}>
        <Story />
      </div>
    ),
  ],
}
