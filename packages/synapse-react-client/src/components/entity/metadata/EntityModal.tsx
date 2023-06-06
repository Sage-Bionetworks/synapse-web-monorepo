import Skeleton from '@mui/material/Skeleton'
import Form from '@rjsf/core'
import React, { useRef, useState } from 'react'
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

export enum EntityModalTabs {
  METADATA = 'METADATA', // non-annotation metadata about the entity
  ANNOTATIONS = 'ANNOTATIONS', // annotation and schema information
  // TODO: Access -- we haven't yet built a viewer/editor for ACLs in SRC -- consider a redesign before building
  // ACCESS = 'ACCESS', // ACLs (and maybe ARs?)
  // TODO: Previews - we would need preview renderers that accomplish feature parity with SWC
  // PREVIEW = 'PREVIEW' // should only show this tab if a preview exists
}

export type EntityModalProps = {
  readonly show: boolean
  readonly entityId: string
  readonly versionNumber?: number
  readonly onClose: () => void
  readonly initialTab?: EntityModalTabs
  readonly showTabs?: boolean
}

export function EntityModal(props: EntityModalProps) {
  const {
    entityId,
    versionNumber,
    show,
    onClose,
    initialTab = EntityModalTabs.METADATA,
    showTabs = true,
  } = props
  const annotationEditorFormRef = useRef<Form>(null)

  const [currentTab, setCurrentTab] = useState<EntityModalTabs>(initialTab)
  const [isInEditMode, setIsInEditMode] = useState(false)
  const [hasClickedCancel, setHasClickedCancel] = useState(false)

  const { data: entityBundle } = useGetEntityBundle(entityId, versionNumber)
  const canEdit = entityBundle && entityBundle.permissions.canEdit

  const isVersionable =
    entityBundle && isVersionableEntityType(entityBundle.entityType)

  const isLatestVersion =
    isVersionable && (entityBundle.entity as VersionableEntity).isLatestVersion!

  const showOpenEntityPageButton =
    currentTab === EntityModalTabs.METADATA &&
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

  const showSaveAnnotationsButton =
    currentTab === EntityModalTabs.ANNOTATIONS && isInEditMode
  const saveAnnotationsButton = (
    <Button
      variant={'contained'}
      onClick={() => {
        // Workaround for https://github.com/rjsf-team/react-jsonschema-form/issues/2104#issuecomment-847924986
        // Should be fixed if we upgrade to RJSF v5
        ;(annotationEditorFormRef.current as any).formElement.dispatchEvent(
          new CustomEvent('submit', {
            cancelable: true,
            bubbles: true,
          }),
        )
      }}
    >
      Save Annotations
    </Button>
  )

  const showCancelAnnotationEditsButton =
    currentTab === EntityModalTabs.ANNOTATIONS && isInEditMode
  const cancelAnnotationEditsButton = (
    <Button
      variant={'outlined'}
      onClick={() => {
        if (hasClickedCancel) {
          setIsInEditMode(false)
        }
        setHasClickedCancel(!hasClickedCancel)
      }}
    >
      {hasClickedCancel
        ? 'Are you sure? Unsaved changes will be lost'
        : 'Cancel'}
    </Button>
  )

  const showEditAnnotationsButton =
    canEdit && currentTab === EntityModalTabs.ANNOTATIONS && !isInEditMode
  const editAnnotationsButton = (
    <Tooltip
      title={
        isVersionable && !isLatestVersion
          ? 'Annotations can only be edited on the latest version'
          : undefined
      }
    >
      <Button
        variant={'contained'}
        disabled={isVersionable && !isLatestVersion}
        onClick={() => {
          setIsInEditMode(true)
        }}
      >
        Edit
      </Button>
    </Tooltip>
  )

  const dialogContent = (
    <>
      {showTabs && !isInEditMode ? (
        <div className="Tabs">
          {Object.keys(EntityModalTabs).map((tabName: string) => {
            return (
              <div
                className="Tab"
                role="tab"
                key={tabName}
                onClick={e => {
                  e.stopPropagation()
                  setCurrentTab(EntityModalTabs[tabName])
                }}
                aria-selected={tabName === currentTab}
              >
                {tabName}
              </div>
            )
          })}
        </div>
      ) : null}
      <div
        style={
          currentTab === EntityModalTabs.ANNOTATIONS ? {} : { display: 'none' }
        }
      >
        {isInEditMode ? (
          <SynapseErrorBoundary>
            <SchemaDrivenAnnotationEditor
              entityId={entityId}
              formRef={annotationEditorFormRef}
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
      <div
        style={
          currentTab === EntityModalTabs.METADATA ? {} : { display: 'none' }
        }
      >
        <MetadataTable entityId={entityId} versionNumber={versionNumber} />
      </div>
    </>
  )

  return (
    <DialogBase
      className={`EntityMetadata`}
      open={show}
      onCancel={onClose}
      maxWidth={isInEditMode ? 'md' : 'sm'}
      title={
        entityBundle ? entityBundle.entity.name : <Skeleton width={'40%'} />
      }
      content={dialogContent}
      actions={
        <>
          {showCancelAnnotationEditsButton && cancelAnnotationEditsButton}
          {showSaveAnnotationsButton && saveAnnotationsButton}
          {showEditAnnotationsButton && editAnnotationsButton}
          {showOpenEntityPageButton && openEntityPageButton}
        </>
      }
    />
  )
}
