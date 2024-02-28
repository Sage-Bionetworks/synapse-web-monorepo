import React, { useEffect, useState } from 'react'
import SynapseClient from '../../synapse-client'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import {
  QuizResponse,
  Quiz,
  MultichoiceQuestion,
  MultichoiceResponse,
} from '@sage-bionetworks/synapse-types'
import {
  MULTICHOICE_RESPONSE_CONCRETE_TYPE_VALUE,
  QuestionResponse,
} from '@sage-bionetworks/synapse-types'
import { displayToast } from '../ToastMessage/ToastMessage'
import { Alert, AlertTitle, Button, Link, Skeleton } from '@mui/material'
import { MarkdownPopover } from '../Markdown/MarkdownPopover'
import { HelpOutlineTwoTone } from '@mui/icons-material'
import { ButtonProps, Typography } from '@mui/material'
import { useErrorHandler } from 'react-error-boundary'
import { useGetCurrentUserBundle } from '../../synapse-queries'
import { USER_BUNDLE_MASK_IS_CERTIFIED } from '../../utils/SynapseConstants'
import {
  useGetPassingRecord,
  usePostCertifiedUserTestResponse,
} from '../../synapse-queries/user/useCertificationQuiz'
import { formatDate } from '../../utils/functions/DateFormatter'
import dayjs from 'dayjs'
import CertificationAnswer from './CertificationAnswer'
import { SkeletonParagraph, SkeletonTable } from '../Skeleton'

const CertificationQuiz: React.FunctionComponent = () => {
  const { accessToken } = useSynapseContext()
  const handleError = useErrorHandler()
  const [quiz, setQuiz] = useState<Quiz | undefined>()
  const [isRetakingQuiz, setIsRetakingQuiz] = useState(false)
  const [questionResponse, setQuestionResponse] = useState<QuestionResponse[]>(
    [],
  )
  const { data: currentUserBundle } = useGetCurrentUserBundle(
    USER_BUNDLE_MASK_IS_CERTIFIED,
  )
  const isCertified = currentUserBundle?.isCertified
  const userId = currentUserBundle?.userId
  const { data: passingRecord, isLoading: isLoadingPassingRecord } =
    useGetPassingRecord(userId, {
      enabled: userId !== undefined,
    })
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

  const { mutate: postCertifiedUserTestResponse, isPending: isSubmitting } =
    usePostCertifiedUserTestResponse({
      onSuccess: () => {
        setIsRetakingQuiz(false)
        window.scrollTo(0, 0)
      },
      throwOnError: true,
    })
  // user is taking the quiz if user is not certified, and either there is no passing record or if the user clicked to retake the quiz
  const isTakingQuiz =
    !isCertified && (passingRecord == undefined || isRetakingQuiz)
  useEffect(() => {
    if (accessToken) {
      getQuiz()
    }
  }, [accessToken])

  if (isLoadingPassingRecord || quiz == undefined) {
    return <CertificationQuizSkeleton />
  }

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
    setIsRetakingQuiz(true)
    setQuestionResponse([])
    getQuiz()
  }

  const handleSubmit = () => {
    try {
      if (quiz && quiz.questions.length === questionResponse.length) {
        const quizResponse: QuizResponse = {
          quizId: quiz.id,
          questionResponses: questionResponse,
        }
        postCertifiedUserTestResponse(quizResponse)
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
    <div>
      {passingRecord && !isTakingQuiz && (
        <>
          {(!passingRecord.passed || !isCertified) && (
            <Alert severity="error">
              {!passingRecord.passed && <AlertTitle>Quiz Failed</AlertTitle>}
              <Typography variant="body1" sx={{ marginTop: '5px' }}>
                Please review the results from the previous attempt, and{' '}
                <Link
                  href="#"
                  onClick={e => {
                    e.preventDefault()
                    handleRetakeQuiz()
                  }}
                >
                  retake the quiz
                </Link>
                .
              </Typography>
            </Alert>
          )}
          {passingRecord.passed && isCertified && (
            <Alert severity="success">
              <AlertTitle>Quiz Passed</AlertTitle>
              <Typography variant="body1" sx={{ marginTop: '5px' }}>
                {`You passed the Synapse Certification Quiz on ${formatDate(
                  dayjs(passingRecord.passedOn),
                )}`}
              </Typography>
            </Alert>
          )}
          <Typography
            variant="sectionTitle"
            sx={{ marginTop: '20px', marginBottom: '20px' }}
          >
            Score: {passingRecord.score} / {passingRecord.corrections?.length}
          </Typography>
        </>
      )}
      <div className="CertificationQuiz__container">
        {quiz && isTakingQuiz && (
          <>
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
            <div dangerouslySetInnerHTML={{ __html: quiz.header }}></div>
            <form ref={formRef} onSubmit={e => e.preventDefault()}>
              <ol>
                {quiz?.questions.map(question => {
                  const isHelp = question.helpText || question.docLink
                  return (
                    <li
                      key={question.questionIndex}
                      role={question.exclusive ? 'radiogroup' : undefined}
                    >
                      <Typography
                        component={'div'}
                        variant={'body1'}
                        dangerouslySetInnerHTML={{ __html: question.prompt }}
                        sx={{ marginTop: '20px' }}
                      />
                      {question.answers.map(choice => (
                        <CertificationAnswer
                          key={`${question.questionIndex}-${choice.answerIndex}`}
                          question={question}
                          answer={choice}
                          onClick={e =>
                            onUpdateAnswer(
                              question.questionIndex,
                              Number(e.currentTarget.value),
                            )
                          }
                        />
                      ))}
                      {isHelp && (
                        <MarkdownPopover
                          contentProps={{ markdown: question.helpText }}
                          placement="right"
                          sx={{
                            table: {
                              textAlign: 'center',
                              th: {
                                padding: '5px',
                              },
                            },
                          }}
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
                      )}
                    </li>
                  )
                })}
              </ol>
            </form>
            <Button
              className="help-button"
              color="primary"
              variant="contained"
              size="large"
              disabled={isSubmitting}
              onClick={() => {
                handleSubmit()
              }}
            >
              Submit
            </Button>
          </>
        )}

        {!isTakingQuiz && passingRecord?.corrections && (
          <ol>
            {passingRecord.corrections.map(responseCorrectness => {
              const question =
                responseCorrectness.question as MultichoiceQuestion
              const response =
                responseCorrectness.response as MultichoiceResponse
              return (
                <li key={question.questionIndex}>
                  <Typography
                    component={'div'}
                    variant={'body1'}
                    dangerouslySetInnerHTML={{ __html: question.prompt }}
                    className={
                      responseCorrectness.isCorrect ? '' : 'incorrectQuestion'
                    }
                    sx={{ marginTop: '20px' }}
                  />
                  {question.answers.map(choice => (
                    <CertificationAnswer
                      key={`${question.questionIndex}-${choice.answerIndex}`}
                      question={question}
                      answer={choice}
                      disabled={true}
                      checked={response.answerIndex.includes(
                        choice.answerIndex,
                      )}
                    />
                  ))}
                </li>
              )
            })}
          </ol>
        )}
      </div>
    </div>
  )
}

const CertificationQuizSkeleton: React.FunctionComponent = () => {
  const questions = []
  for (let i = 0; i < 20; i++) {
    questions.push(
      <li key={i}>
        <SkeletonTable numCols={1} numRows={5} />
      </li>,
    )
  }
  return (
    <>
      <div>
        <Skeleton height="80px" width="460px" />
      </div>
      <SkeletonParagraph numRows={5} />
      <div className="CertificationQuiz__container">
        <ol style={{ marginTop: '20px' }}>{questions}</ol>
      </div>
    </>
  )
}

export default CertificationQuiz
