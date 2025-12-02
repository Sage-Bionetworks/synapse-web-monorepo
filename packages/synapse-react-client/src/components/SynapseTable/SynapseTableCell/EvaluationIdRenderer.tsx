import { getEvaluation } from '@/synapse-client/SynapseClient'
import { useSynapseContext } from '@/stores/SynapseContext/SynapseContext'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

export type EvaluationIdRendererProps = {
  evaluationId: string
}

function EvaluationIdRenderer(props: EvaluationIdRendererProps) {
  const { accessToken } = useSynapseContext()
  const { evaluationId } = props
  const [evaluationName, setEvaluationName] = useState<string>()
  const { ref, inView } = useInView()
  let mounted: boolean = true

  useEffect(() => {
    if (mounted && inView) {
      getEvaluationQueue()
    }
    return () => {
      mounted = false
    }
  }, [evaluationId, inView])

  const getEvaluationQueue = () => {
    if (!evaluationId) return

    getEvaluation(evaluationId, accessToken)
      .then(evaluationQueue => {
        setEvaluationName(evaluationQueue.name)
      })
      .catch(e => {
        console.log(
          'EvaluationIdListRenderer: Error getting evaluation queue names',
          e,
        )
      })
  }

  return <p ref={ref}>{evaluationName}</p>
}

export default EvaluationIdRenderer
