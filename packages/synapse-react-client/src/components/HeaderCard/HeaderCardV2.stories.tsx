import { Study } from '@/assets/themed_icons'
import { LaunchOutlined } from '@mui/icons-material'
import type { Meta, StoryObj } from '@storybook/react'
import HeaderCardV2 from './HeaderCardV2'

const meta = {
  title: 'Synapse/HeaderCardV2',
  component: HeaderCardV2,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HeaderCardV2>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: 'defaultType',
    title: 'Default HeaderCard',
    description: 'This is a default header card',
    values: [
      ['Label 1', 'Value 1'],
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

export const DicomCard: Story = {
  args: {
    type: 'DICOM',
    title: 'DICOM',
    description:
      'Radiology imaging, including templates for narrative reports and machine-generated output. DICOM® — Digital Imaging and Communications in Medicine — is the international standard for medical images and related information. It defines the formats for medical images that can be exchanged with the data and quality necessary for clinical use.',
    values: [
      ['AUTHOR NAME', 'DICOM (@dicom)'],
      ['LAST UPDATED', '2024-01-01'],
      ['BASED ON', 'None'],
    ],
    icon: <Study />,
    ctaButtons: [
      {
        label: 'View Standard on External Website',
        variant: 'outlined',
        href: 'https://dicom.nema.org/',
        // target: '_blank',
        endIcon: <LaunchOutlined />,
        sx: { borderRadius: 1 },
      },
    ],
  },
}

export const WithMultipleButtons: Story = {
  args: {
    ...DicomCard.args,
    title: 'DICOM with Multiple Actions',
    ctaButtons: [
      {
        label: 'View Standard on External Website',
        variant: 'outlined',
        href: 'https://dicom.nema.org/',
        // target: '_blank',
        endIcon: <LaunchOutlined />,
        sx: { borderRadius: 1 },
      },
      {
        label: 'Download Documentation',
        variant: 'contained',
        href: '#',
        sx: { borderRadius: 1 },
      },
      {
        label: 'View Examples',
        variant: 'outlined',
        href: '#',
        sx: { borderRadius: 1 },
      },
    ],
  },
}

export const WithStackedLayout: Story = {
  args: {
    ...DicomCard.args,
    title: 'DICOM with Stacked Layout',
    forceStackedLayout: true,
    values: [
      ['AUTHOR NAME', 'DICOM (@dicom)'],
      ['LAST UPDATED', '2024-01-01'],
      ['BASED ON', 'None'],
      [
        'VERY LONG LABEL',
        'This is a very long value that demonstrates why we might want to force a stacked layout. It contains lots of text that would be hard to read in a side-by-side layout.',
      ],
      [
        'ANOTHER LONG ONE',
        'More extensive content that benefits from the full width of the card when displayed in a stacked layout.',
      ],
    ],
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
    icon: <Study />,
  },
}
