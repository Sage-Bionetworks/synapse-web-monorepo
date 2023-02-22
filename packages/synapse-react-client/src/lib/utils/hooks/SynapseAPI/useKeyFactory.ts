import { useSynapseContext } from '../../SynapseContext'
import { useMemo } from 'react'
import { KeyFactory } from './KeyFactory'

export default function useKeyFactory(): KeyFactory {
  const { accessToken } = useSynapseContext()

  return useMemo(() => new KeyFactory(accessToken), [accessToken])
}
