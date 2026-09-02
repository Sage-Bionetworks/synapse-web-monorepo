import * as fs from 'fs'
import * as path from 'path'

const staticRoutes = [
  '/',
  '/About',
  '/Data%20Access',
  '/Explore/Programs',
  '/Explore/Projects',
  '/Explore/Collections',
  '/Explore/Datasets',
  '/Explore/Publications',
  '/Explore/All%20Data',
]

const outputPath = path.join(process.cwd(), 'build', 'sitemap-routes.json')
const dir = path.dirname(outputPath)
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
fs.writeFileSync(outputPath, JSON.stringify(staticRoutes, null, 2))
console.log(`Wrote ${staticRoutes.length} routes to ${outputPath}`)
