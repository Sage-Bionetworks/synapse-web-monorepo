import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { getEvaluation } from '../utils/SynapseClient'
import { useSynapseContext } from '../utils/SynapseContext'

export type EvaluationIdRendererProps = {
  evaluationId: string
}

const EvaluationIdRenderer: React.FC<EvaluationIdRendererProps> = props => {
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

  return <span ref={ref}>{evaluationName}</span>
}

export default EvaluationIdRenderer
