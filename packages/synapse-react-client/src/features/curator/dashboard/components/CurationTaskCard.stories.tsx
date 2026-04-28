import { Meta, StoryObj } from '@storybook/react-vite'
import CurationTaskCard, { CurationTaskCardProps } from './CurationTaskCard'

const meta = {
  title: 'Curator/Dashboard/CurationTaskCard',
  component: CurationTaskCard,
} satisfies Meta<CurationTaskCardProps>
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    taskBundle: {
      task: {
        dataType: 'metadata_clinical',
        instructions:
          'Project: Precision Drug Treatment Profiling in Human Pancreatic Tissue',
        assigneePrincipalId: '273957',
        taskProperties: {
          concreteType:
            'org.sagebionetworks.repo.model.curation.metadata.FileBasedMetadataTaskProperties',
        },
      },
      status: {
        state: 'NOT_STARTED',
      },
    },
  },
}
