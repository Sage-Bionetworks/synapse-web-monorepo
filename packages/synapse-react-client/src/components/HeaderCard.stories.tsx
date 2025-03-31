import { Study } from '@/assets/themed_icons'
import type { Meta, StoryObj } from '@storybook/react'
import HeaderCard from './HeaderCard'

const meta = {
  title: 'Synapse/HeaderCard',
  component: HeaderCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<typeof HeaderCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: 'Standard',
    title: 'Example Study',
    description:
      'This is an example study description that demonstrates the HeaderCard component.',
    values: [
      ['Status', 'Active'],
      ['Data Type', 'Genomics'],
      ['Access', 'Public'],
    ],
    secondaryLabelLimit: 3,
    isAlignToLeftNav: false,
    descriptionConfig: {
      showFullDescriptionByDefault: true,
    },
    icon: <Study />,
  },
}

export const WithSubtitle: Story = {
  args: {
    ...Default.args,
    title: 'Study With Subtitle',
    subTitle: 'Principal Investigator: John Doe',
  },
}

export const Dicom: Story = {
  args: {
    ...Default.args,
    title: 'DICOM',
    description:
      'Radiology imaging, including templates for narrative reports and machine-generated output. DICOM® — Digital Imaging and Communications in Medicine — is the international standard for medical images and related information. It defines the formats for medical images that can be exchanged with the data and quality necessary for clinical use.',
    values: [
      ['AUTHOR NAME', 'DICOM (@dicom)'],
      ['LAT UPDATED', '2024-01-01'],
      ['BASED ON', 'None'],
    ],
  },
}
