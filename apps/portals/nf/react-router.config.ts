import type { Config } from '@react-router/dev/config'

export default {
  appDirectory: 'src',
  ssr: false, // static pre-render only; no Node server required
  async prerender() {
    // Phase 1: static list routes only.
    // Phase 2 (P2.2) will expand this with dynamic detail page routes.
    return [
      '/',
      '/Explore/Studies',
      '/Explore/Datasets',
      '/Explore/Files',
      '/Explore/Publications',
      '/Explore/Tools',
      '/Explore/Initiatives',
      '/Explore/Hackathon',
      '/Research Tools Central/Browse Tools',
      '/Search',
    ]
  },
} satisfies Config
