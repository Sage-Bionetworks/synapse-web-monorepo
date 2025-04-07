import { DialogBase } from '@/components/DialogBase'
import { doiFormSchema, doiFormUiSchema } from '@/components/doi/DoiFormSchemas'
import { JsonSchemaForm } from '@/components/JsonSchemaForm/JsonSchemaForm'
import { MarkdownPopover } from '@/components/Markdown/MarkdownPopover'
import { StyledFormControl } from '@/components/styled/StyledFormControl'
import { displayToast } from '@/components/ToastMessage/ToastMessage'
import { useCreateOrUpdateDOI, useGetDOI } from '@/synapse-queries/doi/useDOI'
import {
  useGetEntity,
  useGetVersions,
} from '@/synapse-queries/entity/useEntity'
import { useGetCurrentUserProfile } from '@/synapse-queries/user/useUserBundle'
import {
  convertToEntityType,
  entityTypeToFriendlyName,
  isTable,
  isVersionableEntity,
} from '@/utils/functions/EntityTypeUtils'
import { HelpTwoTone } from '@mui/icons-material'
import {
  Alert,
  Button,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material'
import { DoiResourceTypeGeneral, V2Doi } from '@sage-bionetworks/synapse-client'
import { EntityType } from '@sage-bionetworks/synapse-types'
import { isEmpty } from 'lodash-es'
import { useEffect, useState } from 'react'

type CreateOrUpdateDoiModalProps = {
  /** Whether the dialog is open */
  open: boolean
  /** Callback to call when the dialog is closed */
  onClose: () => void
  /** The type of object */
  objectType: V2Doi['objectType']
  /** The ID of the object */
  objectId: string
  /** The optional version number of the object used to populate the form. */
  defaultVersionNumber?: number
}

type DoiFormData = {
  titles?: string[]
  creators?: string[]
  resourceTypeGeneral?: string
  publicationYear?: number
}

function getSuggestedResourceTypeGeneral(
  type: EntityType,
): DoiResourceTypeGeneral {
  if (type === EntityType.PROJECT || type === EntityType.FOLDER) {
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
  const { open, onClose, objectType, objectId, defaultVersionNumber } = props
  const [selectedVersionNumber, setSelectedVersionNumber] =
    useState(defaultVersionNumber)

  const [formData, setFormData] = useState<DoiFormData>({
    titles: [''],
    creators: [''],
  })
  const { data: currentUser, isLoading: isLoadingCurrentUser } =
    useGetCurrentUserProfile()
  const { data: entity, isLoading: isLoadingEntity } = useGetEntity(
    objectId,
    defaultVersionNumber,
    {
      enabled: objectType === 'ENTITY',
      throwOnError: true,
    },
  )
  const { data: doi, isLoading: isLoadingDoi } = useGetDOI(
    objectId,
    selectedVersionNumber,
    objectType,
    {
      staleTime: Infinity,
      throwOnError: true,
    },
  )

  const doiCanBeAppliedToVersion =
    objectType === 'ENTITY' && entity && isVersionableEntity(entity)

  const { data: entityVersions } = useGetVersions(
    objectId,
    undefined,
    undefined,
    {
      enabled: doiCanBeAppliedToVersion,
    },
  )

  const entityType = entity
    ? convertToEntityType(entity.concreteType)
    : EntityType.FILE
  const entityTypeDisplay = entityTypeToFriendlyName(entityType)
  let versionHelpMarkdown = `A DOI can be associated with a specific version of this ${entityTypeDisplay}.
  
  Versioned DOIs will link to the specified version of the ${entityTypeDisplay}.
  
  A DOI without a version will always link to the newest version of this ${entityTypeDisplay},
     so the data that someone retrieves using the DOI may change over time.`
  if (entity && isTable(entity)) {
    versionHelpMarkdown += `\n\nTo create a DOI that will always link to the current set of data in the ${entityTypeDisplay},
     create a new version and mint a DOI for that version.`
  }

  const {
    mutate: createOrUpdateDoi,
    isPending: updateIsPending,
    error: updateDoiError,
  } = useCreateOrUpdateDOI({
    onSuccess: () => {
      displayToast('The DOI was successfully updated.', 'success')
    },
  })

  const isLoading =
    updateIsPending || isLoadingCurrentUser || isLoadingEntity || isLoadingDoi

  const wasModifiedViaAPI = Boolean(doi && getWasModifiedViaAPI(doi))

  useEffect(() => {
    if (doi) {
      setFormData(convertDoiToFormData(doi))
    }
    // If there is no DOI, then pre-fill the form.
    if (currentUser && entity && doi === null) {
      const newFormData = {
        titles: [entity.name],
        creators: new Array<string>(),
        resourceTypeGeneral: getSuggestedResourceTypeGeneral(
          convertToEntityType(entity.concreteType),
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
  }, [currentUser, doi, entity])

  function onSave() {
    const requestDoi: V2Doi = convertFormDataToDoi(formData)
    requestDoi.objectType = objectType
    requestDoi.objectId = objectId
    requestDoi.objectVersion = selectedVersionNumber
    requestDoi.etag = doi?.etag
    createOrUpdateDoi({
      doi: requestDoi,
      concreteType: 'org.sagebionetworks.repo.model.doi.v2.DoiRequest',
    })
  }

  const dialogContent = (
    <>
      <Typography variant={'body1'} gutterBottom>
        Minting a DOI allows you to credit contributors and makes it easy to
        cite your work.
      </Typography>
      <Typography variant={'body1'} gutterBottom>
        Note that while the DOI and its associated metadata will be publicly
        visible outside of Synapse, your data will still adhere to its existing
        access conditions. If your data is private, it will remain restricted,
        but the DOI will still be listed.
        {/* Once a DOI is minted, the resource will be added to the Synapse Data Catalog. */}
      </Typography>
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
                setSelectedVersionNumber(e.target.value as number)
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
          disabled={isLoading || wasModifiedViaAPI}
          schema={doiFormSchema}
          formData={formData}
          onChange={e => {
            setFormData(e.formData)
          }}
          uiSchema={doiFormUiSchema}
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
      <Button variant="outlined" disabled={isLoading} onClick={onClose}>
        Cancel
      </Button>
      <Button
        variant="contained"
        disabled={isLoading}
        onClick={() => {
          onSave()
        }}
      >
        Save
      </Button>
    </>
  )

  return (
    <DialogBase
      open={open}
      onCancel={onClose}
      title={'Create or Update a DOI'}
      content={dialogContent}
      actions={dialogActions}
    />
  )
}
