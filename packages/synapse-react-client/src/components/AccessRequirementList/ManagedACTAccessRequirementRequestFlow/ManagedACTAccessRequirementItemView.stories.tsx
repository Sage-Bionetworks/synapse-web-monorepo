import MarkdownSynapse from '@/components/Markdown/MarkdownSynapse'
import { mockManagedACTAccessRequirement } from '@/mocks/accessRequirement/mockAccessRequirements'
import {
  RestrictionLevel,
  SubmissionState,
} from '@sage-bionetworks/synapse-types'
import { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { ManagedACTAccessRequirementItemView } from './ManagedACTAccessRequirementItemView'

const meta: Meta<typeof ManagedACTAccessRequirementItemView> = {
  title:
    'Governance/Data Access Request Flow/Requirements/ManagedACTAccessRequirementItem',
  component: ManagedACTAccessRequirementItemView,
  args: {
    accessRequirement: mockManagedACTAccessRequirement,
    wikiPage: (
      <MarkdownSynapse
        markdown={`These are the AR instructions presented to the user.\n1. Fill out this form\n2. Wait a bit\n3. We will give you access`}
      />
    ),
    isLoading: false,
    onRejectTerms: fn(),
    onRequestAccess: fn(),
    onCancelDataAccessRequest: fn(),
    cancelRequestIsPending: false,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ManagedACTAccessRequirementItemView>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    accessRequirementStatus: {
      accessRequirementId: String(mockManagedACTAccessRequirement.id),
      concreteType:
        'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
      isApproved: false,
    },
  },
}

export const Approved: Story = {
  args: {
    accessRequirementStatus: {
      accessRequirementId: String(mockManagedACTAccessRequirement.id),
      concreteType:
        'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
      isApproved: true,
      currentSubmissionStatus: {
        submissionId: '1',
        submittedBy: '123456',
        modifiedOn: '2023-05-10T16:54:53.333Z',
        state: SubmissionState.APPROVED,
      },
    },
  },
}

export const Pending: Story = {
  args: {
    accessRequirementStatus: {
      accessRequirementId: String(mockManagedACTAccessRequirement.id),
      concreteType:
        'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
      isApproved: false,
      currentSubmissionStatus: {
        submissionId: '1',
        submittedBy: '123456',
        modifiedOn: '2023-05-10T16:54:53.333Z',
        state: SubmissionState.SUBMITTED,
      },
    },
  },
}

export const Cancelled: Story = {
  args: {
    accessRequirementStatus: {
      accessRequirementId: String(mockManagedACTAccessRequirement.id),
      concreteType:
        'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
      isApproved: false,
      currentSubmissionStatus: {
        submissionId: '1',
        submittedBy: '123456',
        modifiedOn: '2023-05-10T16:54:53.333Z',
        state: SubmissionState.CANCELLED,
      },
    },
  },
}

export const Expired: Story = {
  args: {
    accessRequirementStatus: {
      accessRequirementId: String(mockManagedACTAccessRequirement.id),
      concreteType:
        'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
      isApproved: false,
      expiredOn: '2023-05-10T16:54:53.333Z',

      currentSubmissionStatus: {
        submissionId: '1',
        submittedBy: '123456',
        modifiedOn: '2023-05-10T16:54:53.333Z',
        state: SubmissionState.APPROVED,
      },
    },
  },
}

export const Rejected: Story = {
  args: {
    accessRequirementStatus: {
      accessRequirementId: String(mockManagedACTAccessRequirement.id),
      concreteType:
        'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
      isApproved: false,
      currentSubmissionStatus: {
        submissionId: '1',
        submittedBy: '123456',
        modifiedOn: '2023-05-10T16:54:53.333Z',
        state: SubmissionState.REJECTED,
        rejectedReason: 'This is a mock rejection reason for testing purposes.',
      },
    },
  },
}

export const ExemptFromAccessRequirement: Story = {
  args: {
    accessRequirementStatus: {
      accessRequirementId: String(mockManagedACTAccessRequirement.id),
      concreteType:
        'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
      isApproved: false,
    },
    restrictionInformation: {
      objectId: mockManagedACTAccessRequirement.id,
      restrictionLevel: RestrictionLevel.CONTROLLED_BY_ACT,
      hasUnmetAccessRequirement: true,
      restrictionDetails: [
        {
          accessRequirementId: mockManagedACTAccessRequirement.id,
          isApproved: false,
          isMet: true,
          isExempt: true,
        },
      ],
    },
  },
}
