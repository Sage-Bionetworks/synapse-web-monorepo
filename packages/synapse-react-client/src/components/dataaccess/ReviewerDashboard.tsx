import { Typography } from '@mui/material'
import { ReactNode, useMemo } from 'react'
import {
  createBrowserRouter,
  createMemoryRouter,
  Navigate,
  NavLink,
  Outlet,
  RouteObject,
  RouterProvider,
  useParams,
} from 'react-router-dom'
import { useGetCurrentUserBundle } from '../../synapse-queries/user/useUserBundle'
import { SynapseErrorBoundary } from '../error/ErrorBanner'
import IconSvg, { IconName } from '../IconSvg/IconSvg'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'
import OrientationBanner from '../OrientationBanner'
import { UserHistoryDashboard } from './AccessHistoryDashboard'
import { AccessRequirementDashboard } from './AccessRequirementDashboard'
import { DataAccessSubmissionDashboard } from './AccessSubmissionDashboard'
import SubmissionPage from './SubmissionPage'

function LinkTab(props: { href: string; children: ReactNode; icon: IconName }) {
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
    routerBaseName = '/DataAccessManagement:default',
    useMemoryRouter = false,
  } = props

  const { data: userBundle, isLoading } = useGetCurrentUserBundle()

  const hasActPermissions = userBundle?.isACTMember
  const hasReviewerPermissions =
    userBundle?.isACTMember || userBundle?.isARReviewer

  const routes: RouteObject[] = useMemo(
    () => [
      {
        path: '/',
        element: (
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
                <Outlet />
              </SynapseErrorBoundary>
            </div>
          </div>
        ),
        children: [
          {
            path: 'AccessRequirements',
            element: hasActPermissions ? <AccessRequirementDashboard /> : null,
          },
          {
            path: 'Submissions',
            element: hasReviewerPermissions ? (
              <>
                {!hasActPermissions && (
                  <OrientationBanner
                    name="DataAccessManagement"
                    title="Getting Started With Data Access Management"
                    text="When someone requests access to data, that request will show up here. Clicking on the Request ID will take you to a page where you can review the request."
                    sx={{
                      margin: '-20px -30px 20px -30px',
                      width: 'auto',
                    }}
                  />
                )}
                <DataAccessSubmissionDashboard />
              </>
            ) : null,
          },
          {
            path: 'Submissions/:id',
            element: hasReviewerPermissions ? (
              <SubmissionPageRouteRenderer />
            ) : null,
          },
          {
            path: 'UserAccessHistory',
            element: <UserHistoryDashboard />,
          },
        ],
      },
    ],
    [hasActPermissions, hasReviewerPermissions],
  )

  const router = useMemo(() => {
    if (useMemoryRouter) {
      return createMemoryRouter(routes, {
        basename: routerBaseName,
        future: {
          v7_relativeSplatPath: true,
          v7_fetcherPersist: true,
        },
      })
    } else {
      return createBrowserRouter(routes, {
        basename: routerBaseName,
        future: {
          v7_relativeSplatPath: true,
          v7_fetcherPersist: true,
        },
      })
    }
  }, [useMemoryRouter, routes, routerBaseName])

  if (isLoading) {
    return <SynapseSpinner size={50} />
  }

  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  )
}

function SubmissionPageRouteRenderer() {
  const { id } = useParams<{ id: string }>()
  if (!id) {
    return <Navigate to="Submissions/" />
  }
  return <SubmissionPage submissionId={id} />
}

export default ReviewerDashboard
