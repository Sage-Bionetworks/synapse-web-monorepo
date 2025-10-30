import { Meta, StoryObj } from '@storybook/react-vite'
import Programs from './Programs'

const meta = {
  title: 'Home Page/Programs',
  component: Programs,
  parameters: {
    chromatic: { viewports: [600, 1200] },
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const ProgramsDemo: Story = {
  args: {
    entityId: 'syn17024173',
    rgbIndex: 1,
    titleColumnName: 'Program',
    summaryColumnName: 'Short Description',
    linkColumnName: 'Website',
    imageFileHandleColumnName: 'Homepage Image',
    linkConfig: {
      isMarkdown: false,
      baseURL: 'Explore/Programs/DetailsPage',
      URLColumnName: 'Program',
      matchColumnName: 'Program',
    },
  },
}
