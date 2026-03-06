import ConfirmCloseWithoutSavingDialog from '@/components/Dialog/ConfirmCloseWithoutSavingDialog'
import { DialogBase } from '@/components/DialogBase'
import { doiFormSchema, doiFormUiSchema } from '@/components/doi/DoiFormSchemas'
import { PrivateEntityDoiWarning } from '@/components/doi/PrivateEntityDoiWarning'
import { JsonSchemaForm } from '@/components/JsonSchemaForm/JsonSchemaForm'
import { MarkdownPopover } from '@/components/Markdown/MarkdownPopover'
import { StyledFormControl } from '@/components/styled/StyledFormControl'
import { displayToast } from '@/components/ToastMessage/ToastMessage'
import { useCreateOrUpdateDOI, useGetDOI } from '@/synapse-queries/doi/useDOI'
import { useGetVersions } from '@/synapse-queries/entity/useEntity'
import { useGetEntityBundle } from '@/synapse-queries/entity/useEntityBundle'
import { useGetPortal } from '@/synapse-queries/portal/usePortal'
import { useGetRealmPrincipals } from '@/synapse-queries/realm/useRealmPrincipals'
import { useGetCurrentUserProfile } from '@/synapse-queries/user/useUserBundle'
import { useGlobalIsEditingContext } from '@/utils/context/GlobalIsEditingContext'
import { isEntityPublic } from '@/utils/functions/AccessControlListUtils'
import {
  entityTypeToFriendlyName,
  isDataset,
  isTable,
  isVersionableEntity,
} from '@/utils/functions/EntityTypeUtils'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { DATA_CATALOG_PATH_SEGMENT } from '@/utils/SynapseConstants'
import { HelpTwoTone } from '@mui/icons-material'
import {
  Alert,
  Button,
  InputLabel,
  Link,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import RJSF from '@rjsf/core'
import {
  DoiObjectType,
  DoiResourceTypeGeneral,
  DoiResourceTypeResourceTypeGeneralEnum,
  EntityType,
  V2Doi,
} from '@sage-bionetworks/synapse-client'
import { isEmpty } from 'lodash-es'
import { useEffect, useMemo, useRef, useState } from 'react'

type CreateOrUpdateDoiModalStep = 'warning' | 'form'

export type CreateOrUpdateDoiModalProps = {
  /** Whether the dialog is open */
  open: boolean
  /** Callback to call when the dialog is closed */
  onClose: () => void
  /** The type of object */
  objectType: DoiObjectType
  /** The ID of the object */
  objectId: string
  /** The optional version number of the object used to populate the form. */
  defaultVersionNumber?: number
  /** If minting a DOI for a portal, the ID of the portal object in Synapse */
  portalId?: string
}

type DoiFormData = {
  titles?: string[]
  creators?: string[]
  resourceTypeGeneral?: DoiResourceTypeResourceTypeGeneralEnum
  publicationYear?: number
}

function getSuggestedResourceTypeGeneral(
  type: EntityType,
): DoiResourceTypeGeneral {
  if (type === EntityType.project || type === EntityType.folder) {
    return DoiResourceTypeGeneral.Collection
  } else {
    return DoiResourceTypeGeneral.Dataset
  }
}

function convertDoiToFormData(doi: V2Doi): DoiFormData {
  return {
    titles: (doi.titles || []).map(title => title.title!),
    creators: (doi.creators || []).map(creator => creator.creatorName!),
    resourceTypeGeneral: doi.resourceType?.resourceTypeGeneral,
    publicationYear: doi.publicationYear,
  }
}

/**
 * Returns true if the DOI has fields that are not exposed in the UI, so we can let the user know that any changes
 * may be destructive to hidden fields.
 */
function getWasModifiedViaAPI(doi: V2Doi) {
  if (doi.creators?.some(creator => !isEmpty(creator.nameIdentifiers))) {
    return true
  }
  return false
}

function convertFormDataToDoi(formData: DoiFormData): V2Doi {
  return {
    titles: formData.titles?.map(title => ({ title })) || [],
    creators:
      formData.creators?.map(creator => ({ creatorName: creator })) || [],
    resourceType: {
      resourceTypeGeneral: formData.resourceTypeGeneral,
    },
    publicationYear: formData.publicationYear,
  }
}

export function CreateOrUpdateDoiModal(props: CreateOrUpdateDoiModalProps) {
  const {
    open,
    onClose,
    objectType,
    objectId,
    defaultVersionNumber,
    portalId,
  } = props

  const [showConfirmCloseModal, setShowConfirmCloseDialog] = useState(false)
  const [currentStep, setCurrentStep] =
    useState<CreateOrUpdateDoiModalStep | null>(null)
  const hasSetInitialStepForThisSession = useRef(false)
  const { isEditing, setIsEditing } = useGlobalIsEditingContext()
  useEffect(() => {
    setIsEditing(open)

    return () => {
      setIsEditing(false)
    }
  }, [open, setIsEditing])

  function handleClose() {
    if (isEditing) {
      setShowConfirmCloseDialog(true)
    } else {
      onClose()
    }
  }

  const [selectedVersionNumber, setSelectedVersionNumber] =
    useState(defaultVersionNumber)

  const { data: portal } = useGetPortal(portalId!, {
    enabled: Boolean(portalId),
  })

  const [formData, setFormData] = useState<DoiFormData>({
    titles: [''],
    creators: [''],
  })
  const { data: currentUser, isLoading: isLoadingCurrentUser } =
    useGetCurrentUserProfile()
  const { data: entityBundle, isLoading: isLoadingEntity } = useGetEntityBundle(
    objectId,
    selectedVersionNumber,
    {
      includeEntity: true,
      includeBenefactorACL: true,
    },
    {
      enabled: objectType === DoiObjectType.ENTITY,
      staleTime: Infinity,
      throwOnError: true,
    },
  )
  const { data: realmPrincipals, isLoading: isLoadingRealmPrincipals } =
    useGetRealmPrincipals()
  const { data: doi, isLoading: isLoadingDoi } = useGetDOI(
    {
      id: objectId,
      version: selectedVersionNumber,
      type: objectType,
      portalId: portalId,
    },
    {
      staleTime: Infinity,
      throwOnError: true,
    },
  )

  const shouldShowWarning = useMemo(() => {
    return (
      open &&
      doi === null && // Creating new DOI
      entityBundle?.benefactorAcl &&
      realmPrincipals &&
      !isEntityPublic(
        entityBundle.benefactorAcl.resourceAccess,
        realmPrincipals,
      )
    )
  }, [open, doi, entityBundle, realmPrincipals])

  useEffect(() => {
    if (
      open &&
      !hasSetInitialStepForThisSession.current &&
      doi !== undefined && // Wait for DOI query to resolve before determining step
      shouldShowWarning !== undefined
    ) {
      const newStep = shouldShowWarning ? 'warning' : 'form'
      setCurrentStep(newStep)
      hasSetInitialStepForThisSession.current = true
    } else if (!open) {
      setCurrentStep(null)
      hasSetInitialStepForThisSession.current = false
    }
  }, [shouldShowWarning, open, doi])

  const doiCanBeAppliedToVersion =
    objectType === DoiObjectType.ENTITY &&
    entityBundle?.entity &&
    isVersionableEntity(entityBundle.entity)

  const { data: entityVersions } = useGetVersions(
    objectId,
    undefined,
    undefined,
    {
      enabled: doiCanBeAppliedToVersion,
    },
  )
  const formRef = useRef<RJSF>(null)

  const entityType = entityBundle?.entityType ?? EntityType.file
  const entityTypeDisplay = entityTypeToFriendlyName(entityType)
  let versionHelpMarkdown = `A DOI can be associated with a specific version of this ${entityTypeDisplay}.
  
  Versioned DOIs will link to the specified version of the ${entityTypeDisplay}.
  
  A DOI without a version will always link to the newest version of this ${entityTypeDisplay},
     so the data that someone retrieves using the DOI may change over time.`
  if (entityBundle?.entity && isTable(entityBundle.entity)) {
    const tableVersionCopy = isDataset(entityBundle.entity)
      ? 'version'
      : 'snapshot'
    versionHelpMarkdown += `\n\nTo create a DOI that will always link to the current set of data in the ${entityTypeDisplay},
     create a new ${tableVersionCopy} and mint a DOI for that ${tableVersionCopy}.`
  }

  const {
    mutate: createOrUpdateDoi,
    isPending: updateIsPending,
    error: updateDoiError,
  } = useCreateOrUpdateDOI({
    onSuccess: () => {
      displayToast('The DOI was successfully updated.', 'success')
      onClose()
    },
  })

  const isLoading =
    updateIsPending ||
    isLoadingCurrentUser ||
    isLoadingEntity ||
    isLoadingDoi ||
    isLoadingRealmPrincipals

  const wasModifiedViaAPI = Boolean(doi && getWasModifiedViaAPI(doi))

  useEffect(() => {
    if (doi) {
      setFormData(convertDoiToFormData(doi))
    }
    // If there is no DOI, then pre-fill the form.
    if (currentUser && entityBundle?.entity && doi === null) {
      const newFormData = {
        titles: [entityBundle.entity.name],
        creators: new Array<string>(),
        resourceTypeGeneral: getSuggestedResourceTypeGeneral(
          entityBundle.entityType,
        ),
        publicationYear: new Date().getFullYear(),
      } satisfies DoiFormData
      if (currentUser.lastName && currentUser.firstName) {
        newFormData.creators.push(
          `${currentUser.lastName}, ${currentUser.firstName}`,
        )
      }
      setFormData(newFormData)
    }
  }, [currentUser, doi, entityBundle])

  function onSave() {
    if (formRef.current && formRef.current.validateForm()) {
      const requestDoi: V2Doi = convertFormDataToDoi(formData)
      requestDoi.objectType = objectType
      requestDoi.objectId = objectId
      requestDoi.objectVersion = selectedVersionNumber
      requestDoi.etag = doi?.etag
      requestDoi.portalId = portalId
      createOrUpdateDoi({
        doi: requestDoi,
        concreteType: 'org.sagebionetworks.repo.model.doi.v2.DoiRequest',
      })
    }
  }

  const dialogContent = (
    <>
      <Typography variant={'body1'} gutterBottom>
        Minting a DOI allows you to credit contributors and makes it easy to
        cite your work.
      </Typography>
      <Typography variant={'body1'} gutterBottom sx={{ mb: 2 }}>
        Note that while the DOI and its associated metadata will be publicly
        visible outside of Synapse, your data will still adhere to its existing
        access conditions. If your data is private, it will remain restricted,
        but the DOI will still be listed. Resources with DOIs may be added to
        the{' '}
        <Link
          href={`${getEndpoint(
            BackendDestinationEnum.PORTAL_ENDPOINT,
          )}${DATA_CATALOG_PATH_SEGMENT}`}
          target="_blank"
          rel="noopener"
        >
          Synapse Data Catalog
        </Link>
        .
      </Typography>
      {portalId && (
        <TextField
          label={'Publisher'}
          fullWidth
          value={portal?.name || ''}
          disabled
        />
      )}
      {doiCanBeAppliedToVersion && (
        <StyledFormControl className="limit-type" fullWidth sx={{ my: 2 }}>
          <InputLabel
            htmlFor="doi-version-select"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <span>Version</span>
            <MarkdownPopover
              contentProps={{ markdown: versionHelpMarkdown }}
              maxWidth="350px"
            >
              <HelpTwoTone className={`HelpButton`} />
            </MarkdownPopover>
          </InputLabel>
          <Select
            id="doi-version-select"
            value={selectedVersionNumber ?? -1}
            onChange={e => {
              if (e.target.value === -1) {
                setSelectedVersionNumber(undefined)
              } else {
                setSelectedVersionNumber(e.target.value)
              }
            }}
          >
            <MenuItem value={-1}>No version</MenuItem>
            {entityVersions &&
              entityVersions.results.map(version => (
                <MenuItem
                  key={version.versionNumber}
                  value={version.versionNumber}
                >
                  Version {version.versionNumber}
                  {/* display the version label if it exists & is different from the number itself */}
                  {version.versionLabel &&
                  version.versionLabel !== String(version.versionNumber)
                    ? ` / ${version.versionLabel}`
                    : ''}
                </MenuItem>
              ))}
          </Select>
        </StyledFormControl>
      )}
      <div className="JsonSchemaFormContainer">
        <JsonSchemaForm
          formRef={formRef}
          disabled={isLoading || wasModifiedViaAPI}
          schema={doiFormSchema}
          formData={formData}
          onChange={e => {
            setFormData(e.formData)
          }}
          uiSchema={doiFormUiSchema}
          showErrorList={false}
        />
      </div>
      {doi && (
        <Alert severity={'warning'}>
          <Typography variant={'body1'}>
            A DOI has already been created. Updating the DOI information will
            cause old information to be lost!
          </Typography>
        </Alert>
      )}
      {wasModifiedViaAPI && (
        <Alert severity={'warning'} sx={{ my: 1 }}>
          <Typography variant={'body1'}>
            The metadata for this DOI was modified using a programmatic client,
            so data may be hidden from this view. Any changes may result in
            metadata being lost.
          </Typography>
        </Alert>
      )}
      {updateDoiError && (
        <Alert severity={'error'} sx={{ mt: 1 }}>
          <Typography variant={'body1'}>{updateDoiError.message}</Typography>
        </Alert>
      )}
    </>
  )

  const dialogActions = (
    <>
      <Button variant="outlined" disabled={isLoading} onClick={handleClose}>
        Cancel
      </Button>
      <Button
        variant="contained"
        disabled={isLoading}
        onClick={
          currentStep === 'warning'
            ? () => setCurrentStep('form')
            : e => {
                // SWC-7055 - The default action may trigger `beforeunload` and erroneously warn the user about leaving the page.
                e.preventDefault()
                onSave()
              }
        }
      >
        {currentStep === 'warning' ? 'Continue' : 'Save'}
      </Button>
    </>
  )

  return (
    <>
      <ConfirmCloseWithoutSavingDialog
        open={showConfirmCloseModal}
        onCancel={() => {
          setShowConfirmCloseDialog(false)
        }}
        onConfirm={() => {
          setShowConfirmCloseDialog(false)
          onClose()
        }}
      />
      {currentStep && (
        <DialogBase
          open={open}
          onCancel={handleClose}
          title={
            currentStep === 'warning'
              ? 'This page is private'
              : 'Create or Update a DOI'
          }
          content={
            <>
              {currentStep === 'warning' && <PrivateEntityDoiWarning />}
              {currentStep === 'form' && dialogContent}
            </>
          }
          actions={dialogActions}
        />
      )}
    </>
  )
}

export default CreateOrUpdateDoiModal
