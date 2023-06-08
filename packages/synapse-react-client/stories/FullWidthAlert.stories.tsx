import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import FullWidthAlert from '../src/components/FullWidthAlert/FullWidthAlert'
import { SynapseNavDrawer } from '../src/components/SynapseNavDrawer'

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

export const CookieAlert: Story = {
  args: {
    variant: 'info',
    show: true,
    title: 'Our site uses cookies.',
    description:
      'This website uses cookies to enhance your experience and to analyze our traffic. Using this website means that you agree with our cookie policy.',
    primaryButtonConfig: {
      text: 'Accept and Continue',
      onClick: () => alert('Accepted'),
    },
    secondaryButtonConfig: {
      text: 'Learn More',
      tooltipText: 'Opens a PDF',
      href: 'https://s3.amazonaws.com/static.synapse.org/governance/SynapsePrivacyPolicy.pdf',
    },
    isGlobal: true,
  },
}

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
      <SynapseNavDrawer initIsOpen={false} />
      <FullWidthAlert {...args} />
    </>
  ),
  decorators: [
    Story => {
      React.useEffect(() => {
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
