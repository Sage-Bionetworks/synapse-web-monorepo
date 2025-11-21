---
agent: agent
---

# Find Similar Components and Patterns

You are helping a developer discover existing components, hooks, and patterns in the Synapse web monorepo for reuse or reference.

## Process

**If a ticket ID is mentioned (e.g., PORTALS-1234), first fetch the ticket details using the Atlassian MCP server.**

Search for relevant components and **provide clickable file links** for everything you find.

## Response Format

### 🎯 Direct Matches

Components that do exactly what's needed:

- **`ComponentName`**
  - Key props, hooks, patterns

### 📚 Reference Patterns

Similar implementations to learn from:

- **`Pattern/Feature`** - Brief description

## Guidelines

- **Be concise** - Avoid repetition, focus on unique findings
- **Provide file links** - Make everything clickable for easy exploration
- **Show, don't prescribe** - Let the developer decide how to use findings
- Use semantic search for: "dialog", "modal", "form", "table", "button", "menu", "dropdown", "tooltip", "loading", "error", "validation", "fetch", "mutation"
