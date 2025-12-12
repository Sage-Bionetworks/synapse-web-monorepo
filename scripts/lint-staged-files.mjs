#!/usr/bin/env node

/**
 * Cross-platform script to run nx affected lint on staged files.
 * This is much faster than running eslint on all files because it:
 * 1. Only loads TypeScript project references for affected projects
 * 2. Leverages Nx caching for unchanged projects
 * 3. Prevents memory crashes from loading the entire monorepo
 */

import { execSync } from 'child_process';
import { existsSync } from 'fs';

// Get list of staged JS/TS files
function getStagedFiles() {
  try {
    const output = execSync('git diff --cached --name-only --diff-filter=ACMR', {
      encoding: 'utf-8',
    });
    return output
      .split('\n')
      .filter(file => file.match(/\.(js|jsx|ts|tsx)$/))
      .filter(Boolean);
  } catch {
    return [];
  }
}

// Main
const stagedFiles = getStagedFiles();

if (stagedFiles.length === 0) {
  console.log('No staged JS/TS files to lint');
  process.exit(0);
}

console.log('Linting affected projects for staged files...');

// Run nx affected lint with the staged files
const filesArg = stagedFiles.join(',');

try {
  execSync(`pnpm nx affected -t lint --files="${filesArg}" --fix`, {
    stdio: 'inherit',
  });
} catch (error) {
  console.error('Lint failed. Please fix the errors above.');
  process.exit(1);
}

// Re-add any files that were auto-fixed
for (const file of stagedFiles) {
  if (existsSync(file)) {
    try {
      execSync(`git add "${file}"`, { stdio: 'pipe' });
    } catch {
      // Ignore errors when re-adding files
    }
  }
}

process.exit(0);
