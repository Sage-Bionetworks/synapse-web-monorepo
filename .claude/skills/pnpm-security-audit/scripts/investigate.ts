#!/usr/bin/env tsx
/**
 * investigate.ts — Vulnerability Investigation Helper
 *
 * For a vulnerable package, traces all dependency chains, checks each
 * immediate parent's declared range, and recommends the best fix strategy.
 *
 * Usage (run from monorepo root):
 *   npx tsx .claude/skills/pnpm-security-audit/scripts/investigate.ts <package> <patched-version> [vulnerable-range]
 *
 * The optional vulnerable-range scopes which installed versions are considered
 * vulnerable. Use this when a CVE affects only a specific version range (e.g.
 * ">=4.0.0 <4.0.4") so that installs outside that range aren't incorrectly
 * flagged. Without it, any version below patched-version is treated as vulnerable.
 *
 * Examples:
 *   npx tsx .claude/skills/pnpm-security-audit/scripts/investigate.ts flatted 3.4.2
 *   npx tsx .claude/skills/pnpm-security-audit/scripts/investigate.ts minimatch 3.1.4
 *   npx tsx .claude/skills/pnpm-security-audit/scripts/investigate.ts picomatch 4.0.4 ">=4.0.0 <4.0.4"
 */

import { spawnSync } from 'node:child_process'
import semver from 'semver'

const [pkg, patchedVersion, vulnerableRange] = process.argv.slice(2)

if (!pkg || !patchedVersion) {
  console.error(
    'Usage: npx tsx investigate.ts <package-name> <patched-version> [vulnerable-range]',
  )
  process.exit(1)
}

// Basic validation: package names and versions should only contain safe chars.
// This is a developer tool, but we still avoid shell injection via spawnSync.
const PKG_RE = /^(@[a-z0-9_.-]+\/)?[a-z0-9_.-]+$/i

if (!PKG_RE.test(pkg)) {
  console.error(`Invalid package name: ${pkg}`)
  process.exit(1)
}
if (!semver.valid(patchedVersion)) {
  console.error(`Invalid version: ${patchedVersion}`)
  process.exit(1)
}
if (vulnerableRange && !semver.validRange(vulnerableRange)) {
  console.error(`Invalid vulnerable range: ${vulnerableRange}`)
  process.exit(1)
}

// ---------------------------------------------------------------------------
// Workspace package detection — fetched once, used to flag parents that are
// local workspace packages (pnpm info returns registry data for those, which
// won't reflect local changes and makes overrides look necessary when a direct
// package.json edit is the right fix).
// ---------------------------------------------------------------------------

function getWorkspacePackageNames(): Set<string> {
  try {
    const result = spawnSync(
      'pnpm',
      ['list', '--recursive', '--depth', '0', '--json'],
      { encoding: 'utf8', timeout: 30_000 },
    )
    const parsed = JSON.parse(result.stdout ?? '[]') as Array<{
      name?: string
    }>
    return new Set(parsed.map(p => p.name).filter(Boolean) as string[])
  } catch {
    return new Set()
  }
}

const workspacePackages = getWorkspacePackageNames()

function satisfies(version: string, range: string): boolean | null {
  const coerced = semver.coerce(version)
  if (!coerced) return null
  try {
    return semver.satisfies(coerced, range)
  } catch {
    return null
  }
}

// ---------------------------------------------------------------------------
// Shell helpers — use spawnSync with argument arrays to avoid shell injection.
// ---------------------------------------------------------------------------

function runStdout(args: string[]): string {
  const result = spawnSync('pnpm', args, { encoding: 'utf8', timeout: 30_000 })
  return result.stdout ?? ''
}

function runJSON(args: string[]): Record<string, unknown> | null {
  try {
    return JSON.parse(runStdout(args)) as Record<string, unknown>
  } catch {
    return null
  }
}

function allDeps(info: Record<string, unknown> | null): Record<string, string> {
  const deps = (info?.dependencies ?? {}) as Record<string, string>
  const peers = (info?.peerDependencies ?? {}) as Record<string, string>
  return { ...deps, ...peers }
}

function isPeerDep(info: Record<string, unknown> | null, dep: string): boolean {
  const peers = (info?.peerDependencies ?? {}) as Record<string, string>
  return dep in peers
}

// ---------------------------------------------------------------------------
// Parse `pnpm why <pkg> --recursive --json` output.
//
// JSON format: Array of { name, version, path, dependents: [...] }
// Each top-level entry = one installed version of the package.
// entry.dependents = immediate parents (depth 0), each with nested dependents
// forming the full chain up to workspace root packages.
// Leaf nodes (workspace packages) have a `depField` property.
// ---------------------------------------------------------------------------

interface WhyJsonDependent {
  name: string
  version: string
  depField?: string
  deduped?: boolean
  circular?: boolean
  peersSuffixHash?: string
  dependents?: WhyJsonDependent[]
}

interface WhyJsonEntry {
  name: string
  version: string
  path: string
  dependents: WhyJsonDependent[]
}

interface Parent {
  name: string
  version: string
  isDev: boolean
}

interface VersionBlock {
  installedVersion: string
  parents: Parent[]
}

/** Check if all leaf paths from a node reach only devDependencies. */
function isDevOnly(node: WhyJsonDependent): boolean {
  if (node.depField) return node.depField === 'devDependencies'
  const all = node.dependents ?? []
  const meaningful = all.filter(d => !d.deduped && !d.circular)
  // Deduped/circular nodes are stubs — they carry no depField and no subtree,
  // so we can't determine their dev/prod status. If any were dropped, we don't
  // have complete information and must conservatively assume prod.
  if (meaningful.length < all.length) return false
  if (meaningful.length === 0) return false
  return meaningful.every(d => isDevOnly(d))
}

function parseWhyJson(entries: WhyJsonEntry[]): VersionBlock[] {
  return entries.map(entry => ({
    installedVersion: entry.version,
    parents: (entry.dependents ?? []).map(d => ({
      name: d.name,
      version: d.version,
      isDev: isDevOnly(d),
    })),
  }))
}

// ---------------------------------------------------------------------------
// Output helpers
// ---------------------------------------------------------------------------

const bold = (s: string) => `\x1b[1m${s}\x1b[0m`
const green = (s: string) => `\x1b[32m${s}\x1b[0m`
const red = (s: string) => `\x1b[31m${s}\x1b[0m`
const yellow = (s: string) => `\x1b[33m${s}\x1b[0m`
const dim = (s: string) => `\x1b[2m${s}\x1b[0m`

const icon = (ok: boolean | null) =>
  ok === true ? green('✅') : ok === false ? red('❌') : yellow('❓')

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

console.log(`\n${bold(`🔍 ${pkg}`)}  (patched: >= ${patchedVersion})\n`)

const whyJson = runStdout(['why', pkg, '--recursive', '--json'])

let whyData: WhyJsonEntry[]
try {
  whyData = JSON.parse(whyJson) as WhyJsonEntry[]
} catch {
  if (whyJson.includes('is not in the dependency graph') || !whyJson.trim()) {
    console.log(green(`  ✅ ${pkg} is not installed — nothing to do.\n`))
    process.exit(0)
  }
  console.log(yellow('  ⚠️  Could not parse pnpm why --json output. Raw:'))
  console.log(whyJson)
  process.exit(1)
}

if (whyData.length === 0) {
  console.log(green(`  ✅ ${pkg} is not installed — nothing to do.\n`))
  process.exit(0)
}

const blocks = parseWhyJson(whyData)

const seenParent = new Set<string>()

for (const block of blocks) {
  // If a vulnerableRange is provided, a version is only vulnerable if it falls
  // within that range. Without it, anything below patchedVersion is vulnerable.
  // This matters when a CVE affects a specific range (e.g. ">=4.0.0 <4.0.4") —
  // older major versions have their own separate vulnerability status and
  // shouldn't be flagged as needing the 4.x patch.
  const isInVulnerableRange = vulnerableRange
    ? semver.satisfies(block.installedVersion, vulnerableRange) ?? false
    : true
  const isPatched = isInVulnerableRange
    ? satisfies(block.installedVersion, `>=${patchedVersion}`)
    : true // outside the vulnerable range → not affected by this CVE
  const label =
    isPatched === false
      ? red(' VULNERABLE')
      : isPatched === true
      ? green(' patched')
      : ''
  console.log(
    `  ${icon(isPatched)} ${bold(`${pkg}@${block.installedVersion}`)}${label}`,
  )

  if (isPatched !== false) {
    console.log('')
    continue
  }

  for (const parent of block.parents) {
    const key = `${parent.name}@${parent.version}`
    if (seenParent.has(key)) continue
    seenParent.add(key)

    const depType = parent.isDev ? dim(' (dev)') : ' (prod)'
    const isWorkspace = workspacePackages.has(parent.name)
    const workspaceNote = isWorkspace
      ? yellow(
          '  ⚠️  workspace package — edit its package.json directly, not an override',
        )
      : ''
    console.log(`\n    Parent: ${bold(key)}${depType}${workspaceNote}`)

    const info = runJSON(['info', `${parent.name}@${parent.version}`, '--json'])
    const range = allDeps(info)[pkg] ?? null

    if (!range) {
      console.log(
        `      ${yellow(
          '⚠️  Not a direct dep of this parent — deeper transitive.',
        )}`,
      )
      console.log(dim(`      Trace further: pnpm why ${pkg} --recursive`))
      continue
    }

    const rangeOk = satisfies(patchedVersion, range)
    const isPeer = isPeerDep(info, pkg)
    const peerNote = isPeer
      ? yellow("  ⚠️  peer dep — pnpm update won't re-resolve this")
      : ''
    console.log(
      `      Declared: ${pkg}@"${range}"  ${icon(rangeOk)}${peerNote}`,
    )

    if (rangeOk && !isPeer) {
      console.log(green(`      → FIX: pnpm update ${pkg} --recursive`))
      continue
    }

    // For workspace packages, pnpm info returns registry data (not local state),
    // so the "latest parent" lookup is meaningless. Always recommend editing directly.
    if (isWorkspace) {
      console.log(
        yellow(
          `      → FIX: bump ${pkg}@"${range}" to "${patchedVersion}" in ${parent.name}'s package.json`,
        ),
      )
      continue
    }

    // For peer deps with a flexible range, or any range that's too tight:
    // check the latest parent version to see if updating the parent fixes it.
    const latestInfo = runJSON(['info', `${parent.name}@latest`, '--json'])
    if (!latestInfo) {
      console.log(
        red(`      → FIX: pnpm override  "${key}>${pkg}": "${patchedVersion}"`),
      )
      continue
    }

    if (typeof latestInfo.version !== 'string') {
      console.log(
        red(`      → FIX: pnpm override  "${key}>${pkg}": "${patchedVersion}"`),
      )
      continue
    }
    const latestVer = latestInfo.version
    const latestRange = allDeps(latestInfo)[pkg] ?? null
    const isRemoved = !latestRange
    const latestOk = !isPeer
      ? latestRange
        ? satisfies(patchedVersion, latestRange)
        : false
      : true // for peer deps the parent version itself is what matters, not its declared range for pkg

    console.log(`      Latest:   ${parent.name}@${latestVer}`)

    const alreadyLatest = latestVer === parent.version
    const pinNote = isPeer
      ? dim(
          `  (if exact-pinned in workspace package.json, bump to ${latestVer} directly)`,
        )
      : ''

    if (rangeOk && isPeer) {
      // Parent's current range already covers the fix — just need to update the parent itself
      if (alreadyLatest) {
        console.log(
          yellow(
            `      Already at latest — run pnpm install to re-resolve peer deps`,
          ),
        )
      } else {
        console.log(
          green(
            `      → FIX: pnpm update ${parent.name} --recursive${
              pinNote ? '' : ''
            }`,
          ),
        )
        if (pinNote) console.log(dim(`             ${pinNote.trim()}`))
      }
    } else if (isRemoved) {
      console.log(green(`      Latest dropped ${pkg} entirely`))
      console.log(green(`      → FIX: pnpm update ${parent.name} --recursive`))
      if (isPeer && pinNote) console.log(dim(`             ${pinNote.trim()}`))
    } else if (latestOk) {
      if (!isPeer)
        console.log(
          `      Latest range: ${pkg}@"${latestRange}"  ${icon(true)}`,
        )
      console.log(green(`      → FIX: pnpm update ${parent.name} --recursive`))
      if (isPeer && pinNote) console.log(dim(`             ${pinNote.trim()}`))
    } else {
      console.log(
        `      Latest range: ${pkg}@"${latestRange}"  ${icon(false)}  ${dim(
          '(no upstream fix)',
        )}`,
      )
      console.log(
        red(`      → FIX: pnpm override  "${key}>${pkg}": "${patchedVersion}"`),
      )
    }
  }
  console.log('')
}
