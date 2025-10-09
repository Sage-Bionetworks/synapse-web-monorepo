import storybookThemeDecorator from '@sage-bionetworks/react-ui/utils/StorybookThemeDecorator'

// Re-export within synapse-react-client because (due to a bug in Storybook) we cannot directly import from a separate monorepo package in the `.storybook` directory
// This is in `synapse-react-client/src/components/utils` and not just imported directly in `.storybook/preview.tsx` -- this was a weird one:
// For some reason, Storybook cannot handle rewriting our imports to local monorepo packages in the `.storybook` directory only. In `synapse-react-client/.storybook/preview.tsx`, we wanted to import this decorator from `@sage-bionetworks/react-ui/utils/StorybookThemeDecorator`, but this wouldn't be successfully resolved by Storybook's bundler.
// As a workaround, we can 'proxy' it by importing it here in `synapse-react-client/src/...` and in `synapse-react-client/.storybook/preview.tsx`, we can import this file using a relative path import.

export default storybookThemeDecorator
