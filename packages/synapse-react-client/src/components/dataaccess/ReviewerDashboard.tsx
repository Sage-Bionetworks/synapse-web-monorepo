import React, { useCallback } from 'react'
import {
  BrowserRouter,
  BrowserRouterProps,
  MemoryRouter,
  MemoryRouterProps,
  NavLink,
  Route,
  Switch,
  useParams,
} from 'react-router-dom'
import { useGetCurrentUserBundle } from '../../synapse-queries/user/useUserBundle'
import { Typography } from '@mui/material'
import { SynapseErrorBoundary } from '../error/ErrorBanner'
import IconSvg, { IconName } from '../IconSvg/IconSvg'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'
import { UserHistoryDashboard } from './AccessHistoryDashboard'
import { AccessRequirementDashboard } from './AccessRequirementDashboard'
import { DataAccessSubmissionDashboard } from './AccessSubmissionDashboard'
import SubmissionPage from './SubmissionPage'
import OrientationBanner from '../OrientationBanner'

function LinkTab(props: {
  href: string
  children: React.ReactNode
  icon: IconName
}) {
  const { href, children, icon } = props
  return (
    <NavLink className="Tab" role="tab" to={href}>
      <IconSvg
        icon={icon}
        sx={{
          paddingRight: '0.2rem',
        }}
      />
      <Typography variant="buttonLink">{children}</Typography>
    </NavLink>
  )
}

type ReviewerDashboardProps = {
  /** Used to determine the base path for the component. Default is DataAccessManagement:default */
  routerBaseName?: string
  /** If true use a MemoryRouter, which prevents the browser URL from updating. For demo purposes only. */
  useMemoryRouter?: boolean
}

export function ReviewerDashboard(props: ReviewerDashboardProps) {
  const {
    routerBaseName = 'DataAccessManagement:default',
    useMemoryRouter = false,
  } = props

  const { data: userBundle, isLoading } = useGetCurrentUserBundle()

  const hasActPermissions = userBundle?.isACTMember
  const hasReviewerPermissions =
    userBundle?.isACTMember || userBundle?.isARReviewer

  const Router = useCallback(
    (props: MemoryRouterProps | BrowserRouterProps) => {
      if (useMemoryRouter) {
        return <MemoryRouter {...props} />
      } else {
        return <BrowserRouter {...props} />
      }
    },
    [useMemoryRouter],
  )

  if (isLoading) {
    return <SynapseSpinner size={50} />
  }

  return (
    <Router basename={routerBaseName}>
      <div className="ReviewerDashboard">
        <div className="Tabs" role="tablist">
          {hasActPermissions && (
            <LinkTab href="/AccessRequirements" icon="accessClosed">
              Access Requirements
            </LinkTab>
          )}
          {hasReviewerPermissions && (
            <LinkTab href="/Submissions" icon="discussion">
              Submissions
            </LinkTab>
          )}
          {hasReviewerPermissions && (
            <LinkTab href="/UserAccessHistory" icon="history">
              User Access History
            </LinkTab>
          )}
        </div>
        <div className="TabContentContainer">
          <SynapseErrorBoundary>
            <Switch>
              {hasActPermissions && (
                <Route path="/AccessRequirements">
                  <AccessRequirementDashboard />
                </Route>
              )}
              {hasReviewerPermissions && [
                <Route exact path="/Submissions" key="/Submissions">
                  {!hasActPermissions && (
                    <OrientationBanner
                      name="DataAccessManagement"
                      title="Getting Started With Data Access Management"
                      text="When someone requests access to data, that request will show up here. Clicking on the Request ID will take you to a page where you can review the request."
                      sx={{ margin: '-20px -30px 20px -30px', width: 'auto' }}
                    />
                  )}
                  <DataAccessSubmissionDashboard />
                </Route>,

                <Route path="/Submissions/:id" key="/Submissions/:id">
                  <SubmissionPageRouteRenderer />
                </Route>,
              ]}
              {
                <Route exact path="/UserAccessHistory">
                  <UserHistoryDashboard />
                </Route>
              }
            </Switch>
          </SynapseErrorBoundary>
        </div>
      </div>
    </Router>
  )
}

function SubmissionPageRouteRenderer() {
  const { id } = useParams<{ id: string }>()
  return <SubmissionPage submissionId={id} />
}

export default ReviewerDashboard
