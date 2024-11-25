import { ResearchProject } from '@sage-bionetworks/synapse-types'
import { mockManagedACTAccessRequirement } from '../accessRequirement/mockAccessRequirements'

export const MOCK_RESEARCH_PROJECT_ID = '1981321'
export const MOCK_RESEARCH_PROJECT: ResearchProject = {
  id: MOCK_RESEARCH_PROJECT_ID,
  accessRequirementId: String(mockManagedACTAccessRequirement.id),
  institution: 'Black Mesa Research Facility',
  projectLead: 'Gordon Freeman',
  intendedDataUseStatement:
    'We plan to use this data to investigate the properties of antimatter. Our findings will be published in' +
    ' a peer-reviewed journal, and derivative data will be shared on Synapse.\n\n' +
    'To investigate antimatter, we will be performing spectrometry on samples of Xen crystals. We will be using ' +
    "an anti-mass spectrometer to analyze the samples' properties. We will also be using a Lambda Core to " +
    'generate the necessary energy for the spectrometry. The data generated will be used to determine the ' +
    'properties of the antimatter, and to determine if it can be used as a power source.',
}

// When a "new" research project is retrieved, the backend returns an object with just the AR ID
export const MOCK_EMPTY_RESEARCH_PROJECT: ResearchProject = {
  accessRequirementId: String(mockManagedACTAccessRequirement.id),
}
