import { SynapseConfig } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'

export const results: SynapseConfig = {
  name: 'Markdown',
  // https://www.synapse.org/Synapse:syn12666371/wiki/595383
  props: {
    ownerId: 'syn12666371',
    wikiId: '595383',
  },
  style: {
    border: '1px solid #C4C4C4',
    marginTop: 30,
  },
}
