import React, { useCallback, useMemo, useRef, useState } from 'react'
import TableNameForm from './TableNameForm'
import {
  ColumnModel,
  Entity,
  ENTITY_VIEW_TYPE_MASK_FILE,
  ENTITY_VIEW_TYPE_MASK_PROJECT,
  EntityType,
  ViewEntityType,
  ViewScope,
} from '@sage-bionetworks/synapse-types'
import TableTypeSelection from './TableTypeSelection'
import { Alert, Box, Button } from '@mui/material'
import { useCreateEntity } from '../../synapse-queries'
import { convertToConcreteEntityType } from '../../utils/functions/EntityTypeUtils'
import ViewTypeSelection from './ViewTypeSelection'
import TableColumnSchemaForm, {
  SubmitHandle,
} from '../TableColumnSchemaEditor/TableColumnSchemaForm'
import EntityViewScopeEditor from '../EntityViewScopeEditor/EntityViewScopeEditor'
import { SetOptional } from 'type-fest'
import SqlDefinedTableEditor from '../SqlDefinedTableEditor/SqlDefinedTableEditor'
import { useCreateColumnModels } from '../../synapse-queries/table/useColumnModel'
import EntityViewMaskEditor from '../EntityViewScopeEditor/EntityViewMaskEditor'
import { DialogBase } from '../DialogBase'
import {
  CreateTableViewWizardStep,
  getModalTitle,
  getPreviousStep,
  getStepAfterTypeSelection,
  isLastStep,
  maybeSetColumnIds,
  maybeSetDefiningSQL,
  maybeSetScopeIds,
  maybeSetViewTypeMask,
} from './CreateTableViewWizardUtils'
import SubmissionViewScopeEditor from '../SubmissionViewScopeEditor/SubmissionViewScopeEditor'
import { isUndefined, omitBy } from 'lodash-es'

export type CreateTableViewWizardProps = {
  open: boolean
  parentId: string
  onCancel: () => void
  onComplete: (newEntityId: string) => void
}

/**
 * Wizard to create a Synapse table, view, or other table type.
 *
 * See the README.md in this folder for a visualization of the flowchart
 *
 * @param props
 * @constructor
 */
export default function CreateTableViewWizard(
  props: CreateTableViewWizardProps,
) {
  const { open, parentId, onComplete, onCancel } = props
  const [step, setStep] =
    useState<CreateTableViewWizardStep>('CHOOSE_TABLE_TYPE')

  const [name, setName] = useState('')
  const [description, setDescription] = useState<string | undefined>(undefined)

  const [entityType, setEntityType] = useState<EntityType | undefined>(
    undefined,
  )

  const [entityViewScopeIds, setEntityViewScopeIds] = useState<string[]>([])
  const [submissionViewScopeIds, setSubmissionViewScopeIds] = useState<
    string[]
  >([])
  const [viewTypeMask, setViewTypeMask] = useState<number>(
    ENTITY_VIEW_TYPE_MASK_FILE,
  )
  const isProjectView = viewTypeMask === ENTITY_VIEW_TYPE_MASK_PROJECT

  const [columnModels, setColumnModels] = useState<
    SetOptional<ColumnModel, 'id'>[]
  >([])
  const columnSchemaFormRef = useRef<SubmitHandle>(null)

  const [sql, setSql] = useState('')

  const viewScope: ViewScope | undefined = useMemo(() => {
    if (entityType === EntityType.ENTITY_VIEW) {
      return {
        scope: entityViewScopeIds,
        viewTypeMask,
        viewEntityType: entityType as ViewEntityType,
      }
    } else if (entityType === EntityType.SUBMISSION_VIEW) {
      return {
        scope: submissionViewScopeIds,
        viewEntityType: entityType as ViewEntityType,
      }
    }
    return undefined
  }, [entityType, entityViewScopeIds, submissionViewScopeIds, viewTypeMask])

  const { mutateAsync: createEntity, error: createEntityError } =
    useCreateEntity({
      onSuccess: entity => {
        onComplete(entity.id!)
      },
    })

  const { mutateAsync: createColumnModels, error: createColumnModelsError } =
    useCreateColumnModels()

  const onTableTypeSelected = useCallback(
    (entityType: EntityType, viewTypeMask?: number) => {
      setEntityType(entityType)
      if (viewTypeMask != null) {
        setViewTypeMask(viewTypeMask)
      }
      setStep(getStepAfterTypeSelection(entityType))
    },
    [],
  )

  const onViewSelected = useCallback(() => {
    setStep('CHOOSE_VIEW_TYPE')
  }, [])

  const onFinish = useCallback(async () => {
    if (!entityType) {
      console.error('entityType was not defined!')
      setStep('CHOOSE_TABLE_TYPE')
      return
    }
    // Create the column models
    let createdColumnModels: ColumnModel[] = []
    if (
      columnModels &&
      // Do not create columns if this is a SQL-defined view
      entityType !== EntityType.MATERIALIZED_VIEW &&
      entityType !== EntityType.VIRTUAL_TABLE
    ) {
      try {
        createdColumnModels = await createColumnModels(
          columnModels.map(cm => omitBy(cm, isUndefined)) as SetOptional<
            ColumnModel,
            'id'
          >[],
        )
      } catch (e) {
        // Error will be handled by the hook, exit early if we encountered one
        return
      }
    }
    // Create the entity
    const entityToCreate: Entity = {
      name,
      description,
      parentId: parentId,
      concreteType: convertToConcreteEntityType(entityType),
    }

    maybeSetColumnIds(entityToCreate, entityType, createdColumnModels)
    maybeSetScopeIds(
      entityToCreate,
      entityType,
      entityType === EntityType.SUBMISSION_VIEW
        ? submissionViewScopeIds
        : entityViewScopeIds,
    )
    maybeSetViewTypeMask(entityToCreate, entityType, viewTypeMask)
    maybeSetDefiningSQL(entityToCreate, entityType, sql)

    try {
      await createEntity(entityToCreate)
    } catch (e) {
      // Error will be handled by the hook
      return
    }
  }, [
    columnModels,
    createColumnModels,
    createEntity,
    description,
    entityType,
    name,
    parentId,
    entityViewScopeIds,
    submissionViewScopeIds,
    sql,
    viewTypeMask,
  ])
  const onColumnSchemaSubmit = useCallback(
    (columnModels: SetOptional<ColumnModel, 'id'>[]) => {
      setColumnModels(columnModels)
      setStep('TABLE_NAME')
    },
    [],
  )

  const onColumnSchemaNextClicked = useCallback(() => {
    if (columnSchemaFormRef.current != null) {
      columnSchemaFormRef.current.submit()
    }
  }, [])

  const showBackButton = step !== 'CHOOSE_TABLE_TYPE'
  const showNextButton =
    step !== 'CHOOSE_TABLE_TYPE' && step !== 'CHOOSE_VIEW_TYPE'

  const onBackButtonClicked = useCallback(() => {
    setStep(getPreviousStep(step, entityType))
  }, [step, entityType])

  const onNextButtonClicked = useCallback(() => {
    if (isLastStep(step)) {
      void onFinish()
    } else if (step === 'TABLE_COLUMNS') {
      onColumnSchemaNextClicked()
    } else if (
      step === 'ENTITY_VIEW_SCOPE' ||
      step === 'SUBMISSION_VIEW_SCOPE'
    ) {
      setStep('TABLE_COLUMNS')
    }
  }, [onColumnSchemaNextClicked, onFinish, step])

  const isNextButtonDisabled = useMemo(() => {
    if (step === 'ENTITY_VIEW_SCOPE') {
      return entityViewScopeIds.length === 0 || viewTypeMask === 0
    }
    if (step === 'SUBMISSION_VIEW_SCOPE') {
      return submissionViewScopeIds.length === 0 || viewTypeMask === 0
    }
    return false
  }, [
    entityViewScopeIds.length,
    submissionViewScopeIds.length,
    step,
    viewTypeMask,
  ])

  const errorContent = useMemo(() => {
    return (
      <>
        {createEntityError && (
          <Alert sx={{ my: 2 }} severity="error">
            {createEntityError.message}
          </Alert>
        )}
        {createColumnModelsError && (
          <Alert sx={{ my: 2 }} severity="error">
            {createColumnModelsError.message}
          </Alert>
        )}
      </>
    )
  }, [createColumnModelsError, createEntityError])

  const stepContent = useMemo(() => {
    switch (step) {
      case 'CHOOSE_TABLE_TYPE':
        return (
          <TableTypeSelection
            onTableSelected={() => {
              onTableTypeSelected(EntityType.TABLE)
            }}
            onViewSelected={onViewSelected}
          />
        )
      case 'CHOOSE_VIEW_TYPE':
        return <ViewTypeSelection onTypeSelected={onTableTypeSelected} />
      case 'ENTITY_VIEW_SCOPE':
        return (
          <>
            <EntityViewScopeEditor
              scopeIds={entityViewScopeIds}
              onChange={setEntityViewScopeIds}
              isProjectView={isProjectView}
            />
            {!isProjectView && (
              <EntityViewMaskEditor
                value={viewTypeMask}
                onChange={setViewTypeMask}
              />
            )}
          </>
        )
      case 'SUBMISSION_VIEW_SCOPE':
        return (
          <SubmissionViewScopeEditor
            evaluationIds={submissionViewScopeIds}
            onChange={setSubmissionViewScopeIds}
          />
        )
      case 'TABLE_SQL':
        return (
          <>
            <TableNameForm
              name={name}
              setName={setName}
              description={description}
              setDescription={setDescription}
            />
            {/* TODO: Move SqlDefinedTableEditor to its own step, see https://sagebionetworks.jira.com/browse/PLFM-8209 */}
            <Box mt={1.25}>
              <SqlDefinedTableEditor
                value={sql}
                onChange={e => setSql(e.target.value)}
                entityType={entityType}
              />
            </Box>
            {errorContent}
          </>
        )
      case 'TABLE_COLUMNS':
        return (
          <TableColumnSchemaForm
            initialData={columnModels}
            entityType={entityType!}
            ref={columnSchemaFormRef}
            onSubmit={onColumnSchemaSubmit}
            viewScope={viewScope}
          />
        )
      case 'TABLE_NAME':
        return (
          <>
            <TableNameForm
              name={name}
              setName={setName}
              description={description}
              setDescription={setDescription}
            />
            {errorContent}
          </>
        )
    }
  }, [
    step,
    onViewSelected,
    onTableTypeSelected,
    entityViewScopeIds,
    isProjectView,
    viewTypeMask,
    submissionViewScopeIds,
    name,
    description,
    sql,
    entityType,
    errorContent,
    columnModels,
    onColumnSchemaSubmit,
    viewScope,
  ])

  return (
    <DialogBase
      open={open}
      onCancel={onCancel}
      maxWidth={'md'}
      title={getModalTitle(step, entityType)}
      content={stepContent}
      actions={
        <Box display={'flex'} width={'100%'} gap={2.25} mt={2}>
          {showBackButton && (
            <Button variant={'outlined'} onClick={onBackButtonClicked}>
              Back
            </Button>
          )}
          <Box m={'auto'} />
          <Button variant={'outlined'} onClick={onCancel}>
            Cancel
          </Button>
          {showNextButton && (
            <Button
              variant={'contained'}
              onClick={onNextButtonClicked}
              disabled={isNextButtonDisabled}
            >
              {isLastStep(step) ? 'Finish' : 'Next'}
            </Button>
          )}
        </Box>
      }
    />
  )
}
