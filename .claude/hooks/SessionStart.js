#!/usr/bin/env node
// SessionStart hook for Claude Code
//
// Notifies the user if pnpm install is still running in the background
// after a worktree session starts.
//
// Uses plain Node.js (no tsx) so it works even before pnpm install completes.

const fs = require('fs')

if (fs.existsSync('.pnpm-installing')) {
  process.stdout.write(
    JSON.stringify({
      systemMessage:
        'pnpm install is running in the background. Run: tail -f .pnpm-install.log to follow progress.',
    }) + '\n',
  )
}
