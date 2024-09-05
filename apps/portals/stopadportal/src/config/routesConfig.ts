import { GenericRoute } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'

const routes: GenericRoute[] = [
  {
    path: '',
    exact: true,
    synapseConfigArray: [
      {
        name: 'Markdown',
        containerClassName: 'stop-ad-home-page',
        props: {
          ownerId: 'syn20717442',
          wikiId: '595390',
        },
      },
    ],
  },
  {
    path: 'Apply',
    routes: [
      {
        path: '',
        exact: true,
        hideRouteFromNavbar: true,
        synapseConfigArray: [
          {
            name: 'Markdown',
            props: {
              ownerId: 'syn20717442',
              wikiId: '595813',
            },
          },
          {
            name: 'SynapseFormSubmissionGrid',
            props: {
              pathpart: '/Apply/FormSubmission',
              formGroupId: '9',
              itemNoun: 'Compound',
              formClass: 'drug-upload-tool',
            },
          },
        ],
      },
      {
        exact: true,
        hideRouteFromNavbar: true,
        path: 'FormSubmission',
        synapseConfigArray: [
          {
            name: 'SynapseFormWrapper',
            props: {
              formSchemaEntityId: 'syn20680102',
              fileNamePath: 'naming.compound_name',
              formUiSchemaEntityId: 'syn20693568',
              formNavSchemaEntityId: 'syn20680027',
              formTitle: 'Your Submission',
              formClass: 'drug-upload-tool',
            },
          },
        ],
      },
    ],
  },
  {
    path: 'Help',
    routes: [
      {
        path: 'How It Works',
        synapseConfigArray: [
          {
            name: 'Markdown',
            title: 'How It Works',
            props: {
              ownerId: 'syn20717442',
              wikiId: '595391',
            },
          },
        ],
      },
      {
        path: 'Data Requirements',
        synapseConfigArray: [
          {
            name: 'Markdown',
            title: 'Data Requirements',
            props: {
              ownerId: 'syn20717442',
              wikiId: '595544',
            },
          },
        ],
      },
    ],
  },
  {
    path: 'Terms',
    exact: true,
    hideRouteFromNavbar: true,
    synapseConfigArray: [
      {
        name: 'Markdown',
        props: {
          ownerId: 'syn20717442',
          wikiId: '596040',
        },
      },
    ],
  },
  // https://www.synapse.org/Synapse:syn20717442/wiki/596047
  {
    path: 'Contact Us',
    exact: true,
    hideRouteFromNavbar: true,
    synapseConfigArray: [
      {
        name: 'Markdown',
        props: {
          ownerId: 'syn20717442',
          wikiId: '596047',
        },
      },
    ],
  },
]

export default routes
