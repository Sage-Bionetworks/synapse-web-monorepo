import React from 'react'
import { useLocation } from 'react-router-dom'
import { RowSynapseConfig } from '../../types/portal-util-types'
import { scrollToWithOffset } from '../../utils'

export function getComponentId(
  rowSynapseConfig: RowSynapseConfig,
  entityTitle: string = '',
) {
  // The ID should consist of the title and entity title
  const idParts = [rowSynapseConfig.title, entityTitle].filter(item => !!item)

  // If both of the above are empty or undefined, use the component name
  if (idParts.length === 0 && rowSynapseConfig.name) {
    idParts.push(rowSynapseConfig.name)
  }

  // Join the parts with a '-'. If there are no parts, return an empty string.
  return (
    idParts
      .join('-')
      // Remove illegal characters for HTML5 IDs
      .replaceAll(/([^\d\w-])/g, '')
  )
}

export function useScrollOnMount() {
  const scrolledRef = React.useRef(false)
  const { hash } = useLocation()

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (hash) {
        const id = hash.replace('#', '')
        const element = document.getElementById(id)
        if (element) {
          scrollToWithOffset(element)
          scrolledRef.current = true
        }
      }
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
    // Empty dependency array to intentionally run only on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
