import { Meta, StoryObj } from '@storybook/react-vite'
import IconSvg, { IconStrings, IconSvgProps } from './IconSvg'

const meta = {
  title: 'UI/IconSvg',
  render: args => {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
        {[...IconStrings].sort().map(icon => (
          <div style={{ margin: '10px', textAlign: 'center' }} key={icon}>
            <div>
              <IconSvg {...args} icon={icon} label={icon} />
            </div>
            <div style={{ fontSize: '10px' }}>{icon}</div>
          </div>
        ))}
      </div>
    )
  },
} satisfies Meta<Omit<IconSvgProps, 'icon'>>
export default meta
type Story = StoryObj<typeof meta>

export const Icon: Story = {
  args: {
    sx: {
      color: 'primary.main',
    },
    fontSize: 'large',
  },
}
