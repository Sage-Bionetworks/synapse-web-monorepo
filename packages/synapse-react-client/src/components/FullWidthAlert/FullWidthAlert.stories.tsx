import { Meta, StoryObj } from '@storybook/react-vite'
import { useEffect } from 'react'
import FullWidthAlert from './FullWidthAlert'
import { SynapseNavDrawer } from '../SynapseNavDrawer/SynapseNavDrawer'

const meta = {
  title: 'UI/FullWidthAlert',
  argTypes: {
    variant: {
      options: ['warning', 'info', 'danger', 'success', undefined],
      control: { type: 'radio' },
    },
  },
  component: FullWidthAlert,
  parameters: {
    chromatic: { viewports: [300, 600, 1200] },
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const DownloadListPackageCreation: Story = {
  args: {
    variant: 'success',
    show: true,
    title: 'Package has been downloaded',
    description:
      'The files contained in this zip file have been removed from your list.',
    isGlobal: false,
  },
}
export const SuccessAlertWithPrimaryButtonOnly: Story = {
  args: {
    variant: 'success',
    show: true,
    title: 'Success',
    description: 'Lorem ipsum dolor sit amet',
    primaryButtonConfig: {
      text: 'Accept and Continue',
      onClick: () => alert('Accepted'),
    },
    isGlobal: true,
    onClose: undefined,
  },
}

export const SynapseNavDrawerIsShowing: Story = {
  args: {
    ...SuccessAlertWithPrimaryButtonOnly.args,
  },
  render: args => (
    <>
      <SynapseNavDrawer
        initIsOpen={false}
        gotoPlace={(href: string) => {
          window.alert(`Nav bar calling back to change route to ${href}`)
        }}
      />
      <FullWidthAlert {...args} />
    </>
  ),
  decorators: [
    Story => {
      useEffect(() => {
        // SWC applies this class when SynapseNavDrawer is visible
        document.body.classList.add('SynapseNavDrawerIsShowing')
        return () => {
          // ...and removes it when SynapseNavDrawer is not visible
          document.body.classList.remove('SynapseNavDrawerIsShowing')
        }
      }, [])

      return <Story />
    },
  ],
}
