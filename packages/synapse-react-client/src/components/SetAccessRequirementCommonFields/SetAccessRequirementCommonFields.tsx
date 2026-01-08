import {
  useCreateAccessRequirement,
  useGetAccessRequirements,
  useUpdateAccessRequirement,
} from '@/synapse-queries'
import spreadSx from '@/react-ui/theme/utils/mergeSx'
import { HelpOutlineTwoTone } from '@mui/icons-material'
import {
  Alert,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  Skeleton,
  Stack,
  TextField,
  Tooltip,
  Typography,
  TypographyProps,
} from '@mui/material'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import {
  ACCESS_REQUIREMENT_CONCRETE_TYPE,
  ACCESS_TYPE,
  AccessRequirement,
  MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  RestrictableObjectDescriptor,
  RestrictableObjectType,
  SELF_SIGN_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
} from '@sage-bionetworks/synapse-types'
import pluralize from 'pluralize'
import {
  ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react'
import EntitySubjectsSelector from '../EntitySubjectsSelector'
import { SynapseErrorBoundary } from '../error'
import TeamSubjectsSelector from '../TeamSubjectsSelector'

export const EMPTY_SUBJECT_LIST_ERROR_MESSAGE =
  'Please select at least one resource for this Access Requirement to be associated with.'
export const UNSAVED_SUBJECTS_ERROR_MESSAGE = (
  subjectsType: RestrictableObjectType,
) => {
  const idsText =
    subjectsType === RestrictableObjectType.ENTITY ? 'Synapse' : 'Team'
  const typeText =
    subjectsType[0].toUpperCase() + subjectsType.slice(1).toLowerCase()
  return `${idsText} IDs were specified but not added to the subjects list. Please either clear out the Add ${idsText} IDs textbox or click the Add ${pluralize(
    typeText,
  )} button.`
}
const NAME_HELP_TEXT =
  "Enter access requirement name. This will also be used when sending notifications for expiring or revoked approval. For example, 'The approval for the name access requirement was revoked...'"

const headerProps: Partial<TypographyProps> = {
  variant: 'body1',
  fontWeight: 700,
}

function getAccessType(subjectType: RestrictableObjectType) {
  switch (subjectType) {
    case RestrictableObjectType.ENTITY:
      return ACCESS_TYPE.DOWNLOAD
    case RestrictableObjectType.TEAM:
      return ACCESS_TYPE.PARTICIPATE
    default:
      throw new Error(
        `RestrictableObjectType ${subjectType} does not have an access type specified.`,
      )
  }
}

export type SetAccessRequirementCommonFieldsHandle = {
  /* Allow the parent component to trigger saving the AR, so this may be embedded in an arbitrary modal. */
  save: () => void
}

export type SetAccessRequirementCommonFieldsProps = {
  /* Provided when creating a new AR */
  subject?: RestrictableObjectDescriptor
  /* Provided when editing an existing AR */
  accessRequirementId?: string
  /* Called when AR has been saved successfully */
  onSave: (
    accessRequirementId: string,
    accessRequirementConreteType: ACCESS_REQUIREMENT_CONCRETE_TYPE,
  ) => void
  /* Called when error saving AR */
  onError: () => void
}

export const SetAccessRequirementCommonFields = forwardRef(
  function SetAccessRequirementCommonFields(
    props: SetAccessRequirementCommonFieldsProps,
    ref: ForwardedRef<SetAccessRequirementCommonFieldsHandle>,
  ) {
    const { subject, accessRequirementId, onSave, onError } = props

    const isEditing = !subject

    const [subjects, setSubjects] = useState<RestrictableObjectDescriptor[]>(
      subject ? [subject] : [],
    )
    const [hasPendingSubjects, setHasPendingSubjects] = useState<boolean>(false)
    const [subjectsError, setSubjectsError] = useState<string | null>(null)
    const [name, setName] = useState<string>('')
    const [subjectsDefinedByAnnotations, setSubjectsDefinedByAnnotations] =
      useState<boolean>(false)
    const [arType, setArType] = useState<ACCESS_REQUIREMENT_CONCRETE_TYPE>(
      subject?.type === RestrictableObjectType.TEAM
        ? SELF_SIGN_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE
        : MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
    )
    const [clientError, setClientError] = useState<string | null>(null)

    const onMutationSuccess = (ar: AccessRequirement) => {
      setClientError(null)
      onSave(ar.id.toString(), ar.concreteType)
    }

    const onMutationError = (error: SynapseClientError) => {
      setClientError(error.reason)
      onError()
    }

    const { mutate: createAccessRequirement } = useCreateAccessRequirement({
      onSuccess: newAr => onMutationSuccess(newAr),
      onError: error => onMutationError(error),
    })

    const { mutate: updateAccessRequirement } = useUpdateAccessRequirement({
      onSuccess: updatedAr => onMutationSuccess(updatedAr),
      onError: error => onMutationError(error),
    })

    const {
      data: accessRequirement,
      isLoading: isLoadingAr,
      error: getArError,
    } = useGetAccessRequirements(accessRequirementId!, {
      enabled: Boolean(accessRequirementId),
    })

    useEffect(() => {
      if (accessRequirement) {
        setArType(accessRequirement.concreteType)
        setName(accessRequirement.name)
        setSubjects(accessRequirement.subjectIds)
        setSubjectsDefinedByAnnotations(
          accessRequirement.subjectsDefinedByAnnotations,
        )
      }
    }, [accessRequirement])

    const subjectsType = useMemo(() => {
      if (subject) {
        return subject.type
      }
      if (accessRequirement) {
        const initialSubjects = accessRequirement.subjectIds
        if (initialSubjects.length > 0) {
          return initialSubjects[0].type
        }
      }
      if (subjectsDefinedByAnnotations) {
        return RestrictableObjectType.ENTITY
      }
      return null
    }, [subject, accessRequirement, subjectsDefinedByAnnotations])

    const selectorContent = useMemo(() => {
      if (!subjectsType) return <></>

      function onUpdate(subjects: RestrictableObjectDescriptor[]) {
        setSubjectsError(null)
        setSubjects(subjects)
      }

      function onUpdateIdsTextbox(value: string) {
        setSubjectsError(null)
        setHasPendingSubjects(value.trim() !== '')
      }

      if (subjectsDefinedByAnnotations) {
        return <></>
      }
      switch (subjectsType) {
        case RestrictableObjectType.TEAM:
          return (
            <TeamSubjectsSelector
              subjects={subjects}
              onUpdate={subjects => onUpdate(subjects)}
              onUpdateTeamIDsTextbox={value => onUpdateIdsTextbox(value)}
            />
          )
        case RestrictableObjectType.ENTITY:
          return (
            <EntitySubjectsSelector
              subjects={subjects}
              onUpdate={subjects => onUpdate(subjects)}
              onUpdateEntityIDsTextbox={value => onUpdateIdsTextbox(value)}
            />
          )
        default:
          console.error(
            `RestrictableObjectType ${subjectsType} does not have a selector implemented.`,
          )
          return <></>
      }
    }, [subjectsType, subjects, subjectsDefinedByAnnotations])

    useImperativeHandle(
      ref,
      () => {
        return {
          save() {
            const isStillLoading =
              (isEditing && !accessRequirement) || !subjectsType
            const hasSubjectsError =
              !subjectsDefinedByAnnotations &&
              (hasPendingSubjects || subjects.length === 0)
            if (isStillLoading || hasSubjectsError) {
              if (hasSubjectsError && !isStillLoading) {
                if (hasPendingSubjects) {
                  setSubjectsError(UNSAVED_SUBJECTS_ERROR_MESSAGE(subjectsType))
                } else if (subjects.length === 0) {
                  setSubjectsError(EMPTY_SUBJECT_LIST_ERROR_MESSAGE)
                }
              }

              onError()
              return
            }

            const newAccessType = getAccessType(subjectsType)
            if (!isEditing) {
              const newAr: Partial<AccessRequirement> = {
                concreteType: arType,
                subjectIds: subjects,
                name: name,
                accessType: newAccessType,
                subjectsDefinedByAnnotations: subjectsDefinedByAnnotations,
              }
              createAccessRequirement(newAr)
            }

            if (isEditing && accessRequirement) {
              updateAccessRequirement({
                ...accessRequirement,
                subjectIds: subjects,
                name: name,
                accessType: newAccessType,
                subjectsDefinedByAnnotations: subjectsDefinedByAnnotations,
              })
            }
          },
        }
      },
      [
        hasPendingSubjects,
        subjectsType,
        subjects,
        name,
        arType,
        accessRequirement,
        isEditing,
        onError,
        createAccessRequirement,
        updateAccessRequirement,
        subjectsDefinedByAnnotations,
      ],
    )

    if (isLoadingAr || !subjectsType) {
      return (
        <>
          <Skeleton width={100} height={30} />
          <Skeleton width={125} height={30} />
          <Skeleton width="100%">
            <TextField />
          </Skeleton>
          <Skeleton width={100} height={30} />
          <Skeleton width="100%">
            <TextField />
          </Skeleton>
        </>
      )
    }

    if (getArError) {
      return <Alert severity="error">{getArError.reason}</Alert>
    }

    return (
      <>
        <Typography {...headerProps}>Resources</Typography>
        {subjectsType !== RestrictableObjectType.TEAM && (
          <FormControlLabel
            control={<Checkbox />}
            label="Associated entities should be defined by annotations (DUO)"
            checked={subjectsDefinedByAnnotations}
            onChange={() => {
              setSubjectsError(null)
              // if we are switching from DUO to manually defining the subjects (and the AR has been retrieved), then
              // reset to the AR subject IDs or the original subject ID.  Otherwise, clear out the subjects.
              let newSubjectIds: RestrictableObjectDescriptor[] = []
              if (subjectsDefinedByAnnotations) {
                if (accessRequirement) {
                  newSubjectIds = accessRequirement.subjectIds
                } else if (subject) {
                  newSubjectIds = [subject]
                }
              }
              setSubjects(newSubjectIds)
              setSubjectsDefinedByAnnotations(!subjectsDefinedByAnnotations)
            }}
          />
        )}
        <SynapseErrorBoundary>{selectorContent}</SynapseErrorBoundary>
        {subjectsError && <Alert severity="error">{subjectsError}</Alert>}
        <Stack
          direction="row"
          sx={{
            gap: 1,
            alignItems: 'center',
            mb: 1,
            mt: 2,
          }}
        >
          <Typography component="label" htmlFor="arName" {...headerProps}>
            Name
          </Typography>
          <Tooltip title={NAME_HELP_TEXT} placement="right">
            <HelpOutlineTwoTone sx={{ color: 'grey.600' }} />
          </Tooltip>
        </Stack>
        <TextField
          id="arName"
          name="arName"
          value={name}
          placeholder="Access requirement name"
          fullWidth
          onChange={event => setName(event.target.value)}
        />
        {!isEditing && subjectsType !== RestrictableObjectType.TEAM && (
          <>
            <Typography
              {...headerProps}
              sx={spreadSx(
                {
                  mt: 2,
                },
                headerProps.sx,
              )}
            >
              Access requirement type
            </Typography>
            <RadioGroup
              value={arType}
              onChange={(_event, value) =>
                setArType(value as ACCESS_REQUIREMENT_CONCRETE_TYPE)
              }
            >
              <FormControlLabel
                value={MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE}
                control={<Radio />}
                label="Controlled - requests are in Synapse"
              />
              <FormControlLabel
                value={SELF_SIGN_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE}
                control={<Radio />}
                label="Click wrap"
              />
            </RadioGroup>
          </>
        )}
        {clientError && (
          <Alert severity="error" sx={{ marginTop: 2 }}>
            {clientError}
          </Alert>
        )}
      </>
    )
  },
)
