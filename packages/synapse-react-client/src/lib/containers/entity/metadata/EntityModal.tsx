import Skeleton from '@mui/material/Skeleton'
import Form from '@rjsf/core'
import React, { useRef, useState } from 'react'
import { Modal } from 'react-bootstrap'
import {
  entityTypeToFriendlyName,
  isVersionableEntityType,
} from '../../../utils/functions/EntityTypeUtils'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../utils/functions/getEndpoint'
import useGetEntityBundle from '../../../utils/hooks/SynapseAPI/entity/useEntityBundle'
import { VersionableEntity } from '../../../utils/synapseTypes'
import { SynapseErrorBoundary } from '../../error/ErrorBanner'
import { FluidModal } from '../../FluidModal'
import { displayToast } from '../../ToastMessage'
import { SchemaDrivenAnnotationEditor } from '../annotations/SchemaDrivenAnnotationEditor'
import { AnnotationsTable } from './AnnotationsTable'
import { MetadataTable } from './MetadataTable'

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

export const EntityModal: React.FC<EntityModalProps> = ({
  entityId,
  versionNumber,
  show,
  onClose,
  initialTab = EntityModalTabs.METADATA,
  showTabs = true,
}: EntityModalProps) => {
  const annotationEditorFormRef = useRef<Form<Record<string, unknown>>>(null)

  const [currentTab, setCurrentTab] = useState<EntityModalTabs>(initialTab)
  const [isInEditMode, setIsInEditMode] = useState(false)
  const [hasClickedCancel, setHasClickedCancel] = useState(false)

  const { data: entityBundle } = useGetEntityBundle(entityId, versionNumber)
  const canEdit = entityBundle && entityBundle.permissions.canEdit

  const isVersionable =
    entityBundle && isVersionableEntityType(entityBundle.entityType)

  const isLatestVersion =
    isVersionable && (entityBundle.entity as VersionableEntity).isLatestVersion!

  let primaryAction
  let secondaryActions

  if (!entityBundle) {
    primaryAction = { skeleton: true }
    secondaryActions = undefined
  } else {
    if (!window.location.href.includes(entityId)) {
      primaryAction = {
        skeleton: false,
        copy: `Open ${entityTypeToFriendlyName(entityBundle.entityType)}`,
        onClick: () =>
          window.open(
            `${getEndpoint(
              BackendDestinationEnum.PORTAL_ENDPOINT,
            )}#!Synapse:${entityId}`,
            '_blank',
            'noopener',
          ),
      }
    }
  }

  if (currentTab === EntityModalTabs.ANNOTATIONS) {
    if (isInEditMode) {
      primaryAction = {
        copy: `Save Annotations`,
        onClick: () => {
          // Workaround for https://github.com/rjsf-team/react-jsonschema-form/issues/2104#issuecomment-847924986
          // Should be fixed if we upgrade to RJSF v5
          ;(annotationEditorFormRef.current as any).formElement.dispatchEvent(
            new CustomEvent('submit', {
              cancelable: true,
              bubbles: true,
            }),
          )
        },
      }
      secondaryActions = [
        {
          copy: hasClickedCancel
            ? 'Are you sure? Unsaved changes will be lost'
            : 'Cancel',
          onClick: () => {
            if (hasClickedCancel) {
              setIsInEditMode(false)
            }
            setHasClickedCancel(!hasClickedCancel)
          },
        },
      ]
    } else if (canEdit) {
      secondaryActions = [
        {
          copy: 'Edit',
          disabled: isVersionable && !isLatestVersion,
          'data-for': 'entityModalTooltip',
          'data-tip':
            isVersionable && !isLatestVersion
              ? 'Annotations can only be edited on the latest version'
              : undefined,
          onClick: () => {
            setIsInEditMode(true)
          },
        },
      ]
    }
  }

  return (
    <>
      <FluidModal
        className={`EntityMetadata ${isInEditMode ? 'isInEditMode' : ''}`}
        title={
          entityBundle ? (
            <Modal.Title>{entityBundle.entity.name}</Modal.Title>
          ) : (
            <Skeleton width={'40%'} />
          )
        }
        show={show}
        onClose={onClose}
        primaryAction={primaryAction}
        secondaryActions={secondaryActions}
      >
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
              currentTab === EntityModalTabs.ANNOTATIONS
                ? {}
                : { display: 'none' }
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
              <AnnotationsTable
                entityId={entityId}
                versionNumber={versionNumber}
              />
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
      </FluidModal>
    </>
  )
}
