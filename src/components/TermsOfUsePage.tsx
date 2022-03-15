import React, { useState } from 'react'
import {
  Button,
} from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import { SynapseClient } from 'synapse-react-client'
import TermsAndConditions from 'synapse-react-client/dist/containers/TermsAndConditions'
import { displayToast } from 'synapse-react-client/dist/containers/ToastMessage'
import { useSynapseContext } from 'synapse-react-client/dist/utils/SynapseContext'

export type TermsOfUsePageProps = {
}

export const TermsOfUsePage = (props: TermsOfUsePageProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isFormComplete, setIsFormComplete] = useState(false)
  const [isDone, setIsDone] = useState(false)
  const { accessToken } = useSynapseContext()
  
  const onSignTermsOfUse = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    setIsLoading(true)
    try {
      if(accessToken) {
        SynapseClient.signSynapseTermsOfUse(accessToken)
        .then(() => {
          setIsDone(true)
        })
        .catch((err: any) => {
          displayToast(err.reason as string, 'danger')
        })
      }
    } catch (err:any) {
      displayToast(err.reason as string, 'danger')
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <>
      {isDone && <Redirect to='/authenticated/myaccount'/>}
      <div><TermsAndConditions onFormChange={(completed:boolean) => { setIsFormComplete(completed) }} /></div>
      <Button
        variant='primary'
        onClick={onSignTermsOfUse}
        type="button"
        style={{ marginLeft: 20 }}
        disabled={ isLoading || !isFormComplete }
      >
        Next
      </Button>
    </>
  )
}
