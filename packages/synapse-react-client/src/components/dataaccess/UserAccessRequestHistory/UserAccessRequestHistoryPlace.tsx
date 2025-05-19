import {
  BreadcrumbItem,
  Breadcrumbs,
} from '@/components/Breadcrumbs/Breadcrumbs'
import { Box } from '@mui/material'
import { useMemo } from 'react'
import {
  createBrowserRouter,
  createMemoryRouter,
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  useLocation,
  useParams,
} from 'react-router'
import { RouterProvider as DOMRouterProvider } from 'react-router/dom'
import SubmissionPage from '../SubmissionPage/SubmissionPage'
import {
  SUBMISSION_ID_PARAM,
  USER_ACCESS_HISTORY_SUBMISSION_SUBPATH,
} from './RouteConstants'
import { UserAccessRequestHistoryPage } from './UserAccessRequestHistoryPage'

type ReviewerDashboardProps = {
  /** Used to determine the base path for the component. Default is RequestHistory:default */
  routerBaseName?: string
  /** If true use a MemoryRouter, which prevents the browser URL from updating. For demo/test purposes only. */
  useMemoryRouter?: boolean
}

function UserSubmissionPageRouteRenderer() {
  const { submissionId } = useParams<{ [SUBMISSION_ID_PARAM]: string }>()
  if (!submissionId) {
    return <Navigate to="/" />
  }
  return <SubmissionPage submissionId={submissionId} isReviewer={false} />
}

/**
 * Layout for UserAccessRequestHistory pages. Includes header with title.
 * @constructor
 */
function UserAccessRequestHistoryPageLayout() {
  return (
    <>
      <div className="pageHeader">
        <div className="grid">
          <h3 className="pageHeaderTitle">Access Requests</h3>
        </div>
      </div>
      <Box sx={{ px: 5, py: 3 }}>
        <Outlet />
      </Box>
    </>
  )
}

/**
 * Breadcrumb layout for UserAccessRequestHistory pages. Displays breadcrumbs for navigation.
 */
function UserAccessRequestHistoryBreadcrumbLayout() {
  const { submissionId } = useParams<{ [SUBMISSION_ID_PARAM]: string }>()
  const location = useLocation()

  const breadcrumbItems: BreadcrumbItem[] = [
    {
      text: 'Access Request History',
      to: '/',
      current: location.pathname === '/',
    },
  ]
  if (submissionId) {
    const submissionPath = `/${USER_ACCESS_HISTORY_SUBMISSION_SUBPATH}/${submissionId}`
    breadcrumbItems.push({
      text: `Request #${submissionId}`,
      to: submissionPath,
      current: location.pathname === submissionPath,
    })
  }

  return (
    <>
      <Breadcrumbs
        items={breadcrumbItems}
        sx={{
          mt: 2,
          mb: 4,
          ['& .MuiLink-root']: {
            color: 'text.secondary',
            letterSpacing: 0,
            '&:visited': {
              color: 'text.secondary',
            },
          },
          '& .MuiSvgIcon-root': {
            color: 'grey.500',
          },
        }}
      />
      <Outlet />
    </>
  )
}

const routes: RouteObject[] = [
  {
    element: <UserAccessRequestHistoryPageLayout />,
    children: [
      {
        path: '/',
        children: [
          { index: true, element: <UserAccessRequestHistoryPage /> },
          {
            // Do not display the breadcrumbs on the `index` page
            element: <UserAccessRequestHistoryBreadcrumbLayout />,
            children: [
              {
                path: `${USER_ACCESS_HISTORY_SUBMISSION_SUBPATH}`,
                children: [
                  {
                    path: `:${SUBMISSION_ID_PARAM}`,
                    element: <UserSubmissionPageRouteRenderer />,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]

/**
 * Component that renders User Access Request history table & submission page. Handles routing internally.
 */
export function UserAccessRequestHistoryPlace(props: ReviewerDashboardProps) {
  const {
    routerBaseName = '/RequestHistory:default',
    useMemoryRouter = false,
  } = props

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
  }, [useMemoryRouter, routerBaseName])

  if (useMemoryRouter) {
    return <RouterProvider router={router} />
  }

  return <DOMRouterProvider router={router} />
}

export default UserAccessRequestHistoryPlace
