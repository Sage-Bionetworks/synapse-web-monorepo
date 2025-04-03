import type { Meta, StoryObj } from '@storybook/react'
import Form, { FormProps } from './Form'

// export const FormData = {
// 	text: "default text"
// }

const meta = {
  component: Form,
  title: 'Form',
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  // args: {
  // 	...FormData,
  // },
} satisfies Meta<FormProps>
export default meta
type Story = StoryObj<typeof meta>

export const BasicForm: Story = {
  args: {
    text: 'Hello world!',
  },
}
