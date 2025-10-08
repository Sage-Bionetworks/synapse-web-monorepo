# SWC-SRC Interoperability Instructions

## Required Reading

**Before attempting to answer any questions about SWC → SRC or SRC → SWC integration, you MUST first read and reference the comprehensive documentation in:**

`SynapseWebClient/devdocs/ReactIntegration.md`

This document contains detailed instructions for:

- Using JsInterop to render React components from SRC in the GWT-based SWC application
- Creating prop classes for React components
- Exposing React components via JsInterop
- Managing React component lifecycle in GWT views
- Handling Synapse context between applications

## Key Integration Points

When working on SWC ↔ SRC integration:

1. **Always consult ReactIntegration.md first** - It contains the authoritative guide for React integration patterns
2. **Follow JsInterop patterns** - Use the established patterns for prop classes, component exposure, and rendering
3. **Maintain compatibility** - Ensure changes work with both the GWT-based SWC and React-based SRC architectures
4. **Test integration points** - Verify that components render correctly when called from SWC

## Common Integration Scenarios

- Adding new React components from SRC to SWC
- Updating existing component integrations
- Troubleshooting JsInterop issues
- Managing component props and context

For all of these scenarios, refer to the ReactIntegration.md documentation as your primary resource.
