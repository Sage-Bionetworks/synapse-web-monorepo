import React from 'react'
import { Button } from '@mui/material'
import SynapseClient from '../../synapse-client'

export type LogoutProps = {
  callback: () => void
}

export default function Logout(props: LogoutProps) {
  const { callback } = props
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          SynapseClient.signOut().then(callback)
        }}
      >
        Log out
      </Button>
    </div>
  )
}
