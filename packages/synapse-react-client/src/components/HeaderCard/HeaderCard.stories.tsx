import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import HeaderCard from './HeaderCardV2'
import type { HeaderCardProps } from './HeaderCardV2'
import { Study } from '../../assets/themed_icons' // icon example. fix later

const meta = {
  title: 'Synapse/HeaderCardV2',
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
    type: 'defaultType',
    title: 'Default HeaderCard',
    description: 'This is a default header card',
    values: [
      ['Label 1', 'Value 1'], // Each inner array is [label, value]
      ['Label 2', 'Value 2'],
      ['Label 3', 'Value 3'],
    ],
    secondaryLabelLimit: 3,
    isAlignToLeftNav: false,
    descriptionConfig: {
      showFullDescriptionByDefault: true,
    },
    icon: <Study />,
  },
}

export const StudyHeaderCardV2: Story = {
  args: {
    type: 'Study',
    title: 'Synodos NF2',
    subTitle: 'Jaishri Blakeley, D. Wade Clapp, James Gusella, Scott Plotkin',
    description:
      'Synodos for NF2 is a first-of-its-kind neurofibromatosis research collaboration dedicated to defeating the rare genetic disorder neurofibromatosis type 2 (NF2)...',
    values: [
      ['Study Status', 'Completed'],
      ['Data Status', 'Available'],
      ['Disease Focus', 'Neurofibromatosis type 2'],
      ['Manifestation', 'Schwannoma, Meningioma'],
      ['Funding Agency', 'CTF'],
      [
        'Institutions',
        "Johns Hopkins Medicine, Indiana University, Massachusetts General Hospital, Harvard Medical School, University of Central Florida, FLI-Leibniz-Germany, University of North Carolina, Ohio State University, Sage Bionetworks, Children's Tumor Foundation",
      ],
      ['On Synapse', 'syn2343195'],
      [
        'Grant DOI',
        'https://doi.org/10.48105/pc.gr.88541, https://doi.org/10.48105/pc.gr.88552',
      ],
    ],
    secondaryLabelLimit: 8,
    isAlignToLeftNav: false,
    descriptionConfig: {
      showFullDescriptionByDefault: true,
    },
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
