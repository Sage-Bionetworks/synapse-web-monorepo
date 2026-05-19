import {
  createLayout,
  createRootMeta,
  links,
} from '@sage-bionetworks/synapse-portal-framework/ssg/root'

export const meta = createRootMeta({
  portalName: import.meta.env.VITE_PORTAL_NAME,
  portalDescription: import.meta.env.VITE_PORTAL_DESCRIPTION,
  portalKey: import.meta.env.VITE_PORTAL_KEY,
})

export const Layout = createLayout({
  headChildren: (
    <script
      data-jsd-embedded
      data-key="885c2536-2aaa-4f84-a9af-f39f15d44e4a"
      data-base-url="https://jsd-widget.atlassian.com"
      src="https://jsd-widget.atlassian.com/assets/embed.js"
    />
  ),
})

export { links }
export { default } from '@sage-bionetworks/synapse-portal-framework/ssg/root'
