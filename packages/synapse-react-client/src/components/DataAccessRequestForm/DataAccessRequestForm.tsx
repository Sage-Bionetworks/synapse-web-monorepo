import DataAccessRequestAccessorsEditor from '@/components/AccessRequirementList/ManagedACTAccessRequirementRequestFlow/DataAccessRequestAccessorsEditor'
import DocumentTemplate from '@/components/AccessRequirementList/ManagedACTAccessRequirementRequestFlow/DocumentTemplate'
import {
  DataAccessRequestType,
  generateDataAccessSchema,
} from '@/utils/jsonschema/generateDataAccessSchema'
import {
  Alert,
  Box,
  Button,
  Chip,
  Paper,
  Snackbar,
  Stack,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from '@mui/material'
import { RJSFSchema } from '@rjsf/utils'
import validator from '@rjsf/validator-ajv8'
import {
  FormTemplate,
  JsonSchemaAccessRequirement,
  PrincipalInvestigator,
  SigningOfficial,
} from '@sage-bionetworks/synapse-client'
import {
  AccessorChange,
  FileHandleAssociateType,
} from '@sage-bionetworks/synapse-types'
import { useMemo, useState } from 'react'
import { DataAccessRequestStep } from './DataAccessRequestStep'

export type DataAccessRequestFormProps = {
  /**
   * The Access Requirement the user must satisfy. Per the new design, each
   * data access request is for exactly one AR (multi-AR coalescing is out
   * of scope).
   */
  accessRequirement: JsonSchemaAccessRequirement
  /** The FormTemplate referenced by `accessRequirement.formTemplateRef`. */
  formTemplate: FormTemplate
  /** The JSON Schema body the template's `schema$id` resolves to. */
  jsonSchema: RJSFSchema
  /** Whether this is an initial REQUEST or a RENEWAL. Default REQUEST. */
  requestType?: DataAccessRequestType
  /**
   * Initial values for the schema-driven fields, e.g. loaded from a saved
   * `Request.schemaData`.
   */
  initialSchemaData?: Record<string, unknown>
}

export function DataAccessRequestForm({
  accessRequirement,
  formTemplate,
  jsonSchema,
  requestType = 'REQUEST',
  initialSchemaData,
}: DataAccessRequestFormProps) {
  const [activeStep, setActiveStep] = useState(0)
  const [showSuccess, setShowSuccess] = useState(false)
  const [errorMessages, setErrorMessages] = useState<string[]>([])

  // First-class request fields. These are NOT part of the JSON Schema; they
  // are collected outside it per the revised design.
  const [institution, setInstitution] = useState('')
  const [principalInvestigator, setPrincipalInvestigator] =
    useState<PrincipalInvestigator>({})
  const [signingOfficial, setSigningOfficial] = useState<SigningOfficial>({})
  const [accessorChanges, setAccessorChanges] = useState<AccessorChange[]>([])

  const schemaResponse = useMemo(
    () => generateDataAccessSchema(formTemplate, jsonSchema, requestType),
    [formTemplate, jsonSchema, requestType],
  )

  const stepLabels = useMemo(
    () => [
      'Requester Information',
      ...schemaResponse.steps.map(
        (step, i) => (step.jsonSchema.title as string) ?? `Step ${i + 1}`,
      ),
    ],
    [schemaResponse],
  )

  // Initialize per-step form data with any pre-filled values. Steps are
  // indexed independently of the fixed first-class section (index 0 in
  // `activeStep`, but not represented in `formDataByStep`).
  const [formDataByStep, setFormDataByStep] = useState<
    Record<number, Record<string, unknown>>
  >(() => {
    if (!initialSchemaData) return {}
    const byStep: Record<number, Record<string, unknown>> = {}
    schemaResponse.steps.forEach((step, idx) => {
      const props = step.jsonSchema.properties ?? {}
      const stepData: Record<string, unknown> = {}
      for (const propertyName of Object.keys(props)) {
        if (propertyName in initialSchemaData) {
          stepData[propertyName] = initialSchemaData[propertyName]
        }
      }
      if (Object.keys(stepData).length > 0) {
        byStep[idx] = stepData
      }
    })
    return byStep
  })

  const currentGeneratedStep =
    activeStep > 0 ? schemaResponse.steps[activeStep - 1] : undefined

  const handleStepDataChange = (data: Record<string, unknown>) => {
    setFormDataByStep(prev => ({
      ...prev,
      [activeStep - 1]: data,
    }))
  }

  const handleNext = () => {
    if (activeStep < stepLabels.length - 1) {
      setActiveStep(prev => prev + 1)
    }
  }

  const handlePrevious = () => {
    if (activeStep > 0) {
      setActiveStep(prev => prev - 1)
    }
  }

  const handleSubmit = () => {
    const messages: string[] = []
    if (!institution.trim()) {
      messages.push('Institution is required.')
    }
    if (!principalInvestigator.name?.trim()) {
      messages.push('Principal investigator name is required.')
    }
    if (!principalInvestigator.institutionalEmail?.trim()) {
      messages.push('Principal investigator email is required.')
    }
    if (!signingOfficial.name?.trim()) {
      messages.push('Signing official name is required.')
    }
    if (!signingOfficial.institutionalEmail?.trim()) {
      messages.push('Signing official email is required.')
    }

    schemaResponse.steps.forEach((step, i) => {
      const { errors } = validator.validateFormData(
        formDataByStep[i] ?? {},
        step.jsonSchema,
      )
      errors.forEach(e => {
        messages.push(`${e.property ?? ''} ${e.message ?? ''}`.trim())
      })
    })

    if (messages.length > 0) {
      setErrorMessages(messages)
      return
    }
    setErrorMessages([])
    setShowSuccess(true)
  }

  const isLastStep = activeStep === stepLabels.length - 1
  const showDucDownload =
    accessRequirement.isDUCRequired &&
    !!accessRequirement.ducTemplateFileHandleId
  const showEDucNotice =
    accessRequirement.isDUCRequired &&
    !accessRequirement.ducTemplateFileHandleId &&
    !!accessRequirement.eDucTemplateId

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Data Access Request
      </Typography>

      <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
        <Chip
          label={accessRequirement.name}
          variant="outlined"
          color="primary"
          size="small"
        />
        <Chip
          label={requestType === 'RENEWAL' ? 'Renewal' : 'Initial Request'}
          variant="outlined"
          size="small"
        />
      </Box>

      <Stepper activeStep={activeStep} sx={{ mb: 3 }}>
        {stepLabels.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep === 0 ? (
        <Stack spacing={2}>
          <Typography variant="caption" color="text.secondary">
            Collected as first-class request fields, not from the JSON Schema.
          </Typography>
          <TextField
            label="Institution"
            value={institution}
            onChange={e => setInstitution(e.target.value)}
            fullWidth
          />
          <Typography variant="headline3">Principal Investigator</Typography>
          <TextField
            label="Principal Investigator Name"
            value={principalInvestigator.name ?? ''}
            onChange={e =>
              setPrincipalInvestigator(prev => ({
                ...prev,
                name: e.target.value,
              }))
            }
            fullWidth
          />
          <TextField
            label="Principal Investigator Institutional Email"
            type="email"
            value={principalInvestigator.institutionalEmail ?? ''}
            onChange={e =>
              setPrincipalInvestigator(prev => ({
                ...prev,
                institutionalEmail: e.target.value,
              }))
            }
            fullWidth
          />
          <Typography variant="headline3">Signing Official</Typography>
          <TextField
            label="First and last names of your Signing Official"
            placeholder="First and last name of signing official, ex: John Smith"
            value={signingOfficial.name ?? ''}
            onChange={e =>
              setSigningOfficial(prev => ({ ...prev, name: e.target.value }))
            }
            fullWidth
          />
          <TextField
            label="Institutional Email of your Signing Official"
            type="email"
            placeholder="Individual with signing authority, e.g. jane.smith@institution.edu"
            value={signingOfficial.institutionalEmail ?? ''}
            onChange={e =>
              setSigningOfficial(prev => ({
                ...prev,
                institutionalEmail: e.target.value,
              }))
            }
            fullWidth
          />
          <DataAccessRequestAccessorsEditor
            accessorChanges={accessorChanges}
            onChange={updater => setAccessorChanges(prev => [...updater(prev)])}
            isRenewal={requestType === 'RENEWAL'}
            helpText="List any collaborators at your institution who also need access to this data."
          />
          {showDucDownload && (
            <DocumentTemplate
              title="Download DUC Template"
              description="As a first step, you will need to download the most current version of the Data Use Certificate."
              fileHandleAssociation={{
                fileHandleId: accessRequirement.ducTemplateFileHandleId!,
                associateObjectType:
                  FileHandleAssociateType.AccessRequirementAttachment,
                associateObjectId: String(accessRequirement.id),
              }}
              downloadButtonText="Download DUC Template"
            />
          )}
          {showEDucNotice && (
            <Alert severity="info">
              You will sign the Data Use Certificate electronically after
              submitting this request.
            </Alert>
          )}
        </Stack>
      ) : (
        currentGeneratedStep && (
          <DataAccessRequestStep
            step={currentGeneratedStep}
            formData={formDataByStep[activeStep - 1] ?? {}}
            onChange={handleStepDataChange}
          />
        )
      )}

      {errorMessages.length > 0 && (
        <Alert severity="error" sx={{ mt: 2 }}>
          <Typography variant="body2" gutterBottom>
            Please resolve the following before submitting:
          </Typography>
          <ul>
            {errorMessages.map((message, i) => (
              <li key={i}>{message}</li>
            ))}
          </ul>
        </Alert>
      )}

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: 3,
          pt: 2,
          borderTop: 1,
          borderColor: 'divider',
        }}
      >
        <Button
          variant="outlined"
          onClick={handlePrevious}
          disabled={activeStep === 0}
        >
          Previous
        </Button>

        {isLastStep ? (
          <Button variant="contained" onClick={handleSubmit}>
            Submit Request
          </Button>
        ) : (
          <Button variant="contained" onClick={handleNext}>
            Next
          </Button>
        )}
      </Box>

      <Snackbar
        open={showSuccess}
        autoHideDuration={4000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          severity="success"
          onClose={() => setShowSuccess(false)}
          variant="filled"
        >
          Data access request submitted successfully for{' '}
          {accessRequirement.name}.
        </Alert>
      </Snackbar>
    </Paper>
  )
}
