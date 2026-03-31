import { useInRouterContext, Link as ReactRouterLink } from 'react-router'
import { isExternalLink } from '@/utils/functions/IsExternalLink'

export function useSmartLink(href?: string, target?: string) {
  const inRouterContext = useInRouterContext()
  const isExternal = href ? isExternalLink(href) : false

  if (href && inRouterContext && !isExternal) {
    return {
      component: ReactRouterLink,
      to: href,
    }
  }

  return {
    component: href ? ('a' as const) : undefined,
    href,
    target: target ?? (isExternal ? '_blank' : undefined),
    rel: isExternal ? 'noopener noreferrer' : undefined,
  }
}
