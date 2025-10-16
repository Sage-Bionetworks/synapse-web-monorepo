#!/usr/bin/env node

// This is a build helper to ensure SageAccountWeb picks up the desired Vite mode.
// 1. Run the standard Nx build (to keep dependency artifacts up to date)
// 2. Immediately rebuild SageAccountWeb directly with the specified mode (development, staging, production) so Vite loads the correct env file.

const { execSync } = require('node:child_process')

const NX_BUILD_COMMAND = 'pnpm nx run-many --target=build'
const DIRECT_BUILD_COMMAND =
  'pnpm --filter SageAccountWeb --workspace-root run build -- --mode='

function normalizeTokens(tokens) {
  return tokens.filter(Boolean).filter(token => token !== '--')
}

function extractMode(tokens) {
  for (let i = 0; i < tokens.length; i += 1) {
    const token = tokens[i]

    if (token === '--mode' && tokens[i + 1]) {
      return tokens[i + 1]
    }

    const match = token.match(/^--mode(?:=(.+))?$/)
    if (match) {
      return match[1] ?? tokens[i + 1]
    }
  }

  return undefined
}

function parseNxTaskArgs(value) {
  if (!value) {
    return []
  }

  return value.split(/\s+/)
}

function resolveMode(rawArgs) {
  const cliMode = extractMode(normalizeTokens(rawArgs))
  const envMode = process.env.VITE_MODE || process.env.npm_config_mode
  const nxMode = extractMode(
    normalizeTokens(parseNxTaskArgs(process.env.NX_TASK_ARGS)),
  )

  return (cliMode || envMode || nxMode || 'development').trim()
}

function run(command, { inheritEnv = true } = {}) {
  console.log(`\n> ${command}`)
  execSync(command, {
    stdio: 'inherit',
    env: inheritEnv ? process.env : undefined,
    shell: true,
  })
}

function main() {
  const rawArgs = process.argv.slice(2)
  const mode = resolveMode(rawArgs)

  run(NX_BUILD_COMMAND)

  console.log(`\nResolved Vite mode: ${mode}`)
  run(`${DIRECT_BUILD_COMMAND}${mode}`)
}

main()
