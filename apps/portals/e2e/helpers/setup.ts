import { getPortal } from '../helpers/portalInfo'

export const tagTestTitle = (title: string) => {
  return `${title} @${getPortal()}`
}
