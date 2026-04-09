# Contributing

## Working with Git Worktrees

Claude worktrees are created inside `.claude/worktrees/` (e.g. via `claude -w my-branch`). This directory is listed in `.gitignore` to prevent the worktree contents from appearing as untracked files in the parent repo.

### Opening a worktree in VS Code

Because `.claude/worktrees` is gitignored, VS Code's file indexer excludes worktree files from Cmd+P and file search when viewed from the parent window. The correct workflow is to open the worktree as its own VS Code window:

```sh
code .claude/worktrees/my-branch
```

This opens a new window rooted at the worktree. Cmd+P, the Explorer, and file search all work normally against the worktree's files. Each worktree inherits the repo's `.vscode/settings.json` via its own `.vscode/settings.json`, so editor settings are consistent.

### Prerequisite: install the `code` CLI

The `code` command must be on your PATH. If it isn't:

1. Open VS Code
2. Open the Command Palette: **Cmd+Shift+P**
3. Run: **Shell Command: Install 'code' command in PATH**

See the [VS Code command line docs](https://code.visualstudio.com/docs/editor/command-line#_launching-from-command-line) for details, including how to do this on Linux or Windows.
