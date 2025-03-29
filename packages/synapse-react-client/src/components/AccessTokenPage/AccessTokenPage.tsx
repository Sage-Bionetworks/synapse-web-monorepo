import { useGetPersonalAccessTokensInfinite } from '@/synapse-queries/user/usePersonalAccessToken'
import { AddCircleTwoTone } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import { ReactNode, useState } from 'react'
import { ErrorBanner, SynapseErrorBoundary } from '../error/ErrorBanner'
import loadingScreen from '../LoadingScreen/LoadingScreen'
import { AccessTokenCard } from './AccessTokenCard/AccessTokenCard'
import { CreateAccessTokenModal } from './CreateAccessTokenModal'

export type AccessTokenPageProps = {
  title: string
  body: ReactNode
}

export function AccessTokenPage({ title, body }: AccessTokenPageProps) {
  const [showCreateTokenModal, setShowCreateTokenModal] = useState(false)

  const {
    data: infiniteData,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
  } = useGetPersonalAccessTokensInfinite()

  const tokenRecords = infiniteData?.pages.flatMap(page => page.results) ?? []

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <Box flexGrow={1}>
          <h1>{title}</h1>
          {body}
        </Box>
        <Box
          sx={theme => ({
            flexShrink: 0,
            alignSelf: 'end',
            [theme.breakpoints.down('md')]: { width: '100%' },
          })}
        >
          <Button
            sx={theme => ({
              [theme.breakpoints.down('md')]: { width: '100%' },
            })}
            variant="contained"
            color="primary"
            onClick={() => setShowCreateTokenModal(true)}
            startIcon={<AddCircleTwoTone />}
          >
            Create New Token
          </Button>
        </Box>
      </Box>
      <SynapseErrorBoundary>
        {showCreateTokenModal && (
          <CreateAccessTokenModal
            onClose={() => setShowCreateTokenModal(false)}
          />
        )}

        <div>
          {!isLoading && !error && tokenRecords.length === 0 && (
            <Typography variant={'headline2'} m={5} textAlign={'center'}>
              You currently have no personal access tokens.
            </Typography>
          )}
          <Box maxWidth={'800px'} mx={'auto'} my={2.5}>
            {tokenRecords.map(accessToken => {
              return (
                <AccessTokenCard
                  key={accessToken.id}
                  accessToken={accessToken}
                />
              )
            })}
            {isLoading && loadingScreen}
            {!isLoading && hasNextPage && !error && (
              <Box display={'flex'} justifyContent={'flex-end'}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    fetchNextPage()
                  }}
                >
                  Load More
                </Button>
              </Box>
            )}
          </Box>
          {error && <ErrorBanner error={error}></ErrorBanner>}
        </div>
      </SynapseErrorBoundary>
    </div>
  )
}
