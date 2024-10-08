import React, { useState } from 'react'
import {
  displayToast,
  TermsAndConditions,
  IconSvg,
  SynapseContextUtils,
  SynapseQueries,
} from 'synapse-react-client'
import { SourceAppLogo } from './SourceApp'
import { Box, Button, useTheme } from '@mui/material'
import { StyledInnerContainer, StyledOuterContainer } from './StyledComponents'
import { TermsOfUseRightPanelText } from './TermsOfUseRightPanelText'
import { TermsAndConditionsLink } from './TermsAndConditionsLink'
import { useSourceApp } from './useSourceApp'

export type TermsOfUsePageProps = {}

export const TermsOfUsePage = (props: TermsOfUsePageProps) => {
  const theme = useTheme()
  const [isLoading, setIsLoading] = useState(false)
  const [isFormComplete, setIsFormComplete] = useState(false)
  const [isDone, setIsDone] = useState(false)
  const { accessToken } = SynapseContextUtils.useSynapseContext()
  const sourceApp = useSourceApp()

  const { mutate: signTermsOfService } = SynapseQueries.useSignTermsOfService()
  const { data: tosInfo } = SynapseQueries.useTermsOfServiceInfo()

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
              setIsDone(true)
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

  const buttonSx = {
    width: '100%',
    padding: '10px',
    '&.MuiButton-contained': {
      marginTop: '20px',
      marginBottom: '10px',
    },
  }

  if (isDone) {
    // AppInitializer still thinks the ToU are not signed.
    if (sourceApp?.requestAffiliation) {
      window.location.assign('/authenticated/currentaffiliation')
    } else {
      window.location.assign('/authenticated/accountcreated')
    }
  }
  return (
    <StyledOuterContainer className="TermsOfUsePage">
      <StyledInnerContainer
        sx={{
          width: '1200px',
          '& > div:nth-of-type(1)': {
            paddingTop: theme.spacing(10),
            width: '750px',
          },
          '& > div:nth-of-type(2)': { paddingTop: theme.spacing(10) },
        }}
      >
        <Box
          sx={{
            height: '100%',
            position: 'relative',
          }}
        >
          <Box sx={{ minHeight: '530px' }}>
            <div className={'panel-logo'}>
              <SourceAppLogo />
            </div>
            <div className={'terms-of-use-panel'}>
              <TermsAndConditions
                onFormChange={(completed: boolean) => {
                  setIsFormComplete(completed)
                }}
                hideLinkToFullTC={true}
              />
              <Button
                sx={buttonSx}
                variant="contained"
                onClick={onSignTermsOfUse}
                disabled={isLoading || !isFormComplete}
              >
                Agree and Continue <IconSvg icon="arrowForward" />
              </Button>
              <TermsAndConditionsLink sx={buttonSx} />
            </div>
          </Box>
        </Box>
        <Box>
          <Box sx={{ marginTop: '100px' }}>
            <TermsOfUseRightPanelText />
          </Box>
        </Box>
      </StyledInnerContainer>
    </StyledOuterContainer>
  )
}
