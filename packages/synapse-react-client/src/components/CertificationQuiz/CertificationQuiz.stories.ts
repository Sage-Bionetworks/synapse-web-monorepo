import { Meta, StoryObj } from '@storybook/react-vite'

import CertificationQuiz from './CertificationQuiz'

const meta = {
  title: 'Synapse/CertificationQuiz',
  component: CertificationQuiz,
} satisfies Meta
export default meta

type Story = StoryObj<typeof meta>

export const CertificationQuizDemo: Story = {}
