import { Meta, StoryObj } from '@storybook/react'

import CertificationQuiz from '../src/components/CertificationQuiz/CertificationQuiz'

const meta = {
  title: 'Synapse/CertificationQuiz',
  component: CertificationQuiz,
} satisfies Meta
export default meta

type Story = StoryObj<typeof meta>

export const CertificationQuizDemo: Story = {}
