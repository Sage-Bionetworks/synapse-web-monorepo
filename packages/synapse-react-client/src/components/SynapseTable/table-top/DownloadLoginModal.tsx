import React from 'react'
import { ConfirmationDialog } from '../../ConfirmationDialog/ConfirmationDialog'
import { Link, Typography } from '@mui/material'
import { SRC_SIGN_IN_CLASS } from '../../../utils/SynapseConstants'

export type DownloadLoginModalProps = {
  showModal?: boolean
  onHide: () => void
}

export const CONFIRM_BUTTON_TEXT = 'Sign in'

const content = (
  <>
    <Typography variant="smallText1" marginBottom="10px">
      Anyone can browse public content on the Synapse website, but in order to
      download and create content you will need to register for an account using
      an email address.
    </Typography>
    <Typography variant="smallText1">
      To find out more see&nbsp;
      <Link
        href="https://help.synapse.org/docs/Managing-your-account.2055405596.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        User Accounts
      </Link>
      <span> and </span>
      <Link
        href="https://help.synapse.org/docs/Synapse-Governance.2004255211.html"
        rel="noopener noreferrer"
        target="_blank"
      >
        Governance Overview
      </Link>
      .
    </Typography>
  </>
)

export const DownloadLoginModal: React.FunctionComponent<
  DownloadLoginModalProps
> = props => {
  return (
    <ConfirmationDialog
      open={true}
      title="Sign In Required"
      content={content}
      onCancel={() => props.onHide()}
      onConfirm={() => props.onHide()}
      confirmButtonProps={{
        children: CONFIRM_BUTTON_TEXT,
        className: SRC_SIGN_IN_CLASS,
      }}
    />
  )
}
