import { GenericRoute } from 'types/portal-config'
import {
  uncategorized,
  potential,
  invited,
  scheduled,
  tested,
  hidden,
} from './synapseConfigs'
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
          widgetparamsMapped: {
            query:
              'SELECT "date", CONTACT as "New accounts created", survey_1 as "Completed Survey 1", survey_2 as "Completed Survey 2", survey_3 as "Completed Survey 3", survey_4 as "Completed Survey 4" FROM syn22314856',
            title: 'New Participants Per Survey Per Day',
            xtitle: 'Date',
            ytitle: 'Count',
            type: 'scatter',
            horizontal: 'true',
            // xaxistype:,
            showlegend: 'true',
          },
        },
      },
    ],
  },
  {
    path: 'Explore',
    routes: [
      {
        path: '1. Uncategorized',
        exact: true,
        synapseConfigArray: [
          {
            name: 'RouteControlWrapper',
            isOutsideContainer: true,
            props: {
              ...RouteControlWrapperProps,
              synapseConfig: uncategorized,
            },
          },
        ],
      },
      {
        path: '2. Potential',
        exact: true,
        synapseConfigArray: [
          {
            name: 'RouteControlWrapper',
            isOutsideContainer: true,
            props: {
              ...RouteControlWrapperProps,
              synapseConfig: potential,
            },
          },
        ],
      },
      {
        path: '3. Invited',
        exact: true,
        synapseConfigArray: [
          {
            name: 'RouteControlWrapper',
            isOutsideContainer: true,
            props: {
              ...RouteControlWrapperProps,
              synapseConfig: invited,
            },
          },
        ],
      },
      {
        path: '4. Scheduled',
        exact: true,
        synapseConfigArray: [
          {
            name: 'RouteControlWrapper',
            isOutsideContainer: true,
            props: {
              ...RouteControlWrapperProps,
              synapseConfig: scheduled,
            },
          },
        ],
      },
      {
        path: '5. Tested',
        exact: true,
        synapseConfigArray: [
          {
            name: 'RouteControlWrapper',
            isOutsideContainer: true,
            props: {
              ...RouteControlWrapperProps,
              synapseConfig: tested,
            },
          },
        ],
      },
      {
        path: 'Hidden',
        exact: true,
        synapseConfigArray: [
          {
            name: 'RouteControlWrapper',
            isOutsideContainer: true,
            props: {
              ...RouteControlWrapperProps,
              synapseConfig: hidden,
            },
          },
        ],
      },
    ],
  },
]

export default routes
