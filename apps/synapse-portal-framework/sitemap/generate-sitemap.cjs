const fs = require('fs')

const fileNameCandidates = ['routesConfig.ts', 'routesConfig.tsx']

let fileName = ''
let i = 0
for (let i = 0; i < fileNameCandidates.length; i++) {
  if (fs.existsSync(`src/config/${fileNameCandidates[i]}`)) {
    fileName = fileNameCandidates[i]
    break
  }
}

fs.readFile(`src/config/${fileName}`, (err, data) => {
  if (err) {
    return console.error(err)
  }
  let routesConfigContent = data.toString()
  const args = process.argv.slice(2)
  if (!args[0]) {
    return console.error(
      'Usage: node generate-sitemap.cjs [portal-name]\n Note: sitemap.xml assumes portal is hosted on [portal-name].synapse.org',
    )
  }

  // strip surrounding double quotes (if exist)
  const portalName = args[0].replace(/^"|"$/g, '')
  const baseUrl = `https://${portalName}.synapse.org`
  const now = new Date().toISOString()
  let fileContent =
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
  var regex = /^(\s*)path:\s*'(.*)'/gm
  var m
  // Discover the paths by relying on the linter to set up the spaces correctly, then we find all of the "path" entries in the routesConfig file
  var currentNestedPath = new Array(100)
  var previousNestingSpaceCount = -1
  do {
    m = regex.exec(routesConfigContent)
    // m[1] contains the leading spaces
    // m[2] contains the target path
    if (m) {
      const spaceCount = m[1].length
      let newPath = `${m[2]}`.replaceAll(' ', '%20')
      if (spaceCount <= previousNestingSpaceCount) {
        //reset from space count
        currentNestedPath.forEach((_value, index) => {
          if (index >= spaceCount) {
            currentNestedPath[index] = undefined;
          }
      })
        currentNestingSpaceCount = 0
      }
      previousNestingSpaceCount = spaceCount
      currentNestedPath[spaceCount] = newPath
      const currentPath = currentNestedPath.filter(value => value !== undefined).join('/')
      console.log(`newPath: '${newPath}'`)
      if (!newPath.match('^[:]slug.*')) {
        fileContent += `\t<url>\n\t\t<loc>${baseUrl}/${currentPath}</loc>\n\t\t<lastmod>${now}</lastmod>\n\t</url>\n`
      }
    }
  } while (m)
  fileContent += '</urlset>'
  fs.writeFile('build/sitemap.xml', fileContent, (err) => {
    if (err) {
      console.error(err)
      throw err
    }
    console.log('Generated build/sitemap.xml')
  })
})
