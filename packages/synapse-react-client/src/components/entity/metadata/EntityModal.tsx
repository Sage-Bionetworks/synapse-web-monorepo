import Skeleton from '@mui/material/Skeleton'
import Form from '@rjsf/core'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import {
  entityTypeToFriendlyName,
  isVersionableEntityType,
} from '../../../utils/functions/EntityTypeUtils'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../utils/functions/getEndpoint'
import useGetEntityBundle from '../../../synapse-queries/entity/useEntityBundle'
import { VersionableEntity } from '@sage-bionetworks/synapse-types'
import { SynapseErrorBoundary } from '../../error/ErrorBanner'
import { displayToast } from '../../ToastMessage/ToastMessage'
import { SchemaDrivenAnnotationEditor } from '../../SchemaDrivenAnnotationEditor/SchemaDrivenAnnotationEditor'
import { AnnotationsTable } from './AnnotationsTable'
import { MetadataTable } from './MetadataTable'
import { Button, Tooltip } from '@mui/material'
import { DialogBase } from '../../DialogBase'
import { ConfirmationDialog } from '../../ConfirmationDialog'
import { noop } from 'lodash-es'

export const EntityModalTabs = [
  // non-annotation metadata about the entity
  'METADATA',
  // annotation and schema information
  'ANNOTATIONS',
  // TODO: Access -- we haven't yet built a viewer/editor for ACLs in SRC -- consider a redesign before building
  //'ACCESS', // ACLs (and maybe ARs?)
  // TODO: Previews - we would need preview renderers that accomplish feature parity with SWC
  //'PREVIEW' // should only show this tab if a preview exists
] as const
type EntityModalTab = (typeof EntityModalTabs)[number]

export type EntityModalProps = {
  readonly show: boolean
  readonly entityId: string
  readonly versionNumber?: number
  readonly onClose: () => void
  readonly initialTab?: EntityModalTab
  readonly showTabs?: boolean
  readonly onEditModeChanged?: (isInEditMode: boolean) => void
}

export function EntityModal(props: EntityModalProps) {
  const {
    entityId,
    versionNumber,
    show,
    onClose,
    initialTab = 'METADATA',
    showTabs = true,
    onEditModeChanged = noop,
  } = props
  const annotationEditorFormRef = useRef<Form>(null)

  const [currentTab, setCurrentTab] = useState<EntityModalTab>(initialTab)
  const [showEditCancellationWarning, setShowEditCancellationWarning] =
    useState(false)
  const [isInEditMode, setIsInEditMode] = useState(false)

  // Need to store variable behavior for when the user confirms they want to cancel editing
  // We may return to the readonly view, or we might close the entire modal, depending on what they clicked.
  const [onCancelEdit, setOnCancelEdit] = useState<() => void>(() =>
    setIsInEditMode(false),
  )

  // Call the callback if `isInEditMode` changes
  // e.g. to set the global isInEditMode tracker in SWC
  useEffect(() => {
    onEditModeChanged(isInEditMode)
    return () => {
      // Ensure we disable edit mode when the component unmounts
      onEditModeChanged(false)
    }
  }, [isInEditMode, onEditModeChanged])

  const { data: entityBundle } = useGetEntityBundle(entityId, versionNumber)
  const canEdit = entityBundle && entityBundle.permissions.canEdit

  const isVersionable =
    entityBundle && isVersionableEntityType(entityBundle.entityType)

  const isLatestVersion =
    isVersionable && (entityBundle.entity as VersionableEntity).isLatestVersion!

  const showOpenEntityPageButton =
    currentTab === 'METADATA' &&
    entityBundle &&
    !window.location.href.includes(entityId)
  const openEntityPageButton = (
    <Button
      variant={'contained'}
      onClick={() =>
        window.open(
          `${getEndpoint(
            BackendDestinationEnum.PORTAL_ENDPOINT,
          )}#!Synapse:${entityId}`,
          '_blank',
          'noopener',
        )
      }
    >
      Open{' '}
      {entityBundle ? entityTypeToFriendlyName(entityBundle?.entityType) : ''}
    </Button>
  )

  const showSaveAnnotationsButton = currentTab === 'ANNOTATIONS' && isInEditMode
  const saveAnnotationsButton = (
    <Button
      variant={'contained'}
      onClick={() => {
        // Workaround for https://github.com/rjsf-team/react-jsonschema-form/issues/3121
        annotationEditorFormRef.current!.formElement.current.requestSubmit()
      }}
    >
      Save Annotations
    </Button>
  )

  const showCancelAnnotationEditsButton =
    currentTab === 'ANNOTATIONS' && isInEditMode
  const cancelAnnotationEditsButton = (
    <Button
      variant={'outlined'}
      onClick={() => {
        setOnCancelEdit(() => () => setIsInEditMode(false))
        setShowEditCancellationWarning(true)
      }}
    >
      Cancel
    </Button>
  )

  const showEditAnnotationsButton =
    canEdit && currentTab === 'ANNOTATIONS' && !isInEditMode
  const disableEditingOldVersion = isVersionable && !isLatestVersion
  const editAnnotationsButton = (
    <Tooltip
      title={
        disableEditingOldVersion
          ? 'Annotations can only be edited on the latest version'
          : undefined
      }
    >
      {/* Wrap in span so tooltip works even when disabled */}
      <span>
        <Button
          variant={'contained'}
          disabled={disableEditingOldVersion}
          onClick={() => {
            setIsInEditMode(true)
          }}
        >
          Edit
        </Button>
      </span>
    </Tooltip>
  )

  const dialogContent = (
    <>
      {showTabs && !isInEditMode ? (
        <div className="Tabs">
          {EntityModalTabs.map(tabName => {
            return (
              <div
                className="Tab"
                role="tab"
                key={tabName}
                onClick={e => {
                  e.stopPropagation()
                  setCurrentTab(tabName)
                }}
                aria-selected={tabName === currentTab}
              >
                {tabName}
              </div>
            )
          })}
        </div>
      ) : null}
      <div style={currentTab === 'ANNOTATIONS' ? {} : { display: 'none' }}>
        {isInEditMode ? (
          <SynapseErrorBoundary>
            <SchemaDrivenAnnotationEditor
              entityId={entityId}
              formRef={annotationEditorFormRef}
              hideActions
              onSuccess={() => {
                displayToast('Annotations successfully updated.', 'success')
                setIsInEditMode(false)
              }}
              onCancel={() => setIsInEditMode(false)}
            />
          </SynapseErrorBoundary>
        ) : (
          <AnnotationsTable entityId={entityId} versionNumber={versionNumber} />
        )}
      </div>
      <div style={currentTab === 'METADATA' ? {} : { display: 'none' }}>
        <MetadataTable entityId={entityId} versionNumber={versionNumber} />
      </div>
    </>
  )

  const cancelEditingConfirmationModal = (
    <ConfirmationDialog
      open={showEditCancellationWarning}
      title="Unsaved Changes"
      content="Any unsaved changes will be lost. Are you sure you want to close the editor?"
      onCancel={() => {
        setShowEditCancellationWarning(false)
      }}
      onConfirm={() => {
        setShowEditCancellationWarning(false)
        onCancelEdit()
      }}
    />
  )

  const modalTitle = useMemo(() => {
    if (!entityBundle?.entity.name) {
      return <Skeleton width={'40%'} />
    } else if (currentTab === 'ANNOTATIONS') {
      return `${isInEditMode ? 'Edit ' : ''}Annotations for ${
        entityBundle.entity.name
      }`
    }
    return entityBundle.entity.name
  }, [currentTab, entityBundle?.entity.name, isInEditMode])

  return (
    <DialogBase
      className={`EntityMetadata`}
      open={show}
      onCancel={() => {
        if (isInEditMode) {
          setShowEditCancellationWarning(true)
          setOnCancelEdit(() => {
            // Need to return a function in a function because passing a function to setState has a different meaning
            return () => {
              setIsInEditMode(false)
              onClose()
            }
          })
        } else {
          onClose()
        }
      }}
      maxWidth={isInEditMode ? 'md' : 'sm'}
      title={modalTitle}
      content={dialogContent}
      actions={
        <>
          {cancelEditingConfirmationModal}
          {showCancelAnnotationEditsButton && cancelAnnotationEditsButton}
          {showSaveAnnotationsButton && saveAnnotationsButton}
          {showEditAnnotationsButton && editAnnotationsButton}
          {showOpenEntityPageButton && openEntityPageButton}
        </>
      }
    />
  )
}
