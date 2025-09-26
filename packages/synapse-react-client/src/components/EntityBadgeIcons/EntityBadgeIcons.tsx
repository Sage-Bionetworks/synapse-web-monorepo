import {
  useDeleteEntity,
  useGetEntityBundle,
  useGetJson,
  useGetSchemaBinding,
  useGetValidationResults,
} from '@/synapse-queries'
import { PUBLIC_PRINCIPAL_IDS } from '@/utils/SynapseConstants'
import {
  ChatBubbleTwoTone,
  CheckTwoTone,
  DescriptionTwoTone,
  LinkOffTwoTone,
  LocalOfferTwoTone,
  LockTwoTone,
  PublicTwoTone,
} from '@mui/icons-material'
import { Tooltip } from '@mui/material'
import { EntityType } from '@sage-bionetworks/synapse-client'
import {
  ALL_ENTITY_BUNDLE_FIELDS,
  EntityBundle,
} from '@sage-bionetworks/synapse-types'
import { isEmpty } from 'lodash-es'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { getDisplayedAnnotation } from '../entity/metadata/AnnotationsTable'
import { EntityModal } from '../entity/metadata/EntityModal'
import WarningDialog from '../SynapseForm/WarningDialog'

function isPublic(bundle: EntityBundle): boolean {
  return bundle.benefactorAcl.resourceAccess.some(ra => {
    return PUBLIC_PRINCIPAL_IDS.includes(ra.principalId)
  })
}

export type EntityBadgeIconsProps = {
  entityId: string
  versionNumber?: number
  flexWrap?: // possible settings for flex-wrap
  | 'wrap'
    | 'nowrap'
    | '-moz-initial'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'unset'
    | 'wrap-reverse'
  justifyContent?: 'flex-start' | 'flex-end' | string
  /** Shows an icon indicating if the entity is 'public' or 'private'. Default true  */
  showIsPublicPrivate?: boolean
  /** Shows an icon if the entity has sharing settings set on itself. Default true  */
  showHasLocalSharingSettings?: boolean
  /** Shows an icon if the entity has annotations, or if it has a validation schema (in experimental mode only). Default true  */
  showHasAnnotations?: boolean
  /** Shows an icon if the entity a wiki. Default true  */
  showHasWiki?: boolean
  /** Shows an icon if the entity has been mentioned in discussion threads. Default true  */
  showHasDiscussionThread?: boolean
  /* Shows an 'unlink' button if the entity is a link and the user has permission to delete it. Default true */
  showUnlink?: boolean
  /* Invoked after the entity is unlinked/deleted in case there is cleanup to do. Returns the entityId */
  onUnlink?: (entityId: string) => void
  onUnlinkError?: (error: unknown) => void
  /** Whether or not the badges (e.g. Annotations) can trigger opening a modal on click */
  canOpenModal: boolean
}

/**
 * Stateless component used to show icons that show an entity's status.
 * Adapted from https://github.com/Sage-Bionetworks/SynapseWebClient/blob/46b9b717636cda2421926d96365244bbb72a05b6/src/main/java/org/sagebionetworks/web/client/widget/entity/EntityBadge.java
 */
export const EntityBadgeIcons = (props: EntityBadgeIconsProps) => {
  const {
    entityId,
    versionNumber,
    flexWrap = 'nowrap',
    justifyContent = 'flex-start',
    showIsPublicPrivate = true,
    showHasLocalSharingSettings = true,
    showHasAnnotations = true,
    showHasWiki = true,
    showHasDiscussionThread = true,
    showUnlink = true,
    onUnlink = () => {
      /* noop */
    },
    onUnlinkError = () => {
      /* noop */
    },
    canOpenModal,
  } = props

  enum SchemaConformanceState {
    NO_SCHEMA = '', // or not in experimental mode
    VALID = 'Valid',
    INVALID = 'Invalid',
    ANNOTATIONS_MISSING = 'Missing',
  }

  const { ref, inView } = useInView()

  const { data: entityData } = useGetJson(entityId, versionNumber, true, {
    enabled: inView,
  })
  const annotations = entityData?.annotations
  const { data: bundle } = useGetEntityBundle(
    entityId,
    versionNumber,
    ALL_ENTITY_BUNDLE_FIELDS,
    {
      enabled: inView,
    },
  )
  const [showModal, setShowModal] = useState(false)
  const [showUnlinkConfirmModal, setShowUnlinkConfirmModal] = useState(false)
  // Track whether the annotations tooltip is open so we only fetch schema/validation when needed
  const [annotationsTooltipOpen, setAnnotationsTooltipOpen] = useState(false)
  const [schemaConformance, setSchemaConformance] = useState(
    SchemaConformanceState.NO_SCHEMA,
  )

  const { data: boundSchema } = useGetSchemaBinding(entityId, {
    // Only fetch the bound schema when the component is in view AND the user has opened the
    // annotations tooltip. This reduces unnecessary API calls when the tooltip isn't shown.
    enabled: inView && annotationsTooltipOpen,
    staleTime: 60 * 1000, // 60 seconds
  })

  const { data: schemaValidationResults } = useGetValidationResults(entityId, {
    // Only validate when the tooltip is open and we have a bound schema
    enabled: inView && annotationsTooltipOpen && !!boundSchema,
    staleTime: 60 * 1000, // 60 seconds
  })

  // The maximum number of annotations to show in the popover
  const maxAnnosToShow = 10
  const annotationsCount =
    annotations && !isEmpty(annotations) ? Object.keys(annotations).length : 0
  useEffect(() => {
    if (schemaValidationResults) {
      if (schemaValidationResults.isValid) {
        setSchemaConformance(SchemaConformanceState.VALID)
      } else if (annotationsCount) {
        // If annotations exist, then indicate that they are invalid
        setSchemaConformance(SchemaConformanceState.INVALID)
      } else {
        // If annotations are missing, it's still invalid, but should appear differently
        setSchemaConformance(SchemaConformanceState.ANNOTATIONS_MISSING)
      }
    }
  }, [
    schemaValidationResults,
    annotationsCount,
    annotations,
    SchemaConformanceState.VALID,
    SchemaConformanceState.INVALID,
    SchemaConformanceState.ANNOTATIONS_MISSING,
  ])

  const { mutate: unlinkEntity } = useDeleteEntity({
    onSuccess: (_, entityId) => {
      onUnlink(entityId)
    },
    onError: onUnlinkError,
  })

  /**
   * Convert the list of annotations to a string of <tr>...anno1</tr><tr>...anno2</tr>...
   * If there are no annotations, this is the empty string ('')
   */
  const annotationsTableRows = (
    <>
      {annotations
        ? Object.entries(annotations ?? []).reduce(
            (previous, current, index) => {
              if (
                index < maxAnnosToShow ||
                (index === maxAnnosToShow &&
                  maxAnnosToShow === annotationsCount)
              ) {
                return (
                  <>
                    {previous}
                    <tr>
                      <td>
                        <b>{current[0]}</b>
                      </td>
                      <td>
                        {Array.isArray(current[1])
                          ? current[1].map(getDisplayedAnnotation).join(', ')
                          : getDisplayedAnnotation(
                              current[1] as string | number | boolean,
                            )}
                      </td>
                    </tr>
                  </>
                )
              } else {
                return previous
              }
            },
            <></>,
          )
        : ''}
    </>
  )
  // We also show the schema name if there is one (and we're in experimental mode)
  const valiationSchemaTableRow = (
    <>
      {boundSchema ? (
        <tr>
          <td>
            <b>Validation Schema</b>
          </td>
          <td>{boundSchema.jsonSchemaVersionInfo.schemaName}</td>
        </tr>
      ) : (
        ''
      )}
    </>
  )
  const annotationsHtml = (
    <div className="EntityBadgeTooltip">
      {schemaValidationResults ? <p>{schemaConformance} Annotations</p> : ''}
      <table>
        {annotationsTableRows ? annotationsTableRows : ''}
        {valiationSchemaTableRow}
      </table>
      {annotationsCount > maxAnnosToShow ? (
        <p>and {annotationsCount - maxAnnosToShow} more</p>
      ) : (
        ''
      )}
    </div>
  )
  return (
    <div className="EntityBadge" ref={ref} style={{ flexWrap, justifyContent }}>
      {bundle && (
        <>
          <div onClick={e => e.stopPropagation()}>
            <EntityModal
              entityId={entityId}
              show={showModal}
              showTabs={false}
              onClose={() => setShowModal(false)}
              initialTab={'ANNOTATIONS'}
            />
          </div>
          {showIsPublicPrivate && bundle.benefactorAcl && isPublic(bundle) ? (
            <Tooltip title="Public" enterNextDelay={100} placement="right">
              <PublicTwoTone
                aria-hidden={false}
                role="img"
                className="EntityBadge__Badge"
                data-testid={'is-public-icon'}
              />
            </Tooltip>
          ) : null}
          {showIsPublicPrivate && bundle.benefactorAcl && !isPublic(bundle) ? (
            <Tooltip title="Private" enterNextDelay={100} placement="right">
              <LockTwoTone
                aria-hidden={false}
                role="img"
                className="EntityBadge__Badge"
                data-testid={'is-private-icon'}
              />
            </Tooltip>
          ) : null}
          {showHasLocalSharingSettings &&
          bundle.benefactorAcl &&
          entityId === bundle.benefactorAcl.id ? (
            <Tooltip
              title="Sharing Settings have been set"
              enterNextDelay={100}
              placement="right"
            >
              <CheckTwoTone
                aria-hidden={false}
                role="img"
                className="EntityBadge__Badge"
                data-testid={'sharing-settings-icon'}
              />
            </Tooltip>
          ) : null}

          {showHasAnnotations &&
            !!(annotationsCount || schemaValidationResults) && (
              <Tooltip
                title={annotationsHtml}
                enterNextDelay={100}
                placement="right"
                // Control the tooltip open state so we can fetch schema/validation only when it's shown
                open={annotationsTooltipOpen}
                onOpen={() => setAnnotationsTooltipOpen(true)}
                onClose={() => setAnnotationsTooltipOpen(false)}
              >
                <LocalOfferTwoTone
                  aria-hidden={false}
                  role={canOpenModal ? 'button' : 'img'}
                  className={`EntityBadge__Badge ${schemaConformance}`}
                  style={canOpenModal ? { cursor: 'pointer' } : undefined}
                  onClick={canOpenModal ? () => setShowModal(true) : undefined}
                  data-html={true}
                  data-testid={'annotations-icon'}
                />
              </Tooltip>
            )}
          {showHasWiki && bundle.rootWikiId && (
            <Tooltip title="Has a wiki" enterNextDelay={100} placement="right">
              <DescriptionTwoTone
                aria-hidden={false}
                role="img"
                className="EntityBadge__Badge"
                data-testid={'wiki-icon'}
              />
            </Tooltip>
          )}
          {showHasDiscussionThread &&
            !!bundle.threadCount &&
            !!(bundle.threadCount > 0) && (
              <Tooltip
                title="Has been mentioned in discussion"
                enterNextDelay={100}
                placement="right"
              >
                <ChatBubbleTwoTone
                  aria-hidden={false}
                  role="img"
                  className="EntityBadge__Badge"
                  data-testid={'discussion-icon'}
                />
              </Tooltip>
            )}
          {showUnlink &&
            bundle.entityType === EntityType.link &&
            bundle.permissions?.canDelete && (
              <>
                <WarningDialog
                  open={showUnlinkConfirmModal}
                  title="Confirm Unlink"
                  content={
                    'Are you sure you want to remove this link? The original object will not be changed.'
                  }
                  confirmButtonText="Unlink"
                  confirmButtonColor="error"
                  onConfirm={() => {
                    unlinkEntity(entityId)
                    setShowUnlinkConfirmModal(false)
                  }}
                  onCancel={() => {
                    setShowUnlinkConfirmModal(false)
                  }}
                />
                <Tooltip
                  title="Remove this link"
                  enterNextDelay={100}
                  placement="right"
                >
                  <LinkOffTwoTone
                    aria-hidden={false}
                    role="button"
                    onClick={() => setShowUnlinkConfirmModal(true)}
                    className="EntityBadge__Badge Unlink"
                    data-testid={'unlink-icon'}
                  />
                </Tooltip>
              </>
            )}
        </>
      )}
    </div>
  )
}

export default EntityBadgeIcons
