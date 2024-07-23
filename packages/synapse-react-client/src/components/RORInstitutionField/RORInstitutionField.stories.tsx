import { Meta, StoryObj } from '@storybook/react'
import RORInstitutionField from './RORInstitutionField'
import React, { useState } from 'react'
import { Box } from '@mui/material'

const meta = {
  title: 'Components/RORInstitutionField',
  component: RORInstitutionField,
  render: function RenderFn(args) {
    const [value, setValue] = useState<string>(args.value)

    return (
      <>
        <RORInstitutionField {...args} value={value} onChange={setValue} />

        <Box mt={2}>Actual value: {value}</Box>
      </>
    )
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    value: '',
  },
}
