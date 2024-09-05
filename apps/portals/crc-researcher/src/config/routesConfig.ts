import { GenericRoute } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'
import RouteControlWrapperProps from './routeControlWrapperProps'

const routes: GenericRoute[] = [
  {
    path: '',
    exact: true,
    synapseConfigArray: [
      {
        name: 'SurveysCompletedPlots',
        isOutsideContainer: true,
        props: {},
      },
      {
        name: 'ParticipantsBarPlot',
        isOutsideContainer: true,
        props: {},
      },
      {
        name: 'StatusLineChart',
        isOutsideContainer: true,
        props: {
          style: { paddingTop: 10, paddingBottom: 50 },
        },
      },
      {
        name: 'SynapsePlot',
        isOutsideContainer: false,
        props: {
          synapsePlotWidgetParams: {
            query:
              'SELECT "date", CONTACT as "New accounts created", survey_1 as "Completed Survey 1", survey_2 as "Completed Survey 2", survey_3 as "Completed Survey 3", survey_4 as "Completed Survey 4" FROM syn22314856',
            title: 'New Participants Per Survey Per Day',
            xtitle: 'Date',
            ytitle: 'Count',
            type: 'scatter',
            horizontal: true,
            // xaxistype:,
            showlegend: true,
          },
        },
      },
    ],
  },
  {
    path: 'Explore',
    routes: [
      {
        path: ':slug/',
        hideRouteFromNavbar: true,
        exact: true,
        synapseConfigArray: [
          {
            name: 'RouteControlWrapper',
            isOutsideContainer: true,
            props: RouteControlWrapperProps,
          },
        ],
      },
      {
        path: '1. Uncategorized',
        hideRouteFromNavbar: false,
      },
      {
        path: '2. Potential',
        hideRouteFromNavbar: false,
      },
      {
        path: '3. Invited',
        hideRouteFromNavbar: false,
      },
      {
        path: '4. Scheduled',
        hideRouteFromNavbar: false,
      },
      {
        path: '5. Tested',
        hideRouteFromNavbar: false,
      },
      {
        path: 'Hidden',
        hideRouteFromNavbar: false,
      },
    ],
  },
]

export default routes
