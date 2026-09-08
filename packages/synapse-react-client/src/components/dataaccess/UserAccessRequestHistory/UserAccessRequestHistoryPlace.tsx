import {
  BreadcrumbItem,
  Breadcrumbs,
} from '@/components/Breadcrumbs/Breadcrumbs'
import { useListAllUserDataAccessRequests } from '@/synapse-queries'
import { useGetAccessRequirements } from '@/synapse-queries/dataaccess/useAccessRequirements'
import { AuthenticationGuard } from '@/utils/AppUtils'
import { Box } from '@mui/material'
import { ManagedACTAccessRequirement } from '@sage-bionetworks/synapse-types'
import { useMemo } from 'react'
import {
  createBrowserRouter,
  createMemoryRouter,
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router'
import { RouterProvider as DOMRouterProvider } from 'react-router/dom'
import AccessRequirementList, {
  RequestDataStep,
} from '../../AccessRequirementList/AccessRequirementList'
import SubmissionPage from '../SubmissionPage/SubmissionPage'
import {
  REQUEST_ID_PARAM,
  SUBMISSION_ID_PARAM,
  USER_ACCESS_HISTORY_REQUEST_SIGNATURE_SUBPATH,
  USER_ACCESS_HISTORY_REQUEST_SUBPATH,
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
 * Deep-link route element for `/request/:requestId/signature`. Rendered inside
 * `UserAccessRequestHistoryPage`'s `<Outlet />` so the page stays mounted while the dialog is open.
 * Looks up the request in the user's own access-request list, then mounts the signature-status
 * wizard step for the AR. Requests that don't belong to the user (or don't exist) redirect back
 * to the history index. The surrounding `AuthenticationGuard` handles unauthenticated visitors.
 */
function RequestSignatureRouteRenderer() {
  const { requestId } = useParams<{ [REQUEST_ID_PARAM]: string }>()
  const navigate = useNavigate()

  const { data: summaries, isLoading: isLoadingSummaries } =
    useListAllUserDataAccessRequests()
  const summary = summaries?.find(s => s.requestId === requestId)
  const accessRequirementId = summary?.accessRequirementId

  const { data: accessRequirement, isLoading: isLoadingAr } =
    useGetAccessRequirements<ManagedACTAccessRequirement>(
      accessRequirementId ?? '',
      { enabled: Boolean(accessRequirementId), staleTime: Infinity },
    )

  // Wait for the summary + AR to load before mounting the dialog. `UserAccessRequestHistoryPage`
  // renders its own skeletons in the meantime, so no visible spinner is needed here.
  if (isLoadingSummaries || (accessRequirementId && isLoadingAr)) {
    return null
  }

  // Summary not found in the user's own requests, or its access requirement failed to load.
  if (!summary || !accessRequirementId || !accessRequirement) {
    return <Navigate to="/" replace />
  }

  return (
    <AccessRequirementList
      renderAsModal
      onHide={() => {
        void navigate('/')
      }}
      initialWizardEntry={{
        step: RequestDataStep.SIGNATURE_STATUS,
        managedACTAccessRequirement: accessRequirement,
      }}
    />
  )
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
          {
            // Keep the history page mounted across the index ↔ signature-deep-link transition.
            element: <UserAccessRequestHistoryPage />,
            children: [
              { index: true, element: null },
              {
                path: `${USER_ACCESS_HISTORY_REQUEST_SUBPATH}/:${REQUEST_ID_PARAM}/${USER_ACCESS_HISTORY_REQUEST_SIGNATURE_SUBPATH}`,
                element: (
                  <AuthenticationGuard>
                    <RequestSignatureRouteRenderer />
                  </AuthenticationGuard>
                ),
              },
            ],
          },
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
