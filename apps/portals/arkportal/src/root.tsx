import {
  createRootMeta,
  Layout,
  links,
} from '@sage-bionetworks/synapse-portal-framework/ssg/root'

export const meta = createRootMeta({
  portalName: import.meta.env.VITE_PORTAL_NAME,
  portalDescription: import.meta.env.VITE_PORTAL_DESCRIPTION,
  portalKey: import.meta.env.VITE_PORTAL_KEY,
})
export { Layout, links }
export { default } from '@sage-bionetworks/synapse-portal-framework/ssg/root'
