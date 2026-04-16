import { FormStep } from '@/utils/types/AccessRequirementFormTypes'

export const mockAboutYouStep: FormStep = {
  id: 'step-1',
  name: 'about-you',
  title: 'About You',
  description:
    'Please provide your personal and institutional information below.',
  orderWeight: 1,
}

export const mockResearchUseStep: FormStep = {
  id: 'step-2',
  name: 'research-use',
  title: 'Research Use',
  description:
    'Describe your research project and how you intend to use the data.',
  orderWeight: 2,
}

export const mockComplianceStep: FormStep = {
  id: 'step-3',
  name: 'compliance',
  title: 'Compliance',
  description: 'Provide any required compliance documentation.',
  orderWeight: 3,
}

export const mockAgreementsStep: FormStep = {
  id: 'step-4',
  name: 'agreements',
  title: 'Agreements',
  description:
    'Review and agree to the terms and conditions for accessing this data.',
  orderWeight: 4,
}

export const mockFormSteps: FormStep[] = [
  mockAboutYouStep,
  mockResearchUseStep,
  mockComplianceStep,
  mockAgreementsStep,
]
