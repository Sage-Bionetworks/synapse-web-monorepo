import { Meta, StoryObj } from '@storybook/react-vite'
import { FieldDefinitionDrawer } from './FieldDefinitionDrawer'

const meta = {
  title: 'Components/FormTemplateEditor/FieldDefinitionDrawer',
  component: FieldDefinitionDrawer,
  args: {
    open: true,
    propertyKey: 'institution',
    existingKeys: new Set(['institution', 'summaryOfUse']),
    property: { type: 'string', title: 'Institution' },
    isRequired: false,
    context: 'ALWAYS',
    isUsedInSteps: false,
    isFirstClassCollision: false,
    onClose: () => console.log('onClose'),
    onUpdate: (patch: unknown) => console.log('onUpdate', patch),
    onRenameKey: (key: string) => console.log('onRenameKey', key),
    onReplace: (next: unknown) => console.log('onReplace', next),
    onChangeRequired: (isRequired: boolean) =>
      console.log('onChangeRequired', isRequired),
    onChangeContext: (context: unknown) =>
      console.log('onChangeContext', context),
    onRemove: () => console.log('onRemove'),
  },
} satisfies Meta<typeof FieldDefinitionDrawer>
export default meta

type Story = StoryObj<typeof FieldDefinitionDrawer>

export const TextField: Story = {}

export const ChoiceField: Story = {
  args: {
    propertyKey: 'preferredContactMethod',
    property: {
      type: 'string',
      title: 'Preferred contact method',
      enum: ['Email', 'Phone', 'Mail'],
    },
  },
}

export const FileField: Story = {
  args: {
    propertyKey: 'consentForm',
    property: { title: 'Signed consent form', format: 'synapse-filehandle-id' },
  },
}

/** A shape the simple editor can't represent (e.g. a `$ref` or a nested object) -- editing falls
 * back to the raw JSON Schema view instead of rendering type-specific controls. */
export const AdvancedUnsupportedShape: Story = {
  args: {
    property: { $ref: '#/definitions/Address', title: 'Mailing address' },
  },
}

/** This property's key collides with a first-class field (institution, PI, signing official,
 * accessor changes, DUC) that always renders statically outside the template. */
export const FirstClassKeyCollision: Story = {
  args: {
    isFirstClassCollision: true,
  },
}

/** No field is selected -- the drawer is open but has nothing to edit. */
export const NoFieldSelected: Story = {
  args: {
    propertyKey: null,
    property: null,
  },
}

/** Bound to one or more steps -- deleting also unbinds it, so the button label changes. */
export const BoundToSteps: Story = {
  args: {
    isUsedInSteps: true,
  },
}
