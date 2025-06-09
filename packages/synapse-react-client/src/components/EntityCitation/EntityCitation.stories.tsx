import { Meta, StoryObj } from '@storybook/react'
import EntityCitation from './EntityCitation'
import { useTheme, Box } from '@mui/material'

const RenderComponent = (StoryComponent: any) => {
  const theme = useTheme()
  return (
    <Box sx={{ backgroundColor: theme.palette.primary.main, padding: '20px' }}>
      <StoryComponent />
    </Box>
  )
}

const meta = {
  title: 'Synapse/EntityPage/EntityCitation',
  component: EntityCitation,
  parameters: {
    chromatic: { viewports: [600, 1200] },
  },
  decorators: [RenderComponent],
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const ProjectAndEntity: Story = {
  // Both project and entity have DOI
  args: {
    entityId: 'syn66268092',
    projectId: 'syn64042437',
    versionNumber: 1,
  },
}

export const ProjectOnly: Story = {
  args: {
    projectId: 'syn64042437',
    entityId: undefined,
    versionNumber: undefined,
  },
}

export const Project: Story = {
  // Entity without DOI but project has one
  args: {
    entityId: 'syn66268085',
    projectId: 'syn64042437',
    versionNumber: undefined,
  },
}

export const VersionedEntity: Story = {
  // Entity with versioned DOI, but project without DOI
  args: {
    entityId: 'syn61841662',
    projectId: 'syn60582629',
    versionNumber: 1,
  },
}

export const VersionlessEntity: Story = {
  // Entity with versionless DOI, but project without DOI
  args: {
    entityId: 'syn61841662',
    projectId: 'syn60582629',
    versionNumber: undefined,
  },
}
