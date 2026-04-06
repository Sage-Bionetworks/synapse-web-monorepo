#!/usr/bin/env node
// WorktreeCreate hook for Claude Code
//
// Handles worktree creation for `claude -w`:
// reuses an existing branch if found, otherwise creates a new one,
// then runs pnpm install in the background.
//
// Input (JSON on stdin): { "name": "<slug>", "cwd": "<project-root>", ... }
// Output (stdout):       Absolute path to the created worktree directory

const { execFileSync, spawn } = require('child_process')
const fs = require('fs')
const path = require('path')

const input = JSON.parse(fs.readFileSync(process.stdin.fd, 'utf8'))
const { name, cwd } = input
const worktreePath = path.join(cwd, '.claude', 'worktrees', name)

// If the worktree directory already exists, reuse it as-is
if (fs.existsSync(worktreePath)) {
  process.stdout.write(worktreePath + '\n')
  process.exit(0)
}

// Reuse existing branch if it exists, otherwise create a new one
let branchExists = false
try {
  execFileSync('git', [
    '-C',
    cwd,
    'show-ref',
    '--verify',
    '--quiet',
    `refs/heads/${name}`,
  ])
  branchExists = true
} catch {
  // branch does not exist yet
}

if (branchExists) {
  execFileSync('git', ['-C', cwd, 'worktree', 'add', worktreePath, name], {
    stdio: ['ignore', 'ignore', 'inherit'],
  })
} else {
  execFileSync(
    'git',
    ['-C', cwd, 'worktree', 'add', '-b', name, worktreePath, 'HEAD'],
    { stdio: ['ignore', 'ignore', 'inherit'] },
  )
}

// Run pnpm install in the background; SessionStart hook will notify the user.
// Output is logged to .pnpm-install.log — tail it to follow progress.
//
// We wrap pnpm in a Node.js child process so the wrapper can delete the sentinel
// file when pnpm finishes. Spawning pnpm directly with child.unref() causes
// WorktreeCreate to exit before pnpm completes, so child.on('close') never fires.
const pidFile = path.join(worktreePath, '.pnpm-installing')
const logFile = fs.openSync(path.join(worktreePath, '.pnpm-install.log'), 'w')
const installWrapper = [
  `const {spawnSync} = require('child_process'), fs = require('fs');`,
  `spawnSync('pnpm', ['install'], {cwd: ${JSON.stringify(
    worktreePath,
  )}, stdio: 'inherit'});`,
  `fs.rmSync(${JSON.stringify(pidFile)}, {force: true});`,
].join(' ')
const child = spawn(process.execPath, ['-e', installWrapper], {
  cwd: worktreePath,
  detached: true,
  windowsHide: true,
  stdio: ['ignore', logFile, logFile],
})
child.unref()
if (child.pid != null) {
  fs.writeFileSync(pidFile, String(child.pid))
}

process.stdout.write(worktreePath + '\n')
