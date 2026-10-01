import{o as e}from"./preload-helper-CsHsquCd.js";import{n as t,t as n}from"./FieldDefinitionDrawer-C6BXGcnw.js";var r,i,a,o,s,c,l,u,d;e((()=>{t(),r={title:`Components/FormTemplateEditor/FieldDefinitionDrawer`,component:n,args:{open:!0,propertyKey:`institution`,existingKeys:new Set([`institution`,`summaryOfUse`]),property:{type:`string`,title:`Institution`},isRequired:!1,context:`ALWAYS`,isUsedInSteps:!1,onClose:()=>console.log(`onClose`),onUpdate:e=>console.log(`onUpdate`,e),onRenameKey:e=>console.log(`onRenameKey`,e),onReplace:e=>console.log(`onReplace`,e),onChangeRequired:e=>console.log(`onChangeRequired`,e),onChangeContext:e=>console.log(`onChangeContext`,e),onRemove:()=>console.log(`onRemove`)}},i={},a={args:{propertyKey:`preferredContactMethod`,property:{type:`string`,title:`Preferred contact method`,enum:[`Email`,`Phone`,`Mail`]}}},o={args:{propertyKey:`dataTypes`,property:{type:`array`,title:`Data types requested`,items:{type:`string`,enum:[`Genomic`,`Clinical`,`Imaging`]},uniqueItems:!0}}},s={args:{propertyKey:`consentForm`,property:{title:`Signed consent form`,format:`synapse-filehandle-id`}}},c={args:{property:{$ref:`#/definitions/Address`,title:`Mailing address`}}},l={args:{propertyKey:null,property:null}},u={args:{isUsedInSteps:!0}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    propertyKey: 'preferredContactMethod',
    property: {
      type: 'string',
      title: 'Preferred contact method',
      enum: ['Email', 'Phone', 'Mail']
    }
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    propertyKey: 'dataTypes',
    property: {
      type: 'array',
      title: 'Data types requested',
      items: {
        type: 'string',
        enum: ['Genomic', 'Clinical', 'Imaging']
      },
      uniqueItems: true
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    propertyKey: 'consentForm',
    property: {
      title: 'Signed consent form',
      format: 'synapse-filehandle-id'
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    property: {
      $ref: '#/definitions/Address',
      title: 'Mailing address'
    }
  }
}`,...c.parameters?.docs?.source},description:{story:"A shape the simple editor can't represent (e.g. a `$ref` or a nested object) -- editing falls\nback to the raw JSON Schema view instead of rendering type-specific controls.",...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    propertyKey: null,
    property: null
  }
}`,...l.parameters?.docs?.source},description:{story:`No field is selected -- the drawer is open but has nothing to edit.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    isUsedInSteps: true
  }
}`,...u.parameters?.docs?.source},description:{story:`Bound to one or more steps -- deleting also unbinds it, so the button label changes.`,...u.parameters?.docs?.description}}},d=[`TextField`,`ChoiceField`,`MultipleChoiceField`,`FileField`,`AdvancedUnsupportedShape`,`NoFieldSelected`,`BoundToSteps`]}))();export{c as AdvancedUnsupportedShape,u as BoundToSteps,a as ChoiceField,s as FileField,o as MultipleChoiceField,l as NoFieldSelected,i as TextField,d as __namedExportsOrder,r as default};