import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SynapseClient } from 'synapse-react-client'

export default function LogoutPage() {
  const navigate = useNavigate()
  SynapseClient.signOut().then(() => {
    navigate('/authenticated/myaccount', { replace: true })
  })
  return <></>
}
