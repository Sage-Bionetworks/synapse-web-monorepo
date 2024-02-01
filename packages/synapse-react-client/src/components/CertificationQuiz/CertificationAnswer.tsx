import React from 'react'
import {
  MultichoiceAnswer,
  MultichoiceQuestion,
} from '@sage-bionetworks/synapse-types'
import { Typography } from '@mui/material'

export type CertificationAnswerProps = {
  question: MultichoiceQuestion
  answer: MultichoiceAnswer
  onClick?: React.MouseEventHandler<HTMLInputElement>
  checked?: boolean
  disabled?: boolean
}

export default function CertificationAnswer(props: CertificationAnswerProps) {
  const { question, answer, onClick, checked, disabled } = props
  return (
    <div>
      <input
        id={`${question.questionIndex}-${answer.answerIndex}`}
        name={`${question.questionIndex}`}
        type={question.exclusive ? 'radio' : 'checkbox'}
        value={answer.answerIndex}
        onClick={onClick}
        checked={checked}
        disabled={disabled}
      />
      <Typography
        variant={'label'}
        component={'label'}
        sx={{ fontWeight: 400 }}
        htmlFor={`${question.questionIndex}-${answer.answerIndex}`}
      >
        {answer.prompt}
      </Typography>
    </div>
  )
}
