import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import DateTimePicker from './DateTimePicker'
import { SynapseContextProvider, useSynapseContext } from '../../utils'
import dayjs from 'dayjs'

const meta = {
  title: 'UI/DateTimePicker',
  component: DateTimePicker,
  tags: ['autodocs'],
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

function TimezoneConfigOverrideWrapper(
  props: React.PropsWithChildren<{ utcTimeOverride: boolean }>,
) {
  const { children, utcTimeOverride } = props
  const currentContext = useSynapseContext()
  return (
    <SynapseContextProvider
      synapseContext={{
        ...currentContext,
        utcTime: utcTimeOverride,
      }}
    >
      {children}
    </SynapseContextProvider>
  )
}

export const Local: Story = {
  decorators: [
    Story => (
      <TimezoneConfigOverrideWrapper utcTimeOverride={false}>
        <Story />
      </TimezoneConfigOverrideWrapper>
    ),
  ],
  args: {
    value: dayjs('2023-01-01T00:00:00'),
  },
}

export const UTC: Story = {
  decorators: [
    Story => (
      <TimezoneConfigOverrideWrapper utcTimeOverride={true}>
        <Story />
      </TimezoneConfigOverrideWrapper>
    ),
  ],
  args: {
    value: dayjs('2023-01-01T00:00:00'),
  },
}
