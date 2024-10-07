import React, { useState } from 'react'
import {
  displayToast,
  SynapseClient,
  TermsAndConditions,
  IconSvg,
  SynapseContextUtils,
  SynapseQueries,
  GovernanceMarkdownGithub,
} from 'synapse-react-client'
import { SourceAppLogo } from './SourceApp'
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Paper,
  useTheme,
} from '@mui/material'
import { StyledInnerContainer, StyledOuterContainer } from './StyledComponents'
import { TermsOfUseRightPanelText } from './TermsOfUseRightPanelText'
import { TermsAndConditionsLink } from './TermsAndConditionsLink'
import { useSourceApp } from './useSourceApp'

export type SignUpdatedTermsOfUsePageProps = {}

export const SignUpdatedTermsOfUsePage = (
  props: SignUpdatedTermsOfUsePageProps,
) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isCheckboxSelected, setIsCheckboxSelected] = useState(false)
  const [isDone, setIsDone] = useState(false)
  const { accessToken } = SynapseContextUtils.useSynapseContext()
  const sourceApp = useSourceApp()

  const { data: tosInfo } = SynapseQueries.useTermsOfServiceInfo()

  const onSignTermsOfUse = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    setIsLoading(true)
    try {
      if (accessToken) {
        SynapseClient.signSynapseTermsOfUse({
          accessToken,
          termsOfServiceVersion: tosInfo?.latestTermsOfServiceVersion!,
        })
          .then(() => {
            setIsDone(true)
          })
          .catch((err: any) => {
            displayToast(err.reason as string, 'danger')
          })
      }
    } catch (err: any) {
      displayToast(err.reason as string, 'danger')
    } finally {
      setIsLoading(false)
    }
  }

  const buttonSx = {
    width: '100%',
    padding: '10px',
    '&.MuiButton-contained': {
      marginTop: '20px',
      marginBottom: '10px',
    },
  }

  if (isDone) {
    if (sourceApp?.requestAffiliation) {
      window.location.assign('/authenticated/currentaffiliation')
    } else {
      window.location.assign('/authenticated/accountcreated')
    }
  }
  return (
    <StyledOuterContainer className="SignUpdatedTermsOfUsePage">
      <Container>
        <Paper>
          <GovernanceMarkdownGithub
            repoOwner="Sage-Bionetworks"
            repoName="Sage-Governance-Documents"
            filePath="Terms.md"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="I agree to the terms of service"
            checked={isCheckboxSelected}
            onChange={() => {
              setisCheckboxSelected(!isCheckboxSelected)
            }}
          />
          <Box sx={{}}>
            <Button
              sx={buttonSx}
              variant="contained"
              onClick={onSignTermsOfUse}
              disabled={isLoading}
            >
              Agree and Continue
            </Button>
          </Box>
        </Paper>
      </Container>
    </StyledOuterContainer>
  )
}
