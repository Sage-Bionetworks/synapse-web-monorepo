import React, { useState } from 'react'
import { Button } from '@mui/material'
import { useGetPersonalAccessTokensInfinite } from '../../synapse-queries/user/usePersonalAccessToken'
import { ErrorBanner, SynapseErrorBoundary } from '../error/ErrorBanner'
import loadingScreen from '../LoadingScreen'
import { AccessTokenCard } from './AccessTokenCard'
import { CreateAccessTokenModal } from './CreateAccessTokenModal'

export type AccessTokenPageProps = {
  title: string
  body: string | JSX.Element
}

export const AccessTokenPage: React.FunctionComponent<AccessTokenPageProps> = ({
  title,
  body,
}: AccessTokenPageProps) => {
  const [showCreateTokenModal, setShowCreateTokenModal] = useState(false)

  const {
    data: infiniteData,
    isLoading,
    error,
    refetch,
    fetchNextPage,
    hasNextPage,
  } = useGetPersonalAccessTokensInfinite()

  // We rerender the list whenever a token is created or deleted to ensure we are up-to-date
  const rerenderList = () => {
    refetch()
  }

  const tokenRecords = infiniteData?.pages.flatMap(page => page.results) ?? []

  return (
    <div className="PersonalAccessTokenPage">
      <div className="PersonalAccessTokenPage__Header">
        <div className="PersonalAccessTokenPage__Header__CopyText">
          <h1>{title}</h1>
          {body}
        </div>
        <div className="PersonalAccessTokenPage__Header__CreateButton">
          <Button
            variant="contained"
            color="primary"
            onClick={() => setShowCreateTokenModal(true)}
          >
            Create New Token
          </Button>
        </div>
      </div>
      <SynapseErrorBoundary>
        {showCreateTokenModal && (
          <CreateAccessTokenModal
            onClose={() => setShowCreateTokenModal(false)}
            onCreate={rerenderList}
          ></CreateAccessTokenModal>
        )}

        <div>
          {!isLoading && tokenRecords.length === 0 && (
            <div className="PersonalAccessTokenPage__NoTokensMessage SRC-text-title">
              You currently have no personal access tokens.
            </div>
          )}
          <div className="PersonalAccessTokenPage__CardList">
            {tokenRecords.map(accessToken => {
              return (
                <AccessTokenCard
                  key={accessToken.id}
                  accessToken={accessToken}
                  onDelete={rerenderList}
                />
              )
            })}
            {isLoading && loadingScreen}
            {!isLoading && hasNextPage && !error && (
              <div className="PersonalAccessTokenPage__CardList__LoadMore">
                <Button
                  className="PersonalAccessTokenPage__CardList__LoadMore__Button"
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    fetchNextPage()
                  }}
                >
                  Load More
                </Button>
              </div>
            )}
          </div>
          {error && <ErrorBanner error={error}></ErrorBanner>}
        </div>
      </SynapseErrorBoundary>
    </div>
  )
}
