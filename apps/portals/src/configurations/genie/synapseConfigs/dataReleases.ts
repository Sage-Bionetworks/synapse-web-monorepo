import { SynapseConfig } from 'types/portal-config'
import { dataReleasesSql } from '../resources'

const dataReleases: SynapseConfig[] = [
  {
    name: 'Markdown',
    title: 'Latest Data Release',
    props: {
      markdown: 'TODO: replace this with the new Data Release component',
    },
  },
  {
    name: 'Markdown',
    title: 'Previous Data Release',
    props: {
      markdown:
        'The **latest** version of the dataset is readily acccessible for free download, but access to **previous** versions must be requested.',
    },
  },
  {
    name: 'SynapseComponentCollapse',
    props: {
      text: 'View All Data Releases',
      synapseConfig: {
        name: 'StandaloneQueryWrapper',
        title: 'Releases',
        props: {
          visibleColumnCount: 7,
          sql: dataReleasesSql,
        },
      },
    },
  },
]

export default dataReleases
