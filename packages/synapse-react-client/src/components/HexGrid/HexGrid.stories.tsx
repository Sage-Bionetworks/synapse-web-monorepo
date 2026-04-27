import type { Meta, StoryObj } from '@storybook/react-vite'
import HexGrid from './HexGrid'

const meta = {
  title: 'Components/HexGrid',
  component: HexGrid,
  parameters: {
    withRouter: true,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HexGrid>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    sql: 'SELECT * FROM syn17024173',
    titleColName: 'Program',
    imageColName: 'Homepage Image',
    descriptionColName: 'Short Description',
  },
}
