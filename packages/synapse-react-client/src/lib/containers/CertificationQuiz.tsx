import React, { useEffect, useState } from 'react'
import { SynapseClient } from '../utils'
import { useSynapseContext } from '../utils/SynapseContext'
import {
  PassingRecord,
  QuizResponse,
  Quiz,
} from '../utils/synapseTypes/CertificationQuiz/Quiz'
import {
  MULTICHOICE_RESPONSE_CONCRETE_TYPE_VALUE,
  QuestionResponse,
} from '../utils/synapseTypes/CertificationQuiz/Questions'
import { displayToast } from './ToastMessage'
import { Button, Link } from '@mui/material'
import { MarkdownPopover } from './MarkdownPopover'
import { HelpOutlineTwoTone } from '@mui/icons-material'
import { ButtonProps, Typography } from '@mui/material'
import { useErrorHandler } from 'react-error-boundary'

const CertificationQuiz: React.FunctionComponent = () => {
  const { accessToken } = useSynapseContext()
  const handleError = useErrorHandler()
  const [quiz, setQuiz] = useState<Quiz | undefined>()
  const [questionResponse, setQuestionResponse] = useState<QuestionResponse[]>(
    [],
  )
  const [passingRecord, setPassingRecord] = useState<PassingRecord>()
  const formRef = React.useRef<HTMLFormElement>(null)

  const GETTING_STARTED_URL =
    'https://help.synapse.org/docs/Getting-Started.2055471150.html'

  const getQuiz = async () => {
    try {
      setQuiz(await SynapseClient.getCertifyQuiz(accessToken))
    } catch (err: any) {
      handleError(err)
    }
  }

  useEffect(() => {
    getQuiz()
  }, [accessToken])

  const onUpdateAnswer = (questionIndex: number, answer: number) => {
    const newState = [
      ...questionResponse.filter(obj => obj.questionIndex !== questionIndex),
      {
        questionIndex,
        answerIndex: [answer],
        concreteType: MULTICHOICE_RESPONSE_CONCRETE_TYPE_VALUE,
      },
    ]
    setQuestionResponse(newState)
  }

  const handleRetakeQuiz = () => {
    formRef.current?.reset()
    setQuestionResponse([])
    setPassingRecord(undefined)
    getQuiz()
  }

  const handleSubmit = async () => {
    try {
      if (quiz && quiz.questions.length === questionResponse.length) {
        const quizResponse: QuizResponse = {
          quizId: quiz.id,
          questionResponses: questionResponse,
        }
        const passRec = await SynapseClient.postCertifiedUserTestResponse(
          accessToken,
          quizResponse,
        )
        setPassingRecord(passRec)
        window.scrollTo(0, 0)
      } else {
        displayToast(
          'Please answer all of the questions and try again.',
          'warning',
        )
      }
    } catch (err: any) {
      displayToast(err.reason as string, 'danger')
    }
  }

  const actionButtonConfig = (helpUrl: string) =>
    helpUrl
      ? {
          content: <>More info</>,
          closePopoverOnClick: true,
          onClick: () => window.open(helpUrl, '_blank'),
          color: 'primary' as ButtonProps['color'],
        }
      : undefined

  return (
    <div className="bootstrap-4-backport CertificationQuiz">
      {passingRecord && (
        <div>
          <>
            {!passingRecord.passed && (
              <div className="failBanner">Quiz Failed</div>
            )}
            <Typography variant="hintText">
              Score: {passingRecord.score} / {quiz?.questions.length}
            </Typography>
            {passingRecord.passed ? (
              displayToast(
                `You passed the Synapse Certification Quiz on ${passingRecord.passedOn}`,
                'success',
              )
            ) : (
              <Typography variant="body1">
                Please review the items shown in red below, and{' '}
                <Link
                  href="#"
                  onClick={e => {
                    e.preventDefault()
                    handleRetakeQuiz()
                  }}
                >
                  try again
                </Link>
                .
              </Typography>
            )}
          </>
        </div>
      )}
      <div className="CertificationQuiz__container">
        <Button
          onClick={() => window.open(GETTING_STARTED_URL, '_blank')}
          className="help-button"
          color="secondary"
          variant="contained"
        >
          <HelpOutlineTwoTone
            className="HelpButton"
            style={{ marginRight: '4px' }}
          />
          Help
        </Button>
        {quiz ? (
          <div dangerouslySetInnerHTML={{ __html: quiz.header }}></div>
        ) : (
          ''
        )}
        <form ref={formRef} onSubmit={e => e.preventDefault()}>
          <ol>
            {quiz?.questions.map(question => (
              <li
                key={question.questionIndex}
                role={question.exclusive ? 'radiogroup' : undefined}
              >
                <div
                  dangerouslySetInnerHTML={{ __html: question.prompt }}
                  className={
                    passingRecord &&
                    (passingRecord.corrections?.find(
                      quest =>
                        quest.question.questionIndex === question.questionIndex,
                    )?.isCorrect
                      ? ''
                      : 'incorrectQuestion')
                  }
                ></div>
                {question.answers.map(choice => (
                  <div key={`${question.questionIndex}-${choice.answerIndex}`}>
                    <input
                      id={`${question.questionIndex}-${choice.answerIndex}`}
                      name={`${question.questionIndex}`}
                      type={question.exclusive ? 'radio' : 'checkbox'}
                      value={choice.answerIndex}
                      onClick={e =>
                        onUpdateAnswer(
                          question.questionIndex,
                          Number(e.currentTarget.value),
                        )
                      }
                      disabled={!!passingRecord}
                    />
                    <label
                      style={{ fontWeight: 400 }}
                      htmlFor={`${question.questionIndex}-${choice.answerIndex}`}
                    >
                      {choice.prompt}
                    </label>
                  </div>
                ))}
                <MarkdownPopover
                  contentProps={{ markdown: question.helpText }}
                  placement="right"
                  actionButton={actionButtonConfig(question.docLink)}
                  showCloseButton={true}
                >
                  <Typography variant="hintText" color="primary">
                    <HelpOutlineTwoTone
                      className="HelpButton"
                      style={{ marginRight: '4px' }}
                    />
                    Need help answering this question?
                  </Typography>
                </MarkdownPopover>
              </li>
            ))}
          </ol>
        </form>
        {!passingRecord && (
          <Button
            className="help-button"
            color="primary"
            variant="contained"
            size="large"
            onClick={() => {
              handleSubmit()
            }}
          >
            Submit
          </Button>
        )}
      </div>
    </div>
  )
}

export default CertificationQuiz
