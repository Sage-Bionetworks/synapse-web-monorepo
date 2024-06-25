import { GenericRoute } from '../types/portal-config'

// Constants used for testing
export const ABOUT_INDEX = 2
export const ORGANIZATION_INDEX = 1
export const HOME_INDEX = 0

const routes: GenericRoute[] = []

routes[ABOUT_INDEX] = {
  exact: true,
  path: 'About',
  synapseConfigArray: [
    {
      title: 'About',
      name: 'Markdown',
      props: {
        ownerId: 'syn7080714',
        wikiId: '470467',
      },
    },
  ],
}

routes[ORGANIZATION_INDEX] = {
  path: 'Organizations',
  routes: [
    {
      path: '',
      exact: true,
      synapseConfigArray: [
        {
          name: 'Markdown',
          props: {
            markdown: '## Hidden on subpage because exact is true',
          },
        },
      ],
    },
    {
      path: '',
      exact: false,
      synapseConfigArray: [
        {
          name: 'Markdown',
          props: {
            markdown: '## Shown on subpage because exact is false',
          },
        },
      ],
    },
    {
      path: 'Content',
      synapseConfigArray: [
        {
          name: 'Markdown',
          props: {
            markdown: '## Content shown when on subpage',
          },
        },
      ],
    },
  ],
}

routes[HOME_INDEX] = {
  path: '',
  exact: true,
  synapseConfigArray: [
    {
      title: 'Some Markdown',
      name: 'Markdown',
      props: {
        markdown: 'Markdown on the home page',
      },
    },
  ],
}

export default routes
