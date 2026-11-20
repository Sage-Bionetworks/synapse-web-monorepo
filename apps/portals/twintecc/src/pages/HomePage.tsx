import { mergeMeta } from '@sage-bionetworks/synapse-portal-framework/utils/mergeMeta'
import type { MetaArgs, MetaDescriptor } from 'react-router'
import HomeHero from '@/components/HomeHero'
import SupportedByArpaH from '@/components/SupportedByArpaH'

export function meta(args: MetaArgs): MetaDescriptor[] {
  return mergeMeta(args, [
    { title: import.meta.env.VITE_PORTAL_NAME },
    { name: 'description', content: import.meta.env.VITE_PORTAL_DESCRIPTION },
  ])
}

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <SupportedByArpaH />
    </>
  )
}
