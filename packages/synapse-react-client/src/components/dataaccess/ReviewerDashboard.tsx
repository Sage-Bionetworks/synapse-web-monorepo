import { useGetCurrentUserBundle } from '@/synapse-queries/user/useUserBundle'
import { DynamicFormOutlined } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
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
} from 'react-router'
import { RouterProvider as DOMRouterProvider } from 'react-router/dom'
import { SynapseErrorBoundary } from '../error/ErrorBanner'
import IconSvg from '../IconSvg/IconSvg'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'
import OrientationBanner from '../OrientationBanner'
import { UserHistoryDashboard } from './AccessHistoryDashboard'
import { AccessRequirementDashboard } from './AccessRequirementDashboard'
import { DataAccessSubmissionDashboard } from './AccessSubmissionDashboard'
import { EDucTemplateTable } from './EDucTemplateTable'
import { FormTemplateEditorRoute } from './FormTemplateEditorRoute'
import {
  FORM_TEMPLATE_ROUTE,
  FORM_TEMPLATES_PATH,
  FORM_TEMPLATES_ROUTE,
  FormTemplateTable,
  NEW_FORM_TEMPLATE_ROUTE,
} from './FormTemplateTable'
import SubmissionPage from './SubmissionPage/SubmissionPage'

function LinkTab(props: {
  href: string
  children: ReactNode
  icon: ReactNode
}) {
  const { href, children, icon } = props
  return (
    <NavLink className="Tab" role="tab" to={href}>
      <Box
        component="span"
        sx={{ display: 'inline-flex', paddingRight: '0.2rem' }}
      >
        {icon}
      </Box>
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
                <LinkTab
                  href="/AccessRequirements"
                  icon={<IconSvg icon="accessClosed" />}
                >
                  Access Requirements
                </LinkTab>
              )}
              {hasActPermissions && (
                <LinkTab
                  href="/EDucTemplates"
                  icon={<IconSvg icon="fileOutlined" />}
                >
                  eDUC Templates
                </LinkTab>
              )}
              {hasActPermissions && (
                <LinkTab
                  href={FORM_TEMPLATES_PATH}
                  icon={<DynamicFormOutlined />}
                >
                  Form Templates
                </LinkTab>
              )}
              {hasReviewerPermissions && (
                <LinkTab
                  href="/Submissions"
                  icon={<IconSvg icon="discussion" />}
                >
                  Submissions
                </LinkTab>
              )}
              {hasReviewerPermissions && (
                <LinkTab
                  href="/UserAccessHistory"
                  icon={<IconSvg icon="history" />}
                >
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
            path: 'EDucTemplates',
            element: hasActPermissions ? <EDucTemplateTable /> : null,
          },
          {
            path: FORM_TEMPLATES_ROUTE,
            element: hasActPermissions ? <FormTemplateTable /> : null,
          },
          {
            path: NEW_FORM_TEMPLATE_ROUTE,
            element: hasActPermissions ? <FormTemplateEditorRoute /> : null,
          },
          {
            path: FORM_TEMPLATE_ROUTE,
            element: hasActPermissions ? <FormTemplateEditorRoute /> : null,
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
      })
    } else {
      return createBrowserRouter(routes, {
        basename: routerBaseName,
      })
    }
  }, [useMemoryRouter, routes, routerBaseName])

  if (isLoading) {
    return <SynapseSpinner size={50} />
  }

  if (useMemoryRouter) {
    return <RouterProvider router={router} />
  }

  return <DOMRouterProvider router={router} />
}

function SubmissionPageRouteRenderer() {
  const { id } = useParams<{ id: string }>()
  if (!id) {
    return <Navigate to="Submissions/" />
  }
  return <SubmissionPage submissionId={id} isReviewer={true} />
}

export default ReviewerDashboard
