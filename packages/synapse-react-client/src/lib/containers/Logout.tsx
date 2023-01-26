import { SynapseClient } from '../utils'
import React from 'react'
import { Button } from 'react-bootstrap'

export type LogoutProps = {
  callback: () => void
}

export default function Logout(props: LogoutProps) {
  const { callback } = props
  return (
    <div className="bootstrap-4-backport">
      <Button
        variant="default"
        onClick={() => {
          SynapseClient.signOut(callback)
        }}
      >
        Log out
      </Button>
    </div>
  )
}
