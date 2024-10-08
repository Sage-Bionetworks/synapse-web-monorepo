import React, { useState } from 'react'
import {
  displayToast,
  SynapseContextUtils,
  SynapseQueries,
  GovernanceMarkdownGithub,
} from 'synapse-react-client'
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Paper,
} from '@mui/material'
import { StyledOuterContainer } from './StyledComponents'
import { TermsOfServiceState } from '@sage-bionetworks/synapse-types'

export type SignUpdatedTermsOfUsePageProps = {}

export const SignUpdatedTermsOfUsePage = (
  props: SignUpdatedTermsOfUsePageProps,
) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isCheckboxSelected, setIsCheckboxSelected] = useState(false)
  const { accessToken } = SynapseContextUtils.useSynapseContext()
  const { mutate: signTermsOfService } = SynapseQueries.useSignTermsOfService()

  const { data: tosInfo } = SynapseQueries.useTermsOfServiceInfo()
  const { data: tosStatus } = SynapseQueries.useTermsOfServiceStatus()

  const isSkipAvailable =
    tosStatus?.usersCurrentTermsOfServiceState ==
    TermsOfServiceState.MUST_AGREE_SOON
  const onSignTermsOfUse = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    setIsLoading(true)
    try {
      if (accessToken) {
        signTermsOfService(
          {
            accessToken,
            termsOfServiceVersion: tosInfo?.latestTermsOfServiceVersion!,
          },
          {
            onSuccess: () => {
              window.location.assign('/')
            },
            onError: err => {
              displayToast(err.reason as string, 'danger')
            },
          },
        )
      }
    } catch (err: any) {
      displayToast(err.reason as string, 'danger')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <StyledOuterContainer className="SignUpdatedTermsOfUsePage">
      <Container sx={{ maxWidth: '800px' }}>
        <Paper>
          <GovernanceMarkdownGithub
            repoOwner="Sage-Bionetworks"
            repoName="Sage-Governance-Documents"
            filePath="Terms.md"
          />
          <FormControlLabel
            control={<Checkbox />}
            sx={{ p: '30px 45px' }}
            label="I agree to the terms of service"
            checked={isCheckboxSelected}
            onChange={() => {
              setIsCheckboxSelected(!isCheckboxSelected)
            }}
          />
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: isSkipAvailable ? 'repeat(2, 1fr)' : '1fr', // either 2 fr (fraction unit) or 1
              gap: '10px',
              p: '0px 45px 45px 45px',
            }}
          >
            <Button
              variant="contained"
              sx={{ width: '100%' }}
              onClick={onSignTermsOfUse}
              disabled={isLoading || !isCheckboxSelected}
            >
              Agree and Continue
            </Button>
            {isSkipAvailable && (
              <Button
                variant="outlined"
                sx={{ width: '100%' }}
                onClick={() => {
                  window.location.assign('/?skippedSigningToS=true')
                }}
                disabled={isLoading}
              >
                Skip for Now
              </Button>
            )}
          </Box>
        </Paper>
      </Container>
    </StyledOuterContainer>
  )
}
