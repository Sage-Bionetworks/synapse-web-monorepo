import { DetailsPageTabConfig } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageTabs'

export const OVERVIEW_PATH = 'Overview'
export const INSTRUCTIONS_PATH = 'Instructions'
export const NEWS_PATH = 'News'
export const COMMUNITY_PATH = 'Community'

export const challengeDetailsPageTabConfig: DetailsPageTabConfig[] = [
  {
    title: 'Overview',
    path: OVERVIEW_PATH,
    tooltip: 'Challenge overview',
  },
  {
    title: 'Instructions',
    path: INSTRUCTIONS_PATH,
  },
  {
    title: 'Task 1',
    path: 'Task1',
    // specify a column that determines visibility.  For this case, set to a required Task0 annotation (description)
    hideIfColumnValueNull: 'Task_1.Description',
  },

  {
    title: 'Task 2',
    path: 'Task2',
    hideIfColumnValueNull: 'Task_2.Description',
  },
  {
    title: 'Task 3',
    path: 'Task3',
    hideIfColumnValueNull: 'Task_3.Description',
  },
  {
    title: 'Task 4',
    path: 'Task4',
    hideIfColumnValueNull: 'Task_4.Description',
  },
  {
    title: 'Task 5',
    path: 'Task5',
    hideIfColumnValueNull: 'Task_5.Description',
  },
  {
    title: 'News',
    path: NEWS_PATH,
    hideIfColumnValueNull: 'Announcements',
  },
  {
    title: 'Community',
    path: COMMUNITY_PATH,
  },
]
