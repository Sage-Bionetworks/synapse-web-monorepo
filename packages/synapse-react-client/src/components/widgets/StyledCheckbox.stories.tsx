import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Checkbox, FormControlLabel, Stack } from '@mui/material'

const meta: Meta = {
  title: 'UI/Checkbox',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/0oPm5lLSUva8kyfVNMS6FA/Sage-Style-%26-Component-Library?node-id=70-1253',
    },
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  name: 'Checkbox',
  render: () => {
    return (
      <Stack>
        <FormControlLabel control={<Checkbox />} label={'uncontrolled'} />
        <FormControlLabel control={<Checkbox checked />} label={'checked'} />
        <FormControlLabel
          control={<Checkbox disabled={true} checked />}
          label={'checked + disabled'}
        />{' '}
        <FormControlLabel
          control={<Checkbox checked={false} />}
          label={'unchecked'}
        />
        <FormControlLabel
          control={<Checkbox disabled={true} checked={false} />}
          label={'disabled unchecked'}
        />
        <FormControlLabel
          control={<Checkbox indeterminate />}
          label={'indeterminate'}
        />
        <FormControlLabel
          control={<Checkbox disabled={true} indeterminate />}
          label={'disabled indeterminate'}
        />
      </Stack>
    )
  },
}
