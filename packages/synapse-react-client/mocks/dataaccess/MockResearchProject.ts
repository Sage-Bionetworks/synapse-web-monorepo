import { ResearchProject } from '../../src/lib/utils/synapseTypes/ResearchProject'
import { mockManagedACTAccessRequirement } from '../mockAccessRequirements'

export const MOCK_RESEARCH_PROJECT_ID = '1981321'
export const MOCK_RESEARCH_PROJECT: ResearchProject = {
  id: MOCK_RESEARCH_PROJECT_ID,
  accessRequirementId: String(mockManagedACTAccessRequirement.id),
  institution: 'Black Mesa Research Facility',
  projectLead: 'Gordon Freeman',
  intendedDataUseStatement:
    'We plan to use this data to investigate the properties of antimatter. Our findings will be published in' +
    ' a peer-reviewed journal, and derivative data will be shared on Synapse.',
}
