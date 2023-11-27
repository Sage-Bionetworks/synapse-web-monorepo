import React, { useState } from 'react'
import { EvaluationEditor } from './EvaluationEditor'
import { EvaluationRoundEditorList } from './EvaluationRoundEditorList'
import { Alert, Button } from '@mui/material'

export type EvaluationEditorPageProps = {
  /** Use if UPDATING an existing Evaluation. Id of the evaluation to edit */
  readonly evaluationId?: string
  /** Use if CREATING a new Evaluation. Id of the Entity that will be associated with the Evaluation */
  readonly entityId?: string
  /** Callback after successful deletion of the Evaluation */
  readonly onDeleteSuccess: () => void
}

/**
 * Combined editor that allows editing an Evaluation's data and also it's associated rounds (once the Evaluation exists on Synapse)
 */
export const EvaluationEditorPage: React.FunctionComponent<
  EvaluationEditorPageProps
> = ({
  evaluationId,
  entityId,
  onDeleteSuccess,
}: EvaluationEditorPageProps) => {
  const [savedEvaluationId, setSavedEvaluationId] = useState<
    string | undefined
  >(evaluationId)
  return (
    <div className="bootstrap-4-backport">
      <EvaluationEditor
        evaluationId={savedEvaluationId}
        //do not use entityId if we already have the evaluation Id
        entityId={savedEvaluationId ? undefined : entityId}
        onDeleteSuccess={onDeleteSuccess}
        onSaveSuccess={setSavedEvaluationId}
      />

      <div className="my-4">
        {savedEvaluationId ? (
          <EvaluationRoundEditorList evaluationId={savedEvaluationId} />
        ) : (
          // shows an alert informing user to first create an Evaluation if they
          // click the "Add Round" button
          <FakeEvaluationRoundEditorList />
        )}
      </div>
    </div>
  )
}

/**
 * special case handling when the evaluation has not been created yet (i.e. does not exist)
 * in this case, we show a fake "add round" button that when clicked, will
 * display an alert telling the user to first create an Evaluation
 *
 * Note: an alternative would be to modify the existing EvaluationRoundEditorList
 * to accept a nullable evaluationId (i.e. `string?` instead of `string`)
 * so that we can move this fake Alert functionality into it.
 *
 * Since the "uncreated Evaluation" edge case is currently only specific to the EvaluationEditorPage,
 * I believe adopting this alternative would add unnecessary complexity,
 * forcing EvaluationRoundEditorList to handle undefined `evaluationId`.
 */
const FakeEvaluationRoundEditorList: React.FunctionComponent = () => {
  const [showEvaluationNotExistAlert, setShowEvaluationNotExistAlert] =
    useState<boolean>(false)

  return (
    <div data-testid="FakeEvaluationRoundEditorList">
      {showEvaluationNotExistAlert ? (
        <Alert severity={'info'}>
          Evaluation Rounds can be edited once the Evaluation has been created.
        </Alert>
      ) : (
        <Button
          className="add-round-button"
          variant="contained"
          color="primary"
          onClick={() => {
            setShowEvaluationNotExistAlert(true)
          }}
        >
          Add Round
        </Button>
      )}
    </div>
  )
}

export const HelpersToTest = {
  FakeEvaluationRoundEditorList,
}
