import { Meta, StoryObj } from '@storybook/react-vite'

import { Typography } from '@mui/material'

const meta = {
  title: 'UI/Typography',
  component: Typography,
  argTypes: {
    children: { control: 'text' },
    variant: {
      control: 'select',
      options: [
        'headline1',
        'headline2',
        'headline3',
        'body1',
        'body1Italic',
        'body2',
        'breadcrumb1',
        'breadcrumb2',
        'smallText1',
        'smallText2',
        'smallLink',
        'label',
        'buttonLink',
        'hintText',
        'sectionTitle',
        'subsectionHeader',
        'dataFieldKey',
      ],
    },
  },
  render: args => (
    <Typography {...args}>
      {args.children ??
        "Modify this sample text using the 'children' control below"}
    </Typography>
  ),
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const TypographyDemo: Story = {
  args: {
    variant: 'body1',
  },
}
