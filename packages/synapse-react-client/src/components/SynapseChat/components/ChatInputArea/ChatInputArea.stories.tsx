import { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { fn } from 'storybook/test'
import { ChatInputArea } from './ChatInputArea'

const meta = {
  title: 'Synapse/Chat/ChatInputArea',
  component: ChatInputArea,
  args: {
    onValueChange: fn(),
    onSend: fn(),
    placeholder: 'Message SynapseChat',
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

export const Empty: Story = {
  args: { value: '' },
}

export const Typed: Story = {
  args: { value: 'What files are attached to this project?' },
}

export const Disabled: Story = {
  args: { value: 'Waiting for a session...', disabled: true },
}
