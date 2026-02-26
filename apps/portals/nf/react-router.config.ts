import type { Config } from '@react-router/dev/config'

export default {
  appDirectory: 'src',
  ssr: true,
  // Pre-render a small set of static routes at build time.
  // These pages have no dynamic content or authentication requirements, so
  // pre-rendering avoids unnecessary server load. All other routes (detail
  // pages, search, etc.) are server-rendered on demand.
  async prerender() {
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
