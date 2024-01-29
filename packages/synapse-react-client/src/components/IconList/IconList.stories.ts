import { Meta, StoryObj } from '@storybook/react'
import IconList, { IconListProps } from '../IconList'

const meta = {
  title: 'UI/IconList',
  component: IconList,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const NoColorSet: Story = {
  args: {
    iconConfigs: {
      genomicVariants: { icon: 'geneVariants' },
      geneExpression: { icon: 'geneExpression' },
      image: { icon: 'imaging' },
      drugCombinationScreen: { icon: 'rat' },
      reload: { icon: 'reload' },
      check: { icon: 'check' },
      proteomics: { icon: 'proteomics' },
      kinomics: { icon: 'kinomics' },
    },
    iconNames: ['reload', 'drugCombinationScreen', 'proteomics', 'check'],
  },
}
export const CustomColors: Story = {
  args: {
    iconConfigs: {
      genomicVariants: {
        icon: 'geneVariants',
        sx: {
          color: '#ff0000',
        },
      },
      geneExpression: {
        icon: 'geneExpression',
        sx: {
          color: 'orange',
        },
      },
      image: { icon: 'imaging', sx: { color: 'yellow' } },
      drugCombinationScreen: { icon: 'rat', sx: { color: '#00FF00' } },
      reload: { icon: 'reload', sx: { color: 'blue' } },
      check: { icon: 'check', sx: { color: '#2E2B5F' } },
      kinomics: { icon: 'kinomics', sx: { color: '#8B00FF' } },
    },
    iconNames: [
      'image',
      'genomicVariants',
      'geneExpression',
      'drugCombinationScreen',
      'reload',
      'check',
      'kinomics',
    ],
  },
}

export const ThemeColor: Story = {
  args: {
    iconConfigs: {
      drugCombinationScreen: { icon: 'rat' },
      geneExpression: { icon: 'geneExpression' },
    },
    useTheme: true,
    iconNames: ['drugCombinationScreen', 'geneExpression'],
  },
}
export const ThemeColorWithCircleBackground: Story = {
  args: {
    iconConfigs: {
      drugCombinationScreen: { icon: 'rat' },
      geneVariants: { icon: 'geneVariants' },
      other: { icon: 'other' },
    },
    commonIconProps: {
      sx: { fontSize: '40px' },
    } as IconListProps['commonIconProps'],
    useTheme: true,
    useBackground: true,
    iconNames: ['drugCombinationScreen', 'geneVariants', 'other'],
  },
}
export const Tooltip: Story = {
  args: {
    iconConfigs: {
      drugCombinationScreen: { icon: 'rat', label: 'I am a mouse!' },
      geneExpression: { icon: 'geneExpression', label: ':-D' },
    },
    iconNames: ['drugCombinationScreen', 'geneExpression'],
  },
}
