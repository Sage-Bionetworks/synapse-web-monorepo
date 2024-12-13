import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Paper,
} from '@mui/material'
import { TermsOfServiceState } from '@sage-bionetworks/synapse-types'
import { SyntheticEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GovernanceMarkdownGithub } from 'synapse-react-client/components/Markdown/MarkdownGithub'
import { displayToast } from 'synapse-react-client/components/ToastMessage/index'
import {
  useSignTermsOfService,
  useTermsOfServiceInfo,
  useTermsOfServiceStatus,
} from 'synapse-react-client/synapse-queries/termsOfService/useTermsOfService'
import {
  processRedirectURLInOneSage,
  restoreLastPlace,
} from 'synapse-react-client/utils/AppUtils/AppUtils'
import { useSynapseContext } from 'synapse-react-client/utils/context/SynapseContext'
import { StyledOuterContainer } from './StyledComponents'

export function SignUpdatedTermsOfUsePage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isCheckboxSelected, setIsCheckboxSelected] = useState(false)
  const { accessToken } = useSynapseContext()
  const { mutate: signTermsOfService } = useSignTermsOfService()
  const navigate = useNavigate()
  const { data: tosInfo } = useTermsOfServiceInfo()
  const { data: tosStatus } = useTermsOfServiceStatus(accessToken, {
    enabled: !!accessToken,
  })

  const redirectAfterSignOrSkip = () => {
    const didRedirect = restoreLastPlace(navigate)
    if (!didRedirect) {
      // if we did not redirect to a page in this app, then look for the redirect cookie
      processRedirectURLInOneSage()
    }
  }

  const isSkipAvailable =
    tosStatus?.userCurrentTermsOfServiceState ==
    TermsOfServiceState.MUST_AGREE_SOON
  const onSignTermsOfUse = async (event: SyntheticEvent) => {
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
              redirectAfterSignOrSkip()
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
        <Paper sx={{ p: '30px' }}>
          <Box
            sx={{
              height: '65vh',
              p: '10px',
              overflowY: 'auto',
            }}
          >
            <GovernanceMarkdownGithub
              repoOwner="Sage-Bionetworks"
              repoName="Sage-Governance-Documents"
              filePath="Terms.md"
            />
          </Box>

          <FormControlLabel
            control={<Checkbox />}
            sx={{ p: '30px 45px 0px 45px' }}
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
                  sessionStorage.setItem('skippedSigningToS', 'true')
                  redirectAfterSignOrSkip()
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
