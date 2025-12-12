import { getEvaluationRoundsList } from '@/synapse-client/SynapseClient'
import { useSynapseContext } from '@/stores/SynapseContext/SynapseContext'
import useListState from '@/react-ui/hooks/useListState'
import Button from '@/react-ui/components/Button'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { EvaluationRoundListResponse } from '@sage-bionetworks/synapse-types'
import { useEffect, useState } from 'react'
import shortid from 'shortid'
import { ErrorBanner } from '../error/ErrorBanner'
import { EvaluationRoundEditor } from './EvaluationRoundEditor'
import {
  convertEvaluationRoundToInput,
  EvaluationRoundInput,
} from './input_models/models'

export type EvaluationRoundEditorListProps = {
  /** id of the Evaluation containing EvaluationRounds to edit*/
  evaluationId: string
}

const fetchEvaluationList = (
  evaluationId: string,
  accessToken: string,
  setListCallback: (items: EvaluationRoundInput[]) => void,
  errorHandleCallback: (error: string | SynapseClientError | undefined) => void,
): void => {
  const allEvaluationRoundInputList: EvaluationRoundInput[] = []

  const getEvaluationRounds = (nextPageToken?: string) => {
    getEvaluationRoundsList(
      evaluationId,
      { nextPageToken: nextPageToken },
      accessToken,
    )
      .then((response: EvaluationRoundListResponse) => {
        const convertedToInput: EvaluationRoundInput[] = response.page.map(
          evaluationRound => convertEvaluationRoundToInput(evaluationRound),
        )

        allEvaluationRoundInputList.push(...convertedToInput)
        errorHandleCallback(undefined)

        if (response.nextPageToken) {
          getEvaluationRounds(response.nextPageToken)
        } else {
          // no more pages left. we can set the list
          setListCallback(allEvaluationRoundInputList)
        }
      })
      .catch(error => {
        errorHandleCallback(error)
      })
  }

  //initially no next page token
  getEvaluationRounds(undefined)
}

/**
 * Edits EvaluationsRounds for an Evaluation.
 */
export function EvaluationRoundEditorList({
  evaluationId,
}: EvaluationRoundEditorListProps) {
  const { accessToken } = useSynapseContext()
  const [error, setError] = useState<string | SynapseClientError | undefined>()

  const {
    list: evaluationRoundInputList,
    appendToList: appendToEvaluationRoundInputList,
    handleListChange: handleEvaluationRoundInputListChange,
    handleListRemove: handleEvaluationRoundInputListRemove,
    setList: setEvaluationRoundInputList,
  } = useListState<EvaluationRoundInput>([])

  //run only once
  useEffect(
    () => {
      fetchEvaluationList(
        evaluationId,
        accessToken!,
        setEvaluationRoundInputList,
        setError,
      )
    },
    // we explicitly dont want to list setEvaluationRoundInputList nor setError as a dependency
    // if we do, the fetchEvaluationList will re-fetch from the backend on every new render
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [accessToken, evaluationId],
  )

  if (error) {
    return <ErrorBanner error={error} />
  }

  return (
    <div className="evaluation-round-editor-list">
      <div className="evaluation-rounds">
        {evaluationRoundInputList.map((evaluationRoundInput, index) => {
          return (
            <EvaluationRoundEditor
              key={evaluationRoundInput.reactListKey}
              evaluationRoundInput={evaluationRoundInput}
              onSave={handleEvaluationRoundInputListChange(index)}
              onDelete={handleEvaluationRoundInputListRemove(index)}
            />
          )
        })}
      </div>

      <div>
        <Button
          className="add-round-button"
          variant="contained"
          color="primary"
          onClick={() => {
            appendToEvaluationRoundInputList({
              reactListKey: shortid(),
              evaluationId: evaluationId,
              roundStart: '',
              roundEnd: '',
              totalSubmissionLimit: '',
              otherLimits: [],
            })
          }}
        >
          Add Round
        </Button>
      </div>
    </div>
  )
}
