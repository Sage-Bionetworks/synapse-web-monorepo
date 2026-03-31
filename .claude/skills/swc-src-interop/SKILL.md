---
name: swc-src-interop
description: Answer questions about SWC ↔ SRC integration — connecting the GWT-based Synapse Web Client (SWC) with React components from synapse-react-client (SRC). Use this skill whenever the user asks about JsInterop, rendering React components in GWT views, prop classes for SRC components, Synapse context across applications, or any SWC/SRC interoperability topic. Trigger even if the user just mentions "SWC", "GWT", or asks why a React component isn't rendering in SWC.
argument-hint: '[integration question or component name]'
---

Before answering, you need the path to the local SynapseWebClient repo.

1. Check if the argument provided contains a path (e.g. `/Users/me/repos/SynapseWebClient`)
2. If not, ask the user: _"Where is your local SynapseWebClient repo? (e.g. `~/repos/SynapseWebClient`)"_
3. Store the answer as `$SWC_ROOT` and use it throughout this skill

Then read the authoritative guide at:

```
$SWC_ROOT/devdocs/ReactIntegration.md
```

If the file can't be found at that path:

1. Ask the user to confirm the directory location is correct
2. If it's still not found after confirmation, ask the user to either:
   - Update this skill file with the correct path, or
   - Fetch the documentation directly from GitHub: https://github.com/Sage-Bionetworks/SynapseWebClient/blob/develop/devdocs/ReactIntegration.md

Do NOT answer from general knowledge — the ReactIntegration.md doc is required.

## What the documentation covers

Use it as the primary source for:

- **JsInterop setup** — how to expose React components from SRC so GWT can call them
- **Prop classes** — the pattern for creating GWT-side prop objects that map to React component props
- **Component lifecycle** — mounting, updating, and unmounting React components from GWT views
- **Synapse context** — how authentication and client context flows between SWC and SRC

## How to answer

1. Read `$SWC_ROOT/devdocs/ReactIntegration.md` (or note its absence)
2. Locate the section most relevant to the question
3. Answer with concrete code patterns from the doc — GWT/Java on the SWC side and TypeScript on the SRC side, showing both ends of the integration when relevant
4. Flag anything that requires changes in both repos so the user knows where to make each change
