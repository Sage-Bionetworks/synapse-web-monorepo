import * as React from 'react'
import { Alert, Form } from 'react-bootstrap'
import { useEffect, useRef, useState } from 'react'
import {
  updateResearchProject,
  getResearchProject,
} from '../../../utils/SynapseClient'
import { ResearchProject } from '../../../utils/synapseTypes/ResearchProject'
import { ManagedACTAccessRequirement } from '../../../utils/synapseTypes'
import { AlertProps } from './RequestDataAccessStep2'
import { useSynapseContext } from '../../../utils/SynapseContext'
import { RequestDataStepCallbackArgs } from '../AccessRequirementList'
import {
  Box,
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Stack,
} from '@mui/material'
import IconSvg from '../../IconSvg'

export type RequestDataAccessStep1Props = {
  requestDataStepCallback?: (props: RequestDataStepCallbackArgs) => void
  managedACTAccessRequirement: ManagedACTAccessRequirement
  onHide: () => void
}

const RequestDataAccessStep1: React.FC<RequestDataAccessStep1Props> = props => {
  const { requestDataStepCallback, managedACTAccessRequirement, onHide } = props
  const { accessToken } = useSynapseContext()
  const [projectLead, setProjectLead] = useState<string>('')
  const [institution, setInstitution] = useState<string>('')
  const [intendedDataUseStatement, setIntendedDataUseStatement] =
    useState<string>('')
  const [alert, setAlert] = useState<AlertProps | undefined>()
  const researchProjectRef = useRef({})
  let mounted = true

  useEffect(() => {
    if (mounted) {
      setAlert(undefined)
      retrieveExistingResearchProject()
    }
    return () => {
      mounted = false
    }
  }, [accessToken])

  const retrieveExistingResearchProject = async () => {
    try {
      const researchProject = await getResearchProject(
        String(managedACTAccessRequirement.id),
        accessToken!,
      )
      if (researchProject.id) {
        researchProjectRef.current = researchProject
        if (researchProject?.projectLead) {
          setProjectLead(researchProject?.projectLead)
        }
        if (researchProject?.institution) {
          setInstitution(researchProject?.institution)
        }
        if (researchProject?.intendedDataUseStatement) {
          setIntendedDataUseStatement(researchProject?.intendedDataUseStatement)
        }
      }
    } catch (e) {
      console.log(
        'RequestDataAccessStep1: Error getting research project data: ',
        e,
      )
    }
  }

  const getErrorMessage = (reason: string = '') => {
    return (
      <>
        <strong>Unable to update research project data.</strong>
        <br />
        {reason}
      </>
    )
  }

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    const requestObj: ResearchProject = Object.assign(
      {},
      researchProjectRef.current,
      {
        accessRequirementId: String(managedACTAccessRequirement.id),
        institution: institution,
        projectLead: projectLead,
        intendedDataUseStatement: intendedDataUseStatement,
      },
    )

    try {
      updateResearchProject(requestObj, accessToken!)
        .then(researchProject => {
          requestDataStepCallback?.({
            managedACTAccessRequirement,
            step: 2,
            researchProjectId: researchProject.id,
          })
        })
        .catch(e => {
          console.log(
            'RequestDataAccessStep1: Error updating research project data: ',
            e,
          )
          setAlert({
            key: 'danger',
            message: getErrorMessage(e.reason),
          })
        })
    } catch (e) {
      console.log(
        'RequestDataAccessStep1: Error updating research project data: ',
        e,
      )
      setAlert({
        key: 'danger',
        message: getErrorMessage(e.reason),
      })
    }
  }

  return (
    <>
      <DialogTitle>
        <Stack direction="row" alignItems={'center'} gap={'5px'}>
          Request Access
          <Box sx={{ flexGrow: 1 }} />
          <IconButton onClick={onHide}>
            <IconSvg icon={'close'} wrap={false} sx={{ color: 'grey.700' }} />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent>
        <Form className={'access-request-form1'} onSubmit={handleSubmit}>
          <p>Please tell us about your project.</p>
          <Form.Group>
            <Form.Label htmlFor={'project-lead'}>Project Lead</Form.Label>
            <Form.Control
              id={'project-lead'}
              type="text"
              value={projectLead}
              required
              onChange={e => setProjectLead(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor={'institution'}>Institution</Form.Label>
            <Form.Control
              id={'institution'}
              type="text"
              value={institution}
              required
              onChange={e => setInstitution(e.target.value)}
            />
          </Form.Group>
          {managedACTAccessRequirement.isIDURequired && (
            <Form.Group>
              <Form.Label htmlFor={'data-use'}>
                Intended Data Use Statement -
                {managedACTAccessRequirement.isIDUPublic && (
                  <i id={'idu-visible'}>this will be visible to the public</i>
                )}
              </Form.Label>
              <Form.Control
                id={'data-use'}
                as="textarea"
                value={intendedDataUseStatement}
                rows={10}
                required
                onChange={e => setIntendedDataUseStatement(e.target.value)}
              />
            </Form.Group>
          )}
          {
            /* Alert message */
            alert && (
              <Alert variant={alert.key} transition={false}>
                {alert.message}
              </Alert>
            )
          }
        </Form>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="contained" type="submit" onClick={handleSubmit}>
          Save changes
        </Button>
      </DialogActions>
    </>
  )
}

export default RequestDataAccessStep1
