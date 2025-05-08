import { results } from '@/config/synapseConfigs/results'
import { Markdown } from 'synapse-react-client/components/Markdown/MarkdownSynapse'

function ExploreResults() {
  return (
    <div style={results.style}>
      <Markdown {...results.props} />
    </div>
  )
}

export default ExploreResults
